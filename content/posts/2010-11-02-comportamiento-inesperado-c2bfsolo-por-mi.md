---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2010-11-02 22:18:21+00:00
draft: false
lastmod: '2025-04-06T18:59:37.565866'
related:
- 2011-02-02-1387.md
- 2017-12-11-cuidado-con-los.md
- 2017-10-20-he-tratado-de-contrastar-una-hipotesis-sin-exito-asi-que-solo-publico-el-subproducto.md
- 2016-11-16-detras-de-la-deteccion-de-anomalias-en-series-temporales.md
- 2010-03-29-puedo-cambiar-mi-codigo-retroactivamente.md
tags:
- r
- programación
title: Comportamiento inesperado... ¿sólo por mí?
url: /2010/11/02/comportamiento-inesperado-solo-por-mi/
---

El otro día, bajo el encabezamiento _Unexpected behaviour of min, tapply and POSIXct/POSIXlt classes?_, mandé a la lista de desarrolladores de R el siguiente pedazo de código:


{{< highlight R >}}
before <- Sys.time()
Sys.sleep( 1 )
now1 <- now2 <- Sys.time()

my.times <- c( before,  now1, now2
class( my.times )                     ## [1] "POSIXct" "POSIXt
min( my.times )                       ## [1] "2010-10-28 18:52:17 CEST"

### So far, so good... but:

my.period <- c( "a", "b", "b" )
tapply( my.times, my.period, min )

##          a          b
## 1288284737 1288284780

## Where did my POSIXct class go?

my.times.lt <- as.POSIXlt( my.times
min( my.times.lt )                    ## [1] "2010-10-28 18:52:17 CEST"; good

tapply( my.times.lt, my.period, min )

# $a
# [1] 17.449
#
# $b
# [1] 52
#
# Mensajes de aviso perdidos
# In ansmat[index] <- ans :
#   número de items para sustituir no es un múltiplo de la
# longitud del reemplazo
#
# ¿?  :(
{{< / highlight >}}


Invito a mis lectores a lo siguiente:



1. A ejecutarlo en su ordenador
2. A leer [esto](http://en.wikipedia.org/wiki/Principle_of_least_astonishment)
3. A releer el título del mensaje que envié a la lista de desarrolladores (por referencia, _Unexpected behabiour of min, tapply and POSIXct/POSIXlt classes?_)
4. A leer [lo que me contestó un tal Joris](http://comments.gmane.org/gmane.comp.lang.r.devel/25864)
5. A explicarme qué tiene que ver unas cosas con otras (porque yo no entiendo nada de nada de nada)