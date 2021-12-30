---
author: Carlos J. Gil Bellosta
date: 2014-04-22 07:09:56+00:00
draft: false
title: 'Reponderación de componentes: un ejemplo'

url: /2014/04/22/reponderacion-de-componentes-un-ejemplo/
categories:
- estadística
- r
tags:
- componentes principales
- estadística
- pca
- r
---

Esta entrada es la continuación de _[La escala natural de la varianza](http://www.datanalytics.com/2014/04/09/la-escala-natural-de-la-varianza/)_. En ella vimos cómo los componentes de un PCA pueden tener un peso que pudiera no guardar relación con su importancia práctica.

Si uno quiere trabajar con las principales componentes de un PCA sobre unos datos, puede que la escala sea irrelevante (p.e., si quiere utilizar modelos lineales). Pero hay casos egregios en los que no sucede así.

Voy a presentar uno. Se trata de un _clústering_ simple:

{{< highlight R "linenos=true" >}}
n <- 100
m <- matrix(rnorm(2 * n), n, 2)
m[, 1] <- m[, 1] * 3
rot <- sqrt(2) * 0.5 * matrix(c(1, 1, -1, 1), 2, 2)
m <- m %*% rot

tmp <- kmeans(m, 2)

plot(m, col = tmp$cluster, asp = 1)
{{< / highlight >}}


[![clust_00](/wp-uploads/2014/04/clust_00.png#center)
](/wp-uploads/2014/04/clust_00.png#center)

Pero puede darse el caso de que haya motivos para pensar que la dirección NO-SE tiene demasiado peso en el resultado final. Es posible entonces reducir la distancia en esa dirección:

{{< highlight R "linenos=true" >}}
m.pca <- princomp(m, 2)$scores

head(m.pca)
##        Comp.1   Comp.2
## [1,]  0.05277  0.01147
## [2,] -1.02216 -0.73577
## [3,]  1.88354  0.46371
## [4,] -0.48757  0.30708
## [5,] -0.89224 -0.41297
## [6,] -1.89838  0.28717

plot(m.pca, asp = 1, col = tmp$cluster)
{{< / highlight >}}

[![clust_01](/wp-uploads/2014/04/clust_01.png#center)
](/wp-uploads/2014/04/clust_01.png#center)

Ahí estan las dos componentes. La más importante es la primera, que tiene el rango (-3, 3) mientras que la otra va de -1 a 1 (aproximadamente). Pero es posible comprimir la primera dirección

{{< highlight R "linenos=true" >}}
m.pca.squeezed <- m.pca
m.pca.squeezed[, 1] <- 0.2 * m.pca.squeezed[, 1]
{{< / highlight >}}

para entonces usar `kmeans` sobre las componentes reponderadas


{{< highlight R "linenos=true" >}}
tmp.squeezed <- kmeans(m.pca.squeezed, 2)
plot(m.pca.squeezed, col = tmp.squeezed$cluster, asp = 1)
{{< / highlight >}}

[![clust_02](/wp-uploads/2014/04/clust_02.png#center)
](/wp-uploads/2014/04/clust_02.png#center)

Finalmente, es posible representar los _clústers_ sobre las variables originales:

{{< highlight R "linenos=true" >}}
tmp.squeezed <- kmeans(m.pca.squeezed, 2)
plot(m, col = tmp.squeezed$cluster, asp = 1)
{{< / highlight >}}

[![clust_03](/wp-uploads/2014/04/clust_03.png#center)
](/wp-uploads/2014/04/clust_03.png#center)

Puede apreciarse cómo ha decrecido el impacto de la dirección NO-SE en el resultado final.

¿Qué significa todo esto? Que siempre es posible —de hecho, recomendable— reajustar el peso de las componentes _a mano_ cuando haya buenos motivos para ello. Y que, de hecho, es legítimo; particularmente cuando su peso original (en términos matemáticos) no corresponde a su importancia en la aplicación en cuestión.
