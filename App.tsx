// npm run ios -- --simulator="iPhone14 Pro (16.0)"

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import SplashScreen from 'react-native-splash-screen';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Detail: undefined;
  Detail2: undefined;
  Detail3: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean|null>(null);

  const checkLoginStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      setIsLoggedIn(!!token);
    } catch (error) {
      console.error('로그인 상태 확인 오류:', error);
    } finally {
      setIsLoading(false);
      SplashScreen.hide();
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);
  if (isLoading) {
    return null;
  }
  return (
    <NavigationContainer>
      {/* 처음 접속시 initialRouteName에 지정된 경로에서 열림 */}
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
