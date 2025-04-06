---
author: Carlos J. Gil Bellosta
categories:
- programación
- estadística
- r
date: 2015-11-17 08:13:11+00:00
draft: false
lastmod: '2025-04-06T18:44:28.309526'
related:
- 2014-03-20-los-sospechosos-habituales-y-python.md
- 2017-07-05-syberia-tiene-muy-buena-pinta-pero.md
- 2017-05-16-soy-un-dinosaurio-sobre-las-novedades-de-r.md
- 2022-09-20-tools-etl-memory.md
- 2011-11-28-r-en-la-ensenanza-unos-comentarios-a-los-comentarios.md
tags:
- agate
- eda
- python
- r
title: 'agate: análisis de datos optimizado para humanos (y no para máquinas)'
url: /2015/11/17/agate-analisis-de-datos-optimizado-para-humanos-y-no-para-maquinas/
---

Una de las cosas que menos me canso de repetir es que R no es (solo) un lenguaje de programación. R es un entorno para el análisis de datos. Los informáticos se horrorizan con él: no entienden por qué es como es. Pero, fundamentalmente, su problema es que no conciben que pueda haber sido diseñado para el [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) y no (solamente) para crear programas.

Casi todo el tiempo que paso con R abierto lo consumo trabajando interactivamente, no programando. R está pensado para facilitar ese tipo de trabajo, no para crear programas complejos. Está optimizado para el usuario, no para la máquina. De ahí se sigue una cascada de corolarios que no ha lugar plantear aquí.

[agate](http://agate.readthedocs.org/en/1.0.0/index.html#) es una librería de Python con el mismo objetivo: facilitar la exploración interactiva. Llega tarde, soluciona problemas que muchos de los que leen estas páginas ya no tienen, pero ahí está.