---
author: Carlos J. Gil Bellosta
date: 2019-01-24 08:13:43+00:00
draft: false
title: NMDS y un poquito más allá

url: /2019/01/24/nmds-y-un-poquito-mas-alla/
categories:
- estadística
tags:
- anosim
- ecología
- mds
- vegan
- paquetes
---

Nunca he sido muy partidario de esas técnicas a medio camino entre lo descriptivo (con descripciones que apenas nadie entiende) y lo inferencial (con inferencias que pocos se creen). Entre ellas, MDS (_multidimensional scaling_). Pero este fin de semana y por exigencias del guión (¿se acentúa guión aún?) he tenido que replicar unos análisis en que se usaba NMDS a la [`vegan`](https://CRAN.R-project.org/package=vegan).

Seré breve y me limitaré a definir el problema, enlazar una referencia con código y una discusión mejor que la mía y a mostrar una de las representaciones que uno podría llegar a construir.

Imagina que tienes una matriz de datos en la que las columnas son algo así como sujetos, especies o similar. Y las filas representan productos, lugares u otras entidades con las que las columnas interaccionan.  Por ejemplo, las filas podrían ser clientes y las filas, productos. Entonces la matriz podría contener número de compras o sus importes.

Las columnas, además, están jerarquizadas, agrupadas en categorías de interés y el problema consiste en descubrir las interacciones entre sujetos y categorías.

Mediante un proceso de reducción de la dimensionalidad, NMDS proporciona una versión bidimiensional de los datos (véase [esto](https://jonlefcheck.net/2012/10/24/nmds-tutorial-in-r/) para los detalles) y permite construir representaciones tales como

![](/wp-uploads/2019/01/nmdsconvex.png)

en las que se muestran las zonas definidas por las dos categorías del estudio (los polígonos) y la afinidad relativa de los distintos sujetos (etiquetas rojas) a cada uno de ellos. En este caso existe una diferencia entre las categorías puesto que los polígonos son disjuntos, etc. Además, aparentemente, hay pruebas estadísticas (p.e., ANOSIM, que no tengo ni idea de qué hace) para medir la heterogeneidad de las categorías).

Nunca se me habría ocurrido utilizar NMDS por iniciativa propia, la verdad.   Antes hubiese usado otras técnicas más habituales (¿PCA?). Insisto en que tuve que utilizar todo esto por obligación. Pero parece que en ciertas áreas de conocimiento (p.e., ecología) se utilizan este tipo de técnicas y no está mal comentarlas en un foro generalista como este. Tal vez a alguien procedente de un mundo totalmente distinto le pueda resultar aprovechable.