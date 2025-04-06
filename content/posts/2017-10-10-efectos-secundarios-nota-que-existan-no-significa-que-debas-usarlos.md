---
author: Carlos J. Gil Bellosta
categories:
- programación
- r
date: 2017-10-10 08:13:11+00:00
draft: false
lastmod: '2025-04-06T19:12:13.219043'
related:
- 2010-04-21-para-que-copien-peguen-y-disfruten.md
- 2017-12-11-cuidado-con-los.md
- 2011-05-13-consejos-para-utilizar-r-en-produccion.md
- 2011-10-26-herramientas-de-depuracion-en-r.md
- 2017-05-16-soy-un-dinosaurio-sobre-las-novedades-de-r.md
tags:
- entornos
- programación
- r
title: 'Efectos secundarios (nota: que existan no significa que debas usarlos)'
url: /2017/10/10/efectos-secundarios-nota-que-existan-no-significa-que-debas-usarlos/
---

Una función no debería cambiar nada de cuanto la rodea. Debería devolver algo y ya. Se acepta barco como animal acuático cuando hay funciones que escriben en _logs_, guardan datos en disco o crean gráficos.

R deja que los usuarios se disparen en el pie permitiendo hacer cosas tan peligrosas como:

{{< highlight R >}}
a <- new.env()

a$1     # error

foo <- function(){
  a$a <- 1
}

foo()
a$a
# [1] 1
{{< / highlight >}}

De la misma manera, si le enseñas un cuchillo a una vieja, es posible que te dé su bolso con todo lo que contiene. Pero eso no significa que debas usar los cuchillos para tales fines.