---
author: Carlos J. Gil Bellosta
date: 2017-02-27 08:13:18+00:00
draft: false
title: Consultando el número de visitas a páginas de la Wikipedia con R

url: /2017/02/27/consultando-el-numero-de-visitas-a-paginas-de-la-wikipedia-con-r/
categories:
- r
tags:
- r
- series temporales
- stl
- wikipedia
---

Hace un tiempo probé el [paquete `wikipediatrend` de R](https://cran.r-project.org/package=wikipediatrend) ya no recuerdo para qué. Desafortunadamente, el servicio que consulta debía de estar caído y no funcionó. Ahí quedó la cosa.

Una [reciente entrada de Antonio Chinchón en su blog](https://fronkonstin.com/2017/02/21/who-is-alan-turing/) me ha invitado a revisitar la cuestión y ahora, al parecer, `stats.grok.se` vuelve a estar levantado. Por lo que se pueden hacer cosas como:

{{< highlight R >}}
visitas <- wp_trend("R_(lenguaje_de_programaci%C3%B3n)",
    from = "2010-01-01", to = Sys.Date(),
    lang = "es")
{{< / highlight >}}

[Aquí ahorro al lector unos párrafos de pésima literatura.]

{{< highlight R >}}
    plot(visitas$date, visitas$count, type = "l",
         main = "Visitas a la página de R en la Wikipedia (es)",
         xlab = "fecha", ylab = "número de visitas")
{{< / highlight >}}

produce

![](/wp-uploads/2017/02/visitas_wikipedia_r.png#center)

[Aquí podría añadir más ejemplos la peor prosa.]

{{< highlight R >}}
dat <- visitas[-(1:274),]
dat$date[1]
#"2010-10-02"
dat <- ts(dat$count,
    start = c(2010, 10, 2), frequency = 365.25)
plot(stl(dat, s.window = "per"))
{{< / highlight >}}

produce

![](/wp-uploads/2017/02/wikipedia_r_decomposition.png#center)
