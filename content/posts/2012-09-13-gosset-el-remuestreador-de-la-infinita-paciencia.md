---
author: Carlos J. Gil Bellosta
date: 2012-09-13 07:18:27+00:00
draft: false
title: Gosset, el remuestreador de la infinita paciencia

url: /2012/09/13/gosset-el-remuestreador-de-la-infinita-paciencia/
categories:
- estadística
tags:
- bootstrap
- estadística
- historia
- student
---

He estado buscando estos días material relacionado con algo que se ha dado en llamar _estadística moderna_, que enfatiza el cálculo (asistido por ordenador) y la simulación a la hora de afrontar problemas estadísticos. La estadística _clásica_, por el contrario, tiende a hacer uso de hipótesis acerca de la distribución de los datos y a utilizar mecanismos más analíticos. La estadística moderna es _moderna_ porque los ordenadores que la hicieron posible llegaron antes que la teoría subyacente a la teoría clásica.

O eso pensaba.

Uno de los problemas típicos y ubicuos de la estadística es el de la comparación de dos medias. Con solo leer esa frase, en el cerebro de todos mis lectores que hayan tomado un curso en la manteria habrá resonado algo así como _test de Student_ o _t-test_. Se trata prácticamente del primer y más básico test de la estadística clásica.

La historia del test es de sobra conocida: que si [Gosset](http://es.wikipedia.org/wiki/William_Sealy_Gosset) trabajaba en Guinness, que si ocultó el descubrimiento publicándolo bajo el seudónimo de Student, etc.

Lo que tal vez no resulte tan conocido es que en su artículo de 1908 en el que introdujo el test, [_The Probable Error of a Mean_](http://www.york.ac.uk/depts/maths/histstat/student.pdf), escribió lo siguiente:

> Before I bad succeeded in solving my problem analytically, I had endeavoured to do so empirically. The material used was a correlation table containing the height and left middle ?nger measurements of 3000 criminals, from a paper by W. R. Macdonnell (Biometrika, i, p. 219). The measurements were written out on 3000 pieces of cardboard, which were then very thoroughly shu?ed and drawn at random. As each card was drawn its numbers were written down in a book, which thus contains the measurements of 3000 criminals in a random order. Finally, each consecutive set of 4 was taken as a sample—750 in all—and the mean, standard deviation, and correlation of each sample determined. The di?erence between the mean of each sample and the mean of the population was then divided by the standard deviation of the sample, giving us the z of Section III.

¿A que no os podíais imaginar que Gosset fuese un estadístico _moderno_?
