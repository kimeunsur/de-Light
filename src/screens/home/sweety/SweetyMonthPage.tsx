import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNFS from 'react-native-fs';
import { Calendar, LocaleConfig } from 'react-native-calendars';

// Locale 설정
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

// JSON 파일에 있는 날짜 데이터 타입
interface DayData {
  morning: number;
  afternoon: number;
  evening: number;
  category: string;
  // 기타 필요한 필드가 있다면 추가
}

// Calendar에서 onDayPress 이벤트에 전달되는 파라미터 타입
interface CalendarDay {
  dateString: string;
  // 필요한 추가 필드가 있으면 정의 가능
}

// Calendar의 markedDates에 사용할 타입
interface MarkedDate {
  selected: boolean;
  selectedColor: string;
}


const SweetyMonthPage: React.FC = () => {
  const [markedDates, setMarkedDates] = useState<Record<string, MarkedDate>>({});
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [dayDetails, setDayDetails] = useState<DayData | null>(null);
  const [classifiedData, setClassifiedData] = useState<Record<string, DayData> | null>(null);

  // 파일 읽기 함수
  const readJSONFromFile = async (): Promise<void> => {
    try {
      const filePath = '/Users/kimeunsur/APP/src/sweety/sweety_data.json';
      const fileContent = await RNFS.readFile(filePath);
      const parsedData: Record<string, DayData> = JSON.parse(fileContent);
      setClassifiedData(parsedData);

      // 날짜별 마킹 설정
      const marked: Record<string, MarkedDate> = {};
      for (const date in parsedData) {
        const status = parsedData[date].category;
        if (status === 'high') {
          marked[date] = { selected: true, selectedColor: 'red' };
        } else if (status === 'mid') {
          marked[date] = { selected: true, selectedColor: 'green' };
        } else {
          marked[date] = { selected: true, selectedColor: 'yellow' };
        }
      }
      setMarkedDates(marked);
    } catch (error) {
      console.error('Error reading JSON file:', error);
    }
  };

  useEffect(() => {
    readJSONFromFile();
  }, []);

  const handleDayPress = (day: CalendarDay): void => {
    const date = day.dateString;
    setSelectedDate(date);

    if (classifiedData && classifiedData[date]) {
      setDayDetails(classifiedData[date]);
    } else {
      setDayDetails(null);
    }
  };

  return (
    <View style={styles.container}>
      <Calendar
        markedDates={markedDates}
        onDayPress={handleDayPress}
        theme={{
          todayTextColor: 'blue',
          selectedDayTextColor: 'white',
        }}
      />
      {selectedDate && dayDetails && (
        <View>
          <Text>Selected Date: {selectedDate}</Text>
          <Text>Morning: {dayDetails.morning}</Text>
          <Text>Afternoon: {dayDetails.afternoon}</Text>
          <Text>Evening: {dayDetails.evening}</Text>
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
});

export default SweetyMonthPage;