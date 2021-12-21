---
author: Carlos J. Gil Bellosta
date: 2017-12-19 08:13:24+00:00
draft: false
title: 'Mezcolanza: de INLA a GAM pasando por la frenología'

url: /2017/12/19/mezcolanza-de-inla-a-gam-pasando-por-la-frenologia/
categories:
- varios
tags:
- vademécum
- varios
- gam
- frenología
---

Combino en uno cuatro asuntos demasiado prolijos para Twitter pero sobre los que no sé lo suficiente como para desarrollarlos en una entrada entera.

El [paquete `stpp` de R](https://cran.r-project.org/package=stpp) tiene muy buena pinta para el análisis de conteos espacio-temporales. Se recomienda leer [el artículo que lo describe](https://www.jstatsoft.org/article/view/v053i02). Para el tipo de problemas que plantea, se me habría ocurrido tirar de [INLA](http://www.r-inla.org/). Desafortunadamente, a los autores del artículo no se les ocurrió compararlos. Cosas de la academia.

Perdí un rato el otro día en [_Seeing Theory_](http://students.brown.edu/seeing-theory/index.html) y leí cosas buenas y también malas al respecto. Según las últimas, esa página es la estadística viejuna vestida de seda.

Según [esto](https://elpais.com/elpais/2017/09/12/hechos/1505211398_056097.html), la frenología está de vuelta. De nuevo, vestida de seda; pero frenología. ¿O no?

Finalmente, [modelos GAM con componentes periódicas](https://www.fromthebottomoftheheap.net/2014/05/09/modelling-seasonal-data-with-gam/). GAM es lo que aplicamos en 2017, ya sea porque los ordenadores no dan para `stan` o porque no tenemos la personalidad suficiente como para usar INLA.
