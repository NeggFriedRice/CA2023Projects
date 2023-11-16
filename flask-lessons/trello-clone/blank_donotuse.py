from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import date
from flask import render_template

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://trello_dev:spameggs123@127.0.0.1:5432/trello'

db = SQLAlchemy(app)

class Card(db.Model):
    id = db.Column(db.Integer, primary_key=True) 
    title = db.Column(db.String(100))  
    description = db.Column(db.Text())  
    date_created = db.Column(db.Date())  

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
    return '<p>Hello world</p>'


@app.route('/')
def index():
    name = 'CoderAcademy'
    return render_template('index.html', title='Welcome', username=name)