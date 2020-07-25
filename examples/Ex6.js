import { StatusBar } from "expo-status-bar";
import React from "react";
import {StyleSheet, Text, View, SafeAreaView, TextInput, Image, TouchableOpacity, TouchableHighlight
} from "react-native";

import iamgefb from "../assets/facebook.png";

export default function Ex6() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.images} source={iamgefb} />
      <TextInput style={styles.sdt}>  </TextInput>
      <TextInput style={styles.mk}>  </TextInput>
      <TouchableOpacity style={styles.dn}> 
      <Text style={styles.tx}> Đăng nhập </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.qmk}> 
      <Text style={styles.tx1} > Quên mật khẩu? </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ql}> 
      <Text style={styles.tx2} > Quay lại </Text>
      </TouchableOpacity>
      <View style={styles.view1}> 
        <View style={styles.view2}></View>
        <Text style={styles.txh}> Hoặc </Text>
        <View style={styles.view3}></View>
      </View>
      <TouchableOpacity style={styles.ttk}> 
      <Text style={styles.txtk}> Tạo tài khoản mới </Text>
      </TouchableOpacity>
    </SafeAreaView>
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
    height: 200
  },
  sdt: {
    width: 350,
    height: 40,
    backgroundColor: "#fff",
    borderTopLeftRadius: 5,
    borderTopRightRadius:5,
    alignSelf: "center",
    top: 20,
    borderColor: "lightgray",
    borderWidth: 1

  },
  mk: {
    width: 350,
    height: 40,
    backgroundColor: "#fff",
    alignSelf: "center",
    top: 20,
    borderColor: "lightgray",
    borderWidth: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  dn:{
    backgroundColor: "blue",
    top: 40,
    width: 350,
    alignSelf: "center",
    height: 40,
    borderRadius: 5,
    justifyContent: "center"
  },
  tx: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
  qmk: {
    top: 60,
    alignSelf: "center",
  },
  tx1:{
    color: "blue",
    fontSize: 15
  },
  ql:{
    top: 70,
    alignSelf: "center"
  },
  tx2: {
    color: "blue",
    fontSize: 15
  },
  view1:{
    top: 350,
    flexDirection: "row",
    justifyContent: "center",
    
  },
  view2:{
    backgroundColor: "black",
    height: 1,
    width: 100
  },
  view3:{
    backgroundColor: "black",
    height: 1,
    width: 100
  },
  txh:{
    fontSize: 20,
    top: -11
  },
  ttk:{
    backgroundColor: "#99ebff",
    width:350,
    height:40,
    alignSelf: "center",
    top: 350,
    borderRadius: 5,
    justifyContent: "center"
  },
  txtk:{
    color: "blue",
    textAlign: "center",
    fontSize: 20
  },
});