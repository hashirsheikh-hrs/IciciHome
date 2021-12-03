import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  Image,
  Navigator
} from "react-native";
//import App from "../App";
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
//import { HeaderBackButton } from "@react-navigation/stack";
//const Stack = createStackNavigator();

const Items = [
  {
    name: "Savings",
    des: [
      "Savings is the amountSavings is the amountSavings is the amount of money left over after spending and other obligations are deducted from earnings"
    ],
    image: require("../pics/calculator.png"),
    //image: require("../public/assets/calculator.png"),
    image1: require("../pics/greaterthan.png")
  },
  {
    name: "Loan",
    des: [
      "A loan is a fo bt incubt incubt bt incubt incubt incu incubt incuincubt incubt incubt incubt incudebt incurred by an individual or other entity."
    ],
    image: require("../pics/checklist.png"),
    image1: require("../pics/greaterthan.png")
  },
  {
    name: "Apply",
    des: [
      "A loan is a form  loan is a form loan is a form loan is a form loan is a form loan is a form loan is a form of debt incurred by an individual or other entity."
    ],
    image: require("../pics/apply.png"),
    image1: require("../pics/greaterthan.png")
  }
];
export default function MoreServices({ navigation }) {
  return (
    <View style={styles.bodycontainer}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={Items}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image style={styles.logo1} source={item.image} />
            <View style={styles.text1}>
              <Text style={styles.item}>{item.name}</Text>
              <Text style={styles.text}>{item.des}</Text>
            </View>
            <Image style={styles.gretaer} source={item.image1} />
            {/* <View style={styles.inputContainer}></View> */}
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  text1: {
    flex: 1
  },
  // body: {
  //   flex: 1,
  //   flexDirection: "row",
  //   backgroundColor: "#ffffff"
  // },

  bodycontainer: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
    textDecorationStyle: ""
  },
  inputContainer: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 1,
    backgroundColor: "#666"

    //padding: 0,
    //flexDirection: "row",
    //width: 20
    //paddingRight: 50
  },

  gretaer: {
    //alignItems: "center",
    width: 20,
    //marginLeft: "90%",
    alignSelf: "center",
    justifyContent: "center",
    // marginTop: 30,
    height: 20
    //position: "absolute",
    //bottom:""
  },
  logo1: {
    height: 40,
    width: 40,
    alignSelf: "center",
    // alignItems: "Center",
    justifyContent: "center",
    marginLeft: 10,
    // marginTop: 15,
    bottom: 0
  },
  itemContainer: {
    //position:"absolute",
    width: "90%",
    height: "auto",
    backgroundColor: "#ffffff",
    //borderRadius: 10,
    marginLeft: 15,
    // marginTop: 15,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor: "#F5F5F5"
  },
  item: {
    marginLeft: 8,
    margin: 0,
    fontWeight: "bold"
    //justifyContent: "center",
    // alignItems: "center"
  },
  text: {
    // flexShrink:"a",
    width: "80%",
    height: "auto",
    //position: "absolute",
    textDecorationColor: "#F5F5F5",
    top: 20,
    marginLeft: 8,
    fontSize: 12
    //display: "inline-block",
    //flexDirection: "column",
    // alignSelf: "flex-start"
    //paddingTop: 0
  }
});
