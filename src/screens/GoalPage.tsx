import React, { useState } from "react";
import { Text, SegmentedButtons } from "react-native-paper";
import { View, Button, StyleSheet } from "react-native";

export default function GoalPage() {
  const [saltValue, setSaltValue] = useState("");
  const [sweetValue, setSweetValue] = useState("");

  return (
    <View style={styles.container}>
      {/* 제목 섹션 */}
      <View style={styles.textContainer_title}>
        <Text style={styles.titleText}>염도/당도 자동 목표 설정</Text>
        <Text style={styles.subtitleText}>한 끼 식사 권장 농도 기반 목표 설정</Text>
      </View>

      {/* 염도 선택 섹션 */}
      <View style={styles.textContainer_body}>
        <Text style={styles.sectionTitle}>염도</Text>
        <SegmentedButtons
          value={saltValue}
          onValueChange={setSaltValue}
          buttons={[
            { value: "1", label: "싱겁게 먹는편" },
            { value: "2", label: "적당하게 먹는편" },
            { value: "3", label: "짜게 먹는편" },
          ]}
        />
      </View>

      {/* 당도 선택 섹션 */}
      <View style={styles.textContainer_body}>
        <Text style={styles.sectionTitle}>당도</Text>
        <SegmentedButtons
          value={sweetValue}
          onValueChange={setSweetValue}
          buttons={[
            { value: "1", label: "달지 않게 먹는편" },
            { value: "2", label: "적당히 달게 먹는편" },
            { value: "3", label: "달달하게 먹는편" },
          ]}
        />
      </View>

      {/* 목표 저장 버튼 */}
      <View style={styles.textContainer_tail}>
        <Text style={styles.notificationText}>목표 기반 알림 설정</Text>
        <Text style={styles.notificationSubText}>정해놓은 목표를 이루기 위한 알림 수신</Text>
        <Button title="목표 저장" onPress={() => alert("목표가 저장되었습니다!")} />
      </View>
    </View>
  );
}

// 스타일 설정
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  textContainer_title: {
    width: "90%",
    height: "20%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginTop: 5,
  },
  textContainer_body: {
    width: "90%",
    height: "25%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textContainer_tail: {
    width: "90%",
    height: "15%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  notificationSubText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginVertical: 5,
  },
});