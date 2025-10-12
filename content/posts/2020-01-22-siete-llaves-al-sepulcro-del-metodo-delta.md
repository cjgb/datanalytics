---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2020-01-22 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:45:31.033863'
related:
- 2017-05-24-aquellos-que-ignoran-la-estadistica-etcetera.md
- 2019-01-08-modelos-de-conteos-con-sobredispersion-con-stan.md
- 2017-10-16-modelos-no-lineales-directos-e-inversos.md
- 2014-08-13-mis-procesos-puntuales-con-glm.md
- 2020-09-24-un-decepcionante-metodo-de-inferencia-robusta-para-glms-de-poisson.md
tags:
- estadística
- método delta
- r
- remuestreo
- varianza
title: Siete llaves al sepulcro del método delta
url: /2020/01/22/siete-llaves-al-sepulcro-del-metodo-delta/
---

El desafortunado tuit

{{< x user="gilbellosta" id="1219196123094700032" >}}

es de lo más parecido a que me repitan unos chorizos que me ha ocurrido últimamente. Salvo que en lugar de chorizos, lo que se me manifestaban fueron años estudiando matemáticas y, por extensión, las partes más analíticas de la estadística.

Con inmerecida delicadeza, se me respondió:

{{< x user="joscani" id="1219350615987511297" >}}

Y sí, hay que cerrar con siete llaves el sepulcro del método delta o, en su defecto, activar el _pin_ parental el día que toque.

Rehagamos como Dios manda el ejemplo al que apuntaba mi enlace. Se trata de estimar la varianza ---sí, hay gente que dice varianza cuando, en realidad, quiere decir distribución--- de

$$ T = \frac{\log(.5)}{k}$$

donde $k \sim N(-0.035, 0.00195)$.

En el enlace, al cabo de mucho desarrollo de Taylor, de despejar, etc., llega a la conclusión de que $\sigma_T \sim 1.1033$.

Pero siempre se pueden hacer cosas como

{{< highlight R >}}
k_mean <- -0.035
k_sd   <- 0.00195

k_sample <- rnorm(10000, k_mean, k_sd)

T_sample <- log(.5) / k_sample
hist(T_sample)
sd(T_sample)
{{< / highlight >}}

para obtener un resultado similar y muchas más cosas enjundiosas (como poder apreciar la asimetría en la distribución resultante, etc.).