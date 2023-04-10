from flask import Flask, jsonify
import sqlite3

app = Flask(__name__)

@app.route('/')
def welcome():

    return(
        f"This is a Flask API for Hurricane Data and Analysis .<br/><br/><br/>"
        f"The following are the available routes and route options for this API, ENJOY!!!<br/>"
        f"/data<br/>"
        f"/ID/(hurricane ID)<br/>"
        f"The following is a list of available hurricane IDs<br/>"
        f"AL031935<br/>"
        f"AL031961<br/>"
        f"AL091979<br/>"
        f"AL041980<br/>"
        f"AL081988<br/>"
        f"AL041992<br/>"
        f"AL131998<br/>"
        f"AL122005<br/>"
        f"AL182005<br/>"
        f"AL252005<br/>"
    )

@app.route('/data')
def get_data():
    conn = sqlite3.connect('top_10.sqlite')
    cursor = conn.cursor()
    cursor.execute('SELECT ID, Name, Date, Time, Status, Latitude, Longitude, "Maximum Wind", "Minimum Pressure" FROM top_10')
    results = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(results)

@app.route('/<column_name>/<row_value>')
def get_hurricanes(column_name, row_value):

    conn = sqlite3.connect('top_10.sqlite')
    cursor = conn.cursor()
    cursor.execute(f'SELECT ID, Name, Date, Time, Status, Latitude, Longitude, "Maximum Wind", "Minimum Pressure" FROM top_10 WHERE {column_name}= "{row_value}"')
    hurricanes = [dict(zip([column[0] for column in cursor.description], row)) for row in cursor.fetchall()]
    conn.close()
    return jsonify(hurricanes)



if __name__ == '__main__':
    app.run(debug=True)