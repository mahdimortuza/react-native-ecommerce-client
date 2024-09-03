import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TProduct } from "../products/productCard";

export default function CartItem({ item }: { item: TProduct }) {
  const [qty, setQty] = useState(1);

  const handleAddQty = () => {
    if (qty === 10) return alert("You can't add more than 10.");
    setQty((prev) => prev + 1);
  };

  const handleRemoveQty = () => {
    if (qty <= 1) return;
    setQty((prev) => prev - 1);
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.imageUrl }} />
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.name}> Price: {item.price} $</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnQTY} onPress={handleRemoveQty}>
          <Text style={styles.btnQTYText}>-</Text>
        </TouchableOpacity>
        <Text>{qty}</Text>
        <TouchableOpacity style={styles.btnQTY} onPress={handleAddQty}>
          <Text style={styles.btnQTYText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  name: {
    fontSize: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  btnCartText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  btnQTY: {
    backgroundColor: "lightgray",
    width: 40,
    alignItems: "center",
    marginHorizontal: 10,
  },
  btnQTYText: {
    fontSize: 20,
  },
});
