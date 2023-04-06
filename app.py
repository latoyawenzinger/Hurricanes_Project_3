# import Flask
from flask import Flask, jsonify

#import SQLalchemy dependencies
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

# databease setup
engine = create_engine("sqlite:///../Resources/.sqlite")

# reflect existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(engine, reflect=True)

#assign each class to a variable



# create an app
app = Flask(__name__)


# start homepage
@app.route("/")
def home():
     return (
        f'Welcome to the Hurricane Category API!<br/>'
        f'Available Routes:<br/>'
        f'/api/v1.0/cat3'
        f'/api/v1.0/cat4'
        f'/api/v1.0/cat5'
    )


@app.route("/api/v1.0/cat3")
def category_3():
    """Return a JSON list of category 3 from the dataset"""
    


@app.route("/api/v1.0/cat4")
def category_4():
    """Return a JSON list of category 4 from the dataset"""
    


@app.route("/api/v1.0/cat5")
def category_5():
    """Return a JSON list of category 5 from the dataset"""
   
    

   
if __name__ == '__main__':
    app.run(debug=True)