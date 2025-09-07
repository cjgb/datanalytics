---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2010-10-25 22:56:39+00:00
lastmod: '2025-04-06T18:58:22.868188'
related:
- 2020-06-29-sobremuestreando-x-y-no-y.md
- 2021-02-05-separacion-perfecta-en-el-modelo-de-poisson.md
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2014-11-17-los-coeficientes-de-la-regresion-logistica-con-sobremuestreo.md
- 2022-03-03-error-sesgo-modelos-lineales.md
tags:
- estadística
- r
title: Una solución al problema de la separación perfecta con regresiones logísticas
url: /2010/10/25/una-solucion-al-problema-de-la-separacion-perfecta-con-regresiones-logisticas/
---

Cuando el otro día planteé al mis lectores el problema de [cómo representar de manera efectiva un conjunto de datos pequeños](https://datanalytics.com/2010/09/16/representando-graficamente-conjuntos-de-datos-pequenos/), no lo hice de manera enteramente ociosa. Eran datos reales de un cliente que tropezó con el llamado problema de la separación perfecta al intentar aplicar una regresión logística.

Veamos de nuevo los datos:


[![](/wp-uploads/2010/10/base_data.png#center)
](/wp-uploads/2010/10/base_data.png#center)


En la gráfica cada punto representa un individuo (posiblemente una persona). Los grupos los distinguen en dos clases (posiblemente, enfermos y sanos). La variable en el eje de la x mide el nivel de cierta proteína (supongo que en las células de algún tipo de tejido). Si se intenta realizar una regresión logística sobre este conjunto de datos sucede una catástrofe: el algoritmo diverge, aparecen mensajes de error en la pantalla, etc. ¡Es el problema de la separación perfecta!

Es fácil ver por qué ocurre. En los datos se aprecia cómo el nivel de proteína 9 separa los de los dos grupos. Por lo tanto, $latex x_i - 9$ es positivo o negativo según el grupo. De ahí que dado un valor $latex \beta > 0$ lo suficientemente grande, la expresión


$$\beta ( x_i - 9 )$$


puede tomar valores positivos en un grupo y negativos en el otro de valor (absoluto) arbitrariamente elevado. Como en el modelo de regresión logística aproximamos la probabilidad de que un individuo $latex i$ pertenezca a uno de los grupos por (una expresión parecida a)


$$P(i) = \frac{1}{1+ \exp(\beta ( x_i - 9 ) )},$$


basta con tomar un valor del parámetro $latex \beta$ lo suficientemente grande para que dicha probabilidad sea todo lo próxima que se quiera a 1 para los individuos de uno de los grupos y 0 para los del otro. ¡La _solución_ en este caso es $latex +\infty$!

Este problema puede observarse gráficamente en la siguiente animación (que es posible que no esté animada en todos los navegadores):[![](/wp-uploads/2010/10/logistic_regression_approximation.png#center)
](/wp-uploads/2010/10/logistic_regression_approximation.png#center)

En general, la separación perfecta puede ocurrir sobre combinaciones de variables sin que suceda individualmente en ninguna de ellas: basta con que un hiperplano separe perfectamente las observaciones de las dos clases.

Sea como fuere, hay que encontrarle _solución_ a este _problema_ de la separación infinita. Hay que advertir primero que el problema de la separación perfecta **no es un problema**. Es, incluso, deseable. ¡Ojalá siempre nuestros datos fuesen tan conclusivos! (Esto queda dicho sin perjuicio de una regla prácticamente sin excepciones en algunos ámbitos —sobre todo de la investigación social—: si una variable es demasiado buena... seguramente está contaminada de alguna manera por la variable objetivo). He llegado a leer que de darse el problema de la separación perfecta, una posible solución pasa por eliminar la variable implicada. ¡Eliminar la variable más predictiva!

Entre las soluciones que tienen algún sentido, aquélla por la que me decanté cuando me enfrenté al encargo de mi cliente fue la de la regresión logística con la penalización de Firth. Lo hice por varios motivos:



1. El más tonto de todos ellos es que [está publicado](https://pubmed.ncbi.nlm.nih.gov/12210625/). Ya estoy demasiado viejo como para sugerir cosas no publicadas: es una pérdida de tiempo y energía que, además, ni se paga ni se agradece.
2. Está [implementado en R](http://cran.r-project.org/web/packages/logistf/).
3. Tiene cierto sentido y es coherente con toda una corriente de pensamiento muy popular en la disciplina durante los últimos años: que es la de la penalización de los coeficientes (_ridge regression_, _lasso_, etc.).

En esencia, la corrección de Firth es una penalización en el tamaño de los coeficientes: impide que ninguno de ellos crezca ilimitadamente. Pero se comprende mejor desde una óptica bayesiana.

Así, al realizar una regresión logística se busca maximizar la función de verosimilitud $latex L( \beta ) = \log f( x | \beta )$. La modificación de Firth busca el máximo (o moda) de la distribución _a posteriori_ de $latex \beta$ tomando como distribución _a priori_ una distribución no informativa: la llamada [distribución de Jeffrey](http://en.wikipedia.org/wiki/Jeffreys_prior). La distribución a_ posteriori_ de $latex \beta$ es, aplicando el teorema de Bayes, proporcional a


$$f( x | \beta ) J( \beta )$$


Y su logaritmo,


$$\log f( x | \beta ) + \log J( \beta ),$$


que es la función de verosimilitud asociada a la regresión logística habitual más un término que depende únicamente de $latex \beta$.


Basta con que $latex J( \beta )$ sea una función que decrezca lo suficientemente deprisa en su argumento como para que el máximo de la función resultante sea finito. La verdad, nadie sabe muy a las ciertas cómo es $latex J$ (algo de información hay [acá](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2680313/)) en este contexto pero parece que basta para garantizar la finitud.

Es necesario señalar cómo elecciones distintas de la distribución _a priori_ del parámetro $latex \beta$ (¿por qué no $latex N(0, \sigma)$?) puede dar lugar a resultados distintos dependiendo del grado de penalización que implique la distribución de partida. Asintóticamente, tanto da. Pero cuando n es pequeño, al final, p-valores, _odds ratios_, etc. dependen principalmente de la elección de distribución a priori que hizo el Sr. Firth en 1993.