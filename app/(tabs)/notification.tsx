import { StyleSheet, Text, View } from "react-native";

export default function Notification() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Oops ! you do not have any notification yet.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
