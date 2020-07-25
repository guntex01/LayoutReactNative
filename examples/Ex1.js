import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function Ex1() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.skyView}>
        <Text style={styles.redText}>Welcome</Text>
        <Text style={styles.blueText}>Techmaster</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  redText: {
    color: "red",
    fontSize: 50,
  },
  blueText: {
    color: "blue",
    fontSize: 20,
  },
  skyView: {
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 200,
  }
});
