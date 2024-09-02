import { StyleSheet, Text, View } from "react-native";

export default function Account() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 30 }}>Account</Text>
      </View>
      <Text style={{ color: "#000" }}>
        This app includes example code to help you get started.
      </Text>
    </View>
  );
}

// Remove the header by setting headerShown to false
export const config = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
