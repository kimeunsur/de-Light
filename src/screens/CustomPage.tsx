import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"; 
import SaltyPage from './SaltyPage';
import SweetPage from './home/sweety/SweetyPage';

const { height } = Dimensions.get('window');
const tabHeight = height * 0.07; // 탭 높이 설정
const Tab = createBottomTabNavigator();

export default function CustomPage() { 
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: { height: tabHeight },
                    tabBarActiveTintColor: "#FF5733", // 활성화된 탭 색상
                    tabBarInactiveTintColor: "#666", // 비활성화된 탭 색상
                    headerShown: false, // 상단 헤더 숨김
                }}
            >
                <Tab.Screen 
                    name="염도" 
                    component={SaltyPage} 
                    options={{ 
                        title: '염도', 
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="water" color={color} size={size} />
                        ),
                    }} 
                />
                <Tab.Screen 
                    name="당도" 
                    component={SweetPage} 
                    options={{ 
                        title: '당도', 
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="fast-food" color={color} size={size} />
                        ),
                    }} 
                />
            </Tab.Navigator>    
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
});