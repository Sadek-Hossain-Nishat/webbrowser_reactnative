import React, { useRef, useEffect } from "react";
import FadeinView from "./FadeinView";
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
} from "react-native";

export default function SplashScreen() {
  // const fadeAnim = useRef(new Animated.Value(0)).current;
  <StatusBar backgroundColor="transparent" translucent={true} />;

  // useEffect(() => {
  //   Animated.timing(fadeAnim, {
  //     toValue: 1,
  //     duration: 10000,
  //     useNativeDriver: true,
  //   }).start();
  // }, [fadeAnim]);

  return (
    <SafeAreaView>
      <View style={splashstyles.container}>
        <FadeinView>
          <View style={splashstyles.customimagestyle}>
            <Image
              style={splashstyles.imgstyle}
              source={require("../assets/splash.png")}
            />
            <Text
              style={{
                color: "#42f584",
                fontSize: 80,
                fontWeight: "900",
                fontStyle: "italic",
              }}
            >
              EB
            </Text>
          </View>
        </FadeinView>
        <FadeinView>
          <Text
            style={{
              fontSize: 25,
              color: "white",
              marginTop: 50,
              fontStyle: "italic",
            }}
          >
            To assist secure searching
          </Text>
        </FadeinView>
        <FadeinView>
          <Text
            style={{
              fontSize: 13,
              color: "white",
              marginTop: 300,
              fontStyle: "italic",
            }}
          >
            SHNTech Ltd
          </Text>
        </FadeinView>
      </View>
    </SafeAreaView>
  );
}

const splashstyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    display: "flex",

    // justifyContent: "center",
    alignItems: "center",

    padding: 10,
    height: "100%",
    // backgroundColor: "#ad85de",
    backgroundColor: "#eca7f2",
  },
  imgstyle: {
    height: 100,
    width: 100,
  },

  customimagestyle: {
    marginTop: 150,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
