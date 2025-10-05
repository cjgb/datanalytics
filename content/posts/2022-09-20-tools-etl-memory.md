---
author: Carlos J. Gil Bellosta
categories:
- programación
date: 2022-09-20
description: Un repaso a las herramientas disponibles en R y Python para realizar
  ETLs en memoria
lastmod: '2025-04-06T18:45:17.594395'
related:
- 2014-03-20-los-sospechosos-habituales-y-python.md
- 2017-05-16-soy-un-dinosaurio-sobre-las-novedades-de-r.md
- 2010-11-17-siete-consejos-para-expertos-en-analisis-de-datos.md
- 2014-03-12-veinte-paquetes-de-r-para-cientificos-de-datos.md
- 2015-01-28-la-profesionalizacion-de-r.md
tags:
- r
- python
title: Herramientas para ETLs en memoria
url: /2022/09/20/herramientas-etl-en-memoria/
---

_[Antes de nada, un aviso: léase la fecha de publicación de esta entrada. Es fácil estés visitándola en algún momento futuro en el que ya esté más que caduca.]_

Soy muy partidario de las ETL _en memoria_. Cada vez es menos necesario utilizar herramientas específicas (SQL, servidores especializados, Spark, etc.) para preprocesar datos. Casi todo cabe ya en memoria y existen herramientas (hoy me concentraré en R y Python, que son las que conozco) que permiten realizar manipulaciones que hace 20 años habrían resultado impensables.

### R base clásico

En el principio, fue R base en su versión clásica: tablas, `merge`, las funciones `reshape`, `xtabs`, etc. La última vez que lo vi usar _no irónicamente_ fue hacia 2018. Nos lo encontramos en un proyecto y me tocó explicar a los nuevos de la cosa de qué iba todo aquello.

Manipular datos masivamente con el R _de entonces_ era una tortura. Pero era lo que había, no conocíamos otra cosa (¿tal vez SAS?) y estábamos felices. Hoy en día está totalmente obsoleto por funcionalidad, rendimiento y _ergonomía_. Eso sí, nunca dejaremos de usar `tapply`, `lapply` y similares.

(Si alguien quiere poner en prueba su capacidad neuronal, que trate de simular `melt` y `cast` del paquete `reshape2` usando la función `base::reshape`. Está copiada de SAS y se nota muchísimo.)

### R + plyr + reshape2

`plyr` + `reshape2` llegaron y crearon para nosotros un paraíso del que prometimos que jamás nos echarían: una sintaxis clara, solución a problemas que previamente exigían largas perífrasis computacionales, fundamento teórico (sí, [`reshape2` fue el inicio del `tidy-todo`](https://vita.had.co.nz/papers/tidy-data.pdf)).

Tiene un problema, sin embargo: el rendimiento. Que nunca fue resuelto en estos paquetes sino en sus _sucesores_.

### R + data.table

`data.table` me produce sentimientos muy encontrados. Por un lado, es lo más rápido que existe. Vence a cualquiera de sus alternativas por goleada (¿tal vez con la excepción, más abajo, de `polars`?). Resolvió definitivamente el problema del rendimiento. Pero tiene un problema serio: una sintaxis esotérica. Parece ---no en la forma, pero sí en el espíritu--- Perl. A mí, particularmente, me toca reaprenderla cada vez que la uso.

### R + dplyr (o tidyverse)

Sospecho que Hadley Wickham desoyó sistemáticamente los lamentos de quienes pedían un `plyr::ddply` más rápido porque estaba trabajando en su sucesor, `dplyr` y, en general, el `tidyverse`. Es popular,tiene un rendimiento aceptable (aunque lejos del de `data.table`) y su innovación (¿aportación?) más notable es la sintaxis. Es prácticamente un dialecto (y casi un lenguaje separado) de R.

Sospecho que muchos recién llegados a R a través del mundo del `tidyverse` no saben siquiera programar en R. Pero no puedo decir mucho más al respecto porque, realmente, no lo uso y, cómo se verá, es improbable que llegue a usar sistemáticamente.

### R, en resumen

A lo largo de los años, en el mundo de R han aparecido diversas herramientas para el procesamiento masivo (aunque en el orden de lo que cabe en memoria) de datos. Aunque este no era el propósito original de R, hoy en día es perfectamente posible preprocesar datos a escala usando alguna de las herramientas indicadas más arriba eliminando la necesidad de incurrir en la _sobreingeniería_ de proyectos.

Sin embargo...

### Python

... R tiene un problema de base para ser usado para el preprocesamiento masivo de datos en producción: es un lenguaje diseñado para un uso interactivo. Si lo has tratado de usar para generar código _en producción_, sabrás bien de qué hablo.

Y en ese sentido, Python le da mil vueltas a R. O se lo comenzó a dar desde el momento en el que este, vía `pandas`, se dotó de ese peculiar tipo de colección fundamental para la ciencia de datos que son las tablas (o `DataFrames`).

### Python + pandas

No hay mucho que contar: sería como abundar en que el cielo es azul o la hierba, verde. Es la combinación más usada actualmente y uno está tan hecho a ella que no sabría ya ni decir qué es lo mejor ni lo peor de ella.

Pero sí que recuerdo, en mis comienzos, cómo me exasperaban las servidumbres que el lenguaje de propósito general, Python, parecía imponer en la sintaxis de `pandas` y que resulta muy antinatural (p.e., esos `.locs` e `.ilocs`). O la misma existencia de índices en las tablas.

### Python + polars

Pero las mayores limitaciones de `pandas` ---y otras alternativas en R--- no se aprecian nítidamente hasta el primer `import polars as pl`.

La idea detrás de `polars` es sencilla: para qué reinventar la rueda si ya existe un _esquema_ ([Apache Arrow](https://arrow.apache.org/)) para gestionar tablas y operaciones con ellas de manera más que eficiente; por qué no crear una interfaz con una sintaxis coherente que permita la interacción de Python con estas estructuras.

Y el resultado ---opinión a la que he llegado después de mis tres primeras horas de contacto con `polars` consistentes en una migración desde `pandas`--- es más que satisfactoria. Casi todo en `polars` es más _pythónico_, más rápido y más amable.

### A modo de resumen

1. Habría que justificar mucho en un proyecto de datos el utilizar una herramienta de ETL que no fuese directamente, código en R, Python o similares corriendo en memoria.
2. Solo usaría las alternativas del mundo R si el resto del proyecto fuese 100% R.
3. `pandas` parece la única vía en el mundo Python, pero `polars` merece, si no una oportunidad, al menos, que se le eche un muy buen vistazo.