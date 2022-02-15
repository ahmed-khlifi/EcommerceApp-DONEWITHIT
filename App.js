import React, { useState } from "react";

import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  console.log("====================================");
  console.log("starting the app");
  console.log("====================================");

  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((img) => img !== uri));
  };

  return (
    <Screen>
      <ListingEditScreen />
    </Screen>
  );
}
