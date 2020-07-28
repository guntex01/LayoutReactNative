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
  Dimensions,
  FlatList,
} from "react-native";
import logoInstagram from "../assets/instargram/logoInstagram.png";
const DATA = [
  {
    id: "1",
    authorAvatar: require("../assets/instargram/instagram1.jpg"),
    authorName: "5.min.craft",
    image: require("../assets/instargram/instagram1.jpg"),
    isLiked: true,
    viewCount: 600357,
  },
  {
    id: "2",
    authorAvatar: require("../assets/bulb-on.jpg"),
    authorName: "6.min.craft",
    image: require("../assets/instargram/instagram2.jpg"),
    isLiked: false,
    viewCount: 100234,
  },
  {
    id: "3",
    authorAvatar: require("../assets/bulb-on.jpg"),
    authorName: "7.min.craft",
    image: require("../assets/instargram/instagram3.jpg"),
    isLiked: true,
    viewCount: 354859,
  },
];
const DATAS = [
  {
    id: "1",
    authorAvatar: require("../assets/instargram/instagram1.jpg"),
    authorName: "Tin của bạn",
    image: require("../assets/instargram/instagram1.jpg"),
    isLiked: true,
    viewCount: 600357,
  },
  {
    id: "2",
    authorAvatar: require("../assets/bulb-on.jpg"),
    authorName: "Toàn",
    image: require("../assets/instargram/instagram2.jpg"),
    isLiked: false,
    viewCount: 100234,
  },
  {
    id: "3",
    authorAvatar: require("../assets/bulb-on.jpg"),
    authorName: "Hưng",
    image: require("../assets/instargram/instagram3.jpg"),
    isLiked: true,
    viewCount: 354859,
  },
  {
    id: "4",
    authorAvatar: require("../assets/bulb-on.jpg"),
    authorName: "Đức",
    image: require("../assets/instargram/instagram3.jpg"),
    isLiked: true,
    viewCount: 354859,
  },
];
export default function Ex8() {
  // TODO: Sửa lại hiển thị của item
  const renderItem = ({ item }) => (
    <View>
      <View style={styles.viewName}>
        <Image style={styles.nameImage} source={item.authorAvatar} />
        <Text justifyContent={"center"}>{item.authorName}</Text>
      </View>
      <Image source={item.image} />
      <View style={styles.viewBottom}>
        <View style={styles.viewInBottom}>
          <FontAwesome5 name="heart" size={24} />
          <FontAwesome5 name="comment" size={24} />
          <FontAwesome5 name="paper-plane" size={24} />
        </View>
        <View>
          <FontAwesome5 name="bookmark" size={24} />
        </View>
      </View>
      <Text>638.597 lượt xem</Text>
      <Text>13 giờ trước</Text>
    </View>
  );
  const renderItem2 = ({ item }) => (
    <View>
      <Image style={styles.imageRender2} source={item.image} margin={20} />
      <View>
        <Text style={styles.textTop}>{item.authorName}</Text>
      </View>

      <View></View>
    </View>
  );
  // TODO: Sửa lại hiển thị phần Header
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <FontAwesome5 name="camera" size={24} />
        <Image style={styles.img} source={logoInstagram} />
        <FontAwesome5 name="paper-plane" size={24} />
      </View>

      <FlatList
        style={styles.flatListTop}
        data={DATAS}
        renderItem={renderItem2}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsVerticalScrollIndicator={false}
      />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  viewName: {
    flexDirection: "row",
    padding: 15,
    
  },
  viewBottom: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
  },
  viewInBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
  },
  img: {
    height: 40,
    width: 100,
  },
  nameImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  flatListTop: {
    height: 200,
  },
  imageRender2: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 1
  },
  textTop: {
    textAlign: "center",
  },
});
