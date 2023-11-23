from flask import Flask, request, abort
from flask_sqlalchemy import SQLAlchemy
from datetime import date
from flask_marshmallow import Marshmallow
from flask_bcrypt import Bcrypt
from sqlalchemy.exc import IntegrityError
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from datetime import timedelta
from os import environ
from models.user import User, UserSchema

app = Flask(__name__)

app.config['JWT_SECRET_KEY'] = environ.get('JWT_KEY')

# app.config['JWT_SECRET_KEY'] = 'Ministry of Silly Walks'

app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DB_URI')
    

db = SQLAlchemy(app)
ma = Marshmallow(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

def admin_required():
    user_email = get_jwt_identity()  # Will get the email address of the user that has sent that token
    stmt = db.select(User).where(User.email == user_email)  # Email taken from the token; because the identity is the user.email as specified in the create_access_token code
    user = db.session.scalar(stmt)  # Will get an instance of the user model
    if not user.is_admin:  # Compares the is_admin flag from the stmt which has taken the instance of the user model
        return abort(401)

@app.errorhandler(401)
def unauthorized(err):
    return {'error' : 'You are not authorised to access this resource'}

class Card(db.Model):
    __tablename__ = 'cards'

    id = db.Column(db.Integer, primary_key=True) #  Tell alchemy that yes, I'm creating a column called id
    title = db.Column(db.String(100))  # Column called title with a string format and 100 char limit
    description = db.Column(db.Text())  # Column called description with text format no limit
    status = db.Column(db.String(30))  # Day 2 lesson - create column for status
    date_created = db.Column(db.Date())  # Column with a date format

class CardSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'description', 'status', 'date_created')

@app.cli.command('db_create')
def db_create():
    db.drop_all()  # Ensures database is CLEAN before creating a new database
    db.create_all()
    print('Created tables')  # Add GRANT ALL ON SCHEMA public TO trello_dev in trello table;

@app.cli.command('db_seed')  # Seeding is adding test data

def db_seed():
    users = [
        User (
            email = 'admin@spam.com',
            password = bcrypt.generate_password_hash('spinynorman').decode('utf8'),
            is_admin = True
        ),

        User (
            name = 'John Cleese',
            email = 'cleese@spam.com',
            password = bcrypt.generate_password_hash('tisbutascratch').decode('utf8'),
        )
    ]

    cards = [
        Card(
            title = 'Start the project',
            description = 'Stage 1 - ERD Creation',
            status = 'Done',
            date_created = date.today()
        ),

        Card(
            title = 'ORM queries',
            description = 'Stage 2 - Implement CRUD queries',
            status = 'In progress',
            date_created = date.today()
        ),

        Card(
            title = 'Marshmallow',
            description = 'Stage 3 - Implement JSONify of models',
            status = 'In progress',
            date_created = date.today()
        )
    ]
    db.session.add_all(cards)
    db.session.add_all(users)
    db.session.commit()

    print('Datebase seeded')

@app.route('/users/register', methods=['POST'])
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

@app.route('/users/login', methods=['POST'])
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
    
    


@app.route('/cards')
@jwt_required()
def all_cards():
    admin_required()
    # select * from cards;
    stmt = db.select(Card).where(db.or_(Card.status != 'Done', Card.id > 2)).order_by(Card.title.desc())
    cards = db.session.scalars(stmt).all()
    return CardSchema(many=True).dump(cards)

@app.route('/')
def index():
    return 'Hello world'

