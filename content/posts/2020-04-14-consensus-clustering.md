---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2020-04-14 09:13:00+00:00
draft: false
lastmod: '2025-04-06T19:07:34.185040'
related:
- 2011-07-11-clustering-i-una-pesadilla-que-fue-real.md
- 2016-07-11-k-medias-es-como-las-elecciones-k-vecinos-como-los-cumpleanos.md
- 2017-03-20-em-duro-a-mano-y-para-humanos.md
- 2011-07-19-clustering-ii-c2bfes-replicable.md
- 2011-08-03-clustering-iii-sobresimplificacion.md
tags:
- clústering
- estadística
- k-medias
title: Consensus clustering
url: /2020/04/14/consensus-clustering/
---

No hay nada tan corrosivo para la fe en el _clústering_ que probar una y otra vez k-medias (por ejemplo) sobre los mismos datos y ver cómo los resultados cambian drásticamente de ejecución en ejecución.

Pero eso viene a ser, esencialmente, lo que hay detrás del _[consensus clústering](https://en.wikipedia.org/wiki/Consensus_clustering)_ (CC), una técnica que puede ser usada, entre otros fines, para determinar el número óptimo de grupos.

La idea fundamental de la cosa es que observaciones que merezcan ser agrupadas juntas lo serán muy frecuentemente aunque cambien ligeramente las condiciones iniciales (por ejemplo, se tome una submuestra de los datos o cambien las condiciones iniciales de k-medias, por ejemplo). Si uno altera esas condiciones iniciales repetidas veces puede contar la proporción de las veces que las observaciones `i` y `j` fueron emparejadas juntas y crear la correspondiente matriz (simétrica, para más señas) $latex C(i,j)$.

Idealmente, los valores $latex c_{ij}$ de esa matriz deberían ser 0 o 1 y su función de distribución, por llamarla de alguna manera, debería tener forma de escalón.

¿Cómo determinar entonces el número óptimo de grupos? Se pueden crear las funciones de distribución correspondientes a _clústerings_ con distinto número de grupos y ver cuál tiene una forma más parecida a la ideal. Algo así como

![](/wp-uploads/2020/04/consensus_clustering.png#center)

Más detalles, en el enlace de más arriba.