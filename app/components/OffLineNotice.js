import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import colors from "../config/colors";
import AppText from "./AppText";

function OffLineNotice(props) {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    <View style={styles.container}>
      <AppText style={styles.text}>No Inernet connection</AppText>
    </View>;
  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    position: "absolute",
    top: Constants.statusBarHeight,
    zIndex: 1,
    elevation: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
  },
});

export default OffLineNotice;
