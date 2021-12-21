---
author: Carlos J. Gil Bellosta
date: 2014-09-19 07:13:31+00:00
draft: false
title: Primer elemento de un grupo dentro de un dataframe de R

url: /2014/09/19/primer-elemento-de-un-grupo-dentro-de-un-dataframe-de-r/
categories:
- r
tags:
- r
---

Hoy he encontrado una solución decente a un problema que venía arrastrando desde hace un tiempo en R. Tengo una tabla muy grande (decenas de millones de registros) con su `id`. Me interesa quedarme con el subconjunto de la tabla original en que para cada `id` el valor de una determinada variable es mínimo.

Un caso de uso: esa variable adicional mide la distancia de la observación a los centroides de unos _clústers_. El registro con el menor valor proporciona la asignación del sujeto a su grupo.

Busqué en vano solución adecuada. Con `data.table` es posible construir un `rank` por `id` y seleccionar después los valores en que `rank == 1`. Pero es muy lengo. `ddply`, todavía peor. Todo lentísimo.

Hoy se me ha ocurrido una solución mucho mejor que las anteriores basada en `duplicated` y que resumo aquí:



    library(<a href="http://inside-r.org/packages/cran/data.table">data.table)

    set.seed(1234)

    a <- sample(letters, 1e6, replace = T)
    b <- rnorm(length(a))

    dat <- data.frame(a = a, b = b)

    dat <- <a href="http://inside-r.org/packages/cran/data.table">data.table(dat, key = c("a", "b"))
    res <- dat[!duplicated(dat$a),]

    <a href="http://inside-r.org/r-doc/utils/head">head(res)
    # a         b
    # 1: a -3.999523
    # 2: b -3.794408
    # 3: c -4.422542
    # 4: d -4.007013
    # 5: e -4.079149
    # 6: f -3.860507

    <a href="http://inside-r.org/r-doc/utils/head">head(tapply(dat$b, dat$a, min))
    # a         b         c         d         e         f
    # -3.999523 -3.794408 -4.422542 -4.007013 -4.079149 -3.860507



Uso `data.table` para ordenar la tabla por las columnas de interés. Y `duplicated` genera un vector lógico que es `FALSE` en la primera aparición de un `id` y `TRUE` en las siguientes.

Comentarios:



	  * Si tus datos son pequeños, casi cualquier cosa que intentes funcionará. Pero si no,...
	  * A veces pierdes horas y horas porque Google te conduce a [una página](http://stats.stackexchange.com/questions/7884/fast-ways-in-r-to-get-the-first-row-of-a-data-frame-grouped-by-an-identifier) (en la que ninguna de las opciones resulta convincente) en lugar de a [otra](http://stackoverflow.com/questions/13279582/select-only-the-first-rows-for-each-unique-value-of-a-column-in-r) donde aguardaba la respuesta a mis problemas.
	  * El hecho de que una solución que considerabas ingeniosa haya sido antes descrita por otro antes no hace sino recordarnos que, independientemente quién seas, para quién trabajes o dónde estés, casi todo el talento, casi todas las buenas ideas, casi todas las respuetas, están fuera, no entre esas cuatro paredes que ves ahora mismo a tu alrededor.

