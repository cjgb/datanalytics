---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2019-11-19 09:13:00+00:00
draft: false
lastmod: '2025-04-06T19:07:32.781316'
related:
- 2019-02-12-sr-python-muchas-gracias-por-su-candidatura-ya-le-llamaremos-cuando-tenga-modelos-mixtos.md
- 2016-07-06-glms-con-prioris-casi-a-voluntad.md
- 2018-01-12-abc.md
- 2018-10-23-abc-2.md
- 2020-03-03-para-razonar-rigurosamente-bajo-incertidumbre-hay-que-recurrir-al-lenguaje-de-la-probabilidad.md
tags:
- bamlss
- estadística bayesiana
- paquetes
- r
title: bamlss promete regresión bayesiana flexible
url: /2019/11/19/bamlss-promete-regresion-bayesiana-flexible/
---

Un paquete relativamente nuevo de R (las primeras versiones son de 2017) que llevo un tiempo siguiendo de reojo es [`bamlss`](https://CRAN.R-project.org/package=bamlss).

`bamlss` es un paquete que permite especificar y ajustar [varios tipos de modelos](http://www.bamlss.org/articles/bamlss.html) usando en principio métodos bayesianos, aunque [tampoco necesariamente](http://www.bamlss.org/articles/engines.html).

No puedo decir mucho más de él de momento. Habrá que ver cómo se comporta más allá de los ejemplos discutidos en la documentación. Muchos paquetes tienden a hacer trivial lo que antes era sencillo e imposible lo que antes difícil. Espero que no sea el caso y que acabe facilitando la divulgación de herramientas estadísticas avanzadas más allá del consabido $latex y \sim x_1 + x_2 + \dots$ envuelto sea en `lm` o en `XGBoost`.