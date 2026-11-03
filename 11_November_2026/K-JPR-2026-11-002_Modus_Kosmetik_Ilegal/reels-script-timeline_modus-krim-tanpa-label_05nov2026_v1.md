# REELS — Kenali Modus Kosmetik Ilegal: Krim Tanpa Label
**Kode:** K-JPR-2026-11-002 · **Tayang:** 5 Nov 2026 · **Dokumen:** script + timeline (Gerbang 1, bagian 1; storyboard menyusul setelah disetujui)
**Sumber naskah:** `naskah_modus-krim-tanpa-label_05nov2026_v1.md` (carousel 6 slide)
**Skill:** reels-edukasi-bbpom · mode **Formula 8 Beat** · preset **P1** · gaya visual **UI bersih (Inter Tight, sorot teks iOS)**
**Durasi:** 31,61 dtk · 114 BPM · 46 kata narasi · poin kunci tunggal: *krim tanpa label tidak bisa dicek, dan yang tidak bisa dicek jangan dioles ke wajah.*

---

## 1. Keputusan adaptasi dari carousel ke Reels

| Dari naskah carousel | Di Reels | Alasan |
|---|---|---|
| Cerita Melda (usia, tempat kerja, harga Rp250 ribu, "dua minggu cerah → bulan kedua merah") | **Dibuang** | Gaya UI bersih tidak memakai tokoh; 31 dtk tidak cukup untuk cerita; kronologi gejala adalah testimoni rekaan (aturan "tanpa testimoni karangan"). Hook tetap memakai klaim "racikan dokter" sebagai kutipan klaim, bukan kisah tokoh. |
| 4 modus (kemasan polos, janji instan, cek nomor, iritasi) | **3 cek + tindakan iritasi ke caption** | Formula memakai tepat 3 nilai. Cek mengikuti urutan Cek KLIK: **Kemasan → Janji (promosi) → Nomor (izin edar)**. Langkah "terlanjur iritasi → hentikan, dokter, HALOBPOM 1500533" dipindah ke caption. |
| Sapaan "Ko berani oles ke wajah?" | "Berani oles?" | Bahasa universal (preferensi 28 Okt: tanpa partikel daerah di hook/CTA). Bisa dikembalikan bila diminta. |
| CTA "Tag teman yang lagi cari skincare" | **Dipertahankan sebagai satu-satunya CTA** | Sesuai naskah. URL cekbpom sudah tampil di nilai 3, jadi tidak diulang di CTA. |
| Kasus pabrik (slide 3) | Kartu sumber di layar nilai 1, **tidak dibacakan**, tanpa nama kota/pabrik | Catatan produksi naskah melarang lokasi di visual. |

---

## 2. Script (kolom Narasi = tulisan layar; ejaan TTS ditandai bila berbeda)

Anggaran kata diukur dengan 2,2 kata/dtk (Higgs terukur 2,0–2,4) dan napas 0,3 dtk di awal slot. Semua beat punya margin positif; **promise** paling tipis (0,39 dtk). Cek akhir dengan `split_vo.py` setelah narasi dibuat.

| # | Beat | Mulai | Narasi | Ejaan TTS | Kata | Bicara | Slot | Margin |
|---|---|---|---|---|---|---|---|---|
| 1 | Hook | 0,00 | Tanpa label. Berani oles? | – | 4 | 1,82 | 2,41 | 0,59 |
| 2 | Promise | 3,21 | Tiga cek sebelum beli krim. | – | 5 | 2,27 | 2,66 | 0,39 |
| 3 | Nilai 1 · **Kemasan** | 6,37 | Kemasan: tanpa nama dan nomor? Tolak. | – | 6 | 2,73 | 3,71 | 0,98 |
| 4 | Loop 1 | 10,58 | Kemasan lengkap? Cek janjinya. | – | 4 | 1,82 | 2,65 | 0,83 |
| 5 | Nilai 2 · **Janji** | 13,73 | Janji: putih instan? Curigai klaimnya. | – | 5 | 2,27 | 3,71 | 1,44 |
| 6 | Loop 2 | 17,94 | Ada nomornya? Belum cukup. | – | 4 | 1,82 | 2,66 | 0,84 |
| 7 | Nilai 3 · **Nomor** | 21,10 | Nomor: cek, lalu cocokkan nama dan produsen. | – | 7 | 3,18 | 3,81 | 0,63 |
| 8 | CTA | 25,31 | Tidak bisa dicek? Jangan dioles. Tag teman yang lagi cari skincare. | "skincare" → uji dulu (kandidat "skin-ker") | 11 | 5,00 | 6,35 | 1,35 |
| – | Rekap | 28,81 | (tanpa narasi) | | | | | |

