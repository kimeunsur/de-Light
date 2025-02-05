//npm run ios -- --simulator="iPhone14 Pro (16.0)"

import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import DetailScreen from "./src/screens/DetailScreen";
import DetailScreen2 from "./src/screens/DetailScreen2";
import DetailScreen3 from "./src/screens/DetailScreen3";
import HomeScreen from "./src/screens/HomeScreen";

import SplashScreen from "react-native-splash-screen";
const Stack = createNativeStackNavigator();


export default function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (SplashScreen && SplashScreen.hide) {
        SplashScreen.hide(); // 스플래시 화면 숨김
      } 
    }, 1000);
  
    return () => clearTimeout(timer);
  }, []);
  

  return ( 
    
    <NavigationContainer>
      {/* 처음 접속시 initialRouteName에 지정된 경로에서 열림 */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false,}} />
    

      </Stack.Navigator>
    </NavigationContainer>
  )
}
