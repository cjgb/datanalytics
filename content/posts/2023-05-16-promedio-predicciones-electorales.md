---
author: Carlos J. Gil Bellosta
date: 2023-05-16
title: 'Problemas de los promedios de encuestas electorales'

url: /2023/05/16/problemas-promedios-encuestas-electorales/
categories:
- estadística
tags:
- encuestas
- promedios
- sesgos
---

El otro día,
[al hablar de las encuestas electorales y su relación con la predicción electoral](/2023/05/09/encuestas-predicciones-electorales/),
me referí tangencialmente ---y, ahora que lo pienso, un tanto confusamente--- a los promedios de encuestas. Vine a decir que los promedios de encuestas como

![](/wp-uploads/2023/opinion_polling_spain_2023.png#center)

de la
[Wikipedia](https://en.wikipedia.org/wiki/Opinion_polling_for_the_2023_Spanish_general_election)
constituyen una _primera aproximación_ ---burda--- al problema de la predicción electoral cuando, realmente, deberían considerarse otro _nowcast_.

Estos promedios de encuestas deberían ser más fiables que las encuestas particulares, aunque solo sea porque utilizan más información. Sin embargo, están expuestas a una serie de problemas como los que se anuncian/denuncian [aquí](https://statmodeling.stat.columbia.edu/2023/05/15/48536/).

Resumen del problema:

1. Se sospecha ---o es sabido--- que distintas encuestadoras tienden a favorecer a distintos partidos.
2. Por azar, la publicación de los resultados de unas y otras podrían distribuirse de manera no homogénea en el tiempo.
3. Como consecuencia, podrían identificarse vaivenes de intención electoral a los que tal vez alguien dé una interpretación sustantiva.
4. Cuando, realmente, son únicamente ruido instrumental.

En el enlace se discute una posible solución. Alega el autor que no basta con promediar: también hay que _sesgar_. Es decir, hay que _manipular_ ---en el sentido más literal y menos connotativo del término--- los valores de los que se realizan las medias.




