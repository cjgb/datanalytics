---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2017-02-01 08:13:15+00:00
draft: false
lastmod: '2025-04-06T19:08:35.761323'
related:
- 2020-09-15-infradispersion-en-la-logistica.md
- 2019-01-08-modelos-de-conteos-con-sobredispersion-con-stan.md
- 2020-07-17-mas-sobre-la-presunta-sobredispersion-en-el-modelo-de-poisson.md
- 2014-08-08-procesos-de-poisson-no-homogeneos-la-historia-de-un-fracaso.md
- 2018-05-28-los-extranos-numeros-de-los-muertos-en-carretera-por-accidente.md
tags:
- dispersión
- estadística
- poisson
- infradispersión
- sobredispersión
title: 'Infradispersión de conteos: ¿buenos ejemplos?'
url: /2017/02/01/infradispersion-de-conteos-buenos-ejemplos/
---

La distribución de Poisson se utiliza de oficio cuando se quiere modelar datos relativos a conteos. Sin embargo, tiene un problema serio: la varianza está fijada a la media: ambas son $latex \lambda$, el parámetro de la distribución.

Muy frecuentemente se observan datos con **sobredispersión**. Si $latex \lambda$ es 1000, el número esperado de eventos está contenido en un intervalo demasiado estrecho,

{{< highlight R >}}
qpois(c(0.025, 0.975), 1000)
#[1]  938 1062
{{< / highlight >}}

como para ser realista en muchas aplicaciones.

En otras situaciones más raras, se observa el fenómeno contrario, la **infradispersión**. Hay un ejemplo _de libro_ que ocurre cuando se imponen cuotas. Por ejemplo, el número de multas que se ponen en un departamento de policía puede quedarse muy cerca del nivel del _objetivo de productividad_ cuando se impone uno.

El otro día se me ocurrió otro: el número de duchas diarias. Si tiene, p.e., media de 1, la distribución tiene una pinta, de nuevo, poco realista:

{{< highlight R >}}
table(rpois(1000, 1))
#  0   1   2   3   4   5   6   7
#371 365 184  60  16   1   2   1
{{< / highlight >}}

No sé si alguien quiere participar su ejemplo de infradispersión favorito. Tiene los comentarios a su entera disposición.

**Addenda:** Véase [esto](http://www.datanalytics.com/tags/infradispersión).