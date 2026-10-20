/* =================== TABLE OF CONTENT ================= 
1.1: Import Section
1.2: Default Function
  2.1: Main Render
    3.1: "Chileorent" Title & Subtitle Text
    3.2: Map Kostum Data
========================================================= */

// 1.1: Import Section
import { ScrollView, Text } from "react-native";
import { KostumCard } from "@/components";
import { kostums } from "@/constants";
import { kostumStyles } from "@/styles";

// 1.2: Default Function
export default function Index() {

  // 2.1: Main Render
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
          <KostumCard key={kostum.idKostum} kostum={kostum} />
        ) // [1]
      )}

    </ScrollView>
  );
}

/* ======================== EXPLANATION ========================
[1]: Kita mengambil semua data kostum cosplay dari @/constants dan menampilkannya satu per satu
dengan map() menggunakan component KostumCard yang sudah kita buat sebelumnya di @/components.
=================================================================*/
