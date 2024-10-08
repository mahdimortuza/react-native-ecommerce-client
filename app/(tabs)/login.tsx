import InputBox from "@/components/form/inputBox";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Login() {
  const router = useRouter();
  const loginImage =
    "https://www.certifiedfinancialguardian.com/images/blog-wp-login.png";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      return alert("Please email and password");
    }
    alert("Logged in successfully.");
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
        placeholder={"Enter your password"}
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginBtnText}>Login</Text>
        </TouchableOpacity>
        <Text>
          New here..?
          <Text style={styles.link} onPress={() => router.push("/register")}>
            {" "}
            Register
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
