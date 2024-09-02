import { ProductsData } from "@/data/productData";
import { StyleSheet, View } from "react-native";
import ProductCard from "./productCard";

export default function Products() {
  return (
    <>
      <View style={styles.container}>
        {ProductsData.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
