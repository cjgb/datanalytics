---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2010-06-16 23:37:02+00:00
lastmod: '2025-04-06T18:45:35.728295'
related:
- 2014-03-07-victoria-o-diferencia-de-puntos-ahora-con-random-forests.md
- 2022-06-07-generalized-random-forests.md
- 2024-02-01-optimizacion-generalizacion.md
- 2021-10-07-como-aleatorizan-las-columnas-los-rrff-un-experimento-mental-y-una-coda-historica.md
- 2015-11-13-gam.md
tags:
- algoritmos genéticos
- ciencia de datos
- r
- random forests
title: Algoritmos genéticos para la caracterización de máximos en random forests
url: /2010/06/16/algoritmos-geneticos-para-la-caracterizacion-de-maximos-en-random-forests/
---

En minería de datos se buscan modelos que permitan hacer predicciones acerca del comportamiento de los sujetos del estudio. Pero, típicamente, cuanto más complejas son las técnicas, menos intuición ofrecen acerca del porqué de la predicción, pierden inteligibilidad. Existe una omnipresente tensión entre inteligibilidad (una propiedad altamente deseable, incluso, en ocasiones, por requisito legal) y precisión.

Un modelo puede resumir mejor o peor una colección enorme de observaciones, pero en ocasiones los mismos modelos son demasiado complejos o herméticos como para ofrecer una interpretación plausible de los datos: ¿qué caracteriza a las observaciones para las que mi modelo predice los valores más altos (o bajos)?

Uno de los tipos de modelos más crípticos es el de los _[random forests](http://en.wikipedia.org/wiki/Random_forest)_. Lo puedes ajustar, lo puedes aplicar sobre datos nuevos, pero no vas a llegar jamás a aprehenderlo propiamente. ¿Cómo podemos caracterizar, pues, por ejemplo, las observaciones para las que un random forest precide los valores máximos?

Una [reciente pregunta en la lista de correo de R en español](https://stat.ethz.ch/pipermail/r-help-es/2010-June/001048.html), imagino, fue motivada por este tipo de cuestiones (aunque se centrase en los detalles técnicos). Pero he creído relevante traer acá la discusión y comenzar, pues, construyendo uno de tales modelos. Tomaremos el más simple, que es el que viene en los ejemplos con una manipulación mínima:

{{< highlight R >}}
library(randomForest)
ozone.rf <- randomForest(Ozone ~ Solar.R + Wind + Temp,
    data=airquality, mtry=3, na.action=na.omit)
{{< / highlight >}}

Ya tenemos pues nuestro modelo. Con datos de nivel de contaminación, radiación solar, viento y temperatura medidas en el sitio y tiempo que averiguará quien consulte la ayuda del conjunto de datos `airquality` en R, se crea un modelo que trata de predecir la primera en función de los valores de las otras tres variables. Sobre él podemos, por ejemplo, realizar predicciones:

{{< highlight R >}}
new.data = data.frame( Solar.R = 150, Wind = 30, Temp = 60 )
predict( ozone.rf, newdata = new.data )
{{< / highlight >}}

Sin embargo, el modelo no tiene coeficientes ni forma funcional alguna que se pueda examinar de manera simple. ¿Bajo qué condiciones son, por ejemplo, menores los índices de contaminación? Hay maneras de averiguarlo pero una que he explorado por contestar a una pregunta aparecida en r-help-es es la siguiente: usar algoritmos genéticos para encontrar los extremos de la función de predicción.

Para eso definimos primero la función

{{< highlight R >}}
evaluate <- function( x )
    predict(ozone.rf,
            newdata = data.frame(Solar.R = x[1], Wind = x[2], Temp = x[3]))
{{< / highlight  >}}

y llamamos a la función rbga del paquete genalg:

{{< highlight R >}}
library(genalg)
rbga.results <- rbga(
    c(0, 0, 50),
    c(350, 20, 100),
    evalFunc=evaluate,
    mutationChance=0.01)
{{< / highlight >}}

Sus dos primeros parámetros son vectores de longitud igual a la del número de variables que admite el modelo que indican, una a una, su rango inferior y superior de variación. Así, se fuerza a que la velocidad del vientosolo pueda tomar valores entre 0 y 20 (a saber en qué prehistóricas unidades). El parámetro evalFunc es la función que se quiere minimizar. Existen otros parámetros adicionales que no utilizo, tales como monitorFunc o verbose, que generan información sobre el proceso de detección de los mínimos.

Se puede ver cómo ha ido convergiendo el proceso de minimización:


[![](/img/2010/06/minimizacion.png#center)
](/img/2010/06/minimizacion.png#center)


Y después, finalmente, ver gráficamente los resultados:


[![](/img/2010/06/resultados.png#center)
](/img/2010/06/resultados.png#center)