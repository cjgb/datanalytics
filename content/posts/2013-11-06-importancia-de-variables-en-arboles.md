---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- gráficos
- r
date: 2013-11-06 07:49:59+00:00
draft: false
lastmod: '2025-04-06T18:53:48.105632'
related:
- 2017-01-10-repensando-la-codificacion-por-impacto.md
- 2020-10-14-explicacion-de-los-scorings-de-ciertos-modelos.md
- 2022-06-07-generalized-random-forests.md
- 2019-02-18-9857.md
- 2011-09-09-treemaps-en-r.md
tags:
- ctree
- ggplot2
- gráficos
- party
- r
title: Importancia de variables en árboles
url: /2013/11/06/importancia-de-variables-en-arboles/
---

Los árboles (o árboles de inferencia condicional) valen fundamentalmente para hacerse una idea de cómo y en qué grado opera una variable en un modelo controlando por el efecto del resto. Su valor reside fundamentalmente en la interpretabilidad.

No obstante lo cual, no es infrecuente construir árboles muy grandes. Y el tamaño dificulta censar qué variables y en qué manera aparecen. Por eso me vi obligado recientemente a crear un pequeño prototipo para extraer el _peso_ de las variables de un árbol.

(Nótese que uso cursivas para _peso_: lo he definido yo arbitrariamente y depende esencialmente de la altura a la que se encuentre la variable, i.e., es mayor cuanto más arriba aparece y obviamente del número de veces que aparece la variable, sumándose los pesos de cada aparición en el conjunto).

He aquí el código incrustado en un ejemplo:

{{< highlight R >}}
library(party)
library(ggplot2)
library(plyr)

irisct <- ctree(Species ~ .,data = iris)
irisct
plot(irisct)

ctree.varimp <- function(x,n = 0){
  if(is.null(x$psplit$variableName))
    return(NULL)

  res <- list(node = x$psplit$variableName, depth = n)

  c(list(res), ctree.varimp(x$left, n+1), ctree.varimp(x$right, n+1))
}

res <- ctree.varimp(irisct@tree)
res <- do.call(rbind, lapply(res, as.data.frame))
res$depth <- max(res$depth) + 1 - res$depth

res <- ddply(res, .(node), summarize, importancia = sum(depth))
res$node <- reorder( res$node, res$importancia, max )

ggplot(res, aes(x = node, weight = importancia)) + geom_bar() +
  coord_flip() + ggtitle("Importancia de variables")
{{< / highlight >}}

El resultado es:

[![](/wp-uploads/2013/11/ctree_var_importance.png#center)
](/wp-uploads/2013/11/ctree_var_importance.png#center)