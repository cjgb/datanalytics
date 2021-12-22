---
author: Carlos J. Gil Bellosta
date: 2015-02-05 07:13:14+00:00
draft: false
title: Parametrización para vagos muy, muy vagos

url: /2015/02/05/parametrizacion-para-vagos-muy-muy-vagos/
categories:
- r
tags:
- parametrización
- r
- paquetes
- whisker
- sql
---

Un ejemplo sencillo. Tengo un programa que contiene, por ejemplo, una consulta tal que

    query <- "select * from mitabla where country = 24 and year = 2014"

Hay gente sumamente diligente, con una enorme capacidad de trabajo y con vocación de hormiguita que en mil ejecuciones distintas (distinto país, distinto año) del código anterior sería capaz de editar la consulta a mano. Probablemente usando el block de notas. Esa gente, que además suele madrugar mucho, siempre me ha dado cierta envidia. No sé por qué.

Otros hemos sido bendecidos con la paradójica virtud de la pereza creativa. La pareza creativa es un no hacer las cosas por estar uno ocupado discurriendo cómo conseguir que se hagan solas. Así, uno acaba ensayando soluciones del tipo

    query <- "select * from mitabla
        where country = @countryid and year = @year"
    query <- gsub("@countryid", my.country")
    query <- gsub("@year", my.year)


Pero un vago de verdad, un profesional de la procrastinación, un alérgico al estajanovismo reconoce humildemente que no transita en absoluto por terreno virgen, que millones se han enfrentado previamente al mismo problema y que a algún otro tiene que habérsele ocurrido tiempo ha la feliz idea. Excusa ideal para sumergirse en Google y dar con lo necesario para escribir algo tal como

    library(whisker)

    # idealmente, leído de un fichero de configuración
    parms <- list(country = 28, year = 2013)

    query.template <- "select * from mitabla
        where country = {{country}} and year = {{year}}"
    query <- whisker.render(query.template, parms)