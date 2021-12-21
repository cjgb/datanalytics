---
author: Carlos J. Gil Bellosta
date: 2017-03-20 08:13:22+00:00
draft: false
title: EM (duro) a mano (y para humanos)

url: /2017/03/20/em-duro-a-mano-y-para-humanos/
categories:
- estadística
- r
tags:
- em
- estadística
- r
---

Dada una configuración de puntos tal como

![](/wp-uploads/2017/03/whiteside_gas.png)

puede pensarse que existen dos grupos (_clústers_ los llaman casi todos menos el _neotroll_ de estas páginas y algún otro purista) de puntos organizados alrededor de unas rectas que se adivinan.

Nos planteamos el problema de identificarlas y de asignar los puntos a su respectiva.

Una posible estrategia consiste en construir la verosimilitud asociada al problema y maximizarla. Esa verosimilitud dependería de muchos parámetros:

* El término independiente y la pendiente de la primera recta.
* El término independiente y la pendiente de la segunda recta.
* La asignación de cada punto a la recta que le corresponda.
* Además, como subproducto de los modelos lineales, las varianzas de sus respectivos errores.

No es en absoluto un problema de optimización bonito: intervienen muchas variables, muchas de las cuales son discretas. Más bien, es un infierno.

Pero tenemos una heurística a mano consistente en:

1. Asignar puntos a grupos a voleo
2. Ajustar las rectas correspondientes a ambos grupos
3. Reasignar los puntos a los grupos de acuerdo con la recta que les caiga más cerca
4. Reajustar las rectas
5. Reasignar los puntos
6. Reajustar las rectas
7. Reasignar los puntos
8. ...

Todo lo anterior hasta que no haya más reasignaciones. El siguiente gráfico ilustra patosamente los pasos anteriores:

![](/wp-uploads/2017/03/whiteside_em.png)

Notas varias:

* Los puntos no se asignan por cercanía de la que gastaba Euclides. De hecho, he usado _cercanía_ impropiamente: lo que se busca realmente es la asignación más probable de acuerdo con el modelo probabilístico subyacente.
* El algoritmo se conoce como EM (_expectation-maximization_) del tipo duro. [En la Wikipedia se cuentan cosas estupendas sobre él](https://en.wikipedia.org/wiki/Expectation%E2%80%93maximization_algorithm). Entre ellas, que las iteraciones incrementan estrictamente la verosimilitud de las configuraciones y el proceso termina. También advierte que puede quedar atrapado en un mínimo local. Algo de lo que puedo dar fe.
* En el fondo y así visto, el algoritmo EM duro es una [versión _guay_ de _k-means_](https://www.naftaliharris.com/blog/visualizing-k-means-clustering/).
* El algoritmo EM _blando_ no usaría asignaciones discretas de puntos a su grupo sino pesos asociados a la probabilidad.
* No he dicho nada de las prioris que habría que usar para calcular más propiamente la asignación de puntos a clústers. Debería usarse.
* He usado el conjunto de datos `MASS:whiteside`, que es muy simpático aunque nadie está seguro del todo de lo que contiene realmente.

Y el código, por referencia:

{{< highlight R "linenos=true" >}}
library(MASS)
library(plyr)

set.seed(134)
dat <- whiteside[, c("Temp", "Gas")]
n.clusters <- 2

cluster.id <- sample(1:n.clusters, nrow(dat), replace = T)

maximization <- function(cluster.id){
  tmp <- cbind(dat, cluster.id)
  res <- dlply(dat, .(cluster.id),
    function(x) lm(Gas ~ Temp, data = x))
  res
}

expectation <- function(modelos){
  foo <- function(modelo){
    sigma <- summary(modelo)$sigma
    preds <- predict(modelo, newdata = dat)
    probs <- mapply(function(x, mu)
      dnorm(x, mean = mu, sd = sigma), dat$Temp, preds)
    probs <- exp(-(preds - dat$Gas)^2)
  }
  tmp <- do.call(cbind, lapply(modelos, foo))
  apply(tmp, 1, which.max)
}


prev.cluster.id <- cluster.id
i <- 0

par(mfrow=c(4,2))

while (TRUE){
  plot(dat, col = prev.cluster.id, main = paste0("maximization ", i))
  modelos <- maximization(cluster.id)
  sapply(modelos, abline, col = "blue")

  cluster.id <- expectation(modelos)
  plot(dat, col = cluster.id, main = paste0("expectation ", i))
  sapply(modelos, abline, col = "blue")

  if (all(cluster.id == prev.cluster.id))
    break

  prev.cluster.id <- cluster.id
  i <- i + 1
}
{{< / highlight >}}