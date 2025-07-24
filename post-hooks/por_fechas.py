import os
import yaml
import datetime

post_dir = "../content/posts"
source_file = "../content/paginas/por_fecha.md.template"
target_file = "../content/paginas/por_fecha.md"

md_header = f"""
---
author: Carlos J. Gil Bellosta
date: {datetime.date.today().strftime('%Y-%m-%d')}
draft: false
title: Por fecha
type: page
url: /por_fecha/
menu:
    main:
        weight: 20
---
"""

all_posts = os.listdir(post_dir)
all_posts = [os.path.join(post_dir, f) for f in all_posts]

def get_header(fname):
    with open(fname) as f:
        tmp = next(yaml.load_all(f, Loader=yaml.FullLoader))
    if isinstance(tmp['date'], datetime.datetime):
        tmp['date'] = tmp['date'].date()
    return tmp

mes = ['', 'Enero', 'Febrero', 'Marzo',
        'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre',
        'Octubre', 'Noviembre', 'Diciembre']

headers = [get_header(f) for f in all_posts]
headers = [h for h in headers if h['date'] < datetime.date.today()]
headers.sort(key = lambda x: x['date'], reverse = True)

year = headers[0]['date'].year
month = headers[0]['date'].month

out = [f"* {year}", f"  * {mes[month]} {year}"]

for h in headers:
    if h['date'].year < year:
        year = h['date'].year
        month = h['date'].month
        out.extend([f"* {year}", f"  * {mes[month]} {year}"])
    elif h['date'].month < month:
        month = h['date'].month
        out.extend([f"  * {mes[month]} {year}"])
    url = h['url']
    if not url.endswith('/'):
        url = url + '/'
    out.append(f"    * [{h['title']}]({url})")


with open(target_file, "w") as f:
    print(md_header, file = f)
    for l in out:
        print(l, file = f)



