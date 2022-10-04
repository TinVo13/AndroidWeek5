import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
//import data from './flatListItem';
import BasisFlatList from "./component/BasisFlatList";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FlatListDemo from "./component/FlatList";

export default function App() {
  const Tab = createBottomTabNavigator();
  var height = Dimensions.get("window").height;
  return (
    <BasisFlatList/>
  );
}
