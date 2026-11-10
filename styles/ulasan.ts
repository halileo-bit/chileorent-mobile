import { StyleSheet } from "react-native";

export const ulasanStyles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 14,
    marginBottom: 10,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: "#4f46e5",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  userName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1e293b",
  },
  userHandle: {
    fontSize: 12,
    color: "#64748b",
  },
  ratingBadge: {
    backgroundColor: "#fef3c7",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#d97706",
  },
  commentBody: {
    fontSize: 14,
    color: "#334155",
    lineHeight: 20,
    fontStyle: "italic",
    marginBottom: 8,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateText: {
    fontSize: 12,
    color: "#94a3b8",
  },
  likesText: {
    fontSize: 12,
    color: "#e11d48",
    fontWeight: "600",
  },
  // Style untuk Loading & Error
  stateContainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8fafc",
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  stateText: {
    marginTop: 8,
    fontSize: 14,
    color: "#64748b",
    textAlign: "center",
  },
  errorText: {
    marginTop: 8,
    fontSize: 14,
    color: "#dc2626",
    textAlign: "center",
    fontWeight: "500",
  },
  retryButton: {
    marginTop: 12,
    backgroundColor: "#4f46e5",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  retryButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 13,
  },
});
