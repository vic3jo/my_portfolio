
from flask import Flask, Response, send_file, request
import sys, os

app = Flask(__name__)
currendDir = os.path.dirname(os.path.abspath(__file__))




@app.route('/', methods=['GET'])
def start():
	html = open('front/index.html').read()
	return Response(html, mimetype="text/html")


@app.route('/images/<path:path>')
def getImage(path):
	global currendDir
	location = "{}/front/images/".format(currendDir)
	return send_file(\
		os.path.join(location, path)
	)


def getFile(location):
	return open(location).read()

@app.route('/js/<path:path>')
def getJS(path):
	global currendDir

	location = "{}/front/js/".format(currendDir)
	
	return Response(\
		getFile(os.path.join(location, path)),
		mimetype = "application/javascript"
	)

@app.route('/fonts/<path:path>')
def getFonts(path):
	global currendDir

	location = "{}/front/fonts/".format(currendDir)
	
	return Response(\
		getFile(os.path.join(location, path)),
		mimetype = "text/html"
	)


@app.route('/css/<path:path>')
def getCSS(path):
	global currendDir

	location = "{}/front/css/".format(currendDir)
	# return Response('html', mimetype="text/html")
	# mimetypes = {\
	# 	".css": "text/css",
	# 	".html": "text/html",
	# 	".js": "application/javascript",
	# }

	# location = "{}/front_end/".format(currendDir)

	return Response(\
		getFile(os.path.join(location, path)),
		mimetype = "text/css"
	)



if __name__ == "__main__":
    app.run(port=80)

