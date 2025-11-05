import os
import yaml
import datetime
from collections import Counter

post_dir = "../content/posts"
target_file = "../content/paginas/por_etiqueta.md"

md_header = f"""
---
author: Carlos J. Gil Bellosta
date: {datetime.date.today().strftime('%Y-%m-%d')}
draft: false
title: Por tema
type: page
url: /por_tema/
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

headers = [get_header(f) for f in all_posts if f.endswith('.md')]
headers = [h for h in headers if 'tags' in h]
tags = [h['tags'] for h in headers if h['date'] < datetime.date.today()]
tags = [t for lt in tags for t in lt if t is not None]
freqs = list([(k, k.replace(" ", "-").lower(), v) for (k, v) in Counter(tags).items()])

freqs_00 = [f for f in freqs if f[2] > 50]
freqs_01 = [f for f in freqs if f[2] > 10 and f[2] <= 50]
freqs_02 = [f for f in freqs if f[2] >  1 and f[2] <= 10]
freqs_03 = [f for f in freqs if f[2] == 1]

def process_freqs(freqs):
    freqs.sort(key = lambda x: x[0].lower())
    out = [f"[{a}](/tags/{c}/) ({b})" for a, c, b in freqs]
    out = "  ·  ".join(out)
    return out

with open(target_file, "w") as f:
    print(md_header, file = f)
    print("## Temas con más de 50 entradas", file=f)
    print(process_freqs(freqs_00), file=f)
    print("## Temas con más de 10 entradas (y menos de 50)", file=f)
    print(process_freqs(freqs_01), file=f)
    print("## Temas con más de una entrada (y menos de 10)", file=f)
    print(process_freqs(freqs_02), file=f)
    print("## Temas con una única entrada", file=f)
    print(process_freqs(freqs_03), file=f)
