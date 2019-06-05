import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
import React, { Component } from "react";
import { SHADOW } from "../utilities/style-constants";

class TranslatePosition extends Component {
  state = { animation: new Animated.Value(0) };

  shiftAnimate = () => {
    Animated.timing(this.state.animation, {
      toValue: 10,
      duration: 15
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: -10,
        duration: 15
      }).start(() => {
        Animated.timing(this.state.animation, {
          toValue: 0,
          duration: 15
        }).start();
      });
    });
  };

  render() {
    const animationStyle = {
      transform: [{ translateX: this.state.animation }]
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

export { TranslatePosition };
