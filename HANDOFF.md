# HANDOFF LOG

---

## Sesi 5 September 2026 (lanjutan) — Claude Sonnet 5 (Anthropic) via Claude Code

### Yang dikerjakan:
- Bersihkan kode legacy di `index.html`: hapus tabel lookup hardcode `DRIVE_FOLDER_BY_CODE` (cuma berlaku untuk 20 kode Juni 2026) dan fungsi `deriveDriveFolder()` yang menggunakannya — tidak relevan lagi karena `drive_folder_url` sekarang selalu diisi eksplisit lewat modal Edit dashboard. `toRow()` disederhanakan jadi langsung baca `f.drive_folder_url`.
- Klarifikasi alur kerja Drive Workspace dengan owner: **tidak akan dibangun otomasi Drive API/Apps Script** — Claude menulis naskah ke folder repo, owner upload manual ke Drive dan tempel link lewat dashboard. Disimpan sebagai memori proyek (`feedback_drive_workflow_manual`) supaya tidak diusulkan ulang di sesi berikutnya.
- Audit ulang folder `09_September_2026/` menemukan naskah v1 untuk **seluruh 12 konten September sudah lengkap** (isi penuh: hook, storytelling, caption IG+FB, catatan produksi, sumber verifikasi — dicek sample `K-JPR-2026-09-003 Wellfest 2026`), padahal status di dashboard masih "Belum Dikerjakan"/"Terlambat" untuk semuanya — gap administratif, bukan naskah yang belum dibuat.
- Owner memutuskan: update status ke `Naskah selesai` untuk semua 12 item, tanpa revisi isi. Karena endpoint Apps Script wajib `id_token` (Claude Code tidak bisa login Google atas nama owner) dan Claude in Chrome belum terhubung di sesi ini (extension belum diinstal/login), **owner sendiri yang melakukan update langsung di Google Sheets** mengikuti daftar kode/tanggal yang diberikan. **Owner mengonfirmasi update sudah selesai** (belum diverifikasi ulang lewat dashboard di sesi ini).

### Status saat ini:
- `index.html` — bersih dari lookup Drive hardcode Juni, sudah lolos sanity-check load lokal (tidak ada error console). **Belum di-push ke GitHub/GitHub Pages** — masih perubahan lokal.
- 12 konten September (`K-JPR-2026-09-001` s/d `012`) — naskah v1 sudah ada di repo (sejak sebelumnya, sumber tidak tercatat), status di Sheets **seharusnya** sudah `Naskah selesai` semua per konfirmasi owner — perlu diverifikasi ulang di sesi berikutnya lewat dashboard/endpoint.
- Drive Workspace untuk konten September masih kosong (`–`) — belum ada folder Drive dibuat, ini memang alur manual yang belum dijalankan.

### Yang belum selesai / perlu dilanjutkan:
1. **Push perubahan `index.html`** (pembersihan lookup Drive) ke GitHub supaya GitHub Pages redeploy — belum dilakukan sesi ini, tanya owner dulu sebelum commit/push (lihat catatan git untracked files di entri sebelumnya).
2. Verifikasi ulang di sesi berikutnya: buka dashboard, konfirmasi 12 item September memang tampil `Naskah selesai` (bukan cuma klaim owner) sebelum dianggap fakta di HANDOFF.
3. Item September #09-001 (1 Sep) dan #09-002 (4 Sep) sudah `Terlambat` sebelum naskah update ini — status alurnya sekarang `Naskah selesai` tapi tetap perlu keputusan owner soal jadwal (kerjakan tetap/geser/skip).
4. Buat folder Drive + isi link untuk 12 konten September (alur manual, lihat memori `feedback_drive_workflow_manual`).
5. Klarifikasi status untracked files di git — masih belum terjawab dari sesi-sesi sebelumnya.

### Catatan untuk sesi berikutnya:
- **Claude in Chrome belum tersambung di environment ini** — kalau butuh aksi yang perlu login Google (update Sheets/dashboard), harus diminta owner lakukan manual, tidak bisa diotomasi dari Claude Code kecuali extension itu di-setup dan owner login di dalamnya.
- Update status 12 konten September ke `Naskah selesai` didasarkan pada laporan lisan owner, bukan verifikasi langsung Claude — cross-check di awal sesi berikutnya.
- Perubahan `index.html` (hapus `DRIVE_FOLDER_BY_CODE`) ada di working tree lokal, belum di-commit/push — cek `git status` dulu sebelum asumsikan GitHub Pages sudah reflect ini.

---

## Sesi 5 September 2026 — Claude Sonnet 5 (Anthropic) via Claude Code

### Yang dikerjakan — konfirmasi dashboard live + dokumentasi menyusul commit yang belum tercatat
Sesi sebelumnya (`Sesi 4 September 2026, lanjutan sore`, di bawah) berhenti dengan status "kode siap tapi belum live". Antara sesi itu dan sesi ini ternyata sudah ada progres yang tidak tercatat di HANDOFF.md:

