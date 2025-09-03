---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2025-04-29
description: Una serie de apuntes sobre herramientas tecnológicas útiles para el análisis
  de datos
lastmod: '2025-06-16T20:53:28.215129'
related:
- 2024-05-09-cortos-tecnologia.md
- 2025-03-18-cortos-tecnologia.md
- 2011-03-29-graficos-ii-herramientas.md
- 2024-09-17-cortos-tecnologia.md
- 2025-03-04-cortos-stats.md
tags:
- tecnología
- software libre
- sqlite
- análisis geospacial
title: Una serie de apuntes sobre tecnología
url: /2025/04/29/cortos-tecnologia/
---

El estado francés ha creado una plataforma, [La Suite](https://lasuite.numerique.gouv.fr/en) (¿_Numérique_?), que parece una especie de Teams de código abierto pensada para el sector público. Como acostumbramos a decir los europeos de pro, el Airbus de los _workspaces_.

Hablando de código abierto, en [_The Value of Open Source Software_](https://www.hbs.edu/faculty/Pages/item.aspx?num=65230) se estima su valor (8.8 billones españoles de dólares) y su precio (4.15 miles de millones). Además, se calcula que las empresas tendrían que pagar 3.5 veces más por el _software_ si todo él fuese propietario.

Creo que escribiendo [`fastplotlib`](https://fastplotlib.org/) se dice todo.

[Esta página](https://sqlite-internal.pages.dev/) permite explorar la estructura de bajo nivel de una base de datos de SQLite.

[A5](https://a5geo.org) es un (otro) índice geoespacial que particiona el mundo en celdas pentagonales. El nivel de resolución más bajo, codificado como un entero de 64 bits, identifica pentágonos de 30mm², nada menos. Y en el sistema [`what3words`](https://what3words.com), pensado para transformar direcciones/coordenadas en tripletas de tres palabras, vivo no muy lejos de la celda identificada por `(king,  lizards, muddy)`. Finalmente, según [esto](https://www.dbreunig.com/2025/05/03/duckdb-is-the-most-impactful-geospatial-software-in-a-decade.html), una de las mejores cosas que han ocurrido en el mundo del análisis geoespacial es la publicación de la extensión espacial de DuckDB en 2023.

Dynomigth (que es médico) se queja (creo que muy razonablemente) de NumPy [aquí](https://dynomight.net/numpy/). Su principal argumento es el de la excesiva abstracción de las estructuras de datos: por ejemplo, que las operaciones para redimensionar arrays y vectorizar operaciones resultan demasiado abstrusas para usuarios interesados en trabajar en _dimensiones razonables_ 1 y 2. Como consecuencia, el código que uno se ve obligado a escribir en NumPy es esotérico e ininteligible.

Acabo de descubrir un nuevo buscador curioso, [Exa](https://exa.ai/). Uno de sus beneficios es que permite realizar búsquedas vía API (y, hasta cierto número de usos, gratuitamente). Los resultados, en todo caso, no son una maravilla. Pensaba que subcontratarían el índice pero parece que no, que usan sus propios rastreadores.

[Aquí](https://blog.dshr.org/2025/03/software-supply-chain-attack.html) se cuenta tal vez incluso más de lo que realmente quieres saber sobre los _hackers_ de Corea del Norte y sobre cómo consiguieron sus últimos y sonados botines de criptomonedas.

[Smry](https://www.smry.ai/) dice ayudarte a pasar los _muros de pago_. He visto cosas mejores.