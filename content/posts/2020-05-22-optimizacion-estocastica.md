---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2020-05-22 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:58:44.459682'
related:
- 2018-10-23-abc-2.md
- 2020-02-24-to-irls-or-not-to-irls.md
- 2017-06-29-hoy-como-excepcion-gritare-y-justificare-malditos-logaritmos.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2016-03-03-mezclas-de-distribuciones-con-rstan.md
tags:
- mcmc
- optimización
- paquetes
- r
- stan
title: Optimización estocástica
url: /2020/05/22/optimizacion-estocastica/
---

Una de los proyectos en los que estoy trabajando últimamente está relacionado con un problema de optimización no lineal: tengo un modelo (o una familia de modelos) no lineales con una serie de parámetros, unos datos y se trata de lo que no mercería más explicación: encontrar los que minimizan cierta función de error.

Tengo implementadas dos vías:

* La _nls_, que usa un optimizador numérico genérico para encontrar esos mínimos. (Nótese que uso _nls_ y no `nls` porque esa función me queda muy corta).
* La _stan_, donde especifico el modelo, introduzco una serie de prioris más o menos informativas según lo que sepa de mi problema y estimo la distribución a posteriori de mis parámetros.

Ambas tienen sus ventajas y desventajas. La una es rápida y la otra no; la una me da poca información sobre los parámetros y la otra, mucha; una me permite introducir mucha información a priori y la otra casi nada, etc.

Pero lo curioso de la cosa es que la vía _stan_ me permite solucionar un problema de optimización numérica sin usar un optimizador explícito. Por lo que uno podría preguntarse: ¿es posible optimizar directamente usando técnicas similares a las que subyacen a Stan?

Y una respuesta (positiva) puede encontrarse en _[CEoptim: Cross-Entropy R Package for Optimization](https://www.jstatsoft.org/article/view/v076i08)_.