# Manajemen Produk (Tugas 3 - Pemrograman Web)

Aplikasi frontend React + Tailwind CSS untuk mengelola daftar produk dan harga sebagai lanjutan dari rangkaian tugas Manajemen Produk (Tugas 1 & Tugas 2).

## Fitur

- **Daftar Produk**: Menampilkan kartu produk berisi ID, nama produk, harga terformat (`Rp5.000`), dan tombol aksi `Edit` serta `Hapus`.
- **Pencarian Real-Time**: Filter daftar produk berdasarkan nama produk beserta penghitung jumlah produk yang ditampilkan.
- **Tambah Produk**: Pop-up modal form dengan validasi nama wajib diisi dan harga bilangan bulat lebih dari `0`.
- **Edit Produk**: Pop-up modal yang terisi data produk terpilih beserta ID produk dan validasi input.
- **Hapus Produk**: Pop-up konfirmasi penghapusan dengan preview detail produk sebelum dihapus.

## Menjalankan Proyek

```bash
npm install
npm run dev
```

Perintah verifikasi:

```bash
npm test
npm run lint
npm run build
```
