from flask import Flask

class App():
	def run(self):
		app = Flask(__name__)
		
		@app.route("/")
		def index():
			return "Ok =D"
