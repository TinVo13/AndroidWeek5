import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import flatListData from "../flatListItem";
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function BasisFlatList() {
  //const [selectedId, setSelectedId] = useState(null);
  var height = Dimensions.get("window").height;
  return (
    <View style={{ flex: 1, marginTop: 0.03 * height, }}>
      <View
        style={{
          backgroundColor: "#1BA9FF",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 15,
          alignItems: "center",
        }}
      >
        <Image source={require("../assets/back.png")}></Image>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "400",
            lineHeight: 16,
          }}
        >
          Chat
        </Text>
        <Image source={require("../assets/Vector.png")}></Image>
      </View>
      <View style={{ backgroundColor: "#C4C4C4" }}>
        <Text style={{ margin: 20 }}>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chát với shop!
        </Text>
      </View>
      <View style={{width:'100%',height:'76%'}}>
        <FlatList
          data={flatListData}
          style={{ backgroundColor: "#C4C4C4" }}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.container}>
                <View style={{width:'20%',height:'100%'}}>
                  <Image source={{uri:item.photo}} style={{height:80,width:80}}></Image>
                </View>
                <View style={{width: "50%", paddingVertical: 20,paddingHorizontal:5 }}>
                  <Text style={{}}>{item.email}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ marginRight: 5, color: "#7D5B5B" }}>
                      Name:
                    </Text>
                    <Text style={{}}>{item.name}</Text>
                  </View>
                </View>
                <View style={{width:'30%',justifyContent:'center',alignItems:'center'}}>
                  <TouchableOpacity
                    style={{ backgroundColor: "red", padding: 10, width: 88 }}
                  >
                    <Text style={{ textAlign: "center", color: "white" }}>
                      Chat
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        ></FlatList>
      </View>
      <View style={{backgroundColor:'#1BA9FF',width:'100%',flexDirection:'row',justifyContent:'space-around',alignItems:'center',padding:10}}>
          <Image source={require('../assets/menu.png')}></Image>
          <Image source={require('../assets/home.png')}></Image>
          <Image source={require('../assets/Back1.png')}></Image>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 1,
  },
});
