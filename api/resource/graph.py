from flask_restful import Resource
from flask import render_template, make_response, request, send_file
from api.utils import search_entity
import json


class GetIndexGraph(Resource):
    def get(self):
        entity_name = request.args.get("entity_name")

        di = search_entity(entity_name)
        # di = json.dumps(di)
        context_di = dict()
        context_di['new_di'] = di
        return make_response(render_template('search_graph.html', context=context_di))

    def post(self):
        return self.get()