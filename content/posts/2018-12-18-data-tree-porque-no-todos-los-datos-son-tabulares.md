---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2018-12-18 08:13:45+00:00
draft: false
lastmod: '2025-04-06T19:08:54.462718'
related:
- 2014-03-12-veinte-paquetes-de-r-para-cientificos-de-datos.md
- 2017-01-10-repensando-la-codificacion-por-impacto.md
- 2019-05-21-que-puede-colgar-de-un-arbol.md
- 2019-09-12-que-mas-puede-colgar-de-un-arbol.md
- 2010-09-16-representando-graficamente-conjuntos-de-datos-pequenos.md
tags:
- data.tree
- paquetes
- prof.tree
- r
title: 'data.tree: porque no todos los datos son tabulares'
url: /2018/12/18/data-tree-porque-no-todos-los-datos-son-tabulares/
---

De acuerdo, casi todos los datos son tabulares. Digamos que el 90% de ellos. Pero muchos de ellos, no. Y `data.tree` es un paquete con muy buena pinta para manejar estructuras _arborescentes_ de datos: véanse [esta](https://cran.r-project.org/web/packages/data.tree/vignettes/applications.html) y [esta](https://cran.r-project.org/web/packages/data.tree/vignettes/data.tree.html) viñeta.

![](/img/2018/12/datatree.png#center)

Como no podía ser de otra manera, tiene funciones para recorrer, filtrar y podar los árboles de datos.

La aplicación gracias a la cual di con él es el paquete [`prof.tree`](http://ipub.com/r-profiling/), que es lo mismo que el `Rprof` de toda la vida... solo que mola más:

![](/img/2018/12/rprofile.png#center)