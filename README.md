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

## Reka bentuk 3D (kemas kini visual)
Permainan asal dikekalkan. Peti kini menggunakan SVG berlapis yang diinspirasikan oleh `01_treasure_chests_reference.png`, dengan tekstur kayu, bingkai emas, mangga, cahaya, syiling dan tudung beranimasi. Gambar situasi muncul dari peti sebelum kad soalan dibuka.

Watak baharu: `02_briar_bear.png` di sisi Kotak 1, `03_bramble_bear.png` di sisi Kotak 2 dan `04_logger_vick.png` di sisi Kotak 3. `05_three_characters.png` digunakan pada sambutan akhir. Semua PNG asal dikekalkan tanpa pemampatan, pemotongan atau perubahan piksel. ZIP baharu tidak mengandungi gambar situasi; tiga gambar asal terus digunakan.

Fon Nunito dimuatkan secara tempatan; lesen SIL Open Font License disertakan dalam `assets/Nunito-OFL.txt`. Teks kemajuan dan syiling kekal dinamik, bukannya ditetapkan pada 2/3. Pada telefon, tiga pasangan watak dan peti disusun menegak supaya tidak bertindih.
