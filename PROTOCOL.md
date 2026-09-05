# PROTOCOL.md
**Project:** Konten Media Sosial BBPOM Jayapura 2026
**Owner:** Marco Martino (Apoteker, ASN BBPOM Jayapura)
**Channel:** Instagram @bpom.jayapura · TikTok · Facebook Page
**Last updated:** 5 September 2026 (gerbang login Google Sign-In live + dikonfirmasi jalan di dashboard nyata)

---

## 0. TRIGGER COMMANDS

Dua perintah pendek yang bisa digunakan owner kapan saja. Setiap AI yang membaca protocol ini wajib mengenali dan mengeksekusinya secara otomatis tanpa perlu penjelasan tambahan.

**Membuka sesi** — selalu manual, perintahkan AI secara eksplisit:
> *"Baca PROTOCOL.md di folder konten_sosmed_2026."*
> AI akan otomatis lanjut baca `HANDOFF.md` dan melaporkan status terkini.

**Menutup sesi** — gunakan trigger berikut:

| Trigger | Tindakan AI |
|---------|-------------|
| `akhiri sesi` | Tulis atau update `HANDOFF.md` dengan: apa yang dikerjakan sesi ini, status terkini setiap file/konten yang disentuh, hal yang belum selesai, dan catatan penting untuk AI berikutnya — lalu konfirmasi ke owner bahwa handoff sudah tersimpan |

**Aturan:** Update `HANDOFF.md` di akhir sesi adalah **kewajiban, bukan opsional.** Sesi yang tidak ditutup dengan `akhiri sesi` berisiko kehilangan konteks di sesi berikutnya.

**Trigger tambahan:**

| Trigger | Tindakan AI |
|---------|-------------|
| `list review` | Scan folder `/opt/data/konten_bpom` untuk semua file naskah `.md` yang ada. Tampilkan dalam format list bernomor: **No · Judul Konten · Tanggal Tayang · Status**. Tandai yang belum diapprove owner dengan ⏳, yang sudah diapprove dengan ✅. Sertakan instruksi singkat: *"Balas dengan nomor naskah untuk melihat isinya, atau ketik 'approve [nomor]' / 'revisi [nomor]: [catatan]'"* |
| `approve [nomor]` | Tandai naskah tersebut sebagai disetujui owner di HANDOFF.md. Konfirmasi balik ke owner. |
| `revisi [nomor]: [catatan]` | Buka file naskah yang dimaksud, lakukan revisi sesuai catatan owner, simpan sebagai versi baru (v2, v3, dst), laporkan perubahan yang dilakukan. |

---

## 1. WAJIB DIBACA DI AWAL SETIAP SESI

Sebelum mengerjakan apapun, lakukan langkah berikut secara berurutan:

1. Baca `PROTOCOL.md` — file ini
2. Baca `HANDOFF.md` — log sesi sebelumnya (jika ada)
3. **Cek status konten terkini dari Google Sheets** — panggil endpoint Apps Script Web App (lihat §8 untuk URL) lewat Bash/PowerShell, contoh:
   ```
   curl "<API_URL>?action=list"
   ```
   - Sheet: `konten_kalender_bpom_jayapura`, tab `konten_kalender`
   - Data yang kembali sudah terurut `tanggal` ascending
   - Laporkan hasilnya ke owner dalam format: tanggal · judul · status

**Prioritas cek Google Sheets:** Selalu gunakan data langsung dari endpoint di atas sebagai sumber kebenaran — lebih akurat dari `HANDOFF.md` yang mungkin sudah tidak sinkron. Jika endpoint tidak bisa diakses (mis. URL API belum diisi di `index.html`/PROTOCOL.md), gunakan data terakhir di `HANDOFF.md` dan infokan ke owner bahwa data mungkin tidak terkini.

**Sumber kebenaran data konten:** Google Sheets, via Apps Script Web App (real-time) → `HANDOFF.md` (fallback). Airtable dan Agen Hermes tidak lagi dipakai sejak migrasi 4 September 2026 — lihat §8 dan `google_apps_script/SETUP.md`.

Jika ada file `HANDOFF.md`, baca lebih dulu sebelum cek Google Sheets.

---

## 2. STRUKTUR FOLDER

```
konten_sosmed_2026/
├── PROTOCOL.md              ← file ini
├── HANDOFF.md               ← log pergantian sesi (dibuat/diupdate tiap akhir sesi)
├── doc/
│   └── Alur-Konten-BPOM-Jayapura.pdf   ← diagram alur editorial + arsitektur sistem
├── 05_Mei_2026/                        ← struktur lama (arsip, Mei–Juni 2026)
│   └── Konten_Siap_Posting/
│       └── naskah_[slug]_[tanggal]_v[n].md
├── 07_Juli_2026/                       ← struktur aktif sejak Juli 2026
│   └── K-JPR-2026-07-NNN_Nama_Tema/
│       └── naskah_[slug]_[tanggal]_v[n].md
├── 08_Agustus_2026/
│   ├── RENCANA_KONTEN_AGUSTUS_2026.md  ← rencana bulanan: tema, agenda, kalender per kode
│   └── K-JPR-2026-08-NNN_Nama_Tema/
│       └── naskah_[slug]_[tanggal]_v[n].md
└── ...
```

