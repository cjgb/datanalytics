---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2024-05-09
lastmod: '2025-04-06T18:57:34.628559'
related:
- 2025-03-25-cortos-llms.md
- 2024-02-06-llm-obsidian.md
- 2011-03-29-graficos-ii-herramientas.md
- 2025-03-18-cortos-tecnologia.md
- 2022-09-20-tools-etl-memory.md
tags:
- python
- tecnología
- duckdb
- json
- mapas
- pytimetk
- archlinux
title: Algunas novedades tecnológicas que he recopilado en los últimos tiempos (no
  todas rompedoramente nuevas)
url: /2024/05/09/novedades-tecnologia/
---

Últimamente he creado muchos pequeños _scripts_ en Python con parámetros de todo tipo. Tanto
[esta entrada](https://simonwillison.net/2023/Sep/30/cli-tools-python/)
para los principios generales como, por supuesto, los LLMs más habituales, me han acabado ahorrando horas y horas de trabajo.

[`shelmet`](https://shelmet.readthedocs.io/en/latest/), un paquete de Python para interactuar con la _shell_, está comenzando a aparecer en la cabecera de mis _scripts_.

Estoy creando cada vez más diagramas como parte de la documentación de mis proyectos. Ninguna herramienta es tal como me gustaría, pero la más próxima a la que consideraría ideal que he encontrado por el momento es [Excalidraw](https://excalidraw.com/).

Y también se pueden crear diagramas simples en algunos dialectos de Markdown con [Mermaid](https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/).

[Esto](https://fmhy.net/beginners-guide) es un potosí.

En Python hay muchos métodos _dunder_ (_double underscore_), como `__init__`, etc. Todos (¿todos?) se cuentan [aquí](https://www.pythonmorsels.com/every-dunder-method/).

[¿DuckDB para lanzar SQL sobre JSON?](https://www.pgrs.net/2024/03/21/duckdb-as-the-new-jq/)

Otra tecnología en la que _acabaré incurriendo_ casi seguro es Timescale (para una aplicación no muy distinta de [esta](https://www.appsilon.com/post/r-shiny-telemetry-postgresql-timescale)).

Aún no sé qué pensar sobre [`pytimetk`](https://business-science.github.io/pytimetk/), pero tiene buena pinta.

Lo mismo creo que me puede acabar pasando con [Observable Framework](https://observablehq.com/framework/), aunque el segmento de los cuadros de mando está bastante concurrido. La particularidad de este es que crea (lo cual restringe su campo de aplicación) _dashboards_ estáticos.

[Aquí](https://statmodeling.stat.columbia.edu/2023/11/01/simd-memory-locality-vectorization-and-branch-point-prediction/) se leen cosas como:

> Las CPUs (modernas) pueden realizar unas 8 operaciones aritméticas simultáneas. Escribir los bucles en bloques de 8 para que puedan explotar la vectorización es fundamental para el rendimiento. La buena noticia es que las librerías de cálculo matricial como Eigen o BLAS lo hacen automáticamente.

[Muchos datos y herramientas](https://docs.overturemaps.org/)
relacionados con mapas, etc. en
[OvertureMaps](https://overturemaps.org/),
que tiene pinta de ser a [OpenStreetMap](https://www.openstreetmap.org/) lo que el [R Consortium](https://www.r-consortium.org/members) es a R y con la que se pueden hacer cosas como [esta](https://www.dbreunig.com/2024/04/18/a-poi-database-in-one-line.html).

[Análisis geoespacial con LLMs](https://medium.com/@ageospatial/geoforge-geospatial-analysis-with-large-language-models-geollms-2d3a0eaff8aa). En realidad, no parece haber tal análisis; parece más bien un sistema que genera mapas que los usuarios describen verbalmente.

Finalmente, una noticia de índole personal: todas mis máquinas-no-servidores ya corren Arch Linux exclusivamente. Algún día tengo que hablar sobre la experiencia (que, avanzo, es muy satisfactoria hasta la fecha).