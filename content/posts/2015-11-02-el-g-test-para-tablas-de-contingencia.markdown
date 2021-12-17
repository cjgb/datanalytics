---
author: Carlos J. Gil Bellosta
date: 2015-11-02 08:13:26+00:00
draft: false
title: El g-test para tablas de contingencia

url: /2015/11/02/el-g-test-para-tablas-de-contingencia/
categories:
- estadística
- r
tags:
- estadística
- g-test
- r
- tablas de contingencia
- verosimilitud
---

Hace unos días recibí una consulta de [una vieja amiga lingüista](https://twitter.com/lirondos). Ella trabaja en algo que creo que se llama cocolocación: el estudio de palabras que aparecen o que tiendan a aparecer juntas en textos. Digamos que es algo así como una correlación o una [regla de asociación](https://en.wikipedia.org/wiki/Association_rule_learning).

Los lingüistas están muy interesados en ese tipo de fenómenos. Tradicionalmente (cada gremio tiene su librillo) usan la [información mutua](https://en.wikipedia.org/wiki/Mutual_information). Pero, al final, lo que tienen es una tabla de contingencia: situaciones en que aparece una, la otra, ambas o ninguna de las palabras.

Y claro, tablas de contingencia 2x2 llevan a pensar en el test de la chi-cuadrado. ¿Podría utilizarse este?

Pues sí, claro. Solo que, según [esto](https://en.wikipedia.org/wiki/Mutual_information#Mutual_information_for_discrete_data), la información mutua es proporcional al estadístico del g-test (o de razón de las verosimilitudes), del que el de la chi-cuadrado es no más una aproximación de la época precomputacional.

A propósito, el g-test puede aplicarse en R [así](https://www.rforge.net/doc/packages/Deducer/likelihood.test.html) (¿habrá alguna manera más?).

Confieso que no había oído hablar del g-test hasta el otro día. Y me consuela saber que lo mismo le pasaba a una serie de estadísticos con los que he tenido ocasión de compartir unos tinticos (cafés en Colombia) estos días pasados.

