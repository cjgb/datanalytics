---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
date: 2017-02-06 08:13:52+00:00
draft: false
lastmod: '2025-04-06T19:00:49.645227'
related:
- 2010-11-12-abundando-en-lo-de-nuestra-ineptitud-para-estimar-la-probabilidad-condicionada.md
- 2014-02-13-mi-solucion-al-otro-problema-del-cumpleanos.md
- 2014-10-10-bootstrap-bayesiano.md
- 2015-12-30-por-que-el-empate-de-la-cup-es-mas-raro-de-lo-que-parece-y-de-lo-que-yo-mismo-digo.md
- 2015-01-14-rarezas-estadistica-algebraica.md
tags:
- bootstrap
- matemáticas
- probabilidad
- permutaciones
title: 1/e por doquier
url: /2017/02/06/1e-por-doquier/
---

Leía [_¿Es muy difícil (estadísticamente) no dar ni una?_](http://elpais.com/elpais/2017/01/18/el_aleph/1484694639_020312.html), donde se discute la probabilidad de que $s(i) \neq i$ $\forall i$ cuando $s$ es una permutación. El problema está relacionado, como podrá ver quien visite el enlace, con la probabilidad de repetición del sorteo en el juego del amigo invisible.

Esta probabilidad converge, al crecer $n$, a $1/e \approx 0.367879$. ¡0.367879! Eso es... eso es... ¡1 - .632...! Pero [.632 es un número como de la familia](https://www.jstor.org/stable/2965703?seq=1#page_scan_tab_contents) y relacionado (consúltese el enlace) con el _bootstrap_.

De hecho, la probabilidad de que un número `i` resulte elegido en una muestra con reemplazamiento de `n` números conforme `n` crece es, precisamente, $1 - e^{-1} \approx .632$).

Supongo que tropezarse con `e` en problemas de esta naturaleza es como encontrar a Trump en una portada en los tiempos que corren: no debería sorprender. De todos modos, he estado pensando, sin mayor éxito, en la manera de reducir uno de los dos problemas al otro sin éxito (tanto para dar con una solución como para encontrar el lugar y el momento propicio para pensar esas cosas como se debe). Igual alguno de mis lectores es más hábil y afortunado. Abiertos tiene los comentarios durante 15 días.