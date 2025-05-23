---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2016-06-22 08:13:18+00:00
draft: false
lastmod: '2025-04-06T18:54:44.204361'
related:
- 2019-04-16-sobre-el-error-de-generalizacion-porque-a-veces-se-nos-olvida.md
- 2017-09-11-pues-los-svms-al-final-no-son-tan-exoticos.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2024-02-01-optimizacion-generalizacion.md
- 2016-06-21-gbm-i-una-mentira-sugerente.md
tags:
- estadística
- gbm
title: 'GBM (II): Minización de funciones, pérdidas cuadráticas, residuos y gradientes'
url: /2016/06/22/gbm-ii-minizacion-de-funciones-perdidas-cuadraticas-residuos-y-gradientes/
---

Para minimizar una función $latex \phi(x)$ es habitual utilizar un procedimiento iterativo: a partir de un punto inicial $latex x_0$ se _salta_ a $latex x_1 = x_0 - \lambda \nabla \phi(x_0)$ (donde $latex \lambda$ es un número pequeño predefinido de antemano), y de ahí, sucesivamente, a

$$ x_n = x_{n-1} - \lambda \nabla \phi(x_{n-1}).$$

Porque, típicamente, como cuando uno está en el monte y da un paso corto en la dirección opuesta a la de máxima pendiente, sucede que

$$ \phi(x_n) > \phi(x_{n-1} - \lambda \nabla \phi(x_{n-1})).$$

¿Qué tiene esto que ver con nuestra serie? En el ejemplo de la entrada anterior, el de la regresión lineal, tenemos una función de pérdida cuadrática,

$$ L(\hat{y}) = \sum_i (y_i - f(x_i))^2 = \sum \phi_i(f(x_i)),$$

donde $latex \phi_i(x) = (y_i - x)^2$. ¿Cómo podríamos reducir ese error? Recurriendo al párrafo anterior y _saltando_ a

$$ \sum \phi_i(f(x_i) - \lambda \nabla \phi_i(f(x_i))).$$

Pero $latex \nabla \phi_i(f(x_i)) = -2 (y_i - f(x_i))$ no es otra cosa que $latex -2 r_i$, el i-ésimo residuo. Este residuo depende de $latex y_i$ y no solo de los predictores $latex x_i$; pero si creamos un modelo que lo aproxime, $latex g(x_i) \sim r_i$, entonces

$$ L(\hat{y}) = \sum \phi_i(f(x_i)) > \sum \phi_i(f(x_i) - \lambda \nabla \phi_i(f(x_i))) \sim \sum \phi_i(f(x_i) + 2 \lambda g(x_i))).$$

En resumen, el modelo $latex f + 2 \lambda g$ es, con alta probabilidad, mejor que $latex f$. Además, nada nos impide crear otro modelo $latex h$ sobre los residuos de $latex f + 2 \lambda g$ y así sucesivamente hasta que se cumpla cierta condición de parada.

Esta entrada enlaza lo sugerente de la entrada anterior de la serie, i.e., construir modelos sobre los residuos de otros modelos con los rudimentos de la teoría de la optimización y muestra cómo, de alguna manera, con pérdidas cuadráticas, aproximar el residuo viene a ser aproximar el gradiente.