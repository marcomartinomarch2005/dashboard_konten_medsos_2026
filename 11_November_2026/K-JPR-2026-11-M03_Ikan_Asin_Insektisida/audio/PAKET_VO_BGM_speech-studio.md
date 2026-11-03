# Paket VO + BGM untuk ruang kerja ber-Speech Studio — K-JPR-2026-11-M03

Sesi lokal 3 Nov tidak punya MCP Speech Studio / YuE2 Studio. Owner memilih membuat VO (dan BGM) di ruang kerja lain yang punya keduanya, supaya suara Susan sama dengan episode sebelumnya. Hasil cukup disalin ke folder `audio/` ini; produksi visual lanjut dari sini.

## 1 · VO Susan (Speech Studio)

- **Teks:** `vo_susan_teks.txt` (salinan persis blok VO naskah v1.1, satu panggilan untuk seluruh naskah, sesuai storyboard §7).
- **Suara:** Higgs Audio v3, `ID_Edu_Female_Higgs_Reference_01`, lang `id`, wav, **seed 128** (sama dengan 11-002).
- **Arahan nada:** *calm investigative news anchor, low and steady at the cold open, measured pauses before key facts, serious but never scary in the danger part, warm and reassuring from "Tapi tenang" to the end.*
- **Kamus pelafalan:** `bpom` = "Bé-POM", `bbpom` = "Bé-Bé-POM" (sudah ada).
- **Wajib dicek di transkrip ulang:** "Taruna Ikrar", "Hamadi", "Demta", "HALO BPOM", "satu lima nol nol lima tiga tiga". Bila salah, perbaiki ejaan di teks lalu ulang kalimat itu saja dengan seed sama.
- **Jeda:** ±0,6 dtk setelah "dijemur…". Bila engine tidak memberi jeda, sisipkan hening saat mix.
- **Target durasi:** ±84–86 dtk. Jika > 88 dtk, ulang dengan kecepatan sedikit lebih cepat (bukan potong teks).
- **Simpan sebagai:** `audio/vo_susan_full.wav` + catat `project_id` di `audio/audio-log.md`.
- **Stempel kata:** `transcribe_file` (format json, word timestamps) → simpan `audio/vo_susan_kata.json`. Ini dasar timing 32 shot di `episode_bedah_ikan_asin.py`.

## 2 · BGM (YuE2 Studio)

- **Prompt:** "Instrumental light investigative documentary underscore, pizzicato strings, soft ticking clock percussion, muted marimba, low warm synth pad, curious and tense but never scary, second half resolves into warm hopeful ukulele and marimba, 92 BPM"
- Adapter instrumental, durasi 90 dtk, FLAC, seed 128 / lm_seed 128.
- Bersihkan sisa vokal dengan `separate_file` bila ada.
- Titik pindah nada idealnya di ±59 dtk ("Tapi tenang"); kalau tidak pas, penyelarasan dilakukan saat mix di sini.
- **Simpan sebagai:** `audio/bgm_yue2_92bpm.flac` + catat `song_id` di `audio/audio-log.md`.

## 3 · Caption

VO pakai suara AI → caption wajib memuat **"Narasi menggunakan suara AI"** (preseden 11-002).
