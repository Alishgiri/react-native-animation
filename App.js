/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { View, Platform, SafeAreaView } from "react-native";

import Loader from "./src/Loader";

export default function App() {
  if (Platform.OS === "ios")
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Loader />
      </SafeAreaView>
    );
  return (
    <View style={{ flex: 1 }}>
      <Loader />
    </View>
  );
}
