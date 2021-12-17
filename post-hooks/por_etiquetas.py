import os
import yaml
import datetime
from collections import Counter

post_dir = "../content/posts"
target_file = "../content/paginas/por_etiqueta.md"

md_header = """
---
author: Carlos J. Gil Bellosta
date: 2010-05-30 12:01:22+00:00
draft: false
title: Por etiqueta
type: page
url: /por_etiqueta/
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

headers = [get_header(f) for f in all_posts]
headers = [h for h in headers if 'tags' in h]
tags = [h['tags'] for h in headers if h['date'] < datetime.date.today()]
tags = [t for lt in tags for t in lt]
freqs = list([(k, k.replace(" ", "-").lower(), v) for (k, v) in Counter(tags).items()])
freqs.sort(key = k.lower())

out = [f"[{a}](/tags/{c}/) ({b})" for a, c, b in freqs]
out = "  ·  ".join(out)

with open(target_file, "w") as f:
    print(md_header, file = f)
    print(out, file=f)



