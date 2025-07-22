---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- estadística
date: 2019-04-16 09:13:23+00:00
draft: false
lastmod: '2025-04-06T19:08:06.461634'
related:
- 2024-02-01-optimizacion-generalizacion.md
- 2016-06-22-gbm-ii-minizacion-de-funciones-perdidas-cuadraticas-residuos-y-gradientes.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2022-12-22-correlacion-y-y-hat.md
- 2020-09-22-una-diferencia-teorica-importante-entre-los-lm-y-el-resto-de-los-glm.md
tags:
- ciencia de datos
- errores
- validación cruzada
title: Sobre el error de generalización (porque a veces se  nos olvida)
url: /2019/04/16/sobre-el-error-de-generalizacion-porque-a-veces-se-nos-olvida/
---

Al construir modelos, queremos minimizar

$$ l(\theta) = \int L(y, f_\theta(x))  dP(x,y),$$

donde $L$ es una determinada función de pérdida (y no, no me refiero exclusivamente a la que tiene un numerillo 2). Pero como de $latex P(x,y)$ solo conocemos una muestra $latex (x_i, y_i)$ (dejadme aprovechar la ocasión para utilizar una de mis palabras favoritas: $latex P(x,y)$ es incognoscible), hacemos uso de la aproximación

$$ \int f(x) dP(x) \approx \frac{1}{N} \sum f(x_i)$$

para plantear en su lugar la minimización de

$$ l(\theta) \approx \frac{1}{N} \sum L(y_i, f_\theta(x_i)).$$

Casi todo lo demás (validación cruzada, etc.), recuérdese, son trucos más o menos ingeniosos para estimar la diferencia

$$  l(\hat{\theta}) - \frac{1}{N} \sum L(y_i, f_{\hat{\theta}}(x_i)).$$