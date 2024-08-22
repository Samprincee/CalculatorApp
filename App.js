import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./Views/MainScreen";
import IntroScreen from "./Views/IntroScreen";

export default function App() {
  const [isLoaded, setisLoaded] = useState(false);
  setTimeout(() => {setisLoaded(true)}, 2200);

  return (
    <View style={styles.container}>
      {
        isLoaded ? <MainScreen/> : <IntroScreen/>
      }      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
