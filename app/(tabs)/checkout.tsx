import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Checkout() {
  const router = useRouter();
  const handleCOD = () => {
    alert("Order placed successfully.");
  };
  const handleOnline = () => {
    alert("Redirecting to payment gateway.");
    router.push("/payment");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Payment options</Text>
      <Text style={styles.price}>Total amount: 101 $</Text>
      <View style={styles.paymentCard}>
        <Text style={styles.paymentHeading}>Select your payment mode</Text>
        <TouchableOpacity style={styles.paymentBtn} onPress={handleCOD}>
          <Text style={styles.paymentBtnText}>Cash on delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentBtn} onPress={handleOnline}>
          <Text style={styles.paymentBtnText}>
            Online (Credit | Debit card)
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "90%",
  },
  heading: {
    fontSize: 30,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    marginBottom: 10,
    color: "gray",
  },
  paymentCard: {
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 10,
    padding: 30,
    marginVertical: 10,
  },
  paymentHeading: {
    color: "gray",
    marginBottom: 10,
  },
  paymentBtn: {
    backgroundColor: "#000",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    marginVertical: 10,
  },
  paymentBtnText: {
    color: "#fff",
    textAlign: "center",
  },
});
