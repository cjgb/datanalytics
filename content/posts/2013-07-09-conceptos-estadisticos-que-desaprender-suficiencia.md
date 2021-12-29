---
author: Carlos J. Gil Bellosta
date: 2013-07-09 07:47:28+00:00
draft: false
title: 'Conceptos estadísticos que desaprender: suficiencia'

url: /2013/07/09/conceptos-estadisticos-que-desaprender-suficiencia/
categories:
- estadística
tags:
- estadística
- suficiencia
---

Leí hace unos días en alguna bitácora que el autor, de tener que retirarse una larga temporada a una isla desierta, llevaría consigo un ejemplar de la inferencia estadística de Casella y Berger. Así que me picó la curiosidad, lo bajé de internet y comencé a leerlo por el primer capítulo que me pareció interesante, el sexto, titulado _Principles of Data Reduction_.

El título es sugerente y da la impresión de que nos enseñará cómo sintetizar conjuntos de datos grandes con unos pocos indicadores. Y comienza por introducir el concepto de _suficiencia_ que, recuerdo, constaba en aquel terrible libro mío de estadística de segundo de carrera. Repasémoslo:

 >Un estadístico T(X) es suficiente para un parámetro $latex \theta$ si la distribución condicional de la muestra X dado T(X) no depende de $latex \theta$.

Es decir, conociendo T(X) se pueden ignorar los detalles de la muestra total.

Tras la definición, el libro presenta la correspondiente serie de teoremas, ejemplos y matemáticas hermosas. Por supuesto, no omite que la media de los valores de una distribución normal es un estadístico suficiente para $latex \mu$. Hasta que menciona en el párrafo más revelador:

>Sucede que fuera de la [familia exponencial](http://es.wikipedia.org/wiki/Familia_exponencial) de distribuciones no es habitual encontrar un estadístico suficiente con una dimensión menor que la de la misma muestra.

Lo que pasa es que no recuerdo haber visto jamás una distribución normal (o de cualquier otro miembro de la familia exponencial) fuera de un aula. Es hora por tanto de desaprender todo lo que tiene que ver con el concepto de suficiencia y, sobre todo, ese su corolario espurio de que basta con la media para caracterizar una secuencia de números. Así dejaremos en la memoria hueco para los [cinco números de Tukey](http://en.wikipedia.org/wiki/Five-number_summary), el gráfico de cajas y otros descriptores —gráficos o no— de la distribución de las muestras que vemos en el mundo allende las pizarras.

(Dicho lo cual, anuncio que estoy pensando en retirar de las estanterías todos los volúmenes que aún guarde con el título de Estadística Matemática y darles una nueva función a la altura de su valor, dimensiones y consistencia, algo así como servir de repisa para el monitor).
