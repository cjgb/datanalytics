---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2017-05-24 08:13:13+00:00
draft: false
lastmod: '2025-04-06T18:59:10.059943'
related:
- 2020-01-22-siete-llaves-al-sepulcro-del-metodo-delta.md
- 2021-09-21-aun-mas-sobre-propagacion-de-errores-y-rv.md
- 2020-03-10-mas-sobre-el-metodo-delta-propagate.md
- 2017-10-16-modelos-no-lineales-directos-e-inversos.md
- 2018-10-23-abc-2.md
tags:
- car
- estadística
- r
- método delta
- propagación
title: Aquellos que ignoran la estadística etcétera
url: /2017/05/24/aquellos-que-ignoran-la-estadistica-etcetera/
---

Ayer asistí a una charla sobre `errors`. Brevemente (porque está estupendamente explicado, motivado y documentado por su autor, al que aprovecho la ocasión para saludar), hace esto:

{{< highlight R >}}
library(errors)
valores <- unlist(list(a = 1, b = 2, c = 3))
vars    <- c(1, 1, 1)    # varianzas de esos datos/medidas
sds     <- sqrt(vars)

# errores
x <- valores
errors(x) <- sds
format(x[1] * sin(x[2])^3, notation = "plus-minus", digits = 3)
#[1] "0.75 +/- 1.28"
{{< / highlight >}}

Y nuestro viejo, clásico, manido, infrautilizado, semidesconocido mas no por ello menos querido método delta, ¿para qué existe en lugar de (como elucubraba el filósofo), simplemente, no existir? ¿Para qué otra cosa sino para aprenderlo me levanté yo aquella fría mañana del 94 sino para contemplarlo proyectado de diapositivas manuscritas de acetato? ¿Fue en vano?

Pues no, el método delta vive, colea y pega soberanas patadas en el culo. Así:

{{< highlight R >}}
library(car)
deltaMethod(valores, vcov. = diag(vars), "a * sin(b)^3")
#                Estimate       SE    2.5 %   97.5 %
#  a * sin(b)^3 0.7518269 1.277012 -1.75107 3.254724
{{< / highlight >}}