**Label yang harus sama persis di promise, tracker, dan rekap:** `1 Kemasan · 2 Janji · 3 Nomor`.

### Teks layar per beat

| Beat | Teks layar | Sorot + popup (satu kata kerja dari narasi) |
|---|---|---|
| Hook | kicker *Katanya "racikan dokter"…* · judul besar **Krim tanpa label, berani oles?** · pot putih polos generik (tanpa tulisan) | sorot "tanpa label"; **tanpa popup** |
| Promise | **Cukup 3 cek** · sebelum beli krim · daftar bergaya iOS: 1 Kemasan · 2 Janji · 3 Nomor | sorot "3 cek"; tanpa popup |
| Nilai 1 | LANGKAH 1/3 · **Kemasan** · "Tanpa nama dan nomor notifikasi?" · kartu label kosong (Nama produk —, Produsen —, No. notifikasi —; tag CONTOH) · kartu sumber: *Siaran pers · 19 Okt 2026 · BPOM amankan sarana produksi kosmetik ilegal…* + chip *hidrokinon · asam retinoat · steroid* | sorot "tanpa nama dan nomor" → popup **Tolak** |
| Loop 1 (gelap) | *Kemasan lengkap?* / **Cek janjinya.** | sorot "janjinya"; tanpa popup |
| Nilai 2 | LANGKAH 2/3 · **Janji** · "BPOM: jangan mudah tergiur promosi efek instan." · kartu iklan CONTOH "Putih instan!" | sorot "putih instan" → popup **Curigai** |
| Loop 2 (gelap) | *Ada nomornya?* / **Belum cukup.** | sorot "Belum"; tanpa popup |
| Nilai 3 | LANGKAH 3/3 · **Nomor** · "Cek di cekbpom.pom.go.id atau BPOM Mobile." · kotak pencarian + dua baris sejajar *Di label* / *Di hasil cek* (nama produk, produsen; CONTOH) | sorot "nama dan produsen" → popup **Cocokkan** |
| CTA | **Tidak bisa dicek, / jangan dioles.** · chip bergaya mention "@ teman yang lagi cari skincare" | sorot "dicek"; tanpa popup |
| Rekap | kartu **3 cek sebelum beli krim**: 1 Kemasan · 2 Janji · 3 Nomor (centang berurutan); chip tag tetap di atas kartu | – |

**Subtitle** aktif di nilai 1–3 dan CTA saja (di hook, promise, loop teks layar = narasi). Kamus penekanan:
`tolak: emph · instan: warn · curigai: emph · cocokkan: emph · dicek: emph · jangan dioles: warn · tag: emph`.

---

## 3. Timeline (detik; mark = 0,05 + k × 60/114)

`marks.json`
```json
{"duration": 31.61, "s1": 3.21, "s2": 6.37, "s3": 10.58, "s4": 13.73, "s5": 17.94, "s6": 21.1, "cta": 25.31,
 "p": 3.21, "v1": 6.37, "l1": 10.58, "v2": 13.73, "l2": 17.94, "v3": 21.1}
```
Waktu kata di bawah **perkiraan** (±0,3 dtk, dihitung 2,2 kata/dtk) dan diganti waktu asli dari `words.json` setelah narasi dibuat.

