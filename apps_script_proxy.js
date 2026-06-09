/**
 * ═══════════════════════════════════════════════════════════════
 * AIRTABLE PROXY — Google Apps Script
 * ═══════════════════════════════════════════════════════════════
 * 
 * CARA SETUP:
 * 1. Buka https://script.google.com → New Project
 * 2. Hapus isi Code.gs, paste seluruh kode ini
 * 3. Ganti AIRTABLE_API_KEY di bawah dengan Personal Access Token dari Airtable
 *    (buat di https://airtable.com/create/tokens)
 * 4. Deploy → New Deployment → Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy URL deployment, kasih ke AI untuk di-update di index.html
 *
 * ═══════════════════════════════════════════════════════════════
 */

// ─── CONFIG ────────────────────────────────────────────────
const AIRTABLE_API_KEY = 'PASTE_API_KEY_DISINI';
// ───────────────────────────────────────────────────────────

/**
 * Handle GET requests (list records, single record)
 */
function doGet(e) {
  const params = e.parameter;
  const base   = params.base;
  const table  = params.table;
  const id     = params.id || '';

  if (!base || !table) {
    return jsonOutput({ error: 'Missing base or table' }, 400);
  }

  // Build Airtable URL
  let url = 'https://api.airtable.com/v0/' + base + '/' + table;
  if (id) url += '/' + id;

  // Forward query params (sort, filter, offset, etc.)
  const skip = ['base', 'table', 'id'];
  const qs = Object.keys(params)
    .filter(k => !skip.includes(k))
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
  if (qs) url += '?' + qs;

  const options = {
    method: 'get',
    headers: { 'Authorization': 'Bearer ' + AIRTABLE_API_KEY },
    muteHttpExceptions: true
  };

  const response = UrlFetchApp.fetch(url, options);
  return ContentService
    .createTextOutput(response.getContentText())
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Handle POST requests (create, update, delete)
 * Frontend sends method via "action" field in body
 */
function doPost(e) {
  const payload = JSON.parse(e.postData.contents);
  const params  = e.parameter;

  const base   = params.base   || payload.base;
  const table  = params.table  || payload.table;
  const id     = params.id     || payload.id || '';
  const method = (payload._method || 'POST').toUpperCase();

  if (!base || !table) {
    return jsonOutput({ error: 'Missing base or table' }, 400);
  }

  // Build Airtable URL
  let url = 'https://api.airtable.com/v0/' + base + '/' + table;
  if (id) url += '/' + id;

  // Clean internal fields from payload before sending to Airtable
  const body = Object.assign({}, payload);
  delete body.base;
  delete body.table;
  delete body.id;
  delete body._method;

  const options = {
    method: method.toLowerCase(),
    headers: {
      'Authorization': 'Bearer ' + AIRTABLE_API_KEY,
      'Content-Type': 'application/json'
    },
    muteHttpExceptions: true
  };

  // DELETE doesn't need body
  if (method !== 'DELETE') {
    options.payload = JSON.stringify(body);
  }

  const response = UrlFetchApp.fetch(url, options);
  const text = response.getContentText();

  return ContentService
    .createTextOutput(text || '{"deleted":true}')
    .setMimeType(ContentService.MimeType.JSON);
}

function jsonOutput(obj, status) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
