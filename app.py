from flask import Flask
from flask_migrate import Migrate

from config import Config
from database import db
from controllers.reviews_controller.reviews_controller import reviews_bp
from controllers.services_controller.services_controller import service_bp
from ma import ma

migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    ma.init_app(app)
    migrate.init_app(app, db)

    app.register_blueprint(reviews_bp, url_prefix='/api/v1/reviews')
    app.register_blueprint(service_bp, url_prefix='/api/v1/services')

    return app


if __name__ == '__main__':
    app = create_app()
    app.run(port=5000)