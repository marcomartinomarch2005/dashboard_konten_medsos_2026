# STORYBOARD (Gerbang 1 P4) — Sisa Antibiotik di Kaleng Biskuit Tete

**Kode:** K-JPR-2026-11-001 · Naskah: `naskah_pembuka-tema-resistansi_reels-p4_03nov2026_v2.md`
**Preset:** P4 Gaya Susan · 1080×1920 · 30 fps · ±80 dtk (78 dtk VO + 2 dtk kartu akhir)
**Status:** v1.1 · 2 Nov 2026 · disetujui owner; waktu shot dikunci ke VO take 2 (§9). Tahap berikutnya: gerbang B (lembar karakter + lokasi)
**Templat kode:** salinan `P4_preset/kode/episode_kamera2.py` (tipografi kinetik + kamera v2 untuk seluruh durasi)
**Badge episode:** tidak (bukan serial)

Waktu di bawah adalah perkiraan. Batas shot dikunci ke stempel kata VO setelah VO direkam (Gerbang 1 → VO → kamus `E`).

---

## 1. Ringkasan sinematik

- **Benang merah:** kaleng biskuit merah. Muncul di hook (makro), Ujian (match cut), Ingatan (momen kunci 1), Kunci (strip masuk kaleng), Tips, dan Penutup (kaleng kini berisi biskuit, momen kunci 2).
- **Motif bunyi:** kaleng digoyang (strip berderak) di detik 0,3 → bunyi sama di Ingatan → bunyi riang (biskuit) di Penutup.
- **Dua waktu dibedakan lewat cahaya:** kini (senja → RS putih dingin → siang → pagi) dan kilas balik (lavender, saturasi turun, vinyet, grain halus).
- **Susan di dunia cerita:** Susan berdiri di beranda rumah Tete sebagai pemandu (tidak ada lokasi studio terpisah). Ia tidak berinteraksi dengan Tete/Rosa.
- **Ritme:** 31 shot / 80 dtk ≈ 2,6 dtk per shot. Transisi berat: whip 1,6 · dip 31 · whip 55 · dip 66 (jarak ≥ 15 dtk, kecuali zoom match cut di 18 dtk yang bertipe ringan).
- **Momen kunci:** MK1 ±34 dtk (kaleng berisi strip sisa, tag "SISA!"), MK2 ±67 dtk (kaleng berisi biskuit, tag "BISKUIT!"). Jarak 33 dtk ✓.

## 2. Cast & pose yang dibutuhkan

| Tokoh | Gaya | Pose / ekspresi | Lip-sync |
|---|---|---|---|
| Susan | rig P4 yang ada | yakin, ragu, serius, presentasi, menunjuk, melambai | ya |
| **Tete Herman** (baru) | flat 2D tanpa outline, ±4 kepala; kulit `#5e3a26`, rambut & jenggot pendek putih keriting, kemeja lengan pendek hijau tua pudar `#3f6b4f`, celana pendek cokelat `#8a6a4a`, sandal | duduk menjala · meringis kecil · berjalan dipapah · berbaring di ranjang (heran) · tersenyum lemah · berdiri sehat menawarkan kaleng · tertawa | tidak |
| **Rosa** (baru) | flat 2D, ±4,5 kepala; kulit `#8a5a3a`, rambut keriting sebahu + jepit kuning `#FFC94D`, kaos putih + kemeja denim biru muda `#A6C8E8` terbuka, celana hitam, anting perak kecil | memapah · berdiri di samping ranjang · tangan di mulut (ingat) · duduk menemani · tertawa | tidak |
| Dokter (baru, generik) | perempuan ±40 thn, jas putih, hijab teal `#2FB5A3` | menunjuk papan, ramah | tidak |
| Perban | kaki kiri Tete, putih | shot 11–23; hilang di 27–28 | — |

## 3. Lokasi & adegan sisipan

