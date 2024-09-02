import { StyleSheet, Text, View } from "react-native";

export default function Contact() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 30 }}>Contact</Text>
      </View>
      <Text style={{ color: "#000" }}>
        This app includes example code to help you get started.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
