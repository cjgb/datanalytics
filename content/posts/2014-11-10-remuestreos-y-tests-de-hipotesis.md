---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2014-11-10 07:13:58+00:00
draft: false
lastmod: '2025-04-06T19:03:57.224042'
related:
- 2015-06-25-diferencia-de-medias-a-la-bayesiana-con-salsa-de-stan.md
- 2016-01-25-comparaciones-de-tres-grupos-pruebas-vs-modelos.md
- 2014-06-10-a-vueltas-con-el-t-test.md
- 2014-10-10-bootstrap-bayesiano.md
- 2023-03-21-reduccion-error-tests-ab.md
tags:
- estadística
- r
- remuestreo
title: Remuestreos y tests de hipótesis
url: /2014/11/10/remuestreos-y-tests-de-hipotesis/
---

No sé si visteis [el vídeo que colgué el otro día](https://datanalytics.com/2014/11/06/estadistica-clasica-vs-remuestreo/). Trataba el problema de determinar si dos poblaciones


{{< highlight R >}}
beer  <- c(27, 20, 21, 26, 27, 31, 24,
        21, 20, 19, 23, 24,
        18, 19, 24, 29, 18, 20, 17,
        31, 20, 25, 28, 21, 27)
water <- c(21, 22, 15, 12, 21, 16, 19,
        15, 22, 24, 19, 23, 13,
        22, 20, 24, 18, 20)
{{< / highlight >}}

tienen o no la misma media. Más concretamente, si la población `beer` tiene una media superior a la de `water` como en efecto sucede:

{{< highlight R >}}
mean(beer)
#[1] 23.2
mean(water)
#[1] 19.22222
{{< / highlight >}}

¿Pero es esta diferencia _significativa_?

Muchos plantearían un t-test:

{{< highlight R >}}
t.test(beer, water, alternative = "greater")
# Welch Two Sample t-test
#
# data:  beer and water
# t = 3.3086, df = 39.271, p-value = 0.001007
# alternative hypothesis: true difference in means is greater than 0
# 95 percent confidence interval:
#   1.952483      Inf
# sample estimates:
#   mean of x mean of y
# 23.20000  19.22222
{{< / highlight >}}

Pero en el vídeo se propone una alternativa basada en remuestreos:

{{< highlight R >}}
remuestreo <- function(beer, water){
    x <- c(beer, water)
    new.beer  <- sample(x, length(beer),  replace = T)
    new.water <- sample(x, length(water), replace = T)

    mean(new.beer) - mean(new.water)
}

muestras <- replicate(1e4, remuestreo(beer, water))

mean(muestras > (mean(beer) - mean(water)))
#[1] 0.0014
{{< / highlight >}}

Si uno simula el experimento muchas veces _olvidando_ la _etiqueta_ original, obtendría la distribución natural —¿por azar?— de la diferencia de medias si no hubiese ninguna. Si la diferencia original es muy _anormal_ dentro de esa distribución, puede pensarse que las etiquetas, efectivamente, diferencian ambas poblaciones.

Pero nótese que hay un tipo de inconsistencia lógica en el argumento anterior:

1. Apreciamos una diferencia en las medias
2. Planteamos la _hipótesis nula_ de que no la hay.
3. Suponemos que eliminando las etiquetas obtener una representación de cómo sería la distribución de la diferencia de medias bajo dicha hipótesis inicial, i.e., que verifica la hipótesis nula anterior.
4. ¡Llegamos a la conclusión de que las medias son distintas!

Nótese que el último punto está en conflicto con el penúltimo. Si se da por bueno que las medias son distintas, la población sin etiquetas no es representativa de cómo sería bajo la hipótesis nula. Esa diferencia de medias se manifestará en alguna parte: ¿mayor varianza de la esperada, acaso?

En artículos como [_Bootstrap hypothesis testing for some common statistical problems: A critical evaluation of size and power properties_](http://www.sciencedirect.com/science/article/pii/S0167947307000230) encontrará el lector interesado una discusión al respecto que resume su... resumen:

>The construction of bootstrap hypothesis tests can differ from that of bootstrap confidence intervals because of the need to generate the bootstrap distribution of test statistics _under a specific null hypothesis_. Similarly, bootstrap power calculations rely on resampling being carried out under specific alternatives. We describe and develop null and alternative resampling schemes for common scenarios,...

Efectivamente, la distribución construida por remuestreo podría no recoger adecuadamente las especificidades concretas de la hipótesis nula en cuestión, la igualdad de medias en nuestro caso. Lo que entiendo que propone el autor del artículo —¡y enmiéndeseme si yerro!— es corregir como en


{{< highlight R >}}
remuestreo <- function(beer, water){
    # adaptamos la distribución a la hipótesis nula
    beer <- beer - mean(beer) + mean(water)

    x <- c(beer, water)
    new.beer  <- sample(x, length(beer),  replace = T)
    new.water <- sample(x, length(water), replace = T)

    mean(new.beer) - mean(new.water)
}

muestras <- replicate(1e4, remuestreo(beer, water))

mean(muestras > (mean(beer) - mean(water)))
[1] 3e-04
{{< / highlight >}}

esa diferencia de medias en la muestra para que la distribución resultante refleje más fielmente la hipótesis nula que se quiere evaluar.