import flask
from flask import jsonify, request
import scrape

app = flask.Flask(__name__)
app.config["DEBUG"] = True

books = [
    {'id': 0,
     'title': 'A Fire Upon the Deep',
     'author': 'Vernor Vinge',
     'first_sentence': 'The coldsleep itself was dreamless.',
     'year_published': '1992'},
    {'id': 1,
     'title': 'The Ones Who Walk Away From Omelas',
     'author': 'Ursula K. Le Guin',
     'first_sentence': 'With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.',
     'published': '1973'},
    {'id': 2,
     'title': 'Dhalgren',
     'author': 'Samuel R. Delany',
     'first_sentence': 'to wound the autumnal city.',
     'published': '1975'}
]

@app.route('/', methods=['GET'])
def home():
    # print(val)
    return "<h1>OTC Information</h1><p>This site is a prototype API for OTC medicine.</p>"

@app.route('/api/books', methods=['GET'])
def api_book():
    if 'id' in request.args:
        id = int(request.args['id'])
    else:
        return "Error: No id field provided. Please specify an id."
    results = []

    # Loop through the data and match results that fit the requested ID.
    # IDs are unique, but other fields might return many results
    for book in books:
        if book['id'] == id:
            results.append(book)

    return jsonify(results)

@app.route('/api/otc', methods=['GET'])
def api_otc():
    if 'categ' in request.args:
        s = (request.args['categ'])
    else:
        return "Error: No id field provided. Please specify an id."
    med = scrape.OTC_Search()
    # print("Enter medicine detail")
    # inp=input()
    result = med.search_medicines(s)
    return jsonify(result)

app.run()