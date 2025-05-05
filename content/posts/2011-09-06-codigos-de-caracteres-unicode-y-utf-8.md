---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2011-09-06 07:00:44+00:00
draft: false
lastmod: '2025-04-06T18:48:49.650758'
related:
- 2011-09-08-codigos-de-caracteres-en-r.md
- 2012-05-28-desencriptando-ii-la-avaricia-es-mala.md
- 2023-04-20-dejar-morir-pxr.md
- 2011-04-01-a-esa-gente-le-habia-hecho-falta-un-matematico.md
- 2017-04-05-etsa-es-una-edntara-a-pubrea-de-roreetcs-cnctoaumes.md
tags:
- programación
- r
- unicode
title: Códigos de caracteres, unicode y UTF-8
url: /2011/09/06/codigos-de-caracteres-unicode-y-utf-8/
---

Unos quebraderos de cabeza en el desarrollo del [paquete pxR](https://datanalytics.com/2011/07/28/el-paquete-pxr-en-cran/) concernientes a los distintos códigos de caracteres en que hay que transfomar los datos me han obligado a profundizar en este enojoso asunto.

En el principio, todo era felicidad. Existía el código ASCII que establecía una correspondencia entre caracteres, números y su representación binaria. Así, a la letra b le correspondía el número 98 cuya codificación binaria es el _byte_ `01100010`.

Felicidad que se interrumpió cuando algún ortógrafo quiso utilizar eñes y acentos. Y algún tailandés a escribir su nombre como había aprendido en la escuela. Etc. De ahí surgió el caos de los múltiples sistemas y codificaciones: que si el [ISO-8859-1](http://es.wikipedia.org/wiki/ISO_8859-1), que si el [KOI 8](http://es.wikipedia.org/wiki/KOI_8), que si el de IBM, que si el de Microsoft,... todos ellos intentos de codificar distintos codificar distintos caracteres usando las 256 combinaciones que permiten los 8 _bits_ de un _byte_ mediante funciones biyectivas



$$f_i: C_i \longleftrightarrow B_1$$


entre $latex B_1$, el conjunto de los distintos _bytes_ (números del 0 al 255), y diversos conjuntos de caracteres ($latex C_1$ pueden ser los latinos, $latex C_2$ los rusos, etc.).

Y del caos surgió la luz y el orden, una función biyectiva




$$C = \bigcup_i C_i \longleftrightarrow N = \{0, \dots, 1114112\}$$



llamada [Unicode](http://es.wikipedia.org/wiki/Unicode) entre todos los caracteres _del mundo mundial_ y los números hasta el 1.114.112. Esta función hace corresponder el número 88 a "X" y 241 a "ñ", por ejemplo.

Para tener una representación binaria de un caracter, sin embargo, es necesaria otra función. Y no una función _trivial_: si este tinglado lo hubiese montado [un gañán](https://datanalytics.com/2011/04/01/a-esa-gente-le-habia-hecho-falta-un-matematico/), harían falta tres _bytes_ por caracter, con lo que el tamaño de los ficheros de texto se multiplicaría automáticamente.

La solución pasa por seleccionar inteligentemente la función entre el conjunto $latex N$ y determinadas sucesiones de _bytes_. Una de las funciones propuestas se llama [UTF-8](http://es.wikipedia.org/wiki/UTF-8), que tiene la peculiaridad de que asigna los números correspondientes a los caracteres más usados a secuencias de ocho _bits_ (un _byte_) y a los menos usados, secuencias de dos, tres y hasta cuatro de ellos.

Así, usando dicha función, la "X" ocupa un único _byte_, pero "ñ" ocupa dos. Y supongo que los caracteres chinos ocuparán dos o tres.

Este es el motivo por el que cuando alguien intenta leer un fichero codificado con UTF-8 como si tuviese una codificación que asume una relación directa entre caracteres y _bytes_, obtiene los famosos _caracteres raros_ en lugar de sus acentos, eñes y demás.

Han sido muchos los años en que nos hemos dejado arrastrar por la inercia _un byte, un caracter (aunque no tenemos ni idea de cuál)_. Ahora la hemos sustituido por la composición de dos funciones, Unicode y UTF-8 que, gracias a Dios, están bien pensadas.