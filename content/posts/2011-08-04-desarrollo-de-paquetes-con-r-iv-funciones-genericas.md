---
author: Carlos J. Gil Bellosta
date: 2011-08-04 07:26:52+00:00
draft: false
title: 'Desarrollo de paquetes con R (IV): funciones genéricas'

url: /2011/08/04/desarrollo-de-paquetes-con-r-iv-funciones-genericas/
categories:
- r
tags:
- r
- paquetes
- programación
---

La función `plot` es genérica. Uno puede aplicársela a un `data.frame` o a un objeto de la clase `lm`. Y en el fondo, `plot` sólo elige cuál de sus _métodos_, es decir, las funciones que realizan el trabajo verdaderamente, aplicar. Para ver cuáles son los métodos asociados a `plot` basta con ejecutar en R







{{< highlight R "linenos=true" >}}
methods(plot)
{{< / highlight >}}







La salida es autoexplicativa.

Podemos hacer un pequeño experimento creando una función genérica, `foo`, bastante tonta:







{{< highlight R "linenos=true" >}}
    foo <- function( x ) UseMethod( "foo", x )
    foo.data.frame <- function( x ) plot( x )
    foo.integer <- function( x ) sum( x )
    foo.default <- function( x ) print( "Bu!" )

    foo( iris )
    foo( 1:7 )
    foo( "hola" )
{{< / highlight >}}







También es posible crear nuevos métodos para funciones genéricas existentes. Por ejemplo,







{{< highlight R "linenos=true" >}}
plot.hola.hola <- function( x ) print( "caracola" )
a <- list()
class( a ) <- "hola.hola"
plot( a )
{{< / highlight >}}







Así, el comportamiento de la función `foo` depende de la clase del objeto que se le pasa como argumento.

Las cosas se vuelven mínimamente más complicadas cuando uno quiere:



* crear funciones genéricas en un paquete o
* crear métodos en un paquete para funciones genéricas externas (por ejemplo, plot).

Un problema que tocaremos, tal vez, otro día, es el de crear un método para una función externa no genérica.

Así las cosas, durante el desarrollo del paquete pxR vimos la conveniencia de poder convertir tanto `arrays` como `data.frames` en objetos `px` (que representan ficheros con formato PC-Axis). Podíamos definir funciones normales `as.px.array` y `as.px.data.frame`, por ejemplo. Pero eso supondría duplicar código. Las funciones genéricas proporcionan una solución elegante.

En `pxR` definimos la función genérica `as.px` que pudiera aplicarse a varios tipos de datos. En su versión más simple, el procedimiento necesario se describe a continuación.

En primer lugar, **crear la función genérica**. Por ejemplo,







{{< highlight R "linenos=true" >}}
as.px <- function ( x, ... ){
    UseMethod( "as.px", x )
}
{{< / highlight >}}







Es fundamental que una función genérica tenga `...` como argumento: sus métodos pueden querer utilizar argumentos adicionales.

Después se pueden **crear los métodos necesarios**. Por ejemplo, en nuestro caso, creamos `as.px.array`, cuya signatura (a fecha de hoy) es







{{< highlight R "linenos=true" >}}
as.px.array  <- function (x, skeleton.px = NULL, list.keys = NULL  )
{{< / highlight >}}







que es una extensión de la de `as.px` (no lo sería si su primer argumento fuese `y`, por ejemplo).

También hay que **exportar todas las funciones** anteriores usando el fichero `NAMESPACE `del paquete.

El único punto delicado y que se desvía de la _norma_ radica en los ficheros de ayuda. Yo suelo documentar las funciones genéricas y sus métodos en un mismo fichero. Así, el encabezamiento del fichero `.Rd` puede ser así:









{{< highlight R "linenos=true" >}}
\name{as.px}
\alias{as.px}
\alias{as.px.array}
{{< / highlight >}}



Es decir, utilizando un _alias_ para el método de manera que cuando alguien escriba







{{< highlight R "linenos=true" >}}
?as.px
{{< / highlight >}}







o







{{< highlight R "linenos=true" >}}
?as.px.array
{{< / highlight >}}







se muestre el fichero en cuestión. La sección `usage` quedaría así:







{{< highlight R "linenos=true" >}}
\usage{
as.px( x, ... )
\S3method{as.px}{array}( x, skeleton.px = NULL, list.keys = NULL, ...  )
}
{{< / highlight >}}







Hay que advertir el peculiar formato de la llamada al método en el que queda de manifiesto que desciende de la función genérica.

¿Y qué si alguien quiere extender una función genérica de otro paquete? El procedimiento es el mismo, salvo que en el fichero `NAMESPACE`, al exportar la función hay que indicarlo de la manera siguiente:







{{< highlight R "linenos=true" >}}
S3method( plot, mi.clase )
{{< / highlight >}}







Esa línea de código permitiría extender la función plot a objetos de la clase `mi.clase`.
