import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
import React, { Component } from "react";
import { SHADOW } from "../../utilities/style-constants";

class InterpolateChain extends Component {
  state = { animation: new Animated.Value(0) };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1500
    }).start(() =>
      Animated.timing(this.state.animation, {
        toValue: 2,
        duration: 300
      }).start()
    );
  };

  render() {
    const { animation } = this.state;
    const interpolate = animation.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 300, 0]
    });
    const interpolateOpacity = interpolate.interpolate({
      inputRange: [0, 300],
      outputRange: [1, 0.5]
    });
    const interpolateChained = interpolate.interpolate({
      inputRange: [0, 10, 50, 80, 100, 110, 150],
      outputRange: [10, 40, -40, 60, -60, 0, 100]
    });
    const animationStyle = {
      opacity: interpolateOpacity,
      transform: [
        { translateY: interpolate },
        { translateX: interpolateChained }
      ]
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

export { InterpolateChain };
