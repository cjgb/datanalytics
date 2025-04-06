---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2015-03-06 08:13:04+00:00
draft: false
lastmod: '2025-04-06T18:52:13.395078'
related:
- 2011-02-15-como-reordenar-niveles-de-factores-en-r.md
- 2019-08-07-mas-sobre-factores-strings-y-ordenacion.md
- 2014-09-24-plyr-dplyr-data-table-que-opinas.md
- 2016-07-12-dos-nuevos-tutoriales-sobre-data-table-y-dplyr.md
- 2014-03-25-totales-agregados-por-bloques-en-tablas.md
tags:
- dplyr
- order
- r
title: ¿Cuál es la "mejor" manera de ordenar un dataframe?
url: /2015/03/06/cual-es-la-mejor-manera-de-ordenar-un-dataframe/
---

El título de esta entrada es una pregunta honesta. Yo siempre he utilizado `order` así:

{{< highlight R >}}
    iris[order(iris$Petal.Length),]
{{< / highlight >}}

Y para ordenar por dos (o  más columnas), así:

{{< highlight R >}}
    iris[order(iris$Petal.Length, iris$Petal.Width),]
{{< / highlight >}}

Es a lo que estoy acostumbrado. Sin embargo, la construcción anterior desconcierta a quienes dan sus primeros pasos en R. `dplyr` dispone de la función `arrange` con una sintaxis un tanto más natural:

{{< highlight R >}}
    library(dplyr)
    arrange(iris, Petal.Length, Petal.Width)
{{< / highlight >}}

pero, de nuevo, puede resultar desconcertante tener que recurrir a paquetes _avanzados_: ¿es conveniente introducir a los principiantes en el proceloso mundo de los paquetes para la simple y muy natural operación de ordenar un _dataframe_?

¿Existe alguna alternativa? Si estuvieseis comenzando con R, ¿preferiríais la vía de `order` o la de `dplyr::arrange`?