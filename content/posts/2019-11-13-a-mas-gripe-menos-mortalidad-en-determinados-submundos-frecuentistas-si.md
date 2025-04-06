---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2019-11-13 09:13:51+00:00
draft: false
lastmod: '2025-04-06T19:11:14.399445'
related:
- 2018-02-13-de-sesgo-varianza-y-gilipollas-esta-vez-con-la-gripe-como-excusa.md
- 2018-02-22-mas-sobre-sesgo-varianza-y-gripe-estimaciones-a-ojimetro.md
- 2020-03-19-casos-de-coronavirus-en-madrid-provincia-un-modelo-muy-crudo-basado-en-la-mortalidad.md
- 2020-09-14-recordatorio-no-olvideis-restar-los-fallecimientos-atribuibles-al-calor-en-la-estimacion-del-efecto-de-la-segunda-ola.md
- 2022-03-03-error-sesgo-modelos-lineales.md
tags:
- error
- estadística bayesiana
- gripe
title: A más gripe, ¿menos mortalidad? En determinados submundos frecuentistas, sí
url: /2019/11/13/a-mas-gripe-menos-mortalidad-en-determinados-submundos-frecuentistas-si/
---

Estos días he tenido que adaptar y ejecutar con datos españoles una serie de modelos para medir la virulencia de diversos subtipos de gripe. Y todo bien, salvo que para uno de ellos y determinados grupos de edad... a mayor prevalencia, menor mortalidad. ¡Estupendo!

Todo sucede porque un coeficiente que debería haber sido necesariamente positivo fue estimado como negativo (además, _significativamente_).

Y el coeficiente tenía el signo cambiado (¡error de tipo S!) debido a una serie de problemas sobradamente conocidos:

* Alta correlación entre los _proxies_ de prevalencia de gripe y otras _causas_ de mortalidad, como el frío.
* Alta correlación entre los _proxies_ de prevalencia de distintos subtipos de gripe.
* Una ratio señal/ruido no particularmente favorable.

Todo lo cual pide a gritos un modelo más informativo. Que, como poco, fuerce la restricción >0 en aquellos coeficientes que no puedan ser de otra manera.