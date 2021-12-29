---
author: Carlos J. Gil Bellosta
date: 2013-05-08 07:17:59+00:00
draft: false
title: Dependencias funcionales en R con foodweb

url: /2013/05/08/dependencias-funcionales-en-r-con-foodweb/
categories:
- programación
- r
tags:
- programación
- mvbutils
- plyr
- r
---

El otro día tropecé con un problema de rendimiento con R y al utilizar `Rprof()` encontré muchas llamadas a funciones que yo no hacía directamente.

La principal sospechosa era la función `daply` (del paquete `plyr`) que parecía depender de bastantes otras. Uno puede navegar el código de las funciones para identificar esas dependencias, pero, mirad qué maravilla:

{{< highlight R "linenos=true" >}}
library(mvbutils)
library(plyr)
foodweb(find.funs("package:plyr"), prune = "laply")
{{< / highlight >}}

genera

[![](/wp-uploads/2013/05/foodweb_daply_tree.png)
](/wp-uploads/2013/05/foodweb_daply_tree.png)

Ahí se ve la dependencia de `daply` con respecto a `laply`. Y uno adquiere, además, una visión panorámica del paquete `plyr`.

La función `foodweb` tiene argumentos adicionales (prune es uno de los más útiles) que los interesados podrán encontrar en `?foodweb`.
