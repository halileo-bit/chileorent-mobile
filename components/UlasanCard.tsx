import { Text, View } from "react-native";
import type { UlasanExternal } from "@/types";
import { ulasanStyles } from "@/styles";

interface UlasanCardProps {
  ulasan: UlasanExternal;
}

export default function UlasanCard({ ulasan }: UlasanCardProps) {
  return (
    <View style={ulasanStyles.card}>
      <View style={ulasanStyles.headerRow}>
        <View>
          <Text style={ulasanStyles.userName}>{ulasan.user.fullName}</Text>
          <Text style={ulasanStyles.userHandle}>@{ulasan.user.username}</Text>
        </View>
        <View style={ulasanStyles.ratingBadge}>
          <Text style={ulasanStyles.ratingText}>★ {ulasan.rating || 5}.0</Text>
        </View>
      </View>

      <Text style={ulasanStyles.commentBody}>{`"${ulasan.body}"`}</Text>

      <View style={ulasanStyles.footerRow}>
        <Text style={ulasanStyles.dateText}>📅 {ulasan.tanggal || "Terverifikasi"}</Text>
        <Text style={ulasanStyles.likesText}>❤️ {ulasan.likes} menyukai</Text>
      </View>
    </View>
  );
}
