---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2017-03-03 08:13:17+00:00
draft: false
lastmod: '2025-04-06T19:13:06.540296'
related:
- 2017-02-27-consultando-el-numero-de-visitas-a-paginas-de-la-wikipedia-con-r.md
- 2013-01-10-una-aplicacion-seo-con-r.md
- 2017-10-20-he-tratado-de-contrastar-una-hipotesis-sin-exito-asi-que-solo-publico-el-subproducto.md
- 2020-10-05-una-potencial-consecuencia-positiva-de-lo-del-coronavirus.md
- 2024-03-11-cortos-01.md
tags:
- paquetes
- prophet
- r
- wikipedia
title: Wikipedia + prophet
url: /2017/03/03/wikipedia-prophet/
---

El otro día escribí sobre [visitas a la Wikipedia](https://datanalytics.com/2017/02/27/consultando-el-numero-de-visitas-a-paginas-de-la-wikipedia-con-r/). El otro día (posiblemente otro) oí hablar de [`prophet`](https://cran.r-project.org/web/packages/prophet/index.html).

Hoy con

{{< highlight R >}}
library(wikipediatrend)
library(prophet)
library(ggplot2)

visitas <- wp_trend(
    "R_(lenguaje_de_programaci%C3%B3n)",
    from = "2010-01-01", to = Sys.Date(),
    lang = "es")

mis.visitas <- visitas[, c("date", "count")]
colnames(mis.visitas) <- c("ds", "y")

pasado <- mis.visitas[1:1500,]
m <- prophet(pasado)

futuro <- make_future_dataframe(m,
    periods = nrow(mis.visitas) - 1500)
prediccion <- predict(m, futuro)

pred.plot <- plot(m, prediccion)
pred.plot +
    geom_line(data = mis.visitas[1501:nrow(mis.visitas),],
        aes(x = ds, y = y), col = "red", alpha = 0.2) +
    xlab("fecha") + ylab("visitas") +
    ggtitle("Predicción de visitas a la página de R\nen la Wikipedia con prophet")
{{< / highlight >}}



construyo

![](/wp-uploads/2017/03/prediccion_wikipedia_prophet.png#center)


que muestra la predicción del número de visitas a la [página de R en la Wikipedia](https://es.wikipedia.org/wiki/R_(lenguaje_de_programaci%C3%B3n)) basada en las primeras 1500 observaciones de la serie. Para las restantes, el gráfico muestra tanto los valores predichos como los reales (en rojo pálido).

`prophet`, obviamente, es incapaz de predecir el cambio de régimen en la tendencia que tiene la serie (véase [esto](https://datanalytics.com/2017/02/27/consultando-el-numero-de-visitas-a-paginas-de-la-wikipedia-con-r/)) por lo que la predicción está un tanto sesgada. Pero, bueno, ahí queda para referencia de todos.