// npm run ios -- --simulator="iPhone14 Pro (16.0)"

import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "./src/screens/DetailScreen";
import DetailScreen2 from "./src/screens/DetailScreen2";
import DetailScreen3 from "./src/screens/DetailScreen3";
import HomeScreen from "./src/screens/HomeScreen";
import SplashScreen from "react-native-splash-screen";

type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
  Detail2: undefined;
  Detail3: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (SplashScreen && typeof SplashScreen.hide === "function") {
        SplashScreen.hide(); // 스플래시 화면 숨김
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      {/* 처음 접속시 initialRouteName에 지정된 경로에서 열림 */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
