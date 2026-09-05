# Setup Google Sheets + Apps Script — Pengganti Airtable & Hermes

Panduan ini untuk **owner** (Marco). Langkah-langkah di bawah butuh akses Google
account dan tidak bisa dilakukan dari Claude Code — semua sudah disiapkan, tinggal
ikuti urutan ini.

---

## 1. Buat Google Sheet

1. Buka [sheets.google.com](https://sheets.google.com) → Blank spreadsheet
2. Ganti nama file jadi `konten_kalender_bpom_jayapura`
3. Ganti nama tab pertama (kanan-klik tab "Sheet1" di bawah) jadi `konten_kalender`
4. Isi baris pertama (header) persis seperti ini, kolom A–I:
   ```
   id | judul | tanggal | format | platform | status | catatan | tanggal_asal | drive_folder_url
   ```
5. Import data lama: **File → Import → Upload** → pilih `google_apps_script/konten_kalender_export.csv`
   (ada di folder ini, hasil migrasi dari Airtable — 55 record, Mei–Agustus 2026)
   - Import location: **Replace current sheet** (biar header tidak dobel — cek ulang header setelah import)
   - Separator type: Comma
6. Format kolom `tanggal` dan `tanggal_asal` sebagai Date: blok kolom C dan H → Format → Number → Date (format `YYYY-MM-DD`)
7. (Opsional, tapi disarankan) Tambah data validation dropdown di kolom `status` (kolom F):
   blok F2:F1000 → Data → Data validation → List of items:
   `Draft, Naskah selesai, Desain selesai, Siap posting, Posted`
8. Catat **Sheet ID** dari URL: `docs.google.com/spreadsheets/d/`**`INI_SHEET_ID`**`/edit`

---

## 2. Deploy Apps Script sebagai Web App

1. Di Google Sheet yang sama: **Extensions → Apps Script**
2. Hapus isi default `Code.gs`, paste seluruh isi file `google_apps_script/Code.gs` dari repo ini
3. Klik ikon jam (Triggers) di sidebar kiri — **belum**, dulu set config: klik ikon gerigi
   (Project Settings) → scroll ke **Script Properties** → **Add script property**, isi:
   | Property | Value |
   |---|---|
   | `SHEET_ID` | Sheet ID dari langkah 1.8 |
   | `SHEET_TAB` | `konten_kalender` |
   | `TELEGRAM_BOT_TOKEN` | token bot Telegram (lihat Langkah 4 di bawah) |
   | `TELEGRAM_CHAT_ID` | chat ID Telegram (lihat Langkah 4 di bawah) |
4. **Deploy → New deployment** → ikon gerigi → pilih **Web app**
   - Description: `konten kalender API`
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Klik **Deploy**, izinkan akses (Google akan minta konfirmasi karena script baru)
6. **Copy URL Web App** yang muncul (bentuknya `https://script.google.com/macros/s/XXXXX/exec`)

---

## 3. Sambungkan ke dashboard (index.html)

Kasih tahu Claude Code URL Web App dari langkah 2.6 — akan diisikan ke `API_URL`
di `index.html` (baris yang sebelumnya `PROXY_URL`), lalu di-push ke GitHub supaya
dashboard di GitHub Pages otomatis pakai backend baru.

**Test manual sebelum itu:** buka URL Web App di browser, tambahkan
`?action=list` — harus muncul JSON `{"records":[...]}` berisi 55 konten hasil
migrasi. Kalau muncul error izin, ulangi Deploy dengan "Who has access: Anyone".

---

## 4. Setup Bot Telegram (pengganti reminder Hermes)

Hermes sebelumnya pakai bot Telegram miliknya sendiri — sekarang butuh bot baru
khusus untuk Apps Script:

1. Di Telegram, chat ke **@BotFather** → `/newbot` → ikuti instruksi → catat **token**
   (bentuknya `123456:ABC-DEF...`)
2. Chat bot barumu (`/start`), lalu buka di browser:
   `https://api.telegram.org/bot<TOKEN>/getUpdates` → cari `"chat":{"id": ...}` → catat **chat ID**
3. Isi `TELEGRAM_BOT_TOKEN` dan `TELEGRAM_CHAT_ID` di Script Properties (langkah 2.3)

---

## 5. Aktifkan trigger otomatis (pengganti cron Hermes)

Di Apps Script editor → ikon jam (Triggers) di sidebar kiri → **Add Trigger**:

**Trigger 1 — Reminder mingguan (dulu: Minggu 20:00 via Hermes)**
- Function: `reminderMingguan`
- Event source: Time-driven
- Type: Week timer → **Every Sunday**, jam **8pm to 9pm**

**Trigger 2 — Weekly report (dulu: Jumat 15:00 via Hermes)**
- Function: `laporanMingguan`
- Event source: Time-driven
- Type: Week timer → **Every Friday**, jam **3pm to 4pm**

Test dulu manual: pilih function `reminderMingguan` di dropdown atas editor → klik ▶ Run
→ cek pesan masuk ke Telegram.

---

## 6. Batasi akses dashboard — Google Sign-In (undang orang tertentu saja)

Tanpa langkah ini, siapa pun yang tahu link dashboard bisa buka DAN mengedit data
(tidak ada proteksi bawaan di GitHub Pages maupun Apps Script "Anyone" access).
Langkah ini menambah layar login: hanya email yang kamu daftarkan yang bisa masuk.

1. Buka [console.cloud.google.com](https://console.cloud.google.com) (bisa pakai akun
   Google yang sama dengan pemilik Sheet). Kalau belum ada project, buat satu dulu
   (nama bebas, mis. `konten-kalender-bpom`).
2. **APIs & Services → OAuth consent screen**: pilih User Type **External**, isi nama
   app (mis. "Dashboard Konten BPOM Jayapura") dan email kontak, simpan (skip bagian
   scopes/test users, tidak wajib diisi untuk kasus ini).
3. **APIs & Services → Credentials → Create Credentials → OAuth client ID**:
   - Application type: **Web application**
   - Name: bebas (mis. `dashboard-konten-web`)
   - **Authorized JavaScript origins** → Add URI → isi origin dashboard GitHub Pages-mu
     (contoh: `https://marcomartinomarch2005.github.io` — **tanpa** path setelahnya)
   - Klik Create → copy **Client ID** yang muncul (bentuknya `xxxxx.apps.googleusercontent.com`)
4. Kembali ke Apps Script (Extensions → Apps Script di Sheet yang sama) → Project
   Settings → Script Properties → tambah 2 property baru:
   | Property | Value |
   |---|---|
   | `GOOGLE_CLIENT_ID` | Client ID dari langkah 3 (harus **persis sama** dengan yang dipakai di `index.html`) |
   | `ALLOWED_EMAILS` | daftar email Gmail yang diizinkan, pisah koma (mis. `owner@gmail.com,tim1@gmail.com`) |
5. Deploy ulang Web App kalau sudah pernah deploy sebelumnya (**Deploy → Manage
   deployments → ikon pensil → New version → Deploy**) supaya Script Properties baru
   ini kepakai.
6. Kasih tahu Claude Code Client ID dari langkah 3 — akan diisikan ke `GOOGLE_CLIENT_ID`
   di `index.html`.

**Kelola akses ke depannya:** tinggal edit isi `ALLOWED_EMAILS` di Script Properties
(tambah/hapus email, pisah koma) — tidak perlu deploy ulang untuk perubahan ini, cukup
save property-nya. Orang yang emailnya dihapus dari daftar otomatis ditolak saat request
API berikutnya (sesi yang sedang berjalan akan mentok begitu mereka refresh/reload).

---

## Setelah semua langkah di atas selesai

Kasih tahu Claude Code / AI sesi berikutnya. Yang perlu di-update di kode:
- `index.html` — isi `API_URL` dengan URL dari langkah 2.6, dan `GOOGLE_CLIENT_ID` dengan Client ID dari langkah 6.3
- `PROTOCOL.md` §1 dan §8 — sudah diupdate untuk arsitektur baru, tinggal isi Sheet ID kalau perlu direferensikan

Setelah dashboard terkonfirmasi jalan dengan data dari Sheets, `apps_script_proxy.js`
lama dan folder `worker/` (draft proxy Airtable) bisa dianggap arsip — sudah tidak
dipakai di arsitektur baru ini.
