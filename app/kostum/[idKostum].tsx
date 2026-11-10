import { Pressable, ScrollView, Text } from "react-native";

import {
  router,
  useLocalSearchParams,
} from "expo-router";

import { useEffect, useState } from "react";

import {
  ErrorState,
  KelengkapanCard,
  LoadingIndicator,
  SewaCard,
  UlasanCard,
} from "@/components";

import { kostums } from "@/constants";
import { fetchUlasanKostum } from "@/services";
import { kostumStyles } from "@/styles";
import type { UlasanExternal } from "@/types";

import {
  filterSewas,
  formatRupiah,
  getGrade,
  getKategori,
  getKelengkapansByKostum,
  getPemilik,
  getSeri,
  getSewasByKostum,
  getUkuran,
} from "@/functions";

type Filter = "semua" | "selesai" | "aktif";

export default function KostumDetail() {
  const { idKostum } =
    useLocalSearchParams<{
      idKostum: string;
    }>();

  const [filter, setFilter] =
    useState<Filter>("semua");

  const [filteredSewas, setFilteredSewas] =
    useState(
      getSewasByKostum(
        Number(idKostum)
      )
    );

  // State untuk ulasan dari External API (Modul 3)
  const [ulasans, setUlasans] = useState<UlasanExternal[]>([]);
  const [isLoadingUlasan, setIsLoadingUlasan] = useState<boolean>(true);
  const [errorUlasan, setErrorUlasan] = useState<string | null>(null);

  const kostum = kostums.find(
    (item) =>
      item.idKostum === Number(idKostum)
  );

  // Mengambil ulasan dari External API (otomatis tergantung koneksi internet)
  function muatUlasan() {
    setIsLoadingUlasan(true);
    setErrorUlasan(null);

    // Memanggil Custom Async Function yang mengonsumsi External API
    // dengan pemanfaatan .then() untuk menangani resolve dan .catch() untuk reject
    fetchUlasanKostum(Number(idKostum))
      .then((data: UlasanExternal[]) => {
        // [1] .then(): Memasukkan data ke dalam state Object Interface UlasanExternal
        setUlasans(data);
        setIsLoadingUlasan(false);
      })
      .catch((err: Error) => {
        // [2] .catch(): Menangani Promise yang di-reject (offline / timeout)
        setErrorUlasan(err.message || "Gagal memuat ulasan eksternal.");
        setIsLoadingUlasan(false);
      });
  }

  // Load awal ulasan saat halaman dibuka
  useEffect(() => {
    let isMounted = true;

    fetchUlasanKostum(Number(idKostum))
      .then((data: UlasanExternal[]) => {
        if (isMounted) {
          setUlasans(data);
          setIsLoadingUlasan(false);
        }
      })
      .catch((err: Error) => {
        if (isMounted) {
          setErrorUlasan(err.message || "Gagal memuat ulasan eksternal.");
          setIsLoadingUlasan(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [idKostum]);

  // Efek filter status sewa
  useEffect(() => {
    const data = getSewasByKostum(
      Number(idKostum)
    );

    const result = filterSewas(
      data,
      filter
    );

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFilteredSewas(result);
  }, [filter, idKostum]);

  function handleBack() {
    if (router.canGoBack()) {
      router.back();
    }
  }

  if (!kostum) {
    return (
      <ScrollView
        contentContainerStyle={
          kostumStyles.container
        }
      >
        <Text>
          Kostum tidak ditemukan.
        </Text>

        {router.canGoBack() && (
          <Pressable onPress={handleBack}>
            <Text
              style={{
                marginTop: 20,
                fontWeight: "bold",
              }}
            >
              ← Kembali
            </Text>
          </Pressable>
        )}
      </ScrollView>
    );
  }

  const kelengkapans = getKelengkapansByKostum(
    kostum.idKostum
  );

  return (
    <ScrollView
      contentContainerStyle={
        kostumStyles.container
      }
    >
      <Text style={kostumStyles.title}>
        Kostum #{kostum.idKostum}
      </Text>

      <Text
        style={{
          marginBottom: 6,
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        {kostum.namaKostum} (Size {getUkuran(kostum.idUkuran)})
      </Text>

      <Text style={kostumStyles.text}>
        Seri: {getSeri(kostum.idSeri)} ({getKategori(kostum.idKategori)})
      </Text>

      <Text style={kostumStyles.text}>
        Kondisi: {getGrade(kostum.idGrade)}
      </Text>

      <Text style={kostumStyles.text}>
        Pemilik: {getPemilik(kostum.idPemilik)}
      </Text>

      <Text
        style={{
          marginBottom: 20,
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        Harga Sewa: {formatRupiah(kostum.hargaSewa)} / 3 Hari
      </Text>

      {/* KELENGKAPAN KOSTUM */}
      <Text style={kostumStyles.sectionTitle}>
        Kelengkapan Kostum
      </Text>

      {kelengkapans.map((kelengkapan) => (
        <KelengkapanCard
          key={kelengkapan.idKelengkapan}
          kelengkapan={kelengkapan}
        />
      ))}

      {/* RIWAYAT & STATUS SEWA (ESCROW) */}
      <Text style={kostumStyles.sectionTitle}>
        Riwayat & Status Sewa
      </Text>

      {/* FILTER */}
      <Text
        style={{
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Filter Status Sewa
      </Text>

      <Pressable
        onPress={() => setFilter("semua")}
        style={kostumStyles.filterButton}
      >
        <Text>Semua</Text>
      </Pressable>

      <Pressable
        onPress={() => setFilter("selesai")}
        style={kostumStyles.filterButton}
      >
        <Text>Selesai (Escrow Cair)</Text>
      </Pressable>

      <Pressable
        onPress={() => setFilter("aktif")}
        style={kostumStyles.filterButton}
      >
        <Text>Aktif Disewa (Escrow Tertahan)</Text>
      </Pressable>

      {/* HASIL FILTER */}
      {filteredSewas.map((sewa) => (
        <SewaCard
          key={sewa.idSewa}
          sewa={sewa}
        />
      ))}

      {/* =========================================================
          ULASAN & TESTIMONI PENYEWA (EXTERNAL API - MODUL 3)
          Kriteria Penilaian:
          1. Mengambil data dari External API & mapping ke Object Interface
          2. Menggunakan Custom & Pre-built Async Function
          3. Menggunakan fungsi .then(), .resolve(), dan .reject()
         ========================================================= */}
      <Text style={kostumStyles.sectionTitle}>
        Ulasan Penyewa (External API)
      </Text>

      {isLoadingUlasan && (
        <LoadingIndicator pesan="Mengambil ulasan penyewa dari External API..." />
      )}

      {errorUlasan && (
        <ErrorState
          pesan={errorUlasan}
          onRetry={muatUlasan}
        />
      )}

      {!isLoadingUlasan && !errorUlasan && (
        <>
          {ulasans.length === 0 ? (
            <Text style={kostumStyles.text}>Belum ada ulasan untuk kostum ini.</Text>
          ) : (
            ulasans.map((item) => (
              <UlasanCard key={item.id} ulasan={item} />
            ))
          )}
        </>
      )}
    </ScrollView>
  );
}
