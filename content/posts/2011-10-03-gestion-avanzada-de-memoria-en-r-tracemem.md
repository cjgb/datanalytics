---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2011-10-03 07:15:16+00:00
draft: false
lastmod: '2025-04-06T19:09:16.473554'
related:
- 2011-10-14-gestion-avanzada-de-memoria-en-r-tracemem-ii.md
- 2012-01-16-eles-casts-y-el-rizo-del-rizo-de-la-programacion-eficiente-con-r.md
- 2015-11-10-asignacion-en-r-flecha-o-lo-innombrable.md
- 2016-06-27-r-es-un-vago.md
- 2011-10-26-herramientas-de-depuracion-en-r.md
tags:
- r
- programación
- memoria
- tracemem
title: 'Gestión avanzada de memoria en R: tracemem'
url: /2011/10/03/gestion-avanzada-de-memoria-en-r-tracemem/
---

Muchos usuarios de R se enfrentan en alguna ocasión a problemas con el uso y gestión de la memoria. La función `tracemem` es útil a la hora de identificar ineficiencias en el código.

En su página de ayuda se lee:



>Esta función marca un objeto de forma que se imprime un mensaje cada vez que se llama a la función interna `duplicate`. Esto sucede cuando dos objetos comparten la misma memoria y uno de ellos se modifica. Esta es una causa de uso de memoria difícil de predecir en R.


Ahí va un ejemplo: después de ejecutar


{{< highlight R >}}
a <- 1:10
tracemem(a)
# [1] "<0x1fe7370>"
{{< / highlight >}}



observamos que la posición de memoria en que se almacena `a` es la `0x1fe7370`. Si ahora hacemos


{{< highlight R >}}
b <- a
{{< / highlight >}}



entonces `a` y `b` comparten memoria: ambos nombres de variable son alias de un mismo objeto físico interno. Pero si modificamos `b`, se obtiene



{{< highlight R >}}
b[1] <- 3
# tracemem[0x1fe7370 -> 0x1fe7420]:
# tracemem[0x1fe7420 -> 0x1a1f240]:
{{< / highlight >}}



Efectivamente, R copia el objeto que estaba en `0x1fe7370` en la posición `0x1fe7420` y el que estaba en esta, a su vez, en `0x1a1f240`. Podemos imaginar que este último es `b`. Y en efecto,



{{< highlight R >}}
tracemem( b )
# [1] "<0x1a1f240>"
{{< / highlight >}}