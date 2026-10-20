/* =================== TABLE OF CONTENT ================= 
1.1: Import Section
1.2: Props Declaration
1.3: Default Function
    2.1: Main Render
        3.1: Kostum Name & Ukuran
        3.2: Kostum Seri & Kategori
        3.3: Kostum Grade (Kondisi Fisik)
        3.4: Kostum Pemilik / Mitra Rental
        3.5: Kostum Harga Sewa
========================================================= */

// 1.1: Import Section
import {
    formatRupiah,
    getGrade,
    getKategori,
    getPemilik,
    getSeri,
    getUkuran,
} from "@/functions";
import { kostumStyles } from "@/styles";
import type { Kostum } from "@/types";
import { Pressable, Text, View } from "react-native";

// 1.2: Props Declaration
type Props = {
    kostum: Kostum;
    onPress: () => void;
}; // [1]

// 1.3: Default Function
export default function KostumCard({ kostum, onPress }: Props) { // [2]
    // 2.1: Main Render
    return (
        <Pressable onPress={onPress}>
            <View style={kostumStyles.card}>
                <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
                    Kostum #{kostum.idKostum}
                </Text>

                {/* 3.1: Kostum Name & Ukuran */}
                <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
                    {kostum.namaKostum} (Size {getUkuran(kostum.idUkuran)}) {/* [3] */}
                </Text>

                {/* 3.2: Kostum Seri & Kategori */}
                <Text style={kostumStyles.text}>
                    Seri: {getSeri(kostum.idSeri)} - {getKategori(kostum.idKategori)} {/* [3] */}
                </Text>

                {/* 3.3: Kostum Grade (Kondisi Fisik) */}
                <Text style={kostumStyles.text}>
                    Kondisi: {getGrade(kostum.idGrade)} {/* [3] */}
                </Text>

                {/* 3.4: Kostum Pemilik / Mitra Rental */}
                <Text style={kostumStyles.text}>
                    Pemilik: {getPemilik(kostum.idPemilik)} {/* [3] */}
                </Text>

                {/* 3.5: Kostum Harga Sewa */}
                <Text style={kostumStyles.text}>
                    Harga Sewa: {formatRupiah(kostum.hargaSewa)} / 3 Hari {/* [3] */}
                </Text>
            </View>
        </Pressable>
    );
}

/* ======================== EXPLANATION ========================
[1]:
const props: Props = {
  kostum: {
    idKostum: number,
    namaKostum: string,
    idSeri: number,
    idKategori: number,
    idUkuran: number,
    idGrade: number,
    idPemilik: number,
    hargaSewa: number
  },
  onPress: () => void
};
[2]: Ini berarti fungsi KostumCard menerima parameter berupa Props (sesuai dengan yang dideklarasikan sebelumnya).
Props berisi objek "kostum" dan fungsi "onPress" untuk navigasi ke halaman detail saat kartu ditekan (Pressable).
[3]: Karena di constants/kostum.ts hanya disimpan ID relasinya saja (idSeri, idKategori, idUkuran, idGrade, idPemilik),
maka kita memanggil fungsi pencocok di @/functions untuk menampilkan nama aslinya beserta format harga Rupiah.
=================================================================*/
