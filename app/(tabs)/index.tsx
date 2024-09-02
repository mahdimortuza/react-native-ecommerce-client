import Categories from "@/components/category/categories";
import Banner from "@/components/layout/banner";
import Header from "@/components/layout/Header";
import Products from "@/components/products/products";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <Categories />
        <Banner />
        <Products />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#fff",
  },
});
