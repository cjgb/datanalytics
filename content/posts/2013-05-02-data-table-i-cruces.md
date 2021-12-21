---
author: Carlos J. Gil Bellosta
date: 2013-05-02 07:16:30+00:00
draft: false
title: 'data.table (I): cruces'

url: /2013/05/02/data-table-i-cruces/
categories:
- computación
- r
tags:
- computación
- ciencia de datos
- r
---

Los protagonistas (tres tablas _grandecitas_):








    dim(qjilm)
    # [1] 3218575 5
    dim(tf)
    # [1] 6340091 7
    dim(tfe)
    #[1] 1493772 3

    <a href="http://inside-r.org/r-doc/utils/head">head(qjilm, 2)
    #pos.es length.en length.es pos.en qjilm
    #1 1 2 1 1 0.8890203
    #2 1 2 1 2 0.1109797

    <a href="http://inside-r.org/r-doc/utils/head">head(tf, 2)
    #frase es pos.es length.es en pos.en length.en
    #1 996 ! 42 42 ! 43 44
    #2 1231 ! 37 37 ! 37 38

    <a href="http://inside-r.org/r-doc/utils/head">head(tfe, 2)
    #en es tfe
    #1 ! ! 4.364360e-01
    #2 ! !" 4.945229e-24








El objetivo (cruzarlas por los campos comunes):








    res <- merge(merge(tf, tfe), qjilm)








El tiempo (usando `merge`):








    res <- merge(merge(tf, tfe), qjilm)
    #user system elapsed
    #442.991 2.496 446.832

    dim(res)
    #[1] 6340091 9








Y con [`data.table`](http://cran.r-project.org/web/packages/data.table/index.html):








    library(<a href="http://inside-r.org/packages/cran/data.table">data.table)

    system.time({
      res.dt <- merge(<a href="http://inside-r.org/packages/cran/data.table">data.table( tf,  key = c("en", "es")),
                      <a href="http://inside-r.org/packages/cran/data.table">data.table( tfe, key = c("en", "es")) )

      res.dt <- merge( setkeyv(res.dt,   cols = c("pos.es", "pos.en", "length.es", "length.en")),
                       <a href="http://inside-r.org/packages/cran/data.table">data.table(qjilm, key  = c("pos.es", "pos.en", "length.es", "length.en") )
                  )
    })
    #user system elapsed
    #32.070 0.012 32.118

    dim(res.dt)
    #[1] 6340091 9








Y, finalmente, suponiendo que los `data.tables` ya tienen asociado un _índice_ de antemano:








    tf.dt  <- <a href="http://inside-r.org/packages/cran/data.table">data.table( tf,  key = c("en", "es"))
    tfe.dt <- <a href="http://inside-r.org/packages/cran/data.table">data.table( tfe, key = c("en", "es"))

    system.time( res <- merge(tf.dt, tfe.dt) )
    #user system elapsed
    #3.464 0.000 3.466

    dim(res)
    #[1] 6340091 8








Resumen:



	  * Había hecho unas [pruebas con _data.table_](http://www.datanalytics.com/blog/2010/09/06/536/) previamente que no resultaron del todo satisfactorias.
	  * Anoche, `data.table` me sacó de un apuro muy serio.
	  * Ahora soy _fan_.
	  * Gracias a `data.table`, el límite de tamaño de los conjuntos de datos con los que soy capaz de trabajar razonablemente con R ha crecido en todo un orden de magnitud: ya no me asusta que me hablen de _millones_.
