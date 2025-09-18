---
-tags:
- sociología
- encuestas
- sesgos
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2025-07-30
description: 'El ''problema de la abuela guay'' en encuestas: sesgos, reponderación
  y cómo un concepto estadístico explica más de lo que parece.'
lastmod: '2025-09-18T20:27:01.899276'
related:
- 2016-02-22-la-democracia-no-representativa-no-es-representativa.md
- 2016-06-29-por-una-vez-accedo-a-hablar-de-algo-de-lo-que-no-se.md
- 2023-05-16-promedio-predicciones-electorales.md
- 2022-03-15-infraestimacion-error-encuestas.md
- 2023-10-03-muestreo-superricos.md
title: Representados pero no representativos
url: /2025/07/30/representado-no-representativo/
---

La expresión que da título a la entrada procede de [un escrito de Andrew Gelman](https://statmodeling.stat.columbia.edu/2025/06/19/the-groovy-grandma-problem-in-survey-research/). Aunque se refiere a un problema estadístico muy concreto, la he podido aplicar en otros contextos. Es uno de esos conceptos que cuando uno tropieza con ellos, no puede dejar de verlo en todas partes.

Gelman se refería originalmente al problema de la reponderación de las encuestas. Desafortunadamente, por muy aleatorio que sea su diseño, terminan mostrando sesgos. Por no hablar de las que se realizan en periódicos, Twitter, etc. Existen técnicas que, según la teoría, mitigan en cierta medida el problema y permiten _realinear_ mejor o peor sus resultados con la realidad. Para ilustrar el uso de una de estas técnicas, Gelman _et al._ realizaron una encuesta _extrema_ en los foros de un videojuego con el objetivo de determinar si a partir de la opinión de un conjunto de _gamers_, podría reconstruirse la general e ilustrar, de paso, una serie de técnicas de su autoría.

Dado que los jubilados están infrarrepresentados en esa muestra, cualquier método razonable de reponderación debería incrementar la importancia de sus opiniones en el consenso final. Cada jubilado en esa muestra _representa_ a muchas más personas, a muchos más jubilados, que un estudiante. Utilizando una metáfora electoral, los jóvenes necesitan pocos votos para obtener un _escaño muestral_ ---es decir, un representante en la muestra---, pero los jubilados, muchísimos.

Pero el problema es que podría alegarse que aunque los jubilados están representados ---por esos pocos jubilados que, contra pronóstico y por algún extraño motivo, entran en los foros de los videojuegos y acaban en la muestra--- es probable que no sean representativos del jubilado medio: por el mero hecho de acceder a esos foros se les puede presumir características especiales que no comparten con la mayoría. Representan, pero no son representativos.