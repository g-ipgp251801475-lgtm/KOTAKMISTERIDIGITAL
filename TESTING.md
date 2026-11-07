# Rekod pengesahan

Ujian automatik menggunakan Chromium dan Playwright pada 8 November 2026 (MYT).

Lulus:
- Tujuh imej asal berjaya dimuatkan; kandungan binari dibandingkan dengan ZIP asal.
- Tiga kotak boleh dibuka dalam susunan bebas (2 → 1 → 3).
- Imej dan jawapan betul: Cemas (B), Risau (C), Sedih (A).
- Jawapan salah memberi maklum balas tepat dan membenarkan percubaan semula.
- Jawapan betul memberi maklum balas tepat dan satu syiling sahaja.
- Kemajuan, kotak selesai, sambutan akhir dan reset berfungsi.
- Web Audio dalam keadaan running selepas klik; muzik dan bunyi boleh dikawal secara berasingan.
- Skrin 1366×900, 1024×768, 768×1024 dan 390×844 tanpa limpahan mendatar.
- Tiada ralat JavaScript semasa aliran permainan.

Kaedah: halaman projek sebenar dan semua aset dihidangkan kepada Chromium menggunakan pemintasan permintaan Playwright (route.fulfill). Ini menguji HTML/CSS/JS sebenar tanpa bergantung pada relay preview yang tidak tersedia. Pengesahan ini bukan ujian hos produksi. Ketepatan pendengaran muzik/tepukan tidak disahkan oleh pendengar manusia; audio ialah sintesis Web Audio, bukan rakaman tepukan.

Batasan hos: relay sites-preview tidak tersedia. GitHub Pages memerlukan pemilik mengaktifkan Settings → Pages kerana API integrasi memberi HTTP 403.
