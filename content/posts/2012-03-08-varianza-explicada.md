---
author: Carlos J. Gil Bellosta
categories:
- programación
- estadística
date: 2012-03-08
lastmod: '2025-04-06T19:02:08.048089'
related:
- 2010-08-26-modelos-lineales-mixtos-para-la-optimizacion-de-queries.md
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2022-03-10-diagramas-causales-hipersimples-1-errores.md
- 2011-03-16-parentesis-corchetes-y-rendimiento-en-r.md
tags:
- programación
- estadística
- sql
- varianza
title: ¿Varianza explicada?
url: /2012/03/08/varianza-explicada/
---

Sin darnos cuenta, abusamos de ciertos términos. Uno de ellos es el de la _varianza explicada_. Después de años utilizándolo como por inercia, he venido a darme cuenta por dos vías distintas de su impropiedad: [una de mis recientes lecturas](http://cscs.umich.edu/~crshalizi/weblog/874.html) y una experiencia profesional.

Tal vez sea más sencillo comenzar exponiendo la crítica realizada en esa página. Parte del análisis de la serie de muertes en Chicago entre 1987 y el 2000:

[![](/img/2012/03/mortalidad_chicago.png#center)
](/img/2012/03/mortalidad_chicago.png#center)

A la serie le ajusta un modelo simple basado en [_splines_](http://en.wikipedia.org/wiki/Smoothing_spline), `y = f(t) + ruido`, que da el siguiente ajuste:

[![](/img/2012/03/mortalidad_chicago_predicha.png#center)
](/img/2012/03/mortalidad_chicago_predicha.png#center)

La R² del ajuste es 0.35 y el autor se pregunta: ¿es adecuado denominar a este número varianza _explicada_? Porque, ¿_explica_ realmente la fecha el que haya más o menos muertos en un día determinado? ¿No viene a ser eso, poco más o menos, lo que nos cuentan los fabricantes de horóscopos?

Tal vez, por usar este tipo de términos, involuntariamente, estamos sugiriendo causalidad. Tal vez, demasiado frecuentemente, nos autosugestionamos.

Y ahora mi caso.

Trabajo con un sistema distribuido (y relativamente grande) de almacenamiento de datos. Estos están repartidos en +300 servidores interconectados. Tengo unos cuantos miles de consultas de las que conozco el tiempo de ejecución y otras variables asociadas:

* `sumIO`, suma de los bytes escritos/leídos por cada servidor
* `maxIO`, el máximo IO
* `sumCPU` (en segundos)
* maxCPU
* número de filas devueltas
* número de pasos de la consula (posiblemente correlacionado con su complejidad)
* uso de _spool_, es decir, espacio de disco para datos intermedios
* tiempo que la consulta está encolada en espera de ejecución

etc.

Curiosamente, la variable más predictiva en mis modelos es `maxCPU`. Pero `maxCPU` es, en promedio, un 4% del tiempo de ejecución. Además, el tiempo de ejecución es igual a `maxCPU` más otros tiempos. Por lo tanto, me sentiría cómodo si entrase en el modelo con un coeficiente 1 y _explicase_ no más del 4% de la varianza. Pero en el modelo entra con un coeficiente que amplifica su impacto.

Pero me niego a considerarla explicativa. Me niego a que _explique_ la varianza de la variable respuesta. No tiene sentido. Estoy casi seguro de que, igual que el ser 14 de abril no explica que mueran 172 personas en Chicago, que 0.5 segundos de `maxCPU` no explican que una consulta tarde 12 segundos en ejecutarse. No siendo habitualmente, además, el uso de CPU la causa de los cuellos de botella en sistemas que mueven grandes conjuntos de datos.

Ahora debería explicar que `maxCPU`, por mucho que aparezca en el lado derecho de mis ecuaciones no es una causa sino un efecto adicional de un fenómeno no observado. Desead suerte a mis interlocutores.