| Kode | Jenis | Lapis (d) | Catatan |
|---|---|---|---|
| `dunia_danau.py` (baru) | luar, 7 lapis | langit 0,04 · bukit Cycloop + rumah di lereng 0,15 · danau + perahu + pulau kecil 0,3 · rumah panggung kayu (dinding, jendela) 0,55 · lantai beranda papan + bangku + meja kecil (pijakan) 0,8 · tiang beranda + tanaman pot + jala tergantung (depan buram) 1,35 | horizon y ≈ 1440; `sk0–sk2` + `#sun` untuk senja/siang/pagi/sore; ruang kiri-bawah tenang untuk Susan; meja kecil berisi kaleng di kanan-tengah |
| `dunia_rs.py` (baru) | dalam, 5 lapis | jendela (bukit + langit) 0,04 · dinding pastel mint + papan tulis + tirai 0,3 · ranjang + meja samping 0,6 · lantai 0,8 · tiang infus/tirai depan buram 1,35 | dua set: **lorong** (lampu plafon bulat untuk match cut) dan **kamar** |
| `makro_kaleng` | sisipan | bokeh 0,1 · meja kayu 0,4 · kaleng merah terbuka + strip polos 0,8 · depan buram 1,25 | rack focus tutup → strip |
| `makro_kail` | sisipan | bokeh danau 0,1 · papan beranda 0,4 · kail + benang + kaki kartun 0,8 | kilau kail; goresan = garis merah muda, tanpa darah |
| `atas_meja` | bird's eye | papan beranda 0,3 · kaleng, gelas teh, kantong obat polos 0,7 | dipakai 3 kali dengan isi berbeda (S09, S17, S25) |
| `pov_kilasbalik` | POV | meja beranda lavender 0,4 · tangan Tete + strip 0,8 | shake 0,4; grading kilas balik |
| `il_kebal` | ilustrasi | bokeh 0,1 · kuman + pil 0,8 · depan 1,3 | 2 tahap (lihat §5) |
| `il_sampai_habis` | ilustrasi | bokeh 0,1 · strip hari 1–5 + kaleng + kuman 0,8 · depan 1,3 | 3 tahap (lihat §5) |
| `pov_telepon` | POV | tangan + ponsel CONTOH "HALOBPOM 1500533" | tanpa logo; layar memanggil |
| `atas_kotakobat` | bird's eye | kotak obat rumah, strip sisa dipisahkan ke kantong | CTA |

## 4. Daftar shot

Kolom kamera: ukuran shot · gerak/jalur · kurva · transisi masuk. MK = momen kunci. Teks: **H** = Bricolage, *S* = Instrument Serif Italic, [K] = stiker.

