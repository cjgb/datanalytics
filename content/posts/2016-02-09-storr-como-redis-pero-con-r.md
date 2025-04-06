---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2016-02-09 09:13:43+00:00
draft: false
lastmod: '2025-04-06T18:45:14.274559'
related:
- 2011-04-07-nueva-version-de-paquete-colbycol.md
- 2015-01-21-donde-guardar-los-paquetes-de-r-en-linux-al-menos.md
- 2011-03-04-1680.md
- 2011-03-10-r-hdf5-y-bases-de-datos-orientadas-a-columnas.md
- 2010-09-06-tarea-lectores-resultados.md
tags:
- paquetes
- r
- redis
- storr
- cache
title: 'storr: como Redis, pero con R'
url: /2016/02/09/storr-como-redis-pero-con-r/
---

Probablemente no habéis utilizado nunca [Redis](https://en.wikipedia.org/wiki/Redis). Redis es un sistema de almacenamiento basado en parejas clave-valor. Es similar a un [diccionario de Python](https://docs.python.org/2/tutorial/datastructures.html#dictionaries) o a un [entorno en R](https://stat.ethz.ch/R-manual/R-devel/library/base/html/environment.html). Salvo que el almacenamiento es externo al proceso: los datos se guardan en un sistema distribuido y potencialmente ilimitado en cuanto a capacidad.

Si queréis probar algo parecido, además de los diccionarios y los entornos, podéis probar con [`storr` ](https://cran.r-project.org/web/packages/storr/index.html), un paquete reciente de R. Aquí tenéis una minisesión de ejemplo:

{{< highlight R >}}
library(storr)

my.dir <- "/tmp/storr00"
st <- storr::storr_rds(my.dir)

# asigno un objeto a una clave
st$set("miclave", cars)

# recupero el objeto
head(st$get("miclave"))

# lista de objetos
st$list()

st$del("miclave")
{{< / highlight >}}

Es instructivo examinar el directorio en cuestión e inspeccionar los contenidos. Con el _driver_  `rds`, como arriba, el almacenamiento se realiza en disco. De hecho, se realiza en ficheros `.rds`, que tienen un [formato propio de R para almacenar en disco un único objeto serializado](https://stat.ethz.ch/R-manual/R-devel/library/base/html/readRDS.html) (comprimido o no).

Alternativamente, se pueden usar otros motores de almacenamiento. Redis es, de hecho, uno de ellos.

Si queréis probar `storr`, como casi siempre, recomiendo comenzar por las viñetas.