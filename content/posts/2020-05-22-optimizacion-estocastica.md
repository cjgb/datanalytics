---
author: Carlos J. Gil Bellosta
date: 2020-05-22 09:13:00+00:00
draft: false
title: Optimización estocástica

url: /2020/05/22/optimizacion-estocastica/
categories:
- r
tags:
- mcmc
- optimización
- paquetes
- r
- stan
---

Una de los proyectos en los que estoy trabajando últimamente está relacionado con un problema de optimización no lineal: tengo un modelo (o una familia de modelos) no lineales con una serie de parámetros, unos datos y se trata de lo que no mercería más explicación: encontrar los que minimizan cierta función de error.

Tengo implementadas dos vías:

* La _nls_, que usa un optimizador numérico genérico para encontrar esos mínimos. (Nótese que uso _nls_ y no `nls` porque esa función me queda muy corta).
* La _stan_, donde especifico el modelo, introduzco una serie de prioris más o menos informativas según lo que sepa de mi problema y estimo la distribución a posteriori de mis parámetros.

Ambas tienen sus ventajas y desventajas. La una es rápida y la otra no; la una me da poca información sobre los parámetros y la otra, mucha; una me permite introducir mucha información a priori y la otra casi nada, etc.

Pero lo curioso de la cosa es que la vía _stan_ me permite solucionar un problema de optimización numérica sin usar un optimizador explícito. Por lo que uno podría preguntarse: ¿es posible optimizar directamente usando técnicas similares a las que subyacen a Stan?

Y una respuesta (positiva) puede encontrarse en _[CEoptim: Cross-Entropy R Package for Optimization](https://www.jstatsoft.org/article/view/v076i08)_.