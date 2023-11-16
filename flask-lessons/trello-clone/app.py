from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import date
from flask_marshmallow import Marshmallow

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://trello_dev:spameggs123@127.0.0.1:5432/trello'

db = SQLAlchemy(app)
ma = Marshmallow(app)

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
    db.session.commit()

    print('Datebase seeded')

@app.route('/cards')
def all_cards():
    # select * from cards;
    stmt = db.select(Card).where(db.or_(Card.status != 'Done', Card.id > 2)).order_by(Card.title.desc())
    cards = db.session.scalars(stmt).all()
    return CardSchema(many=True).dump(cards)

@app.route('/')
def index():
    return 'Hello world'