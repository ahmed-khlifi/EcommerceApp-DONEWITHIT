import React from "react";
import { Button, ImageBackground, StyleSheet, View, Text } from "react-native";
import { AppButton } from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/couch.jpg")}
    >
      <Text style={styles.logo}>My store</Text>
      <View style={styles.buttonsContainer}>
        <AppButton title="login" />
        <AppButton title="register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fc5c65",
    position: "absolute",
    top: 70,
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
});

export default WelcomeScreen;
