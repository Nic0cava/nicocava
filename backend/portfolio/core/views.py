# portfolio/core/views.py
from flask import render_template, request, Blueprint

core = Blueprint('core', __name__)

@core.route('/')
def index():
   user = {"name": "Nico"}
   return render_template("index.html", user=user)