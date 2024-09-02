import { Href, Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type TProduct = {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
};

export default function ProductCard({ product }: { product: TProduct }) {
  const { _id, name, description, price, category, imageUrl } = product;

  const handleAddToCart = () => {
    alert("Added to cart");
  };
  return (
    <View>
      <View style={styles.card}>
        <Image source={{ uri: imageUrl }} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{name}</Text>
        <Text style={styles.cardDesc}>
          {description.substring(0, 30)}...more
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <Link href={`productDetail/${_id}` as Href<string>}>
              <Text style={styles.btnText}>Details</Text>
            </Link>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCart} onPress={handleAddToCart}>
            <Text style={styles.btnText}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "lightgray",
    marginVertical: 5,
    marginHorizontal: 8,
    width: "45%",
    padding: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  cardImage: {
    height: 120,
    width: "100%",
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDesc: {
    fontSize: 10,
    textAlign: "left",
  },
  btnContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#000",
    height: 20,
    width: 68,
    borderRadius: 5,
    justifyContent: "center",
  },
  btnCart: {
    backgroundColor: "orange",
    height: 20,
    width: 68,
    borderRadius: 5,
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
  },
});
