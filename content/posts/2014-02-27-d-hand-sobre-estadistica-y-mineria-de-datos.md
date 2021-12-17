---
author: Carlos J. Gil Bellosta
date: 2014-02-27 07:20:02+00:00
draft: false
title: D. Hand sobre estadística y minería de datos

url: /2014/02/27/d-hand-sobre-estadistica-y-mineria-de-datos/
categories:
- estadística
tags:
- estadística
- inferencia
- ciencia de datos
---

Voy a comentar y recomendar hoy un artículo, _[Statistics and data mining: intersecting disciplines](http://dl.acm.org/citation.cfm?id=846171)_ (lo siento, he perdido el enlace para su libre descarga), del siempre recomendable David Hand. Trata de un asunto que para muchos de los que seáis estadísticos y trabajéis en el asunto rodeados de gente procedente de otras disciplinas —¡ay, esos ingenieros!—, seguro, os produce dolores de cabeza: esa brecha que separa los mundos de la estadística y de la llamada minería de datos (y de otras maneras más recientemente).

Aunque el artículo en cuestión contiene un llamamiento a extender el currículo de la estadística para incluir otros contenidos que demanda el siglo actual, lo más interesante del mismo es, precisamente, la discusión sobre las diferencias entre la estadística y la minería de datos. La primera es que la estadística es una disciplina **regida por la cautela**: trata a toda costa de evitar el error de tipo I, rehuye todo aquello que no se apoya en un incuestionable teorema, etc. ¡Pesa demasiado su presunta raíz matemática!

Una segunda diferencia es el énfasis que la estadística hace en **la inferencia**. De alguna manera, ése es su ámbito natural: poder hacer generalizaciones razonables de la observación de una muestra. Pero, ¿qué ocurre cuando la muestra es la población completa? ¿Qué significado tienen entonces los p-valores o cómo se entiende la varianza de un estimador? Menciona Hand cómo esos conceptos podrían ser sustituidos por un indicador (_score_) que midiera la adecuación del modelo, entendido como una descripción de los datos, a estos últimos. ¡Pero se echa en falta un ejemplo!

El tercero tiene que ver con la dicotomía entre **modelos que explican y modelos que predicen**. Los estadísticos suelen estar más interesados en los primeros pero, argumenta Hand, ¿qué hay de malo en esas cajas negras que _adivinan_ el futuro (cuando lo hacen)? La estadística, además, tiende a agotarse en el modelo y da poca importancia al **algoritmo**. Pero, ¿qué sería de esos físicos o ingenieros devenidos científicos de datos sin su Python o su Scala?

Finalmente, los estadísticos tienden a estar más preocupados por la **estructura global** de los datos. Pero en la minería de datos son importantes —y pueden ser valiosos para sus clientes— los comportamientos anormales, esos _outliers_ que eliminamos tan alegremente.

En definitiva, la minería de datos exige conocimientos que van más allá de los contenidos en los currículos estadísticos clásicos y hasta que no exista un consenso claro acerca de la conveniencia —porque, ¿conviene? ¿o estamos satisfechos?— de renovarlo y una decidida acción al respecto, resultará difícil para los estadísticos aportar su visión de los hechos en una disciplina que realmente la necesita. Quedarán al margen de ella y ejercerán, a lo más, de observadores pasivos.
