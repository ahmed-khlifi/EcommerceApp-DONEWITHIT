import React from "react";
import { View, StyleSheet, Image, Platform } from "react-native";
import { Image as ImageCache } from "react-native-expo-image-cache";

import AppText from "./AppText";
import colors from "../config/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function Card({ title, subTitle, imageUrl, onPress, thumbnail }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        {Platform.OS === "android" ? (
          <Image style={styles.image} source={{ uri: imageUrl }} />
        ) : (
          <ImageCache
            style={styles.image}
            uri={imageUrl}
            preview={{ uri: thumbnail }}
            tint="light"
          />
        )}
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
