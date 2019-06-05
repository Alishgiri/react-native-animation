import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
import React, { Component } from "react";
import { SHADOW } from "../utilities/style-constants";

class Scale extends Component {
  state = { animation: new Animated.Value(1) };

  shiftAnimate = () => {
    Animated.timing(this.state.animation, {
      toValue: 1.5,
      duration: 500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 1.1,
        duration: 300
      }).start(() => {
        Animated.timing(this.state.animation, {
          toValue: 1,
          duration: 200
        }).start();
      });
    });
  };

  render() {
    const animationStyle = {
      transform: [{ scaleY: this.state.animation }]
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

export { Scale };
