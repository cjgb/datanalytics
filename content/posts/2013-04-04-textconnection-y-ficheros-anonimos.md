---
author: Carlos J. Gil Bellosta
date: 2013-04-04 07:48:59+00:00
draft: false
title: 'textConnection y ficheros anónimos: cuestión de rendimiento'

url: /2013/04/04/textconnection-y-ficheros-anonimos/
categories:
- r
tags:
- programación
- r
---

La función `textConnection `de R es útil para leer el contenido de una variable como si fuese un fichero de texto. Verbigracia,

{{< highlight R >}}
zz <- textConnection(LETTERS)
readLines(zz, 2)
{{< / highlight >}}

Pero cuando uno hace

{{< highlight R >}}
?textConnection
{{< / highlight >}}

y lee con detenimiento, encuentra la siguiente nota:

>As output text connections keep the character vector up to date line-by-line, they are relatively expensive to use, and it is often better to use an anonymous file() connection to collect output.

Vamos, que desaconseja usar dicha función por motivos de rendimiento cuando no vayan a usarse todas las sus características de las que `file` carece. Pero, ¿será cierto que el rendimiento es tan malo? Y de serlo, ¿cómo usar `file`?

Veámoslo:

{{< highlight R >}}
quijote <- readLines(
  "http://www.gutenberg.org/cache/epub/2000/pg2000.txt",
  encoding = "UTF-8")

tc.io <- function(texto){
  zz <- textConnection(texto)
  readLines(zz)
}

system.time(tmp <- tc.io(quijote))

#user  system elapsed
#13.92    0.00   13.92

file.io <- function(texto){
  zz <- file()
  cat(texto, file = zz, sep = "\n")
  tmp <- readLines(zz)
  close(zz)
  tmp
}


system.time(tmp <- file.io(quijote))

#user  system elapsed
#0.31    0.09    0.41
{{< / highlight >}}


