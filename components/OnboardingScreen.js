import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { Image, StatusBar } from "react-native";

const _pages = [
  {
    backgroundColor: "#a6e4d0",
    image: (
      <Image
        style={{ height: 120, width: 120 }}
        source={require("../assets/webimage.jpg")}
      />
    ),
    title: "Welcome",
    subtitle: "To OEB",
  },
  {
    backgroundColor: "#fdeb93",
    image: (
      <Image
        style={{ height: 120, width: 120 }}
        source={require("../assets/chat.png")}
      />
    ),
    title: "Explore",
    subtitle: "Why you will use this app",
  },

  {
    backgroundColor: "#adfacd",
    image: (
      <Image
        style={{ height: 120, width: 120 }}
        source={require("../assets/browsinglogo.png")}
      />
    ),
    title: "1",
    subtitle: "Secure Web Browsing Functionality",
  },

  {
    backgroundColor: "#bf34fe",
    image: (
      <Image
        style={{ height: 120, width: 120 }}
        source={require("../assets/downloadlogo.png")}
      />
    ),
    title: "2",
    subtitle: "Excellent File Download System",
  },

  {
    backgroundColor: "#bfb4fe",
    image: (
      <Image
        style={{ height: 120, width: 120 }}
        source={require("../assets/fileviewlogo.png")}
      />
    ),
    title: "3",
    subtitle: "Excellent File Viewer",
  },

  {
    backgroundColor: "#cceafd",
    image: <Image source={require("../assets/alldonelogo.png")} />,
    title: "All Done",
    subtitle: "Now use this app and enjoy!!.",
  },
];

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding onDone={() => navigation.navigate("Home")} pages={_pages} />
  );
};

export default OnboardingScreen;
