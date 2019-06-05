import {
  View,
  Easing,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
import React, { Component } from "react";
import { SHADOW } from "../../utilities/style-constants";

class EasingAnimation extends Component {
  state = { animation: new Animated.Value(0) };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 200,
      duration: 1000,
      //   easing: Easing.back(2)
      //   easing: Easing.bounce
      //   easing: Easing.elastic(2)
      easing: Easing.bezier(0.06, 1, 0.86, 0.23)
    }).start(() => {
      setTimeout(() => {
        Animated.timing(this.state.animation, {
          toValue: 0,
          duration: 1000
        }).start();
      }, 1000);
    });
  };

  render() {
    const animationStyle = {
      transform: [{ translateX: this.state.animation }]
    };
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

export { EasingAnimation };
