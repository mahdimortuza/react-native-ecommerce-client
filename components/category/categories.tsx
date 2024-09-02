import { categoriesData } from "@/data/categoriesData";
import { Href, Link } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Categories() {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        {categoriesData.map((item) => (
          <View key={item._id}>
            <TouchableOpacity>
              <Link href={item.path as Href<string>}>
                <View style={styles.catContainer}>
                  <FontAwesome name={item.icon} style={styles.catIcon} />
                  <Text style={styles.catTitle}>{item.name}</Text>
                </View>
              </Link>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 5,
    flexDirection: "row",
  },
  catContainer: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  catIcon: {
    fontSize: 30,
    verticalAlign: "top",
  },
  catTitle: {
    fontSize: 12,
  },
});
