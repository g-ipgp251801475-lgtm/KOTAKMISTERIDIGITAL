# Kotak Misteri Digital
Permainan Bahasa Melayu Tahun 4 — Keselamatan: Waspada Selalu.

## Main / preview
Buka `index.html` dalam Chrome, Edge, Firefox atau Safari. Untuk pelayan tempatan, jalankan `python3 -m http.server 8000` di folder projek, kemudian buka http://localhost:8000. Tiada pemasangan pakej diperlukan.

Klik mana-mana kotak. Muzik bermula selepas interaksi pertama. Muzik dan kesan bunyi mempunyai kawalan berasingan. Kemajuan disimpan dalam sesi tab pelayar (jika dibenarkan); MAIN SEMULA mengosongkannya.

## Ubah suai
Sunting `QUESTIONS` di bahagian atas `script.js`. Setiap objek mengandungi `image`, `alt`, `question`, `options` dan `correct` (indeks bermula 0). Susunan asal: Cemas, Risau, Sedih. Takut dan Lega ialah pilihan pengalih perhatian. Tiga situasi digunakan seperti diminta.

Sunting warna dan susun atur dalam `style.css`. Tujuh PNG ialah aset asal yang diberikan pengguna. Nama fail dikekalkan walaupun dua nama watak tidak sepadan dengan rupa imej. README dalam ZIP ialah rujukan aset; soalan dan susunan mengikut arahan pengguna.

## Audio
Web Audio menjana melodi asli pada gain 0.2, kilauan, bunyi jawapan dan tepukan sintetik daripada hingar pendek. Tiada lagu luaran, pertuturan atau kebergantungan rangkaian. Pelayar perlu menyokong Web Audio. Kawalan bunyi tidak mengubah muzik.

## GitHub Pages & Google Sites
Muat naik `index.html`, `style.css`, `script.js` dan `assets/` ke repositori sasaran. Di Settings → Pages, pilih Deploy from a branch dan root folder. Selepas URL HTTPS tersedia, dalam Google Sites pilih Insert → Embed → URL dan masukkan pautan Pages. Cadangan tinggi benaman: 900px; mod telefon boleh menatal. Gunakan hos awam untuk akses murid; pautan Sites persendirian memerlukan akses pemilik.

`dist/` ialah salinan statik untuk Sites hosting. Selepas suntingan, salin semula tiga fail utama dan folder assets ke dist sebelum deploy. Projek tidak memerlukan backend.
