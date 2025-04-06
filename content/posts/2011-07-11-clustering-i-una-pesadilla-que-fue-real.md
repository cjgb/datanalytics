---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- estadística
date: 2011-07-11 07:19:32+00:00
draft: false
lastmod: '2025-04-06T19:05:19.916943'
related:
- 2011-08-26-clustering-iv-una-digresion-real-como-la-vida-misma.md
- 2011-07-19-clustering-ii-c2bfes-replicable.md
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
- 2014-11-21-mi-querido-colega-de-iberia.md
- 2011-08-03-clustering-iii-sobresimplificacion.md
tags:
- clústering
- estadística
- ciencia de datos
title: 'Clustering (I): una pesadilla que fue real'
url: /2011/07/11/clustering-i-una-pesadilla-que-fue-real/
---

Comienzo hoy una serie de entradas en seis entregas sobre una muy utilizada técnica de análisis de datos de la que soy un profundo detractor. Reconozco que uno de los motivos, aunque menores, de esta postura estriba en que carece de un nombre castizo y reconocido en español. Aunque por ahí gusta _agrupación_ o _agrupamiento_, yo siempre he preferido _arracimamiento_: aparte de su valor visual, descarga el término _grupo_, manifiestamente sobreutilizado en muchos ámbitos.

Aparte de las estrictamente lingüísticas y eufónicas, tengo otros motivos por los que recelar de este tipo de técnicas que espero ir desgranando en las entradas sucesivas. Pero quiero comenzar con el relato de una pesadilla acaecida hace unos años que resume lo que se cuece en las trastiendas de sus valedores.

[![](/wp-uploads/2011/07/clustering.png#center)
](/wp-uploads/2011/07/clustering.png#center)

Trabajaba yo para una consultora especializada, entre otras cosas, en la llamada _segmentación de clientes_, una práctica de dudosa valía que los departamentos de _marketing_ de determinadas empresas aplican de oficio. Consiste en partir la masa de clientes en determinados grupos (típicamente entre seis y doce) que comparten cierto tipo de características similares.

El quid de la cosa consiste en crear grupos accionables (que es otra manera de decir con interés para la empresa: básicamente, que respondan de una manera más o menos previsible a las acciones de _marketing_ que se realicen sobre ellos), fáciles de describir, homogéneos con respecto a una serie de variables críticas, etc.

La segmentación de clientes no es un puro _clústering_: exige que los _clústers_ obtenidos satisfagan determinados criterios. Por eso es típico seleccionar variables, transformarlas, remuestrear, modificar las condiciones iniciales de los algoritmos, etc. hasta que ---aquí reside la clave--- la segmentación obtenida se acomode a los criterios deseables preestablecidos. ¡No otro es, típicamente, el criterio de bondad!

La pesadilla de la que quiero dar cuenta comenzó un buen día en que mi compañero Julio y yo habíamos acabado nuestra segmentación para una importante empresa española y la habíamos presentado en _petit comité_ con nuestros rutilantes _powerpoints_. La gran presentación habia de realizarse el día siguiente. El número de _clústers_, su tamaño aproximado, el nombre de cada uno de ellos, el blablabá _marketiniano_ de por qué su sin par relevancia, etc. estaban ya cincelados en mármol y eran absolutamente inamovibles... hasta que descubirmos un inexcusable error en el cálculo de una de las variables más relevantes. ¡Oh, calamidad!

De las dos opciones obvias (ambas incompatibles con el nocturno reposo) que se nos ocurrieron, descartamos la, posiblemente, más honesta: reconocer el error, rehacerlo todo y asumir las, previsiblemente, acérrimas consecuencias. Conscientes no obstante de que los algoritmos de _clústering_, dada su dependencia en el muestreo ?no lo hacíamos sobre la población entera de varios millones de clientes sino sobre muestras de varias decenas de miles de ellos? y las condiciones iniciales, son sumamente inestables ?es decir, dos ejecuciones diferentes sobre dos muestras de la misma población pueden dar resultados totalmente distintos? probamos suerte.

Y, _voilá_, a las tantas de la mañana, a fuerza de muestrear e iterar, obtuvimos una segmentación sobre los datos corregidos que nos plugo: encajaba a la perfección con la descrita de antemano con los datos _truchos_.

Puede que alguien pueda realizar alegaciones de índole moral a todo esto que aquí confieso. Y que la discusión al respecto puede ser sumamente enriquecedora. No obstante, anuncio interesan más las de tipo técnico, que iré desarrollando en futuras entregas.