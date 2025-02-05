import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.progressContainer}>
      {/* 진행 바 배경 */}
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>

      {/* 진행 퍼센트 및 텍스트 */}
      <Text style={styles.progressText}>목표달성률 {progress}%</Text>
      <Text style={styles.subText}>
        {progress >= 100 ? "목표를 달성했어요!" : "잘하고 있어요! 계속 진행 중이에요."}
      </Text>
    </View>
  );
};

export default function CommonHeader() {
  return (
    <View style={styles.header}>
      <ProgressBar progress={60} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100, // 헤더 높이 증가
    backgroundColor: "#FFC0CB", // 연한 핑크 배경색
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  progressContainer: {
    width: "90%",
    alignItems: "center",
  },
  progressBarBackground: {
    width: "100%",
    height: 10,
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 5,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#FF69B4", // 진한 핑크 진행 바
  },
  progressText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  subText: {
    fontSize: 12,
    color: "#666",
  },
});