# STORYBOARD (Gerbang 1 P4) — Bedah Kasus: Ikan Asin Disemprot Obat Serangga

**Kode:** K-JPR-2026-11-M03 · Naskah: `naskah_ikan-asin-insektisida_reels-p4_04nov2026_v1.md` · Tayang: Rabu 4 Nov 2026
**Preset:** P4 Gaya Susan + footage asli · 1080×1920 · 30 fps · ±87 dtk (±85 dtk VO + 2 dtk kartu akhir)
**Status:** v1.1 · 3 Nov 2026 · menunggu persetujuan owner (Footage B kini rekaman layar Penjelasan Publik BPOM 2 Nov)
**Templat kode:** salinan `P4_preset/kode/episode_kamera2.py` (tipografi kinetik + kamera v2)
**Badge episode:** tidak (kecuali owner memutuskan "Bedah Kasus" jadi serial)

Waktu di bawah perkiraan. Batas shot dikunci ke stempel kata VO setelah VO direkam.

---

## 1. Ringkasan sinematik

- **Konsep:** Susan sebagai anchor di **Studio Bedah Kasus**, ruang redaksi kecil di dunia P4 dengan monitor dinding, papan investigasi, dan jendela ke Teluk Jayapura. Footage asli selalu tampil **di dalam bingkai** (monitor atau polaroid di papan), tidak pernah lepas jadi layar penuh tanpa bingkai.
- **Pengecualian dari aturan hook P4 (atas brief owner):** hook dibuka dengan footage viral, bukan CU wajah Susan. CU Susan "yakin" masuk lewat crash zoom di detik ±6.
- **Benang merah visual:** **benang merah tomato** di papan investigasi yang menghubungkan kartu-kartu bukti: VIDEO → LOKASI ? → KLARIFIKASI → BPOM → RESIDU → POIN KUNCI. Tiap babak menambah satu pin. Di penutup, benang dilepas dan papan berganti jadi kartu tips.
- **Motif bunyi:** "pssst" semprotan (sintetis, pendek) di cold open → diulang lebih pelan saat ilustrasi residu → tidak muncul lagi setelah "Tapi tenang" (diganti bunyi jaring/kelambu ditutup).
- **Dua nada:** investigasi (0–59 dtk, senja lavender + cahaya monitor kebiruan) → menenangkan (59–87 dtk, sore keemasan).
- **Ritme:** 32 shot / 87 dtk ≈ 2,7 dtk per shot. Transisi berat: whip 6 · dip 26 · whip 38 · dip 59 · whip 74 (jarak ≥ 12–15 dtk).
- **Momen kunci:** MK1 ±4 dtk (freeze footage, cincin di kabut semprotan, tag **"DIDUGA!"**), MK2 ±46 dtk (ikan kartun setelah dimasak, titik residu masih ada, tag **"MASIH ADA!"**), MK3 ±69 dtk (rak jemur bertutup kelambu, tag **"AMAN!"**). Jarak ≥ 23 dtk; MK1 dan MK3 tanpa push-in besar supaya tidak terasa berulang.

## 2. Cast & pose

| Tokoh | Gaya | Pose / ekspresi | Lip-sync |
|---|---|---|---|
| Susan | rig P4 yang ada | yakin, serius, ragu, presentasi, menunjuk, ponsel, senyum | ya |
| Ilustrasi pengolah ikan (generik, baru) | flat 2D, kulit sawo matang `#7a4a2e`, topi caping/bucket pastel, kaos mint, tanpa wajah detail (siluet ramah) | menutup rak dengan kelambu, menabur garam | tidak |
| Pembeli (generik, baru) | flat 2D, kulit gelap `#5e3a26`, noken pastel | memilih ikan asin di lapak | tidak |

Pria dalam video viral **tidak** digambar ulang sebagai karakter kartun.

## 3. Lokasi, sisipan, footage

