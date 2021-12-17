---
author: Carlos J. Gil Bellosta
date: 2019-04-16 09:13:23+00:00
draft: false
title: Sobre el error de generalización (porque a veces se  nos olvida)

url: /2019/04/16/sobre-el-error-de-generalizacion-porque-a-veces-se-nos-olvida/
categories:
- ciencia de datos
- estadística
tags:
- ciencia de datos
- error
- validación cruzada
---




Al construir modelos, queremos minimizar







$latex l(\theta) = \int L(y, f_\theta(x)) \, dP(x,y),$







donde $L$ es una determinada función de pérdida (y no, no me refiero exclusivamente a la que tiene un numerilo 2). Pero como de $latex P(x,y)$ solo conocemos una muestra $latex (x_i, y_i)$ (dejadme aprovechar la ocasión para utilizar una de mis palabras favoritas: $latex P(x,y)$ es incognoscible), hacemos uso de la aproximación







$latex \int f(x) \, dP(x) \approx \frac{1}{N} \sum f(x_i)$







para plantear en su lugar la minimización de







$latex l(\theta) \approx \frac{1}{N} \sum L(y_i, f_\theta(x_i)).$







Casi todo lo demás (validación cruzada, etc.), recuérdese, son trucos más o menos ingeniosos para estimar la diferencia







$latex  l(\hat{\theta}) - \frac{1}{N} \sum L(y_i, f_{\hat{\theta}}(x_i)).$



