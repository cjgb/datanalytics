---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2020-09-15 09:13:00+00:00
draft: false
lastmod: '2025-04-06T19:06:58.345375'
related:
- 2017-02-01-infradispersion-de-conteos-buenos-ejemplos.md
- 2022-03-24-infradispersion-fraude.md
- 2017-02-23-otro-ejemplo-de-infradispersion-de-conteos.md
- 2019-01-08-modelos-de-conteos-con-sobredispersion-con-stan.md
- 2020-07-22-aun-mas-sobre-la-presunta-sobredispersion-en-modelos-de-poisson.md
tags:
- infradispersión
- regresión logística
- glm
- sobredispersión
title: Infradispersión en la logística
url: /2020/09/15/infradispersion-en-la-logistica/
---

Le he dado muchas vueltas en estos últimos tiempos al asunto de la sobredispersión, particularmente en dos tipos de modelos: Poisson y logístico. Así que, aunque solo sea por proximidad semántica, se me quedan pegados ejemplos y casos de ese fenómeno mucho menos frecuente que es el de la infradispersión.

Un ejemplo ilustrativo del fenómeno que se me ocurrió el otro día era

![](/wp-uploads/2020/09/infradispersion.jpeg)

pero hace nada, ese señor lleno de paz y amor que es Putin, nos ha regalado otro:

![](/wp-uploads/2020/09/infradispersion.png#center)

Hay más detalles [aquí](https://nadaesgratis.es/bagues/estadistica-y-fraude-electoral-lo-que-el-teorema-central-del-limite-nos-revela-acerca-del-regimen-de-putin), donde se discute el asunto, se _prueba_ que los datos no pueden proceder de una binomial, etc.

_[Sobredispersión la hay a cascoporro; la infradispersión es tan rara que si alguien sabe de algún otro caso que valga la pena coleccionar, que avise.]_