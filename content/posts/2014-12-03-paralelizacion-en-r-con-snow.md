---
author: Carlos J. Gil Bellosta
categories:
- programación
- r
date: 2014-12-03 07:13:13+00:00
draft: false
lastmod: '2025-04-06T18:50:26.250236'
related:
- 2014-05-15-r-en-paralelo.md
- 2015-06-15-paralelismo-en-r-memorandum.md
- 2010-09-01-el-paquete-multicore-de-r.md
- 2011-04-08-paralelizacion-de-bucles-con-foreach.md
- 2014-06-06-validacion-cruzada-en-paralelo.md
tags:
- programación
- paralelización
- r
title: Paralelización en R con snow
url: /2014/12/03/paralelizacion-en-r-con-snow/
---

Suelo trabajar un servidor con ocho CPUs. Cuando quiero paralelizar código en R, suelo utilizar `[parallel::mclapply](https://stat.ethz.ch/R-manual/R-devel/library/parallel/html/mclapply.html)` (como [aquí](https://datanalytics.com/2014/05/15/r-en-paralelo/)). Pero no tengo una máquina. Tengo varias. Y antes, de hecho, muchas.

¿Cómo paralelizar en distintas máquinas?

Se puede usar Spark (y [SparkR](http://amplab-extras.github.io/SparkR-pkg/)), por ejemplo. Pero una ruta que no había ensayado jamás es _la de la vieja escuela_, i.e., [MPI](http://cran.r-project.org/web/packages/Rmpi/index.html), [`snow`](http://cran.r-project.org/web/packages/snow/index.html) y demás.

Pero si

* tienes varios servidores corriendo un sistema operativo decente,
* instalas R y `snow` (y todo lo que necesites) en todos ellos y
* configuras los servidores para poder acceder a través de [ssh sin contraseña](http://www.linuxproblem.org/art_9.html) desde uno central,

y, entonces, ejecutas

{{< highlight R >}}
cluster.def <- list(user = "linux_user_name", nodes = data.frame(
    host = c("localhost", "10.65.243.58"), cores = c(2,4)))

cluster.nodes <- as.character(rep(cluster.def$nodes$host,
    times = cluster.def$nodes$cores))
cl <- makeSOCKcluster(cluster.nodes, user = cluster.def$user)
res <- clusterApply(cl, 1:10, Sys.sleep)
stopCluster(cl)
{{< / highlight >}}

dormirás (en el sentido de `Sys.sleep`) como tal vez nunca: en varios hilos simultáneos a la vez que corren en las dos máquinas indicadas en la especificación del _clúster_.