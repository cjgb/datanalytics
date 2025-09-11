---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
date: 2011-01-14 09:20:33+00:00
draft: false
lastmod: '2025-04-06T19:08:38.733289'
related:
- 2013-01-10-una-aplicacion-seo-con-r.md
- 2010-05-05-r-c2bfla-herramienta-de-mineria-de-datos-mas-utilizada.md
- 2012-11-22-las-ocho-peores-tecnicas-analiticas.md
- 2024-01-23-arboles-olvidadizos.md
- 2014-02-27-d-hand-sobre-estadistica-y-mineria-de-datos.md
tags:
- ciencia de datos
- algoritmos
title: Algoritmos de minería de datos en su contexto
url: /2011/01/14/algoritmos-de-mineria-de-datos-en-su-contexto/
---

El otro día apareció publicada en esta bitácora la noticia de un artículo en el que se enumeraban [los _top 10_ de entre los algoritmos de minería de datos](https://datanalytics.com/2011/01/04/¿cuales-son-los-top-10-algoritmos-para-data-mining/). Nuestro compañero Andrés Gutiérrez [se hizo eco de la noticia](http://www.gutierrezandres.com/blog/2011/01/los-algoritmos-mas-utilizados-en-data-mining/) y, además, extrajo la lista.

He leído el artículo, he revisado la lista de los algoritmos elegidos, he leído los comentarios y tengo algunas objeciones que realizar.  No tanto por dejar constancia de ellas sino para evitar que los oropeles despisten a quienes se introducen en este mundo de la minería de datos.

Ni aun leyendo el artículo muy despacio he podido averiguar con respecto a qué criterio los 10 algoritmos son _top_ (porque podría ser el alfabético, ¿no?). No consta que fuesen elegidos por ser lo más usados (puede que lo sean, pero ésa es otra historia). Puede que se refiera a _influyentes_:


>These top 10 algorithms are among the most influential data mining algorithms in the research community.


Otra escala por la que se midieron fue su popularidad (de conocimiento, no necesariamente de uso):


>As the first step in the identification process, in September 2006 we invited the ACM KDD Innovation Award and IEEE ICDM Research Contributions Award winners to each nominate up to 10 best-known algorithms in data mining.


También se exigió que tuviesen muchas citas (más de cincuenta) pero la selección final se hizo sin ningún criterio aparente:

>In the third step of the identification process, we had a wider involvement of the research community. We invited the [...] to each vote for up to 10 well-known algorithms from the 18-algorithm candidate list.

Así que no se sabe muy bien si se votaron los más usados, los más elegantes, los más influyentes (¡un algoritmo puede haber sido muy influyente pero estar ya totalmente obsoleto!), los más eficientes, los más eficaces,...

Además, existe un sesgo importante en la selección de la muestra de electores. Quien haya acudido a alguna de las conferencias en los que se seleccionaron sabrá a qué me refiero. Al que no, se lo resumiré en una palabra: ingenieros.

No habría dicho gran cosa si estuviese mínimamente de acuerdo con la selección de algoritmos. Pero:



* C4.5 (1) y CART (10) vienen a ser la misma cosa. Las diferencias entre ellos son mínimas. Además, CART es únicamente el nombre de la implementación comercial de un algoritmo que tiene otras. [Sobre ello escribí hace un año](http://analisisydecision.es/sobre-la-historia-de-cart-y-rpart/).
* ¡No uséis k-medias (2)! Está obsoleto. Es un algoritmo viejísimo que depende de la distancia euclídea y es muy sensible a la selección del punto de partida y a los _outliers_. Deberían arrancarse las páginas de los libros que lo recomiendan.
* PageRank (6) es un algoritmo que por muy influyente que sea, sirve para resolver una serie de problemas muy concretos. Es un algoritmo _nicho_. Algo parecido puede decirse del _algoritmo a priori_ (4).

Por otra parte, echo mucho de menos en la lista a los métodos lineales y la regresión logística.

Y quiero acabar con una perogrullada: el problema, el contexto determina el algoritmo. En ese sentido, es mucho más valioso un [cuadro sinóptico de los algoritmos de minería de datos](http://chem-eng.utoronto.ca/~datamining/dmc/data_mining_map.htm) como el que nos presentaron [nuestros compañeros de GMK](http://geomarketingspain.blogspot.com/2010/12/data-mining-documento-data-mining-map.html) en el que se relaciona el tipo de problema con posibles algoritmos candidatos para resolverlo.