---
author: Carlos J. Gil Bellosta
date: 2015-12-29 08:13:19+00:00
draft: false
title: Empates electorales, sorteos y una inadvertida paradoja

url: /2015/12/29/empates-electorales-sorteos-y-una-inadvertida-paradoja/
categories:
- números
tags:
- elecciones
- sorteos
---

Ayer hubo en España una asamblea en la que 3030 personas votaron sobre un cierto asunto: 1515 votaron que sí y otras tantas, que no. La cosa acabó en empate.

Una estimación (de las muchas que pueden hacerse con hipótesis de partida distintas) de la probabilidad de que tal ocurra es `dbinom(1515, 2*1515, 0.5)`, que viene a ser 1.5%. Expresado de otra manera, solo ocurriría en uno de cada 70 congresos de tales características.

Normalmente, las normas que regulan este tipo de votaciones recogen provisiones para los casos de empate. La ley electoral en España los resuelve con un sorteo. Aunque su redacción pueda conducir a paradojas tan curiosas como la que se dio en el municipio granadino de [Lújar](https://es.wikipedia.org/wiki/L%C3%BAjar) en 2011.

Allí y entonces hubo elecciones municipales. Se repartían siete concejales. Hubo 322 votos válidos repartidos así: 161 para el PP y 161 para el PSOE. En aplicación de la provisión para empates, hubo un sorteo que ganó el PP. Así, el reparto final de escaños fue de 4 para dicho partido y 3 para el PSOE.

Sin embargo, el artículo 163.1d de [la ley relevante](http://www.boe.es/buscar/act.php?id=BOE-A-1985-11672&p=20150331&tn=0) dice que _[S]i hubiera dos candidaturas con igual número total de votos, el primer empate se resolverá por sorteo y los sucesivos de forma alternativa_.

¿A qué reparto hubiese conducido una interpretación literal del artículo? A la hora de asignar el primer concejal, habría habido empate. Al realizar el sorteo, se le habría asignado al PP. Y el segundo concejal, habría recaído en el PSOE.

A la hora de asignar el tercer concejal, habría vuelto a haber empate. Pero esta vez no habría sorteo sino que se aplicaría la alternancia que indica la ley. Así que el PSOE habría recibido el tercero y el PP el cuarto. El quinto, debido al empate y la alternancia, le habría correspondido al PP. Y el sexto al PSOE.

El empate final el en séptimo se habría resuelto por alternancia y le habría correspondido... ¡al PSOE! De manera que el PP, aun habiendo ganado el sorteo, habría perdido en el reparto de escaños.

El lector interesado podrá averiguar en qué resultó toda esta historia si lee, aunque sea por encima, [la sentencia al respecto del Tribunal Constitucional](http://www.tribunalconstitucional.es/fr/jurisprudencia/Pages/Sentencia.aspx?cod=16398).










