from flask import Flask
from datetime import datetime

app = Flask(__name__)

@app.route('/current_time/')
def current_time():
    time = datetime.now().strftime("%H:%M")
    return f'<p>{time}</p>'

if __name__ == '__main__':
    app.run(debug=True)
