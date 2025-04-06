---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2015-07-10 08:13:05+00:00
draft: false
lastmod: '2025-04-06T18:56:04.399435'
related:
- 2017-10-24-tres-de-seis-consejos-para-mejorar-las-regresiones.md
- 2017-06-29-hoy-como-excepcion-gritare-y-justificare-malditos-logaritmos.md
- 2014-08-13-mis-procesos-puntuales-con-glm.md
- 2024-02-01-optimizacion-generalizacion.md
- 2015-08-03-ajuste-de-probabilidades-en-regresiones-logisticas-bajo-sobremuestreo-y-otros.md
tags:
- estadística
- probit
title: Calcular una regresión a mano o con un programa puede ser más preciso
url: /2015/07/10/calcular-una-regresion-a-mano-o-con-un-programa-puede-ser-mas-preciso/
---

Leer sobre la [historia de los `glm`](http://blog.revolutionanalytics.com/2014/05/quick-history-glm.html) me llevó a preguntarme sobre el modelo `probit`, que es —aunque con estas cosas hay que tener cuidado— cuarenta años anterior. Y tirando de ese hilo di con [esto](http://userwww.sfsu.edu/efc/classes/biol710/probit/ProbitAnalysis.pdf), donde se proponen tres métodos para ajustar estos modelos.

El tercer paso del primero es

[![fit_by_hand](/wp-uploads/2015/07/fit_by_hand.png#center)
](/wp-uploads/2015/07/fit_by_hand.png#center)

y sí, sugiere ajustar _a ojo_, aunque advierte que hacerlo a mano (algebraicamente) o con la ayuda de un ordenador puede ser más preciso además de proporcionar intervalos de confianza.

Sinceramente, pienso que hacer ese ejercicio al menos una vez en la vida _a ojo_ tiene su valor: desnegricajifica automatismos.