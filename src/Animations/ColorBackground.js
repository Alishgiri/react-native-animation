import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
import React, { Component } from "react";
import { SHADOW } from "../utilities/style-constants";

class ColorBackground extends Component {
  state = { animation: new Animated.Value(0) };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1500
    }).start();
  };

  render() {
    const boxInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgb(255, 99, 71)", "rgb(125, 125, 125)"]
    });
    const animationStyle = { backgroundColor: boxInterpolation };
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

export { ColorBackground };
