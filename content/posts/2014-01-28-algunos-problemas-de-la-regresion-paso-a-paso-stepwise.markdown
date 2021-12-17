---
author: Carlos J. Gil Bellosta
date: 2014-01-28 08:58:55+00:00
draft: false
title: Algunos problemas de la regresión paso a paso ("stepwise")

url: /2014/01/28/algunos-problemas-de-la-regresion-paso-a-paso-stepwise/
categories:
- consultoría
- estadística
tags:
- glm
- stepwise
---

Fueron problemas planteados por Frank Harrell, recopilados [aquí](http://www.stata.com/support/faqs/statistics/stepwise-regression-problems/) y ahora traducidos por mí para mi bitácora.

Problemas de la regresión paso a paso:



	  * La R-cuadrado obtenida está muy sesgada hacia arriba.
	  * Los test F y chi-cuadrado que aparecen al lado de las variables no siguen dichas distribuciones.
	  * Los intervalos de confianza son demasiado (e incorrectamente) estrechos.
	  * Los p-valores obtenidos no tienen el significado esperado y el de corregirlos adecuadamente es un problema muy difícil.
	  * Proporciona coeficientes sesgados y excesivamente grandes.
	  * Tiene problemas serios en caso de colinealidad en las variables.
	  * Está basado en métodos que fueron pensados para probar hipótesis preestablecidas.
	  * Incrementar el número de muestras no corrige los problemas anteriores.
	  * Nos permite no tener que pensar sobre el problema.
	  * Consume mucho papel.

Algunas conclusiones:

	  * El grado de correlación entre las variables predictoras afecta a la frencuencia en que los verdaderos predictores entran en la selección final.
	  * El número de predictores afecta al número de _variables ruido _en la selección final.
	  * El tamaño de la muestra tiene poca importancia a la hora de determinar el número de variables _auténticas_ en el modelo final.


Me consta que en algunos sectores (p.e., seguros) son _todavía_ muy proclives a plantear modelos (p.e., GLM) con muchas variables —las que son más todas sus interacciones de todos los niveles—, dejar correr un método paso y volver a las horas por los resultados. ¡Miedo me da!

Yo, por mi parte, también me confieso pecador. Alguna vez, cuando métodos más modernos que los clásicos estaban fuera de cuestión —por el contexto del estudio— me he visto obligado a incurrir en los métodos paso a paso. No sé, por ejemplo, cuántas alternativas existen a estos métodos tan viejunos cuando uno quiere publicar en una revista de, p.e., sociología.
