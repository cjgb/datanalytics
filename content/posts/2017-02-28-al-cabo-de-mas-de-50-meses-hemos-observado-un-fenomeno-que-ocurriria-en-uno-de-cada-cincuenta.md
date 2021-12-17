---
author: Carlos J. Gil Bellosta
date: 2017-02-28 08:13:23+00:00
draft: false
title: Al cabo de más de 50 meses hemos observado un fenómeno que ocurriría en uno
  de cada cincuenta

url: /2017/02/28/al-cabo-de-mas-de-50-meses-hemos-observado-un-fenomeno-que-ocurriria-en-uno-de-cada-cincuenta/
categories:
- números
tags:
- números
- poisson
---

En efecto,




    mean(rpois(100000, 28 * 60 / 365) >= 10)
    #[1] 0.01964




Por referencia,



	  * 28 es el número de días de febrero
	  * 60 viene de [aquí](http://www.ine.es/ss/Satellite?L=es_ES&c=INESeccion_C&cid=1259926144037&p=1254735110672&pagename=ProductosYServicios%2FPYSLayout)
	  * 10 viene de [aquí](http://www.elmundo.es/cronica/2017/02/26/58b147d0468aebf1788b465c.html)






