---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- r
date: 2019-09-26 09:13:14+00:00
draft: false
lastmod: '2025-04-06T18:48:13.425633'
related:
- 2021-10-07-como-aleatorizan-las-columnas-los-rrff-un-experimento-mental-y-una-coda-historica.md
- 2014-03-07-victoria-o-diferencia-de-puntos-ahora-con-random-forests.md
- 2017-01-10-repensando-la-codificacion-por-impacto.md
- 2019-08-07-mas-sobre-factores-strings-y-ordenacion.md
- 2018-01-08-recodificacion-de-variables-categoricas-de-muchos-niveles-ayuda.md
tags:
- paquetes
- r
- random forests
- ranger
title: ranger (o cómo el truco para hacerlo rápido es hacerlo, subrepticiamente, mal)
url: /2019/09/26/ranger-o-como-el-truco-para-hacerlo-rapido-es-hacerlo-subrepticiamente-mal/
---

[`ranger`](https://cran.r-project.org/package=ranger) llegó para hacerlo mismo que `[randomForest](https://cran.r-project.org/package=randomForest)`, solo que más deprisa y usando menos memoria.

Lo que no nos contaron es que lo consiguió haciendo trampas. En particular, en el tratamiento de las variables categóricas. Si  no andas con cuidado, las considera ordenadas (y ordenadas alfabéticamente).

_[Si te da igual ocho que ochenta, no te preocupará el asunto. Tranquilo: hay muchos como tú.]_

El diagnóstico dado (por eso lo omito) está contado [aquí](http://www.win-vector.com/blog/2016/05/on-ranger-respect-unordered-factors/). La solución, a pesar de la aparente pretensión de los autores, no.