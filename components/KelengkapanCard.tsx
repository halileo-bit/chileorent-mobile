import { Text, View } from "react-native";

import type { Kelengkapan } from "@/types";
import { kelengkapanStyles } from "@/styles";

type Props = {
    kelengkapan: Kelengkapan;
};

export default function KelengkapanCard({ kelengkapan }: Props) {
    return (
        <View style={kelengkapanStyles.card}>
            <Text style={kelengkapanStyles.title}>
                Item #{kelengkapan.idKelengkapan}
            </Text>

            <Text style={kelengkapanStyles.text}>
                {kelengkapan.namaKelengkapan}
            </Text>
        </View>
    );
}
