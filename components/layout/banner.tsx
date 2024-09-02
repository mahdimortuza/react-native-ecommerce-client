import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");

export default function Banner() {
  return (
    <View style={styles.container}>
      <Text>Banner data</Text>
      <Image
        style={styles.bannerImg}
        source={require("@/assets/images/banner.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  bannerImg: {
    height: 150,
    borderRadius: 5,
    width,
  },
});