| # | ±Waktu | Blok | Adegan | Kamera | Teks (ketukan) | Ilustrasi / catatan | SFX |
|---|---|---|---|---|---|---|---|
| 01 | 0,0–1,6 | Hook | danau (beranda) senja | CU wajah Susan **yakin**, wajah di y ±700; **dolly-zoom** `zc` 0 → 0,30 (`frz`), `ramp` | **SISA** 160 px tengah + *antibiotik* 64 px | Kaleng di meja tampak buram di belakang | kaleng digoyang 0,3 dtk |
| 02 | 1,6–3,4 | Hook | `makro_kaleng` | **whip** masuk · makro, rack focus `focus` 0,1 → 0,8, push 1 → 1,14 | *buat* [JAGA-JAGA?] 90 px | Tutup terbuka, strip polos | whoosh |
| 03 | 3,4–4,6 | Hook | danau | MS Susan **ragu**, drift `lin` truck kanan pelan | *padahal…* 60 px kiri | — | — |
| 04 | 4,6–4,86 | Hook | danau | **crash zoom** MS → CU, `out` | — | — | swish |
| 05 | 4,86–6,0 | Hook | danau | CU Susan **serius**, dutch −5° | **NGGAK MEMPAN** tomato, rot −5° | — | boing kecil |
| 06 | 6,0–9,6 | Dunia Tete | danau senja | **explainer oner:** WS kiri (danau, perahu) → truck kanan + `zc` maju melewati jala depan → mendarat MS Tete duduk menjala (`ramp` + `ramp`) | *kenalin* + **Tete Herman** kiri atas | Ikon Jayapura: bukit berumah + danau | ambience danau (air, burung) |
| 07 | 9,6–11,4 | Dunia Tete | `makro_kail` | makro kail berkilau → rack focus ke kaki, push | *tergores* **kail** kanan | Goresan merah muda kartun | kilau + "tik" |
| 08 | 11,4–13,0 | Dunia Tete | danau | MCU Tete meringis kecil, push-in `io` | — | — | — |
| 09 | 13,0–15,6 | Ujian | `atas_meja` | **bird's eye**, roll 4 → −2°, push 1 → 1,22 | *sudah minum* **antibiotik** | Tangan Tete membuka strip dari kantong obat polos | klik halus |
| 10 | 15,6–18,0 | Ujian | danau senja → lavender | MS Tete duduk, kaki diperban → truck ke kaki, lalu **`rin`** ke tutup kaleng di meja | **TETAP BENGKAK** tomato, rot −4° | **Ilustrasi tk.1 inline:** kaki kartun, kemerahan pastel muncul di "bengkak"; pill ILUSTRASI | pop lembut |
| 11 | 18,0–21,0 | Ujian | RS lorong | **zoom match cut:** lingkaran tutup kaleng → lampu plafon bulat (`tr:'zoom'`, `rout`) → **high angle** Rosa memapah Tete | *dirujuk ke* **rumah sakit** | Cahaya putih dingin | whoosh tinggi + room tone RS |
| 12 | 21,0–23,6 | Terungkap | RS kamar | MS dokter di papan + Tete di ranjang, Rosa berdiri; truck `io` | *kata dokter* [SUDAH KEBAL] | Papan tulis tanpa tulisan | — |
| 13 | 23,6–26,4 | Terungkap | `il_kebal` | sisipan ilustrasi, push 1 → 1,12 | *sama antibiotik* **yang pertama** | **Tahap 1** kuman biasa + pil; **tahap 2** di "kebal": kuman berperisai, pil memantul. Pill ILUSTRASI | pop + "tung" lembut |
| 14 | 26,4–28,6 | Terungkap | RS kamar | high angle Tete di ranjang, pull-out pelan | *dirawat* **lebih lama** | Ikon mini kalender (tk.3) di stiker | — |
| 15 | 28,6–31,0 | Terungkap | RS kamar | CU Tete **heran**, tahan + drift | Gelembung serif: *"Dulu luka begini, minum obat sebentar langsung baik."* | Jeda VO ±1,5 dtk | BGM turun |
| 16 | 31,0–33,2 | Ingatan | RS kamar | **dip** cream → MCU Rosa tangan di mulut, push-in, rack focus | *Rosa ingat…* | — | desir dip |
| 17 | 33,2–36,0 | Ingatan | `atas_meja` (kilas balik) | bird's eye lavender, push-in | *yang nggak* **dihabiskan** | **MK1:** latar redup-buram + cincin putus-putus di kaleng + tag **"SISA!"** + kilau | kaleng digoyang + ding |
| 18 | 36,0–39,0 | Ingatan | `pov_kilasbalik` | **POV** handheld `shake` 0,4, push 1 → 1,14 | *kalau* **batuk pilek** | Tangan Tete ambil strip, tangan lain menutup batuk | batuk kartun lembut |
| 19 | 39,0–42,0 | Kunci | danau siang | cut → MS Susan **presentasi**; **kartu nama** "Susan · Petugas BBPOM di Jayapura" | *dari dokter?* **SESUAI ATURAN** | Cahaya siang terang | pop kartu |
| 20 | 42,0–46,0 | Kunci | `il_sampai_habis` | sisipan ilustrasi, truck kiri → kanan pelan | **SAMPAI HABIS** teal + *walau sudah enakan* | **Tahap 1** strip hari 1–5, hari 1–2 dicentang teal; **tahap 2** di "enakan": strip hari 3–5 meluncur ke kaleng; **tahap 3** di "berhenti": kuman tersisa memakai perisai. Pill ILUSTRASI | pop per tahap |
| 21 | 46,0–49,0 | Kunci | danau siang | MCU Susan **serius**, push-in | *kuman dapat* [PELUANG KEBAL] tomato | — | — |
| 22 | 49,0–52,0 | Dampak | RS kamar | high angle Tete di ranjang, dutch −4°, push pelan | *infeksi biasa pun* **SUSAH DIOBATI** tomato, rot −4° | Gema shot 14 | — |
| 23 | 52,0–55,0 | Dampak | RS kamar | MS Rosa duduk menemani, Tete tersenyum lemah; drift | *persis seperti* **Tete** | — | — |
| 24 | 55,0–58,5 | Tips | danau siang | **whip** → **low angle** Susan, `tilt` +7; kartu checklist muncul baris 1–2 | ketukan mengikuti kartu | **Kartu tk.2:** ikon resep, ikon strip ✓ | whoosh + pop per baris |
| 25 | 58,5–62,0 | Tips | `atas_meja` (kini) | bird's eye, roll −3 → 2° | [JANGAN SIMPAN] → [JANGAN DIBAGI] bergiliran | ✕ di kaleng berisi strip; tangan menyodorkan strip diberi ✕ | pop |
| 26 | 62,0–66,0 | Tips | `pov_telepon` | POV `shake` 0,3, push | *ragu?* **TANYA APOTEKER** · pill "HALOBPOM 1500533" di atas ponsel | Layar CONTOH memanggil | nada sambung lembut |
| 27 | 66,0–69,0 | Penutup | danau pagi | **dip** → WS pagi cerah, push-in ke kaleng; Tete (tanpa perban) menawarkan kaleng ke Rosa | *sekarang…* **nggak ada lagi sisa** | **MK2:** cincin di kaleng berisi biskuit + tag **"BISKUIT!"** + kilau | kaleng riang + ding |
| 28 | 69,0–71,0 | Penutup | danau pagi | MCU two-shot Tete & Rosa tertawa, rack focus | — | — | tawa ringan (tanpa suara manusia: marimba) |
| 29 | 71,0–73,6 | CTA | danau sore keemasan | **low angle** Susan menunjuk kamera, `tilt` +8, push | **CEK** 150 px + *kotak obatmu hari ini* | Pill domain "HALOBPOM 1500533" tampil stabil sampai akhir | — |
| 30 | 73,6–75,6 | CTA | `atas_kotakobat` | bird's eye, push 1 → 1,18 | [JANGAN DIMINUM LAGI] | Tangan memisahkan strip sisa ke kantong terpisah | klik |
| 31 | 75,6–80,0 | CTA + kartu akhir | danau sore | MS Susan melambai → **pull-out** menembus lapis ke WS danau (`rout`) | *tanya apoteker* **cara membuangnya** → **Lindungi Generasi,** *cegah resistansi* | — | BGM naik, fade out 1,8 dtk |

