---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
date: 2011-01-10 09:39:18+00:00
draft: false
lastmod: '2025-04-06T18:49:20.316511'
related:
- 2013-05-16-el-error-en-las-encuestas-cuentas-en-una-servilleta.md
- 2024-12-05-beta-binomial-deriva.md
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2022-01-11-caracterizacion-binomial-negativa-poisson-gamma.md
- 2022-01-20-peor-pagina-taleb.md
tags:
- probabilidad
title: ¿Una caída demasiado drástica de la varianza?
url: /2011/01/10/una-caida-demasiado-drastica-de-la-varianza/
---

El otro día me pidieron modelar (estadísticamente, no con plastilina) nosequé fenómeno. Digo _nosequé_ porque me lo describieron alegóricamente. No sé si la respuesta que di redundará en beneficio o perjuicio de la humanidad. Pero no quiero hablar de eso sino del problema en sí y de unas cuestiones sobre la varianza asintótica a las que me referiré después. El problema se resume en:

* De una población se conocía una proporción p aunque con cierto grado de incertidumbre más o menos cuantificable.
* Posteriormente se obtenía información adicional sobre la proporción estudiando una pequeña muestra de la población.

Vamos, que la cosa apestaba a bayesiana. Como la probabilidad de _éxito_ dado un valor _p_ para la proporción es precisamente _p_ (y _1-p_, por lo tanto, la de _fracaso_), la de obtener _m_ éxitos en _n_ intentos es

$${ n \choose m }p^m (1-p)^{(n-m)},$$

es decir, sigue una distribución binomial. Y los libros nos cuentan que su distribución de probabilidad conjugada es la [beta](http://es.wikipedia.org/wiki/Distribución_beta). Es decir, que si nuestro conocimiento del valor de la proporción y están descritos por una distribución _a priori_ $latex B(a,b)$, entonces, una vez extraída la muestra de la población, la distribución a posteriori del parámetro será $latex B(a+m, b+n-m)$ donde $latex n$ y $latex m$ son el número ensayos adicionales y el número de éxitos obtenidos en ellos respectivamente.

La pregunta que me trasladó mi cliente (un tipo inteligente y no sólo por haberme contratado) era si era razonable esperar un decrecimiento de la varianza de 0.11 a 0.01 entre la distribución a priori y la posteriori con _sólo_ 22 observaciones.

¿Cómo decae la varianza conforme crece _n_? Si hacemos caso a los editores de la Wikipedia,


$$\sigma^2 = \frac{ab}{(a+b+1)(a+b)^2} $$


y si suponemos que el número de éxitos es igual al de fracasos, conforme $latex n$ crece se comporta asintóticamente como


$$\sigma^2 \sim \frac{1/4 n^2}{(n+1)n^2} \sim \frac{1}{4n}$$


Y si sólo hay aciertos, decrece como


$$\sigma^2 \sim \frac{ bn }{(n+b+1)(n+b)^2} \sim \frac{b}{n^2}$$


(Nótese que desde un punto de vista frecuentista, la varianza de una media de variables aleatorias independientes decrece como $latex n^{-1}$. Resulta curioso que sea más lento. Casi seguro que tiene que ver porque en nuestro caso bayesiano hemos incluído mucha más información sobre las distribuciones involucradas.)

Y sí, puede decrecer _tanto_ la varianza al obtener resultados de 22 observaciones adicionales. ¡Incluso poco es!

¡Primera vez en la vida que me tengo que preocupar de una varianza que no decae lo suficientemente deprisa!