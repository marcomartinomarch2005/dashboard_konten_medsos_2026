# Log aset audio · v4 kinetik (K-JPR-2026-11-002) · 31 Okt 2026

| Aset | Alat / model | Parameter | Catatan |
|---|---|---|---|
| VO 17 kalimat | Speech Studio, Higgs Audio v3, suara `ID_Edu_Female_Higgs_Reference_01`, lang id, wav | seed 128 untuk semua | project_id: Mulus dua minggu 54d76136e7 · Hancur berbulan-bulan 35830eced8 · Familiar dengan ini 28bacad618 · Tanpa label 9bb8304123 · Tanpa merek 6a9b10323b · Tanpa izin 5125f4909d · Katanya racikan dokter 704cb0e258 · Faktanya 34a56302c6 · Bé-POM gerebek pabrik ilegal 15ded01729 · Isinya a7f9388e64 · Hidrokinon dan steroid 6dde6b1b4d · Supaya aman, ingat satu aturan b9f43f689f · Kemasan polos, tidak bisa dicek 7bb7ec23a3 · Produk yang tidak bisa dicek 271fafa210 · Jangan pernah dioles! 2d1ed660ae · Pastikan izin edarnya asli 843bba8749 · Bagikan ke teman kamu yang masih nekat 307419b7e5. Percobaan pertama engine sempat ENGINE_STUCK (cold start), diulang dengan argumen sama. Klip disalin ke `audio_vo/`. |
| Musik latar (final) | YuE2 Studio, adapter `yue2-instrumental`, 70 dtk, FLAC | seed 128, lm_seed 128, 128 BPM | song_id `01a18d76-c3da-7314-a107-c9b64b8c68f1`. **Dipakai di MP4 final** (FLAC disalin pengguna ke folder proyek). Diselaraskan ke 128 BPM (tempo asli terukur 127,02; atempo 1,0077): groove dimulai di sumber detik 1,646, selisih ketukan dengan mark s1/s2/s3/s4/cta 0 ms. Intro 0–3,75 dtk difilter lowpass 500 Hz dan −9 dB lalu penuh di 3,75 dtk (efek drop). Catatan: `musik_yue2.py` menolak lagu ini (groove masuk di detik ±0), jadi penyelarasan dilakukan dengan ketukan groove ke-12 (kelipatan birama) dan geseran 221 ms hasil verifikasi. |
| Musik latar (draf lama) | Sintesis numpy lokal (`bgm.py`) | – | Hanya dipakai di `…_DRAF-bgm-sintesis.mp4`; tidak berlaku lagi. |
| SFX pustaka | `assets/sfx` skill: chime, whoosh, pop, thud, stamp, typing, marker | – | pustaka internal skill |
| SFX sintesis lokal | `synth.py` (numpy/scipy): glitch, boom, slam, crack, glass, siren, zap, tick, tock, riser, click, ping | seed 1128 | 0 kredit; dengarkan di Gerbang 3 |
| Font | Inter Tight (OFL) | – | |

Label caption wajib: **"Narasi menggunakan suara AI"**. Status lisensi bobot YuE2/Higgs dan asal rekaman referensi suara **belum diverifikasi**: masukkan ke daftar konfirmasi Humas.
Mix final: −14,0 LUFS, puncak −1,7 dBFS pada MP4 akhir (target ≤ −1,5). Musik −9 dB, turun 6 dB saat VO; VO ±10 dB di atas musik.
