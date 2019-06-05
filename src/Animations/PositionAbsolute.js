import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
import React, { Component } from "react";
import { SHADOW } from "../utilities/style-constants";

class PositionAbsolute extends Component {
  state = { animation: new Animated.Value(10) };

  shiftAnimate = () => {
    Animated.timing(this.state.animation, {
      toValue: 40,
      duration: 200
    }).start();
  };

  render() {
    const { animation } = this.state;
    const animationStyle = {
      top: animation,
      left: animation,
      right: animation
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.shiftAnimate}>
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
    top: 0,
    left: 0,
    right: 0,
    ...SHADOW,
    height: 100,
    borderRadius: 10,
    position: "absolute",
    backgroundColor: "red"
  }
});

export { PositionAbsolute };
