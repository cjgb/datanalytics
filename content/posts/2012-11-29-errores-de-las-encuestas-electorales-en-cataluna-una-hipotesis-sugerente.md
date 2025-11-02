---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2012-11-29 07:53:47+00:00
draft: false
lastmod: '2025-04-06T19:00:12.342317'
related:
- 2016-06-29-por-una-vez-accedo-a-hablar-de-algo-de-lo-que-no-se.md
- 2013-02-11-voy-a-partir-una-lanza-a-favor-de-rosell-a-cuenta-de-la-epa.md
- 2013-07-22-una-macro-para-generar-titulares-sobre-resultados-de-encuestas.md
- 2012-10-08-las-cosquillas-de-los-sondeos-electorales.md
- 2022-03-15-infraestimacion-error-encuestas.md
tags:
- encuestas
- estadística pública
title: 'Errores de las encuestas electorales en Cataluña: una hipótesis sugerente'
url: /2012/11/29/errores-de-las-encuestas-electorales-en-cataluna-una-hipotesis-sugerente/
---

Pedro Concejero sugirió ayer en la reunión del grupo de usuarios de R de Madrid una hipótesis muy sugerente para explicar parte del error cometido por las encuestas electorales publicadas en Cataluña. Voy a elaborarla en esta entrada pero subrayando antes de todo que desconozco el detalle del funcionamiento de recogida de datos y que lo que voy a contar aquí no pasa de ser una hipótesis que correspondería a otros tratar de verificar.

Una de las encuestas más criticadas ha sido la contenida en el [Barómetro de Opinión Política](http://estaticos.elperiodico.com/resources/pdf/3/2/1352371173423.pdf) del Centre d'Estudis d'Opinió (el CIS catalán, vamos). En su nota metodológica se lee cómo el método de recogida de información es una _encuesta telefónica asistida por ordenador ([método CATI](http://en.wikipedia.org/wiki/Computer-assisted_telephone_interviewing))_. Y sospecho que los más del resto harán lo mismo.

Ergo los encuestados forman parte del subgrupo de la población que dispone de teléfono. Y, casi seguro, de teléfono _fijo_. Esto ha sido siempre un problema. Pero que se ha visto agravado recientemente por el proceso (aún incipiente) de [sustitución de la telefonía fija por la móvil](http://blogcmt.com/2012/02/10/el-acceso-telefonico-movil-no-sustituye-al-fijo-aun/); la _opción de los hogares jóvenes que se incorporan al mercado optando por la telefonía móvil, sin ni siquiera pasar por la telefonía fija_ (cita del mismo enlace); y, sobre todo, el desigual perfil de edad y socioeconómico (y, por ende, político) de los hogares que no disponen de telefonía fija (estudiado en la nota ocasional de la Comisión del Mercado de las Telecomunicaciones titulado [Caracterización de los hogares españoles como consumidores de servicios de comunicaciones electrónicas](http://www.cmt.es/c/document_library/get_file?uuid=45578198-7f4c-4d45-80e8-3a5cb341958e&groupId=10138)).

En efecto, un porcentaje nada desdeñable de los hogares españoles son son a finales de 2012 inasequibles a los esfuerzos de los teleoperadores, como pone en evidencia el siguiente gráfico horrible:

[![](/img/2012/11/telefonia_cmt-300x119.png#center)
](/img/2012/11/telefonia_cmt.png#center)

¿Introduciría este fenómeno un sesgo muestral significativo?

Y a modo de colofón y para los que tengan más tiempo, dejo un enlace a un estudio sobre la [_desactualización del marco_](http://www.ine.es/docutrab/eval_epa/evaluacion_epa07.pdf) elaborado por el INE en el contexto de la Encuesta de Población Activa para que podáis ver cuáles son el tipo de (onerosas) acciones correctoras que lleva a cabo dicho instituto para mitigar el efecto de los problemas asociados al CATI.