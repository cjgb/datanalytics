---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
date: 2020-05-27 09:13:00+00:00
draft: false
lastmod: '2025-04-06T19:00:24.546531'
related:
- 2023-04-27-problemas-matematicos-deep-learning.md
- 2019-07-01-optimizacion-dos-escuelas-y-una-pregunta.md
- 2017-09-11-pues-los-svms-al-final-no-son-tan-exoticos.md
- 2024-07-04-optimizacion-altas-dimensiones.md
- 2024-02-01-optimizacion-generalizacion.md
tags:
- optim
- optimización
- redes neuronales
title: ¿Por qué el optimizador de una red neuronal no se va al carajo (como suelen
  L-BFGS-B y similares)?
url: /2020/05/27/por-que-el-optimizador-de-una-red-neuronal-no-se-va-al-carajo-como-suelen-l-bfgs-b-y-similares/
---

Vale, admito que no funciona siempre. Pero una manera de distinguir a un matemático de un ingeniero es por una casi imperceptible pausa que los primeros realizan antes de pronunciar _optimización_. Un matemático nunca conjuga el verbo optimizar en vano.

[Una vez, hace tiempo, movido por una mezcla de paternalismo y maldad, delegué un subproblema que incluía el fatídico `optim` de R en una ingeniera. Aún le debe doler el asunto.]

Buscar el mínimo de una función de 4 o 5 parámetros es el mayor enemigo de tu vida social. Sin embargo, ¿por qué no parece ser tal el caso con las redes neuronales?

Frente a la cuestión

>Why the type of non-convex optimization that needs to be done when training deep neural nets seems to work reliably?

Yan LeCun [respondió](https://www.kdnuggets.com/2016/08/yann-lecun-3-thoughts-deep-learning.html)

>It’s hard to build a box [meaning: a local minimum] in 100 million dimensions.

Es una hipótesis. No hay demostración. Pero tal vez por ahí vayan los tiros.