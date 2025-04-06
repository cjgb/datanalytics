---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
date: 2014-03-17 07:54:12+00:00
draft: false
lastmod: '2025-04-06T19:10:24.866624'
related:
- 2024-02-01-optimizacion-generalizacion.md
- 2014-02-27-d-hand-sobre-estadistica-y-mineria-de-datos.md
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
- 2023-03-02-conformal-prediction.md
- 2016-11-07-las-dos-culturas-con-comentarios-de-2016.md
tags:
- ciencia de datos
- domingos
title: Sobre el artículo de Domingos
url: /2014/03/17/sobre-el-articulo-de-domingos/
---

Leí el otro día [_A Few Useful Things to Know about Machine Learning_](http://homes.cs.washington.edu/~pedrod/papers/cacm12.pdf) de [Pedro Domingos](http://homes.cs.washington.edu/~pedrod/), que me dejó ojiplático. Os cuento por qué.

El artículo yuxtapone una serie de temas (debidamente organizados en secciones independientes) tales como:

* Lo que cuenta es la generalización
* Que, por eso, los datos no son suficientes y hacen falta modelos _testables_
* Que el _overfitting_ es un problema serio
* Que en dimensiones elevadas pasan cosas raras
* Que hay que tener cuidado con la teoría (en particular, los resultados asintóticos)
* Que hay que elegir muy bien las variables (las llama _features_) de los modelos
* Que es bueno combinar modelos
* Que la correlación no implica causalidad
* Etc.

Cosas todas, como se puede apreciar, muy razonables. Por lo que el artículo no habría estado mal hace treinta o cuarenta años. Pero, desafortunadamente, es del 2012.

A estas alturas del siglo creo que ya va siendo hora de que quienes llegan al mundo del análisis de datos desde disciplinas tales como la ingeniería o la informática vayan abandonando esa jerga hermética de _features_ (y _feature engineering_), _learning_, _representation_, etc. Existe una nomenclatura bien establecida para esas cosas, anterior a los balbuceos mismos _de lo que salió de los perceptrones_.

Y no es solo una cuestión de nomenclatura. Es más profundo. Es una cuestión de integración de esos recetarios y consejillos en una teoría coherente. En ese sentido, merece la pena releer [_The Elements of Statistical Learning_](http://www.datanalytics.com/2010/12/13/libros-libres/) no tanto para sumergirse hasta los últimos y más exóticos detalles de cada fórmula sino aprehender ese marco teórico que unifica técnicas dispares. Ese marco en el que, por ejemplo, técnicas tan dispares como la regresión por minímos cuadrados y los k-vecinos son los extremos de un abanico de opciones posibles que resuelven la tensión entre localidad y generalidad, sesgo y varianza, parsimonia y prolijidad, etc.