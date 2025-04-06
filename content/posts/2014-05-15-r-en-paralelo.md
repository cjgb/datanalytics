---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2014-05-15 07:13:59+00:00
draft: false
lastmod: '2025-04-06T19:10:48.297579'
related:
- 2015-06-15-paralelismo-en-r-memorandum.md
- 2010-09-01-el-paquete-multicore-de-r.md
- 2014-12-03-paralelizacion-en-r-con-snow.md
- 2014-06-06-validacion-cruzada-en-paralelo.md
- 2011-04-08-paralelizacion-de-bucles-con-foreach.md
tags:
- paralelización
- parallel
- programación
- r
title: R en paralelo
url: /2014/05/15/r-en-paralelo/
---

Trabajo sobre una máquina de 8 núcleos y 24 GB de RAM. Y que conste que se me ha llegado a quedar chica.

Algunos programas que ejecuto tienen (o contienen pedazos de) la forma

1. calcula A
2. calcula B
3. calcula C
4. combina A, B y C

Obviamente, se me ocurre ejecutarlos así:

1. calcula A, B y C en paralelo
2. cuando acabe el paso anterior, combina A, B y C

Y aún me sobrarían 5 núcleos y bastante RAM. La pregunta es: ¿cómo?

Inspirado en [esto](http://stackoverflow.com/questions/10815622/running-multiple-jobs-in-background-at-same-time-parallel-in-r), últimamente hago:


{{< highlight R >}}
library(parallel)
tasks <- list(
  job1 = function() calcula.A(args.A),
  job2 = function() calcula.B(args.B),
  job3 = function() calcula.C(args.C)
)

out <- mclapply(
  tasks,
  function(f) f(),
  mc.cores = length(tasks)
)
{{< / highlight >}}

Y la verdad, va como un tiro.