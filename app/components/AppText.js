import React from "react";
import { Text, StyleSheet, PlatformColor } from "react-native";

export const AppText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 19,
  },
});
