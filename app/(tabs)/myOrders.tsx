import OrderItem from "@/components/form/orderItem";
import { OrderData } from "@/data/orderData";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function MyOrders() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Orders</Text>
      <ScrollView>
        {OrderData.map((order) => (
          <OrderItem key={order._id} order={order} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  heading: {
    textAlign: "center",
    color: "gray",
    fontWeight: "bold",
    fontSize: 20,
  },
});
