/* =================== TABLE OF CONTENT ================= 
1.1: Import Section
1.2: Default Function
  2.1: Function to Open Kostum Detail Page
  2.2: Main Render
    3.1: "Chileorent" Title & Subtitle Text
    3.2: Map Kostum Data
========================================================= */

// 1.1: Import Section
import { ScrollView, Text } from "react-native";
import type { RelativePathString } from "expo-router";
import { router } from "expo-router";
import { KostumCard } from "@/components";
import { kostums } from "@/constants";
import { kostumStyles } from "@/styles";

// 1.2: Default Function
export default function Index() {
  // 2.1: Function to Open Kostum Detail Page
  function openKostum(idKostum: number) {
    router.push(`/kostum/${idKostum}` as RelativePathString);
  }

  // 2.2: Main Render
  return (
    <ScrollView contentContainerStyle={kostumStyles.container}>

      {/* 3.1: "Chileorent" Title & Subtitle Text */}
      <Text style={kostumStyles.title}>Daftar Kostum Chileorent</Text>
      <Text style={kostumStyles.subtitle}>
        Marketplace Sewa & Solusi Alih Fungsi Kostum Cosplay
      </Text>

      {/* 3.2: Map Kostum Data */}
      {kostums.map(
        (kostum) => (
          <KostumCard
            key={kostum.idKostum}
            kostum={kostum}
            onPress={() => openKostum(kostum.idKostum)}
          />
        ) // [1]
      )}

    </ScrollView>
  );
}

/* ======================== EXPLANATION ========================
[1]: Kita mengambil semua data kostum cosplay dari @/constants dan menampilkannya satu per satu
dengan map() menggunakan component KostumCard, serta mengirimkan prop onPress untuk membuka halaman detail /kostum/[idKostum].
=================================================================*/
