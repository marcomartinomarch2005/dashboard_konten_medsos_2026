/**
 * KONTEN KALENDER — Google Sheets Backend (pengganti Airtable + Apps Script proxy lama)
 *
 * Meniru bentuk respons Airtable REST API ({records:[{id, fields:{...}}]}) supaya
 * index.html butuh perubahan minimal. Sheet ini adalah sumber kebenaran tunggal —
 * tidak ada lagi Airtable maupun Agen Hermes yang menulis di jalur terpisah.
 *
 * SETUP: lihat google_apps_script/SETUP.md di repo untuk langkah lengkap.
 */

// --- CONFIG (diisi lewat Script Properties, lihat SETUP.md) ---
function cfg_(key) {
  return PropertiesService.getScriptProperties().getProperty(key);
}
function SHEET_ID_()   { return cfg_('SHEET_ID'); }
function SHEET_TAB_()  { return cfg_('SHEET_TAB') || 'konten_kalender'; }
// ----------------------------------------------------------------

// --- AKSES (Google Sign-In, lihat SETUP.md bagian 6) ---
/**
 * Verifikasi ID token Google Sign-In dari frontend lewat endpoint tokeninfo
 * Google (tidak butuh library crypto). Mengembalikan email kalau valid &
 * untuk Client ID yang benar, atau null kalau tidak valid/kedaluwarsa.
 */
function verifyIdToken_(idToken) {
  if (!idToken) return null;
  try {
    var res = UrlFetchApp.fetch(
      'https://oauth2.googleapis.com/tokeninfo?id_token=' + encodeURIComponent(idToken),
      { muteHttpExceptions: true }
    );
    if (res.getResponseCode() !== 200) return null;
    var info = JSON.parse(res.getContentText());
    var clientId = cfg_('GOOGLE_CLIENT_ID');
    if (!clientId || info.aud !== clientId) return null;
    if (info.email_verified !== 'true' && info.email_verified !== true) return null;
    return info.email;
  } catch (err) {
    return null;
  }
}

function isEmailAllowed_(email) {
  if (!email) return false;
  var raw = cfg_('ALLOWED_EMAILS') || '';
  var allowed = raw.split(',').map(function (s) { return s.trim().toLowerCase(); }).filter(Boolean);
  return allowed.indexOf(email.toLowerCase()) !== -1;
}

/**
 * Cek akses dari request (id_token dikirim sebagai query param oleh index.html).
 * Return email kalau boleh akses, atau null kalau ditolak.
 */
function authorizeRequest_(e) {
  var idToken = e && e.parameter && e.parameter.id_token;
  var email = verifyIdToken_(idToken);
  if (!email || !isEmailAllowed_(email)) return null;
  return email;
}
// ----------------------------------------------------------------

var COLUMNS = ['id', 'judul', 'tanggal', 'format', 'platform', 'status', 'catatan', 'tanggal_asal', 'drive_folder_url'];

function getSheet_() {
  var ss = SpreadsheetApp.openById(SHEET_ID_());
  var sheet = ss.getSheetByName(SHEET_TAB_());
  if (!sheet) throw new Error('Sheet tab "' + SHEET_TAB_() + '" tidak ditemukan.');
  return sheet;
}

function readAllRows_() {
  var sheet = getSheet_();
  var values = sheet.getDataRange().getValues();
  if (values.length < 2) return [];
  var header = values[0];
  var colIdx = {};
  header.forEach(function (h, i) { colIdx[h] = i; });

  var rows = [];
  for (var r = 1; r < values.length; r++) {
    var row = values[r];
    if (!row[colIdx['id']]) continue; // skip baris kosong
    var fields = {};
    COLUMNS.forEach(function (c) {
      if (c === 'id') return;
      var v = row[colIdx[c]];
      if (v instanceof Date) {
        // format tanggal/tanggal_asal jadi YYYY-MM-DD (hindari geser timezone)
        v = Utilities.formatDate(v, Session.getScriptTimeZone(), 'yyyy-MM-dd');
      }
      fields[c] = v === null || v === undefined ? '' : v;
    });
    rows.push({ id: String(row[colIdx['id']]), fields: fields, _row: r + 1 });
  }
  return rows;
}

function findRowIndexById_(id) {
  var sheet = getSheet_();
  var ids = sheet.getRange(2, 1, Math.max(sheet.getLastRow() - 1, 0), 1).getValues();
  for (var i = 0; i < ids.length; i++) {
    if (String(ids[i][0]) === String(id)) return i + 2; // baris sheet (1-indexed, +header)
  }
  return -1;
}

/**
 * GET — list semua record, selalu urut tanggal ascending.
 * Query params (opsional, sisa dari kontrak lama, boleh diabaikan): sort[...], offset
 */
function doGet(e) {
  try {
    if (!authorizeRequest_(e)) return jsonOutput_({ error: 'unauthorized' });
    var rows = readAllRows_();
    rows.sort(function (a, b) {
      return (a.fields.tanggal || '').localeCompare(b.fields.tanggal || '');
    });
    var records = rows.map(function (r) { return { id: r.id, fields: r.fields }; });
    return jsonOutput_({ records: records, offset: '' });
  } catch (err) {
    return jsonOutput_({ error: String(err) });
  }
}

/**
 * POST — create / update (PATCH) / delete, method dikirim via field "_method" di body.
 * id dikirim via query string (?id=...) untuk PATCH/DELETE, sesuai kontrak proxy lama.
 */
