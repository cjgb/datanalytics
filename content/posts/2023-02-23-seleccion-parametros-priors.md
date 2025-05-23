---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2023-02-23
lastmod: '2025-04-06T18:50:34.938273'
related:
- 2016-07-06-glms-con-prioris-casi-a-voluntad.md
- 2015-04-27-intervalos-de-credibilidad-para-la-distribucion-beta.md
- 2015-05-05-intervalos-de-credibilidad-para-la-beta-una-alternativa.md
- 2014-08-13-mis-procesos-puntuales-con-glm.md
- 2018-05-24-prioris-informativas-un-ejemplo.md
tags:
- estadística bayesiana
- estadística
- priori
- prioris informativas
title: Una "app" para la selección de parámetros de prioris informativas
url: /2023/02/23/seleccion-parametros-prioris-informativas/
---

Un ejemplo de caso de uso: uno de los parámetros de tu modelo está relacionado con la duración de algo. El cliente, que tiene 20 años de experiencia en la cosa te dice: el tiempo está típicamente comprendido entre uno y siete días. Por lo tanto, decides introducir en tu modelo una priori informativa gamma que con una alta probabilidad asigne valores en el intervalo $[1, 7]$. Pero, ¿cuáles son sus parámetros?

Puedes hacer la cuenta a mano, pero también puedes usar
[esta herramienta](http://priors.datanalytics.com/)
autoexplicativa.

Y sí, una gamma con cuantiles al 5% y 95% en 1 y 7 respectivamente tiene parámetros 3.26 y 0.95.

(Para notificar errores, sugerencias de mejora, etc., escríbaseme.)