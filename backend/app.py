from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/hospital_list')
def hospital_list():
    hospital_dict = {
        'hospital1': {
            'name': 'Hospital 1',
            'location': 'City 1',
            'beds': 100
        },
        'hospital2': {
            'name': 'Hospital 2',
            'location': 'City 2',
            'beds': 200
        },
        'hospital3': {
            'name': 'Hospital 3',
            'location': 'City 3',
            'beds': 150
        }
    }
    
    return jsonify({'hospitals': hospital_dict})
