import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

// Define the type for autoComplete based on the allowed values
type AutoCompleteType =
  | "additional-name"
  | "address-line1"
  | "address-line2"
  | "birthdate-day"
  | "birthdate-full"
  | "birthdate-month"
  | "birthdate-year"
  | "cc-csc"
  | "cc-exp"
  | "cc-exp-day"
  | "cc-exp-month"
  | "cc-exp-year"
  | "cc-number"
  | "country"
  | "current-password"
  | "email"
  | "family-name"
  | "given-name"
  | "honorific-prefix"
  | "honorific-suffix"
  | "name"
  | "new-password"
  | "off"
  | "one-time-code"
  | "postal-code"
  | "street-address"
  | "tel"
  | "username"
  | "nickname"
  | "organization"
  | "organization-title"
  | "url"
  | "gender"
  | "name-family"
  | "name-given"
  | "name-middle"
  | "name-middle-initial"
  | "name-prefix"
  | "name-suffix"
  | "password"
  | "password-new"
  | "postal-address"
  | "postal-address-country"
  | "postal-address-extended"
  | "postal-address-extended-postal-code"
  | "postal-address-locality"
  | "postal-address-region"
  | "sms-otp"
  | "tel-country-code"
  | "tel-national"
  | "tel-device"
  | "username-new";

interface InputBoxProps {
  value: string;
  setValue: (text: string) => void;
  autoComplete?: AutoCompleteType;
  placeholder?: string;
  secureTextEntry?: boolean;
}

export default function InputBox({
  value,
  setValue,
  autoComplete,
  placeholder,
  secureTextEntry,
}: InputBoxProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoComplete={autoComplete}
        placeholder={placeholder}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  input: {
    width: "80%",
    backgroundColor: "#fff",
    height: 40,
    paddingLeft: 10,
    borderRadius: 10,
    color: "#000",
    borderWidth: 1,
    borderColor: "gray",
  },
});