| Kode | Jenis | Lapis (d) | Catatan |
|---|---|---|---|
| `dunia_studio.py` (baru) | dalam, 6 lapis | jendela: langit + teluk + jembatan merah 0,04 · dinding lavender pucat + rak berkas 0,3 · **monitor dinding** (bingkai plum, layar 16:10 tempat footage) + **papan investigasi** gabus butter dengan benang tomato 0,55 · meja anchor cream melengkung (kanan) 0,7 · lantai 0,8 (pijakan Susan, kiri) · lampu studio + tanaman pot buram 1,35 | Area kiri-bawah tenang untuk Susan; monitor di kanan-tengah (area prop). `sk0–sk2` + `#sun` untuk senja lavender → sore keemasan. Cahaya monitor = overlay sky `#A6DCF2` 12 % saat footage menyala. |
| `monitor_viral` | sisipan makro | bokeh studio 0,1 · bingkai monitor 0,6 · **Footage A** di layar 0,6 · depan buram (tepi meja) 1,25 | Footage dipotong ke area foto, wajah diblur, grading saturasi −20 %, scanline halus 6 %. Label "VIDEO VIRAL · beredar di media sosial · wajah disamarkan". |
| `papan_bukti` | bird's eye / MS papan | gabus 0,3 · kartu & polaroid 0,6 · pin + benang 0,8 · depan buram 1,3 | Kartu: polaroid frame semprotan (wajah diblur) · "LOKASI ?" · "WAKTU ?" · gelembung klarifikasi "Ikannya penuh ulat, mau dibuang" (label "KLARIFIKASI · dikutip media") |
| `monitor_bpom` | sisipan | bingkai monitor 0,6 · **Footage B** 0,6 | **B2/foto** Kepala BPOM dengan lower third P4 (kartu cream, border plum) "Prof. Taruna Ikrar · Kepala BPOM RI" → **B1** rekaman layar halaman Penjelasan Publik pom.go.id (judul + nomor HM.01.2.1.10.26.305 → kalimat "Insektisida tidak diperuntukkan bagi pangan." disorot kuning). Kartu atas: "PENJELASAN PUBLIK BPOM · 2 Nov 2026". Tanpa watermark media. |
| `il_residu` | ilustrasi | bokeh 0,1 · meja jemur kayu 0,5 · ikan asin kartun + botol semprot generik polos 0,8 · depan 1,3 | 4 tahap (lihat §5) |
| `il_dimasak` | ilustrasi | bokeh dapur 0,1 · kompor/wajan, panci, baskom air 0,6 · ikan + titik residu 0,8 | 3 panel bergantian (cuci · goreng · rebus), titik tetap ada → MK2 |
| `il_rak_jemur` | ilustrasi | langit pantai Hamadi pagi 0,04 · perahu & teluk 0,15 · rak jemur bambu + kelambu 0,6 · garam & ikan 0,8 · depan 1,3 | 3 tahap (rak · garam · matahari kering); lalat kartun terhalang kelambu → MK3 |
| `pov_lapor` | POV | tangan + ponsel CONTOH memanggil "HALOBPOM 1500533" | tanpa logo; shake 0,3 |
| `atas_lapak` | bird's eye | lapak ikan asin pasar (generik, tanpa nama) + tangan pembeli bernoken | untuk "beli dari penjual yang kamu percaya" |

## 4. Daftar shot

Kolom kamera: ukuran shot · gerak/jalur · kurva · transisi masuk. Teks: **H** = Bricolage, *S* = Instrument Serif Italic, [K] = stiker.

