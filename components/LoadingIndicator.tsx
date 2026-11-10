import { ActivityIndicator, Text, View } from "react-native";
import { ulasanStyles } from "@/styles";

interface LoadingIndicatorProps {
  pesan?: string;
}

export default function LoadingIndicator({
  pesan = "Memuat data dari External API...",
}: LoadingIndicatorProps) {
  return (
    <View style={ulasanStyles.stateContainer}>
      <ActivityIndicator size="large" color="#4f46e5" />
      <Text style={ulasanStyles.stateText}>{pesan}</Text>
    </View>
  );
}
