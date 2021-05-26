import json

from py2neo import Graph

graph = Graph("bolt://103.36.173.91:40008", username="neo4j", password="neo4j123")


def create_new_di(real_word, li):
    with open('./static/data/new.json', encoding='utf-8') as f:
        di = json.loads(f.read())
    data_di = {"name": real_word,
               "symbolSize": 35,
               "draggable": "True",
               "value": 1875,
               "category": real_word,
               "label": {
                   "normal": {
                       "show": "True"
                   }
               }}
    data_li = [data_di]
    for i in li:
        data_li.append({"name": i[0],
                        "symbolSize": 20,
                        "draggable": "True",
                        "value": i[1],
                        "category": i[0],
                        "label": {
                            "normal": {
                                "show": "True"
                            }
                        }})
    catg_li = [{'name': real_word}]
    for ii in li:
        catg_li.append({'name': ii[0]})

    links_li = []
    for iii in li:
        links_li.append({
            "source": real_word,
            "target": iii[0]
        })

    name_li = [real_word]
    for iiii in li:
        name_li.append(iiii[0])

    series_di = di['series'][0]
    series_di['data'] = data_li
    series_di['categories'] = catg_li
    series_di['links'] = links_li

    legend_di = di['legend'][0]

    legend_di['data'] = name_li

    di['series'] = [series_di]
    di['legend'] = [legend_di]

    return di


def search_entity(real_word):
    ret = graph.run(
        """match (n:Entity)-[r:link]->(p:Entity) where n.name="{}" return p.name, r.value order by r.value desc limit 10""".format(
            real_word)).data()
    if ret:
        reason_li = [[i['p.name'], i['r.value']] for i in ret]
    else:
        reason_li = list()

    new_di = create_new_di(real_word, reason_li)

    return new_di


def search_word(word):
    ret = graph.run(
        """match (n:Entity) where n.name=~".*{}.*" return n.name limit 10""".format(word)).data()
    if ret:
        name_li = [i['n.name'] for i in ret]
    else:
        name_li = list()
    return name_li


if __name__ == '__main__':
    search_entity('注塑机')
