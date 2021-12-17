---
author: Carlos J. Gil Bellosta
date: 2015-11-10 08:13:55+00:00
draft: false
title: 'Asignación en R: ¿flecha o lo innombrable?'

url: /2015/11/10/asignacion-en-r-flecha-o-lo-innombrable/
categories:
- r
tags:
- r
- tracemem
---

Alguien que no quiero nombrar (pero que sabe de sobra quién es) me comentaba el otro día algo que no sabía de la asignación en R: las presuntas diferencias entre `<-` e `=`. Que en resumen eran:



	  * ambos asignan
	  * pero `=` hace una copia del objeto asignado
	  * mientras que `<-` no.


Como consecuencia, `<-` es más eficiente desde el punto de vista de la gestión de la memoria.

¿Será cierto? ¿Qué nos dirá [`tracemem`](http://www.datanalytics.com/2011/10/03/gestion-avanzada-de-memoria-en-r-tracemem/) al respecto? No seáis vagos y probad



    a <- 1:10
    b.0 <- a
    b.1 = a

    tracemem(a)
    tracemem(b.0)
    tracemem(b.1)



por vuestra cuenta.

(Nota: independientemente del resultado, yo siempre uso la flechica).





