from flask import Flask, request

app = Flask(__name__)

message = 'Hello, world!'

@app.route('/')
def index():
    return f'<h3>{message}</h3>'

@app.route('/spam')
def spam():
    person = {'name' : 'John', 'age' : '21'}
    return person

@app.errorhandler(TypeError)
def type_error(error):
    return { 'error' : str(error) }, 400

@app.errorhandler(404)
def not_found(error):
    return { 'error' : str(error) }, 404

@app.route('/hello/<name>')
def hello(name):
    # name = request.args.get('name')
    # print(request.args.get('name'))
    # name = 'Jack'
    return { 'message' : f'Hello, {name}!' }

@app.route('/add/<int:num1>/<int:num2>')
def add (num1, num2):
    # num1 = int(request.args.get('num1'))
    # num2 = int(request.args.get('num2'))
    return {'result' : num1 + num2}


if __name__ == '__main__':
    app.run(debug=True)