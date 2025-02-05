import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { Recipe } from './types';

type RecipeDetailProps = {
  route: RouteProp<{ params: { recipe: Recipe } }, 'params'>;
};

export default function RecipeDetail({ route }: RecipeDetailProps) {
  const { recipe } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.description}>{recipe.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});