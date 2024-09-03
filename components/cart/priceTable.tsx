import { StyleSheet, Text, View } from "react-native";

type TPriceTableProps = {
  title: string;
  price: number;
};

export default function PriceTable({ title, price }: TPriceTableProps) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{price} $</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    alignItems: "center",
  },
});