| Waktu | Beat | Kata kunci (perkiraan) | Gerak / payoff | SFX |
|---|---|---|---|---|
| 0,10–0,65 | Hook | – | judul naik dari mask kata demi kata; header turun 40 px; pot polos masuk (pop) | – |
| 0,65–1,10 | Hook | "Tanpa label" 0,65 | sentuh → handle → sorot "tanpa label" (0,5 dtk) | marker |
| 2,96 | Hook | – | semua teks naik keluar (0,25 dtk) | whoosh |
| 3,26–3,56 | Promise | – | "Cukup 3 cek" naik; sorot "3 cek"; daftar naik, baris masuk berurutan | pop ×3 |
| 5,37–5,87 | Promise | "krim" 5,38 | tile 1–3 terbang melengkung ke header jadi tracker | whoosh |
| 6,37 | Nilai 1 | – | wipe biru dari tile 1; kicker, judul, subjudul naik; kartu label masuk dari kiri | whoosh |
| 7,18–7,78 | Nilai 1 | "tanpa nama dan nomor" 7,18 | sapuan sorot; popup **Tolak** muncul 7,83 | marker, pop |
| **9,00** | Nilai 1 | **"Tolak" 9,00** | ketukan popup; **stempel ✕ merah + getar** pada kartu (payoff) | stamp |
| 10,05 | Nilai 1 | – | lepas sorot | – |
| 10,28 | Loop 1 | – | mode gelap (panel `scaleY 0→1`, 0,3 dtk); header berbalik warna | flip |
| 10,93 / 11,84 | Loop 1 | "Kemasan" / "Cek" | baris kecil naik / kalimat besar menghentak (1,35→1) | thud |
| 12,29 | Loop 1 | "janjinya" 12,29 | sorot "janjinya"; tile 2 berdenyut 12,44 | – |
| 13,73 | Nilai 2 | – | kembali terang dari tile 2; pola masuk sama; kartu iklan CONTOH dari kiri | whoosh |
| 14,53–15,13 | Nilai 2 | "putih instan" 14,53 | sapuan sorot; popup **Curigai** muncul ≈15,2 | marker, pop |
| **15,44** | Nilai 2 | **"Curigai" 15,44** | ketukan; **bendera merah menancap** + kartu ragu-ragu (miring −1,6° → 0, 0,8 dtk) | stamp |
| 17,00 | Nilai 2 | – | lepas sorot | – |
| 17,64 | Loop 2 | – | mode gelap | flip |
| 18,29 / 19,20 | Loop 2 | "Ada" / "Belum" 19,20 | baris kecil / **"Belum cukup."** menghentak + sorot "Belum"; tile 3 berdenyut 19,8 | thud |
| 21,10 | Nilai 3 | – | kembali terang dari tile 3; kotak pencarian + dua baris sejajar masuk | whoosh |
| 22,81–23,41 | Nilai 3 | "cocokkan" 22,81 | sapuan sorot "nama dan produsen"; popup **Cocokkan** muncul 23,46 | marker, pop |
| **24,05–24,60** | Nilai 3 | **"produsen" 24,17** | ketukan 24,05; **garis penghubung tergambar + centang "Cocok" pop** | chime |
| 24,76–25,31 | transisi | – | push-up ke CTA (0,55 dtk) | whoosh |
| 25,41–26,40 | CTA | "Tidak bisa dicek" 25,41 | "Tidak bisa dicek," naik; sorot "dicek" 26,32 | marker |
| 26,77–27,22 | CTA | "jangan dioles" 26,77 | **"jangan dioles."** menghentak; "dioles" merah (warn) | thud |
| **27,68** | CTA | **"Tag" 27,68** | chip mention "@ teman yang lagi cari skincare" pop (`back.out`); satu ketukan denyut | pop |
| 28,46–28,81 | CTA→Rekap | – | thesis keluar; chip pindah ke atas kartu | whoosh |
| 28,81–31,61 | Rekap | "skincare" 29,95–30,4 | kartu naik; tile tracker turun jadi nomor baris; centang berurutan (jeda 0,12); **diam ±1,2 dtk di akhir** | pop ×3 |

Catatan irisan: narasi CTA berakhir ±30,4 dtk, jadi 1,6 dtk terakhirnya terdengar di atas kartu rekap (subtitle di pita menanggungnya). Bila terasa padat saat didengar, pangkas CTA menjadi "Tidak bisa dicek? Jangan dioles. Tag temanmu."

### Audio
- **Musik:** YuE2 Studio, 114 BPM, instrumental minimal-bersih, `duration_seconds = 48`, `musik_yue2.py` (groove jatuh di `s1` = promise). 0 kredit.
- **Narasi:** Speech Studio Higgs + `ID_Edu_Female_Higgs_Reference_01`, 8 bagian (`hook, s1…s6, cta`), seed tetap. Uji dulu pelafalan "skincare".
- **SFX:** pustaka (marker, pop, stamp, whoosh, thud, flip, chime). Mix −14 LUFS, puncak −1,8 dBTP.
- **Render:** ±4,5 menit (komposisi 2D, 31,6 dtk @30 fps).

---

## 4. Tabel sumber (diverifikasi 30 Okt 2026)

| Klaim di layar/VO | Sumber | Status |
|---|---|---|
| Sarana produksi kosmetik ilegal sejak 2021; krim, losion, toner dalam kemasan polos tanpa label; dijual ke klinik kecantikan; uji lab: asam retinoat, deksametason, hidrokinon, mometason furoat | Siaran pers BPOM HM.01.1.10.26.300, 19 Okt 2026 (pom.go.id) | ✅ terverifikasi langsung |
| "Jangan mudah tergiur promosi yang menjanjikan efek instan"; terapkan Cek KLIK; beli dari sarana terpercaya | siaran pers yang sama | ✅ |
| Cek nomor notifikasi lewat cekbpom.pom.go.id / BPOM Mobile | Kontan, Antara (mengutip Loka POM/BPOM); **tidak ada di teks siaran pers** | ⚠️ sekunder |
| Hasil cek menampilkan nama produk, pendaftar, produsen, sehingga bisa dicocokkan dengan label | Hukumonline "Cara mengecek BPOM kosmetik" | ⚠️ sekunder |
| Kartu "Putih instan!", label kosong, nama/produsen contoh | rekaan ilustratif | berlabel **CONTOH**, bukan fakta |
| Kicker *Katanya "racikan dokter"* | kutipan klaim dari naskah (ilustratif) | perlu review apoteker (lihat 6) |

