---
author: Carlos J. Gil Bellosta
date: 2014-04-03 07:03:22+00:00
draft: false
title: The Elements of Statistical Craftsmanship

url: /2014/04/03/the-elements-of-statistical-artisany/
categories:
- estadística
tags:
- artesanía estadística
- estadística
- lago
- multinomial
- peces
- siria
- breiman
---

En [_How Statistics lifts the fog of war in Syria_](http://blog.revolutionanalytics.com/2014/03/hrdag-strata.html) se describe una solución al problema de estimar el número de víctimas en cierto lance de la guerra de Siria. Lo complicado del problema es que existen diversos recuentos independientes y las víctimas pueden aparecer en todos, alguno o ninguno.

Me llama la atención que el método utilizado sea el de los bosques aleatorios (en particular, el [`randomForest`](http://cran.r-project.org/web/packages/randomForest/index.html) de R). No sabría cómo utilizarlo para resolver este problema. Tampoco he tenido tiempo para entrar en los detalles.

Sin embargo, ya hablamos de ese mismo problema previamente en estas páginas. El planteamiento del problema descrito en [_¿Cuántos peces hay en un lago?_](http://www.datanalytics.com/2013/12/05/cuantos-peces-hay-en-un-lago/) me parece superior.

Tengo la sensación de que muchos colegas insisten en utilizar esas herramientas genéricas que aparecen en los libros (sean redes neuronales, árboles aleatorios, _bagging_, etc.). En muchas ocasiones —pienso que esta lo es— son preferibles otro tipo de estrategias.

Por ejemplo, dudo que dentro del traductor automático de Google haya un bosque aleatorio gigante. Es probable, sin embargo, que debajo del capó uno pueda encontrar, por ejemplo, matrices de Markov utilizadas de alguna particularísima manera. O una miríada de micromodelos locales combinados de alguna particular manera (pero no necesariamente como se le ocurrió a Breiman _urbi et orbi_).

No sé qué nombre tiene esa disciplina que consiste en analizar datos sin utilizar ninguno de los recetarios —y que conste que lo digo con muchísimo respeto y admiración— que aparecen en [_The Elements of Statistical Learning_](http://statweb.stanford.edu/~tibs/ElemStatLearn/), pero sugiero el de _artesanía estadística_.
