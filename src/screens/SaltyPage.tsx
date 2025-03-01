import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"; 
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SaltyMonthPage from "./home/salty/SaltyMonthPage";
const TopTab = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();
import SaltyToday from './home/salty/SaltyToday';
import SaltyWeek from './home/salty/SaltyWeek';
const Week = () => {
  return (
    <View>
      <Text>1주</Text>
    </View>
  );
};

export default function SaltyPage() { 
    return (
        <TopTab.Navigator>
        <TopTab.Screen name="오늘" component={SaltyToday} />
        <TopTab.Screen name="1주" component={SaltyWeek} />
        <TopTab.Screen name="1달" component={SaltyMonthPage} />
      </TopTab.Navigator>   
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
});