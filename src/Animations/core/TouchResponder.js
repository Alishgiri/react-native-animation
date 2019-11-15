import {
  View,
  Animated,
  Dimensions,
  StyleSheet,
  PanResponder
} from "react-native";
import React, { Component } from "react";
import { SHADOW } from "../../utilities/style-constants";

const size = Dimensions.get("window");
const W = size.width - 100;
const H = size.height - 100;

class TouchResponder extends Component {
  state = { animation: new Animated.ValueXY() };

  constructor(props) {
    super(props);
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this.state.animation.extractOffset();
      },
      //   onPanResponderMove: Animated.event([
      //     null,
      //     {
      //       dx: this.state.animation.x,
      //       dy: this.state.animation.y
      //     }
      //   ]),
      onPanResponderMove: (e, { dx, dy }) => {
        this.state.animation.setValue({ x: dx, y: dy });
      },
      onPanResponderRelease: (e, { vx, vy }) => {
        Animated.decay(this.state.animation, {
          velocity: { x: vx, y: vy },
          deceleration: 0.997
        }).start();
      }
    });
  }

  render() {
    const animationStyle = {
      transform: this.state.animation.getTranslateTransform()
    };
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.box, animationStyle]}
          {...this._panResponder.panHandlers}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // alignItems: "center",
    // justifyContent: "center"
  },
  box: {
    ...SHADOW,
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "red"
  }
});

export { TouchResponder };
