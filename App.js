import React from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Screen from "./app/components/Screen";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

LogBox.ignoreAllLogs();

const Tab = createBottomTabNavigator();

export default function App() {
  console.log("====================================");
  console.log("starting the app");
  console.log("====================================");

  return (
    <Screen>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </Screen>
  );
}
