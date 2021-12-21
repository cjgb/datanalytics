---
author: Carlos J. Gil Bellosta
date: 2019-12-03 09:13:00+00:00
draft: false
title: La población envejece pero, ¿envejecen también los grupos de edad?

url: /2019/12/03/la-poblacion-envejece-pero-envejecen-tambien-los-grupos-de-edad/
categories:
- estadística
- números
- r
tags:
- demografía
- edad
- epidemiología
- ine
- mortalidad
- r
---

La pregunta es relevante porque en demografía, epidemiología y otras disciplinas entre las que no se suele contar la economía, se suele agrupar la población en grupos de edad (y/u otras variables relevantes). Son habituales los grupos de edad quinquenales y la pregunta es: ¿son homogéneos dichos grupos de edad a lo largo del tiempo?

No es una pregunta baladí: ha dado lugar a noticias como _[Why So Many White American Men Are Dying](https://www.newsweek.com/2016/01/08/big-pharma-heroin-white-american-mortality-rates-408354.html)_ que no, no se explican por la _desesperación_ o por la epidemia de opioides sino por [el envejecimiento relativo de los grupos de edad en cuestión](https://statmodeling.stat.columbia.edu/2015/11/10/death-rates-have-been-increasing-for-middle-aged-white-women-decreasing-for-men/). En EE.UU., claro, no en España.

¿Y aquí?

La edad media dentro de los grupos de edad quinquenales ha tenido la siguiente evolución en el siglo que corre:

![](/wp-uploads/2019/12/edad_grupos_edad_quinquenales.png)

Y la de los decenales,

![](/wp-uploads/2019/12/edad_grupos_edad_decenales.png)

No sé si separando por sexos (cosa que dejo como ejercicio) aparecerán patrones más pronunciados. Por si acaso, dejo el código utilizado:

{{< highlight R "linenos=true" >}}
library(pxR)
library(plyr)
library(ggplot2)

dat <- as.data.frame(read.px("02003.px"))
dat <- dat[, c(1, 4, 6)]
colnames(dat) <- c("year", "edad", "n")

dat$year <- as.numeric(as.character(dat$year))
dat$edad <- as.numeric(gsub(" .*", "", dat$edad))
dat$grupo_quinquenal <- 5 * dat$edad %/% 5

dat <- dat[dat$edad < 100,]


tmp <- ddply(dat,
                .(year, grupo_quinquenal),
                summarize,
                edad_media = weighted.mean(edad + .5, n))

ggplot(tmp, aes(x = year, y = edad_media)) +
    geom_line() +
    facet_wrap(~grupo_quinquenal,
                ncol = 3,
                scales = "free_y")

dat$grupo_decenal <- 10 * dat$edad %/% 10

tmp <- ddply(dat,
                .(year, grupo_decenal),
                summarize,
                edad_media = weighted.mean(edad + .5, n))

ggplot(tmp, aes(x = year, y = edad_media)) +
    geom_line() +
    facet_wrap(~grupo_decenal,
                ncol = 3,
                scales = "free_y")
{{< / highlight >}}


