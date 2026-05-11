from flask import Flask
from flask_migrate import Migrate
from config import Config
from database import db
from controllers.reviews_controller.reviews_controller import reviews_bp
from controllers.services_controller.services_controller import service_bp
from ai_routes import assistant_bp
from ma import ma

migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    ma.init_app(app)
    migrate.init_app(app, db)

    # Реєстрація маршрутів
    app.register_blueprint(reviews_bp, url_prefix='/api/v1/reviews')
    app.register_blueprint(service_bp, url_prefix='/api/v1/services')
    app.register_blueprint(assistant_bp, url_prefix='/api/v1')

    return app

app = create_app()

if __name__ == '__main__':
    # Локальний запуск для тебе
    app.run(port=5000)