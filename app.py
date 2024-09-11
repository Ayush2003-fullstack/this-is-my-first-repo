from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json()

    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    if not name or not email or not message:
        return jsonify({"message": "All fields are required"}), 400
    print(f'Name: {name}')
    print(f'Email: {email}')
    print(f'Message: {message}')

    return jsonify({"message": "Message received"}), 200

if __name__ == '__main__':
    app.run(debug=True)
