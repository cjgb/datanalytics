---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2026-03-19
description: Descubre cuánto tiempo tardan en resolverse las conjeturas matemáticas
  mediante modelos de supervivencia en Excel y R.
lastmod: '2026-03-16T13:10:37.466327'
related:
- 2016-11-28-analisis-de-la-supervivencia-cuando-ningun-sujeto-ha-muerto.md
- 2015-02-12-parametrizacion-de-modelos-de-supervivencia-parametricos.md
- 2022-05-12-principio-mediocridad.md
- 2020-05-28-sobre-la-funcion-de-riesgo-en-el-analisis-de-la-supervivencia.md
- 2019-07-03-modelizacion-de-retrasos-una-aplicacion-del-analisis-de-supervivencia.md
tags:
- supervivencia
- matemáticas
title: El análisis de la supervivencia aplicado al tiempo de resolución de las conjeturas
  matemáticas más famosas
url: /2026/03/19/supervivencia-conjeturas-matematicas/
---

Se publicó hace un tiempo un [análisis bastante curioso sobre la supervivencia de las conjeturas matemáticas](https://aiimpacts.org/resolutions-of-mathematical-conjectures-over-time/) a lo largo del tiempo. Es de agradecer que su autora haga explícitas las objeciones que a cualquiera se le ocurren sobre el universo muestral y el método de muestreo:

> Estamos utilizando los tiempos de resolución de las _conjeturas recordadas_ como un _proxy_ de los tiempos de resolución de todas las conjeturas. El tiempo de resolución de las conjeturas recordadas puede estar sesgado de varias maneras: las conjeturas antiguas quizá tengan más probabilidades de ser recordadas si han sido resueltas que si no lo han sido; las conjeturas resueltas muy recientemente probablemente también tengan más probabilidades de ser recordadas (aunque esto solo importa porque la tasa a la que se formulan conjeturas probablemente ha cambiado con el tiempo); y las conjeturas que fueron especialmente difíciles de resolver también pueden resultar más notables. El último siglo contiene pocos datos, lo que hace particularmente fácil que las estimaciones correspondientes sean inexactas.

Así que no abundaré más sobre el asunto.

Lo curioso es cómo ajusta la función de supervivencia, supongo que condicionada por el hecho de usar Google Sheets:

1. Calcula la curva de Kaplan-Meier, la aproximación empírica a la función de supervivencia.
2. Usa la función LOGEST de Google Sheets, para ajustar $k = a_1 \times a_2^t$.

La función LOGEST ajusta esos datos tomando logaritmos y ajustando un modelo lineal (OLS) a $\log k = \log a_1 + t \log a_2$. Así obtiene la aproximación

$$S(t) \approx 0.9668239749 \times 0.9940802592^t = 0.9668239749 \exp(-0.005937332 t).$$

La _vida media_ de las conjeturas matemáticas la estima entonces en $116.74$ años (el resultado de $\log(.5) / \log(0.9940802592)$), aunque, en puridad, debería haber hecho

$$(\log(.5) - \log(0.9668239749) )/ \log(0.9940802592) = 111.06$$

Con R, el problema podría resolverse así:

```r
library(survival)

raw <- read.csv("datos.csv")

dat <- data.frame(
  time = raw$Length
)

dat$censor <- is.na(dat$time)
dat$time[dat$censor] <- raw$Years.ago.posed[dat$censor]
dat$status <- 1
dat$status[dat$censor] <- 0

dat$time2 <- dat$time
dat$time2[dat$time2 == 0] <- .01

m0 <- survreg(Surv(time2, status) ~ 1, dist = "exponential", data = dat)
```

El coeficiente del modelo es $5.07398$, que corresponde al parámetro $\lambda$ de la exponencial $1 / \exp(5.07398) = 0.006257457$ y, por tanto, la función de supervivencia

$$S(t) = \exp(-0.006257457 t),$$

a la que corresponde una semivida de $(\log 2) / 0.006257457 = 110.77$ años.

El análisis anterior me sugiere dos comentarios. El primero es que resulta muy instructivo proceder por primeros principios: estimar la curva de supervivencia primero, tratar de ajustarla después de la mejor manera posible. A veces se nos olvida que, en el fondo, estamos haciendo _precisamente_ eso cuando usamos `survreg` directamente. El otro ---como este análisis ilustra fehacientemente--- es cómo reinventamos la rueda innecesariamente tantas veces.