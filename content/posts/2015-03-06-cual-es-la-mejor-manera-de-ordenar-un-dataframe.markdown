---
author: Carlos J. Gil Bellosta
date: 2015-03-06 08:13:04+00:00
draft: false
title: ¿Cuál es la "mejor" manera de ordenar un dataframe?

url: /2015/03/06/cual-es-la-mejor-manera-de-ordenar-un-dataframe/
categories:
- r
tags:
- dplyr
- order
- r
---

El título de esta entrada es una pregunta honesta. Yo siempre he utilizado `order` así:



    iris[order(iris$Petal.Length),]



Y para ordenar por dos (o  más columnas), así:



    iris[order(iris$Petal.Length, iris$Petal.Width),]



Es a lo que estoy acostumbrado. Sin embargo, la construcción anterior desconcierta a quienes dan sus primeros pasos en R. `dplyr` dispone de la función `arrange` con una sintaxis un tanto más natural:



    library(dplyr)
    arrange(iris, Petal.Length, Petal.Width)



pero, de nuevo, puede resultar desconcertante tener que recurrir a paquetes _avanzados_: ¿es conveniente introducir a los principiantes en el proceloso mundo de los paquetes para la simple y muy natural operación de ordenar un _dataframe_?

¿Existe alguna alternativa? Si estuvieseis comenzando con R, ¿preferiríais la vía de `order` o la de `dplyr::arrange`?

