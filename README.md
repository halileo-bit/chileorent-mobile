# 🎭 Chileorent Mobile (Modul 1 & Modul 2)

**Marketplace Sewa & Solusi Alih Fungsi Kostum Cosplay Terpercaya**

Aplikasi mobile menggunakan **Expo (React Native + TypeScript)** yang mengadopsi struktur `mobile.example.assignment2` (Modul 1 & Modul 2) dengan tema dan data dari **Chileorent**.

## 📂 Struktur Folder

```text
chileorent-mobile/
├── app/
│   ├── _layout.tsx          # Konfigurasi Stack Navigation (Expo Router)
│   ├── index.tsx            # Halaman utama daftar KostumCard + navigasi router.push
│   └── kostum/
│       └── [idKostum].tsx   # Halaman detail kostum dinamis (useLocalSearchParams, useState, useEffect, Filter)
├── components/
│   ├── index.ts             # Export seluruh komponen
│   ├── KostumCard.tsx       # Komponen kartu kostum cosplay (Pressable)
│   ├── KelengkapanCard.tsx  # Komponen kartu item kelengkapan kostum
│   └── SewaCard.tsx         # Komponen kartu riwayat & status sewa (Escrow)
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
├── styles/
│   ├── index.ts             # Export seluruh style
│   ├── kelengkapan.ts       # StyleSheet untuk KelengkapanCard
│   ├── kostum.ts            # StyleSheet untuk halaman utama, detail, dan tombol filter
│   └── sewa.ts              # StyleSheet untuk SewaCard
└── types/
    ├── index.ts             # Export seluruh tipe data TypeScript
    ├── grade.ts             # Tipe Grade
    ├── kategori.ts          # Tipe Kategori
    ├── kelengkapan.ts       # Tipe Kelengkapan
    ├── kostum.ts            # Tipe Kostum
    ├── pemilik.ts           # Tipe Pemilik
    ├── seri.ts              # Tipe Seri
    ├── sewa.ts              # Tipe Sewa
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
