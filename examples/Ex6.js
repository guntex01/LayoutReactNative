import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import imagefb from "../assets/facebookbanner.jpg";
const windowWidth = Dimensions.get("window").width;
export default function Ex6() {
  return (
    <>
      <Image style={styles.images} source={imagefb} />
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <View>
          <TextInput
            style={styles.phone}
            placeholder="số điện thoại hoặc email"
          />
          <TextInput style={styles.password} placeholder="mật khẩu" />
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.buttonLoginText}> Đăng nhập </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgotpassword}>
            <Text style={styles.textForgotpassword}> Quên mật khẩu? </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.back}>
            <Text style={styles.textback}> Quay lại </Text>
          </TouchableOpacity>
          <View style={styles.view1}>
            <View style={styles.view2}></View>
            <Text style={styles.textOr}> Hoặc </Text>
            <View style={styles.view3}></View>
          </View>
          <TouchableOpacity style={styles.creatnewaccount}>
            <Text style={styles.textCreatnewaccount}> Tạo tài khoản mới </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: "column",
    //justifyContent: "center",
    backgroundColor: "#fff",
  },
  images: {
    width: "100%",
    height: (windowWidth * 450) / 750,
  },
  phone: {
    width: 350,
    height: 40,
    backgroundColor: "#fff",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignSelf: "center",
    top: 20,
    borderColor: "lightgray",
    borderWidth: 1,
    padding: 10,
    borderBottomWidth: 0,
  },
  password: {
    width: 350,
    height: 40,
    backgroundColor: "#fff",
    alignSelf: "center",
    top: 20,
    borderColor: "lightgray",
    borderWidth: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    padding: 10,
  },
  buttonLogin: {
    backgroundColor: "#1977f3",
    top: 40,
    width: 350,
    alignSelf: "center",
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
  },
  buttonLoginText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
  forgotpassword: {
    top: 60,
    alignSelf: "center",
  },
  textForgotpassword: {
    color: "#286fdd",
    fontSize: 15,
  },
  back: {
    top: 70,
    alignSelf: "center",
  },
  textback: {
    color: "#286fdd",
    fontSize: 15,
  },
  view1: {
    top: 350,
    flexDirection: "row",
    justifyContent: "center",
  },
  view2: {
    backgroundColor: "#e0e0e0",
    height: 1,
    width: 100,
  },
  view3: {
    backgroundColor: "#e0e0e0",
    height: 1,
    width: 100,
  },
  textOr: {
    fontSize: 20,
    top: -14,
  },
  creatnewaccount: {
    backgroundColor: "#e7f3ff",
    width: 350,
    height: 40,
    alignSelf: "center",
    top: 350,
    borderRadius: 5,
    justifyContent: "center",
  },
  textCreatnewaccount: {
    color: "#9999ff",
    textAlign: "center",
    fontSize: 20,
  },
});
