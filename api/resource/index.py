from flask_restful import Resource
from flask import render_template, make_response, request, send_file


class GetIndex(Resource):
    def get(self):
        return make_response(render_template('index.html'))

    def post(self):
        return self.get()