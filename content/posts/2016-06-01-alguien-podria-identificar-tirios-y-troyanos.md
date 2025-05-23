---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2016-06-01 09:13:44+00:00
draft: false
lastmod: '2025-04-06T18:45:11.633686'
related:
- 2017-05-11-cosas-de-twitter-y-encuestas.md
- 2016-07-04-gestion-de-la-mendacidad-encuestoelectoral-los-numeros.md
- 2013-02-11-voy-a-partir-una-lanza-a-favor-de-rosell-a-cuenta-de-la-epa.md
- 2016-05-05-encuestas-electorales-medios-y-sesgos-i.md
- 2014-11-04-dislexia-probabilistica.md
tags:
- cis
- correspondencias
- encuestas
- tablas de contingencia
- cca
title: ¿Alguien podría identificar tirios y troyanos?
url: /2016/06/01/alguien-podria-identificar-tirios-y-troyanos/
---

Con los datos


{{< highlight R >}}
pcts <- cbind(
  c(35.7, 19.6, 6.6, 16.6, 9.6),
  c(0.3, 0.2, 0.2, 0.3, 0.8),
  c(25.0, 14.9, 10.7, 32.7, 12.9),
  c(1.6, 8.0, 8.5, 6.5, 7.9),
  c(11.0, 18.7, 7.9, 12.7, 8.0),
  c(3.2, 21.5, 52.9, 16.7, 47.9)
)

totales <- c(1102, 975, 596, 638,	174)
tabla <- round(t(pcts * totales / 100))
{{< / highlight >}}

y el concurso de

{{< highlight R >}}
library(MASS)
biplot(corresp(tabla, nf = 2))
{{< / highlight >}}

genero

![partidos_cadenas](/wp-uploads/2016/05/partidos_cadenas.png#center)

que a lo mejor no resulta demasiado interesante si no añado que las columnas se refieren a partidos políticos y las filas a cadenas en las que, [según el CIS](http://www.cis.es/cis/export/sites/default/-Archivos/Marginales/3120_3139/3126/cru3126votog2015.html), sus votantes prefieren para seguir la actualidad política. Eso sabido, ¿cuál es cuál?