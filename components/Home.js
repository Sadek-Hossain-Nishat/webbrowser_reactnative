// import all the components we are going to use
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Animated,
  Text,
  ImageBackground,
} from "react-native";

import React, { useState } from "react";
import { SearchBar } from "@rneui/themed";

const App = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };
  const dummyData = [
    "Text",
    "Input",
    "Button",
    "Card",
    "CheckBox",
    "Divider",
    "Header",
    "List Item",
    "Pricing",
    "Rating",
    "Search Bar",
    "Slider",
    "Tile",
    "Icon",
    "Avatar",
  ];
  let AnimatedHeaderValue = new Animated.Value(0);
  const Header_Maximum_Height = 150;
  //Max Height of the Header
  const Header_Minimum_Height = 50;
  //Min Height of the Header

  const animateHeaderBackgroundColor = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
    outputRange: ["#4286F4", "#00BCD4"],
    extrapolate: "clamp",
  });

  const animateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
    outputRange: [Header_Maximum_Height, Header_Minimum_Height],
    extrapolate: "clamp",
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.header,
            {
              height: animateHeaderHeight,
              backgroundColor: animateHeaderBackgroundColor,
            },
          ]}
        >
          {/* <View style={styles.view}>
            <SearchBar
              lightTheme="true"
              round="true"
              placeholder="Type Here..."
              onChangeText={updateSearch}
              value={search}
            />
          </View> */}

          <ImageBackground
            source={require("../assets/dayimage.jpg")}
            resizeMode="cover"
            style={styles.topbackgroundimage}
          >
            <Text style={styles.text}>Inside</Text>
          </ImageBackground>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: "100%",
  },
  topbackgroundimage: {
    height: "100%",
    width: "100%",
  },

  header: {
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  textStyle: {
    textAlign: "center",
    color: "#000",
    fontSize: 18,
    padding: 20,
  },
  view: {
    width: "100%",
    margin: 10,
  },
});

/***
 import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';

type SearchBarComponentProps = {};

const SwitchComponent: React.FunctionComponent<SearchBarComponentProps> = () => {
const [search, setSearch] = useState("");

const updateSearch = (search) => {
  setSearch(search);
};

return (
  <View style={styles.view}>
    <SearchBar
    lightTheme='true'
    round='true'
      placeholder="Type Here..."
      onChangeText={updateSearch}
      value={search}
    />
  </View>
);
};

const styles = StyleSheet.create({
view: {
  margin: 10,
},
});

export default SwitchComponent;
 
 */
