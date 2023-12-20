from flask_jwt_extended import get_jwt_identity
from models.user import User
from flask import abort
from setup import db

def authorize(user_id=None):
    jwt_user_id = get_jwt_identity()  # Will get the email address of the user that has sent that token
    stmt = db.select(User).filter_by(id=jwt_user_id)  # Email taken from the token; because the identity is the user.email as specified in the create_access_token code
    user = db.session.scalar(stmt)  # Will get an instance of the user model

    # If it's not the case that the user is an admin or user_id is truthy and matches the token
    # i.e. If user_id isn't passed in, they must be admin
    if not (user.is_admin or (user_id and jwt_user_id == user_id)):
        return abort(401)
    
    