**Konvensi folder per konten (aktif sejak Juli 2026):** tiap item konten punya subfolder sendiri, `K-JPR-YYYY-MM-NNN_Nama_Tema/`, dengan kode yang sama seperti disebut di kolom `catatan`/`judul` pada Google Sheets. Naskah dan aset lain untuk satu konten disimpan bersama di situ — bukan lagi dikumpulkan flat di satu folder `Konten_Siap_Posting/` seperti struktur Mei–Juni.

**Konvensi penamaan file naskah:**
`naskah_[slug-topik]_[ddmmmyyyy]_v[nomor].md`
Contoh: `naskah_bpom-mobile_19agu2026_v1.md`

Hapus versi lama jika versi baru sudah final dan disetujui owner.

**Trigger `list review`:** scan seluruh subfolder `K-JPR-*/` di bulan berjalan (dan `Konten_Siap_Posting/` untuk arsip Mei–Juni) untuk file naskah `.md`.

---

## 3. STANDAR PENULISAN KONTEN

### 3.1 Pendekatan Wajib
- **Hook emotional** — kalimat pertama harus menghentikan scroll, bukan menjelaskan topik
- **Format storytelling** — buka dengan karakter/situasi nyata yang relatable, bangun tension, baru masuk ke edukasi
- **1 poin kunci per konten** — jangan masukkan semua informasi sekaligus; simpan poin lain untuk seri berikutnya
- **Contoh konkret** — sertakan nama tempat, angka, bahan lokal Papua yang spesifik
- **Tone** — hangat, manusiawi, seperti bercerita ke teman; bukan pengumuman pemerintah

### 3.2 Yang Dilarang
- Format bullet point panjang sebagai badan utama konten
- Membuka konten dengan definisi atau statistik tanpa hook
- Menyajikan banyak poin sekaligus dalam satu konten
- Menggunakan contoh kasus atau data tanpa verifikasi

### 3.3 Struktur Carousel (Default 6 Slide)
| Slide | Fungsi |
|-------|--------|
| 1 | Hook / Cover — kalimat yang menghentikan scroll |
| 2 | Buka cerita — karakter dan situasi relatable |
| 3 | Tension — masalah terungkap |
| 4 | Insight — 1 poin kunci edukasi |
| 5 | Contoh konkret / solusi praktis |
| 6 | CTA — ajakan simpan, share, follow |

---

## 4. PROTOKOL SEBELUM MENULIS NASKAH

Sebelum mulai menulis naskah apapun, **wajib tanyakan dulu ke owner:**

> *"Apakah perlu saya cari data atau referensi dari internet terlebih dahulu untuk menguatkan contoh atau fakta dalam naskah ini?"*

Jangan berasumsi dan langsung menulis. Contoh kasus, angka, atau situasi yang digunakan harus bisa diverifikasi atau dikonfirmasi relevansinya dengan kondisi nyata di Papua.

---

## 5. STATUS KONTEN

Gunakan status berikut secara konsisten di semua dokumen:

| Status | Artinya |
|--------|---------|
| `Draft` | Belum ada naskah atau baru di kalender |
| `Naskah selesai` | Naskah sudah dibuat dan disetujui owner |
| `Desain selesai` | Visual sudah jadi |
| `Siap posting` | Naskah + visual sudah lengkap |
| `Posted` | Sudah tayang di platform |

---

## 6. PROTOKOL AKHIR SESI (HANDOFF)

Setiap mengakhiri sesi kerja, **wajib buat atau update `HANDOFF.md`** di root folder dengan format:

```
## Sesi [tanggal] — [nama AI / model]

### Yang dikerjakan:
- [item 1]
- [item 2]

### Status saat ini:
- [konten / file] → [status]

### Yang belum selesai / perlu dilanjutkan:
- [item]

### Catatan untuk sesi berikutnya:
- [hal penting yang perlu diketahui AI berikutnya]
```

---

## 7. KONTEKS INSTITUSI

- **Institusi:** BBPOM di Jayapura (Balai Besar Pengawas Obat dan Makanan)
- **Wilayah kerja:** Provinsi Papua
- **Agenda prioritas nasional BPOM 2026:** Hari Jamu Nasional (Agenda 1), SAPA UMK (Agenda 2), OOT (Agenda 3), Ekonomi Sirkular (Agenda 4), Stunting (Agenda 5), BPOM Mobile (Agenda 6), Antikorupsi (Agenda 7)
- **Tone komunikasi:** Resmi tapi humanis — bukan birokratis
- **Constraint:** Anggaran terbatas, infrastruktur lokal Papua, audiens heterogen (masyarakat umum hingga pelaku usaha)

