---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2017-12-11 08:13:03+00:00
draft: false
lastmod: '2025-04-06T18:49:33.844631'
related:
- 2010-11-02-comportamiento-inesperado-c2bfsolo-por-mi.md
- 2014-01-27-guia-de-estilo-de-r-de-google.md
- 2010-04-21-para-que-copien-peguen-y-disfruten.md
- 2010-07-24-un-curioso-bug-de-r.md
- 2010-04-14-la-opinion-sobre-r-de-una-pobre-senora.md
tags:
- programación
- r
title: Cuidado con los $
url: /2017/12/11/cuidado-con-los/
---

El otro tropezamos con el siguiente _artefacto_:

{{< highlight R >}}
a <- list(aa = 12, bb = 14)
is.null(a$a)
#[1] FALSE
a$a
#[1] 12
{{< / highlight >}}

No es un _bug_ de R, por que la documentación reza:

>x$name is equivalent to x[["name", exact = FALSE]]

Y se pueden constrastar:

{{< highlight R >}}
a[["a", exact = FALSE]]
a[["a", exact = TRUE]]
{{< / highlight >}}

**Comentarios:**

* Odio muchísimo los _bugs_ que no son _bugs_ porque están documentados en el la nota ‡2.a.(c), párrafo §23.3 de la sección 14 de un manual oscuro.
* Odio mucho al os gilipollas que se complacen en mandarte a leer manuales.
* Odio mucho las violaciones del [principio de mínima sorpresa](https://en.wikipedia.org/wiki/Principle_of_least_astonishment).
* Soy consciente de que R es, fundamentalmente, una plataforma de análisis interactivo y no (o solo subsidiariamente) un lenguaje de programación.
* Soy consciente de que muchos de los _defaults_ de R se decidieron antes de que se popularizasen los completadores de comandos.