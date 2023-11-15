from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import date

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://trello_dev:spameggs123@127.0.0.1:5432/trello'

db = SQLAlchemy(app)
print(db)

class Card(db.Model):
    __tablename__ = 'cards'

    id = db.Column(db.Integer, primary_key=True) #  Tell alchemy that yes, I'm creating a column called id
    title = db.Column(db.String(100))  # Column called title with a string format and 100 char limit
    description = db.Column(db.Text())  # Column called description with text format no limit
    date_created = db.Column(db.Date())  # Column with a date format

@app.cli.command('db_create')
def db_create():
    db.drop_all()  # Ensures database is CLEAN before creating a new database
    db.create_all()
    print('Created table')  # Add GRANT ALL ON SCHEMA public TO trello_dev in trello table;

@app.cli.command('db_seed')  # Seeding is adding test data
def db_seed():
    card = Card(
        title = 'Start the project',
        description = 'Stage 1 - ERD Creation',
        date_created = date.today()
    )

    db.session.add(card)
    db.session.commit()

    print('Datebase seeded')

@app.route('/')
def index():
    return 'Hello world'