---
author: Carlos J. Gil Bellosta
categories:
- varios
date: 2012-06-29 06:23:58+00:00
draft: false
lastmod: '2025-04-06T19:10:06.533734'
related:
- 2017-09-29-bus-al-norte-bus-al-sur.md
- 2019-02-05-taxis-y-su-huelga-y-trafico-en-madrid.md
- 2012-04-25-espana-c2bfradial-i.md
- 2016-04-29-como-ir-de-regumiel-de-la-sierra-a-montejo-de-la-vega-de-la-serrezuela.md
- 2014-11-21-mi-querido-colega-de-iberia.md
tags:
- off-topic
title: 'Idea peregrina: el taxiván'
url: /2012/06/29/idea-peregrina-el-taxivan/
---

Hoy no toca hablar ni de estadística, ni de R, ni de ninguno de los temas que suelo tratar sino de una idea aleatoria que se me ha ocurrido en el metro: el taxiván.

Un taxiván es un medio de transporte híbrido, a medio camino entre el taxi y los microbuses. Está especialmente indicado para dar servicio a puntos de afluencia importante de viajeros en ciudades medianas. Por ejemplo, en las estaciones de autobús o ferrocarril, los grandes centros comerciales, etc.

[![](/wp-uploads/2012/06/tsp.png#center)
](/wp-uploads/2012/06/tsp.png#center)

Funciona así:

* Los viajeros compran un billete (a precio de autobús) y mediante algún tipo de mecanismo indican el lugar al que desean ir.
* Entran al taxiván.
* Un sistema informático alimenta el GPS del taxiván con la ruta _óptima_ (¡un problema [NP-completo](http://es.wikipedia.org/wiki/NP-completo) similar a [este](http://es.wikipedia.org/wiki/Problema_del_vendedor_viajero)) que deja a cada viajero a no más de 100 metros de su destino.

Un sistema más complejo tendría paradas en el término municipal en el que los usuarios podrían indicar el destino al que se dirigen. Los taxivanes en movimiento tendrían la opción de desviar su ruta —siempre que el desvío no fuese excesivo— para recoger a estos viajeros.