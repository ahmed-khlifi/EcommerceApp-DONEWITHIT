import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndecator from "../components/ActivityIndecator";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>couldn't retrieve the listings</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndecator visible={loading} />
      <FlatList
        data={listings}
        refreshing={loading}
        onRefresh={loadListings}
        onEndReached={() => console.log("end of flat list")}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            thumbnail={item.images[0].thumbnailUrl}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
