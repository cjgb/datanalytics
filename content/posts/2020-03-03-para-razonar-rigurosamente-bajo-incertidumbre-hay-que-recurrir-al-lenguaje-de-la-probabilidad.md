---
author: Carlos J. Gil Bellosta
categories:
- r
- probabilidad
date: 2020-03-03 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:45:57.338505'
related:
- 2019-05-21-que-puede-colgar-de-un-arbol.md
- 2014-03-07-victoria-o-diferencia-de-puntos-ahora-con-random-forests.md
- 2019-10-14-pyro.md
- 2020-03-10-mas-sobre-el-metodo-delta-propagate.md
- 2019-01-15-quien-sera-el-mejor-predictor-como-se-podra-medir.md
tags:
- predicción
- python
- random forests
- xgboost
title: '"Para razonar rigurosamente bajo incertidumbre hay que recurrir al lenguaje
  de la probabilidad"'
url: /2020/03/03/para-razonar-rigurosamente-bajo-incertidumbre-hay-que-recurrir-al-lenguaje-de-la-probabilidad/
---

Así arranca [este artículo](https://r-posts.com/xgboostlss-an-extension-of-xgboost-to-probabilistic-forecasting/), que presenta una extensión de XGBoost para predicciones probabilísticas. Es decir, un paquete que promete no solo una estimación del valor central de la predicción sino de su distribución.

La versión equivalente de lo anterior en el mundo de los _random forests_ está descrito [aquí](https://arxiv.org/pdf/1811.05994.pdf), disponible [aquí](https://github.com/ireis/PRF) y mucho me temo que muy pronto voy a poder contar por aquí si está a la altura de las expectativas.