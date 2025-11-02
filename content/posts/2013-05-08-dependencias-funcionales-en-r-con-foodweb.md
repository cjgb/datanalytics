---
author: Carlos J. Gil Bellosta
categories:
- programación
- r
date: 2013-05-08 07:17:59+00:00
draft: false
lastmod: '2025-04-06T19:06:38.217728'
related:
- 2014-03-12-veinte-paquetes-de-r-para-cientificos-de-datos.md
- 2014-09-24-plyr-dplyr-data-table-que-opinas.md
- 2019-08-05-dplyr-parece-que-prefiere-los-factores.md
- 2016-07-12-dos-nuevos-tutoriales-sobre-data-table-y-dplyr.md
- 2011-10-26-herramientas-de-depuracion-en-r.md
tags:
- programación
- mvbutils
- plyr
- r
title: Dependencias funcionales en R con foodweb
url: /2013/05/08/dependencias-funcionales-en-r-con-foodweb/
---

El otro día tropecé con un problema de rendimiento con R y al utilizar `Rprof()` encontré muchas llamadas a funciones que yo no hacía directamente.

La principal sospechosa era la función `daply` (del paquete `plyr`) que parecía depender de bastantes otras. Uno puede navegar el código de las funciones para identificar esas dependencias, pero, mirad qué maravilla:

{{< highlight R >}}
library(mvbutils)
library(plyr)
foodweb(find.funs("package:plyr"), prune = "laply")
{{< / highlight >}}

genera

[![](/img/2013/05/foodweb_daply_tree.png#center)
](/img/2013/05/foodweb_daply_tree.png#center)

Ahí se ve la dependencia de `daply` con respecto a `laply`. Y uno adquiere, además, una visión panorámica del paquete `plyr`.

La función `foodweb` tiene argumentos adicionales (prune es uno de los más útiles) que los interesados podrán encontrar en `?foodweb`.