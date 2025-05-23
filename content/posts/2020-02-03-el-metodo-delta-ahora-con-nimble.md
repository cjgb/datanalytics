---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2020-02-03 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:57:07.816126'
related:
- 2020-03-10-mas-sobre-el-metodo-delta-propagate.md
- 2020-01-22-siete-llaves-al-sepulcro-del-metodo-delta.md
- 2014-08-13-mis-procesos-puntuales-con-glm.md
- 2017-05-24-aquellos-que-ignoran-la-estadistica-etcetera.md
- 2012-03-06-mas-sobre-julia-ii-mi-primer-programa.md
tags:
- método delta
- nimble
- paquetes
- simulación
title: El "método delta", ahora con NIMBLE
url: /2020/02/03/el-metodo-delta-ahora-con-nimble/
---

[NIMBLE](https://r-nimble.org/) ha sido uno de mis más recientes y provechosos descubrimientos. Mejor que hablar de él, que otros lo harán mejor y con más criterio que yo, lo usaré para replantear el problema asociado el [método delta](https://datanalytics.com/2020/01/22/siete-llaves-al-sepulcro-del-metodo-delta/) que me ocupó el otro día.

Casi autoexplicativo:

{{< highlight R >}}
library(nimble)

src <- nimbleCode({
    T_half <- log(.5) / k
    k ~ dnorm(-0.035, sd = 0.00195)
})

mcmc.out <- nimbleMCMC(code = src,
    constants = list(),
    data = list(), inits = list(k = -0.035),
    niter = 10000,
    monitors = c("k", "T_half"))

out <- as.data.frame(mcmc.out)

# hist(out$T_half), sd(out$T_half), etc.
{{< / highlight >}}

Cosas:

* El código contenido en `src` se compila (vía C++) por eficiencia en algunos casos y lo contrario, como este, en otros. Aún no he visto la manera, aunque presuntamente es posible, de no tener que pasar por ello.
* El método que ilustro se extiende naturalmente a expresiones más complejas, con varias variables, etc.
* Eh, ¿y qué os parece NIMBLE tal como lo he presentado para simular datos?