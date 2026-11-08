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

## Pengesahan selepas reka bentuk semula
- Soalan, pilihan jawapan, jawapan betul dan laluan gambar situasi dibandingkan dengan versi terdahulu: sama sepenuhnya.
- Lima PNG dan README daripada ZIP baharu dibandingkan bait demi bait: sama dengan fail asal.
- Aliran penuh dimainkan melalui Chromium: susunan kotak bebas, animasi gambar muncul sebelum dialog, salah/ulang cuba, betul/syiling, tiada sambutan awal, sambutan akhir dan reset.
- Kawalan muzik/bunyi bebas dan keadaan AudioContext disemak; tiada ralat JavaScript.
- Imej baharu, imej situasi dan latar dimuatkan; tangkapan skrin komputer, tablet dan telefon diperiksa.
- Fon Nunito disimpan bersama projek untuk mengelakkan kebergantungan CDN semasa bermain.

## Transparent characters
Verified PNG alpha ranges 0–255 with transparent canvas corners and visible full-body silhouettes. Chromium checks cover all three cutout images loading, normal blend mode, three distinct looping animations, character/chest separation at 1366/1024/768/390px, happy reaction and reduced-motion disabling animation and sparkles. The complete question/retry/coin/audio/final/reset regression flow also passes. Original source PNGs remain unchanged; main-screen references use the new alpha cutouts.
