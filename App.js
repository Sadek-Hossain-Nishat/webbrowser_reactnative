// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, Image } from "react-native";
// import { useState, useEffect } from "react";
// import { FAB, Icon } from "@rneui/themed";

// import WebView from "react-native-webview";

// export default function App() {
//   const [start, setstart] = useState(true);
//   const [path, setpath] = useState("");
//   const [showFile, setshowFile] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setstart(false);
//     }, 2000);

//     return () => {};
//   }, []);

//   const pdfReader = (
//     <WebView source={{ uri: "https://www.youtube.com" }} />

//     // <View>
//     //   <Text>{path}</Text>
//     // </View>
//   );

//   const openFile = () => {
//     const picker = DocumentPicker.getDocumentAsync({
//       type: "application/pdf",
//       multiple: false,
//       copyToCacheDirectory: true,
//     })
//       .then((docresult) => {
//         setpath(docresult.uri);
//         // FileSystem.getContentUriAsync(docresult.uri).then((cUri) => {
//         //   setpath(cUri);
//         // });
//         setshowFile(true);
//       })
//       .catch((error) => {
//         setshowFile(false);
//         console.log("openfile error", error);
//       });
//   };

//   // const openFile = () => {

//   // };

//   const homeScreen = (
//     <View style={{ alignItems: "center", height: "100%", width: "100%" }}>
//       <StatusBar backgroundColor={"#1ddb82"} />

//       <View style={styles.nofileScreenTopBar}>
//         <Icon name="home" color="white" size={30} />
//         <Text style={styles.nofileScreenTopBar.titleStyle}>Home</Text>
//       </View>

//       <Icon marginTop={100} size={120} name="folder" color="#00aced" />

//       <Text style={{ fontWeight: "bold", fontSize: 20 }}>
//         No file is selected
//       </Text>

//       <Text style={{ fontSize: 15, fontWeight: "500" }}>
//         Click the plus button to select a file
//       </Text>

//       <FAB
//         style={{
//           alignSelf: "flex-end",
//           marginRight: 20,
//           marginTop: 280,
//         }}
//         onPress={openFile}
//         visible={true}
//         icon={{ name: "add", color: "white" }}
//         color="#1ddb82"
//       />
//     </View>
//   );

//   const splashScreen = (
//     <View>
//       <View style={styles.splashScreen}>
//         <Image
//           style={styles.splashScreen.imgstyle}
//           source={require("./assets/splash.png")}
//         />
//         <Text>EB</Text>
//       </View>
//     </View>
//   );
//   // return start ? splashScreen : showFile ? pdfReader : homeScreen;
//   return splashScreen;
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   splashScreen: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",

//     padding: 10,
//     height: "100%",
//     imgstyle: {
//       height: 100,
//       width: 100,
//       backgroundColor: "#fff",
//     },
//     titleStyle: {
//       marginLeft: 15,
//       fontSize: 20,
//       fontWeight: "600",
//     },
//   },

//   nofileScreenTopBar: {
//     alignSelf: "stretch",
//     height: 90,
//     flexDirection: "row", // row
//     backgroundColor: "#1ddb82",
//     alignItems: "center",

//     // justifyContent: 'space-between', // center, space-around
//     paddingLeft: 10,
//     paddingRight: 10,
//     titleStyle: {
//       marginLeft: 10,
//       fontSize: 20,
//       color: "white",
//       fontWeight: "600",
//     },
//   },
// });

import React from "react";
import { useState, useEffect } from "react";
import PageNavigation from "./components/PageNavigation";
import SplashScreen from "./components/SplashScreen";

export default function App() {
  const [start, setstart] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setstart(false);
    }, 5000);

    return () => {};
  }, []);
  return start ? <SplashScreen /> : <PageNavigation />;
}
