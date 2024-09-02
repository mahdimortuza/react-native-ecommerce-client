import { TProduct } from "@/components/products/productCard";
import { ProductsData } from "@/data/productData";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ProductDetail() {
  const { _id: productParam } = useLocalSearchParams();

  const [productDetails, setProductDetails] = useState<TProduct | undefined>(
    undefined
  );

  useEffect(() => {
    const getProduct = ProductsData.find((product) => {
      return product?._id === productParam;
    });
    setProductDetails(getProduct);
  }, [productParam]);
  return (
    <View>
      <Image source={{ uri: productDetails?.imageUrl }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{productDetails?.name}</Text>
        <Text style={styles.title}>Price: {productDetails?.price}$</Text>
        <Text style={styles.title}>Price: {productDetails?.description}$</Text>
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
});
