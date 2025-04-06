---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2011-10-14 07:43:29+00:00
draft: false
lastmod: '2025-04-06T18:56:45.776241'
related:
- 2011-10-03-gestion-avanzada-de-memoria-en-r-tracemem.md
- 2012-01-16-eles-casts-y-el-rizo-del-rizo-de-la-programacion-eficiente-con-r.md
- 2015-11-10-asignacion-en-r-flecha-o-lo-innombrable.md
- 2011-04-07-nueva-version-de-paquete-colbycol.md
- 2014-07-04-vectorizacion-en-r-un-contraejemplo.md
tags:
- r
- programación
- memoria
- tracemem
title: 'Gestión avanzada de memoria en R: tracemem (II)'
url: /2011/10/14/gestion-avanzada-de-memoria-en-r-tracemem-ii/
---

He leído estos días el capítulo 14 de _The Art of R Programming_ que trata problemas y trucos para mejorar el rendimiento de R en términos de velocidad y memoria. Menciona la función `tracemem` de la que nos ocupamos [el otro día](http://www.datanalytics.com/2011/10/03/gestion-avanzada-de-memoria-en-r-tracemem/).

Menciona el capítulo cómo uno de los estranguladores del rendimiento de R es su política de _copiar al cambiar_ (_copy-on-change_). Generalmente, cuando modificamos un objeto, R realiza una copia íntegra de él (¿y qué pasa si realizamos pequeñas modificaciones en un objeto muy grande?):


{{< highlight R >}}
m <- 1:10
tracemem(m)
# [1] "<0x16952c0>"
m[1] <- 8
# tracemem[0x16952c0 -> 0x10cd228]:
{{< / highlight >}}


Sin embargo el libro menciona cómo, a pesar de la política _copiar al cambiar_, hay casos en los que R es lo suficientemente inteligente como para modificar sólo la parte afectada por el cambio:


{{< highlight R >}}
z <- runif(10)
tracemem(z)
# [1] "<0x1044ff0>"
z[1] <- 8
tracemem(z)
# [1] "<0x1044ff0>"
{{< / highlight >}}


En este caso, no se copia el objeto: sólo se modifica una de las entradas del mismo.

Pero, ¿por qué en este segundo ejemplo no hay copia y el en primero sí? El motivo es el tipo de almacenamiento interno de R:


{{< highlight R >}}
m <- 1:10
typeof(m)
# [1] "integer"
tracemem(m)
# [1] "<0x14e83f8>"
m[1] <- 8
# tracemem[0x14e83f8 -> 0x14e8450]:
# tracemem[0x14e8450 -> 0x1045140]:
typeof(m)
# [1] "double"
{{< / highlight >}}

Efectivamente, hay una copia, pero precisamente porque la asignación implica un cambio (implícito) de manera de almacenar datos. Aunque se podría hacer también


{{< highlight R >}}
m <- 1:10
tracemem(m)
# [1] "<0x14e8558>"
m[1] <- 8L
{{< / highlight >}}


para evitar la copia.