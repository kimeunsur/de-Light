#회원가입 & 로그인 엔드포인트
from flask import Blueprint, request, jsonify
from models import db, User

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    if not request.is_json:
        return jsonify({'error':'json 데이터를 보내야 함'}), 400
    data = request.json
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    
    if not name or not email or not password:
        return jsonify({'error':'이름, 이메일, 비밀번호를 모두 입력해야 합니다.'}), 400
    
    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({"error":"이미 가입된 이메일입니다."}), 400
    
    new_user = User(name=name, email=email)
    new_user.set_password(password)
    
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({'message':'회원가입 성공!'}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    
    if not email or not password:
        return jsonify({'error':'이메일 또는 비밀번호를 입력해야 합니다.'}),400
    
    user = User.query.filter_by(email=email).first()
    if not user or not user.check_password(password):
        return jsonify({'error':'이메일 또는 비밀번호가 올바르지 않습니다.'}), 401
    
    return jsonify({'message':'로그인 성공!'}), 200