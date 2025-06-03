---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2025-04-24
description: 'Se estudia la relación entre la dispersión de las probabilidades y el
  AUC en modelos bien calibrados: para obtener AUC alto, hace falta que no haya scorings
  cerca de 0.5.'
lastmod: '2025-06-03T22:46:10.634571'
related:
- 2025-04-17-auc-vs-dispersion-p.md
- 2016-03-29-el-auc-es-la-probabilidad-de-que.md
- 2020-06-29-sobremuestreando-x-y-no-y.md
- 2020-07-17-mas-sobre-la-presunta-sobredispersion-en-el-modelo-de-poisson.md
- 2022-02-17-examenes-probabilisticos.md
tags:
- estadística
- auc
- calibración
title: Más sobre la relación entre la dispersión de las probabilidades y el AUC en
  modelos bien calibrados
url: /2025/04/24/auc-dispersion-calibracion-ii
---

Esta entrada está relacionada ---aunque no es estrictamente una continuación--- de [la que escribí hace una semana](/2025/04/17/auc-dispersion-calibracion) sobre el mismo asunto.

Se vuelve a partir de lo siguiente: un modelo de clasificación binaria bien calibrado. Eso significa que si el modelo predice $p$ para el sujeto $i$, entonces $Y_i \sim B(p)$.

Supongamos que tenemos una población dada, aplicamos el modelo y obtenemos una distribución $f(p)$ para las probabilidades predichas. Entonces, la distribución de:
- los casos positivos es proporcional a $pf(p)$
- los casos negativos es proporcional a $(1-p)f(p)$

Solo de esa manera, de todos los casos que tienen asignada una probabilidad de $p$ se garantiza que una proporción $p$ son positivos y el resto, $1-p$, negativos. Es decir, bajo calibración, la distribución de $p$ determina exactamente las de los casos positivos y negativos. Además, el número de los casos positivos determina el de los casos negativos.

La constante de proporcionalidad en el primer caso es $\int_0^1 pf(p)dp$, obviamente. Si $f(p)$ fuese uniforme en $[0, 1]$, las densidades de los casos positivos y negativos serían distribuciones triangulares:

![](/wp-uploads/2025/auc_distributions.png#center)

En el gráfico, la línea negra es $f(p)$ y las líneas roja y azul representan las densidades de los casos positivos y negativos respectivamente. A partir de aquí y haciendo uso de

$$ AUC=Pr(p_i >p_j | Y_i =1,Y_j =0),$$

es fácil estimarlo:

1. Se toma $p_{01}, \dots, p_{0n}$ de acuerdo con la distribución de los casos negativos.
1. Se toma $p_{11}, \dots, p_{1n}$ de acuerdo con la distribución de los casos positivos.
1. Se aproxima el AUC como la proporción de casos en los que $p_{1i} > p_{0i}$.

Fijado el modelo, pues, se pueden reportar varios AUCs asociados a tal modelo simplemente cambiando la población sobre el que se aplica (que afecta a la $f(p)$).

Por fijar ideas, supongamos este caso: un banco crea un modelo de riesgo de crédito y lo entrena sobre una población tal que la distribución de las p es uniforme. El AUC reportado en entrenamiento sería aproximadamente 0.83. Pero luego reevalúa el AUC con datos reales. Pero como el banco solo ha otorgado préstamos a clientes con una $p$ menor de (por ejemplo) 10%, el AUC estimado sobre esa nueva población es 0.67.

Los interesados pueden jugar con sus distribuciones de interés con el siguiente código (que muestrea las distribuciones de los casos positivos y negativos usando el [método del rechazo](https://en.wikipedia.org/wiki/Rejection_sampling)):

{{< highlight r >}}
a <- 0
b <- .1
sample_dist <- function() runif(1, a, b)

# test for AUC ~ 1
#sample_dist <- function() rbeta(1, .1, .1)

sample_p <- function(y){
  candidate <- sample_dist()
  my_sample <- runif(1)

  if (y == 1) if (my_sample < candidate) return(candidate)
  if (y == 0) if (my_sample < 1 - candidate) return(candidate)

  sample_p(y)
}

p1 <- replicate(100000, sample_p(1))
p0 <- replicate(100000, sample_p(0))

auc <- mean(p1 > p0)
auc
{{< / highlight >}}