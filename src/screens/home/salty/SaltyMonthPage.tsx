import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import RNFS from 'react-native-fs'; // react-native-fs
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales.fr = {
  monthNames: [
    '01월', '02월', '03월', '04월', '05월', '06월', '07월', '08월', '09월', '10월', '11월', '12월',
  ],
  monthNamesShort: [
    '01월', '02월', '03월', '04월', '05월', '06월', '07월', '08월', '09월', '10월', '11월', '12월',
  ],
  dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: '오늘',
};
LocaleConfig.defaultLocale = 'fr';

const SaltyMonthPage = () => {
  const [markedDates, setMarkedDates] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [dayDetails, setDayDetails] = useState(null);
  const [classifiedData, setClassifiedData] = useState(null);

  // 파일 읽기 함수
  const readJSONFromFile = async () => {
    const filePath = '/Users/kimeunsur/APP/src/salty/salty_data.json';
    const fileContent = await RNFS.readFile(filePath);
    const parsedData = JSON.parse(fileContent);
    setClassifiedData(parsedData);

    // 날짜별로 마킹 설정
    const marked = {};
    for (const date in parsedData) {
      const status = parsedData[date]['category'];
      if (status === 'high') {
        marked[date] = {
          marked: true,
          dotColor: 'red',
          customStyles: {
            container: { borderRadius: 8, height: 10, width: 10 }, // 동그라미 크기 조정
          },
        };
      } else if (status === 'mid') {
        marked[date] = {
          marked: true,
          dotColor: 'green',
          customStyles: {
            container: { borderRadius: 8, height: 10, width: 10 },
          },
        };
      } else {
        marked[date] = {
          marked: true,
          dotColor: 'pink',
          customStyles: {
            container: { borderRadius: 8, height: 10, width: 10 },
          },
        };
      }
    }
    setMarkedDates(marked);
  };

  useEffect(() => {
    readJSONFromFile();
  }, []);

  const handleDayPress = (day) => {
    const date = day.dateString;
    setSelectedDate(date);

    const dayDetails = classifiedData[date];
    if (dayDetails) {
      setDayDetails(dayDetails);
    } else {
      setDayDetails(null);
    }
  };

  return (
    <View style={styles.container}>

      {/* 캘린더 */}
      <Calendar
        markedDates={markedDates}
        onDayPress={handleDayPress}
        theme={{
          todayTextColor: 'blue',
          selectedDayBackgroundColor: 'gray',
          selectedDayTextColor: 'white',
          arrowColor: 'black',
          textDayFontSize: 14,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 12,
          dotStyle: {
            width: 8,
            height: 8,
            borderRadius: 4,
          },
        }}
        style={styles.calendar}
      />

      {/* 선택된 날짜 세부 정보 */}
      {selectedDate && dayDetails && (
        <View style={styles.detailsContainer}>
          <Text style={styles.selectedDateText}>선택된 날짜: {selectedDate}</Text>
          <Text>아침: {dayDetails.morning}</Text>
          <Text>점심: {dayDetails.afternoon}</Text>
          <Text>저녁: {dayDetails.evening}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  arrow: {
    fontSize: 20,
    color: '#333',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  calendar: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    padding: 10,
    marginBottom: 20,
  },
  detailsContainer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  selectedDateText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default SaltyMonthPage;