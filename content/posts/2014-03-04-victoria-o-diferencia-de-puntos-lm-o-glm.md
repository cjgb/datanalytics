---
author: Carlos J. Gil Bellosta
date: 2014-03-04 07:08:18+00:00
draft: false
title: ¿Victoria o diferencia de puntos? ¿lm o glm?

url: /2014/03/04/victoria-o-diferencia-de-puntos-lm-o-glm/
categories:
- estadística
- r
tags:
- baloncesto
- estadística
- glm
- lm
- ciencia de datos
- modelo lineal
- r
- regresión logística
---

Supongamos que queremos construir un modelo para predecir quién ganará un determinado partido de baloncesto basándonos en datos diversos. Y en un histórico, por supuesto.

Podemos utilizar una regresión logística así:

{{< highlight R "linenos=true" >}}
set.seed(1234)

my.coefs <- -2:2
n <- 200
train.n <- floor(2*n/3)

test.error.glm <- function(){
  X <- matrix(rnorm(n*5), n, 5)
  Y <- (0.2 + X %*% my.coefs + rnorm(n)) > 0

  train <- sample(1:n, train.n)

  X <- as.data.frame(X)
  X$Y <- Y

  mod.glm <- glm(Y ~ ., data = X[train,], 
    family = binomial)

  glm.pred <- predict(mod.glm, X[-train,], 
    type = "response")

  error <- length(glm.pred) - 
    sum(diag(table(glm.pred > 0.5, Y[-train,])))
}

errores.glm <- replicate(1000, test.error.glm())
{{< / highlight >}}

El código anterior hace lo siguiente:

* Crea las variables aleatorias X (unos predictores) e Y (el resultado de los partidos).
* Ajusta un modelo logístico a un subconjunto de los datos.
* Predice sobre el complementario de dichos datos, el conjunto de prueba.
* Mide el error cometido.
* Itera el proceso anterior y guarda los errores de clasificación cometidos.

Nótese que la variable objetivo es binaria por construcción.

Alternativamente podemos utilizar el modelo lineal para estimar una variable alternativa (y conocida): la diferencia de puntos entre los equipos. El código es similar al anterior:

{{< highlight R "linenos=true" >}}
test.error.lm <- function(){
  X <- matrix(rnorm(n*5), n, 5)
  Y <- 0.2 + X %*% my.coefs + rnorm(n)

  train <- sample(1:n, train.n)

  X <- as.data.frame(X)
  X$Y <- Y

  mod.lm <- lm(Y ~ ., data = X[train,])

  lm.pred <- predict(mod.lm, X[-train,])

  error <- length(lm.pred) - 
    sum(diag(table(lm.pred > 0, Y[-train,] > 0)))
}

errores.lm <- replicate(1000, test.error.lm())
{{< / highlight >}}

La única diferencia reside en que se estima primero la diferencia en los marcadores y luego se mira a ver si es positiva o negativa para determinar el ganador. Es decir, se binariza después de la predicción.

Y ahora el ejercicio:

* Comprarar los errores cometidos en uno y otro caso.
* Después, solo después, leer [esto](http://andrewgelman.com/2014/02/25/basketball-stats-dont-model-probability-win-model-expected-score-differential/).
* ¡Dejar un comentario explicando los resultados obtenidos!