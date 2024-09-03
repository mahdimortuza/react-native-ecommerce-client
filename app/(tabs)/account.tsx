import { UserData } from "@/data/userData";
import { Href, Link, useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Account() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={{ uri: UserData.profilePic }} style={styles.image} />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.name}>
          Hi <Text style={{ color: "green" }}>{UserData.name}</Text>
        </Text>
        <Text>email: {UserData.email}</Text>
        <Text>contact: {UserData.contact}</Text>
      </View>
      <View style={styles.btnContainer}>
        <Text style={styles.heading}>Account setting</Text>

        <TouchableOpacity style={styles.btn}>
          <Link href={`profileDetail/${UserData._id}` as Href<string>}>
            <FontAwesome style={styles.btnText} name="edit" />
            <Text style={styles.btnText}> Edit profile </Text>
          </Link>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            router.push("/myOrders");
          }}
        >
          <FontAwesome style={styles.btnText} name="list" />
          <Text style={styles.btnText}> My orders </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            router.push("/notification");
          }}
        >
          <FontAwesome style={styles.btnText} name="bell" />
          <Text style={styles.btnText}> Notifications </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <FontAwesome style={styles.btnText} name="windows" />
          <Text style={styles.btnText}> Admin panel </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Remove the header by setting headerShown to false
export const config = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  image: {
    height: 100,
    width: "100%",
    resizeMode: "contain",
  },
  name: {
    marginTop: 10,
    fontSize: 20,
  },
  btnContainer: {
    padding: 10,
    backgroundColor: "#fff",
    margin: 10,
    marginVertical: 20,
    elevation: 5,
    borderRadius: 10,
    paddingBottom: 30,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
    textAlign: "center",
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },

  btn: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 5,
  },
  btnText: {
    fontSize: 15,
    marginRight: 10,
  },
});
