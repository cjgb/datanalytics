---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2019-01-17 08:13:15+00:00
draft: false
lastmod: '2025-04-06T18:48:32.813552'
related:
- 2019-01-21-scorings-interpolando-y-extrapolando-entre-el-de-brier-y-el-lineal.md
- 2019-01-16-una-de-las-mil-maneras-malas-de-elegir-al-mejor-predictor.md
- 2022-02-17-examenes-probabilisticos.md
- 2022-05-24-log-scoring-mv.md
- 2022-05-26-crps.md
tags:
- predicción
- scorings
- brier
title: 'Mejores predictores: un ejemplo (el de Brier)'
url: /2019/01/17/mejores-predictores-un-ejemplo-el-de-brier/
---

La entrada de hoy casi me la escribe un comentarista (al que le estoy muy agradecido) ayer. Retomo el tema.

Ayer premiaba a cada predictor con $p(X)$, es decir, le daba $p$ punticos si ocurría $X$ y $1-p$ punticos sin no ocurría. La cosa no cambia si nos alineamos con lo que está escrito por ahí y en lugar de premiar, penalizamos. Es decir, si en lugar de maximizar $p(X)$, buscamos minimizar $1 - p(X)$. Nada cambia.

Las cosas cambian, y mucho, si elevemos al cuadrado y en lugar de penalizar con $1 - p(X)$ punticos, penalicemos con $(1 - p(X))^2$ punticos. Entonces, la pérdida media, supuesto que $X$ tiene una probabilidad real $q$ de ocurrencia, es $(1 - p)^2q + p^2(1-q)$.

Derivando, se obtiene $-2(1-p)q + 2p(1-q)$, que solo es cero cuando $p = q$. Es decir, ahora el castigo es mínimo se logra cuando el predictor acierta con la probabilidad del evento de interés. Es decir, un exponente de 2 altera fundamentalmente los incentivos del predictor: ahora le interesa estimar lo más fidedignamente posible las probabilidades $q$ reales asociadas al fenómeno de interés.

Tal es el llamado _scoring_ de Brier (véase _[Probabilistic prediction in patient management and clinical trials](https://onlinelibrary.wiley.com/doi/pdf/10.1002/sim.4780050506)_ para una aplicación).

Y, como no dejaron de indicarme los comentaristas de ayer, el mismo resultado se obtiene si se castiga con $-\log p(X)$, que, entre otras cosas, tiene que ver con la maximización de la verosimilitud.

Como ejercicio, dejo lo siguiente: ¿y si se castiga con $|1 - p(X)|^3$? (Nota: el ejercicio está _resuelto_ [aquí](https://datanalytics.com/2019/01/21/scorings-interpolando-y-extrapolando-entre-el-de-brier-y-el-lineal/).)