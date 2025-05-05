---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2012-10-23 07:35:29+00:00
draft: false
lastmod: '2025-04-06T19:10:51.475320'
related:
- 2012-10-15-test-de-student-e-importancia-practica-un-ejercicio.md
- 2023-09-28-potencia-tests.md
- 2016-02-03-otra-vuelta-al-caso-del-test-que-rechaza-y-el-intervalo-que-contiene.md
- 2023-03-21-reduccion-error-tests-ab.md
- 2021-03-09-sobre-la-inferencia-basada-en-magnitudes.md
tags:
- estadística
- t-test
- student
title: 'Test de Student e importancia práctica: una solución (para su discusión)'
url: /2012/10/23/test-de-student-e-importancia-practica-una-solucion-para-su-discusion/
---

El [ejercicio que planteé hace unos días](https://datanalytics.com/2012/10/15/test-de-student-e-importancia-practica-un-ejercicio/) está extraido (casi literalmente) de [aquí](http://www.jerrydallal.com/LHSP/pval.htm). Veamos cómo razona su autor en cada caso:

* **Caso 1:** Existe una diferencia estadísticamente significativa entre los tratamientos. Pero carece de importancia práctica porque es improbable que supere los 3 mg/dl.
* **Caso 2:** La diferencia es estadísticamente significativa y tiene importancia práctica a pesar de que el intervalo de confianza tiene una anchura de 20 mg/dl. Y es que un intervalo de confianza ancho no es necesariamente algo negativo: en este caso, por ejemplo, todos los puntos del rango tienen una misma interpretación. El nuevo tratamiento funciona, aunque sea imposible acotar con mucha precisión el rango de mejora.
* **Caso 3:** La diferencia es estadísticamente significativa pero puede o no tener importancia práctica. El intervalo de confianza es demasiado ancho: puede ser de tan solo 2 mg/dl; pero también de 58 mg/dl. En este caso sería recomendable continuar investigando el tratamiento.
* El **caso 4** es fácil: no existe una diferencia significativa y, de haberla, es casi seguro que no tendría relevancia práctica.
* **Casos 5 y 6:** La diferencia no es estadísticamente significativa. Sin embargo, esta diferencia no está lo suficientemente bien acotada como para descartar la posibilidad que puedan existir efectos de importancia práctica. De todos modos, en el caso 5 sería más razonable desestimar dicha posibilidad que en el 6, que es parecido al caso 3.