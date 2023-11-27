from flask import Flask, redirect, url_for

app = Flask(__name__)

# Incorrect way (first example; links will be broken since url_for is not used)
# @app.route('/login')
# def login():
#     return redirect('/dashboard.html')

@app.route('/login')
def login():
    return redirect(url_for('dashboard'))
