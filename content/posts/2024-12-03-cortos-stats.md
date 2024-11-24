---
author: Carlos J. Gil Bellosta
date: 2024-12-03
title: 'Seis asuntos sobre modelización estadística, incluyendo un problema que no parece del todo trivial'
url: /2024/12/03/cortos-estadística
categories:
- cortos
tags:
- estadística
- catboost
- censura
- clústering
- modelización
---

### Sobre catboost

Todavía no he usado `catboost` en ningún proyecto serio, aunque tiene la pinta de ser la evolución más sofisticada de todos las variantes existentes del _boosting_. Ya escribí al respecto [aquí](/2024/01/23/oblivious-trees/) y hoy traigo dos enlaces adicionales de José Luis Cañadas, un usuario muy entusiasta. Una sobre el tratamiento de las
[variables categóricas](https://muestrear-no-es-pecado.netlify.app/2023/06/09/categoricas_a_lo_catboost_pensamientos/index.html)
y otro sobre la
[regresión por cuantiles](https://muestrear-no-es-pecado.netlify.app/2023/04/23/quantile-catboost/index.html).

### Ajuste bayesiano de un modelo con censura

Lo presenta el maestro Juan Orduz [aquí](https://juanitorduz.github.io/censoring/) que, como todos, no para mientes al hecho [no totalmente evidente](/2024/11/21/verosimilitud-distribuciones-compuestas/) de que la verosimilitud de una densidad mixta (continua y discreta a un tiempo) es la que se postula que es (véase cómo arranca la sección _Censored Gamma Model_).

### Un tipo extraño de problema de modelización estadística

[Aquí](https://www.lesswrong.com/posts/HsxT2cpPWYzTg9tpY/d-and-d-sci)
se plantea un extraño problema estadístico. No se trata solo de construir y ajustar un modelo estadístico a unos datos sino de resolver luego con él un problema que no había visto antes. En concreto:

- Las predicciones del modelo son ---o se espera que sean--- crecientes en las variables de entrada.
- Se parte de unos valores $x_{0,1}, \dots, x_{0,n}$ concretos para los que hay una predicción dada (irrelevante).
- Se busca el máximo de la predicción para unos valores $x_{1,1}, \dots, x_{1,n}$ de modo que $d_i = x_{1,i} - x_{0,i} > 0$ y $\sum d_i \le T$.

¿Cómo lo tratarías de resolver?

### Visualización del efecto de las variables de un modelo en R y Python

[`effectplots`](https://github.com/mayer79/effectplots) en R y
[`model-diagnostics`](https://github.com/lorentzenchr/model-diagnostics) en Python
permiten visualizar el efecto de las variables de un modelo a través de gráficos como los que se muestran
[aquí](https://lorentzen.ch/index.php/2024/11/23/effect-plots-in-python-and-r/).

### Lo que siempre se nos olvida al hacer clústers

Frank Harrell, a resultas de algún estudio mejorable que ha llegado a sus manos, nos recuerda
[aquí](https://www.fharrell.com/post/cluster/)
 que generar _clústers_ no es el final sino el principio de un proceso en el que hay que, como poco, estudiar su estabilidad y significancia.

### Reflexiona sobre qué esperas obtener antes de realizar un análisis estadístico

Me recuerda mucho a
[lo que escribí hace unos meses sobre la causalidad](/2024/09/10/causalidad/)
[esto](https://statmodeling.stat.columbia.edu/2024/11/13/make-a-hypothesis-about-what-you-expect-to-see-every-step-of-the-way-a-manifesto/)
que nos trae Andrew Gelman acerca del proceso del análisis estadístico, la construcción de modelos, gráficos, etc.


