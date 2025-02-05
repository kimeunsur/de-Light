import json

def read_salty_data(file_path):
    with open(file_path, 'r') as file:
        return json.load(file)

def classify_by_avg(data):
    result = {}
    for date, sessions in data.items():
        # morning, afternoon, evening의 점수 평균 계산
        avg_score = sum(sessions.values()) / len(sessions)
        
        # 평균 점수에 따라 'good', 'normal', 'bad'를 부여
        if avg_score >= 3:
            result[date] = 'good'
        elif avg_score >= 2:
            result[date] = 'normal'
        else:
            result[date] = 'bad'
    return result

file_path = 'salty_data.json'
salty_data = read_salty_data(file_path)

# 평균을 기준으로 레이블 부여
classified_result = classify_by_avg(salty_data)

with open('classified_result.json', 'w') as file:
    json.dump(classified_result, file, indent=4)