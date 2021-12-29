---
author: Carlos J. Gil Bellosta
date: 2012-02-01 00:32:20+00:00
draft: false
title: La frontera bayesiana en problemas de clasificación (simples)

url: /2012/02/01/la-frontera-bayesiana-en-problemas-de-clasificacion-simples/
categories:
- estadística
- probabilidad
- r
tags:
- estadística
- estadística bayesiana
- probabilidad
- r
---

Una de las preguntas formuladas dentro del foro desde el que seguimos la lectura del libro _The Elements of Statistsical Learning_ se refiere a cómo [construir la frontera bayesiana óptima](http://esl.ubidata.org/preguntas/18/optimal-bayes-decision-boundary) en ciertos problemas de clasificación.

Voy a plantear aquí una discusión así como código en R para representarla (en casos simples y bidimensionales).

Supongamos que hay que crear un clasificador que distinga entre puntos rojos y verdes con la siguiente pinta,

{{< highlight R "linenos=true" >}}
library(mvtnorm)
library(MASS)

n <- 100
sigma <- 0.5

c.r <- data.frame(x = -1:1, y = 1:-1)
c.v <- data.frame(x = c(-1,1), y = c(-1,1))

muestra <- function(n, centros, sigma){
    n.x.centro <- sample(nrow(centros), n, replace = T)
    tmp <- mvrnorm(n, mu = c(0,0), Sigma = diag(2) * sigma)
    tmp <- tmp + centros[n.x.centro,]
    tmp
}

muestra.r <- data.frame(clase = "red", muestra(n, c.r, sigma))
muestra.v <- data.frame(clase = "green", muestra(n, c.v, sigma))

mi.muestra <- rbind(muestra.r, muestra.v)

plot(mi.muestra$x, mi.muestra$y,
        col = as.character(mi.muestra$clase))
{{< / highlight >}}

es decir, así:

[![](/wp-uploads/2012/02/datos_clasificacion.png)
](/wp-uploads/2012/02/datos_clasificacion.png)

Los puntos rojos están distribuidos según $latex P(x|R)$, una mezcla de tres distribuciones normales esféricas con centros en los puntos (-1,1), (0,0) y (1,-1) y desviación estándar 0.5. Los verdes, según $latex P(x|V)$, una distribución similar aunque con centros en (-1,-1) y (1,1):

{{< highlight R "linenos=true" >}}
veros <- function(w, medias, sigma = 5){
    mean(dmvnorm(medias, w, sigma = diag(length(w)) / sigma))
}

veros.malla <-function(malla, medias, sigma = 5){
    apply(malla, 1, function(x) veros(x, medias, sigma))
}

tmp <- seq(-3, 3, by = 0.03)
malla <- cbind(x = rep(tmp, each = length(tmp)),
                y = rep(tmp, length(tmp)))

bayes.r <- veros.malla(malla, c.r, sigma)
bayes.v <- veros.malla(malla, c.v, sigma)

contour(x=tmp,y=tmp,z=matrix(bayes.r, length(tmp)))
points(muestra.r$x, muestra.r$y,col="red")

contour(x=tmp,y=tmp,z=matrix(bayes.v, length(tmp)))
points(muestra.v$x, muestra.v$y,col="green")
{{< / highlight >}}

Gráficamente,

[![](/wp-uploads/2012/02/rojos.png)
](/wp-uploads/2012/02/rojos.png)

y

[![](/wp-uploads/2012/02/verdes.png)
](/wp-uploads/2012/02/verdes.png)

La frontera bayesiana óptima está basada en el siguiente razonamiento, valga la redundancia, bayesiano:

$$ P(C|x) P(x) = P(x | C) P(C)$$

donde:

* $latex P(C|x)$ es la probabilidad de que la clase/color sea C en el punto x.
* $latex P(x)$ es la probabilidad de observar el valor x.
* $latex P(x|C)$ es la probabilidad de que x sea un punto de la clase/color C.
* $latex P(C)$ es la probabilidad de la clase C, que suponemos igual en nuestro ejemplo (aunque sería muy desigual en un problema de detección del fraude, por ejemplo, donde el porcentaje de casos fraudulentos es muy bajo).

Bajo las condiciones anteriores,

$$ \frac{ P(R|x)}{P(V|x)} = \frac{ P(x|R)}{P(x|V)}$$

y, no habiendo penalizaciones asimétricas según la dirección del error, el criterio óptimo de clasificación es asignar la clase R cuando $latex P(R|x) > P(V|x)$ y, de acuerdo con la fórmula anterior, cuando $latex P(x|R) > P(x|V)$. Es decir, la _frontera_ entre las zonas en que es más probable que una observación proceda de una u otra distribución (es decir, sea de una u otra clase) es


{{< highlight R "linenos=true" >}}
contour(x=tmp,y=tmp,
        z=matrix(bayes.v - bayes.r, length(tmp)),
        levels = 0, labels = "")
points(mi.muestra$x, mi.muestra$y,
    col = as.character(mi.muestra$clase))
{{< / highlight >}}

que tiene, para este caso concreto, el siguiente aspecto:

[![](/wp-uploads/2012/02/frontera_bayesiana.png)
](/wp-uploads/2012/02/frontera_bayesiana.png)

Y mañana, ¡a Iguazú!
