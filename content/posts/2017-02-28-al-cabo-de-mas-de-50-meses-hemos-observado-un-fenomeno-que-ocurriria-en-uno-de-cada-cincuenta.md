---
author: Carlos J. Gil Bellosta
categories:
- números
date: 2017-02-28 08:13:23+00:00
draft: false
lastmod: '2025-04-06T18:51:20.494831'
related:
- 2018-05-28-los-extranos-numeros-de-los-muertos-en-carretera-por-accidente.md
- 2012-01-02-curiosidades-de-la-loteria.md
- 2017-01-18-va-de-si-hay-una-o-dos-lambdas.md
- 2014-08-11-procesos-puntuales-una-primera-aproximacion.md
- 2017-12-04-la-magnitud-de-la-sequia.md
tags:
- números
- poisson
- varianza
- prensa
title: Al cabo de más de 50 meses hemos observado un fenómeno que ocurriría en uno
  de cada cincuenta
url: /2017/02/28/al-cabo-de-mas-de-50-meses-hemos-observado-un-fenomeno-que-ocurriria-en-uno-de-cada-cincuenta/
---

En efecto,

{{< highlight R >}}
mean(rpois(100000, 28 * 60 / 365) >= 10)
#[1] 0.01964
{{< / highlight >}}

Por referencia,

* 28 es el número de días de febrero
* 60 viene de [aquí](http://www.ine.es/ss/Satellite?L=es_ES&c=INESeccion_C&cid=1259926144037&p=1254735110672&pagename=ProductosYServicios%2FPYSLayout)
* 10 viene de [aquí](http://www.elmundo.es/cronica/2017/02/26/58b147d0468aebf1788b465c.html)