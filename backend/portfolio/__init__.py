import os
from flask import Flask

app = Flask(__name__)

from dotenv import load_dotenv  # <-- Load .env file
# Load environment variables from .env
load_dotenv()

app.secret_key = os.getenv('SECRET_KEY')

from portfolio.core.views import core
from portfolio.error_pages.handlers import error_pages
app.register_blueprint(error_pages)
app.register_blueprint(core)