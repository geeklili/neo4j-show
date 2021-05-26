from flask_restful import Resource
from flask import render_template, make_response, request, send_file, jsonify
from api.utils import search_word


class GetAroundData(Resource):
    def get(self):
        word = request.args.get('word', '')
        word = word.lower()
        lis = search_word(word)
        lis = str(lis)
        resp = make_response(lis)
        resp.headers["Content-Type"] = "text/html; charset=utf-8"
        resp.headers["Access-Control-Allow-Origin"] = "*"
        return resp

    def post(self):
        return self.get()
