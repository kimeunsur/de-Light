import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window'); // 화면 너비 가져오기
const CARD_SIZE = width * 0.5; // 화면 너비의 50%로 카드 크기 설정

const recipes = [
  {
    id: '1',
    title: "김치찌개",
    description: "맛있는 김치찌개 레시피",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2015/08/25/d1754942db6cebf74146eff6225e620d1_m.jpg"
  },
  {
    id: '2',
    title: "비빔밥",
    description: "건강한 비빔밥 레시피",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2015/12/08/0d2249438aac593752292c6380dbb5c41_m.jpg"
  },
  {
    id: '3',
    title: "불고기",
    description: "전통 불고기 레시피",
    image: "https://recipe1.ezmember.co.kr/img/icon_vod.png"
  },
];

const ingredients = [
  {
    id: '1',
    title: '상추',
    image: "https://example.com/lettuce.jpg"
  },
  {
    id: '2',
    title: '가지',
    image: "https://example.com/eggplant.jpg"
  },
  {
    id: '3',
    title: '양파',
    image: "https://example.com/onion.jpg"
  },
];

export default function RecommendedRecipes() {
  const navigation = useNavigation();

  const renderRecipe = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}>
        <Text style={styles.buttonText}>레시피 보기</Text>
      </TouchableOpacity>
    </View>
  );

  const renderIngredient = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>구매하러 가기</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>추천 식단</Text>
      <Text style={styles.subHeader}>내 냉장고 속 재료들로 만든 저염 저당식을 추천해드려요</Text>
      <FlatList
        data={recipes}
        renderItem={renderRecipe}
        keyExtractor={(item) => item.id}
        horizontal
        contentContainerStyle={styles.listContainer}
      />
      <Text style={styles.header}>레시피를 위한 재료 추천</Text>
      <Text style={styles.subHeader}>레시피를 만들기 위한 재료를 싸게 구입해보세요!</Text>
      <FlatList
        data={ingredients}
        renderItem={renderIngredient}
        keyExtractor={(item) => item.id}
        horizontal
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  subHeader: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  listContainer: {
    flexDirection: 'row',
  },
  card: {
    width: CARD_SIZE,
    height: CARD_SIZE,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 2,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: '100%',
    height: '60%',
    borderRadius: 8,
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 12,
    color: '#333',
    fontWeight: 'bold',
  },
});