---

## 8. REFERENSI PENTING

**Arsitektur sejak migrasi 4 September 2026 — tanpa Airtable, tanpa Agen Hermes.** Semua penulisan/pembacaan status konten sekarang lewat satu jalur: dashboard dan sesi Claude Code sama-sama memanggil Apps Script Web App yang membaca/menulis satu Google Sheet. Tidak ada lagi agen terpisah (Hermes) yang menulis langsung ke data store di luar jalur ini — sumber race condition lama (lihat riwayat di `doc/Alur-Konten-BPOM-Jayapura.pdf`, yang mendeskripsikan arsitektur Airtable-era) sudah tidak berlaku secara struktural.

- **Tracking konten aktif (real-time):** Google Sheets `konten_kalender_bpom_jayapura`, tab `konten_kalender` — kolom: `id, judul, tanggal, format, platform, status, catatan, tanggal_asal, drive_folder_url`
- **Backend/API:** Google Apps Script Web App di atas sheet tersebut — kode sumber `google_apps_script/Code.gs` di repo ini, deploy manual oleh owner (lihat `google_apps_script/SETUP.md`). Meniru bentuk respons `{records:[{id, fields:{...}}]}` supaya kompatibel dengan dashboard lama.
- **URL API aktif:** `https://script.google.com/macros/s/AKfycbwnX_bESrMsHxVeJ0YxqdO3FwZqU3kA8sSk0ud0TWVePuHbs7qUOE7bouIUIKRH0Qg5nQ/exec` (deploy 5 September 2026, Apps Script project `konten_kalender_api`, Sheet ID `1Z5gSxAfGL9iGF7HJ0ghfUXFfOPu6ntcO12w5Tf15vXw`). URL yang sama dipakai di `index.html` (`const API_URL`) dan untuk cek status di awal sesi (§1). **Catatan:** endpoint ini sekarang wajib `id_token` (Google Sign-In) — `curl` polos ke `?action=list` akan balas `{"error":"unauthorized"}`, itu perilaku normal bukan bug.
- **Dashboard publik tim:** GitHub Pages, deploy otomatis dari `index.html` di root repo saat push ke `main`. Satu file, tidak ada `dashboard.html` terpisah.
- **Kode sumber dashboard:** GitHub repo `dashboard_konten_medsos_2026` (private) — file `index.html`
- **Reminder & laporan mingguan:** trigger waktu di Apps Script (fungsi `reminderMingguan` / `laporanMingguan` di `Code.gs`), kirim ke Telegram lewat bot terpisah — bukan lagi lewat Hermes/Docker. Setup: `google_apps_script/SETUP.md` §4–5.
- **Akses dashboard dibatasi Google Sign-In (sejak 5 September 2026, dikonfirmasi jalan live):** dashboard tidak lagi terbuka untuk siapa pun yang tahu link-nya. Setiap request ke Apps Script wajib bawa `id_token` (JWT dari Google Sign-In di `index.html`), diverifikasi backend lewat `verifyIdToken_()`/`isEmailAllowed_()` di `Code.gs` terhadap daftar email di Script Property `ALLOWED_EMAILS`. **Jangan asumsikan siapa pun bisa buka dashboard** — kalau owner mau invite orang, cukup tambah emailnya ke `ALLOWED_EMAILS` (tidak perlu ubah kode). Setup lengkap: `google_apps_script/SETUP.md` §6. `GOOGLE_CLIENT_ID` di `index.html` harus sama persis dengan Script Property `GOOGLE_CLIENT_ID`. Owner sudah login sukses dengan `marcomartinomarch2005@gmail.com` dan konfirmasi data tersinkron real-time dari Sheets (lihat `HANDOFF.md` sesi 5 September).
- **Sudah tidak dipakai (arsip):** Airtable (base `appZbKbl6inYv8y2m`, data sudah dimigrasi — lihat `google_apps_script/konten_kalender_export.csv`), Agen Hermes/Docker (`_Template/HERMES_CRON_SETUP.md` — obsolete), `worker/` draft Cloudflare Worker (dihapus, tujuannya jadi proxy Airtable yang sudah tidak ada), Netlify, Supabase, Google Sheets kalender lama (ID `1b3XgOYixAlvNiuVeE7YQpZOByKA6Ls2cw-n_yEM6hFU` — beda dari sheet baru di atas, jangan tertukar)
- Handle resmi: `@bpom.jayapura` (Instagram), cek platform lain langsung ke owner
- Cek izin edar BPOM: `cekbpom.pom.go.id` / aplikasi BPOM Mobile
