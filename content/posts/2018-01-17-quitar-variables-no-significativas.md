---
author: Carlos J. Gil Bellosta
date: 2018-01-17 08:13:31+00:00
draft: false
title: ¿Quitar variables no significativas?

url: /2018/01/17/quitar-variables-no-significativas/
categories:
- estadística
tags:
- coeficientes
- estadística
- regresión
---

**Contexto:** modelos de regresión con de varias a muchas variables. Muy particularmente cuando interesa la predicción.

**Pseudoproblema:** ¿quitamos las variables no significativas?

Los manualitos (muy queridos de enseñantes, porque les dan reglas sencillitas; muy queridos también de los aprendientes, por el mismo motivo) rezan que sí. Se quitan y a otra cosa.

La regla adulta es:




	  * Si el coeficiente es grande y tiene el signo correcto, ¡enhorabuena!
	  * Si el coeficiente es pequeño, la variable no hace ni bien ni mal. Y [hay más motivos para dejarla que para quitarla](https://stats.stackexchange.com/questions/66448/should-covariates-that-are-not-statistically-significant-be-kept-in-when-creat).
	  * Pero si el coeficiente es grande y el signo es contrario a lo que cabría esperar (p.e., a más gripe menos fallecidos, a más capacidad económica menos compra media, etc.), ¡ah!, toca volver a replantear el modelo seriamente.


**Nota:** en lo anterior no he usado la palabra _significativo_. Si alguien quiere traducir grande y pequeño en términos de la ocurrencia de hace ochenta años de un inglés que sostenía que el tabaco era sano, allá él.


