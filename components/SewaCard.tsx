import { Text, View } from "react-native";

import type { Sewa } from "@/types";
import { sewaStyles } from "@/styles";

type Props = {
    sewa: Sewa;
};

export default function SewaCard({ sewa }: Props) {
    return (
        <View style={sewaStyles.card}>
            <Text style={sewaStyles.title}>
                Penyewa: {sewa.namaPenyewa}
            </Text>

            <Text style={sewaStyles.text}>
                Jadwal: {sewa.tanggalSewa}
            </Text>

            <Text style={sewaStyles.text}>
                Skema: {sewa.skemaBayar}
            </Text>

            <Text
                style={{
                    fontSize: 16,
                    fontWeight: "bold",
                }}
            >
                {sewa.isSelesai
                    ? "Selesai (Dana Escrow Cair)"
                    : "Aktif Disewa (Escrow Tertahan)"}
            </Text>
        </View>
    );
}
