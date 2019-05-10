import React, { Component } from "react";
import { View, Text, Animated, StyleSheet } from "react-native";

class BoilerPlate extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Boiler plate code</Text>
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

export { BoilerPlate };
