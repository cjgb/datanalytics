---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2016-06-30 08:13:41+00:00
draft: false
lastmod: '2025-04-06T18:47:09.066361'
related:
- 2016-07-04-gestion-de-la-mendacidad-encuestoelectoral-los-numeros.md
- 2016-09-26-encuestas-electorales-una-propuesta.md
- 2022-05-10-encuestas-electorales-cualitativas.md
- 2016-06-29-por-una-vez-accedo-a-hablar-de-algo-de-lo-que-no-se.md
- 2020-12-14-encuestas-electorales-medios-y-sesgos.md
tags:
- encuestas
- estadística
- encuestas electorales
title: Gestión de la mendacidad encuestoelectoral
url: /2016/06/30/gestion-de-la-mendacidad-encuestoelectoral/
---

Lo de que la gente que miente al ser encuestada se ha esgrimido frecuentemente en los últimos días. Inspirado en [esto](https://datanalytics.com/2016/01/22/analisis-estadistico-de-respuestas-ocultas-en-encuestas/), se me ha ocurrido (posiblemente reocurrido: es fácil que la idea sea conocida, sobre todo si resulta ser buena) el siguiente procedimiento para la realización de encuestas electorales.

* El encuestador va provisto de una colección de cartulinas en las que aparecen parejas de nombres de partidos políticos.
* El encuestador muestra al encuestado una cartulina al azar dentro de su colección.
* El encuestador pregunta al encuestado si ha votado (o piensa votar) a alguno de ellos.
* Se registran los partidos mostrados y la respuesta, positiva o negativa, del encuestado.


Con una versión del procedimiento que describo en la entrada que enlazo más arriba, se podrían redescubrir las opciones de la población subyacente, aun ignorando el de cada uno de los encuestados. No sé cuál sería (si no se me adelanta nadie, igual la hago yo) el procedimiento, pero seguro que no es tan complicado como para que Stan no pueda con ello.

Luego se puede analizar a partir de qué tasa de ocultación vale la pena implementar este procediento y el resto de las concomitancias habituales.