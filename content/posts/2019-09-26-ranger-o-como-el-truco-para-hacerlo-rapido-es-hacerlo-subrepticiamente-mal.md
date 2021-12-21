---
author: Carlos J. Gil Bellosta
date: 2019-09-26 09:13:14+00:00
draft: false
title: ranger (o cómo el truco para hacerlo rápido es hacerlo, subrepticiamente, mal)

url: /2019/09/26/ranger-o-como-el-truco-para-hacerlo-rapido-es-hacerlo-subrepticiamente-mal/
categories:
- ciencia de datos
- r
tags:
- paquetes
- r
- random forests
- ranger
---

[`ranger`](https://cran.r-project.org/package=ranger) llegó para hacerlo mismo que `[randomForest](https://cran.r-project.org/package=randomForest)`, solo que más deprisa y usando menos memoria.

Lo que no nos contaron es que lo consiguió haciendo trampas. En particular, en el tratamiento de las variables categóricas. Si  no andas con cuidado, las considera ordenadas (y ordenadas alfabéticamente).

_[Si te da igual ocho que ochenta, no te preocupará el asunto. Tranquilo: hay muchos como tú.]_

El diagnóstico dado (por eso lo omito) está contado [aquí](http://www.win-vector.com/blog/2016/05/on-ranger-respect-unordered-factors/). La solución, a pesar de la aparente pretensión de los autores, no.