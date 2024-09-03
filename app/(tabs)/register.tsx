import InputBox from "@/components/form/inputBox";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Register() {
  const router = useRouter();
  const loginImage =
    "https://www.certifiedfinancialguardian.com/images/blog-wp-login.png";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");

  const handleRegister = () => {
    if (!email || !password || !name || !address || !city || !contact) {
      return alert("Please provide all fields");
    }
    alert("Registered successfully.");
    router.push("/");
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: loginImage }} />
      <InputBox
        placeholder={"Enter your email"}
        value={email}
        setValue={setEmail}
        autoComplete={"email"}
      />
      <InputBox
        placeholder={"Enter your name"}
        value={name}
        setValue={setName}
        autoComplete={"name"}
      />
      <InputBox
        placeholder={"Enter your password"}
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <InputBox
        placeholder={"Enter your address"}
        value={address}
        setValue={setAddress}
        autoComplete={"address-line1"}
      />
      <InputBox
        placeholder={"Enter your city"}
        value={city}
        setValue={setCity}
        autoComplete={"country"}
      />
      <InputBox
        placeholder={"Enter your contact no"}
        value={contact}
        setValue={setContact}
        autoComplete={"tel"}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
          <Text style={styles.loginBtnText}>Register</Text>
        </TouchableOpacity>

        <Text>
          Already have account..?
          <Text style={styles.link} onPress={() => router.push("/login")}>
            {" "}
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtn: {
    backgroundColor: "#000",
    width: "80%",
    justifyContent: "center",
    height: 40,
    borderRadius: 10,
    marginVertical: 20,
  },
  loginBtnText: {
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: 18,
  },
  link: {
    color: "#4267B2",
  },
});
