---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2011-10-26 06:48:56+00:00
draft: false
lastmod: '2025-04-06T18:45:54.582737'
related:
- 2015-07-02-mejores-mensajes-de-error-con-deparse-substitute.md
- 2011-05-13-consejos-para-utilizar-r-en-produccion.md
- 2014-01-27-guia-de-estilo-de-r-de-google.md
- 2010-04-21-para-que-copien-peguen-y-disfruten.md
- 2010-11-24-programacion-funcional-en-r-filter.md
tags:
- programación
- r
title: Herramientas de depuración en R
url: /2011/10/26/herramientas-de-depuracion-en-r/
---

R dispone de un conjunto de herramientas para depurar (_debug_) programas. Yo suelo usar la función `debug `de manera casi exclusiva y sistemática, pero leyendo _The Art of R Programming_ he dado con una discusión sistemática sobre el proceso de depuración así como algunas herramientas adicionales.

Una de las primeras que menciona el libro es la función `stopifnot`, que puede ser intercalada en el código para verificar condiciones necesarias (y lanzar un error en caso de que no se cumplan):


{{< highlight R >}}
mi.error <- function( x ){
    res <- 1 / x
    stopifnot( ! is.infinite( res ) )
    2 * res
}

mi.error( 2 )
mi.error( 0 )
{{< / highlight >}}


Puede ser usado para anticiparse activamente a los errores.

Son, creo yo, conocidas de todos las funciones `debug `y `undebug`, que permiten ejecutar código línea a línea. Una adición interesante a la familia es `debugonce`, que llama a debug una única vez y evita tener que eliminar explícitamente a la función undebug en situaciones similares a


{{< highlight R >}}
f <- function( n, x ){
    for( i in 1:n)
    g(x)
}
{{< / highlight >}}


La función `browser `permite inspeccionar el estado de la función sin tener que llamar a `debug `sobre toda ella. Se le puede añadir, además, una condición para quesolo interrumpa la ejecución del programa bajo ciertas condiciones.


{{< highlight R >}}
mi.error <- function( x ){
    res <- 1 / x
    browser( expr = x == 0 )
    2 * res
}

mi.error( 2 )
mi.error( 0 )
{{< / highlight >}}


Este resultado también puede obtenerse usando las funciones `setBreakpoint `o `trace`.

Finalmente, existe la posibilidad de [saber qué ha pasado después del fallo](http://projetos.inpa.gov.br/i3geo/pacotes/r/win/library/utils/html/debugger.html) de una función de R usando


{{< highlight R >}}
options( error = recover )
{{< / highlight >}}


Con esa opción, después de un fallo, R te deja elegir el _contexto_ que se quiere analizar. Por ejemplo:

`
{{< highlight R >}}
> options( error = recover )
> myFit <- lm(y ~ x, data = xy, weights = w)
Error in inherits(x, "data.frame") : object 'xy' not found

Enter a frame number, or 0 to exit

1: lm(y ~ x, data = xy, weights = w)
2: eval(mf, parent.frame())
3: eval(expr, envir, enclos)
4: model.frame(formula = y ~ x, data = xy, weights = w, drop.unused.levels = TRUE)
5: model.frame.default(formula = y ~ x, data = xy, weights = w, drop.unused.levels = TRU
6: is.data.frame(data)
7: inherits(x, "data.frame")

Selection: 2
Called from: model.frame.default(formula = y ~ x, data = xy, weights = w,
    drop.unused.levels = TRUE)
Browse[1]> ls()
[1] "enclos" "envir"  "expr"
Browse[1]> Q
>
{{< / highlight >}}
`

No son este tipo de herramientas aquellas a las que los programadores están más acomodaticiamente acostumbrados. Aparentemente, existen herramientas de depuración análogas a las que dispone Eclipse (para Java) o Eric (para Python) en desarrollo para RStudio. ¿Llegarán pronto?