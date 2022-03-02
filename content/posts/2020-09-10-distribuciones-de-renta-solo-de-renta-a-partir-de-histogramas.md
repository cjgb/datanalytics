---
author: Carlos J. Gil Bellosta
date: 2020-09-10 09:13:00+00:00
draft: false
title: Distribuciones (¿de renta? ¿solo de renta?) a partir de histogramas

url: /2020/09/10/distribuciones-de-renta-solo-de-renta-a-partir-de-histogramas/
categories:
- artículos
- r
tags:
- artículos
- cuantiles
- distribuciones
- r
- renta
- economía
---

En el primer número de la novísima revista _[Spanish Journal of Statistics](https://www.ine.es/ss/Satellite?L=es_ES&c=Page&cid=1259952184169&p=1259952184169&pagename=RevEstadistica%2FSJSLayout)_ aparece un artículo con un título tentador: _[Recovering income distributions from aggregated data via micro-simulations](https://www.ine.es/art/sjs/sjs_2019_01_03.pdf)_.

Es decir, un artículo que nos puede permitir, por ejemplo, muestrear lo que la AEAT llama _rendimientos_ a partir de lo que publica ([aquí](https://www.agenciatributaria.es/AEAT/Contenidos_Comunes/La_Agencia_Tributaria/Estadisticas/Publicaciones/sites/irpf/2015/jrubik1afd6604dcf480f6a17a64bbd6945c9c007a460e.html)):

![](/wp-uploads/2020/09/Screenshot-from-2020-09-09-13-50-00.png#center)

Uno de los métodos de los que sostienen el ignominioso _a mí me funciona_ está basado en el modelo

`lm(log(x) ~ poly(p, 3))`

donde `x` es el extremo superior del tramo y `p` es la proporción acumulada de sujetos.

Con los datos de la AEAT del 2015, quedaría algo así como:

{{< highlight R >}}
datos <- structure(
    list(
        hasta = c(1.5, 6, 12, 21, 30, 60, 150, 601, 1000),
        contribuyentes = c(0.305, 58.911, 1202.863, 4181.433, 3022.829,
                        3183.805, 605.617, 74.797, 7.244)),
    class = "data.frame",
    row.names = 4:12)

datos$prop <- cumsum(datos$contribuyentes) / sum(datos$contribuyentes)
tmp <- datos[-nrow(datos),]

modelo <- lm(log(hasta) ~ poly(prop, 3), data = tmp)

muestra <- exp(predict(modelo, data.frame(prop = runif(10000))))
hist(muestra, breaks = 40)
{{< / highlight >}}

que da algo así como

![](/wp-uploads/2020/09/distribucion_renta.png#center)

Comparar los cuantiles de la nueva distribución con los originales es ejercicio que queda propuesto al lector.

**Addenda:** Véase [esta entrada anterior](http://www.datanalytics.com/2020/06/05/de-histograma-a-distribuciones-usando-la-de-burr/).

