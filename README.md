# 🎭 Chileorent Mobile (Modul 1)

**Marketplace Sewa & Solusi Alih Fungsi Kostum Cosplay Terpercaya**

Aplikasi mobile sederhana menggunakan **Expo (React Native + TypeScript)** yang mengadopsi struktur dasar `mobile.example.assignment2` (Modul 1) dengan tema dan data dari **Chileorent**.

## 📂 Struktur Folder

```text
chileorent-mobile/
├── app/
│   └── index.tsx            # Halaman utama yang me-render daftar KostumCard
├── components/
│   ├── index.ts             # Export komponen
│   └── KostumCard.tsx       # Komponen kartu kostum cosplay
├── constants/
│   ├── index.ts             # Export seluruh data konstan
│   ├── grade.ts             # Data standar mutu fisik kostum (Grade A/B/C)
│   ├── kategori.ts          # Data kategori kostum (Anime, Game, VTuber, Tokusatsu)
│   ├── kostum.ts            # Data utama katalog kostum cosplay
│   ├── pemilik.ts           # Data pemilik / mitra toko rental & titip sewa
│   ├── seri.ts              # Data judul seri anime/game/vtuber
│   └── ukuran.ts            # Data ukuran kostum (S, M, L, XL)
├── functions/
│   ├── index.ts             # Export seluruh fungsi pencocok ID & helper
│   ├── formatHarga.ts       # Fungsi format angka ke Rupiah (Rp)
│   ├── grade.ts             # Fungsi getGrade(idGrade)
│   ├── kategori.ts          # Fungsi getKategori(idKategori)
│   ├── pemilik.ts           # Fungsi getPemilik(idPemilik)
│   ├── seri.ts              # Fungsi getSeri(idSeri)
│   └── ukuran.ts            # Fungsi getUkuran(idUkuran)
├── styles/
│   ├── index.ts             # Export style
│   └── kostum.ts            # StyleSheet untuk halaman dan kartu kostum
└── types/
    ├── index.ts             # Export seluruh tipe data TypeScript
    ├── grade.ts             # Tipe Grade
    ├── kategori.ts          # Tipe Kategori
    ├── kostum.ts            # Tipe Kostum
    ├── pemilik.ts           # Tipe Pemilik
    ├── seri.ts              # Tipe Seri
    └── ukuran.ts            # Tipe Ukuran
```

## 🚀 Cara Menjalankan Aplikasi

1. Masuk ke folder project dan install dependencies (jika belum):
   ```bash
   npm install
   ```

2. Jalankan aplikasi dengan Expo Go sesuai instruksi modul:
   ```bash
   npx expo start --go
   ```
