---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2020-05-28 09:13:20+00:00
draft: false
lastmod: '2025-04-06T19:11:38.579507'
related:
- 2012-04-11-correccion-por-exposicion-del-modelo-logistico.md
- 2015-02-12-parametrizacion-de-modelos-de-supervivencia-parametricos.md
- 2014-08-11-procesos-puntuales-una-primera-aproximacion.md
- 2014-02-14-memoria-de-decaimiento-exponencial-y-canutos-asincronos.md
- 2015-07-06-una-interpretacion-rapida-y-sucia-de-los-coeficientes-de-la-regresion-logistica.md
tags:
- riesgo
- supervivencia
title: Sobre la función de riesgo en el análisis de la supervivencia
url: /2020/05/28/sobre-la-funcion-de-riesgo-en-el-analisis-de-la-supervivencia/
---

Tienes una función de supervivencia

![](/wp-uploads/2020/05/hazard_00.png#center)

y piensas que es posible aproximarla usando segmentos de exponencial usando primero una _rejilla gruesa_,

![](/wp-uploads/2020/05/hazard_01.png#center)

y luego cada vez más fina,

![](/wp-uploads/2020/05/hazard_02.png#center)

hasta que sean _indistinguibles_.

Las distintas aproximaciones son

$$ \hat{S}(t) = \exp\left(-\sum_{i \le n} \lambda_i \Delta - \lambda_n (t - t_n)\right)$$

donde $n$ es el índice del intervalo que contiene a $t$  los $\lambda_i$ son los coeficientes en los segmentos de exponencial. Esa expresión que converge a

$$ S(t) = \exp\left(-\int_0^t \lambda(x) dx\right)$$

y $\lambda(t) = -S^\prime(t) / S(t)$ como no es necesario demostrar.

Ah, y sí, $\lambda(t)$ es la función de riesgo.

**Coda:** entre otras cosas, queda evidenciado que la función de riesgo del decaimiento exponencial es constante.

**PD:** Por si alguien quiere jugar con el código que ha servido para pintar lo anterior,

{{< highlight R >}}
S <- function(x) 1 - pweibull(x, 2, 5)

from = 0
to = 12

curve(S(x), from = from, to = to,
    xlab = "t", ylab = "S(t)")

incr <- 1

for(init in seq(from, to, by = incr)){
    a <- S(init)
    b <- S(init + incr)
    lambda <- - log(b / a) / incr
    curve(S(init) * exp(-lambda * (x - init)),
            from = init, to = init + incr,
            col = "red", add = T)
}

curve(S(x), from = from, to = to,
    xlab = "t", ylab = "S(t)", add = T)
{{< / highlight >}}