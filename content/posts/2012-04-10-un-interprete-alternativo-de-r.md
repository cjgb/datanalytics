---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2012-04-10 06:56:04+00:00
draft: false
lastmod: '2025-04-06T18:58:55.509972'
related:
- 2012-09-27-ejemplos-sobre-como-usar-r-desde-sas-a-traves-de-iml.md
- 2021-07-14-mi-apuesta-para-el-larguisimo-plazo-julia.md
- 2010-07-13-rjython-un-nuevo-paquete-para-llamar-a-python-desde-r.md
- 2011-11-28-r-en-la-ensenanza-unos-comentarios-a-los-comentarios.md
- 2011-05-24-se-buscan-alpha-testers-para-rpython.md
tags:
- java
- r
- sas
- wps
title: Un intérprete alternativo de R
url: /2012/04/10/un-interprete-alternativo-de-r/
---

Java es un lenguaje de programación que puede ejecutarse sobre muchas máquinas virtuales distintas: la de Sun, la de IBM, etc. Algo parecido pasa con SAS, que puede ejecutarse sobre el intérprete de SAS Institute o sobre el de [WPS](http://www.datanalytics.com/2010/08/12/ya-has-considerado-pasarte-a-wps/).

El código escrito en R puede ejecutarse, en principio, en dos plataformas distintas:

* La creada por el _R Development Core Team_ y que todos, más o menos, conocemos.
* La desarrollada por Tibco (y, previamente, por Insightful) para S-Plus, el dialecto propietario de R (o S).

¿Son esas todas las opciones? Sí, por el momento.

Pero hay unos cuantos voluntarios que están desarrollando [renjin](https://code.google.com/p/renjin/), un intérprete alternativo de R basado en la máquina virtual de Java. Para ello, esencialmente, lo que se necesita es traducir (es decir, reescribir) todas las llamadas que hace R a su intérprete actual a [equivalentes en Java](https://code.google.com/p/renjin/wiki/ContributingPrimitives).

¿Qué ventajas ofrecería este nuevo intérprete de R? Varias. Las más importante, a mi parecer, sería que R heredaría automáticamente todas las mejoras de eficiencia que la comunidad de desarrolladores de máquinas virtuales para Java, que tiene muchos más órdenes de magnitud de número de neuronas que la de R.

Por otra parte, parece que sería también posible utilizar métodos de almacenamiento distintos de la memoria del ordenador para guardar objetos de R, con lo que se mitigarían parte de los problemas actualmente asociados a las limitaciones de memoria.

Los expertos en R y Java que tengan tiempo y ganas de aprender pueden (y están invitados a) colaborar en el desarrollo de esta plataforma de la que, seguro, oiremos hablar mucho en el futuro próximo.