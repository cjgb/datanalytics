---
author: Carlos J. Gil Bellosta
date: 2014-03-10 07:07:47+00:00
draft: false
title: Guarjolización de fotos con R

url: /2014/03/10/guarjolizacion-de-fotos-con-r/
categories:
- computación
- gráficos
- r
tags:
- clústering
- fotos
- imágenes
- r
---

Inspirado en [esto](http://aschinchon.wordpress.com/2014/03/03/warholing-grace-with-clara/) aunque con la intención de mejorar el horrible código adjunto, escribí el otro día esto:



    library("biOps")
    library("cluster")

    # leo una foto usando readJpeg de biOps
    # el objeto devuelto es un array mxnx3 dimensional
    # la última dimensión es el rgb de cada pixel

    tmp <- tempfile()
    download.file("http://blog.guiasenior.com/images/Retrato_Garber.jpg", tmp)
    x <- readJpeg(tmp)

    # si quieres mostrar la foto como un gráfico...
    #plot(x)

    # convertimos el array 3D nxmx3 en uno 2D (nm)x3
    # luego buscamos 5 clústers
    # esencialmente, buscamos 7 "píxels representativos"
    d <- dim(x)
    clarax <- clara(array(x, dim = c(d[1] * d[2], d[3])), 7)

    # reemplazamos cada rgb de cada cluster por su
    # "píxel representativo" (medioide) correspondiente
    rgb.clusters <- clarax$medoids[clarax$cluster,]

    # convertimos la matriz resultante en un array 3D
    # (invirtiendo la transformación anterior)
    # y representamos gráficamente
    plot(imagedata(array(rgb.clusters, dim = d)))



Obviamente, podéis cambiar la foto y hacer variar el número de _clústers_. Pero conviene recordar que:



	  * Es posible realizar manipulaciones de imágenes con R
	  * Operar con matrices/arrays es generalmente mucho más rápido y eficiente que con _dataframes_, como hace el autor de la entrada original.

