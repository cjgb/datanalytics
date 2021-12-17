---
author: Carlos J. Gil Bellosta
date: 2014-06-05 07:09:02+00:00
draft: false
title: Mínimos cuadrados con restricciones

url: /2014/06/05/minimos-cuadrados-con-restricciones/
categories:
- estadística
- r
tags:
- constrOptim
- estadística
- optimización
- r
---

Sí, había restricciones. No me preguntéis por qué, pero los coeficientes tenían que ser positivos y sumar uno. Es decir, buscaba la combinación convexa de cuatro vectores que más se aproximase a `y` en alguna métrica razonable. Y lo resolví así:



    # prepare constrained optimization

    y <- dat.clean$actual
    x <- t(dat.clean[,2:5])

    # target function: L2 first, then other metrics

    L2 <- function(<a href="http://inside-r.org/r-doc/stats/coef">coef){
      sum(abs((y - colSums(x * <a href="http://inside-r.org/r-doc/stats/coef">coef)))^1.5)
    }

    # restrictions: coefs > 0, sum(coefs) ~ 1

    ui <- rbind(diag(4), c(-1,-1,-1,-1), c(1,1,1,1))
    ci <- c(0,0,0,0,-1.000001,0.999999)

    theta <- rep(0.25, 4)

    best.coef <- <a href="http://inside-r.org/r-doc/stats/constrOptim">constrOptim(theta, L2, grad = NULL, ui = ui, ci = ci)

    coefs <- best.coef$par



Objetos aparte de `x` e `y`, hay:




	  * `L2`, que es la función que devuelve la distancia entre `y` y la combinación lineal de las filas de `x` indicada por su argumento. (Los lectores más sagaces descubrirán que `L2` no implementa la norma L2: lo hago solo por joder a un economista gilipollas que vino a llamarme iluso por pretender que existían distancias otras que las dos más corrientes).
	  * `ui`, una matriz y
	  * `ci`, un vector, que restringen las soluciones factibles a aquellas que cumplen que `ui %*% x  > ci`.
	  * `theta` que es un valor inicial que tiene que cumplir la restricción anterior.
	  * `constrOptim`, que hace toda la magia.

