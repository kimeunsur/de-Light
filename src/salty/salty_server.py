#FLASK_APP=salty_server.py flask run
from flask_cors import CORS
from flask import Flask, request, jsonify
import json
import os

app = Flask(__name__)
CORS(app, resources={r"/get_salty/*": {"origins": "*"}})
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SALTY_FILE = os.path.join(BASE_DIR, 'salty_data.json')


@app.route('/')
def home():
    return jsonify({
        "status": "running",
        "message": "Welcome to Salty Server! Use '/save_salty' to save data and '/get_salty/<date>' to fetch data."
    })

@app.route('/save_salty', methods=['POST'])
def save_salty():
    data = request.json
    date = data.get("date")
    morning = data.get("morning")
    afternoon = data.get("afternoon")
    evening = data.get("evening")
    
    with open(SALTY_FILE, 'r') as f:
        salty_data = json.load(f)
    
    salty_data[date] = {
        'morning': morning,
        'afternoon': afternoon,
        'evening': evening 
    }
    
    with open(SALTY_FILE, 'w') as f:
        json.dump(salty_data, f, indent=4)
        
    return jsonify({"status":"success","message":"data saved"})

@app.route('/get_salty/<date>', methods=['GET'])
def get_salty(date):
    print("get_salty 시작쓰")
    with open(SALTY_FILE,'r') as f:
        salty_data = json.load(f)
    
    salty = salty_data.get(date, None)

    if salty:
        print(f"Data found for {date}")
        return jsonify({"status": "success", "salty": salty}), 200
    else:
        print(f"Data not found for {date}")
        return jsonify({"status": "not_found", "message": "not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)