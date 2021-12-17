---
author: Carlos J. Gil Bellosta
date: 2021-02-18 09:13:00+00:00
draft: false
title: ¿Dónde son más frecuentes las muestras de una distribución en dimensiones altas?

url: /2021/02/18/donde-son-mas-frecuentes-las-muestras-de-una-distribucion-en-dimensiones-altas/
categories:
- estadística
- r
tags:
- entropía
- estadística bayesiana
- información
- mcmc
---




Esta es una cosa bastante contraintituiva. Uno diría que en la moda, pero no es _exactamente_ así.







En una dimensión tal vez sí (nótese que `log(p)` es función de la distancia al centro):







    muestra <- rnorm(10000)
    logp <- log(dnorm(muestra))
    hist(logp, breaks = 100, main = "distribución de log(p)")







![](/wp-uploads/2021/02/typical_set_n_1.png)








Pero en dimensiones más altas, la cosa cambia:







    library(mvtnorm)
    muestra <- rmvnorm(10000, rep(0, 10), diag(rep(1, 10)))
    logp <- log(dmvnorm(muestra, rep(0, 10), diag(rep(1, 10))))
    hist(logp, breaks = 100, main = "distribución de log(p)")





![](/wp-uploads/2021/02/typical_set_n_10.png)






Lo más frecuente es obtener observaciones ya no próximas al centro sino en un anillo alrededor de él y a cierta distancia del mismo. El centro sigue siendo el punto más probable, la moda, pero es demasiado chiquito para contener demasiada muestra. Lejos hay mucho espacio, pero tiene una probabilidad ínfima. Las observaciones hay que buscarlas en un anillo alrededor del centro.







El por qué esto es relevante (y dónde), el por qué se ha usado `log` en todo lo anterior en lugar de, no sé, `sqrt`, así como mucha más información (muy sesuda) al respecto, está a un [enlace](https://statmodeling.stat.columbia.edu/2020/08/02/the-typical-set-and-its-relevance-to-bayesian-computation/) de los interesados.



