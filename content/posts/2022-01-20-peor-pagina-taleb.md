---
author: Carlos J. Gil Bellosta
date: 2022-01-20
title: La peor página de N. Taleb
url: /2022/01/20/peor-pagina-taleb/
categories:
- estadística
tags:
- estadística
- estadística bayesiana
- taleb
---

Dicen algunos ---bueno, más bien, lo suelo decir yo--- que la intersección de lo nuevo, lo interesante y lo cierto es el conjunto vacío. Ahora, [N. Taleb nos regala una página](https://fooledbyrandomnessdotcom.wordpress.com/2021/09/07/estimating-medical-error-rate-an-intuitive-max-entropy-method/) en el que trata novedosamente un tema que lleva siendo intereante desde, al menos, lo puso encima de la mesa el reverendo (Bayes) hace 250 años. Ergo...

Vamos qué nos cuenta. Se plantea el problema de unos experimentos (independientes) de Bernoulli con probabilidad de ocurrencia desconocida $p$. Hay $n$ ensayos y $m$ éxitos. Y afirma que el _mejor_ estimador es

$$\hat{p} = 1 - I^{-1}_{1/2}(n-m, m + 1),$$

donde $I$ es, dice, la función _beta regularizada_ (sí, la que en R se llama `pbeta` y por lo que $I^{-1}$ no es otra cosa que `qbeta`).

(En realidad, creo que Taleb quiere escribir $\hat{p} = I^{-1}_{1/2}(m + 1, n-m)$, que da el mismo resultado y es más coherente con su argumento general, i.e., el de invertir la función de probabilidad (acumulada) de una beta.)

Es decir, Taleb dice que el mejor estimador es la mediana de una variable aleatoria de beta con parámetros $n-m$ y $m+1$, que equivale a la _posteriori_ (en el sentido bayesiano) correspondiente a una priori beta de parámetros 0 y 1 (que solo existe en _cierto sentido_ generalizado).

Además, carga contra las dos aproximaciones _habituales_,

1. la frecuentista, que estimaría $p$ mediante $m/n$ y que, estamos todos de acuerdo, es una basura si $n$ es pequeño, y
2. la bayesiana clásica (ya se sabe: el modelo beta-binomial) por varios motivos, siendo el más relevante de ellos (y sobre el que volveré) el del excesivo impacto de la priori en el resultado final si esta es demasiado informativa (equivalentemente, si tiene una varianza demasiado baja).

Hay dos cosas en el argumento de Taleb de las que solo _explica_ (o justifica) una: la elección de la mediana y no otro punto característico de la posteriori: que maximiza la entropía (pero sin aclarar de qué). De la elección implícita de la priori no dice nada.

Nos ofrece una aplicación que me servirá para sacar punta a algunas de las ideas apuntadas más arriba. Se trata de estimar la probabilidad de que cierto cirujano mate a un paciente en un determinado tipo de intervención. Los datos son:

1. Esa intervención tiene una tasa de fracaso (muerte) del 5% en la población general (de cirujanos).
2. El cirujano en cuestión ha realizado 60 intervenciones y todas han sido exitosas.

Utilizando su procedimiento, obtiene una estimación $\hat{p} = 0.01148$ (que es lo que da R haciendo qbeta(.5, 1, 60)). Y, nótese, ¡no utiliza para nada el valor de referencia del 5%!

¿Cómo hubiera enfrentado yo el problema?

Obviamente, usando la aproximación bayesiana y con la siguiente priori:

1. De ser posible (o estar disponibles los datos) la distribución de $p_i$ a través de la población existente de cirujanos (sí, esa de la que 5% es la media), tal vez a través de la beta que mejor los ajustase.
2. Si no, hubiese usado una beta con parámetros tales que la media fuese 5%, es decir, del tipo $(\alpha, 19\alpha)$.

En el caso 2, estoy con Taleb ---y con todos, creo, salvo tal vez algún rarito---, que si $\alpha$ es muy grande, su influencia se apodera de los datos. Creo que es pues el punto en el que retomar el criterio de Taleb y preguntarse por el parámetro $\alpha$ que maximiza la entropía de la distribución resultante. Cosa que, intuyo, ocurre para valores bajos ---pero no demasiado--- de $\alpha$.

Pero, vamos, eso es solo una intuición. Quien quiera conocer la verdad _aprox_, que corra esto:

{{< highlight R "linenos=true" >}}
alphas <- seq(0.1, 4, length.out = 100)

entropy <- sapply(alphas, function(alpha) {
  x <- rbeta(10000, 1 * alpha, 19 * alpha)
  mean(-log(dbeta(x, 1 * alpha, 19 * alpha)))
})

alphas[which.max(entropy)]
{{< / highlight >}}

**Coda:** Esta es, como digo, la peor página que le conozco a N. Taleb. Pero tiene muchísimas otras que valen verdaderamente la pena.