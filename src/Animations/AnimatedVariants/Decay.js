import {
  View,
  Easing,
  Animated,
  StyleSheet,
  PanResponder,
  TouchableWithoutFeedback
} from "react-native";
import React, { Component } from "react";
import { SHADOW } from "../../utilities/style-constants";

class Decay extends Component {
  state = { animation: new Animated.ValueXY(0) };

  componentWillMount() {
    //   this._x = 0;
    //   this._y = 0;
    //   this.state.animation.addListener((value) => {
    //       this._x = value.x;
    //       this._y = value.y;
    //   })
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true, // Start pan respnder touch event
      onMoveShouldSetPanResponder: () => true, // Don't stop until pan gesture is still in motion
      onPanResponderGrant: () => {
          this.state.animation.extractOffset();
          // Tracking offset and setting origin to latest offset
          // so that the box does not jump on second pan gesture
        //   this.state.animation.setOffset({
        //       x: this._x,
        //       y: this._y
        //   })
        //   this.state.animation.setValue({
        //       x: 0,
        //       y: 0
        //   })
      },
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.animation.x,
          dy: this.state.animation.y
        }
      ]),
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

export { Decay };
