---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2016-07-12 08:13:34+00:00
draft: false
lastmod: '2025-04-06T19:13:10.335424'
related:
- 2014-09-24-plyr-dplyr-data-table-que-opinas.md
- 2014-03-25-totales-agregados-por-bloques-en-tablas.md
- 2016-07-08-una-estupenda-introduccion-intermedia-a-data-table.md
- 2013-05-02-data-table-i-cruces.md
- 2019-08-05-dplyr-parece-que-prefiere-los-factores.md
tags:
- data.table
- dplyr
- paquetes
- plyr
- r
title: Dos nuevos tutoriales sobre data.table y dplyr
url: /2016/07/12/dos-nuevos-tutoriales-sobre-data-table-y-dplyr/
---

Los productos de Apple, aun admitiendo su calidad, resuelven problemas que yo hace años que no tenía. Tanto [`data.table` ](https://cran.r-project.org/web/packages/data.table/index.html)como [`dplyr`](https://cran.r-project.org/web/packages/dplyr/index.html) vinieron a resolver problemas a los que muchos nos enfrentábamos con sudor y lágrimas.

Ha aparecido recientemente una serie de tutoriales sobre ambos paquetes que recomiendo:

* El de [`data.table`](https://rollingyours.wordpress.com/2016/06/14/fast-aggregation-of-large-data-with-the-data-table-package/)
* El de `dplyr` ([parte I](https://rollingyours.wordpress.com/2016/06/29/express-intro-to-dplyr/), [parte II](https://rollingyours.wordpress.com/2016/07/07/express-dplyr-part-ii/))

Y mis comentarios:

* Para el 99% de mis problemas de manipulación de datos, me sobra con, además de R base, `reshape2` y `plyr`.
* Para datos más grandes, me decanto por `data.table`. En gran medida, porque es previo a `dplyr`.
* No obstante, tengo la sensación de que `dplyr` acabará llevándose el gato al agua: tengo suficientes años como para haber presenciado sin que me las cuenten batallas anteriores: Beta vs VHS, Wordperfect vs Word, etc.