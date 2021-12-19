---
author: Carlos J. Gil Bellosta
date: 2020-09-22 09:13:00+00:00
draft: false
title: Una diferencia teórica importante entre los lm y el resto de los glm

url: /2020/09/22/una-diferencia-teorica-importante-entre-los-lm-y-el-resto-de-los-glm/
categories:
- estadística
tags:
- estadística
- glm
- probabilidad
- poisson
- sobredispersión
---

_[Este es un extracto, una píldora atómica, de mi charla del otro día sobre el modelo de Poisson y al sobredispersión.]_

Aunque me guste expresar el modelo lineal de la forma

$$ y_i \sim N(a_0 + \sum_j a_j x_{ij}, \sigma_i)$$

hoy, para lo que sigue, es más conveniente la representación tradicional

$$ y_i  = a_0 + \sum_j a_j x_{ij} + \epsilon_i$$

donde si no sabes lo que es cada cosa, más vale que no sigas leyendo.

Los valores $latex \epsilon_i$ representan en él dos cosas, que pudieran incluso ser la misma:

* El error irreductible.
* El efecto de todas las variables de importancia menor sobre el valor de $y_i$ que no recoge el modelo.

_[Los spinozistas contumaces y cierta subtribu bayesiana sostienen que son la misma cosa; otros mantenemos que existe cierta intersección entre ambos conceptos, que es mayor o menor según el caso.]_

En los GLMs, sin embargo, la separación entre ambas es mucho más clara. Por un lado, se estima cierto (o ciertos) parámetros, $latex p_i$, o $latex \lambda_i$, o... como cierta función (de enlace) de una expresión lineal,

$$ \theta_i = f\left(a_0 + \sum_j a_j x_{ij}\right)$$

y luego, el error irreductible se expresa explícitamente como

$$ y_i \sim P(\theta_i)$$

donde $latex P$ puede representar la distribución de Bernoulli, de Poisson, etc. Pero nótese cómo ha desaparecido _por definición_ ese otro efecto sobre el error causado por las variables no contempladas.

En el modelo lineal, repito, son la misma cosa. Además, el teorema central del límite nos ofrece ciertas garantías teóricas: el efecto de esas muchas variables pequeñas que se omiten será parecido a una normal. Si a este error casi normal se le añade el irreductible, que también se asume normal, el error combinado, $latex \epsilon_i$, su suma, también lo será.

Pero esa feliz conjunción no se da en los GLMs verdaderamente G.

Y como consecuencia...