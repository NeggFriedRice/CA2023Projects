from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from datetime import date
from flask_marshmallow import Marshmallow
from flask_bcrypt import Bcrypt

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://trello_dev:spameggs123@127.0.0.1:5432/trello'

db = SQLAlchemy(app)
ma = Marshmallow(app)
bcrypt = Bcrypt(app)

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

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String, nullable=False, unique=True)
    password = db.Column(db.String, nullable=False)
    is_admin = db.Column(db.Boolean, default=False)

class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'email', 'password', 'is_admin')

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
    # Parse incoming POST body through the schema
    user_info = UserSchema().load(request.json)
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

@app.route('/cards')
def all_cards():
    # select * from cards;
    stmt = db.select(Card).where(db.or_(Card.status != 'Done', Card.id > 2)).order_by(Card.title.desc())
    cards = db.session.scalars(stmt).all()
    return CardSchema(many=True).dump(cards)

@app.route('/')
def index():
    return 'Hello world'

