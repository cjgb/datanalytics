---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2015-11-02 08:13:26+00:00
lastmod: '2025-10-06'
related:
- 2011-12-19-la-correlacion-del-siglo-xxi.md
- 2011-08-12-una-feliz-conjuncion-estadistico-algebraica.md
- 2016-07-04-gestion-de-la-mendacidad-encuestoelectoral-los-numeros.md
- 2018-01-25-mgm-no-la-de-las-pelis-sino-la-de-los-modelos-graficos.md
- 2016-01-25-comparaciones-de-tres-grupos-pruebas-vs-modelos.md
tags:
- estadística
- g-test
- r
- tablas de contingencia
- verosimilitud
title: El g-test para tablas de contingencia
url: /2015/11/02/el-g-test-para-tablas-de-contingencia/
---

Hace unos días recibí una consulta de [una vieja amiga lingüista](https://twitter.com/lirondos). Ella trabaja en algo que creo que se llama cocolocación: el estudio de palabras que aparecen o que tienden a aparecer juntas en textos. Digamos que es algo así como una correlación o una [regla de asociación](https://en.wikipedia.org/wiki/Association_rule_learning).

Los lingüistas están muy interesados en ese tipo de fenómenos. Tradicionalmente (cada gremio tiene su librillo) usan la [información mutua](https://en.wikipedia.org/wiki/Mutual_information). Pero, al final, lo que tienen es una tabla de contingencia: situaciones en que aparece una, la otra, ambas o ninguna de las palabras.

Y claro, tablas de contingencia 2x2 llevan a pensar en el test de la chi-cuadrado. ¿Podría utilizarse este?

Pues sí, claro. Solo que, según [esto](https://en.wikipedia.org/wiki/Mutual_information#Mutual_information_for_discrete_data), la información mutua es proporcional al estadístico del [g-test](https://en.wikipedia.org/wiki/G-test) (o de razón de las verosimilitudes), del que el de la chi-cuadrado es no más una aproximación de la época precomputacional.

A propósito, el g-test puede aplicarse en R usando la función `DescTools::GTest`.

Confieso que no había oído hablar del g-test hasta el otro día. Y me consuela saber que lo mismo le pasaba a una serie de estadísticos con los que he tenido ocasión de compartir unos tinticos (cafés en Colombia) estos días pasados.

(**Nota:** Los enlaces de esta entrada fueron editados diez años después de su publicación original.)
