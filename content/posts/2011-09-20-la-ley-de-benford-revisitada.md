---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2011-09-20 07:11:53+00:00
draft: false
lastmod: '2025-04-06T19:07:44.348661'
related:
- 2011-09-15-la-ley-de-benford.md
- 2020-11-16-que-numeros-admiten-la-distribucion-de-benford.md
- 2010-08-17-una-tarea-para-mis-lectores.md
- 2020-01-29-x.md
- 2013-05-10-mas-sobre-la-ley-de-benford-iii-la-magica-propiedad-de-los-logaritmos-decimales.md
tags:
- estadística
- ley de benford
- r
title: La ley de Benford, revisitada
url: /2011/09/20/la-ley-de-benford-revisitada/
---

Revisito mi artículo sobre la [ley de Benford](https://datanalytics.com/2011/09/15/la-ley-de-benford) no tanto por hacer mención a las entradas [una](http://www.grserrano.es/wp/2010/10/ejemplo-r-ley-de-benford/), [dos](http://www.grserrano.es/wp/2010/11/ejemplo-r-ley-de-benford-en-las-elecciones-catalanas-1/) y [tres](http://www.grserrano.es/wp/2010/11/ejemplo-r-ley-de-benford-en-las-elecciones-catalanas-2/) que hizo Gregorio Serrano en su bitácora ni al [oportunísimo artículo de The Guardian](http://www.guardian.co.uk/commentisfree/2011/sep/16/bad-science-dodgy-stats?CMP=twt_gu) al respecto. Ni siquiera para mencionar la existencia de este sesudo [artículo sobre el tema](http://econpapers.repec.org/article/blagermec/v_3a10_3ay_3a2009_3ai_3a_3ap_3a339-351.htm).

Lo hago porque me pliego a la demanda popular: voy a explicar con más detalle el código que dejé allí escrito y que, por referencia, es


{{< highlight R >}}
benford <- function( foo, ..., n = 100000 ){
  tmp <- foo( n, ... )
  tmp <- as.character( tmp[ tmp > 0] )
  tmp <- strsplit( tmp, "" )

  leading.digit <- function( x )
    x[ ! x %in% c( "0", "." )][1]

  tmp <- unlist( lapply( tmp, leading.digit ) )
  100 * table( tmp ) / length( tmp )
}

benford( rcauchy )
benford( rexp, rate = 2 )
benford( rexp, rate = 5 )
benford( rnorm, sd = 40 )
benford( rweibull, shape = 1 )
{{< / highlight >}}


Puede llamar la atención que el primer argumento de la función `benford` sea, precisamente, otra función. Nada del otro mundo. El siguiente es un ejemplo en el que se muestra el uso aislado para una mejor comprensión:


{{< highlight R >}}
funcion.que.llama <- function( foo, ... ){
  foo(...)
}

funcion.que.llama( sin, 2*pi )
funcion.que.llama( plot, iris, main = "Hola" )
{{< / highlight >}}


La función `funcion.que.llama` recibe una función como argumento. También recibe argumentos adicionales arbitrarios (eso es lo que significa `...`). Dentro, además de llamar a la función elegida, le pasa los argumentos adicionales contenidos en `...`. Es su uso más habitual, según el [documento que define R](http://cran.r-project.org/doc/manuals/R-lang.html).

Después uso las funciones `as.character` (para convertir el número en una cadena de texto) y `strsplit`, función análoga a la que existe en otros lenguajes. Su particularidad en R es que, aplicada a un vector de caracteres, devuelve una lista de la misma longitud que el vector original. No hay más que saber sobre dicha función que entender cuál es la salida de


{{< highlight R >}}
strsplit( c("Hola", "caracola"), "l")
{{< / highlight >}}


Como `strsplit` devuelve una lista, resulta conveniente utilizar `lapply` para recorrerla y extraer de cada componente el primer caracter. La lógica de lo que se quiere hacer en cada componente está encapsulada en la función de usar y tirar `leading.digit`.

Finalmente, como `lapply` devuelve una lista, utilizo `unlist` para convertirla en una estructura más simple, un vector de `characters` sobre el que utilizo la función `table` para calcular las frecuencias.

En resumen, llamo a las funciones `as.character`, `strsplit` y `table` porque sirven para mis fines: aportan el contenido semántico. Las llamadas a `lapply` y `unlist` no tienen otro objeto que facilitar la manipulación de los objetos que devuelven las anteriores. Son, si se quiere decir así, _pegamento sintáctico_.