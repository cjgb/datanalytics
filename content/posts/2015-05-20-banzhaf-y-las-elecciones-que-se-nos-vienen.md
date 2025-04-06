---
author: Carlos J. Gil Bellosta
categories:
- estadística
- números
date: 2015-05-20 08:13:56+00:00
draft: false
lastmod: '2025-04-06T18:59:16.766671'
related:
- 2012-04-04-de-dhondt-a-banzhaf.md
- 2015-12-22-coaliciones-de-banzhaf-en-el-20d.md
- 2015-12-23-un-poco-mas-sobre-el-indice-de-poder-de-banzhaf.md
- 2013-02-11-voy-a-partir-una-lanza-a-favor-de-rosell-a-cuenta-de-la-epa.md
- 2012-09-20-como-votan-los-diputados.md
tags:
- banzhaf
- elecciones
- estadística
- números
title: Banzhaf y las elecciones que se nos vienen
url: /2015/05/20/banzhaf-y-las-elecciones-que-se-nos-vienen/
---

Es pertinente rescatar una entrada de hace tres años [sobre D’Hondt y Banzhaf](http://www.datanalytics.com/2012/04/04/de-dhondt-a-banzhaf/). En el enlace, los detalles.

Me limitaré a actualizar el código de la función para que muestre las alianzas (algunas enteramente esperpénticas) posibles, que queda de la forma

{{< highlight R >}}
banzhaf <- function(x){
  x <- -sort(-x)
  x <- x/sum(x)

  foo <- function(a,b,p){
    if(p>1/2)
      return(list(a))

    if (length(b)==0)
      return(NULL)

    b.prima <- b[-1]
    delta <- b[1]
    p.delta <- x[delta]

    return(c(foo(c(a,delta), b.prima, p+p.delta), foo(a,b.prima,p)))
  }

  res <- foo( NULL, names(x), 0)
  print(res)
  sort( table(unlist(res)) / length(res) )
}
{{< / highlight >}}

y a aplicarlo sobre algunos casos de la más rabiosa actualidad que [Leda Duelo](https://twitter.com/ledaduelo) ha tenido la gentileza de preparar para mí y, a través de esta página, para ti también. Son los que siguen.

Para las elecciones de marzo de 2015 en Andalucía, queda:

{{< highlight R >}}
escannos <- c(47,33,15,9,5)
names(escannos) <- c( "psoe", "pp", "podemos", "ciudadanos", "iulv")
banzhaf( escannos )
# [[1]]
# [1] "psoe" "pp"
#
# [[2]]
# [1] "psoe"    "podemos"
#
# [[3]]
# [1] "psoe"       "ciudadanos"
#
# [[4]]
# [1] "pp"         "podemos"    "ciudadanos"
#
#
# ciudadanos    podemos         pp       psoe
# 0.50       0.50       0.50       0.75
{{< / highlight >}}


De acuerdo con alguna de esas encuestas sobre los resultados para el ayuntamiento de Madrid que van a ser papel mojado en unos días,


{{< highlight R >}}
escannos <- c(22,14,11,10)
names(escannos) <- c( "PP", "AM", "PSOE", "Ciudadanos")
banzhaf(escannos)
# [[1]]
# [1] "PP" "AM"
#
# [[2]]
# [1] "PP"   "PSOE"
#
# [[3]]
# [1] "PP"         "Ciudadanos"
#
# [[4]]
# [1] "AM"         "PSOE"       "Ciudadanos"
#
#
# AM Ciudadanos       PSOE         PP
# 0.50       0.50       0.50       0.75
{{< / highlight >}}


Nota para mis lectores de dentro de unos años a los que tal vez ya no suenen las siglas "AM": se refieren a [esto](http://es.wikipedia.org/wiki/Ahora_Madrid). Lo que pasó del pasado desde el que escribo a tu hoy es lo de siempre. A todo esto, ¿ya tenéis coches voladores?

Finalmente, usando datos de otras encuestas para Barcelona, tenemos


{{< highlight R >}}
escannos <- c(10,9,6,5,5,5,2)
names(escannos) <- c( "Ciu", "Bcomun", "Ciudadanos", "PSC", "PP", "ERC", "CUP")
banzhaf(escannos)
# [[1]]
# [1] "Ciu"        "Bcomun"     "Ciudadanos"
#
# [[2]]
# [1] "Ciu"    "Bcomun" "PSC"
#
# [[3]]
# [1] "Ciu"    "Bcomun" "PP"
#
# [[4]]
# [1] "Ciu"    "Bcomun" "ERC"
#
# [[5]]
# [1] "Ciu"        "Ciudadanos" "PSC"        "PP"
#
# [[6]]
# [1] "Ciu"        "Ciudadanos" "PSC"        "ERC"
#
# [[7]]
# [1] "Ciu"        "Ciudadanos" "PSC"        "CUP"
#
# [[8]]
# [1] "Ciu"        "Ciudadanos" "PP"         "ERC"
#
# [[9]]
# [1] "Ciu"        "Ciudadanos" "PP"         "CUP"
#
# [[10]]
# [1] "Ciu"        "Ciudadanos" "ERC"        "CUP"
#
# [[11]]
# [1] "Ciu" "PSC" "PP"  "ERC"
#
# [[12]]
# [1] "Ciu" "PSC" "PP"  "CUP"
#
# [[13]]
# [1] "Ciu" "PSC" "ERC" "CUP"
#
# [[14]]
# [1] "Ciu" "PP"  "ERC" "CUP"
#
# [[15]]
# [1] "Bcomun"     "Ciudadanos" "PSC"        "PP"
#
# [[16]]
# [1] "Bcomun"     "Ciudadanos" "PSC"        "ERC"
#
# [[17]]
# [1] "Bcomun"     "Ciudadanos" "PSC"        "CUP"
#
# [[18]]
# [1] "Bcomun"     "Ciudadanos" "PP"         "ERC"
#
# [[19]]
# [1] "Bcomun"     "Ciudadanos" "PP"         "CUP"
#
# [[20]]
# [1] "Bcomun"     "Ciudadanos" "ERC"        "CUP"
#
# [[21]]
# [1] "Bcomun" "PSC"    "PP"     "ERC"
#
# [[22]]
# [1] "Ciudadanos" "PSC"        "PP"         "ERC"        "CUP"
#
#
# CUP     Bcomun        ERC         PP        PSC        Ciu Ciudadanos
# 0.4545455  0.5000000  0.5454545  0.5454545  0.5454545  0.6363636  0.6363636
{{< / highlight >}}

El número de coaliciones ganadores mínimas es 22, muchas de ellas contranatura (¿aún se puede decir _contranatura_?). Es curioso, además, cómo Ciudadanos, con menos concejales que Bcomun, tiene más _Banzhafpower_. Tiene pinta de _bug_, pero he revisado y creo que el código está bien.

Y espero que no hayas llegado hasta aquí. Porque deberías estar buscando el _qué hay de lo mío_ por entre los programas electorales. Que luego pasarán cosas, te quejarás y habrá sido por tu culpa.