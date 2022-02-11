import { StyleSheet, Text, View, Alert, Button, Platform, SafeAreaView, StatusBar } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

export default function App() {
  console.log("app started")

  const {landscape} = useDeviceOrientation();

  return (
   <View>
     <Text>hello</Text>
   </View>
  );
}


