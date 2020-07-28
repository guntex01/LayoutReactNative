import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

import facebookBanner from "../assets/facebookbanner.jpg";
const windowWidth = Dimensions.get("window").width;

export default function Ex7() {
  return (
    <>
      <Image style={styles.images} source={facebookBanner} />

      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View>
            <TextInput
              style={[styles.input, styles.phone]}
              placeholder="Số điện thoại hoặc email"
            />

            <TextInput
              style={[styles.input, styles.password]}
              placeholder="Mật khẩu"
            />

            <TouchableOpacity style={styles.buttonLogin}>
              <Text style={styles.buttonLoginText}> Đăng nhập </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonLink}>
              <Text style={styles.buttonLinkText}> Quên mật khẩu? </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonLink}>
              <Text style={styles.buttonLinkText}> Quay lại </Text>
            </TouchableOpacity>
          </View>

          <View>
            <View style={styles.row}>
              <View style={styles.line}></View>
              <Text style={styles.textOr}> HOẶC </Text>
              <View style={styles.line}></View>
            </View>

            <TouchableOpacity style={styles.buttonRegister}>
              <Text style={styles.buttonRegisterText}> Tạo tài khoản mới </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  images: {
    width: windowWidth,
    height: (windowWidth * 460) / 750,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  input: {
    width: "100%",
    height: 45,
    fontSize: 16,
    borderColor: "#d9d9d9",
    borderWidth: 1,
    paddingHorizontal: 15,
  },
  phone: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomWidth: 0,
  },
  password: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  buttonLogin: {
    backgroundColor: "#1977f3",
    marginTop: 20,
    width: "100%",
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
  },
  buttonLoginText: {
    color: "#a1c9fa",
    textAlign: "center",
    fontSize: 18,
  },
  buttonLink: {
    marginTop: 20,
    alignSelf: "center",
  },
  buttonLinkText: {
    color: "#286fdd",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
  },
  line: {
    backgroundColor: "#e0e0e0",
    height: 1,
    width: "30%",
  },
  textOr: {
    color: "#353535",
    fontSize: 14,
    top: -7,
  },
  buttonRegister: {
    backgroundColor: "#e7f3ff",
    width: "100%",
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
  },
  buttonRegisterText: {
    color: "#3982dd",
    textAlign: "center",
    fontSize: 16,
  },
});
