---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2017-12-15 20:07:25+00:00
draft: false
lastmod: '2025-04-06T18:56:37.686274'
related:
- 2019-01-08-modelos-de-conteos-con-sobredispersion-con-stan.md
- 2020-07-17-mas-sobre-la-presunta-sobredispersion-en-el-modelo-de-poisson.md
- 2020-01-22-siete-llaves-al-sepulcro-del-metodo-delta.md
- 2014-08-08-procesos-de-poisson-no-homogeneos-la-historia-de-un-fracaso.md
- 2017-02-01-infradispersion-de-conteos-buenos-ejemplos.md
tags:
- poisson
- r
- varianza
title: La distribución de Poisson y la estabilización de la varianza
url: /2017/12/15/la-poisson-y-la-estabilizacion-de-la-varianza/
---

Imagínate que quieres _estabilizar la varianza_ (¡para qué!) de una distribución de Poisson. Los libros viejunos te dirán que saques [la raíz cuadrada](https://en.wikipedia.org/wiki/Variance-stabilizing_transformation) de tus valores.

Si en lugar de mirar en libros viejunos prestas atención a tus propios ojos, harás algo parecido a:

{{< highlight R >}}
lambdas <- -10:10
lambdas <- 2^lambdas
res <- sapply(lambdas,
    function(lambda) sd(sqrt(rpois(1e5, lambda))))
{{< / highlight >}}

para obtener

![](/wp-uploads/2017/12/estabilizacion_varianza_poisson.png#center)

y averiguar dónde funciona y dónde no.

Si usas la transformación $latex f(x) = x^{2/3}$, como recomiendan en cierto artículo que no viene a cuento identificar, harás

{{< highlight R >}}
res <- sapply(lambdas, function(lambda) sd((rpois(1e5, lambda)^(2/3))))
{{< / highlight >}}

obtendrás

![](/wp-uploads/2017/12/estabilizacion_varianza_poisson_alt.png#center)

y te preguntarás mucho: ¡por qué, por qué, por qué!