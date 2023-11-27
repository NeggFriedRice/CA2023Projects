from flask import Flask, render_template


app = Flask(
    __name__, 
    template_folder="templates"
    )

@app.route ('/')
def home():
    return render_template(
        "index.html",
        title="Flask-Login Tutorial.",
        body="You are now logged in!")