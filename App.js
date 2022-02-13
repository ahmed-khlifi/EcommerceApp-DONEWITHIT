import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AppText } from "./app/components/AppText";
import { AppButton } from "./app/components/AppButton";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  console.log("app started");

  return <WelcomeScreen />;
}
