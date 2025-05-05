---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2017-12-04 08:13:28+00:00
draft: false
lastmod: '2025-04-06T18:49:16.331013'
related:
- 2022-06-09-el-modelo-es-y.md
- 2014-08-11-procesos-puntuales-una-primera-aproximacion.md
- 2016-05-09-encuestas-electorales-medios-y-sesgos-ii.md
- 2015-11-13-gam.md
- 2021-10-01-esos-felices-momentos-le-verrier.md
tags:
- inla
- lluvia
- madrid
- r
- sequía
title: La magnitud de la sequía
url: /2017/12/04/la-magnitud-de-la-sequia/
---

Cuando tienes una serie temporal _al uso_ (sin entrar a definir qué es eso), uno puede aplicar descomposiciones tmabién _al uso_, como `stl`, para extraer tendencia y estacionalidad, de la forma

![](/wp-uploads/2017/02/wikipedia_r_decomposition.png#center)

como en [esta entrada previa](https://datanalytics.com/2017/02/27/consultando-el-numero-de-visitas-a-paginas-de-la-wikipedia-con-r/).

Lluvia.

La serie de la lluvia es otra cosa. Uno ve si llueve o no llueve (típicamente no). Lo que uno no ve es la probabilidad, que varía a lo largo del año, de que llueva. Pasa lo mismo con monedas (uno ve caras o cruces, no la probabilidad de cara), clientes que compran (uno ve si compra o no, no la probabilidad de compra), etc. Pero la probabilidad existe y en estimarla consiste frecuentemente el trabajo de algunos.

En el caso de la lluvia, el que llueva un día $t$ (más de 1 mm, que es equivalente a 1 l/m²), o $latex X_t$ en lo que sigue, es $latex X_t \sim \text{Bernoulli}(p_t)$ y se puede suponer que las $latex p_t$ tienen estacionalidad anual (en abril, aguas mil) y una tendencia histórica. Como arriba, pero con una diferencia: las $latex p_t$ no se observan diariamente; a lo más, se observa si llueve o deja de llover un día determinado.

El modelo que propongo es

$$ X_{m} \sim \text{Binom}(l(m), p_m)$$

donde $latex X_{m}$ es el número de días que llueve (más de 1 mm) en el mes $latex m$; $latex l(m)$ es el número de días del mes y $latex p_m$ es la probabilidad de lluvia en cada uno de los días del mes. Esta probabilidad es

$$ p_m = \frac{\exp(\eta_m)}{1 + \exp(\eta_m)}$$


donde $latex \eta_m$ se descompone como la suma de una componente estacional (12 valores) y una tendencia global. Que son, según mis cálculos,

![](/wp-uploads/2017/12/estacionalidad_lluvia_madrid.png#center)

y

![](/wp-uploads/2017/12/tendencia_lluvia_madrid.png#center)

Se aprecia la [sequía de 2005](http://www.elmundo.es/elmundo/2005/12/27/ciencia/1135698030.html) y [la de 2011 y 2012](http://www.elperiodicomediterraneo.com/noticias/sociedad/espana-vivio-2011-2012-ano-mas-seco-siglo-xviii_1006874.html). Y la actual, por supuesto.

(Me asalta una duda: ¿contendrá esa tendencia final tan apocalíptica algún artefacto de mi opción de modelado?)

La probabilidad de lluvia (diaria) ha evolucionado así:

![](/wp-uploads/2017/12/probabilidad_lluvia_madrid.png#center)

Los datos de pluviosidad histórica están en AEMET, pero sacarlos de ahí es tarea imposible. La AEMET está gobernada por [funcionarios que dicen _ñí_](https://www.youtube.com/watch?v=QDUCN_pzV1U). Así que [los he bajado de NOAA](https://datanalytics.com/2017/06/13/la-aemet-ha-muerto-larga-vida-a-la-noaa/); los de NOAA son funcionarios también, solo que estadounidenses y con vocación de servicio público. Como yo también la tengo, [los comparto](/uploads/lluvia_madrid.zip).

También el código, para referencia de todos. La magia, en todo caso, es producto del maravilloso [paquete `INLA` de R](http://www.r-inla.org/). La parte más relevante del código es el lugar donde defino el modelo. La más discutible, es donde extraigo las estimaciones de los parámetros (me quedo con la moda de la posteriori). Pero es mejorable con poco esfuerzo.

{{< highlight R >}}
library(ggplot2)
library(lubridate)
library(INLA)
library(plyr)

lluvia <- read.csv("1140486.csv")
lluvia <- lluvia[, c("DATE", "PRCP")]
lluvia$DATE <- as.Date(lluvia$DATE)

plot(lluvia$DATE, lluvia$PRCP, type = "l", xlab = "",
     ylab = "precipitación",
     main = "Precipitación diaria en Madrid\n(2000-2017)")

lluvia$llueve <- 1 * (lluvia$PRCP > 0)
lluvia$fecha <- as.numeric(lluvia$DATE)
lluvia$fecha <- 0 + lluvia$fecha - min(lluvia$fecha)
lluvia$doy   <- 1 + lluvia$fecha %% 365

# mensual

mensual <- lluvia
mensual$mes <- month(mensual$DATE)
mensual$ano <- year(mensual$DATE)

mensual <- ddply(mensual, .(ano, mes), summarize,
                    dias_lluvia = sum(llueve),
                    dias_totales = length(mes))

mensual$t <- 1:nrow(mensual)

formula <- dias_lluvia ~ f(mes, model="rw2", cyclic = TRUE, param = c(1,0.0001)) +
     f(t, model = "rw2", cyclic = FALSE, param = c(1,0.0001))
modelo <- inla(formula, family = "binomial", Ntrials = dias_totales, data = mensual, verbose = TRUE)

periodicidad <- sapply(modelo$marginals.random$mes, function(x) x[which.max(x[,2]),1])
tendencia <- sapply(modelo$marginals.random$t, function(x) x[which.max(x[,2]),1])
tmp <- modelo$marginals.fixed[[1]]
indep <- tmp[which.max(tmp[,2]),1]

prob <- indep + tendencia + rep(periodicidad, 100)[1:length(tendencia)]
prob <- exp(prob) / (1 + exp(prob))


png("/tmp/estacionalidad_lluvia_madrid.png", height = 400, width = 800)
plot(1:12, periodicidad, type = "l", xlab = "mes del año", ylab = "",
     main = "componente estacional de la probabilidad de lluvia\nMadrid, 2000-2017")
dev.off()

png("/tmp/tendencia_lluvia_madrid.png", height = 400, width = 800)
fechas <- seq(min(lluvia$DATE), max(lluvia$DATE), by = "1 month")
plot(fechas, tendencia, type = "l", xlab = "fecha", ylab = "",
     main = "tendencia de la probabilidad de lluvia\nMadrid, 2000-2017")
dev.off()

png("/tmp/probabilidad_lluvia_madrid.png", height = 400, width = 800)
plot(fechas, prob, type = "l", xlab = "fecha", ylab = "",
     main = "probabilidad diaria de lluvia\nMadrid, 2000-2017")
dev.off()
{{< / highlight >}}