function doPost(e) {
  try {
    if (!authorizeRequest_(e)) return jsonOutput_({ error: 'unauthorized' });
    var payload = JSON.parse(e.postData.contents);
    var method = (payload._method || 'POST').toUpperCase();
    var id = (e.parameter && e.parameter.id) || payload.id || '';
    var fields = payload.fields || {};

    if (method === 'POST') {
      return jsonOutput_(createRecord_(fields));
    } else if (method === 'PATCH') {
      if (!id) return jsonOutput_({ error: 'Missing id untuk update' });
      return jsonOutput_(updateRecord_(id, fields));
    } else if (method === 'DELETE') {
      if (!id) return jsonOutput_({ error: 'Missing id untuk delete' });
      deleteRecord_(id);
      return jsonOutput_({ deleted: true, id: id });
    }
    return jsonOutput_({ error: 'Unknown method: ' + method });
  } catch (err) {
    return jsonOutput_({ error: String(err) });
  }
}

function createRecord_(fields) {
  var sheet = getSheet_();
  var id = Utilities.getUuid();
  var row = COLUMNS.map(function (c) {
    if (c === 'id') return id;
    return fields[c] !== undefined ? fields[c] : '';
  });
  sheet.appendRow(row);
  return { id: id, fields: fields };
}

function updateRecord_(id, fields) {
  var sheet = getSheet_();
  var rowIdx = findRowIndexById_(id);
  if (rowIdx === -1) throw new Error('Record ' + id + ' tidak ditemukan');

  var header = sheet.getRange(1, 1, 1, COLUMNS.length).getValues()[0];
  var current = sheet.getRange(rowIdx, 1, 1, COLUMNS.length).getValues()[0];
  var colIdx = {};
  header.forEach(function (h, i) { colIdx[h] = i; });

  Object.keys(fields).forEach(function (key) {
    if (colIdx[key] === undefined) return; // abaikan kolom tak dikenal (mis. field lama Airtable)
    current[colIdx[key]] = fields[key];
  });

  sheet.getRange(rowIdx, 1, 1, COLUMNS.length).setValues([current]);

  var merged = {};
  COLUMNS.forEach(function (c, i) { if (c !== 'id') merged[c] = current[i]; });
  return { id: id, fields: merged };
}

function deleteRecord_(id) {
  var sheet = getSheet_();
  var rowIdx = findRowIndexById_(id);
  if (rowIdx === -1) throw new Error('Record ' + id + ' tidak ditemukan');
  sheet.deleteRow(rowIdx);
}

function jsonOutput_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// ══════════════════════════════════════════════════════════════
// REMINDER TELEGRAM — pengganti cron Hermes (lihat SETUP.md untuk trigger)
// ══════════════════════════════════════════════════════════════

function sendTelegram_(text) {
  var token  = cfg_('TELEGRAM_BOT_TOKEN');
  var chatId = cfg_('TELEGRAM_CHAT_ID');
  if (!token || !chatId) {
    Logger.log('TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID belum diset di Script Properties.');
    return;
  }
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/sendMessage', {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({ chat_id: chatId, text: text }),
    muteHttpExceptions: true
  });
}

function statusIcon_(status) {
  return { 'Draft': '⚠️', 'Naskah selesai': '📝', 'Desain selesai': '🎨', 'Siap posting': '✅', 'Posted': '✅' }[status] || '•';
}

/** Trigger mingguan: Minggu 20:00 — deadline minggu ini + yang belum dikerjakan */
function reminderMingguan() {
  var rows = readAllRows_();
  var today = new Date();
  var in7 = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  var todayStr = Utilities.formatDate(today, Session.getScriptTimeZone(), 'yyyy-MM-dd');
  var in7Str = Utilities.formatDate(in7, Session.getScriptTimeZone(), 'yyyy-MM-dd');

  var counts = { Draft: 0, 'Naskah selesai': 0, 'Desain selesai': 0, 'Siap posting': 0, Posted: 0, overdue: 0 };
  var upcoming = [];
  rows.forEach(function (r) {
    var f = r.fields;
    if (counts[f.status] !== undefined) counts[f.status]++;
    if (f.status !== 'Posted' && f.tanggal && f.tanggal < todayStr) counts.overdue++;
    if (f.tanggal >= todayStr && f.tanggal <= in7Str && f.status !== 'Posted') {
      upcoming.push(f.tanggal + ' — ' + f.judul + ' (' + f.status + ')');
    }
  });

  var msg = '📋 STATUS KONTEN MINGGU INI @bpom.jayapura\n\n' +
    '✅ Sudah tayang: ' + counts.Posted + '\n' +
    '📝 Naskah selesai: ' + counts['Naskah selesai'] + '\n' +
    '⚠️ Belum dikerjakan: ' + counts.Draft + '\n' +
    '🔴 Terlambat: ' + counts.overdue + '\n\n' +
    'Deadline minggu ini:\n' +
    (upcoming.length ? upcoming.map(function (u) { return '• ' + u; }).join('\n') : '• (tidak ada)');

  sendTelegram_(msg);
}

/** Trigger mingguan: Jumat 15:00 — ringkasan progres minggu berjalan */
function laporanMingguan() {
  var rows = readAllRows_();
  var counts = { Draft: 0, 'Naskah selesai': 0, 'Desain selesai': 0, 'Siap posting': 0, Posted: 0 };
  rows.forEach(function (r) {
    var s = r.fields.status;
    if (counts[s] !== undefined) counts[s]++;
  });

  var msg = '📊 WEEKLY REPORT KONTEN @bpom.jayapura\n\n' +
    'Total konten terjadwal: ' + rows.length + '\n' +
    '✅ Sudah tayang: ' + counts.Posted + '\n' +
    '📝 Naskah selesai: ' + counts['Naskah selesai'] + '\n' +
    '🎨 Desain selesai: ' + counts['Desain selesai'] + '\n' +
    '📦 Siap posting: ' + counts['Siap posting'] + '\n' +
    '⚠️ Belum dikerjakan: ' + counts.Draft;

  sendTelegram_(msg);
}
