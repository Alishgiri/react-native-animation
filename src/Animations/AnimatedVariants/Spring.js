import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
import React, { Component } from "react";
import { SHADOW } from "../../utilities/style-constants";

class Spring extends Component {
  state = { animation: new Animated.Value(1) };

  shiftAnimate = () => {
    Animated.spring(this.state.animation, {
      toValue: 2,
      friction: 2, // 7 is default
      tension: 100 // 40 is default
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 100
      }).start();
    });
  };

  render() {
    const animationStyle = {
      transform: [{ scale: this.state.animation }]
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
    ...SHADOW,
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "red"
  }
});

export { Spring };
