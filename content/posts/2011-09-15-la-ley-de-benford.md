---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2011-09-15 07:03:49+00:00
draft: false
lastmod: '2025-04-06T18:51:23.143750'
related:
- 2020-11-16-que-numeros-admiten-la-distribucion-de-benford.md
- 2013-05-10-mas-sobre-la-ley-de-benford-iii-la-magica-propiedad-de-los-logaritmos-decimales.md
- 2013-04-02-las-leyes-de-benford.md
- 2013-05-03-mas-sobre-la-ley-de-benford-ii-la-distribucion-de-la-parte-fraccionaria.md
- 2013-02-08-la-ley-de-benford-en-muestras-pequenas-algunas-evidencias.md
tags:
- estadística
- ley de benford
- r
title: La ley de Benford
url: /2011/09/15/la-ley-de-benford/
---

El otro día me preguntó una compañera el motivo por el que un proceso (de transformación de datos) se ejecutaba tan lentamente. De oficio, siempre hago lo mismo —además, lo saben: ¿para qué seguirán preguntando?—: ejecutar el procesosolo sobre un porcentaje de los datos.

Con los que el `id` acababa en `123`, era inmediato; con `12`, también; con `1`, se eternizaba. Pero con `2`, `3` y `4` volvía a ser muy rápido. ¡Había muchísimos registros con `id` acabado en `1`!

Me llamó la atención y se lo dije: entendería, por la ley de Benford, que ocurriese eso con los `id` que _comienzan_ por `1`, ¡pero no con los que _terminan_ con dicha cifra! Pero por la cara que puso, sospeché que no estaba al tanto de las leyes del buen señor. Así que la remití a la [Wikipedia](http://es.wikipedia.org/wiki/Ley_de_Benford) y volví a mis asuntos.

Y creo que le hice un disfavor. La página sobre la ley de Benford —y, especialmente, la sección sobre su explicación— es atrozmente confusa cuando no falaz. En particular, da una relevancia especial a la distribución exponencial, cuando ésta tiene, a lo más, una relación histórica con el fenómeno (dado que fue advertido por primera vez al examinar tablas de logaritmos).

La ley de Benford tiene que ver con la función de distribución de los valores de una lista de números. Generalmente, en la práctica, estos siguen distribuciones _de cola larga_: los ingresos de las personas, el tamaño de los municipios, la capitalización bursátil de las empresas, etc., tienen distribuciones similares a las de Weibull, exponencial, Pareto, etc.

[![](/img/2011/09/Long_tail.png#center)
](/img/2011/09/Long_tail.png#center)

Siempre que la distribución tenga una forma similar a la de la gráfica (extraída de la Wikipedia) que aparece encima, el tramo [10, 20) será más probable que el [20,30) y este que el [30, 40). Lo mismo pasa con los tramos [100, 200) y [200,300). Etc. En resumen, hay ley de Benford porque la función de densidad es decreciente.

Además, las probabilidades de ocurrencia de cada cifra no son taumatúrgicamente las que nos quieren hacer creer los _wikipedistas_. Son las que son en cada caso como demuestra el siguiente bloque de código:


{{< highlight R >}}
benford <- function( foo, ..., n = 100000 ){
  tmp <- foo( n, ... )
  tmp <- as.character(tmp[tmp > 0])
  tmp <- strsplit(tmp, "")

  leading.digit <- function( x )
    x[! x %in% c("0", ".")][1]

  tmp <- unlist(lapply(tmp, leading.digit))
  100 * table(tmp) / length(tmp)
}

benford( rcauchy )
benford( rexp, rate = 2 )
benford( rexp, rate = 5 )
benford( rnorm, sd = 40 )
benford( rweibull, shape = 1 )
{{< / highlight >}}


**Nota:** (para los amigos del _y esto para qué_) dizque la ley de Benford se aplica para detectar patrones de fraude.