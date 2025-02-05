import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';

export default function Cook() {
  const [recipes, setRecipes] = useState([]); // 레시피 데이터를 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태를 관리

  // API 호출 함수
  const fetchRecipes = async () => {
    try {
      // API 엔드포인트 및 키 설정 (예제용, 실제 사용 시 API_KEY 변경 필요)
      const response = await fetch('https://api.10000recipe.com/v1/recipes?apiKey=YOUR_API_KEY');
      const data = await response.json();
      setRecipes(data.recipes); // API에서 가져온 데이터를 상태에 저장
      setLoading(false); // 로딩 상태 해제
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setLoading(false); // 에러가 발생해도 로딩 상태 해제
    }
  };

  // 컴포넌트가 처음 렌더링될 때 실행
  useEffect(() => {
    fetchRecipes(); // 레시피 데이터를 가져오는 함수 호출
  }, []);

  // 레시피 카드를 렌더링하는 함수
  const renderRecipeCard = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>만개의 레시피</Text>
      <View style={styles.progressBar} />

      {loading ? ( // 로딩 상태일 때 표시
        <ActivityIndicator size="large" color="#00C73C" />
      ) : (
        <FlatList
          data={recipes} // 레시피 데이터를 FlatList에 전달
          keyExtractor={(item) => item.id.toString()} // 고유 ID를 키로 설정
          renderItem={renderRecipeCard} // 각 레시피 카드를 렌더링
          contentContainerStyle={{ paddingBottom: 100 }} // 스크롤 하단 여백
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#00C73C',
    borderRadius: 2,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555555',
    lineHeight: 20,
  },
});