## 5. Ilustrasi penjelas (wajib)

| Kalimat VO | Ilustrasi | Tingkat | Muncul di kata |
|---|---|---|---|
| "lukanya tetap bengkak dan merah" | Kaki kartun: normal → kemerahan pastel + bengkak ringan | 1 (inline S10) | "bengkak" |
| "kuman … sudah kebal sama antibiotik yang pertama" | `il_kebal`: kuman biasa → kuman berperisai, pil memantul | 1 | "kebal" |
| "dirawat lebih lama" | Ikon kalender | 3 | "lebih lama" |
| "harus diminum sesuai aturan sampai habis … berhenti di tengah jalan … peluang untuk kebal" | `il_sampai_habis`: strip 5 hari → sisa masuk kaleng → kuman berperisai | 1 | "habis" / "enakan" / "berhenti" |
| Tips 4 poin | Kartu checklist berikon SVG (resep, strip ✓, kaleng ✕, tangan ✕, apoteker) | 2 | per poin |

Etika: kuman kartun lucu (bukan monster), tanpa darah/nanah, tanpa wajah Susan untuk kondisi tubuh, label ILUSTRASI selalu tampil saat sisipan ilustrasi.

## 6. Suasana per segmen (cahaya)

| Segmen | Shot | Cahaya |
|---|---|---|
| Hook + Dunia Tete | 01–09 | senja keemasan |
| Ujian (masalah) | 10 | senja → lavender tipis (firasat) |
| RS (kini) | 11–15, 22–23 | putih dingin, tint mint |
| Ingatan (kilas balik) | 16–18 | lavender, saturasi −30 %, vinyet, grain |
| Kunci + Tips | 19–26 | siang terang |
| Penutup | 27–28 | pagi cerah |
| CTA | 29–31 | sore keemasan |

## 7. Audio

- **VO:** Susan (Higgs), satu panggilan untuk seluruh naskah; jeda ±1,5 dtk setelah "dirawat lebih lama" untuk gelembung Tete.
- **Kamus pelafalan:** `bpom`, `bbpom` (sudah ada) + **`tete`** bila transkrip ulang salah.
- **BGM (YuE2):** "Instrumental warm cozy cartoon storytelling underscore, ukulele, marimba, soft tifa-style drum, gentle lake ambience feel, slightly tense middle section, hopeful ending, 96 BPM", tanpa vokal (bersihkan dengan `separate_file`).
- **SFX baru (sintetis, `sfx_lib.py`):** kaleng digoyang (derak strip + resonansi logam pendek), kaleng riang (versi lebih tinggi + kerincing), batuk kartun lembut (noise pendek terfilter), nada sambung.
- **Suasana:** danau (air bergelombang + burung, sangat pelan), RS (hum lembut).
- **Mix:** standar P4 (−14 LUFS, puncak ≤ −1,5 dBFS).

## 8. Daftar pembangunan aset (urutan kerja)

1. VO → transkrip kata → kunci batas shot. *(model ringan)*
2. Rig **Tete**, **Rosa**, **dokter** + lembar karakter untuk disetujui. *(model teratas)*
3. `dunia_danau.py` → snapshot latar kosong (senja, siang, pagi). *(model teratas)*
4. `dunia_rs.py` (lorong + kamar) → snapshot. *(model teratas)*
5. Sisipan & ilustrasi: `makro_kaleng`, `makro_kail`, `atas_meja` (3 isi), `pov_kilasbalik`, `il_kebal`, `il_sampai_habis`, `pov_telepon`, `atas_kotakobat`. *(model teratas)*
6. `episode_tete.py` (dari `episode_kamera2.py`) → **Gerbang 2: contact sheet 31 frame**. *(model ringan)*
7. BGM + SFX + mix → render penuh → QA P4. *(model ringan)*

