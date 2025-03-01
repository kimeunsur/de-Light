import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MonthPage from "../salty/SaltyMonthPage";
import SweetyWeekPage from "./SweetyWeekPage";

const TopTab = createMaterialTopTabNavigator();

const Today: React.FC = () => {
  return (
    <View>
      <Text>오늘</Text>
    </View>
  );
};

const Week: React.FC = () => {
  return (
    <View>
      <Text>1주</Text>
    </View>
  );
};

const SweetPage: React.FC = () => {
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

export default SweetPage;