from flask import Blueprint
from flask_restful import Api

from .resource.index import GetIndex
from .resource.graph import GetIndexGraph
from .resource.around import GetAroundData


bp = Blueprint('api', __name__, url_prefix='')
api = Api(bp, catch_all_404s=True)

# 获取页面
api.add_resource(GetIndex, '/api/', '/')
api.add_resource(GetIndexGraph, '/api/kn', '/kn')
api.add_resource(GetAroundData, '/api/around_data', '/around_data')