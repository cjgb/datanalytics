---
author: Carlos J. Gil Bellosta
categories:
- artículos
- estadística
date: 2020-11-25 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:51:17.844468'
related:
- 2024-04-30-falacia-ecologica.md
- 2024-05-02-falacia-ecologica.md
- 2013-09-17-la-paradoja-de-simpson-en-el-6eiiic.md
- 2024-01-09-regresiones_pisa.md
- 2014-09-26-tirar-la-piedra-esconder-la-mano.md
tags:
- artículos
- falacia ecológica
- falacias
title: Sobre los orígenes de la falacia ecológica
url: /2020/11/25/sobre-los-origenes-de-la-falacia-ecologica/
---

Dice la Wikipedia que la primera denuncia de luego conocida como la falacia ecológica hay que buscarlos en _[Ecological Correlations and the Behavior of Individuals](https://academic.oup.com/ije/article/38/2/337/658252)_ de un tal W. S. Robinson. Cuenta, entre otros ejemplos, cómo existía una correlación positiva entre ser inmigrante y ser analfabeto (según el censo de 1930 de EE.UU.), evidenciada por la tabla

![](/wp-uploads/2020/11/robinson_01.png#center)

en tanto que si se examinan los _mismos_ datos por divisiones (ciertas agrupaciones de estados que, se conoce, eran más habituales hace tiempo que ahora), se obtiene una representación de la forma

![](/wp-uploads/2020/11/robinson_02.gif)

de donde se deduciría una falsa correlación negativa entre ambas variables.

Es decir, con datos individuales, pasar de `inmigrante = 0` a `inmigrante = 1` aumenta la probabilidad de analfabetismo. Sin embargo, a nivel agregado (o _ecológico_) bien puede ocurrir que al aumentar la proporción de inmigrantes decrezca la probabilidad de analfabetismo. Obviamente, esto sucede en este caso porque los inmigrantes parecían tener predilección por las zonas más ricas y, por lo tanto, con menores tasas de analfabetismo local.

Obviamente, después de la admonición de Robinson, no hemos vuelto a ver a nadie incurrir en la falacia ecológica. Así que no sé ni para qué escribo al respecto.

![](/wp-uploads/2020/11/escandalo.jpg)

Una nota final: lo anterior se parece pero no es exactamente un caso de nuestra paradoja favorita, la de Simpson. Simpson asomaría su cabeza no necesariamente cuando pareciese decrecer el analfabetismo al crecer la proporción de inmigrantes (como en el caso discutido discutido) sino cuando, en cada región, los inmigrantes tuviesen una tasa de analfabetismo menor que los nativos.