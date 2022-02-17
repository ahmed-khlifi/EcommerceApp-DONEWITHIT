import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import AppText from "../components/AppText";
import ActivityIndecator from "../components/ActivityIndecator";

import LottieView from "lottie-react-native";
import colors from "../config/colors";

function UploadScreen({ onDone, progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <ActivityIndecator visible={visible} />
        ) : (
          <LottieView
            source={require("../assets/animations/done.json")}
            loop={false}
            autoPlay
            style={styles.animation}
            onAnimationFinish={onDone}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    fontWeight: "bold",
    color: colors.primary,
  },
  animation: {
    width: 150,
  },
});

export default UploadScreen;
