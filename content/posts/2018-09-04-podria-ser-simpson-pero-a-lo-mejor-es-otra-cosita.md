---
author: Carlos J. Gil Bellosta
date: 2018-09-04 08:13:49+00:00
draft: false
title: Podría ser Simpson, pero a lo mejor es "otra cosita"

url: /2018/09/04/podria-ser-simpson-pero-a-lo-mejor-es-otra-cosita/
categories:
- artículos
tags:
- artículos
- glm
- paradoja de simpson
---

Observo en [_The deadly effects of losing health insurance_](https://ep00.epimg.net/descargables/2018/04/13/617bc3f9263d9a0dbcf3704f8d75a095.pdf) cómo el efecto de interés, 15% sobre una población se convierte en efectos del 16%, 23% y 30% en sus tres subpoblaciones (útimas columnas de la tabla que ocupa la página 25). Es raro que el efecto combinado no esté cerca de la media ponderada (por población) de cada uno de sus subcomponentes.

Podría ser [Simpson](https://www.datanalytics.com/tag/paradoja-de-simpson/), pero hay motivos para pensar que hayan cambiado las proporciones de las poblaciones subyacentes (demasiado). Habría un _efecto Simpson_, por ejemplo, si se hubiese incrementado sustancialmente la proporción del grupo con el efecto (no confundir con la variación del efecto) globalmente más pequeño antes y después del tratamiento. Pero dudo que sea el caso.

Otro motivo que podría explicar esa incoherencia bien podría ser metodológico. El artículo plantea un método muy mejorable (¿modelar tasas usando OLS? ¿en serio?). No sé por qué no usa un GLM de Poisson, que para eso está. Tampoco sé por qué no usa pesos para ponderar los tamaños de las poblaciones de tratamiento y control, muy desiguales. No sé si ajusta un único modelo con todas las variables (subgrupos) o construye modelos por separado (¡ufffffff!). Yo qué sé qué han hecho, pero me da la impresión de que la incoherencia que señalo es subproducto de una aproximación metodológica muy perfectible, por decirlo de alguna manera.

**Coda:** podría también hablar del uso de proxies en la `y`,...