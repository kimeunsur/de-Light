import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";

export default function Fourth() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handlePress = (cardIndex) => {
    setSelectedCard(cardIndex);
  };

  const cards = [
    {
      id: 0,
      title: 'AI 일반',
      subtitle: 'General',
      description: 'AI가 적합한 목표를 설정하여 탄단지 균형을 유지하고 칼로리를 제한해요',
    },
    {
      id: 1,
      title: '다이어트',
      subtitle: 'Weight-loss',
      description: '효율적인 체중 감량을 위해 칼로리 제한과 영양소 균형을 맞춘 식단을 제공합니다.',
    },
    {
      id: 2,
      title: '당뇨 등 만성질환',
      subtitle: 'Therapeutic',
      description: '건강 상태를 고려하여 혈당 조절과 염분 관리에 최적화된 식단 목표를 제공합니다.',
    },
    {
      id: 3,
      title: '청소년',
      subtitle: 'Youth',
      description: '균형있고 올바른 성장을 위한 탄단지 목표를 설정해요.',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>식단 목표를 정해볼까요?</Text>
      <Text style={styles.subtitle}>
        목표 달성을 위한 영양성분을 설정하고, {"\n"}
        맞춤형 식단 및 레시피를 추천해드려요.
      </Text>

      <FlatList
        data={cards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.card,
              selectedCard === item.id && styles.selectedCard,
            ]}
            onPress={() => handlePress(item.id)}
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListFooterComponent={() => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('목표가 설정되었습니다!')}
          >
            <Text style={styles.buttonText}>목표 설정</Text>
          </TouchableOpacity>
        )}
      />
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 20,
    lineHeight: 20,
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
    borderWidth: 2,
    borderColor: '#F9F9F9', // 기본 테두리 색상
  },
  selectedCard: {
    borderColor: '#00C73C', // 선택된 카드의 테두리 색상 강조
    backgroundColor: '#ffffff',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#999999',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555555',
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#00C73C',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});