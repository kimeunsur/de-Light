// CustomPage.js
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import SaltyPage from './SaltyPage';
import SweetPage from './home/sweety/SweetyPage';

const Tab = createBottomTabNavigator();

type IoniconName =
    |'home'
    |'fast-food'
    |'water'
    |'settings';

interface TabBarIconProps {
    name: IoniconName;
    color: string;
    size: number;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({name, color, size}) => {
    return <Ionicons name={name} color={color} size={size} />
};

export default function CustomPage() {
    const { height } = useWindowDimensions();
    const tabHeight = height * 0.07; // 탭 높이 설정
    return (
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
                    tabBarIcon: ({ color, size }) => 
                        <TabBarIcon name="water" color={color} size={size} />
                }} 
            />
            <Tab.Screen 
                name="당도" 
                component={SweetPage} 
                options={{ 
                    title: '당도', 
                    tabBarIcon: ({ color, size }) =>
                        <TabBarIcon name="fast-food" color={color} size={size} />
                }} 
            />
        </Tab.Navigator>    
    );
};