- Commit `9a8a108` (5 Sep 2026, 02:56) — tambah gerbang login Google Sign-In di `index.html` (dicek terhadap `ALLOWED_EMAILS` di Apps Script) dan isi `API_URL` dengan URL Web App Apps Script yang sudah dideploy (bukan placeholder lagi). Hapus `apps_script_proxy.js` lama.
- `PROTOCOL.md` §8 juga sudah diupdate sebelumnya untuk mencerminkan arsitektur login gate ini — tapi `HANDOFF.md` tidak pernah menulis entri sesi untuk pekerjaan itu.
- Ditemukan juga: folder `09_September_2026/` sudah berisi `RENCANA_KONTEN_SEPTEMBER_2026.md` lengkap + 12 folder `K-JPR-2026-09-001` s/d `012` dengan naskah v1 masing-masing (tema literasi masyarakat sehat: Pembuka Tema, Hari Pelanggan Nasional, Wellfest 2026, Sentra Info Obat & Makanan Palsu, Waspada Suplemen Kulit Ilegal, World Patient Safety Day, Bijak Konsumsi Pangan, Cegah Stunting Remaja Putri, Hari Apoteker Sedunia, BPOM Mobile, Antikorupsi, Penutup Tema) — juga tidak pernah tercatat di HANDOFF manapun sebelumnya.
- Verifikasi dashboard live di browser (Claude Code preview): halaman `https://marcomartinomarch2005.github.io/dashboard_konten_medsos_2026/` load 200 OK, gerbang login Google Sign-In tampil dengan benar. Backend `Code.gs` dicek langsung (`doGet`/`doPost` di baris 111–139) — memang mewajibkan `id_token` valid, balas `{error:"unauthorized"}` tanpa itu, sesuai desain.
- **Owner lalu login sendiri dan konfirmasi via screenshot:** berhasil masuk sebagai `marcomartinomarch2005@gmail.com`, status "Tersinkron · 13:33", filter September 2026 menampilkan 12 item persis sesuai `RENCANA_KONTEN_SEPTEMBER_2026.md` (item #1–#2 berstatus "Terlambat" karena tanggal 1 & 4 Sep sudah lewat, #3–#12 "Belum Dikerjakan"). Kolom "Drive Workspace" masih kosong (`–`) untuk semua item September.

### Status saat ini:
- **Dashboard resmi LIVE dan terkonfirmasi jalan** — login Google + data Google Sheets real-time terbukti berfungsi, bukan lagi asumsi dari kode. Ini menggantikan status "belum live" di entri sesi sebelumnya.
- Backend Apps Script Web App aktif di URL yang tercatat di `PROTOCOL.md` §8, terhubung ke Sheet `konten_kalender_bpom_jayapura`.
- Konten September 2026 sudah punya rencana + 12 naskah v1 lengkap, tapi status alur semuanya masih `Belum Dikerjakan`/`Terlambat` — belum ada progres desain/approval tercatat.
- 22 item masih untracked di git (termasuk `HANDOFF.md`, `PROTOCOL.md`, seluruh folder `08_Agustus_2026`, `09_September_2026`, `google_apps_script/`, `.claude/`, `.vscode/`, `_Template/`, `doc/`) — belum diklarifikasi ke owner apakah repo GitHub memang sengaja cuma melacak kode dashboard (`index.html`) atau perlu di-commit juga.

### Yang belum selesai / perlu dilanjutkan:
1. Item #1 (1 Sep) dan #2 (4 Sep) September sudah `Terlambat` — perlu keputusan owner: kerjakan tetap, geser jadwal, atau skip.
2. Isi `drive_folder_url`/Drive Workspace untuk 12 konten September (masih kosong semua).
3. Visual/desain untuk konten Agustus–September belum ada satupun yang tercatat.
4. Klarifikasi ke owner soal status untracked files di git (lihat catatan sesi 4 September sore) — masih belum terjawab.
5. Setelah owner konfirmasi mau commit dokumentasi & konten, baru lakukan `git add`/commit sesuai instruksi eksplisit.

### Catatan untuk sesi berikutnya:
- **Dashboard sudah live dan terverifikasi manusia** (bukan cuma kode) — jangan lagi laporkan "belum live" ke owner kecuali ada regresi baru.
- Kalau mau cek status konten terkini, dashboard live adalah sumber kebenaran utama — tapi karena endpoint sekarang butuh `id_token`, `curl` polos dari sesi Claude Code tidak akan bisa baca data (`{"error":"unauthorized"}` itu normal, bukan bug) — Claude Code tidak bisa login Google atas nama owner, jadi verifikasi data terkini harus lewat owner langsung di browser atau lewat screenshot yang dibagikan.
- `PROTOCOL.md` §8 sudah sinkron dengan status ini (per 5 September 2026).

---

## Sesi 4 September 2026 (lanjutan, sore) — Claude Sonnet 5 (Anthropic) via Claude Code

### Yang dikerjakan — migrasi arsitektur: Airtable + Agen Hermes → Google Sheets + Apps Script
Atas permintaan owner: hilangkan Agen Hermes sepenuhnya, ganti Airtable dengan Google
Sheets (tanpa batas tier gratis), dashboard & naskah dikerjakan lewat Claude Code saja.

- Export penuh 55 record dari Airtable (`appZbKbl6inYv8y2m` / `tblfl6n2LU6bGUR5P`) via Airtable MCP connector → `google_apps_script/konten_kalender_export.csv`
  - Breakdown status saat export: `Naskah selesai` 30, `Posted` 10, `Draft` 15 (belum ada satupun `Desain selesai`/`Siap posting`)
- Tulis backend baru `google_apps_script/Code.gs` — Google Apps Script Web App di atas Google Sheets, meniru bentuk respons Airtable (`{records:[{id, fields:{...}}]}`) supaya `index.html` tidak perlu dirombak total. Termasuk fungsi `reminderMingguan()` dan `laporanMingguan()` pengganti cron Telegram Hermes.
- Tulis `google_apps_script/SETUP.md` — panduan manual untuk owner (buat Sheet, import CSV, deploy Web App, setup bot Telegram baru, pasang 2 time-trigger). **Langkah-langkah ini belum dieksekusi** — perlu aksi manual owner di akun Google, tidak bisa dilakukan dari Claude Code.
- Update `index.html`: `AT_BASE`/`AT_TABLE`/`PROXY_URL` (Airtable) → `API_URL` tunggal (placeholder `'GANTI_DENGAN_URL_WEB_APP_APPS_SCRIPT'`, belum diisi), `atFetch()` disederhanakan (drop base/table params), teks UI "Airtable" → "Google Sheets"
- Hapus `apps_script_proxy.js` (proxy Airtable lama, sudah tergantikan `Code.gs`) dan folder `worker/` (draft Cloudflare Worker, tujuannya jadi proxy Airtable yang sekarang sudah tidak ada)
- Tandai `_Template/HERMES_CRON_SETUP.md` obsolete (catatan di bagian atas file, isi tetap disimpan sebagai arsip)
- Update `PROTOCOL.md` §1 (cek status via `curl "<API_URL>?action=list"`, bukan Airtable MCP) dan §8 (arsitektur baru lengkap + daftar yang sudah diarsipkan: Airtable, Hermes, worker/, Netlify, Supabase)

### Status saat ini:
- **Kode sudah siap tapi BELUM live** — dashboard di GitHub Pages masih memanggil `API_URL` placeholder, akan gagal load sampai owner deploy Apps Script dan URL-nya diisikan
- Data Airtable lama (55 record) sudah diekspor lengkap ke CSV, aman untuk migrasi kapan saja
- Google Sheet baru belum dibuat — masih di tahap panduan (`google_apps_script/SETUP.md`)
- Bot Telegram baru untuk reminder juga belum dibuat — Hermes sebelumnya pakai bot sendiri yang ikut hilang saat Hermes dicabut

### Yang belum selesai / perlu dilanjutkan:
1. **Owner jalankan `google_apps_script/SETUP.md` langkah 1–5** (buat Sheet, import CSV, deploy Apps Script, setup bot Telegram, pasang trigger)
2. Setelah dapat URL Web App dari deploy: isi ke `index.html` (`const API_URL`) dan `PROTOCOL.md` §8 (`<ISI_SETELAH_DEPLOY>`), lalu push ke GitHub supaya GitHub Pages redeploy
3. Test dashboard live: pastikan 55 konten muncul, coba tambah/edit/hapus/reschedule satu konten uji
4. Test trigger Telegram manual (`reminderMingguan` / `laporanMingguan`) sebelum mengandalkan jadwal otomatis
5. Setelah dashboard terkonfirmasi jalan di Sheets: hapus Airtable base lama (opsional, tanya owner dulu) — sampai saat ini datanya dibiarkan utuh sebagai backup
6. Item lama yang masih terbuka dari entri sebelumnya (visual/desain Juli–Agustus, `drive_folder_url` kosong, rencana konten September) — lihat entri di bawah

### Catatan untuk sesi berikutnya:
- **Jangan asumsikan dashboard sudah live di Sheets** — cek dulu apakah `API_URL` di `index.html` sudah diisi (bukan placeholder) sebelum melapor status ke owner
- Kontrak API baru sengaja dibuat mirip Airtable (`records[].fields`) — kalau ke depan mau ubah bentuk data, update dua sisi sekaligus: `google_apps_script/Code.gs` dan bagian `toRow()`/`atFetch()` di `index.html`
- File referensi migrasi: `google_apps_script/Code.gs`, `google_apps_script/SETUP.md`, `google_apps_script/konten_kalender_export.csv`
- Ditemukan saat audit: repo git ini ternyata hanya melacak 4 file (`index.html`, `apps_script_proxy.js` yang baru dihapus, `.gitignore`, `08_Agustus_2026/RENCANA_KONTEN_AGUSTUS_2026.md`) — PROTOCOL.md, HANDOFF.md, semua naskah, dan folder `google_apps_script/` baru masih **untracked**. Perlu diklarifikasi ke owner apakah ini disengaja (repo GitHub cuma untuk kode dashboard) sebelum sesi berikutnya melakukan `git add`/commit sembarangan.

---

## Sesi 4 September 2026 — Claude Sonnet 5 (Anthropic) via Claude Code

### Yang dikerjakan:
- Audit seluruh dokumen proyek terhadap `doc/Alur-Konten-BPOM-Jayapura.pdf` (diagram alur editorial + arsitektur sistem, dibuat owner)
- Temuan: `HANDOFF.md` tidak diupdate sejak 19 Mei 2026 meski git log menunjukkan aktivitas sampai 31 Juli 2026 — melanggar aturan PROTOCOL.md §6 ("wajib tulis ulang HANDOFF.md tiap akhir sesi")
- Update `PROTOCOL.md` §2 (struktur folder, sekarang per-item `K-JPR-YYYY-MM-NNN/`) dan §8 (dashboard sekarang GitHub Pages + Apps Script Proxy, bukan Netlify/dashboard.html; tambah referensi Cloudflare Worker draft dan titik rawan race condition)
- Rekonstruksi ringkasan periode 20 Mei–31 Juli 2026 di bawah ini, **dari git log + isi file**, karena sesi-sesi asli tidak menulis handoff — bukan catatan sesi langsung, jadi mungkin ada keputusan/riset owner yang tidak tercermin

### Rekonstruksi periode 20 Mei – 31 Juli 2026 (dari git log, bukan catatan sesi asli):
- **9 Juni 2026:** Migrasi jalur proxy dashboard dari Netlify ke Google Apps Script (commit `71ee823` dst.) — beberapa iterasi fix CORS/redirect sampai stabil di `PROXY_URL` Apps Script yang sekarang dipakai
- **10–11 Juni 2026:** Tambah kolom "Drive Workspace" di dashboard — link folder Google Drive per konten Juni
- **15 Juni 2026 — insiden:** seluruh edit dashboard sempat gagal tersimpan. Sebab: proxy tetap membalas HTTP 200 walau Airtable menolak field `drive_folder` yang tak dikenal, ditumpuk race condition dengan Agen Hermes yang menimpa status/catatan di record yang sama nyaris bersamaan. Diperbaiki commit `a06095d` (simpan field Drive folder dengan aman) dan `b57b265` (hindari CORS preflight saat save)
- **Juli 2026:** Konten `K-JPR-2026-07-001_Pembuka_Tema` dibuat (hanya 1 folder konten Juli tercatat di repo — bulan Juli tampaknya tidak lengkap didokumentasikan)
- **31 Juli 2026:** Rencana konten Agustus dibuat lengkap — `RENCANA_KONTEN_AGUSTUS_2026.md` (tema "Merdeka dengan Obat dan Makanan Tepercaya", 7 agenda prioritas, kalender 12 item), 12 folder `K-JPR-2026-08-00N_...` dibuat dengan naskah v1 masing-masing, dashboard default filter diarahkan ke Agustus, tanggal Maulid Nabi dikonfirmasi 25 Agustus 2026 sesuai SKB 3 Menteri

### Status konten Agustus 2026 (dari file lokal — 12 item, naskah v1 semua ada, BELUM ada catatan approval owner):
- 08-001 Pembuka Tema Merdeka (3 Agu), 08-002 SIGAP OM (6 Agu), 08-003 Waspada Produk Palsu (10 Agu), 08-004 Hari UMKM SAPA UMK (12 Agu), 08-005 Hari Pramuka (14 Agu) → naskah v1 ada
- 08-006 HUT RI ke-81 (17 Agu) dan 08-007 Merdeka dari Produk Ilegal Reels (17 Agu) → naskah v1 ada — **prioritas tertinggi, desain seharusnya selesai paling lambat 14 Agustus** (sudah lewat per hari ini)
- 08-008 BPOM Mobile (19 Agu), 08-009 Cegah Stunting (21 Agu), 08-010 Maulid Nabi (25 Agu, tanggal terkonfirmasi), 08-011 Bijak Konsumsi Pangan (27 Agu), 08-012 Antikorupsi Penutup Agustus (31 Agu) → naskah v1 ada
- Seluruh `drive_folder_url` di Airtable masih kosong per catatan `RENCANA_KONTEN_AGUSTUS_2026.md`
- Belum ada satupun visual/desain untuk Juli–Agustus (sejauh yang tercatat di repo)
- September–Desember 2026: folder ada tapi kosong, belum ada rencana/naskah sama sekali

### Yang belum selesai / perlu dilanjutkan:
- **Cek status real di Airtable** — daftar di atas hanya dari file lokal (naskah v1 ada), bukan status approval/desain/posting sebenarnya, karena tidak ada handoff yang mencatatnya
- Visual/desain seluruh konten Juli–Agustus, termasuk 08-006/08-007 yang sudah lewat target desain
- Isi `drive_folder_url` untuk 12 konten Agustus
- Putuskan nasib Cloudflare Worker (`worker/`) — lanjut disambungkan ke `index.html` sebagai pengganti Apps Script Proxy, atau dibuang
- September 2026 (bulan berjalan) belum punya rencana konten sama sekali — perlu segera dibuat seperti `RENCANA_KONTEN_AGUSTUS_2026.md`

### Catatan untuk sesi berikutnya:
- **HANDOFF.md sempat tidak diupdate ~3,5 bulan (20 Mei–31 Jul 2026)** — entri di atas hasil rekonstruksi dari git log, bukan laporan sesi asli. Detail yang tidak tercermin di git (keputusan owner, riset yang dipakai, alasan revisi naskah) kemungkinan hilang.
- **Wajib akhiri tiap sesi dengan `akhiri sesi`** agar hal ini tidak terulang — lihat PROTOCOL.md §0/§6
- Dashboard sekarang lewat GitHub Pages + Apps Script Proxy, bukan Netlify — PROTOCOL.md §8 sudah diupdate, jangan rujuk info lama di entri sesi di bawah soal Netlify/`dashboard.html`
- Struktur folder konten sekarang per-item (`K-JPR-YYYY-MM-NNN_Nama/`), bukan `Konten_Siap_Posting/` flat — lihat PROTOCOL.md §2
- Titik rawan: Agen Hermes menulis ke Airtable bypass proxy, berpotensi race condition dengan edit manual dashboard — lihat `doc/Alur-Konten-BPOM-Jayapura.pdf`

---

## Sesi 19 Mei 2026 — Claude Sonnet 4.6 (Anthropic) via Claude Code

### Yang dikerjakan:
- Koneksi folder konten ke Hermes Workspace Docker container (mount ke /opt/data/konten_bpom)
- Draft naskah #5 BPOM Mobile → `05_Mei_2026/Konten_Siap_Posting/naskah_bpom-mobile_19mei2026_v1.md`
- Draft naskah #7 Kenali OOT → `05_Mei_2026/Konten_Siap_Posting/naskah_kenali-oot_19mei2026_v1.md`
- Draft naskah Stunting #2 (Gizi Ibu Hamil) → `05_Mei_2026/Konten_Siap_Posting/naskah_stunting-2-gizi-ibu-hamil_19mei2026_v1.md`
- Buat panduan setup cron Telegram → `_Template/HERMES_CRON_SETUP.md`
- Riset data: BPOM Mobile (fitur scan barcode), OOT (tramadol/triheksifenidil, 80% remaja)

### Status naskah baru:
- Naskah #5 BPOM Mobile → `Naskah selesai` (perlu review owner)
- Naskah #7 Kenali OOT → `Naskah selesai` (perlu review owner)
- Naskah Stunting #2 → `Naskah selesai` (perlu review owner, jadwal tayang belum ditentukan)
- Naskah #6 UMKM SAPA UMK (21 Mei) → `Naskah selesai` (perlu review owner)

### Yang belum selesai / perlu dilanjutkan:
- Naskah #6 UMKM Pangan Lokal — owner perlu konfirmasi angle/topik spesifik
- Naskah #8 Greeting Harkitnas (20 Mei) → `Naskah selesai`
- Naskah #9 Kosmetik Ilegal (23 Mei) → `Naskah selesai`
- Naskah #10 Jamu Nasional (27 Mei) → `Naskah selesai`
- Naskah #11 Stunting #3 Jajanan Sekolah (28 Mei) → `Naskah selesai`
- Naskah #12 Hari Tanpa Tembakau (31 Mei) → `Naskah selesai`
- Setup Telegram home channel — lihat `_Template/HERMES_CRON_SETUP.md` Langkah 1
- Cron reminder mingguan — bisa diaktifkan setelah home channel di-set
- Visual/desain seluruh naskah belum ada

### Catatan untuk sesi berikutnya:
- Folder konten sekarang terhubung ke Hermes di path `/opt/data/konten_bpom`
- Di Hermes chat, gunakan perintah: `Baca PROTOCOL.md di /opt/data/konten_bpom`
- Untuk setup cron Telegram: ikuti panduan di `_Template/HERMES_CRON_SETUP.md`
- Seri stunting: episode #1 ✅, #2 ✅, #3–#5 belum (ide hook ada di naskah stunting v2)
- Semua naskah baru masih v1 — perlu review dan approval owner sebelum ke desainer

---

## Sesi 16 Mei 2026 (malam ke-3) — Claude Sonnet 4.6 (Anthropic)

### Yang dikerjakan:
- Setup koneksi GitHub via Personal Access Token (PAT) menggunakan bash shell
- Verifikasi akun GitHub: `marcomartinomarch2005`, repo `dashboard_konten_medsos_2026` (private)
- Deteksi ketidaksinkronan: `dashboard.html` lokal (478 baris) lebih baru dari `index.html` GitHub (357 baris)
- Push `dashboard.html` lokal ke GitHub sebagai `index.html` — 207 baris ditambah, 86 diupdate
- Commit message: "Update dashboard: full Bahasa Indonesia, integrasi Airtable MCP"
- Netlify otomatis redeploy dari commit terbaru

### Status file:
- `dashboard.html` (lokal) & `index.html` (GitHub/Netlify) → **Tersinkron**, commit `6d08e0e`
- `PROTOCOL.md` → Tidak diubah sesi ini, masih valid
- `HANDOFF.md` → Diupdate sesi ini

### Status konten (dari Airtable — perlu dicek ulang di sesi berikutnya):
- Konten #1 Greeting Hari Buruh (1 Mei) → `Sudah Tayang`
- Konten #2 Greeting Hari Pendidikan (2 Mei) → `Sudah Tayang`
- Konten #3 Greeting Kenaikan Yesus Kristus (14 Mei) → `Sudah Tayang`
- Konten #4 Cegah Stunting dari Piring Keluarga (16 Mei) → `Naskah selesai`
- Konten #5 BPOM Mobile (reschedule 17 Mei) → `Belum Dikerjakan` — **naskah belum ada**
- Konten #6 UMKM Pangan Lokal (reschedule 18 Mei) → `Belum Dikerjakan` — **naskah belum ada**
- Konten #7 Kenali OOT (reschedule 19 Mei) → `Belum Dikerjakan` — **naskah belum ada**
- Konten #8–#12 (20–31 Mei) → `Belum Dikerjakan`

### Yang belum selesai / perlu dilanjutkan:
- Naskah konten #5, #6, #7 — tanggal sudah lewat/sangat dekat, prioritas tinggi
- Naskah konten #8–#12 (20–31 Mei) belum ada sama sekali
- Visual/desain seluruh konten belum ada
- Weekly report belum dibuat
- Seri stunting episode #2–#5 belum dikerjakan

### Catatan untuk sesi berikutnya:
- **Workflow push GitHub sekarang bisa lewat bash** — tidak perlu copy-paste manual ke GitHub editor
  - Pull GitHub → lokal: clone dari `https://github.com/marcomartinomarch2005/dashboard_konten_medsos_2026.git` lalu copy `index.html` ke `dashboard.html`
  - Push lokal → GitHub: copy `dashboard.html` ke clone di `/tmp/gh_sync/index.html`, commit, push
  - PAT tersimpan di git config `/tmp/gh_sync` — hanya aktif selama sesi, perlu diinput ulang di sesi baru jika dibutuhkan
- Dashboard live di `dashboardkonten2026.netlify.app`, tersinkron Airtable real-time
- Cek Airtable di awal sesi (sesuai PROTOCOL.md) untuk status konten terkini
- Stunting seri 5 episode — episode #1 selesai, ide hook #2–#5 ada di `naskah_carousel_stunting_16mei2026_v2.md`

---

## Sesi 16 Mei 2026 (malam ke-2) — Claude Sonnet 4.6 (Anthropic)

### Yang dikerjakan:
- Fix 404 di Netlify: rename `dashboard.html` → `index.html` di GitHub repo (dilakukan manual oleh owner via GitHub UI)
- Dashboard berhasil live di `dashboardkonten2026.netlify.app` dan tersinkron dengan Airtable
- Terjemahkan seluruh istilah asing ke Bahasa Indonesia di `dashboard.html`/`index.html`:
  - Overdue → Terlambat
  - Reschedule → Geser Jadwal
  - Rescheduled → Dijadwalkan ulang
  - Refresh → Perbarui
  - Posted → Sudah Tayang
  - Siap Posting → Siap Tayang
  - Draft (label kartu) → Belum Dikerjakan
  - Powered by → Ditenagai oleh
- Tambah fungsi `statusLabel()` agar badge status di tabel juga tampil dalam Bahasa Indonesia
- Perbaiki dropdown status di modal Edit/Tambah: label Indonesia, value tetap sesuai Airtable
- Jelaskan arsitektur sistem dashboard (Airtable + HTML + GitHub + Netlify) kepada owner
- Jelaskan alasan file harus bernama `index.html` di Netlify
- Jelaskan kapasitas tier free Netlify dan Airtable untuk kebutuhan jangka panjang

### Status file:
- `dashboard.html` (lokal) & `index.html` (GitHub/Netlify) → **Live dan tersinkron**, seluruh teks Bahasa Indonesia
- `supabase_setup.sql` → Tidak aktif digunakan (digantikan Airtable), bisa diabaikan
- `PROTOCOL.md` → Tidak diubah sesi ini, masih valid
- `05_Mei_2026/Konten_Siap_Posting/naskah_carousel_stunting_16mei2026_v2.md` → Tidak diubah, final

### Status konten Mei 2026 (dari dashboard Airtable):
- Konten #1 Greeting Hari Buruh (1 Mei) → `Sudah Tayang`
- Konten #2 Greeting Hari Pendidikan (2 Mei) → `Sudah Tayang`
- Konten #3 Greeting Kenaikan Yesus Kristus (14 Mei) → `Sudah Tayang`
- Konten #4 Cegah Stunting dari Piring Keluarga (16 Mei) → `Naskah selesai`
- Konten #5 BPOM Mobile (di-reschedule ke 17 Mei) → `Belum Dikerjakan`
- Konten #6 UMKM Pangan Lokal (di-reschedule ke 18 Mei) → `Belum Dikerjakan`
- Konten #7 Kenali OOT (di-reschedule ke 19 Mei) → `Belum Dikerjakan`
- Konten #8–#12 (20–31 Mei) → `Belum Dikerjakan`

### Yang belum selesai / perlu dilanjutkan:
- Konten #5, #6, #7 sudah di-reschedule — naskah belum ada, tanggal baru sudah dekat/lewat
- Konten #8–#12 (20–31 Mei) belum ada naskah sama sekali
- Seluruh konten belum ada visual/desain
- Weekly report belum dibuat

### Catatan untuk sesi berikutnya:
- **Dashboard sudah live** di `dashboardkonten2026.netlify.app` — ini sumber kebenaran tunggal
- File lokal `dashboard.html` dan file GitHub `index.html` harus selalu disinkronisasi manual jika ada perubahan kode — copy-paste ke GitHub editor lalu commit
- Airtable token tertanam di file HTML — repo GitHub sudah private, aman untuk kebutuhan internal
- Tier free Netlify dan Airtable cukup untuk 6–7 tahun ke depan tanpa upgrade
- **Wajib tanya owner sebelum menulis naskah:** *"Perlu riset data dari internet dulu?"*
- Pendekatan naskah: emotional hook + storytelling + 1 poin kunci (lihat `PROTOCOL.md` bagian 3)
- Seri stunting 5 episode — episode #1 selesai, ide hook #2–#5 ada di `naskah_carousel_stunting_16mei2026_v2.md`

---

## Sesi 16 Mei 2026 (malam) — Claude Sonnet 4.6 (Anthropic)

### Yang dikerjakan:
- Review kalender editorial Mei 2026 dari Google Sheets (12 konten)
- Buat naskah carousel konten #7 "Cegah Stunting dari Piring Keluarga":
  - v1 ditolak (pendekatan informatif/list)
  - v2 final: storytelling emotional, 1 poin kunci (protein 1.000 HPK), contoh konkret (nasi+mie instan) terverifikasi data Survei Kompas & jurnal UGM
- Buat `PROTOCOL.md` — protokol kolaborasi multi-AI model
- Buat `HANDOFF.md` — sistem log pergantian sesi
- Sinkronisasi data Google Sheets ke `dashboard.html` (koreksi item #1–2 dan #8–12 yang meleset dari data Kiro)
- Migrasi dashboard dari localStorage ke **Supabase** (database cloud)
- Buat `supabase_setup.sql` — schema tabel + RLS policy + data awal 12 konten
- Update `PROTOCOL.md`: Google Sheets digeser ke arsip, dashboard.html jadi satu-satunya sumber kebenaran
- Definisi trigger `akhiri sesi` dan mekanisme pembukaan sesi manual

### Status file:
- `dashboard.html` → Updated, terintegrasi Supabase JS — **belum aktif** (menunggu owner isi SUPABASE_URL & SUPABASE_KEY)
- `supabase_setup.sql` → Siap dijalankan di Supabase SQL Editor
- `PROTOCOL.md` → Final, mencakup trigger, standar penulisan, dan referensi
- `05_Mei_2026/Konten_Siap_Posting/naskah_carousel_stunting_16mei2026_v2.md` → Final, siap ke desainer

### Status konten Mei 2026:
- Konten #7 Stunting (16 Mei) → `Naskah selesai`
- Konten #1–#6 → `Draft`, semua overdue
- Konten #8–#12 → `Draft`, belum dikerjakan

### Yang belum selesai / perlu dilanjutkan:
- **Prioritas segera:** Owner perlu setup Supabase (jalankan SQL, isi credentials di dashboard.html) dan deploy ke GitHub Pages
- Konten #1–#6 semua overdue — owner perlu putuskan: skip, reschedule, atau kerjakan tetap
- Konten #8–#12 (20–31 Mei) belum ada naskah
- Seluruh konten belum ada visual/desain
- Weekly report 11–15 Mei belum dibuat

### Catatan untuk sesi berikutnya:
- Dashboard belum live — dua langkah yang harus dilakukan owner dulu: (1) jalankan `supabase_setup.sql` di Supabase, (2) isi SUPABASE_URL & SUPABASE_KEY di `dashboard.html`, lalu push ke GitHub Pages
- **Wajib tanya owner sebelum menulis naskah:** *"Perlu riset data dari internet dulu?"*
- Pendekatan naskah: emotional hook + storytelling + 1 poin kunci. Detail di `PROTOCOL.md` bagian 3
- Seri stunting 5 episode — episode #1 selesai. Ide hook episode #2–#5 ada di bagian bawah `naskah_carousel_stunting_16mei2026_v2.md`
- Google Sheets kalender tidak lagi jadi acuan aktif — semua tracking ada di dashboard

---

## Sesi 16 Mei 2026 (sore) — Claude Opus 4.7 (Anthropic)

### Yang dikerjakan:
- Baca `PROTOCOL.md` dan `HANDOFF.md` sesi sebelumnya
- Buat `dashboard.html` di root folder — dashboard interaktif untuk monitoring & reschedule konten
  - Pre-loaded data konten #1–#12 Mei 2026 dari kalender editorial
  - Konten #7 (Stunting 16 Mei) ditandai "Naskah selesai", sisanya "Draft"

### Status saat ini:
- `dashboard.html` → Selesai dibuat, siap pakai (double-click untuk buka di browser)
- Konten #7 Stunting (16 Mei) → `Naskah selesai` (tidak berubah dari sesi sebelumnya)
- Konten #1–#6, #8–#12 → masih `Draft`

### Fitur dashboard.html:
- Summary cards: jumlah per status + counter overdue (otomatis merah jika lewat jadwal)
- Tambah / Edit / Hapus konten via modal
- Reschedule konten overdue dengan tracking tanggal asal + alasan
- Filter per bulan, status, platform, dan search by judul
- Export / Import JSON untuk backup data
- Data tersimpan di `localStorage` browser (persistent, tidak hilang saat tab ditutup)

### Yang belum selesai / perlu dilanjutkan:
- Konten #1, #2 (01–02 Mei) sudah lama lewat — owner perlu putuskan: skip atau geser
- Konten #3 BPOM Mobile (05 Mei), #4 SAPA UMK (08 Mei), #5 OOT (12 Mei), #6 Cek KLIK (14 Mei) → semua overdue, belum ada naskah
- Konten #8–#12 (19–30 Mei) → belum dikerjakan, masih ada waktu
- Seluruh konten belum ada visual/desain
- Weekly report 11–15 Mei belum dibuat

### Catatan untuk sesi berikutnya:
- **Dashboard data tersimpan di browser, bukan di file** — kalau owner mau backup status terbaru, gunakan tombol "Export JSON" di dashboard
- Kalau dashboard dipindah/dibuka di browser/komputer lain, gunakan "Import JSON" untuk restore data
- Data default di dashboard akan ter-load otomatis hanya saat pertama kali (kalau localStorage kosong). Setelah itu, perubahan dari owner akan dipertahankan
- Pendekatan wajib menulis naskah: emotional hook + storytelling + 1 poin kunci (lihat `PROTOCOL.md` bagian 3)
- Selalu tanya owner sebelum menulis naskah: *"Perlu riset data dari internet dulu?"*
- Seri stunting 5 episode — episode #1 selesai, ide hook #2–#5 ada di bawah file `naskah_carousel_stunting_16mei2026_v2.md`
- Prioritas mendesak sesi berikutnya: bahas konten overdue #1–#6 dengan owner sebelum kerjakan #8 ke depan

---

## Sesi 16 Mei 2026 — Claude (Anthropic)

### Yang dikerjakan:
- Review kalender editorial Mei 2026 (12 konten, semua masih Draft)
- Buat naskah carousel konten #7: "Cegah Stunting dari Piring Keluarga" (16 Mei 2026)
  - v1 dihapus (pendekatan informatif, ditolak owner)
  - v2 final: pendekatan storytelling emotional, 1 poin kunci (protein 1.000 HPK)
- Riset referensi data: konfirmasi "nasi + mie instan" sebagai pola konsumsi dominan Papua (Survei Kompas, jurnal UGM)
- Buat `PROTOCOL.md` dan `HANDOFF.md`

### Status saat ini:
- Konten #7 Stunting (16 Mei) → `Naskah selesai` (file: `05_Mei_2026/Konten_Siap_Posting/naskah_carousel_stunting_16mei2026_v2.md`)
- Konten #1–#6 → tidak disentuh, status di kalender masih `Draft`
- Konten #8–#12 → belum dikerjakan

### Yang belum selesai / perlu dilanjutkan:
- Konten #1 dan #2 (01–02 Mei) kemungkinan sudah lewat jadwal — konfirmasi ke owner apakah perlu diposting atau diskip
- Konten #3 (12 Mei) dan #4 (14 Mei) perlu segera dikerjakan — jadwal sudah dekat atau terlewat
- Seluruh konten belum ada visual/desain

### Catatan untuk sesi berikutnya:
- Selalu tanya owner sebelum menulis naskah: *"Perlu riset data dari internet dulu?"*
- Pendekatan wajib: emotional hook + storytelling + 1 poin kunci. Detail lengkap di `PROTOCOL.md` bagian 3.
- Seri stunting direncanakan 5 episode — konten #7 ini adalah episode #1 (tema: protein & 1.000 HPK). Ide hook untuk episode #2–#5 ada di bagian bawah file naskah v2.
- Update status konten di Google Sheets setelah setiap naskah selesai (koordinasi langsung dengan owner).
