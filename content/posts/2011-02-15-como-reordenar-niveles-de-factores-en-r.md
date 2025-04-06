---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2011-02-15 02:10:57+00:00
draft: false
lastmod: '2025-04-06T19:11:11.395641'
related:
- 2012-08-01-reetiquetar-factores-en-r.md
- 2015-03-06-cual-es-la-mejor-manera-de-ordenar-un-dataframe.md
- 2019-08-07-mas-sobre-factores-strings-y-ordenacion.md
- 2019-08-06-hagan-sus-apuestas-luego-corran-el-siguiente-codigo.md
- 2017-01-10-repensando-la-codificacion-por-impacto.md
tags:
- r
- programación
title: Cómo reordenar niveles de factores en R
url: /2011/02/15/como-reordenar-niveles-de-factores-en-r/
---

En esta entrada voy a mostrar tres maneras (que vienen a ser la misma) de ordenar los niveles de un factor en R:

1. La básica
2. La sofisticada
3. El atajo

Antes, responderé a una pregunta: ¿por qué reordenar niveles en factores? La mejor respuesta que se me ocurre: si no la sabes, deja de leer ya. Te aseguro que, a poco que trabajes con R, acabarás retomando la lectura.

La forma básica es la siguiente:


{{< highlight R >}}
# creamos un factor con tres niveles, a, b y c
mi.factor <-factor(sample(letters[1:3], 20, replace = T))
levels(mi.factor)    # a, b, c

# preferimos la ordenación b, c, a

mi.factor <-factor(mi.factor, levels = levels(mi.factor)[c(2,3,1)])
levels(mi.factor)     # b, c, a
{{< / highlight >}}


Es manual y hay que _fabricar_ a mano la permutación de los índices.

La forma sofisticada puede emplearse cuando la permutación puede definirse mediante una función. Por ejemplo, para ordenarlos alfabéticamente, puede hacerse


{{< highlight R >}}
mi.factor <-factor(mi.factor, levels = sort(levels(mi.factor)))
levels(mi.factor)    # a, b, c
{{< / highlight >}}


o también, de una manera algo más general, esto otro:


{{< highlight R >}}
mi.factor <-factor(mi.factor, levels = levels(mi.factor)[order(levels(mi.factor))])
levels(mi.factor)    # a, b, c
{{< / highlight >}}


El orden puede determinarlo otra variable. Por ejemplo, en el pedazo de código siguiente, queremos ordenar los niveles del factor según el máximo de los valores correspondientes de un vector numérico de la misma longitud:


{{< highlight R >}}
mis.valores <- runif(20)
tmp <- tapply(mis.valores, mi.factor, max)
mi.factor <-factor(mi.factor, levels = levels(mi.factor)[order(tmp)])
{{< / highlight >}}


Para este último tipo de transformaciones (muy frecuente para ordenar gráficos) existe un atajo, la función reorder:


{{< highlight R >}}
mis.valores <- runif(20)
mi.factor <- reorder(mi.factor, mis.valores, max)
{{< / highlight >}}


¡Es muy instructivo consultar su código fuente!