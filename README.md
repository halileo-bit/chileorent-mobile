# 🎭 Chileorent Mobile (Modul 1, Modul 2 & Modul 3)

**Marketplace Sewa & Solusi Alih Fungsi Kostum Cosplay Terpercaya**

Aplikasi mobile menggunakan **Expo (React Native + TypeScript)** dengan tema dan data dari **Chileorent**.

---

## 🌟 Pemenuhan Kriteria Penilaian Modul 3 (Asynchronous & API Call)

| Kriteria Penilaian | Bobot | Lokasi Implementasi & Penjelasan |
|---|---|---|
| **1. Mengambil data dari External API dan memasukkannya ke dalam Object menggunakan Interface** | 10% | - **Interface**: `types/ulasan.ts` mendefinisikan `interface UlasanExternal`, `interface UserReviewer`, dan `interface ApiResponse<T>`.<br>- **External API**: `services/ulasanService.ts` memanggil endpoint publik `https://dummyjson.com/comments` dan memetakan datanya ke dalam Array of Object sesuai Interface. |
| **2. Menggunakan Custom & Pre-built Async Function** | 10% | - **Pre-built Async Function**: `fetch()` bawaan JavaScript runtime digunakan untuk HTTP request ke endpoint API.<br>- **Custom Async Function**: `fetchUlasanKostum(idKostum, simulateError)` pada `services/ulasanService.ts` yang menggabungkan pengecekan koneksi, fetching, dan validasi data. |
| **3. Menggunakan fungsi `.then()`, `.resolve()`, dan `.reject()`** | 10% | - **`resolve()` & `reject()`**: `services/api.ts` pada fungsi `checkKoneksiApi()` dan `validasiDataUlasan()` yang menggunakan constructor `new Promise((resolve, reject) => { ... })`. Menjalankan `resolve()` saat operasi sukses dan `reject()` saat simulasi error/koneksi terputus.<br>- **`.then()`**: `fetchUlasanWithThen()` dan `handleMuatUlasan()` menggunakan rantai `.then()` untuk memproses respon API dan `.catch()` untuk menangani rejection. |

---

## 📂 Struktur Folder

```text
chileorent-mobile/
├── app/
│   ├── _layout.tsx          # Konfigurasi Stack Navigation (Expo Router)
│   ├── index.tsx            # Halaman utama daftar KostumCard + navigasi router.push
│   └── kostum/
│       └── [idKostum].tsx   # Halaman detail kostum: filter sewa + ulasan External API (Modul 3)
├── components/
│   ├── index.ts             # Export seluruh komponen
│   ├── KostumCard.tsx       # Komponen kartu kostum cosplay (Pressable)
│   ├── KelengkapanCard.tsx  # Komponen kartu item kelengkapan kostum
│   ├── SewaCard.tsx         # Komponen kartu riwayat & status sewa (Escrow)
│   ├── UlasanCard.tsx       # [Modul 3] Komponen kartu ulasan penyewa dari API eksternal
│   ├── LoadingIndicator.tsx # [Modul 3] Komponen indikator loading saat fetch data
│   └── ErrorState.tsx       # [Modul 3] Komponen error state dengan tombol coba lagi (reject handler)
├── constants/
│   ├── index.ts             # Export seluruh data konstan
│   ├── grade.ts             # Data standar mutu fisik kostum (Grade A/B/C)
│   ├── kategori.ts          # Data kategori kostum (Anime, Game, VTuber, Tokusatsu)
│   ├── kelengkapan.ts       # Data item kelengkapan per kostum
│   ├── kostum.ts            # Data utama katalog kostum cosplay
│   ├── pemilik.ts           # Data pemilik / mitra toko rental & titip sewa
│   ├── seri.ts              # Data judul seri anime/game/vtuber
│   ├── sewa.ts              # Data riwayat jadwal sewa & status Escrow per kostum
│   └── ukuran.ts            # Data ukuran kostum (S, M, L, XL)
├── functions/
│   ├── index.ts             # Export seluruh fungsi pencocok ID, filter & helper
│   ├── formatHarga.ts       # Fungsi format angka ke Rupiah (Rp)
│   ├── grade.ts             # Fungsi getGrade(idGrade)
│   ├── kategori.ts          # Fungsi getKategori(idKategori)
│   ├── kelengkapan.ts       # Fungsi getKelengkapansByKostum(idKostum)
│   ├── pemilik.ts           # Fungsi getPemilik(idPemilik)
│   ├── seri.ts              # Fungsi getSeri(idSeri)
│   ├── sewa.ts              # Fungsi getSewasByKostum(idKostum) & filterSewas(data, filter)
│   └── ukuran.ts            # Fungsi getUkuran(idUkuran)
├── services/
│   ├── index.ts             # [Modul 3] Export seluruh service
│   ├── api.ts               # [Modul 3] Custom Promise constructor: new Promise((resolve, reject) => ...)
│   └── ulasanService.ts     # [Modul 3] Custom async function, fetch(), & .then() chaining
├── styles/
│   ├── index.ts             # Export seluruh style
│   ├── kelengkapan.ts       # StyleSheet untuk KelengkapanCard
│   ├── kostum.ts            # StyleSheet untuk halaman utama, detail, dan tombol filter
│   ├── sewa.ts              # StyleSheet untuk SewaCard
│   └── ulasan.ts            # [Modul 3] StyleSheet untuk UlasanCard, status loading & error
└── types/
    ├── index.ts             # Export seluruh tipe data TypeScript
    ├── grade.ts             # Tipe Grade
    ├── kategori.ts          # Tipe Kategori
    ├── kelengkapan.ts       # Tipe Kelengkapan
    ├── kostum.ts            # Tipe Kostum
    ├── pemilik.ts           # Tipe Pemilik
    ├── seri.ts              # Tipe Seri
    ├── sewa.ts              # Tipe Sewa
    ├── ukuran.ts            # Tipe Ukuran
    └── ulasan.ts            # [Modul 3] Interface UserReviewer, UlasanExternal, & ApiResponse
```

## 🚀 Cara Menjalankan Aplikasi

1. Masuk ke folder project dan pastikan dependencies terpasang:
   ```bash
   npm install
   ```

2. Jalankan aplikasi dengan Expo Go:
   ```bash
   npx expo start --go
   ```

3. Pada halaman detail kostum (`/kostum/[idKostum]`), Anda dapat menguji:
   - **⚡ Muat Ulang (Resolve)**: Menguji pengambilan ulasan dari External API secara sukses.
   - **⚠️ Uji Error (Reject)**: Menguji penanganan error ketika Promise di-`reject()`.
