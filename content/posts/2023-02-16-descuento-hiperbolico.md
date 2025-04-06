---
author: Carlos J. Gil Bellosta
categories:
- estadística bayesiana
date: 2023-02-16
lastmod: '2025-04-06T19:05:33.955883'
related:
- 2024-06-03-descuento-hiperbolico.md
- 2022-10-04-bayesianismo-frecuentismo-teoria-decision-01.md
- 2012-01-09-c2bfcuanto-gana-el-banco-con-tu-hipoteca.md
- 2018-10-11-un-resultado-probabilistico-contraintuitivo-y-ii.md
- 2024-12-05-beta-binomial-deriva.md
tags:
- economía
- sicología
- estadística bayesiana
- incertidumbre
- descuento hiperbólico
title: 'Descuento hiperbólico: una perspectiva bayesiana'
url: /2023/02/16/descuento-hiperbolico-bayesiano/
---

Por un lado, nos enseñan que para descontar flujos de caja futuros tenemos que usar la función exponencial ---para una determinada tasa de descuento o, en algunos contextos, tipo de interés---:

$$\text{valor presente} = A \exp(-tr)$$

donde $A$ es una cierta cantidad que recibiremos en el momento futuro $t$ y donde $r$ es nuestra _tasa de descuento_.

Por otro lado, experimentos de la sicología y la economía conductual, parecen indicar que la gente se tiende a regir por una regla distinta, la del llamado
[_descuento hiperbólico_](https://en.wikipedia.org/wiki/Hyperbolic_discounting)

$$\text{valor presente} = \frac{A}{1 + kt}$$

Esa discrepancia entre lo que se enseña en primero de ADE y el comportamiento de muchos agentes económicos se entiende como un sesgo aprovechable por partes malintencionadas para separar a la gente de todo o parte de su patrimonio. Veamos lo que dice ChatGPT al respecto:

> En el contexto de los agentes no racionales, el descuento hiperbólico puede tener varias consecuencias importantes. Algunos ejemplos incluyen:
> - Elecciones a corto plazo: los agentes no racionales que utilizan descuento hiperbólico pueden tener una tendencia a elegir recompensas a corto plazo en lugar de recompensas a largo plazo, incluso si la recompensa a largo plazo es más valiosa.
> - Toma de decisiones impulsiva: los agentes no racionales que utilizan descuento hiperbólico pueden ser propensos a tomar decisiones impulsivas, sin pensar en las consecuencias a largo plazo.
> - Dificultad para planificar a largo plazo: los agentes no racionales que utilizan descuento hiperbólico pueden tener dificultades para planificar y trabajar hacia objetivos a largo plazo debido a su tendencia a descontar los premios futuros.

Sin embargo, supongamos que existe incertidumbre acerca de la tasa de descuento. Supongamos que tiene distribución $\Gamma(\alpha, \lambda)$. Entonces

$$\int_0^\infty \exp(-tr) p(\alpha, \lambda, r) dr = \frac{1}{(1 + t/\lambda)^\alpha},$$

que no es una expresión muy distinta de la que aparece más arriba para la tasa de descuento hiperbólica.

Para terminar, aparte de los consabidos corolarios, uno menos esperado: esta entrada es, formalmente, [muy similar a esta otra](/2022/01/11/caracterizacion-binomial-negativa-poisson-gamma/).