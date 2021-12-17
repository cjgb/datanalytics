---
author: Carlos J. Gil Bellosta
date: 2017-02-01 08:13:15+00:00
draft: false
title: 'Infradispersión de conteos: ¿buenos ejemplos?'

url: /2017/02/01/infradispersion-de-conteos-buenos-ejemplos/
categories:
- estadística
tags:
- dispersión
- estadística
- poisson
---

La distribución de Poisson se utiliza de oficio cuando se quiere modelar datos relativos a conteos. Sin embargo, tiene un problema serio: la varianza está fijada a la media: ambas son $latex \lambda$, el parámetro de la distribución.

Muy frecuentemente se observan datos con **sobredispersión**. Si $latex \lambda$ es 1000, el número esperado de eventos está contenido en un intervalo demasiado estrecho,




    qpois(c(0.025, 0.975), 1000)
    #[1]  938 1062




como para ser realista en muchas aplicaciones.

En otras situaciones más raras, se observa el fenómeno contrario, la **infradispersión**. Hay un ejemplo _de libro_ que ocurre cuando se imponen cuotas. Por ejemplo, el número de multas que se ponen en un departamento de policía puede quedarse muy cerca del nivel del _objetivo de productividad_ cuando se impone uno.

El otro día se me ocurrió otro: el número de duchas diarias. Si tiene, p.e., media de 1, la distribución tiene una pinta, de nuevo, poco realista:




    table(rpois(1000, 1))
    #  0   1   2   3   4   5   6   7
    #371 365 184  60  16   1   2   1




No sé si alguien quiere participar su ejemplo de infradispersión favorito. Tiene los comentarios a su entera disposición.
