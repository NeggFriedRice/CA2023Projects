from flask import Flask
import random

app = Flask(__name__)

@app.route('/coinflip')
def coinflip():
    coin = ["heads", "tails"]
    choice = random.choice(coin)
    return { 'result' : f'{choice}' }

if __name__ == '__main__':
    app.run(debug=True)