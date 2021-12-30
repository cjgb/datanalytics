---
author: Carlos J. Gil Bellosta
date: 2017-06-27 08:13:12+00:00
draft: false
title: Cartuchos malbaratados

url: /2017/06/27/cartuchos-malbaratados/
categories:
- gráficos
tags:
- gráficos
- mapas
- prensa
---

Me instan a hablar de

![](/wp-uploads/2017/06/canas_espana.png#center)

que procede de [aquí](http://cocinillas.elespanol.com/2017/06/cuanto-cuesta-una-cerveza/) y donde se compara el precio de una cerveza en la _plaza mayor_ de las capitales de provincia españolas (a propósito, ¿cuál es la plaza mayor de Zaragoza o Soria?). Dejando el resto (casi todas, de hecho) de las cuestiones de lado, nos centraremos en el gráfico.

¿Qué nos dice la teoría sobre gráficos como este? Primero, que de entre todas las _estéticas_ (usando la nomenclatura propia de `ggplot2`), las que mejor captura el ojo son `x` e `y`. Es decir, las distancias horizontales y verticales. Luego vienen el color, la pendiente, la forma, la transparencia, etc.

En este caso, los autores han preferido codificar la variable más importante, el precio, como un color. Con los [problemas que eso conlleva](https://www.datanalytics.com/2013/12/09/gradientes-e-ilusiones-opticas/).

Y han preferido utilizar las estéticas más potentes para recordarnos nuevamente dónde está Murcia (es decir, para pintar un mapa). Que sería justificable si la variable de interés tuviese una clara correlación con la posición geográfica (como pasa, por ejemplo, con el paro). Pero que no ocurre aquí.

Un diagrama de barras (o puntos) tal vez ordenable dinámicamente por provincia (para poder ubicar rápidamente la de uno) o importe (para compararla con el total) habría sido igual de sencillo pero, probablemente, más eficaz.

Y todo lo anterior, sin entrar en rangos o variaciones sobre las medias.