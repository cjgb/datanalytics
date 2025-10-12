---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2015-07-22 08:13:34+00:00
lastmod: '2025-04-06T19:05:54.567378'
related:
- 2014-07-09-estrategias-escalables-con-r.md
- 2010-01-26-r-y-conjuntos-de-datos-grandes.md
- 2014-05-15-r-en-paralelo.md
- 2015-06-15-paralelismo-en-r-memorandum.md
- 2012-09-25-predicciones-de-series-temporales-a-gran-escala-y-en-paralelo-con-r.md
tags:
- big data
- bigmemory
- foreach
- paralelización
- r
title: Estrategias escalables con R
url: /2015/07/22/estrategias-escalables-con-r-2/
---

Recomiendo leer [_Scalable Strategies for Computing with Massive Data_](http://www.jstatsoft.org/v55/i14/), un artículo que trata dos de los problemas de escalabilidad con que tropezamos los usuarios de R:

* Los de memoria, para los que proponen e ilustran el uso del paquete [`bigmemory`](https://cran.r-project.org/web/packages/bigmemory/index.html).
* Los de velocidad de ejecución, a los que se enfrentan paralelizando el código, tanto en una única máquina como en un clúster, con [`foreach`](https://cran.r-project.org/web/packages/foreach/index.html).

En el artículo no solo discute los dos paquetes por separado sino que ilustra además cómo usarlos conjuntamente en su propuesta de estrategia escalable con R.