import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AdminPanel() {
  return (
    <View style={styles.main}>
      <Text style={styles.heading}>Dashboard</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <FontAwesome style={styles.icon} name="edit" />
          <Text style={styles.btnText}>Manage products</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <FontAwesome style={styles.icon} name="edit" />
          <Text style={styles.btnText}>Manage categories</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <FontAwesome style={styles.icon} name="user" />
          <Text style={styles.btnText}>Manage users</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <FontAwesome style={styles.icon} name="list" />
          <Text style={styles.btnText}>Manage order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <FontAwesome style={styles.icon} name="info" />
          <Text style={styles.btnText}>About app</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "lightgray",
    height: "92%",
  },
  heading: {
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
    padding: 10,
    fontSize: 20,
    margin: 10,
    borderRadius: 5,
    fontWeight: "bold",
  },
  btnContainer: {
    margin: 15,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 10,
    marginBottom: 20,
  },
  icon: {
    fontSize: 25,
    marginRight: 10,
    marginLeft: 20,
  },
  btnText: {
    fontSize: 18,
  },
});
