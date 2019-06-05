import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
import React, { Component } from "react";
import { SHADOW } from "../utilities/style-constants";

class BoilerPlate extends Component {
  state = { animation: new Animated.Value(1) };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 0.1,
      duration: 300
    }).start();
  };

  render() {
    const animationStyle = { opacity: this.state.animation };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animationStyle]} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    ...SHADOW,
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "red"
  }
});

export { BoilerPlate };
