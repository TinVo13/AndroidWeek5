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

export default function App() {
  var height = Dimensions.get("window").height;
  return (
    <BasisFlatList/>
  );
}
