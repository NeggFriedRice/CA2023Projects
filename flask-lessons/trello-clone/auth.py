from flask_jwt_extended import get_jwt_identity
from models.user import User
from flask import abort
from setup import db

def admin_required():
    user_email = get_jwt_identity()  # Will get the email address of the user that has sent that token
    stmt = db.select(User).where(User.email == user_email)  # Email taken from the token; because the identity is the user.email as specified in the create_access_token code
    user = db.session.scalar(stmt)  # Will get an instance of the user model
    if not user.is_admin:  # Compares the is_admin flag from the stmt which has taken the instance of the user model
        return abort(401)