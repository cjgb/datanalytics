---
author: Carlos J. Gil Bellosta
categories:
- consultoría
- estadística
date: 2012-04-12 07:28:55+00:00
draft: false
lastmod: '2025-04-06T19:10:31.870246'
related:
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
- 2012-04-09-3564.md
- 2018-11-14-modelos-y-sesgos-discriminatorios-unas-preguntas.md
- 2012-07-30-la-media-y-el-riesgo-de-nuevo.md
- 2019-04-09-gestion-del-riesgo-una-perifrasis-con-hitos-aprovechables.md
tags:
- consultoría
- econometría
- estadística
- sesgo
title: Cuando falta la variable más importante (II)
url: /2012/04/12/cuando-falta-la-variable-mas-importante-ii/
---

No sé si esto que voy a contar me obliga a tragarme mis propias palabras. Porque siempre he pensado que era poco menos que imposible. Pero hace unos pocos días [escribí sobre el asunto](https://datanalytics.com/2012/04/09/3564/) y hoy traigo otro similar a colación.

La variable más importante a la hora de construir un modelo es, precisamente, la que se quiere predecir. Casi todos los textos asumen que se conoce sin ningún género de dudas en, al menos, una determinada muestra que, además, corresponde más o menos a la población subyacente: si el paciente sobrevive o no; si la hipoteca entra en mora o no; si el cliente responde a la oferta o no, etc.

Pero hay muchos problemas famosos y relativamente urgentes en los que la situación es distinta. En la entrada a la que hago referencia más arriba,solo se conocía el valor que predecir para un conjunto de casos, los positivos. Pero era desconocido para la gran masa.

El problema aparece también en el riesgo de crédito: el bancosolo tiene información sobre la situación crediticia de aquellos clientes que no fueron rechazados previamente. Pero es necesario crear un mecanismo de medición del riesgo para todos los clientes. Y _todos_ es una población distinta de _aceptados_. ¡Y qué peligrosas son las extrapolaciones!

En otro contexto en el que aparece es en el de la determinación de lo que llaman _share of wallet_, el porcentaje de, por ejemplo, la cesta de la compra que realiza un consumidor en una determinada cadena de supermercados (desconociéndose las compras que realiza en los de la competencia) o la cantidad de transacciones financieras que realiza en una determinada entidad (cuando existe la posibilidad de que tenga también cuentas activas en otras).

Ahora me encuentro con la [corrección de Heckman](http://en.wikipedia.org/wiki/Heckman_correction), que le valió al susodicho el premio Nobel de economía. Traduzco de la Wikipedia:

>Supóngase que un investigador quiere estimar cuáles son los determinantes de las ofertas de salarios perosolo tiene acceso a los salarios de aquellos que trabajan. Dado que quienes trabajan forman una muestra no aleatoria de la población, estudiar estos determinantes sobre este subconjunto introduciría un sesgo.

Información adicional sobre esta corrección puede encontrarse [en este enlace](http://www.eco.uc3m.es/~ricmora/miccua/materials/S16T33_Spanish.pdf ).

**Nota:** El modelo puede implementarse en R usando el [paquete sampleSelection](http://bibs.snu.ac.kr/R/web/packages/sampleSelection/vignettes/selection.pdf)