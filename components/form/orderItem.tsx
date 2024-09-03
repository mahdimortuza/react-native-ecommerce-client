import { StyleSheet, Text, View } from "react-native";

type TProductInfo = {
  _id: string;
  name: string;
  qty: number;
  price: number;
};

type TOrder = {
  _id: string;
  totalAmount: number;
  status: string;
  date: string;
  payment: string;
  productInfo: TProductInfo;
};

export type TOrderItemProps = {
  order: TOrder;
};

export default function OrderItem({ order }: TOrderItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.orderInfo}>
        <Text>Order ID: {order._id}</Text>
        <Text>Date: {order.date}</Text>
      </View>
      <Text>Product name: {order.productInfo.name}</Text>
      <Text>Product price: {order.productInfo.price}</Text>
      <Text>Quantity: {order.productInfo.qty}</Text>
      <Text>Total amount: {order.totalAmount} $</Text>

      <Text style={styles.status}>Order status: {order.status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  orderInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "lightgray",
    paddingBottom: 5,
  },
  status: {
    borderTopWidth: 1,
    fontWeight: "bold",
    borderColor: "lightgray",
    padding: 5,
  },
});
