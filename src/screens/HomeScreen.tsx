import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Fourth from './Fourth';
import Goal from './Goal';
import Cook from './Cook';
import SaltyPage from "./SaltyPage";
import Recipe from "./recipe/RecipePage";

const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

// TopTabNavigator 설정
const Third = () => {
  return (
    <TopTab.Navigator
      initialRouteName="Fourth"
      screenOptions={{
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <TopTab.Screen name="Fourth" component={Fourth} />
      <TopTab.Screen name="First" component={Fourth} />
    </TopTab.Navigator>
  );
};

// BottomTabNavigator 설정
export default function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="home"
        component={SaltyPage}
        options={{
          title: "나만의 식사 단짝",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="goal"
        component={Goal}
        options={{
          title: "목표",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="apple" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="cook"
        component={Recipe}
        options={{
          title: "레시피&주문",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="smart"
        component={Fourth}
        options={{
          title: "스마트 연동",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wifi" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

// 스타일 설정
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});