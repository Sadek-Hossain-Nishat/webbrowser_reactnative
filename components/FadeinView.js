import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";

const FadeinView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  return (
    <Animated.View // Special animatable View
      style={{
        opacity: fadeAnim, // Bind opacity to animated value
        scaleX: fadeAnim,
        scaleY: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default FadeinView;
