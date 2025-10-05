---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2022-06-09
description: La semántica de los modelos está proporcionada por la y
lastmod: '2025-04-06T18:56:02.926900'
related:
- 2017-12-04-la-magnitud-de-la-sequia.md
- 2023-07-25-tutorial-numpyro-1-modelos-probabilisticos.md
- 2024-10-17-interpretacion-modelos.md
- 2022-09-29-ensembles-meteorologicos-probabilisticos-o-no.md
- 2021-01-26-que-modelas-cuando-modelas.md
tags:
- modelización
- estadística
title: Vale, el modelo es y = f(x) + error y f es importante, pero lo que le da significado
  es y
url: /2022/06/09/y-es-la-semantica-modelos/
---

Esta es una entrada sobre la _semántica_ de los modelos que resume mi planteamiento en una discusión que tuve hace un tiempo en Twitter. La he buscado sin éxito, así que la resumo. Alguien ---no recuerdo bien--- quería explicar cómo hace AEMET las predicciones meteorológicas _probabilísticas_. Pero con un error de planteamiento. Venía a decir que una predicción meteorológica probabilística (p.e., la probabilidad de que mañana llueva en Madrid) no _significa_ algo así como que de tantos días parecidos a los de hoy, al día siguiente llovió en tal proporción sino otra cosa distinta.

Lo que argumentaba era que AEMET tiene un sistema (determinista) para _proyectar a futuro_ la situación de la atmósfera y que para obtener predicciones (de, p.e., lluvia), genera _proyecciones_ variando ligeramente los parámetros iniciales. La probabilidad de lluvia predicha es entonces la proporción de simulaciones en las que llueve.

Lo cual es dos cosas a un tiempo:

- Cierto. O, al menos, una simplificación aceptable de cómo realiza AEMET las predicciones meteorológicas (para más detalles, véase [esto](http://www.aemet.es/documentos/es/conocermas/recursos_en_linea/publicaciones_y_estudios/publicaciones/Fisica_del_caos_en_la_predicc_meteo/27_Prediccion_probabilista.pdf), un capítulo dentro del muy recomendable libro [_Física del caos en la predicción meteorológica_](http://www.aemet.es/es/conocermas/recursos_en_linea/publicaciones_y_estudios/publicaciones/detalles/Fisica_del_caos_en_la_predicc_meteo)).
- Una confusión conceptual bastante seria, como pondré de manifiesto en lo que sigue.

Antes de ello, no puedo dejar de mencionar la importancia que las predicciones probabilísticas en general y las meteorológicas en particular han tenido para el desarrollo de la estadística. Herramientas como el [CRPS](https://datanalytics.com/2022/05/26/crps/) están _indisolublemente asociadas_ a sus múltiples aplicaciones en dicha disciplina (y creo recordar, además, que el CRPS fue propuesto originalmente dentro de dicha disciplina).

Tampoco puedo dejar de mencionar cómo también el asunto de qué significan, cómo se interpretan (realmente) y cómo deberían interpretarse idealmente las estimaciones meteorológicas probabilísticas ha sido objeto de estudio de sicólogos ([_“A 30% Chance of Rain Tomorrow”: How Does the Public Understand Probabilistic Weather Forecasts?_](https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1539-6924.2005.00608.x)), meteorólogos ([_What is the Meaning of PoP_](https://www.weather.gov/ffc/pop)), estadísticos ([_What does it mean when they say there’s a 30% chance of rain?_](https://statmodeling.stat.columbia.edu/2019/12/14/what-does-it-mean-when-they-say-theres-a-30-chance-of-rain/)) y humoristas ([_Meteorologist_](https://xkcd.com/1985/)).

Pero retomo el asunto de la confusión conceptual. Y es que quienquiera que diseño la $f(x)$ que proporciona las predicciones probabilísticas tuvo delante de sí innumerables opciones para construirla (poéticamente: transitaba en el borgiano [jardín de los senderos que se bifurcan](https://datanalytics.com/2016/04/11/y-viene-del-espanol-tu/)) y lo que le hizo decantarse por la particular versión de $f$ que describe AEMET en libro anterior es su _compatibilidad_ con $y$, es decir, los registros existentes de días en que llovió y no llovió. Es precisamente $y$ la que da ---dió--- forma al modelo y la que, finalmente, explica lo que hace.

El cómo, la $f$, es otra cuestión distinta.