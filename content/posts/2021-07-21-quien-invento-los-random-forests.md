---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
date: 2021-07-21 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:59:15.350740'
related:
- 2021-10-07-como-aleatorizan-las-columnas-los-rrff-un-experimento-mental-y-una-coda-historica.md
- 2016-11-07-las-dos-culturas-con-comentarios-de-2016.md
- 2024-01-23-arboles-olvidadizos.md
- 2014-10-10-bootstrap-bayesiano.md
- 2014-01-23-en-recuerdo-de-leo-breiman.md
tags:
- breiman
- historia
- random forests
title: ¿Quién inventó los "random forests"?
url: /2021/07/21/quien-invento-los-random-forests/
---

[_Este artículo tiene una corrección ---tachado en el texto que sigue--- posterior a la fecha de publicación original. Véase la entrada  ["¿Cómo aleatorizan las columnas los RRFF?: un experimento mental y una coda histórica"](https://www.datanalytics.com/2021/10/07/como-aleatorizan-las-columnas-los-rrff-un-experimento-mental-y-una-coda-historica/) para obtener más información al respecto.]_

Si hacemos caso, por ejemplo, a la gente que estaba allí entonces, la que estaba al día de todo lo que se publicaba en la época, la que conocía personalmente a los presuntos implicados y la que seguramente había tenido constancia previa de la idea en alguna pizarra o en la servilleta de una cafetería, fue Leo Breiman en 2001. Así nos lo cuentan, por ejemplo, Hastie et al. al principio del capítulo 15 de _The Elements of Statistical Learning_ (2ª edición):

>Random forests (Breiman, 2001) is a substantial modification of bagging
that builds a large collection of de-correlated trees, and then averages them.

En la introducción y revisión de la literatura de su artículo, _Random Forests_, de 2001, Breiman señala cinco precedentes:

  * Su propio trabajo de 1996 sobre el _bagging_.
  * Un artículo de Dietterich de 1998.
  * Otro trabajo de suyo (de Breiman) de 1999.
  * Una serie de publicaciones de Ho acerca del lo que [Ho] llama el método del subespacio aleatorio.
  * Un artículo de Amit y Geman de 1997, que [Breiman] considera _influeyente en sus ideas_.

Si uno bucea en esos artículos encuentra propuestas en las que, efectivamente, se combinan de cierta manera árboles de distintos tipos y otros clasificadores débiles y se construyen modelos que reciben nombres como _randomized trees_, _random decision forests_, etc. Además, en estos artículos aparecen _fractalmente_ referencias adicionales a otros artículos que parecen abundar sobre las mismas ideas.

En el muy breve artículo _[Random forests: from early developments to recent advancements](https://www.tandfonline.com/doi/full/10.1080/21642583.2014.956265?scroll=top&needAccess=true)_, sus autores esbozan una historia de los _random forests_. Para la sección de los precedentes, apenas extienden la lista ya proporcionada por Breiman con un artículo adicional de Ho 1995 que Breiman había omitido titulado _Random decision forests_ y que puede descargarse en las conocidas covachuelas de internet. En él se describe un modelo que es, más o menos, así:

  * El modelo propuesto es un conjunto de árboles.
  * Son árboles _oblícuos_. Hoy en día se usan árboles binarios habitualmente, pero no es una diferencia esencial con respecto a los de los rrff actuales.
  * Los árboles se construyen sobre una selección aleatoria de variables, como en los rrff. Esta selección de subconjuntos aleatorios de variables es la que recibe el nombre del método del subespacio aleatorio.
  * Los árboles no están _podados_ sino que descienden hasta alcanzar ramas  puras. Es decir, donde todas las observaciones son de la misma clase y no se gana más creando nuevas particiones del espacio.
  * Para predecir, se usa una especie de media de las predicciones de los árboles individuales, que, por lo anterior, son 0 o 1. Es la parte más oscura del artículo.
  * Aunque el modelo, como se ha visto, aleatoriza las variables, no hace lo mismo con las observaciones para controlar el error de sobreajuste.

El método se usa para atacar el problema, muy en boga en la época, del reconocimiento de caracteres  manuscritos y carece de ulteriores pretensiones de generalidad.

¿Se parece a los rrff actuales? Sí y no. Se parece más que, no sé, la regresión logística. Pero le faltan ingredientes fundamentales. Lo señalan los autores de _Random forests: from..._:

>RF is an ensemble learning method used for classification and regression. Developed by Breiman (2001), the method combines Breiman's bagging sampling approach ((1996a), and the random selection of features, introduced independently by Ho (1995); Ho (1998) and Amit and Geman (1997), in order to construct a collection of decision trees with controlled variation.

En lo que yerran, sin embargo, es al decir que

>In another paper by Ho (1998), he proposed a method to solve the dilemma between overfitting and achieving maximum accuracy.

El error es tan serio que podría, según la jurisdicción, ser objeto del interés de la fiscalía y conllevar pena de multa, trabajo comunitario y cursillo de reeducación inopcional porque Ho, Tin Kam Ho en realidad, no es ---¡nada más ni nada menos!--- _he_ sino _she_.

Termino la entrada con tres consideraciones. La primera es que si os invitan a leer el artículo de Ho del 95, no lo hagáis; y si lo hacéis, no os lo creáis. De otro modo, solo desaprenderéis y cuando veáis un rrff de verdad, pensaréis que es un _bug_ con ínfulas.

La segunda es que si queréis leer algo, leed el artículo de Breiman de 2001. Pero tampoco le creáis mucho, sobre todo en la parte en la que conjetura que el _boosting_ (en concreto, Adaboost, que era la variante de la época y que por aquel entonces _funcionaba_ sin que se supiera bien por qué aún) podría ser, en realidad, un rrff construido de una manera subrepticia (para los despistados: hoy sabemos que no, que es otra cosa).

Y la última, que esta entrada la he escrito yo y en el único modo  ---¡qué remedio!--- que aprendí y conozco. Pero qué duda cabe que la volveréis a ver escrita en otra parte y de otra pluma más amena que la adorne con memes semovientes y la desarrolle más al estilo ---tanto en forma como en fondo--- de estos altos y felices tiempos que hemos tenido la fortuna de conocer.