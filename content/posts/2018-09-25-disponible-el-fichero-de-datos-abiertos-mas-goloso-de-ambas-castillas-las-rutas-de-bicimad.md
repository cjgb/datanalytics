---
author: Carlos J. Gil Bellosta
date: 2018-09-25 08:13:27+00:00
draft: false
title: 'Disponible el fichero de datos abiertos más goloso de ambas castillas: las
  rutas de Bicimad'

url: /2018/09/25/disponible-el-fichero-de-datos-abiertos-mas-goloso-de-ambas-castillas-las-rutas-de-bicimad/
categories:
- r
tags:
- bicimad
- datos abiertos
- madrid
- r
---

Albricias, el ayuntamiento de Madrid ha liberado el fichero más goloso de ambas castillas: el de las rutas de usuarios de Bicimad, viaje a viaje, con su estación de origen, estación de destino, tiempo de recorrido, etc. Tiempo os falta para echarle un vistazo y hacer cosas chulas con él.

Los datos están [aquí](http://opendata.emtmadrid.es/Datos-estaticos/Datos-generales-(1)).

Se puede leer con código no muy distinto de este:

{{< highlight R "linenos=true" >}}
library(RJSONIO)

raw <- readLines("201808_Usage_Bicimad.json")
dat <- iconv(raw, "latin1", "utf8")
dat <- sapply(dat, fromJSON)
{{< / highlight >}}

A bote pronto, se me ocurren algunas cosas que se pueden hacer con esos datos:

* Comprobar si la anonimización está bien hecha.
* Ver la distribución de tiempos de recorridos entre pares de estaciones; hacer un ránking de los más rápidos al norte del Manzanares.
* Ver en qué medida las rutas elegidas por los usuarios son complementarias o compiten con el transporte público.

**Notas:**

* Este fichero me ha pillado demasiado ocupado en otros asuntos. No tengáis una vida tan triste como la mía y haced cosas interesantes con ellos.
* El ayuntamiento ha redefinido JSON como JSON con codificación `latin1` en lugar del imperativo `utf-8`. ¡Animalicos!