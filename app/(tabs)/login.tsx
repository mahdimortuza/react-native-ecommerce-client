import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Login() {
  return (
    <View>
      <Text>Email</Text>
      <TextInput />
      {/* <TouchableOpacity>
        <Text>Login</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
