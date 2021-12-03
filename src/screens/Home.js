import { React, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  navigation,
  TouchableOpacity,
  Button,
  TouchableHighlight,
  ScrollView
} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater("");
  }, 2500);
};

const data = [
  {
    id: "a",
    value: "Open Savings Account",
    image: require("../../public/assets/images.png")
  },
  {
    id: "b",
    value: "Apply for Credit Card",
    image: require("../../public/assets/download.png")
  },
  {
    id: "c",
    value: "Apply for Loan",
    image: require("../../public/assets/loan.jpg")
  },
  {
    id: "d",
    value: "Caluclator",
    image: require("../../public/assets/calculator.png")
  },
  {
    id: "e",
    value: "Contact us",
    image: require("../../public/assets/contactus.jpg")
  },
  {
    id: "f",
    value: "More Services",
    image: require("../../public/assets/moreservices.png")
  }
];
const numColumns = 3;
const lengthInput = 4;
function Home({ navigation }) {
  const [userPin, setPin] = useState({
    pin: ""
  });
  const { pin } = userPin;
  const [error, setError] = useState("");
  var dumPin = "1234";
  const onChagePin = (value, pin) => {
    setPin({ ...userPin, [pin]: value });

    if (value.length === lengthInput) {
      if (value === dumPin) {
        navigation.navigate("More Services");
        setPin({ pin: "" });
      } else {
        return updateError("Invalid Pin", setError);
      }
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.bg}>
        <View style={styles.ilogo}>
          <Image
            style={styles.logo}
            source={require("../../public/assets/icici.jpg")}
          />
          <Text style={styles.text}>ICICI</Text>
          <Text style={styles.banktext}>Bank</Text>
          <View>
            <Text style={styles.version}>App Ver 13.5</Text>
          </View>
        </View>
        <Text style={styles.welcometext}>Welcome to iMobile </Text>
      </View>
      <View style={styles.pinbody}>
        <Text style={styles.pintext}>Enter 4 Digit Login Pin</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={pin}
            maxLength={4}
            onChangeText={(value) => onChagePin(value, "pin")}
          />
        </View>

        {error ? (
          <Text style={{ color: "red", fontsize: 10, textAlign: "center" }}>
            {error}
          </Text>
        ) : null}
        <Text style={styles.forgetpintext}>ForgetPin?</Text>
      </View>
      <View style={styles.producttext}>
        <Text style={styles.bold}>Products at your fingertips</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => {
                if (item.id === "f") {
                  navigation.navigate("More Services");
                }
              }}
            >
              <Image style={styles.logo1} source={item.image} />
              <Text style={styles.item}>{item.value}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          numColumns={numColumns}
        />
      </View>

      <View style={styles.flexbody}>
        <View style={styles.view1}>
          <Image
            style={styles.flexlogo}
            source={require("../../public/assets/iplay.jpg")}
          />
          <Text style={styles.flextext}> Demo Video </Text>
        </View>
        <View style={styles.view2}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Open New Account");
            }}
          >
            <Image
              style={styles.flexlogo}
              source={require("../../public/assets/images.png")}
            />
            <Text style={styles.flextext}> Apply Now </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.view3}>
          <Image
            style={styles.flexlogo}
            source={require("../../public/assets/moreservices.png")}
          />
          <Text style={styles.flextext}> Offers </Text>
        </View>
        <View style={styles.view4}>
          <Image
            style={styles.flexlogo}
            source={require("../../public/assets/locate.jpg")}
          />

          <Text style={styles.flextext}>Locate Us</Text>
        </View>
        <View style={styles.view5}>
          <Image
            style={styles.flexlogo}
            source={require("../../public/assets/contactus.jpg")}
          />
          <Text style={styles.flextext}>Contact Us</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  bg: {
    position: "absolute",
    top: 0,
    height: "40%",
    width: "100%",
    backgroundColor: "#FFA500",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  pintext: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 40,
    paddingBottom: 10
  },
  bold: {
    fontWeight: "bold",
    marginLeft: 15,
    fontSize: 15
  },
  welcometext: {
    width: "100%",
    fontWeight: "bold",
    fontSize: 20,
    color: "#ffffff",
    marginLeft: 35,
    marginTop: 10
  },
  ilogo: {
    flexDirection: "row",
    width: "100%",
    marginTop: 25
  },
  producttext: {
    backgroundColor: "#ffffff",
    position: "absolute",
    top: "50%"
  },
  logo: {
    width: 25,
    height: 25,
    marginLeft: 20
    //marginTop: 25
  },
  logo1: {
    height: 20,
    width: 20,
    alignItems: "stretch",
    marginLeft: 25,
    marginTop: 15
  },
  text: {
    fontStyle: "italic",
    fontWeight: "bold",
    //marginTop: 25,
    fontSize: 20,
    color: "#ffffff"
  },
  banktext: {
    marginLeft: 5,
    fontStyle: "italic",
    //marginTop: 25,
    fontSize: 20,
    color: "#ffffff"
  },
  version: {
    marginLeft: 100,
    //fontStyle: "italic",
    //marginTop: 25,
    fontSize: 15,
    color: "#ffffff"
  },
  itemContainer: {
    width: 70,
    height: 70,
    backgroundColor: "#fff1f3",
    borderRadius: 10,
    marginLeft: 15,
    marginTop: 10
  },

  item: {
    marginbottom: 100,
    textAlign: "center",
    flex: 1,
    fontSize: 11
  },
  pinbody: {
    top: "22%",
    position: "absolute",
    width: 240,
    height: 120,
    backgroundColor: "#F3CFC6",
    borderRadius: 10,
    marginLeft: 12,
    marginBottom: 5,
    paddingTop: 20
  },
  inputContainer: {
    marginLeft: 50,
    padding: 0,
    flexDirection: "row",
    width: 300
  },
  input: {
    // backgroundColor: "#fff",
    //height: "4",
    fontSize: 12,
    // borderWidth: 1,
    borderBottomWidth: 2,
    borderColor: "#B0B0B0",
    alignItems: "center",
    textAlign: "center",
    //outline: "none",
    outlineStyle: "none"
    //outlineColor: "#F3CFC6"
  },
  forgetpintext: {
    textAlign: "center",
    paddingTop: 15
  },
  tabcontainer: {
    width: "100%",
    // top: "0%",
    // position: "absolute",
    paddingTop: "100%"
  },
  flexbody: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: "100%",
    bottom: 0,
    position: "absolute"
  },
  flexlogo: {
    width: 40,
    height: 30
    // margin: 0
  },
  view1: {
    flex: 1,
    //backgroundColor: "#00ffff",
    alignItems: "center",
    justifyContent: "center"
  },
  view2: {
    flex: 1,

    // backgroundColor: "#ff00ff",
    alignItems: "center",
    justifyContent: "center"
  },
  view3: {
    flex: 1,
    //backgroundColor: "#ffff00",
    alignItems: "center",
    justifyContent: "center"
  },
  view4: {
    flex: 1,
    // backgroundColor: "#ff0000",
    alignItems: "center",
    justifyContent: "center"
  },
  view5: {
    flex: 1,
    //backgroundColor: "#0fff0f",
    alignItems: "center",
    justifyContent: "center"
  },
  flextext: {
    fontSize: 12
  }
});

export default Home;