Gerbang persetujuan: (A) storyboard ini → (B) lembar karakter Tete/Rosa + snapshot dua lokasi → (C) contact sheet 31 shot → (D) master.


## 9. Waktu terkunci (VO take 2, 2 Nov 2026)

VO: `P4_sisa_antibiotik_tete/audio/vo_susan_take2_seed2.wav` (85,96 dtk, Higgs, seed 2). Stempel kata lengkap: `P4_sisa_antibiotik_tete/kode/waktu_kata_take2.json`.
Aturan waktu: VO mulai di **0,5 dtk** video; **jeda 2,0 dtk disisipkan** setelah "lebih lama" (VO 30,2 dtk) untuk gelembung Tete. Durasi video **90.5 dtk**, **31 shot**, rata-rata 2.92 dtk.
Perubahan dari §4: makro kail dan MCU Tete meringis digabung (jeda VO terlalu pendek); shot telepon dipecah menjadi MCU Susan "TANYA APOTEKER" + POV telepon. Penomoran §4 diganti nomor di bawah ini.

| Shot | Waktu (dtk) | Durasi | Isi |
|---|---|---|---|
| S01 | 0.00–2.92 | 2.92 | hook CU Susan yakin, dolly-zoom |
| S02 | 2.92–4.22 | 1.30 | whip → makro kaleng |
| S03 | 4.22–6.58 | 2.36 | MS Susan ragu |
| S04 | 6.58–6.84 | 0.26 | crash zoom |
| S05 | 6.84–8.32 | 1.48 | CU Susan dutch NGGAK MEMPAN |
| S06 | 8.32–11.74 | 3.42 | oner WS danau → MS Tete |
| S07 | 11.74–14.62 | 2.88 | makro kail → rack ke kaki |
| S08 | 14.62–17.56 | 2.94 | bird's eye strip Puskesmas |
| S09 | 17.56–20.22 | 2.66 | MS Tete kaki, ilustrasi bengkak, rin ke kaleng |
| S10 | 20.22–22.24 | 2.02 | zoom match → RS lorong high angle |
| S11 | 22.24–23.50 | 1.26 | MS dokter + papan |
| S12 | 23.50–27.22 | 3.72 | il_kebal (tahap 2 di kebal1) |
| S13 | 27.22–30.46 | 3.24 | high angle Tete ranjang |
| S14 | 30.46–32.92 | 2.46 | CU Tete heran + gelembung |
| S15 | 32.92–36.70 | 3.78 | dip → MCU Rosa ingat |
| S16 | 36.70–39.70 | 3.00 | bird's eye kilas balik, MK1 di sisa_kaleng |
| S17 | 39.70–42.56 | 2.86 | POV kilas balik batuk |
| S18 | 42.56–45.50 | 2.94 | MS Susan presentasi + kartu nama |
| S19 | 45.50–50.98 | 5.48 | il_sampai_habis 3 tahap |
| S20 | 50.98–53.58 | 2.60 | MCU Susan serius PELUANG KEBAL |
| S21 | 53.58–58.16 | 4.58 | high angle Tete RS dutch |
| S22 | 58.16–60.42 | 2.26 | MS Rosa menemani |
| S23 | 60.42–65.08 | 4.66 | whip → low angle Susan + checklist |
| S24 | 65.08–68.38 | 3.30 | bird's eye kaleng ✕ |
| S25 | 68.38–70.96 | 2.58 | MCU Susan TANYA APOTEKER |
| S26 | 70.96–74.98 | 4.02 | POV telepon HALOBPOM 1500533 |
| S27 | 74.98–78.56 | 3.58 | dip → WS pagi, MK2 di nggak_ada_lagi |
| S28 | 78.56–80.20 | 1.64 | MCU two-shot Tete & Rosa |
| S29 | 80.20–83.14 | 2.94 | low angle Susan CEK |
| S30 | 83.14–86.32 | 3.18 | bird's eye kotak obat |
| S31 | 86.32–90.50 | 4.18 | MS → pull-out WS + kartu akhir |

Catatan VO: "apoteker" terakhir (VO 84,08 dtk) ditranskrip "apotekar"; yang pertama terbaca benar. Kamus Speech Studio kini memuat aturan `apoteker → apotéker`. Owner diminta mendengar ulang kata ini; bila salah, ganti potongan itu dengan take tunggal.
