---
-categories:
- estadística
author: Carlos J. Gil Bellosta
date: 2025-11-04
description: ¿Cuál es el máximo valor del AUC que se puede obtener realísticamente?
lastmod: '2025-11-10T12:15:55.352351'
related:
- 2025-04-17-auc-vs-dispersion-p.md
- 2025-04-24-auc-vs-dispersion-p-ii.md
- 2016-03-29-el-auc-es-la-probabilidad-de-que.md
- 2019-05-24-cotas-superiores-para-el-auc.md
- 2013-05-16-el-error-en-las-encuestas-cuentas-en-una-servilleta.md
tags:
- auc
- modelización
- clasificación
title: Una cota superior para el nivel del AUC alcanzable en cierto tipo de modelos
url: /2025/11/04/maximo-auc-posible/
---

Tengo dos entradas de hace unos meses sobre el AUC, [esta](/2025/04/17/auc-dispersion-calibracion/) y [esta](https://datanalytics.com/2025/04/24/auc-dispersion-calibracion-ii/), en las que me voy a apoyar para resolver el problema de encontrar una cota superior realista para el AUC en cierto tipo de problemas.

Alguien dirá que el AUC tiene una cota superior, el 1, que se obtiene en el caso de ciencia ficción sabido de todos. De hecho, 7 o 15 son mejores cotas porque además de acotar, no confunden y hacen pensar que es realista alcanzarlas.

Supongamos, como las entradas que enlazo, que el modelo construido está perfectamente calibrado y no tiene sesgo en absoluto. Si a un sujeto $X$ se le dice que tiene una probabilidad $p$ de experimentar cierto evento, esa probabilidad estimada es la probabilidad real, verdaderamente existente en el mundo de que el evento suceda. Si se quiere, uno puede pensar que los _sujetos_ son ordenadores que en un momento dado generarán un número, 0 o 1 con una probabilidad $p$ que está escrita en un _posit_ amarillo pegado en su monitor. El el modelo, simplemente, lee ese valor de p. No hay sesgo en absoluto.

Imaginemos que las probabilidades $p$ de los sujetos están distribuidas aproximadamente como una beta y que, digamos, el 90% de esas probabilidades están contenidas entre el 2% y el 15%. Con mi [herramienta para extraer parámetros de prioris](https://priors.datanalytics.com/), obtengo los parámetros $2.89$ y $36.81$ para dicha beta:

![](/img/2025/priors_tool_beta.png#center)

Ahora acudo al pequeño fragmento de código que publiqué [aquí](/2025/04/24/auc-dispersion-calibracion-ii/) para estimar el AUC en situaciones como la descrita arriba, lo modifico para dejarlo como

{{< highlight r >}}
a <- 2.89
b <- 36.81
sample_dist <- function() rbeta(1, a, b)

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

Da $0.662$. A más, lo siento, no se puede aspirar.