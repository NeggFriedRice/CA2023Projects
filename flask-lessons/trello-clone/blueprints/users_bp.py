from flask import Blueprint, request
from models.user import User, UserSchema
from sqlalchemy.exc import IntegrityError
from flask_jwt_extended import create_access_token
from setup import *
from datetime import timedelta

users_bp = Blueprint('users', __name__, url_prefix='/users')

@users_bp.route('/register', methods=['POST'])
def register():
    try:
        # Parse incoming POST body through the schema
        user_info = UserSchema(exclude =['id', 'is_admin']).load(request.json)
        # Create a new user with the parsed data
        user = User(
            email = user_info['email'],
            password = bcrypt.generate_password_hash(user_info['password']).decode('utf8'),
            name = user_info.get('name', '')
        )

        # print(user)
        # print(user.__dict__)
        # return 'ok', 201

        # Add and commit the new user to the database (remember sessions?)
        db.session.add(user)
        db.session.commit()

        # Return the new user
        return UserSchema(exclude=['password']).dump(user), 201
    except IntegrityError:
        return {'error' : 'Email address already in use'}, 409

@users_bp.route('/login', methods=['POST'])
def login():
    # 1. Parse incoming POST body through the schema
    user_info = UserSchema(exclude=['id', 'name', 'is_admin']).load(request.json)
    # 2. Select user with email that matches the one in the POST body
    stmt = db.select(User).where(User.email == user_info['email'])
    user = db.session.scalar(stmt)
    # 3. Check password hash
    if user and bcrypt.check_password_hash(user.password, user_info['password']):
        # 4. Create JSON Web Token (JWT)
        token = create_access_token(identity = user.email, expires_delta = timedelta(hours = 2))
        # 5. Return the token
        return {'token' : token, 'user' : UserSchema(exclude = ['password']).dump(user)}
    else:
        return {'error' : 'Invalid email or password'}, 401
    
@app.route('/')
def home():
    return "Hello world"