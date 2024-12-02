# Sara María Ramírez Pérez, UO276188
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "¡Hola desde AWS App Runner!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)


