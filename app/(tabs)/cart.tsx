import PriceTable from "@/components/cart/priceTable";
import { CartData } from "@/data/cartData";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Cart() {
  const [cartItems, setCartItems] = useState(CartData);
  return (
    <View style={{}}>
      <View>
        <Text style={styles.heading}>
          {cartItems.length > 0
            ? `You have ${cartItems.length} products in the cart`
            : "Your cart is empty."}
        </Text>
        {cartItems && (
          <>
            <Text>Cart items</Text>
            <View>
              <PriceTable title="Price" price={999} />
              <PriceTable title="Tax" price={1} />
              <PriceTable title="Shipping" price={1} />
              <View style={styles.grandTotal}>
                <PriceTable title="Grand total" price={1001} />
              </View>
            </View>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    color: "green",
    marginTop: 10,
  },

  grandTotal: {
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "#fff",
    padding: 5,
    margin: 5,
    marginHorizontal: 20,
  },
});
