---
author: Carlos J. Gil Bellosta
date: 2014-03-07 07:35:05+00:00
draft: false
title: Victoria o diferencia de puntos, ahora con "random forests"

url: /2014/03/07/victoria-o-diferencia-de-puntos-ahora-con-random-forests/
categories:
- estadística
- r
tags:
- estadística
- ciencia de datos
- predicción
- r
- random forests
---

Después de hablar con tirios y troyanos sobre mi [entrada sobre los efectos de binarizar una variable objetivo continua](http://www.datanalytics.com/2014/03/04/victoria-o-diferencia-de-puntos-lm-o-glm/), he decidido tomarme la justicia por mi mano y llamar a la caballería. Es decir, utilizar _random forests_.

Aquí va el código:

{{< highlight R "linenos=true" >}}
library(randomForest)

set.seed(1234)

my.coefs <- -2:2
n <- 200
train.n <- floor(2*n/3)

test.error <- function(){
  X <- matrix(rnorm(n*5), n, 5)
  Y <- 0.2 + X %*% my.coefs + rnorm(n)
  Y.bin <- factor(Y>0)

  train <- sample(1:n, train.n)

  X <- as.data.frame(X)
  X$Y <- Y

  modelo <- randomForest(Y ~ ., 
    data = X[train,])
  pred <- predict(modelo, X[-train,])
  error.cont <- length(pred) - 
    sum(diag(table(pred >0, Y[-train]>0)))

  X$Y <- Y.bin
  modelo <- randomForest(Y ~ ., 
    data = X[train,])
  pred <- predict(modelo, X[-train,])
  error.bin <- length(pred) - 
    sum(diag(table(pred, Y.bin[-train])))

  data.frame(error.cont = error.cont, 
    error.bin = error.bin)
}

errores <- do.call(rbind, 
  replicate(1000, test.error(), simplify = F))

sapply(errores, fivenum)
{{< / highlight >}}

El resultado, si te interesa, en tu pantalla.

Y sigo en las mismas: entiendo que el modelo que ve la variable objetivo continua tiene más información, pero desconozco cuál es la base teórica (¡tendrá que haberla!) para justificar —¡incluso cuantificar!— una diferencia de rendimiento en los modelos.

Diferencia, en todo caso, tiene que existir en algún punto. Realicemos el siguiente experimento mental. Tomemos una variable objetivo —como la de esta entrada— y quitémosle información. Podemos _winsorizarla_, i.e., reemplazar los valores extremos por unos topes. Podemos binarizarla. Podemos introducirle ruido aleatorio. Podemos, en el caso extremo, ¡convertirla en un vector de ceros! Y en algún momento —mucho antes del último y extremoso caso— tiene que manifestarse una caída en la calidad de las predicciones.

Supongo.