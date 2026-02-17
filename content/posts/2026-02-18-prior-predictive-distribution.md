---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2026-02-18
description: Sobre un inesperado factor que convierte subrepticialmente una distribución
  a priori en informativa
lastmod: '2026-02-17T11:25:00.353396'
related:
- 2016-07-06-glms-con-prioris-casi-a-voluntad.md
- 2016-01-11-prioris-muy-informativas-y-vagamente-informativas-un-ejemplo.md
- 2018-05-24-prioris-informativas-un-ejemplo.md
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2025-12-02-bayesian-histogram.md
tags:
- estadística bayesiana
- priors
- r
- python
title: Sobre un inesperado factor que convierte subrepticialmente una distribución
  a priori en informativa
url: /2026/02/18/prior-predictive-distribution/
---

La distribución predictiva a priori es la que se obtiene de un modelo a partir de las prioris, antes de ver datos o realizar ajustes. Se utiliza para evaluar el grado en que las prioris elegidas están _dentro de rango_ y no generan datos que no se parecen en nada a los que se espera por conocimiento previo.

El libro [_Bayesian Modeling and Computation in Python_](https://bayesiancomputationbook.com/welcome.html) discute las distribuciones predictivas a priori en su [segundo capítulo](https://bayesiancomputationbook.com/markdown/chp_02.html). Allí argumenta alrededor de dos ejemplos. El primero está elegido a propósito para defender el caso de las prioris informativas frente a las objeciones de sus innumerables escépticos. El segundo es más intrigante. Muestra el gráfico

![Distribución predictiva a priori](/img/2026/prior_predictive_distributions_01.png#center)

acompañado del siguiente pie:

> Distribución predictiva a priori para un modelo logístico con 2, 5, y 15 (sic) predictores binarios y 100 casos. Las densidades representan la distribución de **la media** de los datos en 10000 simulaciones. Aunque la priori para cada coeficiente es $N(0, 1)$, la misma en cada uno de los tres casos, incrementar el número de predictores implica en la práctica usar una priori que aumenta el peso de los valores extremos.

Traté de reproducirlo con R:

```r
simulation <- function(n_preds, nrow_data = 100) {
  X <- matrix(rbinom(nrow_data * n_preds, 1, .5), nrow_data, n_preds)
  X_with_intercept <- cbind(1, X)
  beta <- rnorm(n_preds + 1, 0, 1)
  pred_p <- X_with_intercept %*% beta
  pred_p <- 1 / (1 + exp(-pred_p))
  mean(pred_p)
}

sim_02 <- replicate(10000, simulation(2))
sim_05 <- replicate(10000, simulation(5))
sim_20 <- replicate(10000, simulation(20))
sim_99 <- replicate(10000, simulation(99))

par(mfrow = c(2, 2))

hist(sim_02, main = "2 predictores")
hist(sim_05, main = "5 predictores")
hist(sim_20, main = "20 predictores")
hist(sim_99, main = "99 predictores")

par(mfrow = c(1, 1))
```

para obtener un decepcionante

![Distribución predictiva a priori](/img/2026/prior_predictive_distributions_02.png#center)

Afortunadamente, el libro viene acompañado del código necesario para reproducir todos los gráficos y, en particular, el del gráfico original:

```python
from scipy.special import expit
fig, axes = plt.subplots(1, 3, figsize=(10, 4), sharex=True,  sharey=True)
axes = np.ravel(axes)

for dim, ax in zip([2, 5, 20], axes):
    β = np.random.normal(0, 1, size=(10000, dim))
    X = np.random.binomial(n=1, p=0.75, size=(dim, 500))
    az.plot_kde(expit(β @ X).mean(1), ax=ax)
    ax.set_title(f"{dim} predictors")
    ax.set_xticks([0, 0.5, 1])
    ax.set_yticks([0, 1, 2])

fig.text(0.34, -0.075, size=18, s="mean of the simulated data")
plt.savefig("img/chp02/prior_predictive_distributions_01.png", bbox_inches="tight")
```

Las diferencias con respecto al mío son:

- Fija la matriz de predictores `X` en lugar de regenerarla en cada simulación (!).
- Usa 500 casos en lugar de los 100 que anuncia.
- No usa término independiente en la regresión logística (cosa que forma parte de lo opinable y que yo había hecho también en la primera versión de mi código).
- Sobre todo, genera X usando `p=0.75` en lugar de mi `0.5`.

El cuarto punto es el fundamental y explica la diferencia entre _mis_ y _sus_ simulaciones. Que `expit(β @ X)` quede cerca de 0 o 1 depende de la varianza de `β @ X` y esta, a su vez, es suma de productos del tipo $XY$ donde $X$ es $\text{Bernoulli}(p)$ e $Y$ es $N(0,1)$. La varianza de esta expresión, como todo LLM sabe, es función lineal de $p$ (de hecho, es $p$).

Así, cuanto mayor es $p$, más parecido es `β @ X` a una suma de `n_preds` variables aleatorias $N(0, 1)$ independientes, con varianza `n_preds`. Cuanto mayor es la varianza, mayor es la probabilidad de obtener sumas con valor absoluto grande, que luego la función logística transforma en probabilidades próximas a $0$ o $1$, según el signo.

Supongo que los autores del libro comenzaron con `p=0.5` y descubrieron que les hacían falta demasiados predictores para alcanzar el efecto o impacto deseado y jugaron con otros valores hasta que pudo apreciarse con `n_preds = 20`.