| # | ±Waktu | Blok | Adegan | Kamera | Teks (ketukan) | Ilustrasi / catatan | SFX |
|---|---|---|---|---|---|---|---|
| 01 | 0,0–2,2 | Cold open | `monitor_viral` | makro layar, push 1 → 1,10 sejak frame 0, `lin` | *ikan asin lagi dijemur…* S 64 px tengah atas | Footage A 0,0–2,2 dtk | dengung monitor menyala |
| 02 | 2,2–3,4 | Cold open | `monitor_viral` | **`rin`** masuk ke botol/kabut di layar | [DISEMPROT OBAT SERANGGA?] tomato rot −3° | Footage A 2,2–3,0 dtk (kabut) | "pssst" |
| 03 | 3,4–5,0 | Cold open | `monitor_viral` | **freeze** + tahan, dim latar | — | **MK1:** cincin putus-putus di kabut + tag **"DIDUGA!"** + kilau | rekam tergores (freeze) + ding |
| 04 | 5,0–6,2 | Cold open | studio senja lavender | **whip** → WS studio, monitor menyala di kanan, Susan di kiri; dolly 1 → 1,12 | *video ini bikin* **GEGER** | Label footage hilang | whoosh |
| 05 | 6,2–6,46 | Cold open | studio | **crash zoom** WS → CU wajah Susan, `out` | — | — | swish |
| 06 | 6,46–8,2 | Cold open | studio | CU Susan **yakin**, wajah y ±700, drift | **AMAN** 150 px + *nggak?* 64 px, tengah | Teks hook besar di tengah (aturan P4) | boing kecil |
| 07 | 8,2–10,6 | Anchor | studio | MS Susan **presentasi** di samping meja; truck kiri pelan | kicker **BEDAH KASUS** + kartu nama "Susan · Petugas BBPOM di Jayapura" | Monitor di belakang menampilkan frame beku (buram, DOF) | pop kartu |
| 08 | 10,6–13,0 | Anchor | studio | MCU Susan **serius**, push-in `io` | *kita bedah,* **pelan-pelan** | — | — |
| 09 | 13,0–16,4 | Kronologi | studio → `papan_bukti` | **explainer oner:** MS Susan → swoop kanan + `zc` maju menembus lampu depan → mendarat MS papan (`ramp` + `ramp`) | **AKHIR OKTOBER** kiri atas | Pin 1: polaroid footage (wajah blur) | whoosh + pin "tik" |
| 10 | 16,4–19,6 | Kronologi | `papan_bukti` | bird's eye, roll 4 → −2°, push 1 → 1,18 | *lokasi & waktu* [BELUM TERVERIFIKASI] | Pin 2 & 3: kartu "LOKASI ?" "WAKTU ?" + benang tomato tertarik | pin "tik" ×2 + benang |
| 11 | 19,6–23,2 | Kronologi | `papan_bukti` | MCU kartu klarifikasi, rack focus 0,2 → 0,8 | *klarifikasi:* **"mau dibuang"** | Gelembung klarifikasi + label "dikutip media" | kertas |
| 12 | 23,2–26,0 | Kronologi | studio | MS Susan **ragu** menoleh ke papan, truck pelan | *katanya…* | Benang menyambung ke kartu kosong "BPOM?" | — |
| 13 | 26,0–28,6 | BPOM | `monitor_bpom` | **dip** cream → makro monitor, push 1 → 1,08 | lower third Kepala BPOM | **B2** video resmi atau foto resmi Kepala BPOM | desir dip |
| 14 | 28,6–32,6 | BPOM | `monitor_bpom` | MCU layar, **pedestal turun** mengikuti scroll halaman, `lin` → `rin` ke kalimat kutipan | kartu "PENJELASAN PUBLIK BPOM · 2 Nov 2026" · *telusuri* **ASAL PRODUK** | **B1** rekaman layar pom.go.id; sorotan kuning menyapu "Insektisida tidak diperuntukkan bagi pangan." Ikon mini peta: pusat → balai daerah (tk.3) | klik scroll + pop |
| 15 | 32,6–35,4 | BPOM | studio | MS Susan **serius** + monitor di kanan; push-in | **DISITA** → **DITARIK** → **DIMUSNAHKAN** bergiliran, tomato | Ikon mini tiap kata (gembok, panah keluar, ✕) | pop ×3 |
| 16 | 35,4–38,0 | BPOM | studio | low angle Susan, `tilt` +7 | *kalau* **terbukti** | — | — |
| 17 | 38,0–40,2 | Bahaya | studio | **whip** → CU Susan **ragu**, dutch −4° | *kenapa sampai* **segitunya?** | — | whoosh |
| 18 | 40,2–43,4 | Bahaya | `il_residu` | sisipan ilustrasi, push 1 → 1,12 | *dibuat buat* **SERANGGA** · *bukan buat* **MAKANAN** | **Tahap 1** botol generik + nyamuk kartun ✓ · **tahap 2** di "makanan": ikan asin + ✕. Pill ILUSTRASI | pop |
| 19 | 43,4–45,6 | Bahaya | `il_residu` | makro ikan, rack focus | [NEMPEL] | **Tahap 3** kabut turun · **tahap 4** di "nempel": titik residu lavender menempel di permukaan ikan | "pssst" pelan + tik halus |
| 20 | 45,6–49,6 | Bahaya | `il_dimasak` | truck kiri → kanan melewati 3 panel (`ramp`) | *dicuci, digoreng, direbus?* → **NGGAK DIJAMIN HILANG** tomato | Baskom air · wajan · panci; titik residu tetap ada di tiap panel. **MK2** di panel terakhir: cincin + tag **"MASIH ADA!"** | percik air · desis goreng · bubble + ding |
| 21 | 49,6–52,4 | Bahaya | studio | MCU Susan **serius**, push-in | *bisa memicu* **keracunan** · *&* **gangguan pencernaan** | Ikon mini perut kartun (tk.3) di stiker | — |
| 22 | 52,4–54,0 | Bahaya | studio | MS → **crash zoom** CU (2 shot: 0,26 dtk `out` + tahan) | — | Monitor di belakang mati | swish |
| 23 | 54,0–59,0 | Kunci | studio | CU Susan **yakin** → pull-out pelan ke MCU | **OBAT SERANGGA** ✕ **PANGAN** stiker besar tomato, tengah | Benang di papan (latar, buram) tersambung ke kartu "POIN KUNCI" | ding tegas |
| 24 | 59,0–62,0 | Tapi tenang | studio sore keemasan | **dip** → MS Susan **senyum**, cahaya berubah hangat, drift | *tapi tenang* · **SATU VIDEO ≠ SEMUA** | Jendela: teluk sore | BGM pindah ke bagian hangat |
| 25 | 62,0–65,0 | Tapi tenang | `atas_lapak` | bird's eye, roll −3 → 2°, push | *diolah dengan* **benar** | Lapak ikan asin rapi, tertutup, tanpa nama | suasana pasar pelan |
| 26 | 65,0–68,0 | Pengolah lokal | `il_rak_jemur` | **WS** pantai pagi, dolly 1 → 1,14 | *dari* **Hamadi** *sampai* **Demta** | Lapis jauh: teluk + perahu; pengolah generik menutup rak dengan kelambu | ombak pelan |
| 27 | 68,0–71,2 | Pengolah lokal | `il_rak_jemur` | MS rak, push-in | kartu tk.2: ✓ **Rak + jaring/kelambu** | **MK3:** lalat kartun terhalang kelambu, cincin + tag **"AMAN!"**. Pill ILUSTRASI | "srek" kelambu + ding |
| 28 | 71,2–74,0 | Pengolah lokal | `il_rak_jemur` | makro garam → ikan kering, rack focus | ✓ **Garam cukup** · ✓ **Kering tuntas** | Matahari naik, ikan berubah warna sedikit lebih kering | tabur garam |
| 29 | 74,0–76,6 | CTA | `atas_lapak` | **whip** → bird's eye, tangan bernoken memilih ikan | *beli dari penjual* **TEPERCAYA** | — | whoosh |
| 30 | 76,6–80,4 | CTA | `pov_lapor` | POV `shake` 0,3, push | **LAPOR** + pill "HALOBPOM 1500533 · WA 0811-9181-533" di atas ponsel · *atau* **BBPOM di Jayapura** | Layar CONTOH memanggil | nada sambung |
| 31 | 80,4–83,4 | CTA | studio sore | low angle Susan **menunjuk** kamera, `tilt` +8 | [BAGIKAN!] *ke grup keluarga* | Pill domain HALOBPOM tampil stabil sampai akhir | — |
| 32 | 83,4–87,0 | Kartu akhir | studio sore | MS Susan melambai → **pull-out** menembus lapis ke WS studio + jendela teluk (`rout`) | **Obat serangga** *bukan untuk* **pangan** · @bpom.jayapura | Papan investigasi kini berisi kartu tips | BGM naik, fade out 1,8 dtk |

