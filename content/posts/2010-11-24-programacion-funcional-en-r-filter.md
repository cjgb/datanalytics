---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2010-11-24 09:08:05+00:00
draft: false
lastmod: '2025-04-06T18:52:56.922966'
related:
- 2010-08-17-una-tarea-para-mis-lectores.md
- 2020-01-29-x.md
- 2017-03-16-todo-lo-que-sucede-en-r-es-una-llamada-a-una-funcion.md
- 2011-09-20-la-ley-de-benford-revisitada.md
- 2011-02-28-programacion-funcional-en-r-reduce.md
tags:
- r
- programación funcional
title: 'Programación funcional en R: Filter'
url: /2010/11/24/programacion-funcional-en-r-filter/
---

Quienes acudan a [Mieres la semana que viene](https://datanalytics.com/2010/10/29/ii-jornadas-de-usuarios-de-r/) me oirán hablar de programación funcional en R. Algo de lo que no hablaré pero que dejaré acá escrito como abrebocas es un pequeño ejemplo de cómo la programación funcional hace tu vida más simple y, sobre todo, prolonga la vida de tu teclado.

Voy a ilustrar el uso de una función de R que echábamos de menos los usuarios de Python: Filter. Estaba ahí, sí, pero como escondida.

El ejemplo proviene de un [intercambio de correos en las listas de R](https://stat.ethz.ch/pipermail/r-help/2010-November/258901.html) acerca de un _truco estúpido_: cómo crear una función parecida a ls() que mostrase solo los objetos de una determinada frase. Se propuso


{{< highlight R >}}
getclass <- function( cls = "data.frame" ) ls(envir=.GlobalEnv)[
                sapply(
                    sapply(ls(envir=.GlobalEnv), function(x) class(get(x)) ),
                    function(y) cls %in% y)   ]
{{< / highlight >}}


Usando la función Filter podemos hacer lo mismo mucho más sucintamente:


{{< highlight R >}}
getclass <- function( cls = "data.frame" )
    Filter( function( x ) cls %in% class( get( x ) ),
                ls( envir=.GlobalEnv ) )
{{< / highlight >}}


Los interesados ya saben qué hacer hoy: `?Filter`