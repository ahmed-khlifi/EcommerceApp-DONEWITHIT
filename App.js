import { StyleSheet, Text, View, Alert, Button, Platform, SafeAreaView, StatusBar } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  console.log("app started")


  return (
   <WelcomeScreen/>
  );
}


