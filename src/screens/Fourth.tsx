import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import GoalPage from './GoalPage';
import MonthPage from './home/salty/SaltyMonthPage';

// 하단 탭 네비게이터 생성
const Tab = createBottomTabNavigator();

export default function Fourth() { 
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: { backgroundColor: "#f8f8f8" },
                    tabBarActiveTintColor: "#FF5733",
                    tabBarInactiveTintColor: "#666",
                    headerShown: false,
                }}
            >
                <Tab.Screen 
                    name="목표" 
                    component={GoalPage} 
                    options={{ 
                        title: '목표 설정', 
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="flag" color={color} size={size} />
                        ),
                    }} 
                />
                <Tab.Screen 
                    name="월간 통계" 
                    component={MonthPage} 
                    options={{ 
                        title: '월간 통계', 
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="calendar" color={color} size={size} />
                        ),
                    }} 
                />
            </Tab.Navigator>    
        </NavigationContainer>
    );
};
