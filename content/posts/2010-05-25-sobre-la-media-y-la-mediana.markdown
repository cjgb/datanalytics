---
author: Carlos J. Gil Bellosta
date: 2010-05-25 19:37:59+00:00
draft: false
title: Sobre la media y la mediana

url: /2010/05/25/sobre-la-media-y-la-mediana/
categories:
- estadística
tags:
- estadística
- media
- mediana
---

Esta entrada viene a cuento de una discusión en un grupo de [Linkedin](http://www.linkedin.com). Alguien preguntó literalmente:


>Mean as an estimator of parameter in case of non-normal/skewed distribution?
>My question is a bit tricky :)
>What could be the arguments for mean (simple no-weighted average) when the parameter distribution is non-normal?


Supongo que mis lectores habrán advertido que la pregunta está mal formulada. Alguien la reescribió en términos más precisos (aunque distintos) de la siguiente manera:


>"The Question" should have been asked in the form: "What are the arguments in favor of the sample mean as an estimator of the population mean when the population distribution is non-normal?"


El sentido cambia considerablemente: ya no se pide estimar un parámetro genérico sino uno concreto, el de la media de la población.

La discusión fue larga, con muchos puntos de vista contrastados, y derivó en consideraciones que exceden el ámbito de la pregunta original y que tienen más que ver con esa fijación que se tiene por la media como suma y compendio de todas las cosas habidas y por haber en estadística.

Personalmente, no me gusta la media. Puede ser que la media muestral sea un estimador centrado y consistente de la media poblacional. Puede ser que se trate del estimador insesgado de mínima varianza de dicho parámetro en algunos contextos.

Eso no lo discuto.

Lo que discuto es que:

1. La media, la media poblacional, es, en muchas situaciones, un parámetro irrelevante (a pesar de su importancia en situaciones irreales).
2. La media poblacional, en muchas situaciones reales, no es un parámetro interpretable, no tiene ningún sentido.
3. Cuando se habla de media poblacional, muchas veces, lo que realmente se desea estimar es otra cosa: una medida de centralidad, una estimación del total, etc.
4. A pesar de su utilidad en ciertos contextos concretos, es un parámetro del que se abusa.

En los primeros tres argumentos me explayaré otro día. Me gustaría referirme al cuarto por hacer referencia a [una entrada anterior](http://datanalytics.wordpress.com/2010/05/23/la-distribucion-normal-y-el-borracho-que-perdio-sus-llaves/). Analicemos para ello uno de los comentarios de la discusión mencionada más arriba:


>The mean (or conditional mean, if you have explanatory variables) minimizes the mean squared error. From the stan[d]point of statistical decision theory, you should use the mean as your "best guess" for a random variable if your loss function is the squared error. You should use the median if your loss function is the absolute error. These results do not depend on the distribution of values, but only on the loss function.


¡La media minimiza el error cuadrático medio! Cierto, por supuesto. Cuando se busca un parámetro que ofrezca una medida de "centralidad" y se utiliza como medida del error la suma de cuadrados de los errores, eso nadie lo discute, la solución es la media. Pero... ¿por qué usar el error cuadrático? ¿Por qué se recurre a él casi por defecto?

Porque es el que aparece de manera natural cuando las distribuciones subyacentes son... normales.

Además, es fácil de calcular y admite tratamiento analítico (tiene derivadas continuas, etc.). Pero no debería ser universalmente recetado como método ''urbi et orbi''. Porque, por ejemplo,

{{< highlight R "linenos=true" >}}
mean.cauchy <- replicate( 100, mean( rcauchy( 1000 ) ) )
mean( mean.cauchy )     # 2.9944
sd( mean.cauchy )       # 30.097
median.cauchy <- replicate( 100, median( rcauchy( 1000 ) ) )
mean( median.cauchy )   # 0.0011333
sd( median.cauchy )     # 0.040941
{{< / highlight >}}

La mediana es mucho más eficiente a la hora de detectar el centro de una distribución de Cauchy. La situación cambia cuando los datos son normales, cierto, pero la ventaja de la media es marginal (del orden del 50%). Y no sé si alguno de mis lectores conocerá algún resultado (de existir) acerca de cuál es la distribución simétrica para la que la eficiencia de la media con respecto a la mediana es máxima.

Errores cuadráticos, tufillo de distribución normal, medias poblacionales, resultados analíticos,... ¡puro periodo de entreguerras!
