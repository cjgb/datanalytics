---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2020-07-09 09:13:00+00:00
draft: false
lastmod: '2025-04-06T19:02:11.868361'
related:
- 2020-05-21-analisis-bayesiano-de-pruebas-con-sensibilidad-especificidad-desconocida.md
- 2020-04-27-muestreo-sensibilidad-y-especificidad.md
- 2016-03-29-el-auc-es-la-probabilidad-de-que.md
- 2020-06-16-coronavirus-prevalencia-sensibilidad-y-especificidad.md
- 2022-06-21-matriz-confusion-sensibilidad-etc.md
tags:
- especificidad
- roc
- sensibilidad
title: Sobre la curva ROC como medida de bondad de clasificadores
url: /2020/07/09/sobre-la-curva-roc-como-medida-de-bondad-de-clasificadores/
---

Esta entrada se entiende mal sin[ esta otra](https://datanalytics.com/2020/06/16/coronavirus-prevalencia-sensibilidad-y-especificidad/) donde se daba noticia de un clasificador que era mucho _mejor_ o _peor_ (de acuerdo con ciertas métricas) según la tasa de prevalencia de la clase relevante a pesar de que tanto su sensibilidad como su especificidad no eran particularmente malas. Efectivamente, con lo del coronavirus hemos reaprendido a darle la vuelta a las probabilidades condicionales y aplicar el teorema de Bayes para ver qué cabía esperar de un clasificador cuyas bondades se predican en términos de la sensibilidad y la especificidad.

Pero, esencialmente, eso es lo que hace la curva ROC (y sus medidas derivadas, como el área bajo la curva): caracterizar la bondad de un  modelo de acuerdo con su sensibilidad y especificidad. Así que los mimos motivos por los que no nos pareció suficiente con el coronavirus siguen vigentes para que tampoco nos lo parezca para cualquier otro fin.