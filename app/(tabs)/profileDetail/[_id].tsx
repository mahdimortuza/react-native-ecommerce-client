import InputBox from "@/components/form/inputBox";
import { UserData } from "@/data/userData";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Profile() {
  const router = useRouter();

  const [email, setEmail] = useState(UserData.email);
  const [profilePic, setProfilePic] = useState(UserData.profilePic);
  const [password, setPassword] = useState(UserData.password);
  const [name, setName] = useState(UserData.name);
  const [address, setAddress] = useState(UserData.address);
  const [city, setCity] = useState(UserData.city);
  const [contact, setContact] = useState(UserData.contact);

  const handleUpdate = () => {
    if (!email || !password || !name || !address || !city || !contact) {
      return alert("Please provide all fields");
    }
    alert("Profile updated successfully.");
    router.push("/account");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={{ uri: profilePic }} style={styles.image} />
          <Pressable onPress={() => alert("profile dialog box")}>
            <Text style={{ color: "red" }}>Update profile pic</Text>
          </Pressable>
        </View>
        <InputBox
          value={name}
          setValue={setName}
          placeholder={"enter your name"}
          autoComplete={"name"}
        />
        <InputBox
          value={email}
          setValue={setEmail}
          placeholder={"Enter your email"}
          autoComplete={"email"}
        />
        <InputBox
          value={password}
          setValue={setPassword}
          placeholder={"Enter your password"}
          secureTextEntry={true}
          autoComplete={"password"}
        />
        <InputBox
          value={address}
          setValue={setAddress}
          placeholder={"Enter your address"}
          autoComplete={"street-address"}
        />
        <InputBox
          value={city}
          setValue={setCity}
          placeholder={"Enter your city"}
          autoComplete={"country"}
        />
        <InputBox
          value={contact}
          setValue={setContact}
          placeholder={"Enter your contact number"}
          autoComplete={"tel"}
        />
        <TouchableOpacity style={styles.btnUpdate} onPress={handleUpdate}>
          <Text style={styles.btnUpdateText}>Update profile</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 100,
    width: "100%",
    resizeMode: "contain",
  },
  btnUpdate: {
    backgroundColor: "#000",
    height: 40,
    borderRadius: 20,
    marginHorizontal: 30,
    justifyContent: "center",
    marginTop: 10,
  },
  btnUpdateText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
});
