---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2014-06-05 07:09:02+00:00
draft: false
lastmod: '2025-04-06T19:07:37.857704'
related:
- 2014-06-09-por-que-de-los-minimos-cuadrados-con-restricciones.md
- 2016-09-01-mezclas-de-vectores-i-casi-todas-las-matematicas-de-la-cosa.md
- 2016-06-22-gbm-ii-minizacion-de-funciones-perdidas-cuadraticas-residuos-y-gradientes.md
- 2017-09-11-pues-los-svms-al-final-no-son-tan-exoticos.md
- 2016-03-21-caret-y-rejillas-es-necesario-utilizar-fuerza-bruta.md
tags:
- constrOptim
- estadística
- optimización
- r
title: Mínimos cuadrados con restricciones
url: /2014/06/05/minimos-cuadrados-con-restricciones/
---

Sí, había restricciones. No me preguntéis por qué, pero los coeficientes tenían que ser positivos y sumar uno. Es decir, buscaba la combinación convexa de cuatro vectores que más se aproximase a `y` en alguna métrica razonable. Y lo resolví así:

{{< highlight R >}}
# prepare constrained optimization

y <- dat.clean$actual
x <- t(dat.clean[,2:5])

# target function: L2 first, then other metrics

L2 <- function(coef){
  sum(abs((y - colSums(x * coef)))^1.5)
}

# restrictions: coefs > 0, sum(coefs) ~ 1

ui <- rbind(diag(4), c(-1,-1,-1,-1), c(1,1,1,1))
ci <- c(0,0,0,0,-1.000001,0.999999)

theta <- rep(0.25, 4)

best.coef <- constrOptim(theta, L2,
  grad = NULL, ui = ui, ci = ci)

coefs <- best.coef$par
{{< / highlight >}}


Objetos aparte de `x` e `y`, hay:

* `L2`, que es la función que devuelve la distancia entre `y` y la combinación lineal de las filas de `x` indicada por su argumento. (Los lectores más sagaces descubrirán que `L2` no implementa la norma L2: lo hago solo por joder a un economista gilipollas que vino a llamarme iluso por pretender que existían distancias otras que las dos más corrientes).
* `ui`, una matriz y
* `ci`, un vector, que restringen las soluciones factibles a aquellas que cumplen que `ui %*% x  > ci`.
* `theta` que es un valor inicial que tiene que cumplir la restricción anterior.
* `constrOptim`, que hace toda la magia.