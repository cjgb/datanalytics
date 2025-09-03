---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2025-01-14
lastmod: '2025-04-06T18:53:39.258704'
related:
- 2024-06-12-cortos.md
- 2025-02-25-cortos-stats.md
- 2023-10-24-timesnet.md
- 2025-02-11-cortos-llms.md
- 2024-03-21-cortos.md
tags:
- gam
- series temporales
- llms
- bulos
- superpredictores
title: Sobre los nombres de persona asociados a coeficientes intelectuales bajos y
  algunos otros asuntos más
url: /2025/01/14/cortos-estadistica/
---

En [_Dear Political Scientists: Don't Bin, GAM Instead_](https://datacolada.org/121) se discute una ocurrencia concreta de una disyuntiva más general que aparece frecuentemente en la práctica: crear varios modelos simples con bloques diferentes de datos contra utilizar un modelo global flexible que englobe todos los datos. Tengo la sospecha de que se ha optado históricamente por la primera aproximación por motivos ---entre otros--- computacionales que ya no operan.

La única manera de plantearse en serio la pregunta [_Will Transformers Revolutionize Time-Series Forecasting?_](https://towardsdatascience.com/will-transformers-revolutionize-time-series-forecasting-1ac0eb61ecf3) es no saber de predicción de series temporales y no saber de _transformers_. No está nada claro, por ejemplo, cómo usar _transformers_ para modelar series como $y_t = \alpha t + \epsilon_t$. Pudiera ser que LSTM funcionase mejor (véase
[esto](https://vivekupadhyay1.medium.com/arima-vs-lstm-a-comparative-study-of-time-series-prediction-models-91fa4219d9d9) o
[esto](https://medium.com/@fg-research/detecting-anomalies-in-financial-time-series-with-the-lstm-ae-sagemaker-algorithm-522975ba14aa)) pero sigo apostando por [_Forecasting: Principles and Practice_](https://otexts.com/fpp3/).

Por accidente he tropezado con este artículo,
[_Un nuevo estudio condena a más de 200.000 personas de España por su nombre: "Son menos inteligentes"_](https://www.huffingtonpost.es/sociedad/nuevo-estudio-condena-mas-200000-personas-espana-nombre-son-inteligentes.html),
en un medio perteneciente al grupo Prisa y hermano, por lo tanto, de la _prensa nacional más seria_. En particular afirma que la gente que se llama Jonathan, Aline o Sara tiene un CI promedio de no mucho más de 80. La misma información parece haber sido publicada recientemente en otros medios. Curiosamente, en la francofonía, el _estudio_ se conoció en octubre de 2023 (véase, por ejemplo,
[esto](https://www.sudinfo.be/id781076/article/2023-10-18/voici-les-prenoms-qui-auraient-le-qi-le-moins-eleve)). El medio belga
[TTBF](https://www.rtbf.be/)
ha [investigado](https://www.rtbf.be/article/le-prenom-de-votre-enfant-influence-t-il-son-intelligence-11291609)
el asunto y ha dado con y entrevistado al autor de la _noticia_, un tal Thomas Gayet, antiguo redactor de Topito, un medio especializado en _listas top 10_ y para el que escribió hace años [artículo original](https://www.topito.com/top-prenoms-qi-plus-faible-moyenne) y en el que se indica claramente que:

> Pour rappel, il se peut qu’on soit quelque peu sortis de la réalité dans ce top car comme vous le savez on aime l’humour et les blagues.

Tenía pendiente de leer
[una de las primeras evaluaciones de GitHub’s Copilot Workspace](https://epiverse-trace.github.io/posts/copilot-workspace/)
y ha quedado ya solo para envolver pescado.

Los _diez mandamientos de los superpredictores_ están [aquí](https://goodjudgment.com/philip-tetlocks-10-commandments-of-superforecasting/).

Es una perogrullada pero muchas veces se nos olvida: quienes sostienen tesis controvertidas están expuestos a revisiones muy, muy, muy meticulosas (como [esta](https://arxiv.org/pdf/2402.14583)).
