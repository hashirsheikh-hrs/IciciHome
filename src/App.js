import React from "react";
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
import Home from "./screens/Home";
import OpenNewAccount from "./screens/OpenNewAccount";
import MoreServices from "./screens/MoreServices";
import { createStackNavigator } from "@react-navigation/stack";
//import PagerView from "react-native-pager-view";
import { NavigationContainer } from "@react-navigation/native";
//import assets from "./public/assets";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from "@react-navigation/stack";
//import { HeaderBackButton } from "react-navigation";
const Stack = createStackNavigator();
const data = [
  {
    id: "a",
    value: "Open Savings Account",
    image: require("../public/assets/images.png")
  },
  {
    id: "b",
    value: "Apply for Credit Card",
    image: require("../public/assets/download.png")
  },
  {
    id: "c",
    value: "Apply for Loan",
    image: require("../public/assets/loan.jpg")
  },
  {
    id: "d",
    value: "Caluclator",
    image: require("../public/assets/calculator.png")
  },
  {
    id: "e",
    value: "Contact us",
    image: require("../public/assets/contactus.jpg")
  },
  {
    id: "f",
    value: "More Services",

    image: require("../public/assets/moreservices.png")
  }
];
const numColumns = 3;
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#FFA500"
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontSize: 20
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="More Services"
          component={MoreServices}
          options={({ navigation }) => ({
            // headerBackVisible: true,

            headerLeft: () => (
              // <Button
              //   onPress={() => {
              //     //console.log("hi");
              //     navigation.goBack();
              //   }}
              //   title="<"
              //   color="#000"
              // />
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Image
                  style={styles.logo1}
                  source={require("../public/cop.jpg")}
                />
              </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen name="Open New Account" component={OpenNewAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  logo1: {
    width: 20,
    height: 20,
    marginLeft: "100%"
  }
});

export default App;
