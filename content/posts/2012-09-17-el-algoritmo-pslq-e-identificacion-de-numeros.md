---
author: Carlos J. Gil Bellosta
categories:
- programación
date: 2012-09-17 07:22:17+00:00
draft: false
lastmod: '2025-04-06T19:10:16.450557'
related:
- 2019-04-16-sobre-el-error-de-generalizacion-porque-a-veces-se-nos-olvida.md
- 2017-10-16-modelos-no-lineales-directos-e-inversos.md
- 2016-05-24-tanto-ha-llovido-en-terminos-de-precision-numerica-desde-2008.md
- 2014-08-13-mis-procesos-puntuales-con-glm.md
- 2011-08-01-dos-aplicaciones-c2bfsorprendentes-del-analisis-de-la-correlacion-canonica.md
tags:
- programación
- python
- aproximaciones
title: El algoritmo PSLQ e identificación de números
url: /2012/09/17/el-algoritmo-pslq-e-identificacion-de-numeros/
---

El [algoritmo PSLQ](http://mathworld.wolfram.com/PSLQAlgorithm.html) se usa para resolver aproximadamente ecuaciones con coeficientes enteros $a_i$ de la forma

$$ \sum_i a_i x_i = 0$$

donde, obviamente, no todos los $a_i$ son cero. Aproximadamente significa que la solución se busca dentro de un cierto nivel de tolerancia.

No existe, que yo sepa, una implementación en R. Pero sí en Python, usando librerías que permiten utilizar números de precisión arbitraria, como `[mpmath](https://code.google.com/p/mpmath/)`. Veamos un ejemplo:

{{< highlight python >}}
from mpmath import *
pslq([-1, pi], tol=0.01)
# [22, 7]
{{< / highlight >}}


La respuesta obtenida significa que

$$ | -22 + 7 \pi | < 0.01, $$

es decir, que la fracción 22/7 aproxima el valor de $\pi$ con un error inferior al 1 %.

Y esta essolo una de las posibilidades que ofrece el algoritmo PSLQ y más en general, la librería `mpmath`. Muchas de las que encuentro más sorprendentes están recogidas en el [capítulo _Number identification_ de la documentación de `mpmath`](http://mpmath.googlecode.com/svn/trunk/doc/build/identification.html).