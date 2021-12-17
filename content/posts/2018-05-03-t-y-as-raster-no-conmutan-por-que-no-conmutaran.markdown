---
author: Carlos J. Gil Bellosta
date: 2018-05-03 08:13:35+00:00
draft: false
title: t y as.raster no conmutan; ¿por qué no conmutarán?

url: /2018/05/03/t-y-as-raster-no-conmutan-por-que-no-conmutaran/
categories:
- r
tags:
- r
- raster
---

Creo una minimatriz, la convierto en un _raster_ y la represento:




    m <- matrix(c(0, 0, 0.33, 0.66, .9, .9), 2, 3)
    m
    #      [,1] [,2] [,3]
    # [1,]    0 0.33   .9
    # [2,]    0 0.66   .9

    r <- as.raster(m)
    r
    #           [,1]      [,2]      [,3]
    # [1,] "#000000" "#545454" "#FFFFFF"
    # [2,] "#000000" "#A8A8A8" "#FFFFFF"

    plot(r, interpolate = FALSE)




![](/wp-uploads/2018/04/t_raster_orig.png)


Ahora, con la matriz traspuesta,




    r_t_1 <- as.raster(t(m))
    r_t_1
    #           [,1]      [,2]
    # [1,] "#000000" "#000000"
    # [2,] "#545454" "#A8A8A8"
    # [3,] "#E6E6E6" "#E6E6E6"




obtengo

![](/wp-uploads/2018/04/raster_t.png)


que difiere de cuando invierto el orden de las operaciones, i.e.,




    r_t_2 <- t(as.raster(m))
    r_t_2
    #           [,1]      [,2]
    # [1,] "#000000" "#E6E6E6"
    # [2,] "#A8A8A8" "#545454"
    # [3,] "#000000" "#E6E6E6"




Que visualmente es

![](/wp-uploads/2018/04/t_raster.png)


¿Por qué, Dios mío, por qué? (Si alguien sabe razonarlo y tiene tiempo y disposición, siéntase libre de hacerlo en la sección de comentarios).



