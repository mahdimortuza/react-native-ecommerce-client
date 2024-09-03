import { TProduct } from "@/components/products/productCard";
import { ProductsData } from "@/data/productData";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProductDetail() {
  const { _id: productParam } = useLocalSearchParams();
  const [qty, setQty] = useState(1);

  const [productDetails, setProductDetails] = useState<TProduct | undefined>(
    undefined
  );

  useEffect(() => {
    const getProduct = ProductsData.find((product) => {
      return product?._id === productParam;
    });
    setProductDetails(getProduct);
  }, [productParam]);

  const handleAddQty = () => {
    if (qty === 10) return alert("You can't add more than 10.");
    setQty((prev) => prev + 1);
  };

  const handleRemoveQty = () => {
    if (qty <= 1) return;
    setQty((prev) => prev - 1);
  };
  return (
    <View>
      <Image source={{ uri: productDetails?.imageUrl }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{productDetails?.name}</Text>
        <Text style={styles.title}>Price: {productDetails?.price}$</Text>
        <Text style={styles.desc}>Price: {productDetails?.description}$</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btnCart}
            onPress={() => alert(`${qty} items add to cart.`)}
            disabled={(productDetails?.quantity as number) <= 0}
          >
            <Text style={styles.btnCartText}>
              {(productDetails?.quantity as number) > 0
                ? "Add to cart"
                : "Out of stock"}
            </Text>
          </TouchableOpacity>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
  },
  container: {
    marginVertical: 15,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    textAlign: "left",
  },
  desc: {
    fontSize: 12,
    textTransform: "capitalize",
    textAlign: "justify",
    marginVertical: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  btnCart: {
    width: 180,
    backgroundColor: "#000",
    marginVertical: 10,
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
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
