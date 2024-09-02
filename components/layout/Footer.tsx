import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Footer() {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuContainer}>
        <FontAwesome
          name="home"
          style={[styles.icon, route.name === "HomeScreen" && styles.active]}
        />
        <Text style={styles.iconText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuContainer}>
        <FontAwesome name="home" style={styles.icon} />
        <Text style={styles.iconText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  menuContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 25,
    color: "#000",
  },
  iconText: {
    color: "#000",
    fontSize: 10,
  },
  active: {
    color: "blue",
  },
});
