#데이터베이스 모델 정의
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

db=SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(256), nullable=False)
   
    def set_password(self, password): #비번 해싱해서 저장
       self.password = generate_password_hash(password)
    def check_password(self, password): #비번 검증
        return check_password_hash(self.password, password)