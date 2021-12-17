---
author: Carlos J. Gil Bellosta
date: 2017-07-13 08:13:00+00:00
draft: false
title: Gelmaneando

url: /2017/07/13/gelmaneando/
categories:
- estadística
- r
tags:
- efectos
- estadística
- prueba de hipótesis
- r
---

Hoy, gelmaneo así:




    bar <- function(n, reps = 1e4){
      foo <- function(n){
        x <- rnorm(n)
        tmp <- t.test(x)
        c(tmp$p.value, abs(mean(x)))
      }

      res <- replicate(reps, foo(n))
      tmp <- t(res)
      tmp <- tmp[tmp[,1] < 0.05,]
      tmp[,2]
    }

    res <- lapply(c(3, 10, 20, 50, 100), bar)
    sapply(res, mean)
    #[1] 0.8662636 0.6583157 0.4934551 0.3240322 0.2337086




Resumo:



	  * Fabrico un montón de errores de tipo I. Recuérdese: error de tipo I implica artículo publicado.
	  * Hago variar el número de sujetos (3, 10, etc.), n.
	  * Mido el tamaño (promedio) del efecto, E; el estudio de su distribución, ejercicio para el lector.


Y efectivamente, E es función decreciente de n.

Si lo anterior se lee de izquierda a derecha, es casi perogrullada. Pero si se lee de derecha a izquierda resulta que si los efectos son en general pequeños (¡y casi todos lo son!) y el tamaño muestral es también pequeño, ¡todos los resultados son falsos!
