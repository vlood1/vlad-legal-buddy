import jwt
import datetime
from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS

app = Flask(__name__)

CORS(app, resources={r"/*": {
    "origins": "*",
    "allow_headers": ["Authorization", "Content-Type"]
}})

app.config["SECRET_KEY"] = "super-secret-key"
app.config["MONGO_URI"] = "mongodb://localhost:27017/legal-buddy"

mongo = PyMongo(app)
users = mongo.db.users

# Register
@app.route("/api/register", methods=["POST"])
def register():
    data = request.get_json()
    email = data["email"]
    password = generate_password_hash(data["password"])
    
    if users.find_one({"email": email}):
        return jsonify({"message": "User exists"}), 409
    
    users.insert_one({"email": email, "password": password})
    token = jwt.encode(
        {
            "email": email,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)
        },
        app.config["SECRET_KEY"],
        algorithm="HS256"
    )
    return jsonify({"token": token})

    

# Login → returns token
@app.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data["email"]
    password = data["password"]
    #print(password)
    
    user = users.find_one({"email": email})
    #print(user.get("password", "error"))
    #print(check_password_hash(user["password"], password))

    if not user or not check_password_hash(user["password"], password):
        return jsonify({"message": "Invalid credentials"}), 401



    token = jwt.encode(
        {
            "email": email,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)
        },
        app.config["SECRET_KEY"],
        algorithm="HS256"
    )
    return jsonify({"token": token})

# Protected route
@app.route("/api/me")
def me():
    auth_header = request.headers.get("Authorization")
    if not auth_header or not auth_header.startswith("Bearer "):
        return jsonify({"message": "Missing token"}), 401

    token = auth_header.split(" ")[1]

    try:
        data = jwt.decode(token, app.config["SECRET_KEY"], algorithms=["HS256"])
        return jsonify({"email": data["email"]})
    except jwt.ExpiredSignatureError:
        return jsonify({"message": "Token expired"}), 401
    except jwt.InvalidTokenError:
        return jsonify({"message": "Invalid token"}), 401
    

    
if __name__ == "__main__":
    app.run(debug=True)
