---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2010-04-14 22:36:49+00:00
lastmod: '2025-04-06T19:07:02.861745'
noindex: true
related:
- 2010-04-21-para-que-copien-peguen-y-disfruten.md
- 2021-02-16-hay-mil-motivos-para-criticar-una-regresion-trucha-pero-una-rc2b2-baja-no-es-uno-de-ellos.md
- 2014-07-04-vectorizacion-en-r-un-contraejemplo.md
- 2021-07-14-mi-apuesta-para-el-larguisimo-plazo-julia.md
- 2014-05-14-y-sin-embargo-te-quiero.md
tags:
- r
title: La opinión sobre R de una pobre señora
url: /2010/04/14/la-opinion-sobre-r-de-una-pobre-senora/
---

Me llegan noticias de una pobre señora que, se conoce, tiene un blog en el que [habla de cosas que, da la impresión, le trascienden](http://www.thejuliagroup.com/blog/?p=433). Dice lo siguiente:


>Contrary to what some people seem to think, R is definitely not the next big thing, either. I am always surprised when people ask me why I think that, because to my mind it is obvious.


Vamos, que no cree en R y que, además, esa idea suya le parece la más obvia del mundo. Para apoyar su argumento, muestra el siguiente ejemplo de código en R, supuestamente muy feo (más, de hecho de lo que se imagina):

{{< highlight R >}}
a<--0.45
sigma<-0.00000
y<-a*x+xnorm*sigma
r<-cor(x,y)
plot(-4:4, -4:4, xlab= 'x', ylab= 'y', main= "", sub = "",type = "n")
points(x,y,pch=19,cex=0.2)
legend(-3.9, 3.8,substr(paste("r=",r), 1, 8), bg='gray90')
{{< / highlight >}}


¡Alma de Dios! ¿Qué es `xnorm`, que en mi libro no sale? ¿Dónde defines el _x_ que luego quieres pintar? ¿Qué coeficiente de correlación esperas definiendo la varianza igual a cero? ¿Tratas de usar las opciones más enrevesadas y añadir parámetros innecesarios por afear el código o porque no lo sabes hacer mejor?

Ay, ay, ay, qué señora...

Nota: La entrada que aquí discuto [ha atraído la atención de otros _blogueros_ a los que sigo](http://www.iq.harvard.edu/blog/sss/archives/2010/04/the_inevitable.shtml). En fin...