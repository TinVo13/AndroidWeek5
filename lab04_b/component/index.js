import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
//import flatListData from 'C:\Users\votru\OneDrive\Máy tính\VTT\week5\lab04_b\flatListItem.js'
import { StatusBar } from "expo-status-bar";
import Data from "../flatListItem";
import { Rating } from "react-native-ratings";

const index = () => {
  var height = Dimensions.get("window").height;
  var width = Dimensions.get("window").width;
  return (
    <View style={{ marginTop: 0.05 * height, flex: 1 }}>
      <View
        style={{
          padding: 10,
          backgroundColor: "#1BA9FF",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Image source={require("../assets/back.png")}></Image>
        <View style={{ flexDirection: "row", width: 150 }}>
          <TextInput
            style={{
              paddingHorizontal: 35,
              //paddingLeft:20,
              backgroundColor: "white",
              color: "#7D5B5B",
              height: 30,
            }}
            placeholder={"Dây cáp usb"}
          ></TextInput>
          <Image
            source={require("../assets/search.png")}
            style={{ aspectRatio: 1, position: "absolute", left: 5, top: 5 }}
          ></Image>
        </View>
        <Image source={require("../assets/giohang.png")}></Image>
        <Image source={require("../assets/menu.png")}></Image>
      </View>
      <FlatList
        data={Data}
        numColumns={2}
        style={{ backgroundColor: "white" }}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                flex: 1,
                backgroundColor: "#E5E5E5",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                margin: 1,
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  flexDirection: "column",
                  padding: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View style={{ padding: 10 }}>
                  <Image
                    source={require('../assets/giacchuyen.png')}
                    style={{ height: 90, width: 155 }}
                  ></Image>
                </View>
                <View style={{}}>
                  <Text
                    style={{ fontSize: 12, fontWeight: "400", lineHeight: 14 }}
                  >
                    {item.name}
                  </Text>
                </View>

                <View style={{ flexDirection: "row", margin: 5 }}>
                  <Rating
                  type='star'
                    ratingCount={5}
                    imageSize={20}
                    style={{backgroundColor:'red',}}
                  />
                  <Text>(15)</Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "700",
                      lineHeight: 14,
                      marginRight: 10,
                    }}
                  >
                    69.900 đ
                  </Text>
                  <Text>-39%</Text>
                </View>
              </View>
            </View>
          );
        }}
      ></FlatList>
      <View style={{backgroundColor:'#1BA9FF',width:'100%',flexDirection:'row',justifyContent:'space-around',alignItems:'center',padding:15}}>
        <TouchableOpacity>
            <Image source={require('../assets/menu.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../assets/home.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../assets/Back1.png')}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default index;
