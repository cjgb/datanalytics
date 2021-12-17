---
author: Carlos J. Gil Bellosta
date: 2017-12-11 08:13:03+00:00
draft: false
title: Cuidado con los $

url: /2017/12/11/cuidado-con-los/
categories:
- r
tags:
- programación
- r
---

El otro tropezamos con el siguiente _artefacto_:




    a <- list(aa = 12, bb = 14)
    is.null(a$a)
    #[1] FALSE
    a$a
    #[1] 12




No es un _bug_ de R, por que la documentación reza:



<blockquote>x$name is equivalent to x[["name", exact = FALSE]]</blockquote>



Y se pueden constrastar:




    a[["a", exact = FALSE]]
    a[["a", exact = TRUE]]




**Comentarios:**




	  * Odio muchísimo los _bugs_ que no son _bugs_ porque están documentados en el la nota ‡2.a.(c), párrafo §23.3 de la sección 14 de un manual oscuro.
	  * Odio mucho al os gilipollas que se complacen en mandarte a leer manuales.
	  * Odio mucho las violaciones del [principio de mínima sorpresa](https://en.wikipedia.org/wiki/Principle_of_least_astonishment).
	  * Soy consciente de que R es, fundamentalmente, una plataforma de análisis interactivo y no (o solo subsidiariamente) un lenguaje de programación.
	  * Soy consciente de que muchos de los _defaults_ de R se decidieron antes de que se popularizasen los completadores de comandos.



