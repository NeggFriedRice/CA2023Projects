from flask import Blueprint
from setup import db, bcrypt
from models.card import Card
from models.user import User
from datetime import date

db_commands = Blueprint('db', __name__)

@db_commands.cli.command('create')
def db_create():
    db.drop_all()  # Ensures database is CLEAN before creating a new database
    db.create_all()
    print('Created tables')  # Add GRANT ALL ON SCHEMA public TO trello_dev in trello table;

@db_commands.cli.command('seed')  # Seeding is adding test data

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