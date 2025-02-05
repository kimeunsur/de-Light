import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function SaltyWeek() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>이번주</Text>
        <Text style={styles.score}>
          75점 <Text style={styles.maxScore}>/ 100</Text>
        </Text>

        {/* 그래프 */}
        <LineChart
          data={{
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
              {
                data: [40, 60, 50, 80, 70, 90, 75],
                strokeWidth: 2,
              },
            ],
          }}
          width={300} // 그래프 너비
          height={120} // 그래프 높이
          chartConfig={{
            backgroundColor: '#ECFCE5',
            backgroundGradientFrom: '#ECFCE5',
            backgroundGradientTo: '#ECFCE5',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 2,
            propsForDots: {
              r: '3',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={styles.graph}
        />

        {/* 영양 정보 */}
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

        {/* 염/당 정보 */}
        <View style={styles.extraInfoContainer}>
          <View style={styles.extraInfoItem}>
            <View style={styles.circleBlue}>
              <Text style={styles.extraInfoLabel}>염</Text>
            </View>
            <Text style={styles.extraInfoValue}>7%</Text>
          </View>
          <View style={styles.extraInfoItem}>
            <View style={styles.circleRed}>
              <Text style={styles.extraInfoLabel}>당</Text>
            </View>
            <Text style={styles.extraInfoValue}>15 brix</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
  card: {
    backgroundColor: '#ECFCE5',
    borderRadius: 16,
    padding: 20,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  score: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  maxScore: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#999',
  },
  graph: {
    marginVertical: 20,
    borderRadius: 16,
  },
  nutrientContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  nutrientItem: {
    alignItems: 'center',
  },
  nutrientLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  nutrientValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  extraInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  extraInfoItem: {
    alignItems: 'center',
  },
  circleBlue: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#89CFF0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  circleRed: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFA07A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  extraInfoLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  extraInfoValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
});