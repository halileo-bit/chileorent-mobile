import { Pressable, Text, View } from "react-native";
import { ulasanStyles } from "@/styles";

interface ErrorStateProps {
  pesan: string;
  onRetry: () => void;
}

export default function ErrorState({ pesan, onRetry }: ErrorStateProps) {
  return (
    <View style={ulasanStyles.stateContainer}>
      <Text style={{ fontSize: 28 }}>⚠️</Text>
      <Text style={ulasanStyles.errorText}>{pesan}</Text>
      <Pressable onPress={onRetry} style={ulasanStyles.retryButton}>
        <Text style={ulasanStyles.retryButtonText}>🔄 Coba Lagi</Text>
      </Pressable>
    </View>
  );
}
