import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import RNFS from 'react-native-fs'; // react-native-fs
import { Calendar, LocaleConfig } from 'react-native-calendars';
import CommonHeader from '../../CommonHeader';

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

const cvtParamDate = (date) => { 
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const SweetyMonthPage = () => {

  const [markedDates, setMarkedDates] = useState({}); // 캘린더에 표시할 날짜 마킹 상태
  const [selectedDate, setSelectedDate] = useState(null); // 선택된 날짜를 null? 아님 오늘?
  const [dayDetails, setDayDetails] = useState(null); // 선택된 날짜의 세부 정보
  const [classifiedData, setClassifiedData] = useState(null); // 파일에서 읽어온 데이터

  // 파일 읽기 함수
  const readJSONFromFile = async () => {
    const filePath = '/Users/kimeunsur/APP/src/sweety/sweety_data.json'; //계속 RNFS 실패해서....
    const fileContent = await RNFS.readFile(filePath);
    const parsedData = JSON.parse(fileContent); 
    setClassifiedData(parsedData);

    // 각 날짜별로 색상 마킹 설정
    const marked = {};
    for (const date in parsedData) {
      const status = parsedData[date]['category'];
      if (status === 'high') {
        marked[date] = { selected: true, selectedColor: 'red' };
      } else if (status === 'mid') {
        marked[date] = { selected: true, selectedColor: 'green' };
      } else {
        marked[date] = { selected: true, selectedColor: 'yellow' };
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
      setDayDetails(null); // 해당 날짜가 데이터에 없으면 null 처리
    }
  };

  return (
    <View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectedDateText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

});

export default SweetyMonthPage;