Tidak dipakai di video: nama kota/pabrik, Rp16 miliar, Rp750 juta/bulan, ancaman pidana, bahan baku "antibiotik", Melda, Rp250 ribu, Entrop.

**Pola yang diizinkan:** header akun gaya UI (ikon kapsul generik, nama dan @bpom.jayapura, tracker 1–3) · seleksi teks iOS + popup berisi satu kata kerja dari narasi · mode gelap sebagai flip loop · pot putih polos generik tanpa tulisan · kartu label/iklan/hasil cek generik fiktif berpita CONTOH · kartu tautan siaran pers pom.go.id · kotak pencarian cekbpom · chip mention "@ teman" · daftar bergaya iOS untuk promise dan rekap · stempel ✕, bendera merah, garis penghubung + centang.

---

## 5. Cek formula (Gerbang 1)

- [x] Hook ≤ 5 kata, selesai ≤ 2,8 dtk (4 kata, 1,82 dtk)
- [x] Promise menyebut jumlah + topik; label = judul nilai 1–3 (Kemasan, Janji, Nomor)
- [x] Nilai ≤ 8 kata, semua bersumber (Kemasan, Janji: siaran pers; Nomor: ⚠️ sekunder)
- [x] Loop ≤ 5 kata, menyebut nilai berikutnya secara spesifik ("janjinya", "nomornya"), tanpa klaim frekuensi
- [x] 1 CTA (tag teman); rekap tanpa kata perintah; ajakan simpan di caption
- [x] Lapis Wajib: tanpa merek, tanpa nama klinik/kota/pabrik, 9:16, 31,6 dtk

**Penyimpangan lapis Disarankan:** narasi CTA memakai kata "jangan" (*jangan dioles*) karena itu poin kunci tunggal yang ditetapkan owner di naskah. Diminta dikonfirmasi.

---

## 6. Perlu keputusan / konfirmasi

1. **Cerita Melda dibuang dari Reels** (lihat tabel 1). Setuju, atau mau versi dengan tokoh ilustrasi berlabel "ilustrasi"?
2. **Loop 2** memakai "Belum cukup" (tanpa klaim). Versi lebih tajam "Belum tentu asli" menyiratkan nomor bisa dicatut; baru boleh dipakai bila ada sumber resmi BPOM (di naskah hanya detikHealth Feb 2025; belum diperiksa ulang).
3. **Review apoteker:** kicker "racikan dokter" harus tidak terbaca menyerang racikan resmi berdasarkan resep. Usul: tambah satu kalimat pembeda di caption (racikan resep untuk pasien tertentu ≠ produk massal tanpa label). Di video tidak ada ruang untuk kalimat itu.
4. **Sumber sekunder** (cek nomor via cekbpom/BPOM Mobile, cocokkan produsen): cocokkan dengan halaman panduan resmi sebelum Gerbang 2.
5. **Rilis "hasil analisis kejahatan kosmetik" (Agenda #2)** masih belum ditemukan per 30 Okt (hasil pencarian hanya rilis 13 Jul 2026 dan sebelumnya). Cek ulang 4 Nov; bila terbit, satu angkanya bisa masuk kartu sumber nilai 1.
6. **Catatan untuk 11-006/11-007:** siaran pers menyebut klindamisin fosfat dan metronidazol sebagai bahan baku, tetapi **tidak menyebutnya antibiotik**. Sebutan "bahan baku antibiotik" di catatan produksi adalah penyimpulan; pakai kata persis rilis bila dipakai di konten.
7. **Konfirmasi Humas/Biro Hukmas:** label suara AI, dan mock header bergaya akun media sosial.

### Usulan tambahan untuk caption (belum ditulis)
Ajakan menyimpan ("Simpan untuk dicek sebelum beli krim"), pembeda racikan resmi, dan langkah iritasi: *hentikan pemakaian, periksa ke dokter, lapor ke HALOBPOM 1500533 (WhatsApp 0811-9181-533)*. Disclosure "Narasi menggunakan suara AI".
