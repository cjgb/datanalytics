---
author: Carlos J. Gil Bellosta
categories:
- nlp
- r
date: 2011-12-13 07:23:56+00:00
draft: false
lastmod: '2025-04-06T18:45:29.027235'
related:
- 2012-01-05-un-lematizador-para-el-espanol-con-r-ii.md
- 2017-02-20-probando-hunspell-para-el-procesamiento-de-texto-en-espanol.md
- 2013-05-13-charla-un-lematizador-probabilistico-con-r.md
- 2012-05-28-desencriptando-ii-la-avaricia-es-mala.md
- 2017-04-05-etsa-es-una-edntara-a-pubrea-de-roreetcs-cnctoaumes.md
tags:
- lematizador
- nlp
- r
title: Un lematizador para el español con R... ¿cutre? ¿mejorable?
url: /2011/12/13/un-lematizador-para-el-espanol-con-r-cutre-mejorable/
---

Uno de los pasos previos para realizar lo que se viene llamando _minería de texto_ es [lematizar](http://es.wikipedia.org/wiki/Lematizaci%C3%B3n) el texto. Desafortunadamente, no existen buenos lematizadores en español. Al menos, buenos lematizadores libres.

Existen el llamado [algoritmo de porter](http://telemat.det.unifi.it/book/2001/wchange/download/stem_porter.html) y [snowball](http://snowball.tartarus.org/) pero, o son demasiado crudos o están más pensados para un lenguaje con muchas menos variantes morfológicas que el español.

Sinceramente, no sé a qué se dedican —me consta que los hay— los lingüistas computacionales de la hispanidad entera: ¿no son capaces de liberar una herramienta de lematización medianamente decente que podamos usar los demás? Lo más parecido a esa herramienta aparentemente inexistente que conozco es [Grampal](http://cartago.lllf.uam.es/grampal/grampal.cgi), que funciona a través de una interfaz _web_.

Y me ha servido para construir un lematizador rudimentario y francamente perfectible:


{{< highlight R >}}
require(XML)

lematiza <- function(frase){
    palabra <- gsub( " ", "+", frase )
    base.url <- paste(
                "http://cartago.lllf.uam.es/grampal/grampal.cgi?m=etiqueta&e=",
                palabra, sep = "" )
    tmp <- readLines( base.url, encoding = 'utf8' )
    tmp <- iconv( tmp, "utf-8" )
    tmp <- gsub("&nbsp;", " ", tmp)
    tmp <- readHTMLTable( tmp )
    tmp <- as.character(tmp[[1]]$V3)
    tmp <- do.call(rbind, strsplit( tmp, " "))[,4]
    tmp
}
{{< / highlight >}}


Con él, desde R,


{{< highlight R >}}
> lematiza( "des" )
[1] "DAR"
> lematiza( "anduve" )
[1] "ANDAR"
> lematiza( "casitas" )
[1] "CASITA"
> lematiza( "comimos" )
[1] "COMER"
> lematiza( "queremos comer patatas" )
[1] "QUERER" "COMER"  "PATATA"
{{< / highlight >}}


No es rapidísimo, debería mejorar el tratamiento de la [codificación](https://datanalytics.com/2011/09/06/codigos-de-caracteres-unicode-y-utf-8/) y muchas cosas más.

¿Se anima a mejorarlo alguno de mis lectores?