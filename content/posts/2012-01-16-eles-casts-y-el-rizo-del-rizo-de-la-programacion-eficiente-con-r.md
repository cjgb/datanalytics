---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2012-01-16 07:16:10+00:00
draft: false
lastmod: '2025-04-06T18:58:41.618695'
related:
- 2011-10-14-gestion-avanzada-de-memoria-en-r-tracemem-ii.md
- 2011-10-03-gestion-avanzada-de-memoria-en-r-tracemem.md
- 2015-11-10-asignacion-en-r-flecha-o-lo-innombrable.md
- 2021-05-18-un-viejo-truco-para-que-r-vuele.md
- 2010-08-17-una-tarea-para-mis-lectores.md
tags:
- r
- trucos
- memoria
- tracemem
title: Eles, "casts" y el rizo del rizo de la programación eficiente (con R)
url: /2012/01/16/eles-casts-y-el-rizo-del-rizo-de-la-programacion-eficiente-con-r/
---

Ante las preguntas de alguno de mis lectores, voy a proporcionar una explicación acerca de la misteriosa `L`. Bueno, voy más bien a dejar que la deduzcan ellos mismos a partir de la siguiente serie de bloques de código:

{{< highlight R >}}
a <- rep( 0, 10 )
typeof( a )
object.size( a )

b <- rep( 0L, 10 )
typeof( b )
object.size( b )

##############

a <- 1:10
typeof( a )
object.size( a )

a[1] <- 10
typeof( a )
object.size( a )

a <- 1:10
a[1] <- 10L
typeof( a )
object.size( a )

##############

a <- 1:10
tracemem( a )
a[1] <- 2

a <- 1:10
tracemem( a )
a[1] <- 2L

##############

system.time( replicate( 1e5, { a <- (1:100); a[1] <- 12  } ) )
system.time( replicate( 1e5, { a <- (1:100); a[1] <- 12L } ) )
{{< / highlight >}}

Lectores míos, no seáis perezosos y haced, cuando menos, `?tracemem` en vuestra consola. Una vez leída la [página de ayuda](http://www.inside-r.org/r-doc/base/tracemem), ¿se os ocurre algún truco para ahorrar mucha memoria cuando trabajáis con objetos (p.e., matrices) grandes de enteros?