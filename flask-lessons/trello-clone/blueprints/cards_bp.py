from flask import Blueprint
from flask_jwt_extended import jwt_required
from setup import db
from models.card import CardSchema, Card

cards_bp = Blueprint('cards', __name__, url_prefix='/cards')

@cards_bp.route('/')
@jwt_required()
def all_cards():
    # admin_required()
    # select * from cards;
    stmt = db.select(Card)
    cards = db.session.scalars(stmt).all()
    return CardSchema(many=True).dump(cards)
