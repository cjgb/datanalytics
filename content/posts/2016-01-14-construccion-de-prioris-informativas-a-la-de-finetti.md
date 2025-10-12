---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2016-01-14 08:13:11+00:00
draft: false
lastmod: '2025-04-06T18:46:58.142183'
related:
- 2014-10-06-el-problema-del-100-y-un-ensayo-de-solucion.md
- 2022-10-13-bayesianismo-frecuentismo-teoria-decision-04.md
- 2024-12-05-beta-binomial-deriva.md
- 2022-10-11-bayesianismo-frecuentismo-teoria-decision-03.md
- 2022-10-06-bayesianismo-frecuentismo-teoria-decision-02.md
tags:
- estadística bayesiana
- priori
title: Construcción de prioris informativas a la de Finetti
url: /2016/01/14/construccion-de-prioris-informativas-a-la-de-finetti/
---

Un banco tiene clientes. Los clientes usan la tarjeta de débito. La pueden usar de dos maneras: en cajero o para pagar (por productos y servicios). De cada cliente se tiene una secuencia de transacciones, etiquetadas como 1 o 0 según la use en cajero o no.

Para cada cliente, la secuencia de transacciones (más o menos larga) puede considerarse una [secuencia intercambiable](https://es.wikipedia.org/wiki/Variables_aleatorias_intercambiables) y, de acuerdo con el [teorema de representación de de Finetti](https://en.wikipedia.org/wiki/De_Finetti%27s_theorem),

$$ p(x_1, \dots, x_n) = \int_0^1 \prod p(x_i | \theta) p(\theta) d\theta$$

donde $p(\theta)$ es una densidad de probabilidad soportada por [0,1]. Esa es la probabilidad _a priori_ y de la que me he ocupado en algunas entradas últimamente. Las sugerencias que uno encuentra en la literatura, según denuncié recientemente, remiten a la teoría de las prioris no informativas y muchos, en estos contextos, se decantarían por una beta $B(1,1)$.

Sin embargo, el teorema de de Finetti no queda en la representación anterior. Añade que $p(\theta)$ es la densidad correspondiente a la distribución de

$$ \lim_n \frac{\sum_i X_i}{n}$$

que puede aproximarse mediante (en nuestro caso), la colección de los promedios

$$ \frac{\sum_i X_{ji}}{n_j}$$

donde $X_{ji}$ es la $i$-ésima transacción del $j$-ésimo cliente (que realiza $n_j$ transacciones).

Y sí, esa es una distribución _a priori_ informativa construida al gusto de de Finetti.

(Que es mejorable si se dispone de información adicional sobre los clientes; pero esa es otra historia).

(Que pueda o no ser aproximable por una beta con determinados parámetros para facilitar las operaciones posteriores es también otra historia).

([José M. Bernardo](http://www.uv.es/bernardo/) habla [aquí](http://www.ime.unicamp.br/~dias/Exchangeability.pdf) de esa representación y de un problema parecido; pero en el lance de matar, pincha en hueso: acaba proponiendo una de las distribuciones no informativas que recoge en su libro: ¡es que es matemático!)