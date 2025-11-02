---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2021-02-16 09:13:00+00:00
draft: false
lastmod: '2025-04-06T19:12:51.013555'
related:
- 2024-06-20-mas-r-cuadrado.md
- 2022-03-10-diagramas-causales-hipersimples-1-errores.md
- 2021-10-26-sobre-las-r2-pequenas-y-sus-interpretaciones.md
- 2024-05-02-falacia-ecologica.md
- 2020-06-29-sobremuestreando-x-y-no-y.md
tags:
- r
- r cuadrado
- regresión
- regresión lineal
title: Hay mil motivos para criticar una regresión "trucha", pero una R² baja no es
  uno de ellos
url: /2021/02/16/hay-mil-motivos-para-criticar-una-regresion-trucha-pero-una-r2-baja-no-es-uno-de-ellos/
---

Todo esto arranca con el tuit:

{{< x user="juanrallo" id="1356242130746941443" >}}

Esa gráfica, extraída de un documento de la OCDE, creo, fue uno de los argumentos esgrimidos por JR Rallo para defender cierta postura que no viene al caso. Lo relevante para estas páginas es que fue contestado y protestado por muchos ---de algunos de los cuales, dada su autoproclamada condición de divulgadores científicos, cabría esperar más--- en términos exclusivamente de lo pequeño de la R².

Hay mil argumentos para criticar una regresión de ese estilo y mi favorita es _[10k regresiones truchas para que cada cual elija la que más le cuadre](https://datanalytics.com/2020/04/03/10k-regresiones-truchas-para-que-cada-cual-elija-la-que-mas-le-cuadre/)_, en estas mismas páginas. Pero no, la R² no es argumento de nada. La R² está relacionada con el error irreductible, la cantidad de ruido presente en los datos como pone en evidencia el ejemplo que desarrollo a continuación.

En primer lugar, genero varios conjuntos de datos con la misma estructura probabilística pero haciendo variar (crecer) el error irreductible, es decir, la $\sigma$ del error normal:

{{< highlight R >}}
n <- 3000
x <- rnorm(n)

foo <- function(sigma){
  y <- 4 - .2 * x + rnorm(n, 0, sigma)
  modelo <- lm(y ~ x)
  datos <- data.frame(
    x = x,
    y = y, sigma = sigma,
    r.squared = summary(modelo)$r.squared)
}

res <- do.call(
  rbind,
  lapply(seq(0, 2, length.out = 20), foo))
{{< / highlight >}}

Los datos tienen este aspecto:

{{< highlight R >}}
library(ggplot2)
ggplot(res, aes(x = x, y = y)) + geom_point(alpha = .2) +
  geom_smooth(method = "lm", col = "red") +
  facet_wrap(~sigma)
{{< / highlight >}}

![](/img/2021/02/r_squared_lm.png#center)

El ajuste es siempre el mismo y es ---queda propuesto como ejercicio para el lector--- perfectamente compatible con la formulación original del modelo. Sin embargo:

{{< highlight R >}}
r.squared <- unique(res[, c("sigma", "r.squared")])

plot(r.squared$sigma,
      r.squared$r.squared,
      type = "l",
      xlab = "sigma",
      ylab = "r squared",
      main = "r cuadrado según el error\nirreductible del modelo")
{{< / highlight >}}

![](/img/2021/02/r_squared_sigma.png#center)

¡Oh! La R² se desploma.

En fin...