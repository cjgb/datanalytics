---
author: Carlos J. Gil Bellosta
date: 2022-07-07
title: 'L-momentos: en busca de la intuición'
description: 'Tratando de encontrar la intuición en el concepto de los l-momentos'
url: /2022/07/05/l-momentos/
categories:
- estadística
tags:
- momentos
- distribuciones
---

Existen esquinitas de la estadística con las que uno solo tropieza cuando su práctica lo expone a sus aplicaciones menos habituales. Estos días ha sido el asunto de los l-momentos. En esta entrada exploro la intuición acerca del concepto ---porque uno no la hallará ni [aquí](https://en.wikipedia.org/wiki/L-moment) ni en ninguno de los artículos que he consultado al respecto--- y, más en general, el interés que pueda tener fuera del ámbito en el que los he encontrado.

![](/wp-uploads/2022/07/legendre.png#center)

Todos (¿todos?) sabemos qué son los momentos de una distribución (univariante): las esperanzas de $X$, $X^2$, etc. que:

1. Permiten identificar unívocamnete una distribución (los momentos se corresponden uno a uno con distribuciones).
2. Como consecuencia, permiten utilizar el viejuno _método de los momentos_ para ajustar distribuciones.

El problema es que los momentos solo están definidos cuando las esperanzas anteriores están todas ellas definidas. Lo que no es el caso cuando uno trabaja con distribuciones de cola gruesa: extremos, etc.

Pero no todo está perdido: para distribuciones con media (es decir, cuando la esperanza de $|X|$ es finita), pueden utilizarse los L-momentos.

Salvo que vuestra intuición para interpretar fórmulas alambicadas como

$$\lambda_r = r^{-1} \sum_{k=0}^{r-1} {(-1)^k \binom{r-1}{k} \mathrm{E}X_{r-k:r}}$$

sea mucho mejor que la mía, la definición, precisamente esa, no os dirá gran cosa. Es mucho más informativa la expresión ---extraída de un artículo,
[este](https://s3.us-east-2.amazonaws.com/seco.risklab.ca/seco/DescriptiveTechnicalArticle.pdf),
de un hijo de Santiago Carrillo---

$$\lambda_r = \int_0^1 Q(u) P_{r-1}(u) du$$

donde $Q$ es la función de cuantiles (i.e., $F^{-1}$) de la distribución y los $P_i$ son los polinomios de Legendre _desplazados_ al intervalo $(0, 1)$.

¿Qué hay que saber de estos polinomios? Que son una base ortonormal de una familia razonable de funciones sobre $(0, 1)$. Cabe preguntarse si la integral anterior existe (o bajo qué condiciones) y es una trivialidad (los polinomios en cuestión están acotados) probar que existen siempre que exista la integral de $|Q|$, y esta existe si la distribución tiene media.

Además, por lo anterior, se recuperan los dos resultados arriba mencionados sobre los momentos:

1. Los L-momentos determinan unívocamente una distribución (en concreto, su función $Q$).
2. Es posible ajustar distribuciones igualando los L-momentos empíricos a los teóricos (otra cosa es si este procedimiento es o no mejor que el habitual de la máxima verosimilitud).

Pero ahora, ¿qué nos dicen los L-momentos? El primero es la media de la distribución porque $P_0(u) = 1$, luego

$$\lambda_1 = \int_0^1 Q(u) P_{0}(u) du = \int_0^1 Q(u) du = E(X).$$

Los momentos 2, 3 y 4 tienen interpretaciones similares a los momentos tradicionales de orden 2, 3 y 4 (dispersión, asimetría y aplastamiento), dada la forma de los polinomios de Legendre correspondientes,

![](/wp-uploads/2022/07/legendre_polynomials.png#center)

que hacen que los L-momentos correspondientes para la normal estándar sean las integrales de las funciones

![](/wp-uploads/2022/07/l-moments.png#center)

Queda claro cómo el segundo momento mide la dispersión: será tanto mayor cuanta más masa haya en la cola de la distribución. El tercero va a ser cero con la distribución normal por simetría, pero dejará de serlo apenas aparezcan asimetrías en la distribución. El cuarto compara de nuevo la masa en las colas con la concentrada cerca del origen, por lo que vuelve a ser otra medida de dispersión. Etc.

## Coda

La imagen que adorna esta entrada es una interpretación de DALL·E del famoso retrato de Legendre caracterizado como científico loco.