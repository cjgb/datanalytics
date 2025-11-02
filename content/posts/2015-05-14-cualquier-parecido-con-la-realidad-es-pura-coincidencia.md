---
author: Carlos J. Gil Bellosta
categories:
- estadística
- números
date: 2015-05-14 08:13:21+00:00
draft: false
lastmod: '2025-04-06T18:49:26.359242'
related:
- 2018-03-22-poblacion-el-padron-y-la-otra-cosa.md
- 2012-11-28-coma-cero-dos-por-ciento-anda-ya.md
- 2011-10-10-las-proyecciones-de-la-poblacion-de-espana-a-corto-plazo-del-ine-no-valen-para-un-carajo.md
- 2014-08-12-tienen-sentido-las-tasas-municipales-de-desempleo.md
- 2012-12-04-mas-sobre-variaciones-insignificantes-en-estadisticas-publicas.md
tags:
- epa
- periodismo de datos
title: Cualquier parecido con la realidad es pura coincidencia
url: /2015/05/14/cualquier-parecido-con-la-realidad-es-pura-coincidencia/
---

[@adolflow](https://twitter.com/adolflow) (en persona) viene hoy y me dice si lo he visto. ¿Qué cosa? Se refiere a lo que han publicado en El Español, [España en Cifras](http://espanaencifras.elespanol.com/). Lo miro por encima y encuentro

[![tasa_paro_municipal](/img/2015/05/tasa_paro_municipal.png#center)
](/img/2015/05/tasa_paro_municipal.png#center)

¡Tasa de paro municipal! Lo siento, @adolflow, pero tal cosa no existe. No, no es que los datos sean secretos, no sean transparentes, no sean reutilizables. Es, simplemente, que no existe.

¿Peros?

No, no hay peros. Fijáte: hay 8000 municipios y la EPA se basa en una encuesta de unos 60000 hogares. ¡Echa cuentas!

Pero como todos odiamos tratar de justificar que lo que tenemos delante de las narices no es real, he recibido al cabo un correo con el enlace a la _nota metodológica_:

>La Encuesta de Población Activa que elabora el INE publica los datos de paro y tasa de paro, entre otros, a nivel nacional, autonómico y provincial pero no a nivel municipal. Por esta razón se ha procedido a calcular una tasa de paro estimada con datos oficiales. Para la obtención de la misma se ha dividido la cifra total de demandantes de empleo del Servicio Público de Empleo Estatal de cada municipio entre la población activa (16 a 64 años) extraída del INE. El resultado de esta fórmula se ha multiplicado por 100 para obtener de esta manera una tasa. Para marzo de 2015 se han utilizado los datos de población del año 2014, al no estar disponibles todavía los definitivos de 2015 a nivel municipal.

¡No, no, no, no y `1e18` veces no! Lo siento pero **no**. El numerador está mal, el denominador está mal. Ambos están mal. Todo está mal.

El numerador es la cifra de demandantes de empleo. ¡Nada que ver con la cifra de desempleados! Ser desempleado es un hecho económico que no tiene que ver con papeles, Seguridad Social y demás. Es que alguien haga algo y reciba una remuneración por ello. Fin. Los demandantes de empleo son los que tienen un papelito en el que dice que demandan empleo. Lo siento pero voy a ser, por una vez, burdo: ni todos los que follan son casados ni todos los casados follan.

De hecho, las discrepancias globales entre unas y otras cifras (EPA vs SEPE) son [del orden del millón](http://www.elmundo.es/elmundo/2012/05/03/economia/1336064669.html) (de personas).

¡Y el denominador! Lo del denominador es de traca. De nuevo, _población activa_ es un concepto EPA. Y la EPA, reitero, no tiene granularidad municipal. ¿Cuál ha sido la _estimación_ de la población activa? Salvo que me haya engañado la ambigüedad de la redacción han usado ¡la población entre los 16 y los 64 años de cada municipio! Requeteno.

En resumen, han infraestimado la población de parados, han sobreestimado el denominador y cualquier parecido con la realidad es pura coincidencia. Además, para más inri, me han puesto de mal café.