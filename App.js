import { View, Text, TextInput, Switch } from "react-native";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import { useState } from "react";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "Gaming", value: 1 },
  { label: "Furniture", value: 2 },
  { label: "Clothing", value: 3 },
];

export default function App() {
  console.log("app started");
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker
        placeholder="category"
        icon="apps"
        items={categories}
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
      />
      <AppTextInput placeholder="Email" icon="email" />
    </Screen>
  );
}
