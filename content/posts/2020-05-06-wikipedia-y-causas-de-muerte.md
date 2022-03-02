---
author: Carlos J. Gil Bellosta
date: 2020-05-06 09:13:00+00:00
draft: false
title: Wikipedia y causas de muerte

url: /2020/05/06/wikipedia-y-causas-de-muerte/
categories:
- varios
tags:
- mortalidad
- wikipedia
- sparql
---

Es entretenido echar un vistazo a las causas de muerte más comunes (y todavía más, a las más raras) de la gente que aparece en la Wikipedia (y que tiene una causa de muerte informada en la caja lateral). Son [estas](http://rg&query=select+%3Fcod+%28count%28distinct+%3Fwho%29+as+%3Fcount%29+where+%7B%3Fwho+<http%3A%2F%2Fdbpedia.org%2Fontology%2FdeathCause>+%3Fcod.%7D+order+by+desc%28%3Fcount%29%0D%0A%0D%0A%23+select+distinct+%3Fwho+where+%7B%3Fwho+<http%3A%2F%2Fdbpedia.org%2Fontology%2FdeathCause>+<http%3A%2F%2Fdbpedia.org%2Fresource%2FPeritonitis>.%7D%0D%0A%0D%0A%0D%0A%0D%0A%23+select+distinct+%3Fwho+where+%7B%3Fwho+<http%3A%2F%2Fdbpedia.org%2Fontology%2FdeathCause>+<http%3A%2F%2Fdbpedia.org%2Fresource%2FInfluenza>.%7D+LIMIT+100%0D%0A%0D%0A%23+select+distinct+%3Fwho+where+%7B%3Fwho+<http%3A%2F%2Fdbpedia.org%2Fontology%2FdeathCause>+<http%3A%2F%2Fdbpedia.org%2Fresource%2FCOVID-19>.%7D+LIMIT+100).

Se puede jugar más con el asunto corriendo

{{< highlight sql >}}
select ?cod (count(distinct ?who) as ?count)
where {?who <http://dbpedia.org/ontology/deathCause> ?cod.}
order by desc(?count)
{{< / highlight >}}

y sus variantes [aquí](https://dbpedia.org/sparql).



