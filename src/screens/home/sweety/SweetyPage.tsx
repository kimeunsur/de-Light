import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"; 
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MonthPage from "../salty/SaltyMonthPage";
const TopTab = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();
import SweetyWeekPage from './SweetyWeekPage';

const Today = () => {
  return (
    <View>
      <Text>오늘</Text>
    </View>
  );
};
const Week = () => {
  return (
    <View>
      <Text>1주</Text>
    </View>
  );
};

export default function SweetPage() { 
    return (
        <TopTab.Navigator>
        <TopTab.Screen name="오늘" component={Today} />
        <TopTab.Screen name="1주" component={SweetyWeekPage} />
        <TopTab.Screen name="1달" component={MonthPage} />
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