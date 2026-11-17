## Ringkasan Perubahan
Menyelesaikan Tugas 4 Pemrograman Web dengan mengintegrasikan **React Router** dan **Tailwind CSS** ke dalam template proyek berbasis Vite dan TypeScript. Fitur yang dikembangkan meliputi:
- Pembuatan dan penataan antarmuka halaman daftar produk (*ProductsPage*) menggunakan gaya utilitas Tailwind CSS.
- Implementasi logika CRUD lengkap (Tambah produk baru melalui modal, Edit, Hapus, dan Pencarian produk).
- Penerapan *Dynamic Routing* (`/products/:id`) untuk halaman detail produk menggunakan `useParams` dari `react-router-dom`.
- Penambahan halaman penanganan rute tidak ditemukan (Error 404) beserta tombol tautan kembali ke beranda.

## Bukti Pengujian
Berikut adalah ringkasan skenario pengujian fungsionalitas aplikasi:

| Skenario | Hasil yang Diharapkan | Hasil Aktual |
|---|---|---|
| Membuka halaman daftar produk (`/products`) | Daftar grid produk, kolom pencarian, dan tombol tambah produk ditampilkan dengan baik | Sesuai |
| Menambah produk baru via modal | Produk baru berhasil ditambahkan dan langsung masuk ke dalam daftar (misal: Pensil Warna) | Sesuai |
| Memilih / mengklik salah satu produk | Berpindah halaman ke `/products/:id` dan menampilkan detail informasi sesuai ID produk yang dipilih | Sesuai |
| Mengakses URL yang tidak terdaftar (`/asal-asalan`) | Halaman 404 ditampilkan lengkap dengan pesan error dan tombol kembali ke beranda | Sesuai |

## Dokumentasi

1. Halaman Daftar Produk
<img width="2880" height="1800" alt="view1" src="https://github.com/user-attachments/assets/7f4240d2-94de-4237-ab80-3304b328c774" />

2. Membuat Produk Baru
- pop up tambah produk
<img width="2880" height="1800" alt="view2" src="https://github.com/user-attachments/assets/46dc3472-2997-4534-b185-8e30643cc271" />

- hasil produk baru yang telah ditambahkan (Pensil Warna)
<img width="1534" height="962" alt="view3" src="https://github.com/user-attachments/assets/ba54047a-a90d-47f7-97fb-e533b8b50024" />

3. Halaman Detail Produk (/products/1)
<img width="2880" height="1800" alt="Screenshot (1240)" src="https://github.com/user-attachments/assets/95299e79-6e89-4cbc-8d99-ed0b52fbcefc" />

4. Halaman 404 merespons rute yang tidak sesuai
<img width="2880" height="1800" alt="Screenshot (1241)" src="https://github.com/user-attachments/assets/14a7a0b4-a91a-4171-8f65-bc36dc46348a" />

---

1. Bukti Commit
<img width="2880" height="1800" alt="commit1" src="https://github.com/user-attachments/assets/7cb3ea8c-64d7-48a5-96b4-439cc64591ac" />
<img width="2880" height="1800" alt="commit2" src="https://github.com/user-attachments/assets/6ab14bf1-c623-4d76-8575-dffede9295bd" />
<img width="2880" height="1800" alt="commit3" src="https://github.com/user-attachments/assets/6f546461-be46-4bea-ac9a-879b50317e61" />
