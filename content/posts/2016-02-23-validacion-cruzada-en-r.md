---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- r
date: 2016-02-23 09:13:34+00:00
draft: false
lastmod: '2025-04-06T18:58:13.528292'
related:
- 2014-06-06-validacion-cruzada-en-paralelo.md
- 2011-09-23-done28099t-be-loopy-ii.md
- 2016-03-21-caret-y-rejillas-es-necesario-utilizar-fuerza-bruta.md
- 2011-03-16-parentesis-corchetes-y-rendimiento-en-r.md
- 2014-08-13-mis-procesos-puntuales-con-glm.md
tags:
- ciencia de datos
- r
- rmse
- validación cruzada
title: Validación cruzada en R
url: /2016/02/23/validacion-cruzada-en-r/
---

Está de moda [usar `caret`](http://topepo.github.io/caret/training.html) para estas cosas, pero yo estoy todavía acostumbrado a hacerlas a mano. Creo, además, que es poco instructivo ocultar estas cuestiones detrás de funciones de tipo caja-negra-maravillosa a quienes se inician en el mundo de la construcción y comparación de modelos. Muestro, por tanto, código bastante simple para la validación cruzada de un modelo con R:

{{< highlight R >}}
# genero ids
ids <- rep(1:10, length.out = nrow(cars))

# Nota: da igual si nrow(df) no es múltiplo de 10

# los aleatorizo
ids <- sample(ids)

# esto devuelve una lista de dfs:
preds.cv <- lapply(unique(ids), function(i){
  preds <- predict(lm(dist ~ speed,
    data = cars[ids != i,]), cars[ids == i,])
  data.frame(
    preds = preds,
    real = cars[ids == i,]$dist)
})

# "apilo" los dfs:
preds.cv <- do.call(rbind, preds.cv)

# calculo el rmse
rmse <- sqrt(mean((preds.cv$preds - preds.cv$real)^2))
{{< / highlight >}}

Sí, estoy usando el [RMSE](https://en.wikipedia.org/wiki/Root-mean-square_deviation) aunque sea [un detractor](http://www.datanalytics.com/2015/08/28/todos-los-errores-son-iguales-pero-algunos-son-mas-iguales-que-otros/) del mismo.

Y, si quieres, [también puedes correr ese código en paralelo](http://www.datanalytics.com/2014/06/06/validacion-cruzada-en-paralelo/).