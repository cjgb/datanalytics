---
author: Carlos J. Gil Bellosta
date: 2010-09-01 22:24:44+00:00
draft: false
title: El paquete multicore de R

url: /2010/09/01/el-paquete-multicore-de-r/
categories:
- r
tags:
- r
- paquetes
- programación
- paralelización
---

Tengo acceso a una máquina que, aunque anda un poco corta de memoria, cuenta con ocho CPUs. Tenía unas simulaciones bastante pesadas que correr y quise aprovechar su naturaleza perfectamente paralelizable. Y, de paso, hacer con R lo mismo por lo que he visto a un consultor de SAS cobrar a razón de 3.000 dólares diarios.

En el fondo, es una trivialidad. Supongamos que la función que implementa la simulación se llama foo. Habitualmente, haríamos

{{< highlight R "linenos=true" >}}
n.iter <- 1000
resultados <- replicate( n.iter, foo() )
{{< / highlight >}}

y las simulaciones se ejecutarían secuencialmente.  Con el [paquete `multicore`](http://cran.r-project.org/web/packages/multicore/index.html), la tarea podría distribuirse por 6 (por ejemplo: es que si uso las ocho me riñen) de las CPUs así:

{{< highlight R "linenos=true" >}}
library( multicore )
resultados <- mclapply( 1:n.iter, foo, mc.set.seed = TRUE, mc.cores = 6 )
{{< / highlight >}}

Notas:

* La función foo tiene que admitir un parámetro para poder usar mclapply: no existe una versión paralelizable de replicate en el paquete. Véase una posible solución a este problema en el ejemplo del final.
* La opción mc.cores limita el número de CPUs que se usarán en la paralelización.
* La opción mc.set.seed es muy importante: sin ella, cada subproceso compartirá la semilla y los valores aleatorios que generará serán los mismos.  ¡Normalmente no es eso lo que se quiere!

El paquete multicore incluye algunas funciones de más bajo nivel (`parallel`, `fork`, etc.) que podrían utilizarse para tareas más específicas. Pero `mclapply` es cómoda, simple y funciona estupendamente.  Hay que hacer notar que el paquete está basado en la [función fork](http://es.wikipedia.org/wiki/Bifurcaci%C3%B3n_%28sistema_operativo%29) tal cual está implementada en los sistemas operativos [POSIX](http://es.wikipedia.org/wiki/POSIX). Windows, lástima, no lo es.

Y para acabar, números:

{{< highlight R "linenos=true" >}}
library( multicore )
n.iter <- 1000
foo <- function(i) mean( rnorm( 100000 ) )  

system.time( resultados <- replicate( n.iter, foo() ) )
# 16.47 segundos en mi sistema (elapsed)

system.time( resultados <-
    mclapply( 1:n.iter, foo, mc.set.seed = TRUE, mc.cores = 6 ) )
# 4.34 segundos
{{< / highlight >}}