**Opsi soundbite Kepala BPOM:** bila video resmi B2 bersuara, sisipkan 4–6 dtk di shot 13 (VO Susan "Lewat penjelasan publiknya…" digeser ke shot 14). Durasi total jadi ±91 dtk; teks layar soundbite ditulis persis sesuai ucapan.

## 5. Ilustrasi penjelas (wajib)

| Kalimat VO | Ilustrasi | Tingkat | Muncul di kata |
|---|---|---|---|
| "dibuat buat serangga, bukan buat makanan" | `il_residu` tahap 1–2: nyamuk ✓ / ikan ✕ | 1 | "serangga" / "makanan" |
| "residunya nempel di ikan" | `il_residu` tahap 3–4: kabut → titik lavender di permukaan ikan | 1 | "nempel" |
| "dicuci, digoreng, direbus pun nggak menjamin residunya hilang" | `il_dimasak` 3 panel, titik tetap ada (MK2) | 1 | "dicuci" / "digoreng" / "direbus" / "hilang" |
| "keracunan dan gangguan pencernaan" | ikon perut kartun | 3 | "pencernaan" |
| "disita, ditarik, dimusnahkan" | ikon gembok, panah keluar, ✕ | 3 | per kata |
| "rak jemur bertutup jaring atau kelambu, garam cukup, keringkan sampai tuntas" | `il_rak_jemur` 3 tahap + kartu checklist | 1 + 2 | "kelambu" / "garam" / "tuntas" |

