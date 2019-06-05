import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
import React, { Component } from "react";
import { SHADOW } from "../utilities/style-constants";

class Rotation extends Component {
  state = { animation: new Animated.Value(0) };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 300
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1500
      }).start();
    });
  };

  render() {
    const interpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "150deg"] // "-150deg" will make it spin anticlock wise.
    });
    // trasform -> rotateX and rotateY will flip the box/card
    const animationStyle = { transform: [{ rotate: interpolate }] };
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

export { Rotation };
