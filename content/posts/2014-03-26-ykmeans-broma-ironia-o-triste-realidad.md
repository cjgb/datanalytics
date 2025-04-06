---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- consultoría
date: 2014-03-26 07:46:09+00:00
draft: false
lastmod: '2025-04-06T19:13:13.230383'
related:
- 2011-07-19-clustering-ii-c2bfes-replicable.md
- 2011-07-11-clustering-i-una-pesadilla-que-fue-real.md
- 2011-08-03-clustering-iii-sobresimplificacion.md
- 2014-03-28-predictores-con-varianza-casi-nula-inflacion-loterias-y-linea-de-comandos.md
- 2024-12-03-cortos-stats.md
tags:
- clústering
- consultoría
- kmeans
- ciencia de datos
title: ykmeans, ¿broma, ironía o triste realidad?
url: /2014/03/26/ykmeans-broma-ironia-o-triste-realidad/
---

Estar suscrito a las actualizaciones de [CRAN](http://cran.r-project.org/) le permite a uno estar al tanto de las novedades de R de otra manera. De vez en cuando uno encuentra pequeños paquetes que le solucionan un problema puntual. Mucho más frecuentemente, la verdad, uno se topa con aplicaciones muy específicas en áreas que le resultan remotas.

Pero uno no espera nunca tropiezar con paquetes que no sabe si clasificar como una broma, una ironía bromas o como algo mucho peor: la constatación de una triste realidad. Es el caso de [`ykmeans`](http://cran.r-project.org/web/packages/ykmeans/index.html).

`kmeans`, el algoritmo rey de lo insupervisado, el univiro del clústering, el motor del `PROC FASTCLUS`, el recurso primero, último y único de quien debería dedicarse a otra cosa,... ¡admitiendo una variable objetivo!

Sí, casi parece una broma. Pero mirando la implementación de la cosa, comienzo a sospechar que Yohei Sato, su autor, es un consultor que está hasta donde les alcanzan las cosas a los consultores de llegar a casa a las mil después de correr una y otra vez `kmeans` con semillas y subconjuntos de datos distintos hasta que el supervisor de lo insupervisadísimo les da el visto bueno a unos centroides tan azarosos como los mil que los precedieron.

Así que Yohei, casi seguro, se dijo: metamos esa variable de interés en la cosa, añadamos algún tipo de criterio más o menos afortunado para ordenar los resultados, corramos mil iteraciones en paralelo y, mientras los ventiladores del portátil disipan a matacaballo el calor de los isietes, pidámonos un sushi para llevar en la oficina y fumémonos un Sakura en el pasillo mientras llamamos a la parienta para avisarle de que hoy tampoco podremos ver Juego de Tronos.