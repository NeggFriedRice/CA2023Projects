from setup import db, ma

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