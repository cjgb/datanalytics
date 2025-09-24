---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2010-04-21 00:18:06+00:00
lastmod: '2025-04-06T18:51:53.145227'
related:
- 2010-04-14-la-opinion-sobre-r-de-una-pobre-senora.md
- 2010-04-21-para-que-copien-peguen-y-disfruten-addenda.md
- 2017-04-05-etsa-es-una-edntara-a-pubrea-de-roreetcs-cnctoaumes.md
- 2012-01-12-cosa-prodigiosa-sin-palabras-i.md
- 2015-02-11-recurrencia-recurrente.md
tags:
- r
title: Para que copien, peguen y disfruten
url: /2010/04/21/para-que-copien-peguen-y-disfruten/
---

El otro día [hablé de una señora que había hecho algunos comentarios poco avisados sobre R](http://datanalytics.wordpress.com/2010/04/14/la-opinion-sobre-r-de-una-pobre-senora/). A las alegaciones de que el código de R que publicó en su página no es  siquiera código de R [respondió diciendo que lo había copiado "de internet"](http://www.thejuliagroup.com/blog/?p=433) (¡cuánto de pernicioso hay por esas páginas por donde uno navega sin temor de Dios!).

Para incrementar la probabilidad de que, cuando esto vuelva a ocurrir, el código pegado _de internet_ sea más bonito que el arriba mencionado, dejo acá este (e invito a mis lectores a ejecutarlo):

{{< highlight R >}}
v.x <- c(0,1,2)
v.y <- c(0,1,0)
vec <- sample(1:3, 100000, replace = T)
iter <- function(ini, v){
    out <- rep(ini, length(v))
    for (i in 2:length(v))
        out[i] <- (out[i-1] + v[i]) / 2
    out
}
plot(iter(runif(1), v.x[vec]),
        iter(runif(1), v.y[vec]), pch = ".")
{{< / highlight >}}

Prometo que a nadie se le van a caer las tuercas del ordenador por correrlo. De lo que es, lo que significa, de dónde procede y lo poco para lo que sirve hablaré otro día en que no sea hora de estar en brazos de Morfeo.