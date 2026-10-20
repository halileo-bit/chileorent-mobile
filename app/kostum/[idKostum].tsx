import { Pressable, ScrollView, Text } from "react-native";

import {
  router,
  useLocalSearchParams,
} from "expo-router";

import { useEffect, useState } from "react";

import {
  KelengkapanCard,
  SewaCard,
} from "@/components";

import { kostums } from "@/constants";

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

import { kostumStyles } from "@/styles";

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

  const kostum = kostums.find(
    (item) =>
      item.idKostum === Number(idKostum)
  );

  useEffect(() => {
    const data = getSewasByKostum(
      Number(idKostum)
    );

    const result = filterSewas(
      data,
      filter
    );

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
    </ScrollView>
  );
}
