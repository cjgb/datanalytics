---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2014-09-29 07:13:08+00:00
draft: false
lastmod: '2025-04-06T18:53:48.832096'
related:
- 2019-07-22-proporciones-pequenas-y-teoremas-de-imposibilidad.md
- 2018-05-29-guasa-tiene-que-habiendo-tanto-economista-por-ahi-tenga-yo-que-escribir-esta-cosa-hoy.md
- 2024-07-08-cortos-stats.md
- 2022-04-05-intervenciones-buenistas.md
- 2015-07-24-mis-respuestas-en-una-entrevista-sobre-big-data-periodismo-de-datos-etc.md
tags:
- campañas
- estadística
- publicidad
- teoría de la decisión
title: 'Decisiones basadas en datos: ¿siempre posibles en la práctica?'
url: /2014/09/29/decisiones-basadas-en-datos-siempre-posibles-en-la-practica/
---

Me gusta criticar. Bien lo saben quienes me siguen. Pero hoy toca aplaudir un artículo tan raro como valiente. Que no hace sino criticar por mí. Se titula _[On the Near Impossibility of Measuring the Returns to Advertising](http://justinmrao.com/lewis_rao_nearimpossibility.pdf)_. Sus autores, quiero subrayarlo aquí, trabajan en Google y Microsoft.

Los métodos _data driven_ gozan del mayor de los predicamentos. Véase una pequeña muestra extraída de una reciente conversación en Twitter:

[![data_driven](/wp-uploads/2014/09/data_driven.png#center)
](/wp-uploads/2014/09/data_driven.png#center)

Dirigidas por los datos están (o pretenden estar) las campañas publicitarias. Por ejemplo, las nada baratas que consisten en insertar cuñas publicitarias en los descansos de la Super Bowl. Y los efectos de estas intervenciones se miden utilizando técnicas como [estas](http://www.datanalytics.com/2014/09/23/el-impacto-causal-de-google/) (sí, promovidas por colegas de uno de los autores). Sin embargo, los efectos potenciales de esas campañas son tan minúsculos en comparación con otras fuentes de ruido que las pruebas estadísticas con los que se tratan de detectar están muy lejos de poseer la potencia necesaria para ello. Este razonamiento es el que desarrollan los autores del artículo para acabar enunciando y demostrando su _teorema de la imposibilidad de la Super Bowl_.

Retornando a mi discusión en Twitter, efectivamente, tanto los datos y la evidencia son maleables. Y tienen que serlo habida cuenta tanto de la cantidad de artículos científicos que se escriben en disciplinas nulas como del éxito que se arrogan los departamentos de márketing en las comunicaciones corporativas a cuenta de esas campañas de ROI inmensurable. Los autores describen de manera genial la recocina de esos dudosos éxitos:

>A related issue is that incentives can create a moral hazard problem for reporting ROI estimates truthfully. Let’s call the person responsible for purchasing a specific campaign the “media buyer.” The media buyer reports to some principle,“the firm,” that cares about the truth. The media buyer gets a bonus based the principle’s posterior belief on campaign ROI. If reports are verifiable, there is no agency problem. If they are totally unverifiable, we are in a cheap talk game [] where strategic communication leads to reports that are correlated with the agent’s signal (the estimate), but noisy due to the common knowledge of the agent’s bias. Since it is very hard to disprove a report with other data and estimates themselves are noisy and likely manipulatable, we contend there is room for selective filtering as in the equilibrium these sorts of games. If the principle could access the raw data at some cost it could mitigate this problem, but the remaining bias would still induce a moral hazard problem in reporting.

Algo que no he visto suceder casi nunca. Lo juro.