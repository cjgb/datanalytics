---
author: Carlos J. Gil Bellosta
date: 2014-03-12 07:11:28+00:00
draft: false
title: Veinte paquetes de R para científicos de datos

url: /2014/03/12/veinte-paquetes-de-r-para-cientificos-de-datos/
categories:
- r
tags:
- ggplot2
- paquetes
- paralelización
- r
---

Me llegó recientemente un artículo con una lista de [veinte paquetes de R para _data scientists_](http://datascientistinsights.com/2013/02/25/20-r-packages-that-should-impact-every-data-scientist/). Y no la encuentro afortunada. Voy a agrupar esos veinte paquetes en algunas categorías y añadiré comentarios. La primera de ellas es la de manipulación de datos, tal vez la más amplia, que recoge los siguientes: `sqldf`, `plyr`, `stringr` (para procesar texto), `lubridate` (para procesar fechas),`reshape2` y los paquetes de acceso a bases de datos.

De todos ellos me quedo con `plyr` y `reshape2`. Tengo que trabajar con texto y fechas solo esporádicamente y no les he sacado todo el rendimiento posible a `stringr` y `lubridate`: casi siempre me las arreglo con las funciones básicas para el manejo de texto y fechas (`grep`, `as.Date`, etc.). Para el acceso a bases de datos suelo tener que conformarme con RODBC. Sacaría de la lista a `sqldf`: no me gusta depender de terceras aplicaciones y con la edad me estoy volviendo alérgico al SQL. Añadiría, eso sí, el nuevo paquete `dplyr` y, por supuesto, `data.table`.

Entre los paquetes de análisis de datos, advertiría que no muchos trabajamos en control de calidad (para lo que sirve `qcc`), analizamos datos de panel (`plm`) o podemos sacar partido de los modelos mixtos (`nlme`). Incluso es raro encontrar series temporales (para lo que serviría `forecast`). Convengo en que `igraph` es muy útil e información con estructura de red aparece en muchos contextos. Mi lista de paquetes de análisis puro que recomendaría a una generalidad de científicos de datos sería:

* `igraph`,
* `party`,
* `randomForest`,
* y, posiblemente `caret`, y `glmnet`.

No tengo experiencia con `Zelig` y no puedo opinar en ningún sentido (¿lo hará alguno de mis lectores?).

Tampoco recomendaría invertir tiempo en familiarizarme con `snow` o `Rmpi` (para computación en paralelo) salvo en caso de estricta necesidad. Además de que [la promesa del procesamiento en paralelo no siempre rinde sus frutos](http://grokbase.com/t/r/r-sig-hpc/142djfy2m9/why-pure-computation-time-in-parallel-is-longer-than-the-serial-version). La imputación de datos (`Amelia`) es algo que,cuando toca, intento resolver de manera bastante más artesanal; la mayor parte de los que obtengo son ceros naturales: si un cliente no ha comprado, no figura en la lista de ventas por lo que el nulo que aparece asociado a su _cantidad_ es, en puridad, un cero.

Para la creación informes y resultados (incluidos gráficos), me quedaría, igual que en la lista que comento, con `ggplot2`. Aunque muchos preferirán `lattice`. Eso sí, mucho antes en la lista de paquetes de este apartado estaría `knitr` que, p.e., `xtable`.

Me dejo muchos y tal vez algún lector podrá sugerir algún otro.
