import { useRoute } from "@react-navigation/native";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Footer() {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuContainer}>
        <Link href="/">
          <FontAwesome
            name="home"
            style={[styles.icon, route.name === "index" && styles.active]}
          />
          <Text style={styles.iconText}>Home</Text>
        </Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuContainer}>
        <Link href="/notification">
          <FontAwesome
            name="bell"
            style={[
              styles.icon,
              route.name === "notification" && styles.active,
            ]}
          />
          <Text style={styles.iconText}>Notification</Text>
        </Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuContainer}>
        <Link href="/account">
          <FontAwesome
            name="user"
            style={[styles.icon, route.name === "account" && styles.active]}
          />
          <Text style={styles.iconText}>Account</Text>
        </Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuContainer}>
        <Link href="/cart">
          <FontAwesome
            name="cart-arrow-down"
            style={[styles.icon, route.name === "cart" && styles.active]}
          />
          <Text style={styles.iconText}>Cart</Text>
        </Link>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => alert("log out?")}
      >
        <FontAwesome name="power-off" />
        <Text style={styles.iconText}>Logout</Text>
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
