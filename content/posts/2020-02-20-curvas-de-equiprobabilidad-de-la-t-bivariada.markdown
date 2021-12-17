---
author: Carlos J. Gil Bellosta
date: 2020-02-20 09:13:00+00:00
draft: false
title: Curvas de equiprobabilidad de la t bivariada

url: /2020/02/20/curvas-de-equiprobabilidad-de-la-t-bivariada/
categories:
- probabilidad
tags:
- cauchy
- cuasiconvexidad
- probabilidad
---




El otro día me entretuve pintando [curvas de equiprobabilidad de la distribución de Cauchy](https://www.datanalytics.com/2020/02/07/la-densidad-de-una-cauchy-bivariada-es-cuasiconvexa/) (nota: debería haberlas llamado cuasicuasiconvexas en lugar de cuasiconvexas en su día). Pero la t es una_ cuerda tendida entre _la Cauchy y la normal y es instructivo echarles un vistazo a las curvas de equiprobabilidad según crecen los grados de libertad. Sobre todo, porque arrojan más información sobre la manera y el sentido en el que la t converge a la normal. Son:







![](/wp-uploads/2020/02/t_bivariate.png)








Y el código,







    library(plyr)
    library(ggplot2)

    df <- 1 + 2 * 0:15

    x <- seq(-10, 10, length.out = 1000)

    res <- ldply(df, function(i){
        tmp <- expand.grid(x = x, y = x)
        tmp$z <- log(dt(tmp$x, df = i) * dt(tmp$y, df = i))
        tmp$df <- i
        tmp
    })

    ggplot(res, aes(x = x, y = y, z = z)) +
        stat_contour() +
        facet_wrap(~df)



