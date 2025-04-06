---
author: Carlos J. Gil Bellosta
categories:
- gráficos
- números
- r
date: 2014-07-17 07:13:54+00:00
draft: false
lastmod: '2025-04-06T19:11:04.733274'
related:
- 2011-09-21-facetas-en-ggplot2-al-hilo-de-otra-gananada.md
- 2012-11-28-coma-cero-dos-por-ciento-anda-ya.md
- 2013-01-24-tu-tasa-de-paro-personal.md
- 2014-08-12-tienen-sentido-las-tasas-municipales-de-desempleo.md
- 2012-03-29-otra-de-huelgas.md
tags:
- desempleo
- epa
- facetas
- ggplot2
- gráficos
- números
- pequeños múltiplos
title: Facetas para entender, tal vez, la evolución del paro
url: /2014/07/17/facetas-para-entender-tal-vez-la-evolucion-del-paro/
---

La verdad, no sé de dónde los sacan porque la EPA es trimestral. Pero el INE publica datos mensuales de la tasa de desempleo y las cuelga de una de esas [URLs que tienen pinta de cambiar con cualquier soplo](http://www.ine.es/jaxi/tabla.do?path=/t38/bme2/t42/p04/l1/&file=1800001.px&type=pcaxis&L=1) (es decir, aviso de que en cualquier momento el enlace deja de funcionar). Por ssi acaso, estos son los [datos a día de hoy](/uploads/paro_mensual.txt).

También aparecen publicados regularmente en prensa. Y los expertos opinan sobre si la cifra es buena y o mala. Pero, ¿buena o mala con respecto a qué? Así que hoy voy a ensayar un marco en el que plantear la pregunta:

* Voy a considerar variaciones mensuales de la tasa de paro (mes con respecto al anterior).
* Voy a comparar los meses del histórico entre sí.
* Y como no sabía si era mejor utilizar la serie temporal o un diagrama de cajas, voy a tratar de combinarlos.

Así:

{{< highlight R >}}
library(ggplot2)
library(plyr)

raw <- read.table("/uploads/paro_mensual.txt")
dat <- data.frame(mes = raw$V1[-1], delta = diff(raw$V2))

tmp <- do.call(rbind, strsplit(as.character(dat$mes), "M"))
tmp <- apply(tmp, 2, as.numeric)

dat$anno <- tmp[,1]
dat$mes  <- tmp[,2]

dat.q <- ddply(dat, .(mes), summarize, q.25 = quantile(delta, 0.25),
                q.50 = median(delta),
                q.75 = quantile(delta, 0.75))

ggplot(dat, aes(x = anno, y = delta)) +
  geom_line(size = 1.2) + facet_wrap(~mes) +
  geom_hline(data = dat.q, aes(yintercept = q.50)) +
  geom_hline(data = dat.q, aes(yintercept = q.25), linetype = "dashed") +
  geom_hline(data = dat.q, aes(yintercept = q.75), linetype = "dashed") +
  xlab("año") + ylab("variación mensual tasa de paro")
{{< / highlight >}}

El resultado es:

[![tasa_paro_mensual](/wp-uploads/2014/07/tasa_paro_mensual.png#center)
](/wp-uploads/2014/07/tasa_paro_mensual.png#center)

Cada recuadro corresponde a un mes (identificado por su número, obviamente). El eje horizontal, son los años desde el principio de la serie. La serie temporal, como indico arriba, es la diferencia del valor de la tasa de desempleo del mes con el anterior. Las líneas horizontales son los cuartiles de las deltas del mes en cuestión. Y mil perdones a todos mis lectores que no sean directivos por explicarles la gráfica como si fuesen tontos.

Se aprecia cómo últimamente estamos volviendo al los entornos de la mediana. Incluso situándonos por debajo de ella puntualmente.

Acabo con una nota técnica para mí: así es como hay que hacer, i.e., usando `geom_hline` para añadir rectas horizontales a las facetas de `ggplot2`.