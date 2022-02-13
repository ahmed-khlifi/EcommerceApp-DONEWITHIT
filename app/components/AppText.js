import React from "react";
import { Text, StyleSheet, PlatformColor } from "react-native";

export default function appText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 19,
  },
});
