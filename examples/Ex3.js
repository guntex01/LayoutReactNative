import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, Switch, Dimensions } from "react-native";

import bulbOff from "../assets/bulb-off.jpg";
import bulbOn from "../assets/bulb-on.jpg";
const windowWidth = Dimensions.get('window').width;

export default function Ex3() {
  const [isOn, setOn] = useState(false)
  
  function toggleSwitch(){
    //cach 1
    //setOn(previousState => !previousState);

    //cach2
    const newState = !isOn
    setOn(newState);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={isOn ? bulbOn : bulbOff} />
      <View style={styles.switchs}>
      <Switch 
        trackColor={{ false: "white", true: "yellow" }}
        thumbColor = "white"
        //ios_backgroundColor="#52d964"
        value = {isOn}
        onValueChange={toggleSwitch}
      />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "black",
    
  },
  image: {
    maxWidth: "100%",
    maxHeight: windowWidth*925 / 631,
    resizeMode: "contain",
    
  },
  switchs: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"

  }
});