Etika: tanpa tengkorak, asap hijau, atau simbol racun; tanpa orang sakit di layar; lalat dan nyamuk kartun lucu; label ILUSTRASI selalu tampil saat sisipan ilustrasi; footage asli tidak diberi efek dramatis (zoom ke wajah, efek merah, sirene).

## 6. Suasana per segmen (cahaya)

| Segmen | Shot | Cahaya |
|---|---|---|
| Cold open + Anchor + Kronologi | 01–12 | senja lavender + cahaya monitor sky 12 % |
| BPOM | 13–16 | lavender, monitor lebih terang (layar dominan) |
| Bahaya + Kunci | 17–23 | senja oranye (peringatan) |
| Tapi tenang → CTA | 24–32 | sore keemasan; `il_rak_jemur` pagi cerah |

## 7. Audio

- **VO:** Susan (Higgs), satu panggilan untuk seluruh naskah. Jeda ±0,6 dtk setelah "dijemur…" di cold open.
- **Kamus pelafalan:** `bpom`, `bbpom`, `apoteker` (sudah ada). Cek transkrip ulang: "Taruna Ikrar", "Hamadi", "Demta", "HALO BPOM".
- **BGM (YuE2):** "Instrumental light investigative documentary underscore, pizzicato strings, soft ticking clock percussion, muted marimba, low warm synth pad, curious and tense but never scary, second half resolves into warm hopeful ukulele and marimba, 92 BPM", tanpa vokal (bersihkan dengan `separate_file`). Titik pindah nada di ±59 dtk ("Tapi tenang").
- **SFX baru (sintetis, `sfx_lib.py`):** dengung monitor, "pssst" semprotan (noise berdesis pendek), rekam tergores/freeze, pin papan "tik", benang ditarik, kertas, percik air, desis goreng, bubble rebus, "srek" kelambu, tabur garam.
- **Footage:** audio asli Footage A dimatikan. Footage B memakai audio asli hanya bila opsi soundbite dipakai.
- **Mix:** standar P4 (−14 LUFS, puncak ≤ −1,5 dBFS). BGM di cold open −16 dB relatif VO supaya hening terasa.

## 8. Daftar pembangunan aset (urutan kerja)

1. Owner putuskan izin video viral dan cek ada/tidaknya video resmi Kepala BPOM (naskah, Keputusan terbuka #2–3). Tanggal tayang sudah dikunci: 4 Nov (produksi ±1 hari, lihat naskah Keputusan terbuka #1). Rekam layar halaman Penjelasan Publik BPOM (B1) 1080 px, 30 fps.
2. VO → transkrip kata → kunci batas shot.
3. **Footage A:** potong 3 segmen, crop area foto, blur wajah (tracking), grading. Simpan sebagai `footage/A1.mp4`–`A3.mp4` + urutan PNG untuk engine (frame footage ditempel sebagai `<image>` per waktu di layar monitor).
4. `dunia_studio.py` → snapshot latar kosong (senja lavender, senja oranye, sore keemasan).
5. Sisipan & ilustrasi: `monitor_viral`, `papan_bukti`, `monitor_bpom`, `il_residu`, `il_dimasak`, `il_rak_jemur`, `atas_lapak`, `pov_lapor` + karakter generik pengolah & pembeli.
6. `episode_bedah_ikan_asin.py` (dari `episode_kamera2.py`) → **Gerbang 2: contact sheet 32 frame**.
7. BGM + SFX + mix → render penuh → QA P4 + QA footage (wajah tersamar di setiap frame, tidak ada teks judul/merek/watermark media yang tersisa).

Gerbang persetujuan: (A) naskah + storyboard ini → (B) snapshot studio + frame footage yang sudah diblur → (C) contact sheet 32 shot → (D) master.

## 9. QA tambahan (karena memakai footage asli)

- Wajah kedua pria tersamar di **setiap** frame yang tampil, termasuk saat freeze dan di polaroid papan.
- Sepertiga atas video viral (judul berita + nama merek + watermark pengunggah) tidak terlihat sama sekali.
- Kata "diduga" atau label "VIDEO VIRAL · beredar di media sosial" selalu menyertai footage A.
- Klarifikasi pria di video tampil sebelum respons BPOM (urutan adil).
- Footage B dari kanal resmi BPOM (halaman pom.go.id / akun resmi); tidak ada logo atau watermark media lain. Teks rilis yang tampil tidak diedit, hanya disorot.
