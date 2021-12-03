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
import { createStackNavigator } from "@react-navigation/stack";
import { Linking } from "react-native";
const Items = [
  {
    name: "Open Savings Account Instantly",
    des: ["Get an instant account in 4 minutes and start transcting digitally"],
    card: "Debit Card And Cheue Book Will Follow",
    image: require("../pics/checklist.png"),
    bottomtext: "Instant Savings Account"
  },
  {
    name: "Open Salary Account Instantly",
    des: ["Get an instant account in 4 minutes and start transcting digitally"],
    card: "Debit Card And Cheue Book Will Follow",
    image: require("../pics/calculator.png"),
    bottomtext: "Instant Salary Account"
  }
];
export default function OpenNewAccount({ navigation }) {
  return (
    <View style={styles.body}>
      <View>
        <Text style={styles.text}>Hi,there!</Text>
      </View>
      <View>
        <Text style={styles.text1}>Let's get you started</Text>
      </View>
      <View>
        <Text style={styles.text2}>
          Select the type of account you want to open with us.
        </Text>
      </View>
      <View style={styles.bodycontainer}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={Items}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <View style={styles.logo}>
                <Image style={styles.logo1} source={item.image} />

                <View style={styles.title}>
                  <Text style={styles.title1}>{item.name}</Text>
                  <Text style={styles.title2}>{item.des}</Text>
                  <Text style={styles.title3}>{item.card}</Text>
                </View>
              </View>
              <View style={styles.bottomcontainer}>
                <Text
                  style={styles.bottom}
                  onPress={() => {
                    Linking.openURL("https://icicibank.com");
                  }}
                >
                  {item.bottomtext}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bottomcontainer: {
    backgroundColor: "#000080",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    //paddingBottom: 15,
    //paddingtop: 15,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5
    // height:50
  },
  bottom: {
    color: "#ffffff",
    marginTop: 5,
    marginBottom: 5,
    //height: 125,
    textAlign: "center"
  },
  body: {
    width: "100%",
    height: "100%",
    flex: 1,
    //flex: 1,
    //flexDirection: "row",
    backgroundColor: "#ffffff"
  },
  text: {
    paddingTop: 5,
    alignContent: "center",
    alignItems: "center",
    //justifyContent: "center",
    flex: 1,
    textAlign: "center",
    color: "orange",
    fontWeight: "bold",
    fontSize: 15
  },
  text1: {
    paddingTop: 5,
    // flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    //justifyContent: "center",
    flex: 1,
    textAlign: "center",
    color: "#000080",
    fontWeight: "bold",
    fontSize: 15
  },
  text2: {
    paddingTop: 5,
    // flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    //justifyContent: "center",
    flex: 1,
    textAlign: "center",
    color: "#000080",
    fontStyle: "italic",
    //fontWeight: "bold",
    fontSize: 15
  },
  itemContainer: {
    flex: 1,
    width: "100%",
    height: "auto",
    borderColor: "#f5f5f5",
    // backgroundColor: "#",
    //borderRadius: 10,
    //marginLeft: 15,
    borderWidth: 10,
    textAlign: "center",
    alignContent: "center"
  },
  logo: {
    flex: 1,
    //backgroundColor:"red",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  logo1: {
    marginLeft: 20,
    marginRight: 20,
    height: 40,
    width: 40
    //flex:1
  },
  title: {
    //backgroundColor: "#000",
    paddingTop: 5,
    paddingBottom: 5,
    flex: 3
    //flexDirection: "column",
    // marginLeft: 10
  },
  title1: {
    paddingTop: 5,
    flex: 1,
    color: "#000080",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "left"
  },
  title2: {
    paddingTop: 5,
    flex: 1,
    color: "#000080",
    fontSize: 12,
    textAlign: "left"
  },
  title3: {
    paddingTop: 5,
    flex: 1,
    textAlign: "left",
    color: "#000",
    fontSize: 12
  }
});
