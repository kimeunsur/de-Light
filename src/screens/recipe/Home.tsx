import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RecommendedRecipes from './RecipePage'; // 추천 레시피 페이지
import RecipeDetail from './RecipeDetail'; // 레시피 상세 페이지
import { Recipe } from './types'; // 타입 정의

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RecommendedRecipes">
        <Stack.Screen
          name="RecommendedRecipes"
          component={RecommendedRecipes}
          options={{ title: '추천 식단' }}
        />
        <Stack.Screen
          name="RecipeDetail"
          component={RecipeDetail}
          options={{ title: '레시피 상세' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}