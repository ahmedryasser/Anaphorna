from flask import Flask, request, jsonify, abort
import requests
from openai import OpenAI, APIError
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# API_KEY = "" # Add your OpenAI API key here
client = OpenAI(api_key=API_KEY)

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    input_text = data.get('input')

    try:
        completion = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a kind caregiver. Answer the following questions to the best of your ability..."},
                {"role": "user", "content": input_text}
            ]
        )
        response_message = completion.choices[0].message.content
        return jsonify({"response": response_message})
    except APIError as e:
        return jsonify({"error": "API error", "message": str(e)}), 500
    except Exception as e:
        return jsonify({"error": "Internal server error", "message": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)

if __name__ == '__main__':
    app.run(port=5000)