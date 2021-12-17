---
author: Carlos J. Gil Bellosta
date: 2010-09-04 13:11:19+00:00
draft: false
title: 'Paquetes estadísticos: una anécdota sin moraleja'

url: /2010/09/04/paquetes-estadisticos-una-anecdota-sin-moraleja/
categories:
- consultoría
- r
tags:
- consultoría
- r
---

Un banco que gana mucho dinero quiso gastarse un nada desdeñable pellizco de sus ingresos contratando a unos consultores muy resabidos de un país extranjero donde, es fama, todos saben mucho. El resultado fue una documentación ininteligible y un larguísimo programa en VB sin apenas comentarios que se demoraba horas en realizar una simulación trivial.

El banco, cansado de quemar ciclos de CPU en vano, encargó a una consultora local la reimplementación del algoritmo en un afamado paquete estadístico. A falta de documentación, la reimplementación hubo de hacerse tratando de adivinar qué demonios hacía el código original. Prácticamente, fue un proceso de [ingeniería inversa](http://es.wikipedia.org/wiki/Ingenier%C3%ADa_inversa).

Pasaba yo por un pasillo cuando uno de los responsables de la traducción del código se dejó engañar de mi inmerecida reputación de saber de números y me enseñó unos cuantos folios de código por ver si yo sabía desentrañar aquel galimatías.

Una de mis primeras conclusiones fue que los consultores primigenios cobraban a tanto la hora: tres folios enteros de código servían para calcular la raíz cuadrada de una matriz de covarianzas, tres folios que pudimos resumir en una línea tal como

{{< highlight R "linenos=true" >}}
    R = chol(M)
{{< / highlight >}}

utilizando la [descomposición de Cholesky](http://en.wikipedia.org/wiki/Cholesky_decomposition). Eran, sinceramente, tres folios de código aterrador, un verdadero ejercicio de masoquismo informático que acabaron yaciendo en el fondo de una papelera.

Pero he aquí que en uno de los bucles —bucles, bucles... esos perniciosos atavismos herencia de la época en que no se conocía la [programación funcional](http://es.wikipedia.org/wiki/Programaci%C3%B3n_funcional)— se calculaban cuantiles de la [distribución beta](http://en.wikipedia.org/wiki/Beta_distribution) con parámetros alfa y beta de lo más exótico: los primeros eran del orden de magnitud de 0,01 mientras que los segundos se movían entre 10 y 100000. Con tales parámetros, la distribución de probabilidad es, poco más o menos, una [delta de Dirac](http://en.wikipedia.org/wiki/Dirac_delta_function) centrada en el cero.

El problema consistía en que el estupendo paquete estadístico de onerosa licencia, en un servidor caro y corriendo un UNIX propietario era incapaz de calcular los cuantiles que, en esencia, eran todos nulos. Y, además, devolvía errores que detenían el proceso.

Sin embargo, sobre mi portátil barato, con [un lenguaje de programación abierto](http://www.r-project.org), obtenía, por ejemplo:

{{< highlight R "linenos=true" >}}
> qbeta(0.001, 0.001, 27)[1] 3.861125e-268
Warning message:full precision was not achieved in'qbeta'
> qbeta(0.001, 0.01, 27)[1] 2.135598e-302
{{< / highlight >}}

Es decir, valores indistinguibles de cero tal y como cabía esperar.

En fin, que le deseo mucha suerte al banco que gana mucho dinero con su programa ininteligible, mucha suerte a los consultores que tuvieron la caridad de preguntarme con la reimplementación del algoritmo sobre un sistema obsolescente y unas muy merecidas y descansadas vacaciones al desarrollador encargado de poner a punto las rutinas de cálculo de probabilidades inversas del afamado paquete estadístico.

**Nota: **esta entrada es otra de las de mi antiguo blog y ya algo añeja. Omití en ella —y no recuerdo el motivo— que los tiempos de ejecución del proceso, hiciesen o no algo con sentido eran:

* De cuatro a seis horas en la versión VB sobre un ordenador de sobremesa potente. El código ocupaba unos cuantos miles de líneas.
* De 15 a 20 minutos sobre un servidor poderoso usando el afamado paquete estadístico (del orden de 600 líneas de código).
* De 10 a 15 segundos en mi portátil barato usando el misterioso lenguaje de programación abierto (alrededor de 30 líneas de código).

