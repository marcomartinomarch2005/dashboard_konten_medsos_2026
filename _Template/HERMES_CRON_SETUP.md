> ⚠️ **OBSOLETE sejak 4 September 2026.** Agen Hermes tidak lagi dipakai —
> lihat PROTOCOL.md §8. Reminder Telegram sekarang lewat trigger Apps Script,
> panduan setup: `google_apps_script/SETUP.md` §4–5. File ini disimpan sebagai
> referensi historis saja.

# Setup Cron Otomatis Hermes — @bpom.jayapura (ARSIP, TIDAK AKTIF)

Jalankan perintah-perintah berikut di chat Hermes untuk mengaktifkan reminder otomatis.

---

## LANGKAH 1 — Set Telegram Home Channel

Kirim pesan ini ke bot Telegram BPOM Jayapura, lalu catat chat_id yang muncul:
```
/start
```
Kemudian di terminal Hermes (PowerShell):
```
docker exec -it hermes_workspace-hermes-agent-1 /opt/hermes/.venv/bin/hermes config set TELEGRAM_HOME_CHANNEL <chat_id_kamu>
```

---

## LANGKAH 2 — Cron Reminder Mingguan (Minggu Malam)

Ketik di chat Hermes:
```
/schedule "0 20 * * 0" Cek status konten di /opt/data/konten_bpom/HANDOFF.md dan Airtable (Base: appZbKbl6inYv8y2m, Table: tblfl6n2LU6bGUR5P). Kirim ringkasan ke Telegram: konten mana yang deadline minggu ini, mana yang belum ada naskah, dan apa yang perlu dikerjakan segera.
```

---

## LANGKAH 3 — Cron Weekly Report (Jumat Sore)

Ketik di chat Hermes:
```
/schedule "0 15 * * 5" Buat weekly report konten @bpom.jayapura minggu ini berdasarkan data Airtable (Base: appZbKbl6inYv8y2m). Format: berapa konten sudah tayang, berapa naskah selesai, berapa belum dikerjakan. Kirim ringkasan ke Telegram.
```

---

## Format Pesan Telegram yang Akan Dikirim Hermes

**Reminder Minggu Malam:**
```
📋 STATUS KONTEN MINGGU INI @bpom.jayapura

✅ Sudah tayang: X konten
📝 Naskah selesai: X konten  
⚠️ Belum dikerjakan: X konten
🔴 Terlambat: X konten

Deadline minggu ini:
• [Senin] Judul konten — status
• [Rabu] Judul konten — status
• [Jumat] Judul konten — status

Perlu dikerjakan segera:
• [item]
```
