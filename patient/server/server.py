from flask import Flask, request, jsonify, abort
from flask_pymongo import PyMongo
# import requests
from openai import OpenAI, APIError
from flask_cors import CORS
import logging

logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config["MONGO_URI"] = "mongodb+srv://nainghtet0123:HGHnXWWw8iIpAXab@patientlog.blr7ojv.mongodb.net/?retryWrites=true&w=majority&appName=PatientLog"

mongo = PyMongo(app)
db = mongo.db

# API_KEY = "" # Add your OpenAI API key here
client = OpenAI(api_key=API_KEY)

def test():
    try:
        # Trying to get the server status
        info = mongo.db.command("serverStatus")
        return str(info)
    except Exception as e:
        return f"Error: {str(e)}"
    
@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    input_text = data.get('input')
    logging.debug(f"Received input: {input_text}")

    try:
        completion = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a kind caregiver. Answer the following questions to the best of your ability..."},
                {"role": "user", "content": input_text}
            ]
        )
        response_message = completion.choices[0].message.content
        db.chats.insert_one({
            "message": input_text,
            "response": response_message
        })
        logging.debug("Message logged in database.")
        # response_message = "Hello, how can I help you today?"
        return jsonify({"response": response_message})
    except APIError as e:
        return jsonify({"error": "API error", "message": str(e)}), 500
    except Exception as e:
        return jsonify({"error": "Internal server error", "message": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)

# if __name__ == '__main__':
#     app.run(port=5000)