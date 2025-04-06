---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2011-09-08 07:00:47+00:00
draft: false
lastmod: '2025-04-06T18:59:18.487717'
related:
- 2011-09-06-codigos-de-caracteres-unicode-y-utf-8.md
- 2013-03-04-cortar-una-cadena-por-un-caracter-solo-cuando-no-forme-parte-de-una-subcadena-entrecomillada.md
- 2023-04-20-dejar-morir-pxr.md
- 2012-05-28-desencriptando-ii-la-avaricia-es-mala.md
- 2017-02-20-probando-hunspell-para-el-procesamiento-de-texto-en-espanol.md
tags:
- programación
- r
title: Códigos de caracteres en R
url: /2011/09/08/codigos-de-caracteres-en-r/
---

Esta entrada acompaña y remata para los usuarios de R la que escribí en general sobre los [códigos de caracteres](http://www.datanalytics.com/2011/09/06/codigos-de-caracteres-unicode-y-utf-8/). Es un pequeño experimento en el que comparo lo que pasa al leer un fichero de texto codificado de dos maneras distintas en dos plataformas, Linux y Windows, que usan códigos de caracteres distintos.

Primero creo dos ficheros (en Linux) con el mismo contenido pero codificados de dos maneras distintas, `utf-8` y `latin1`:


{{< highlight bash >}}
$ echo "hóla;adiós" > hola_utf8.txt
$ file hola_utf8.txt
hola_utf8.txt: UTF-8 Unicode text
$ iconv -f utf-8 -t latin1 hola_utf8.txt > hola_latin1.txt
$ file hola_latin1.txt
hola_latin1.txt: ISO-8859 text
{{< / highlight >}}



Los ficheros pueden descargarse [de este enlace](/uploads/hola_encoding.zip).

La codificación interna de caracteres en Linux (al menos, en el mío) es `utf-8`. En Windows no lo tengo tan claro, pero parece que es algo similar a [`latin1`](http://es.wikipedia.org/wiki/ISO_8859-1).

Mi experimento consiste en ejecutar tanto en Linux como en Windows el siguiente código:


{{< highlight R >}}
foo <- function( file, encoding ){
    a <- scan( file, what = "character",
                fileEncoding = encoding )
    strsplit( a, ";" )
}

foo( "hola_latin1.txt", "latin1" )
foo( "hola_latin1.txt", "utf-8" )
foo( "hola_latin1.txt", "" )

foo( "hola_utf8.txt", "latin1" )
foo( "hola_utf8.txt", "utf-8" )
foo( "hola_utf8.txt", "" )
{{< / highlight >}}


El motivo de usar `strsplit` es que es una función que puede fallar catastróficamente cuando encuentra caracteres codificados incorrectamente (desde el punto de vista de la codificación de la plataforma en la que se ejecuta).

La primera y la quinta llamada funcionan correctamente tanto en Linux como en Windows: a la función `scan` se le ha especificado la codificación correcta del fichero y lo ha transformado adecuadamente.

Las llamadas segunda y cuarta fallan en ambos sistemas: equivale a engañar a R y es natural que los resultados sean... subóptimos.

Las llamadas tercera y sexta son más interesantes: en Linux falla tercera y funciona la sexta; en Windows ocurre lo contrario. El motivo es que si no se especifica la codificación, R asume que es la _natural_ del sistema (aunque supongo que se podrá configurar de alguna manera, algo en lo que no entro). Es decir, en Linux no especificar la codificación equivale a asumir `utf-8` y en Windows, `latin1`.

Este es un detalle a tener en cuenta por quienes aspiran a desarrollar código _portable_, es decir, que puede ser usado por cualquiera y en cualquier plataforma para leer archivos de texto.

**Nota:** este experimento tiene que ver con el desarrollo del [paquete pxR](http://www.datanalytics.com/2011/07/28/el-paquete-pxr-en-cran/), que debería ser capaz de leer ficheros (y ejecutar `strsplit` sobre sus cadenas, entre otras funciones) en la plataforma de elección de sus usuarios (y sobre la que los autores no tenemos control). Aparentemente, los ficheros PC-Axis que queremos leer en R, según la documentación oficial, están en codificados en _formato Windows_.

Nuestra actual implementación está basada en ideas extraidas del experimento anterior. Si alguien ve un error en las conclusiones (o conoce una manera más adecuada para garantizar la _portabilidad_), le rogaría que se pusiese en contacto conmigo para trasladarla al código.