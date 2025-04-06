---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2017-02-24 08:13:42+00:00
draft: false
lastmod: '2025-04-06T19:11:28.254670'
related:
- 2014-11-21-mi-querido-colega-de-iberia.md
- 2012-05-18-modelos-exponenciales-para-grafos-aleatorios-y-iii-inferencia.md
- 2010-11-08-una-revision-neoliberal-del-principio-de-peter.md
- 2017-07-04-dudas-razonables-que-me-asaltan.md
- 2018-10-05-licitaciones-por-insaculacion-ponderada.md
tags:
- chi cuadrado
- nepotismo
title: ¿Un detector de nepotismo?
url: /2017/02/24/un-detector-de-nepotismo/
---

Un conocido quiere cambiar de vida, dejar la hostelería y formalizarse. Es decir, buscarse un empleo fijo, con horario definido y, a poder ser, cobrando o del Estado o de alguna de sus submanifestaciones administrativas.

Ha estado indagando cómo convertirse en conductor del metro (de Madrid, para más señas) pero lo ha dejado enseguida. Dizque sin enchufe, no hay nada que hacer: allí solo trabajan los hijos, sobrinos, ¿parejas sentimentales?, etc. de. Los demás, lo tienen crudo. Así que busca por otra parte.

Lecturas sobre el capitalismo (¿o sindicalismo?) carpetovetónico aparte, el asunto me ha dado que pensar estos días. La pregunta que  me he hecho es: dada una lista de apellidos (primero y segundo) de los conductores de metro (o, ya puestos, [del Tribunal de Cuentas](http://politica.elpais.com/politica/2014/06/23/actualidad/1403548994_107851.html)) anonimizados o no y una lista correspondiente de frecuencias de apellidos en la población general, ¿qué tipo de prueba estadística podría indicarnos si existe algún tipo de indicio de nepotismo?

Podría pensarse en la prueba de la $latex \chi^2$ pero, ¿tendría la potencia necesaria? ¿Sería viable con tantos ceros?

¿Podría compararse el `table(table(apellidos))` con el equivalente obtenido muestreando la población general? Ahí estaríamos perdiendo la etiqueta: no es lo mismo un pico de Garcías que de Álvarez de Mirandas.

¿Sería posible —en definitiva— crear un detector de _nepotes_, presuntos o no?