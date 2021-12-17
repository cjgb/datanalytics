---
author: Carlos J. Gil Bellosta
date: 2012-08-01 07:11:51+00:00
draft: false
title: Reetiquetar factores en R

url: /2012/08/01/reetiquetar-factores-en-r/
categories:
- r
tags:
- r
---

La operación que voy a discutir hoy es una que plantea problemas a muchos programadores nuevos en R: cómo renombrar niveles de un factor. Un caso típico ocurre al leer una tabla que contiene datos no normalizados. Por ejemplo,



    mi.factor <- factor( c("a", "a", "b", "B", "A") )



donde se entiende que a y A, b y B son la misma cosa. Otro caso similar ocurre cuando se quieren agrupar niveles poco frecuentes como en



    mi.factor <- factor( c(rep("a", 1000), rep("b", 500), letters[3:10]) )



Para homogeneizar la entrada se recomienda sustituir sobre `levels(mi.factor)` así:



    levels(mi.factor)[ levels(mi.factor) %in% letters[3:10] ] <- "otras"



El lector interesado podrá comparar la velocidad de ejecución de este procedimiento con otros que se le ocurran (sobre un factor de un tamaño respetable).
