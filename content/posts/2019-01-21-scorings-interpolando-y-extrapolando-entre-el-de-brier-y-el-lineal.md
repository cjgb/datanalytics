---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2019-01-21 08:13:13+00:00
draft: false
lastmod: '2025-04-06T18:53:34.532089'
related:
- 2019-01-17-mejores-predictores-un-ejemplo-el-de-brier.md
- 2019-01-16-una-de-las-mil-maneras-malas-de-elegir-al-mejor-predictor.md
- 2022-02-17-examenes-probabilisticos.md
- 2015-07-06-una-interpretacion-rapida-y-sucia-de-los-coeficientes-de-la-regresion-logistica.md
- 2019-01-23-reglas-de-scoring-impropias-un-ejemplo.md
tags:
- predicción
- scorings
- brier
title: 'Scorings: interpolando (y extrapolando) entre el de Brier y el lineal'
url: /2019/01/21/scorings-interpolando-y-extrapolando-entre-el-de-brier-y-el-lineal/
---

Rápidamente y para poner el limpio unas cosas que tenía en borrador. El _scoring_ lineal del que me he ocupado en entradas anteriores (p.e., [esta](https://datanalytics.com/2019/01/17/mejores-predictores-un-ejemplo-el-de-brier/) o [esta](https://datanalytics.com/2019/01/16/una-de-las-mil-maneras-malas-de-elegir-al-mejor-predictor/)) está asociado a un exponente $\lambda = 1$ y el de Brier, a $\lambda = 2$. Entre ambos (y a la derecha del 2) hay otros _scorings_ posibles.

Una penalización de $(1-p)^\lambda$ (véanse las entradas enlazadas más arriba para averiguar a qué me refiero), un predictor tiene un incentivo para modificar su predicción para alcanzar un _scoring_ más alto, salvo en el caso en que $\lambda = 2$, en el que le compensa ser lo más sincero posible.

Modificando los valores de $\lambda$, se obtienen las curvas

![](/wp-uploads/2019/01/scorings.png#center)

que muestran la relación entre las probabilidades reales (abscisas) y las que conviene manifestar al predictor. Solo en el caso en que $\lambda = 2$ la relación está dada por la curva $y = x$. Cuando $\lambda < 2$, al predictor le conviene exagerar y cuando $\lambda$ crece, ser conservador y quedarse próximo al 50%.

Esto que es cierto matemáticamente parece casi una lección de vida. Frente a castigos severos, la gente tenderá a anclarse en el _yo nu sé_. Sin carne en el asador (o sin arriesgar, o sin la talebiana _skin in the game_) la gente vendrá con ocurrencias y certezas implausibles. Solo en $\lambda = 2$, la mitad en la que mora la virtud,...

Y para terminar y como referencia, el código:

{{< highlight R >}}
foo <- function(alpha){
  exponente <- 1 / (alpha - 1)
  curve(x^exponente / (x^exponente + (1 - x)^exponente), 0, 1,
        main = format(alpha, digits = 3),
        xlab = "probabilidad real",
        ylab = "estimación óptima")
}

alphas <- -4:4
alphas <- 1 + 2^alphas

par(mfrow = c(3, 3))
sapply(alphas, foo)
par(mfrow = c(1, 1))
{{< / highlight >}}