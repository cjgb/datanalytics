---
author: Carlos J. Gil Bellosta
date: 2017-02-06 08:13:52+00:00
draft: false
title: 1/e por doquier

url: /2017/02/06/1e-por-doquier/
categories:
- probabilidad
tags:
- bootstrap
- matemáticas
- probabilidad
- permutaciones
---

Leía [_¿Es muy difícil (estadísticamente) no dar ni una?_](http://elpais.com/elpais/2017/01/18/el_aleph/1484694639_020312.html), donde se discute la probabilidad de que $latex s(i) \neq i$ $latex \forall i$ cuando $latex s$ es una permutación. El problema está relacionado, como podrá ver quien visite el enlace, con la probabilidad de repetición del sorteo en el juego del amigo invisible.

Esta probabilidad converge, al crecer $latex n$, a $latex 1/e \approx 0.367879$. ¡0.367879! Eso es... eso es... ¡1 - .632...! Pero [.632 es un número como de la familia](https://www.jstor.org/stable/2965703?seq=1#page_scan_tab_contents) y relacionado (consúltese el enlace) con el _bootstrap_.

De hecho, la probabilidad de que un número `i` resulte elegido en una muestra con reemplazamiento de `n` números conforme `n` crece es, precisamente, $latex 1 - e^{-1} \approx .632$).

Supongo que tropezarse con `e` en problemas de esta naturaleza es como encontrar a Trump en una portada en los tiempos que corren: no debería sorprender. De todos modos, he estado pensando, sin mayor éxito, en la manera de reducir uno de los dos problemas al otro sin éxito (tanto para dar con una solución como para encontrar el lugar y el momento propicio para pensar esas cosas como se debe). Igual alguno de mis lectores es más hábil y afortunado. Abiertos tiene los comentarios durante 15 días.
