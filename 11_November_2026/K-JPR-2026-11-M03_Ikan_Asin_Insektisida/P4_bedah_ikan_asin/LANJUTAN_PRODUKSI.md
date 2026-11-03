# Lanjutan produksi — Reels P4 "Bedah Kasus: Ikan Asin Disemprot Obat Serangga" (K-JPR-2026-11-M03)

Status 3 Nov 2026 malam (Opus 5.5): naskah + storyboard v1.1 disetujui (Gerbang A) · **Gerbang B siap ditinjau**: `snapshot_studio_gerbangB.png` (studio 3 cahaya + uji komposisi Susan + makro monitor/papan) dan `snap/qa_footage_blur_tiap10frame.png`. Sisipan non-VO: `snapshot_sisipan.png`.
Jalur VO (owner, 3 Nov): **Speech Studio di ruang kerja lain** → paket `../audio/PAKET_VO_BGM_speech-studio.md`.

## Sudah jadi
- **Footage A** (video viral, sumber medsos): 3 segmen → `../footage/seq_A1` (0–3 dtk, 90 frame), `seq_A2` (14–16 dtk, 60), `seq_A3` (20–24 dtk, 120). 30 fps, 720×548 JPG.
  - Sepertiga atas (judul berita, merek, watermark pengunggah) dibuang lewat crop `720:548:0:352`. Audio dibuang.
  - Wajah + nama perahu: pita blur berat bertepi lembut (`../footage/kerja/blur.py`, pita 215 px; A2 290 px). Cek visual tiap frame ke-10 + frame membungkuk: wajah tak terbaca.
- **Footage B1**: tangkapan halaman penuh Penjelasan Publik BPOM `../footage/B1_rilis-bpom_halaman-penuh.png` (860×9156, lebar CSS 430, dpr 2, widget melayang disembunyikan). Kalimat "Insektisida tidak diperuntukkan bagi pangan." ada di y ±2670 px. Di layar monitor (lebar 520 unit) offset `y=-1440` menaruh kalimat itu di tengah layar.
- **`kode/dunia_studio.py`**: Studio Bedah Kasus, 6 lapis. `layers(foto_href, isi_layar, label)` mengisi polaroid papan & layar monitor. Id papan untuk animasi: `kartu_video/lokasi/waktu/klarifikasi/bpom`, `pin1–5`, `bn1–4` (benang), `lbl_viral`. Cahaya `WAKTU`: `lavender` · `oranye` · `emas`.
- **Render lokal tanpa Playwright penuh**: `kode/snap.js` memakai `playwright-core` + Chrome terpasang (`C:/Program Files/Google/Chrome/Application/chrome.exe`). Pasang sekali: `npm i playwright-core@1.49.1` di folder mana saja, lalu set `PW_CORE` ke `.../node_modules/playwright-core`. `render2.js` perlu diubah sama (launch dengan `executablePath`) sebelum render penuh.

- **`kode/ilustrasi_ikan.py`**: 5 sisipan (lapis 1300×2200, bx -55/by -70 seperti `adegan_sisipan.py`). Id tahap: `il_residu` ir1–ir4 · `il_dimasak` (lapis lebar 3300 unit, panel di x 650/1650/2650 = geser kamera 0/500/1000 px) dm1–dm3 + `dm_mk` · `il_rak_jemur` rj_kelambu, rj_lalat, rj_mk, rj_garam, rj_kering, rj_sun, rj_orang · `atas_lapak` al_tangan · `pov_lapor` pv_dot. Pill ILUSTRASI dipasang sebagai UI. Snapshot: `kode/snapshot_sisipan.py` → `snapshot_sisipan.png`.

## Belum (urutan)
1. **VO Susan + BGM** — dikerjakan di ruang kerja ber-Speech Studio/YuE2 memakai `../audio/PAKET_VO_BGM_speech-studio.md`; hasil disalin ke `../audio/`.
2. ~~Sisipan & ilustrasi~~ jadi (lihat atas). `monitor_viral`, `papan_bukti`, `monitor_bpom` = studio + kamera makro (sudah teruji di Gerbang B).
3. `episode_bedah_ikan_asin.py` (dari `P4_preset/kode/episode_kamera2.py`) → Gerbang C contact sheet 32 shot.
4. SFX + mix −14 LUFS / TP −1,5 → render penuh → QA P4 + QA footage (storyboard §9).
