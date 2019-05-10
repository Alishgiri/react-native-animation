import React, { Component } from "react";
import { View, Text, Animated, StyleSheet } from "react-native";

class Opacity extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Opacity Animation</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export { Opacity };
