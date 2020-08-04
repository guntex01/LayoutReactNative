import React from "react";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  Slider,
} from "react-native";
import iconFemale from "../assets/calculator/female.png";
import iconSymbol from "../assets/calculator/symbol.png";
import iconMinus from "../assets/calculator/minus.png";
import iconPlus from "../assets/calculator/plus.png";
export default function Ex9() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.textTop}>BMI CALCULATOR</Text>
      </View>

      <View style={styles.bottomView}>
        <View style={styles.iconView}>
          <TouchableOpacity style={styles.iconS}>
            <Image source={iconSymbol}></Image>
            <Text style={styles.textTotal}>MALE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconS}>
            <Image source={iconFemale}></Image>
            <Text style={styles.textTotal}>FEMALE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.view1}>
          <Text style={styles.textTotal}>HEIGHT</Text>
          <View style={styles.view2}>
            <Text style={styles.textTop}>180</Text>
            <Text style={styles.textTop}>cm</Text>
          </View>
          <Slider
            style={{ width: 330, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#6d475e"
            maximumTrackTintColor="#12121b"
          />
        </View>
        <View style={styles.view3}>
          <View style={styles.view4}>
          <Text style={styles.textTotal}>HEIGHT</Text>
          <Text style={styles.textTop}>50</Text>
          <View style={styles.iconPM}>
            <TouchableOpacity>
          <Image source={iconPlus}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image source={iconMinus}></Image>
          </TouchableOpacity>
          </View>
          </View>
          <View style={styles.view4}>
          <Text style={styles.textTotal}>HEIGHT</Text>
          <Text style={styles.textTop}>20</Text>
          <View style={styles.iconPM}>
            <TouchableOpacity>
          <Image source={iconPlus}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image source={iconMinus}></Image>
          </TouchableOpacity>
          </View>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonCalculator}>
          <Text style={styles.textTop}>CALCULATOR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030e20",
  },
  topView: {
    backgroundColor: "#1c1e33",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -50,
  },
  textTop: {
    fontSize: 30,
    color: "#fff",
  },
  bottomView: {
    backgroundColor: "#1d2235",
    height: 750,
    marginTop: 20,
    alignItems: "center",
  },
  iconS: {
    backgroundColor: "#323344",
    height: 170,
    width: 170,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  iconView: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    width: 380,
  },
  view1: {
    backgroundColor: "#323344",
    marginTop: 20,
    height: 150,
    width: 380,
    borderRadius: 15,
    alignItems: "center",
    padding: 20,
  },
  view2: {
    flexDirection: "row",
  },
  textTotal: {
    color: "#6d475e",
  },
  view3:{
    marginTop: 20,
    width: 380,
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between"
    
  },
  view4:{
    backgroundColor: "#323344",
    height: 170,
    width: 170,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  iconPM:{
    flexDirection: "row",
    width: 100,
    justifyContent: "space-between"
  },
  buttonCalculator: {
    backgroundColor: "#e14865",
    width: 380,
    height: 60,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  }
});
