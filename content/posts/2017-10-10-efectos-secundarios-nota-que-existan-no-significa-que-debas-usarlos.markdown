---
author: Carlos J. Gil Bellosta
date: 2017-10-10 08:13:11+00:00
draft: false
title: 'Efectos secundarios (nota: que existan no significa que debas usarlos)'

url: /2017/10/10/efectos-secundarios-nota-que-existan-no-significa-que-debas-usarlos/
categories:
- computación
- r
tags:
- entornos
- programación
- r
---

Una función no debería cambiar nada de cuanto la rodea. Debería devolver algo y ya. Se acepta barco como animal acuático cuando hay funciones que escriben en _logs_, guardan datos en disco o crean gráficos.

R deja que los usuarios se disparen en el pie permitiendo hacer cosas tan peligrosas como:




    a <- new.env()

    a$1     # error

    foo <- function(){
      a$a <- 1
    }

    foo()
    a$a
    # [1] 1




De la misma manera, si le enseñas un cuchillo a una vieja, es posible que te dé su bolso con todo lo que contiene. Pero eso no significa que debas usar los cuchillos para tales fines.
