import { AppRegistry } from "react-native";
import App from "./App";
import MoreServices from "../src/screens/MoreServices";
AppRegistry.registerComponent("App", () => App);
AppRegistry.registerComponent("MoreServices", () => MoreServices);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});
