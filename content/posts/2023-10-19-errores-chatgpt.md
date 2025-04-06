---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2023-10-19
lastmod: '2025-04-06T19:04:42.109393'
related:
- 2019-12-04-p-valores-y-decisiones.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2023-10-05-llms-historia.md
- 2020-06-29-sobremuestreando-x-y-no-y.md
- 2022-03-08-estadistica-ciencias-blandas.md
tags:
- ciencia de datos
- llms
- chatgpt
- árboles de decisión
title: Cuidado con ChatGPT (advertencia núm. 232923423)
url: /2023/10/19/errores-chatgpt
---

### I.

Cuando éramos críos e íbamos al colegio, todos hemos participado en conversaciones que discurrían más o menos así:

--- Quiero ver el programa X.\
--- No puedes porque A, B y C.\
--- Pero Fulanito lo ve todos los días.\
--- No te fijes en lo que hace el más tonto; fíjate en lo que hace el más listo.

Los primeros buscadores de internet eran catastróficos. Un día apareció uno nuevo, Google, con una filosofía de madre de los setenta: fijarse en lo que hacía el más listo, no el más tonto. En el fondo, tecnicismos aparte, era en lo que se basaba el
[PageRank](https://es.wikipedia.org/wiki/PageRank).

Pero ahora ya no le preguntamos a Google sino a ChatGPT. Y, en tanto que este se alimenta del texto de los millones de fulanitos que pueblan la superficie de este atribulado planeta sin mayores distingos, hemos dado un paso atrás en lo que a la calidad de los resultados respecta.

### II.

Andaba yo buscando la manera de construir con Python un árbol de decisión de los más sencillitos, con una respuesta binaria, aunque con una pequeña variante: mis datos estaban agrupados. Es decir, mis filas no tenían una columna objetivo con un valor 0/1 sino el número de ensayos y el número de éxitos.

Así que le pregunté a ChatGPT por la forma concreta de ajustar esos datos. Y vino a decirme lo siguiente:

- Que calculase el ratio número de éxitos entre número de ensayos.
- Que utilizase un árbol de regresión con esa variable objetivo y con el _accuracy_ como medida de error.

¡Todo mal!

### III.

Se me habían ocurrio, aun sin mirar demasiado, dos maneras de hacerlo _bien_:

- Utilizar una variable objetivo bidimensional (éxitos, ensayos) tal como se puede hacer, por ejemplo, en R con la función `glm` para ajustar modelos logísticos.
- Utilizar 0/1 pero usando el número de ensayos como _peso_ de la observación. Más concretamente, desdoblar cada fila del conjunto original en dos, utilizando en una de ellas 1 y número de éxitos como objetivo y peso y, en la otra, 0 y número de ensayos menos número de éxitos para lo mismo.

Al parecer, la primera vía no está disponible en Scikit-Learn, pero la segunda sí. A pesar de lo cual, ChatGPT no me la propuso.

### IV.

¿Por qué está mal usar la vía del ratio? Hay que admitir que, realmente, no está mal y se puede llegar a catedrática de econometría defendiendo a capa y espada el procedimiento. (Que conste que, en la frase anterior, el uso del femenino no es una concesión a neogramática: la catedrática en cuestión existe. Es una señora que, a falta de razones, me puso en una ocasión delante los galones. Sucedió en aquel tiempo lejano en que en lugar de cuidar del mío, me daba por meterme en los jardines de los demás.)

Hay que admitir también que modelar es tirar información a la basura. El resultado de un análisis de un conjunto de datos de 1000000 kB bien puede resumirse en un gráfico que ocupa 15 kB. Los 999985 kB restantes, por lo tanto, acaban en la papelera.

Sin embargo, y precisamente porque sabemos que la mayor parte de la información acabará perdiéndose, hay que ser muy selectivos a la hora de decidir de cuál, dónde, cuánta, cómo y por qué deshacernos de ella. Hacer el ratio es _lossy_: a partir del ratio, no se pueden reconstruir el numerador y el denominador. Ratios de 1 y 1.01 pueden ser _insignificantes_ si corresponden a Villaarriba y Villaabajo, pero _significativos_ si lo hacen a Madrid y Barcelona. Etc.

### V.

Obviamente, esta entrada no trata sobre otro desocupado que no tiene mejor cosa que hacer que criticar una pequeña desviación de ChatGPT sobre _su verdad_. En el fondo, ChatGPT no hace sino regurgitar lo que está escrito ---a menudo mal--- por todas partes. Si ChatGPT se equivoca es porque muchos se han equivocado públicamente y por escrito antes. Lo único que se le puede achacar a ChatGPT es su falta de discernimiento.

Lo he escrito, más bien, como mínima lección de análisis de datos y con la vana esperanza de rescatar a alguno de los fulanitos ---las catedráticas de OLS son totalmente irrecuperables--- de su estado de semiignorancia.