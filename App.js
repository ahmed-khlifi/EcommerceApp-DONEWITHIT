import React from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Screen from "./app/components/Screen";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OffLineNotice from "./app/components/OffLineNotice";
import AppText from "./app/components/AppText";

LogBox.ignoreAllLogs();

export default function App() {
  const demo = async () => {
    try {
      await AsyncStorage.setItem(
        "person",
        JSON.stringify({
          id: 1,
        })
      );
      const value = await AsyncStorage.getItem("person");
      const person = JSON.parse(value);
      console.log(person);
    } catch (error) {
      console.log(error);
    }
  };

  demo();

  return (
    <>
      <OffLineNotice />
      <Screen>
        <NavigationContainer theme={navigationTheme}>
          <AppNavigator />
        </NavigationContainer>
      </Screen>
    </>
  );
}
