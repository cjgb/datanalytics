---
author: Carlos J. Gil Bellosta
date: 2019-01-17 08:13:15+00:00
draft: false
title: 'Mejores predictores: un ejemplo (el de Brier)'

url: /2019/01/17/mejores-predictores-un-ejemplo-el-de-brier/
categories:
- estadística
tags:
- predicción
- scorings
---




La entrada de hoy casi me la escribe un comentarista (al que le estoy muy agradecido) ayer. Retomo el tema.







Ayer premiaba a cada predictor con $latex p(X)$, es decir, le daba $latex p$ punticos si ocurría $latex X$ y $latex 1-p$ punticos sin no ocurría. La cosa no cambia si nos alineamos con lo que está escrito por ahí y en lugar de premiar, penalizamos. Es decir, si en lugar de maximizar $latex p(X)$, buscamos minimizar $latex 1 - p(X)$. Nada cambia.







Las cosas cambian, y mucho, si elevemos al cuadrado y en lugar de penalizar con $latex 1 - p(X)$ punticos, penalicemos con $latex (1 - p(X))^2$ punticos. Entonces, la pérdida media, supuesto que $latex X$ tiene una probabilidad real $latex q$ de ocurrencia, es $latex (1 - p)^2q + p^2(1-q)$.







Derivando, se obtiene $latex -2(1-p)q + 2p(1-q)$, que solo es cero cuando $latex p = q$. Es decir, ahora el castigo es mínimo se logra cuando el predictor acierta con la probabilidad del evento de interés. Es decir, un exponente de 2 altera fundamentalmente los incentivos del predictor: ahora le interesa estimar lo más fidedignamente posible las probabilidades $latex q$ reales asociadas al fenómeno de interés.







Tal es el llamado _scoring_ de Brier (véase _[Probabilistic prediction in patient management and clinical trials](https://onlinelibrary.wiley.com/doi/pdf/10.1002/sim.4780050506)_ para una aplicación).







Y, como no dejaron de indicarme los comentaristas de ayer, el mismo resultado se obtiene si se castiga con $latex -\log p(X)$, que, entre otras cosas, tiene que ver con la maximización de la verosimilitud.







Como ejercicio, dejo lo siguiente: ¿y si se castiga con $latex (1 - p(X))^3$?



