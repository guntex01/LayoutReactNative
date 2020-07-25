import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Switch,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
export default function Ex4() {
  function toggleButton() {}
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.hello}>Xin chào!</Text>
      <Text style={styles.name}>TRINH TU KIET</Text>
      <Text style={styles.phone}>0988673208</Text>
      <TextInput style={styles.tip} 
      secureTextEntry={true} 
      placeholder = "Nhập mật khẩu"
      // inlineImageLeft = "lock_open"
      > 
        {" "}
      </TextInput>
      <TouchableOpacity style={styles.button}>
        <Button onPress={toggleButton} title="ĐĂNG NHẬP" color="white">
          {" "}
        </Button>
      </TouchableOpacity>
      <View style={styles.viewButton}>
        <Button onPress={toggleButton} title="THOÁT TÀI KHOẢN" color="white">
          {" "}
        </Button>
        <Button onPress={toggleButton} title="QUÊN MẬT KHẨU" color="white">
          {" "}
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#b0006d",
  },
  hello: {
    flex: 1,
    textAlign: "center",
    fontSize: 25,
    marginTop: 100,
    color: "white",
  },
  name: {
    textAlign: "center",
    //flex: 1,
    fontSize: 15,
    color: "white",
    top: -460
  },
  phone: {
    textAlign: "center",
    fontSize: 15,
    //flex: 15,
    color: "white",
    top: -450
  },
  tip: {
    backgroundColor: "#fff",
    height: 60,
    width: 350,
    alignSelf: "center",
    borderRadius: 30,
    top: -440,
    textAlign: "center",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#330033",
    width: 350,
    height: 60,
    alignSelf: "center",
    borderRadius: 30,
    justifyContent: "center",
    top: -420,
  },
  viewButton: {
    backgroundColor: "#b0006d",
    width: 350,
    height: 60,
    alignSelf: "center",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    top: -400,
  },
});
