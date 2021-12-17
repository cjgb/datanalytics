---
author: Carlos J. Gil Bellosta
date: 2011-04-01 07:31:39+00:00
draft: false
title: A esa gente le había hecho falta un matemático

url: /2011/04/01/a-esa-gente-le-habia-hecho-falta-un-matematico/
categories:
- consultoría
- números
tags:
- consultoría
- números
- programación
---

A esa gente le había hecho falta, en efecto, un matemático. Les hubiera bastado saber mi número de teléfono y no habrían cometido tamaña tontería y habrían tenido a sus accionistas más satisfechos. Explicaré el asunto. Será muy instructivo para quienes opinan que no valemos para gran cosa.

Hace mucho, mucho tiempo, tanto que las neuronas que se acuerdan de eso están llenas de polvo, en un país muy, muy lejos de éste, trabajé en un proyecto cuya naturaleza no viene al caso. Sí que lo hace el que habían codificado el campo identificador de los contratos en su base de datos con un `CHAR(26)`. Sí, efectivamente, usaban veintiséis caracteres para identificar un único contrato.

La verdad sea dicha, precavidos eran: si damos por buenos [estos números](http://wiki.answers.com/Q/How_many_atoms_are_there_on_earth), podrían tener como clientes a todos los átomos de la tierra antes de sufrir una especie de efecto 2000 o IPv4: $latex 2^{8 \times 26}$ asciende a la fabulosa cifra de 4,1138e+62.

Me entretuve en contar en cuántas tablas de la base de datos se utilizaba dicho campo y cuántas veces aparecía en cada una de ellas. La suma total fue, aproximadamente, 57.462.445.986 veces. Para aquellos de mis lectores con aversión a contar cifras, 57.000 millones de veces.

Y, multiplicando por 26 bytes, que es lo que ocupa el campo, se obtiene la nada desdeñable cifra de casi 1400 GB, más de un TB.

Con ocho bytes, la tercera parte, sería posible identificar 2.000 millones de contratos para cada una de las 8.000 millones de personas de la tierra. Ocho bytes es, de hecho, lo que ocuparán las IPs bajo el estándar IPv6, que se estima suficientísimo para hacer funcionar el internet del futuro.

Si me hubieran llamado en su día les habría propuesto utilizar cinco bytes, con lo que habrían tenido hueco para conceder casi 30.000 contratos a cada uno de los habitantes de aquel anumérico país en el que en esa época me encontraba.
