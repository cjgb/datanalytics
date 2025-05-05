---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2011-09-30 06:52:59+00:00
draft: false
lastmod: '2025-04-06T18:54:45.532195'
related:
- 2011-08-11-dont-be-loopy.md
- 2011-09-23-done28099t-be-loopy-ii.md
- 2010-09-01-el-paquete-multicore-de-r.md
- 2011-04-08-paralelizacion-de-bucles-con-foreach.md
- 2014-06-06-validacion-cruzada-en-paralelo.md
tags:
- jackknife
- paralelización
- r
- sas
title: 'Dont be loopy! (III: jackknife y paralelismo)'
url: /2011/09/30/dont-be-loopy-iii-jackknife-y-paralelismo/
---

Esta es la tercera entrega de una serie de artículos en los que comparo SAS y R a la hora de realizar diversos tipos de simulaciones basados en _[Don't Be Loopy: Re-Sampling and Simulation the SAS® Way](http://www.pnwsug.org/sites/test.pnwsug.org/files/proceedings/David%20Cassell%20-%20Don't%20Be%20Loopy.pdf)_.

Esta vez toca compararlos a la hora de aplicar el método del _[jackknife](http://en.wikipedia.org/wiki/Resampling_(statistics)#Jackknife)_.

Primero, el código SAS que recomienda el autor del artículo, que calcula la curtosis de un conjunto de datos trivial (una muestra de 10k valores que siguen una distribución uniforme):



{{< highlight sas >}}
data test;
    do i = 1 to 10000;
        x = ranuni(1234);
        output;
    end;
    keep x;
run;

data outb;
  do replicate = 1 to numrecs;
    do rec = 1 to numrecs;
      set test nobs=numrecs point=rec;
      if replicate ^= rec then output;
    end;
  end;
  stop;
run;

ods listing close;

proc univariate data=outb;
  var x;
  by replicate;
  output out=outall kurtosis=curt;
run;

ods listing;

proc univariate data=outall;
  var curt;
  output out=final mean=jmean std=jstd;
run;
{{< / highlight >}}



Tarda en ejecutarse 110 segundos en mi máquina. He probado también a aplicar el procedimiento a conjuntos de datos con 50k muestras, pero el sistema no ha dado de sí: se ha quedado sin espacio en disco.

(Nota: véanse los [comentarios a algunas de las entradas anteriores de la serie](https://datanalytics.com/2011/09/23/don%E2%80%99t-be-loopy-ii/). Algunos de los lectores de esta bitácora, de alguna manera, han logrado evitar el cuello de botella que para SAS supone depender del acceso a disco manteniendo un uso de CPU decente que yo, dicho sea de paso, no he visto casi nunca: una CPU al 100% en un ordenador que corre SAS es una rareza digna de fotografiarse.)

En R tenemos varias alternativas. Tal vez la más simple sea


{{< highlight R >}}
library( bootstrap )
library( moments )

N <- 10000
x <- runif( N )
results <- jackknife( x, kurtosis )
hist( results$jack.values )
{{< / highlight >}}


que utiliza la función jackknife del paquete `bootstrap` y tarda 13.12 segundos. Y con 50k muestras, unos 10 minutos (hummm... falta de linealidad). Pero merece la pena probar en este tipo de contextos el paralelismo en R.

Para ello, utilizaremos el paquete `doSMP`:


{{< highlight R >}}
library(doSMP)
w <- startWorkers(workerCount = 2)
registerDoSMP(w)
{{< / highlight >}}


La primera línea carga el paquete. Las otras dos _registran_ los _workers_ dicho de otra manera, especifican cuántos hilos abrirá R para ejecutar las tareas que se paralelicen y los activan. Obviamente, no tiene sentido asignar más hilos que CPUs tenga el sistema.

Para ejecutar las tareas se utiliza foreach. Esta función es, en cierto modo, similar a for. Puede _cualificarse_ con %dopar% o con %do%: la primera opción ejecuta el código en paralelo; la segunda, secuencialmente.

El código (con las dos opciones) es:


{{< highlight R >}}
# en paralelo
res <- foreach( i = 1:N, packages = "moments" ) %dopar%
    kurtosis( x[-i] )

# iterativo
res <- foreach( i = 1:N, packages = "moments" ) %do%
    kurtosis( x[-i] )
{{< / highlight >}}

Es necesario pasarle a `foreach` el nombre de los paquetes necesarios para ejecutar el código subsiguiente: si ejecutamos las líneas anteriores omitiendo el parámetro `.packages`, R se quejará por no poder encontrar la función `kurtosis`.

Los resultados no han resultado particularmente satisfactorios. Con la segunda opción, la secuencial, ha tardado 23 segundos. Con la primera, en paralelo, 14.58. Parece que el uso de `foreach` implica una sobrecarga computacional sustancial que consume los beneficios de la paralelización.