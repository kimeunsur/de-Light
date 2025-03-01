import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import babgood from '../src/babgood.png';

const App: React.FC = () => {

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.container}>
      <View style={[styles.card, styles.redBorder]}>
        <Text style={styles.cardTitle}>오늘 하루</Text>
        <Text style={styles.score}>
          30점 <Text style={styles.maxScore}>/ 100</Text>
        </Text>
        <Image style={styles.image} source={babgood} />
        <View style={styles.nutrientContainer}>
          <View style={styles.nutrientItem}>
            <Text style={styles.nutrientLabel}>탄수화물</Text>
            <Text style={styles.nutrientValue}>0 / 141g</Text>
          </View>
          <View style={styles.nutrientItem}>
            <Text style={styles.nutrientLabel}>단백질</Text>
            <Text style={styles.nutrientValue}>3 / 161g</Text>
          </View>
          <View style={styles.nutrientItem}>
            <Text style={styles.nutrientLabel}>지방</Text>
            <Text style={styles.nutrientValue}>66 / 44g</Text>
          </View>
        </View>

        <View style={styles.extraInfoContainer}>
          <View style={styles.infoItem}>
            <View style={styles.iconCircleBlue}>
              <Text style={styles.iconText}>염</Text>
            </View>
            <Text style={styles.infoValue}>7%</Text>
          </View>
          <View style={styles.infoItem}>
            <View style={styles.iconCircleRed}>
              <Text style={styles.iconText}>당</Text>
            </View>
            <Text style={styles.infoValue}>15 brix</Text>
          </View>
        </View>

        <Text style={styles.warning}>단백질이 부족! 너무 달아요!</Text>
        <Text style={styles.suggestion}>닭가슴살을 추가로 섭취하는 것을 추천해요.</Text>
      </View>

      <View style={[styles.card, styles.greenBorder]}>
        <Text style={styles.cardTitle}>① 단백질 부족</Text>
        <View style={styles.nutrientContainer}>
          <View style={styles.nutrientItem}>
            <Text style={styles.nutrientLabel}>탄수화물</Text>
            <Text style={styles.nutrientValue}>0 / 141g</Text>
          </View>
          <View style={styles.nutrientItem}>
            <Text style={styles.nutrientLabel}>단백질</Text>
            <Text style={styles.nutrientValue}>3 / 161g</Text>
          </View>
          <View style={styles.nutrientItem}>
            <Text style={styles.nutrientLabel}>지방</Text>
            <Text style={styles.nutrientValue}>0 / 44g</Text>
          </View>
        </View>
        <View style={styles.extraInfoContainer}>
          <View style={styles.infoItem}>
            <View style={styles.iconCircleBlue}>
              <Text style={styles.iconText}>염</Text>
            </View>
            <Text style={styles.infoValue}>7%</Text>
          </View>
          <View style={styles.infoItem}>
            <View style={styles.iconCircleRed}>
              <Text style={styles.iconText}>당</Text>
            </View>
            <Text style={styles.infoValue}>15 brix</Text>
          </View>
        </View>
      </View>

      <View style={[styles.card, styles.greenBorder]}>
        <Text style={styles.cardTitle}>② 나트륨 추가 섭취 필요</Text>
        <View style={styles.nutrientContainer}>
          <View style={styles.nutrientItem}>
            <Text style={styles.nutrientLabel}>탄수화물</Text>
            <Text style={styles.nutrientValue}>0 / 141g</Text>
          </View>
          <View style={styles.nutrientItem}>
            <Text style={styles.nutrientLabel}>단백질</Text>
            <Text style={styles.nutrientValue}>3 / 161g</Text>
          </View>
          <View style={styles.nutrientItem}>
            <Text style={styles.nutrientLabel}>지방</Text>
            <Text style={styles.nutrientValue}>0 / 44g</Text>
          </View>
        </View>
        <View style={styles.extraInfoContainer}>
          <View style={styles.infoItem}>
            <View style={styles.iconCircleBlue}>
              <Text style={styles.iconText}>염</Text>
            </View>
            <Text style={styles.infoValue}>7%</Text>
          </View>
          <View style={styles.infoItem}>
            <View style={styles.iconCircleRed}>
              <Text style={styles.iconText}>당</Text>
            </View>
            <Text style={styles.infoValue}>15 brix</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  redBorder: {
    borderWidth: 2,
    borderColor: '#FFCCCC',
  },
  greenBorder: {
    borderWidth: 2,
    borderColor: '#CCFFCC',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  score: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  maxScore: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#999',
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 20,
    alignSelf: 'center',
  },
  nutrientContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  nutrientItem: {
    alignItems: 'center',
  },
  nutrientLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 5,
  },
  nutrientValue: {
    fontSize: 14,
    color: '#333',
  },
  extraInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoItem: {
    alignItems: 'center',
  },
  iconCircleBlue: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#89CFF0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  iconCircleRed: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFA07A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  iconText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  infoValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  warning: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF5A5F',
    marginBottom: 5,
  },
  suggestion: {
    fontSize: 14,
    color: '#666',
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

export default App;