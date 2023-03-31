from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score

app = Flask(__name__)
model = joblib.load('svm_model.pkl')

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    new_data = pd.DataFrame.from_dict(data, orient='index').T
    prediction = model.predict(new_data)
    return jsonify(prediction.tolist())


# print(predict)

if __name__ == '__main__':
    app.run(debug=True)
