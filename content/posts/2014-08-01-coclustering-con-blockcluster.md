---
author: Carlos J. Gil Bellosta
date: 2014-08-01 07:13:18+00:00
draft: false
title: Coclustering con blockcluster

url: /2014/08/01/coclustering-con-blockcluster/
categories:
- r
tags:
- clústering
- cran
- r
---

Guardo desde hace un tiempo el enlace al paquete [`blockcluster`](http://cran.r-project.org/web/packages/blockcluster/index.html) de R que igual puede ser del interés de alguno de mis lectores.

No lo he probado pero sospecho que cualquier día me puede sacar de un apuro. Implementa lo que dice, el coclústering, concepto que se explica mejor, como el efecto de las dietas milagrosas, con la foto del antes y el después:

[![coclustering00](/wp-uploads/2014/07/coclustering00.png#center)
](/wp-uploads/2014/07/coclustering00.png#center)

Esto es: la entrada es una matriz y la salida es una matriz reorganizada tanto en sus filas como en sus columnas en la que se han detectado bloques homogéneos.

Las matrices pueden tener ceros y unos, como en el ejemplo anterior, o números entre 0 y 255 (i.e., ser fotos), como en

[![coclustering02](/wp-uploads/2014/07/coclustering02.png#center)
](/wp-uploads/2014/07/coclustering02.png#center)

o representar documentos (y frecuencias de términos):

[![coclustering01](/wp-uploads/2014/07/coclustering01.png#center)
](/wp-uploads/2014/07/coclustering01.png#center)

Estoy convencido de que cualquier día le doy un buen uso. Y si alguien se me adelanta... ¡que avise en los comentarios!

