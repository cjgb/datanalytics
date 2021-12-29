---
author: Carlos J. Gil Bellosta
date: 2013-03-04 07:31:46+00:00
draft: false
title: Cortar una cadena por un caracter solo cuando no forme parte de una subcadena
  entrecomillada

url: /2013/03/04/cortar-una-cadena-por-un-caracter-solo-cuando-no-forme-parte-de-una-subcadena-entrecomillada/
categories:
- r
tags:
- programación
- r
- texto
---

Algunos usuarios del [paquete pxR](http://pxr.r-forge.r-project.org/) han avisado de un error de implementación. Según las especificaciones del [formato de datos PC-Axis](http://www.scb.se/upload/PC-Axis/Support/Documents/PC-Axis_fileformat.pdf), las líneas de ese tipo de ficheros acaban en punto y coma (y no necesariamente en un salto de línea).

Así que era natural leer los ficheros íntegramente, concatenar sus _líneas físicas_ y luego partirlas usando `strsplit` para obtener las _líneas lógicas_.

Sin embargo, ciertos ficheros contienen descripciones (entrecomilladas) que contienen puntos y comas. Y eso produce caos.

El problema planteado consiste entonces en partir una cadena por un determinado caracter (punto y coma en nuestro caso) solo cuando no forme parte de una subcadena entrecomillada. Lancé la pregunta en [r-help-es](https://stat.ethz.ch/pipermail/r-help-es/2013-February/005555.html) y obtuve algunas respuestas desiguales. La más próxima a la respuesta que quería era la de Francisco Viciana que funcionaba... excepto cuando en la cadena había caracteres no ASCII (o _multibyte_) por alguna razón técnica que se me escapa.

Así que me manché las manos y he aquí la solución con la que vine a dar:

{{< highlight R "linenos=true" >}}
library(stringr)

a <- '1,2,"algo;todo"; 3,"¿cósa"; 4,2,3,7;'

punto.coma <- str_locate_all(a, ";")[[1]][,1]
comillas <- str_locate_all(a, '"')[[1]][,1]

cortes <- Filter(function(x) sum(comillas < x) %% 2 == 0, punto.coma)

inicios <- c(1, cortes + 1)
finales <- c(cortes - 1, str_length(a))

str_sub(a, inicios, finales)
{{< / highlight >}}

El quid reside en la llamada a `Filter`, que selecciona solo aquellas posiciones en las que hay puntos y comas que no están precedidas por un número impar de comillas. El [paquete stringr](http://journal.r-project.org/archive/2010-2/RJournal_2010-2_Wickham.pdf) resulta instrumental: proporciona recursos para procesar cadenas de texto no disponibles de una manera tan limpia y escueta entre las básicas de R.
