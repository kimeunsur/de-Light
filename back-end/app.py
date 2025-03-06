from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from models import db
from routes.auth import auth_bp
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://myuser:mypassword@localhost/delight'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


#블루포인트 등록
db.init_app(app)
app.register_blueprint(auth_bp, url_prefix='/api')
   
#데이터베이스 생성
with app.app_context():
    db.create_all()

@app.route("/")
def home():
    return "flask API 서버 실행 중~"

if __name__=='__main__':
    app.run(debug=True)