import { Stack } from "expo-router";
import React from "react";

import Footer from "@/components/layout/Footer";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StatusBar, StyleSheet, View } from "react-native";

export default function TabLayout({ _id }: { _id: string }) {
  const colorScheme = useColorScheme();

  return (
    <>
      <StatusBar />
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="contact"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="mobile"
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name={`productDetail/${_id}`}
          options={{
            headerShown: false,
          }}
        /> */}
      </Stack>

      <View style={styles.footer}>
        <Footer />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    zIndex: 100,
    width: "100%",
    borderTopWidth: 1,
    borderColor: "lightgray",
    position: "absolute",
    bottom: 0,
    padding: 10,
  },
});

// <Tabs
//   screenOptions={{
//     tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
//     headerShown: false,
//   }}
// >
//   <Tabs.Screen
//     name="index"
//     options={{
//       title: "Home",</Stack.Screen>
//       tabBarIcon: ({ color, focused }) => (
//         <TabBarIcon
//           name={focused ? "home" : "home-outline"}
//           color={color}
//         />
//       ),
//     }}
//   />
//   <Tabs.Screen
//     name="explore"
//     options={{
//       title: "Explore",
//       tabBarIcon: ({ color, focused }) => (
//         <TabBarIcon
//           name={focused ? "code-slash" : "code-slash-outline"}
//           color={color}
//         />
//       ),
//     }}
//   />

//   <Tabs.Screen
//     name="about"
//     options={{
//       title: "About",
//       tabBarIcon: ({ color, focused }) => (
//         <TabBarIcon
//           name={focused ? "moon" : "moon-outline"}
//           color={color}
//         />
//       ),
//     }}
//   />
//   <Tabs.Screen
//     name="contact"
//     options={{
//       title: "Contact",
//       tabBarIcon: ({ color, focused }) => (
//         <TabBarIcon
//           name={focused ? "sunny" : "sunny-outline"}
//           color={color}
//         />
//       ),
//     }}
//   />
// </Tabs>
