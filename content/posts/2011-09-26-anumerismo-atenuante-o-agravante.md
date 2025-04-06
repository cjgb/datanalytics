---
author: Carlos J. Gil Bellosta
categories:
- números
date: 2011-09-26 07:09:05+00:00
draft: false
lastmod: '2025-04-06T19:12:51.744527'
related:
- 2012-10-04-ley-de-transparencia-y-anonimidad-en-ficheros-de-microdatos-ii.md
- 2013-08-14-tres-grandes-numeros-con-enmienda.md
- 2011-04-01-a-esa-gente-le-habia-hecho-falta-un-matematico.md
- 2017-05-18-me-siento-mal-porque-han-sido-muy-majos-conmigo-y-ahora-no-se-que-hacer-con-lo-que-me-han-mandado.md
- 2010-05-20-numeros-estadisticamente-transcendentes.md
tags:
- números
- anumerismo
title: 'Anumerismo: ¿atenuante o agravante?'
url: /2011/09/26/anumerismo-atenuante-o-agravante/
---

Me pasaron hace unos días una sentencia de la Agencia de Protección de Datos acerca de un caso (y tienen [muchos y variopintos](https://www.aepd.es/es/informes-y-resoluciones/resoluciones)) concerniente a alguien que protestó porque cierta entidad bancaria de la que no era cliente había accedido a su informe crediticio sin su autorización.

Aparentemente, desde dicha entidad habían leído su informe en cuatro ocasiones en cuatro fechas distintas. Y eso, al parecer, no es legal y está penado con multas como la de 40 001 euros que le impusieron a la entidad.

Lo escandaloso son las alegaciones de los abogados de la entidad:

>[...] pudiera derivarse de la existencia de un cambio o alteración, en la trascripción de los dígitos relativos al NIF que efectivamente quería consultar la entidad, en la medida en que las consultas a los ficheros de solvencia se hacen introduciendo el NIF de la persona que se quiere consultar y no su nombre y apellidos. Una simple alteración en el orden de los dígitos, o el simple cambio de un número por otro podría haber originado este hecho, situación que ha sido convenientemente revisada por (la entidad), sin que la misma haya encontrado otra posible justificación.

Olé.

El [NIF](http://es.wikipedia.org/wiki/N%C3%BAmero_de_identificaci%C3%B3n_fiscal) en España es un número de ocho cifras al que sigue una letra. La letra es una codificación del [resto de la división módulo 23 del número precedente](https://es.wikibooks.org/wiki/Algoritmia/Algoritmo_para_obtener_la_letra_del_NIF). Está por tanto diseñado para evitar errores por alteración en el orden de los dígitos, o el simple cambio de un número por otro_. Al menos, 22 de cada 23 errores.

Cometer un error tan improbable 4 veces seguidas, tantas como accesos al fichero, sería... ejem, bastante improbable.

Supongo que algo tenían que alegar los abogados. Lo triste es que si hubiesen dicho _no fuimos nosotros porque todos estábamos ese día matando niños_ se habría montado un escándalo. Pero si hacen constar su anumerismo (y por extensión el de la entidad a la que muchos clientes confían sus ahorros convencidos de su capacidad para sumar, restar, multiplicar y dividir correctamente), no.

Qué falta de vergüenza, ¡jo!