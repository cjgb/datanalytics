---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2014-01-10 08:05:09+00:00
draft: false
lastmod: '2025-04-06T19:01:31.479399'
related:
- 2016-08-30-terremotos-consecuencias-y-lecciones.md
- 2017-11-20-la-funcion-de-perdida-es-una-api-entre-los-stakeholders-de-un-analisis-estadistico.md
- 2011-03-11-riesgo-e-incertidumbre.md
- 2024-10-31-efectividad-alertas.md
- 2020-03-25-cuantificacion-y-riesgo.md
tags:
- error
- estadística
- predicción
- teoría de la decisión
title: Error de tipo I, error de tipo II
url: /2014/01/10/error-de-tipo-i-error-de-tipo-ii/
---

Aquí está la noticia sobre el resultado de un error de tipo I: [_Danone takes legal action over milk scare_](http://www.ft.com/cms/s/0/9dc84772-78b4-11e3-831c-00144feabdc0.html).

Este otro, sobre un error de tipo II: [_Wave a banknote at a pundit and he'll predict anything_](http://www.theguardian.com/commentisfree/2012/oct/25/italy-earthquake-laquila-banknote-predict).

Siempre me ha llamado la atención el segundo caso: ¿tienen realmente responsabilidades penales los geólogos? He leído algunos artículos al respecto y nunca he visto el caso planteado de la manera en que voy a hacerlo aquí.

La [decisión](http://en.wikipedia.org/wiki/Decision_theory) de evacuar o no evacuar a la población ante un posible riesgo sísmico se construye combinando dos elementos distintos y mutuamente independientes:

* Una distribución de probabilidades sobre la escala del futuro terremoto, que es un problema más o menos complejo, que compete a los sismólogos.
* La construcción de una [función de pérdida](http://en.wikipedia.org/wiki/Loss_function) que contemple los costes de la catástrofe, de producirse, con los de una evacuación masiva. Esta función de pérdida implica, de manera más o menos explícita, poner un precio en euros a las vidas. Por eso, su construcción debería ser un tema político, abierto a debate.

Me temo que en el caso del terremoto de Italia se produjo una incomprensible confusión entre esos dos elementos.