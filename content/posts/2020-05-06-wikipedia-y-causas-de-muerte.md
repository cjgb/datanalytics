---
author: Carlos J. Gil Bellosta
categories:
- varios
date: 2020-05-06 09:13:00+00:00
lastmod: '2025-04-06T18:53:52.162346'
related:
- 2020-03-15-la-causa-de-muerte-no-es-la-causa-de-muerte.md
- 2018-07-19-que-no-que-es-imposible-esconder-medio-millon-de-muertos-y-que-la-cordialidad-esta-de-mas.md
- 2020-03-12-monitorizacion-diaria-de-la-mortalidad.md
- 2020-03-20-casos-de-coronavirus-en-madrid-provincia-un-modelo-un-poco-menos-crudo-basado-en-la-mortalidad-ii.md
- 2012-08-13-fallecimientos-y-microdatos.md
tags:
- mortalidad
- wikipedia
- sparql
title: Wikipedia y causas de muerte
url: /2020/05/06/wikipedia-y-causas-de-muerte/
---

Es entretenido echar un vistazo a las causas de muerte más comunes (y todavía más, a las más raras) de la gente que aparece en la Wikipedia (y que tiene una causa de muerte informada en la caja lateral). Son [estas](https://dbpedia.org/sparql?query=select+%3Fcod+%28count%28distinct+%3Fwho%29+as+%3Fcount%29+where+%7B%3Fwho+%3Chttp%3A%2F%2Fdbpedia.org%2Fontology%2FdeathCause%3E+%3Fcod.%7D+order+by+desc%28%3Fcount%29).

Se puede jugar más con el asunto corriendo

{{< highlight sql >}}
select ?cod (count(distinct ?who) as ?count)
where {?who <http://dbpedia.org/ontology/deathCause> ?cod.}
order by desc(?count)
{{< / highlight >}}

y sus variantes [aquí](https://dbpedia.org/sparql).