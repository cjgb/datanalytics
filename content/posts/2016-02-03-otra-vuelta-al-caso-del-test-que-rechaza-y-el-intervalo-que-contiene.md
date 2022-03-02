---
author: Carlos J. Gil Bellosta
date: 2016-02-03 09:13:57+00:00
draft: false
title: Otra vuelta al caso del test que rechaza y el intervalo que contiene

url: /2016/02/03/otra-vuelta-al-caso-del-test-que-rechaza-y-el-intervalo-que-contiene/
categories:
- estadística
tags:
- intervalo de confianza
- prueba de hipótesis
---

Esta visita adicional al tema es consecuencia de mi revisión de todo el asunto de las pruebas de hipótesis. En particular, en el caso de prueba binomial, como en [esta entrada](http://www.datanalytics.com/2016/01/29/el-test-rechaza-pero-el-intervalo-contiene-contraejemplos/), de la que la que lees es continuación.

En particular,

{{< highlight R >}}
binom.test(79, 100, 0.7)

# Exact binomial test
#
# data:  79 and 100
# number of successes = 79, number of trials = 100, p-value = 0.04982
# alternative hypothesis: true probability of success is not equal to 0.7
# 95 percent confidence interval:
#   0.6970846 0.8650563
# sample estimates:
#   probability of success
# 0.79
{{< / highlight >}}

es un caso en el que la prueba rechaza (al nivel de confianza del 5% siempre) y el intervalo de confianza del parámetro cubre el valor 0.7 de partida.

Un comentarista a mi entrada anterior excusaba la incongruencia en estos términos:

>El test binomial es exacto mientras que el cálculo de CI es una aproximación, de ahí la discrepancia.

Si fuese eso, solo un error de aproximación (y convengo en que los números elegidos para el ejemplo anterior son limítrofes y ponen a prueba la precisión de las aproximaciones), quedaría satisfecho. Pero hay más.

Por un lado, el cálculo del p-valor tiene en cuenta el parámetro de referencia 0.7; es decir, que mi hipótesis nula, la famosa hipótesis nula, es que 0.7 es el valor verdadero del parámetro desconocido.

El cálculo del intervalo de confianza, por otra parte, no usa jamás ese valor 0.7 (ni la hipótesis nula, ni nada de eso). De hecho, el intervalo de confianza que me dan `binom.test(79, 100, 0.7)` y `binom.test(79, 100, 0.2)` coinciden.

En vistas de lo cual, si sé calcular intervalos de confianza, ¿puedo ignorar el p-valor? Es decir, ¿puedo limitarme a calcular intervalos de confianza y dejar de lado el espinoso asunto de las hipótesis nulas, los p-valores, etc.? ¿Podría desaprender toda esa teoría sin perjuicio alguno? Sobre todo, teniendo en cuenta de que los resultados pueden ser discrepantes.

**Nota:** mañana tengo pensado hacer de abogado de mí mismo y argüir y trataros de convencer de lo contrario.
