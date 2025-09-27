---
-tags:
- econometría
- sas
- nelson-siegel
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2025-07-23
description: Una breve introducción al modelo de Nelson-Siegel y su remota "inspiración
  bayesiana"
lastmod: '2025-09-16T22:17:51.041020'
related:
- 2024-12-05-beta-binomial-deriva.md
- 2024-10-17-interpretacion-modelos.md
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2025-07-16-post-bayesianismo.md
- 2024-03-05-sobreajuste-modelos-bayesianos.md
title: Nostalgia de Nelson-Siegel
url: /2025/07/23/modelo-nelson-siegel/
---

La noticia del artículo [_Beyond Nelson-Siegel and splines: A model-agnostic Machine Learning framework for discount curve calibration, interpolation and extrapolation_](https://www.researchgate.net/publication/392507059_Beyond_Nelson-Siegel_and_splines_A_model-_agnostic_Machine_Learning_framework_for_discount_curve_calibration_interpolation_and_extrapolation), me ha hecho volver a pensar un poco en aquel viejo modelo, al que le guardo cierta simpatía por dos motivos. El primero y más personal, que me hizo ganar un poco de dinero tiempo atrás: implementé hace muchos años una serie de _scripts_ en SAS para ajustarlo. El cliente final, si recuerdo bien, era el Banco de España.

El segundo es que siempre me ha parecido un modelo muy instructivo. Se ajusta por mínimos cuadrados, etc., _como no puede ser de otra manera_ tratándose de un modelo _econométrico_ de mediana edad. Pero tiene un alma bayesiana: preestablece que la curva de los tipos de interés (que es para lo que se usa el modelo en cuestión) tiene, a priori, una forma muy definida. Se trata de la combinación lineal de tres _patrones básicos_ ---aunque siempre que alguien propone un modelo con tres, llega otro que propone una extensión con un término más para inmortalizarse en una nota a pie de página de la Wikipedia---: un nivel plano, un término creciente que satura en el infinito y una chepa.

Muy instructivo.

**Coda:** Concedido, no es propiamente _bayesiano_ sino, más bien, un modelo que restringe la búsqueda de la función de ajuste a una clase muy concreta de funciones. Pero esta clase no es la de _todas las funciones continuas_ o la de _las funciones con siete derivadas continuas_, sino la de las que tienen una forma muy concreta y dentro de las que se espera encontrar una que funcione bien. Es decir, que el usuario del modelo ha preestablecido fuertemente la forma de la solución, tal vez mucho más que cuando un bayesiano considera usar una lognormal como priori de una varianza.