import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Dimensions, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import RNFS from 'react-native-fs'; // react-native-fs

const SweetyWeekPage = () => {

    const [classifiedData, setClassifiedData] = useState<{ [key: string]: { average: number } } | null>(null);
    const [weeklyData, setWeeklyData] = useState<{ label: string; average: number }[]>([]);
  
    // Function to process data into weekly averages
    const processWeeklyData = (data: { [key: string]: { average: number } }) => {
      const dates = Object.keys(data);
      const values = Object.values(data);
      const weeks: { label: string; average: number }[] = [];
      let weekSum = 0;
      let count = 0;
  
      dates.forEach((date, index) => {
        const value = values[index]?.average;
    
        // 유효성 검사: 값이 숫자인지 확인
        if (isNaN(value) || value === undefined || value === null) {
          console.warn(`Invalid data at index ${index}:`, value);
          return; // 건너뛰기
        }
        weekSum += values[index].average;
        count++;
        if ((index + 1) % 7 === 0 || index === dates.length - 1) {
          const weekLabel = `Week ${Math.ceil((index + 1) / 7)}`;
          weeks.push({ label: weekLabel, average: parseFloat((weekSum / count).toFixed(2)) });
          weekSum = 0;
          count = 0;
        }
      });
  
      return weeks;
    };

    // 파일 읽기 함수
    const readJSONFromFile = async () => {
      const filePath = '/Users/kimeunsur/APP/src/sweety/sweety_data.json'; //계속 RNFS 실패해서....
      const fileContent = await RNFS.readFile(filePath);
      const parsedData = JSON.parse(fileContent); 
      setClassifiedData(parsedData);

      const processedData = processWeeklyData(parsedData);
      setWeeklyData(processedData);
    };
  
    useEffect(() => {
      readJSONFromFile(); 
    }, []);
  
    const labels = weeklyData.map((week) => week.label);
    const averages = weeklyData.map((week) => week.average); 
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Weekly Salinity Averages</Text>
        <LineChart
          data={{
            labels,
            datasets: [
              {
                data: averages
              }
            ]
          }}
          width={Dimensions.get('window').width - 20}
          height={220}
          yAxisSuffix=""
          yAxisInterval={0.1}
          chartConfig={{
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
      },
      loadingText: {
        fontSize: 18,
        color: '#999'
      }
  });
  
  export default SweetyWeekPage;