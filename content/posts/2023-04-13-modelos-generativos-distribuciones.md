---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
date: 2023-04-13
lastmod: '2025-04-06T19:09:31.511380'
related:
- 2021-03-02-un-argumento-para-usar-la-normal-la-maximizacion-de-la-entropia.md
- 2022-01-11-caracterizacion-binomial-negativa-poisson-gamma.md
- 2012-07-27-a-los-datos-mismos.md
- 2019-01-08-modelos-de-conteos-con-sobredispersion-con-stan.md
- 2011-06-24-sobre-el-libro-the-flaw-of-averages.md
tags:
- probabilidad
- estadística
- modelos generativos
- distribuciones
- artículos
title: ¿Qué distribución usar? ¡Examina el proceso generativo!
url: /2023/04/13/distribuciones-procesos-generativos/
---

Tenía pendiente contar algo sobre el (oscuro) artículo
[_A Brief History of Generative Models for Power Law and Lognormal Distributions_](https://projecteuclid.org/journals/internet-mathematics/volume-1/issue-2/A-Brief-History-of-Generative-Models-for-Power-Law-and/im/1089229510.full). Tiene una cosa buena y una mala.

La buena ---y más interesante--- es que ilustra cómo pensar sobre la conveniencia de usar una distribución determinada a la hora de modelar un fenómeno concreto. Uno de los procedimientos más fértiles consiste en indagar sobre el proceso generativo que conduce a la distribución en cuestión. Así, usamos la distribución normal porque sabemos que la agregación de pequeños errores etc.; o la Poisson porque tenemos una población muy grande cuyos sujetos tiran monedas al aire etc.; etc.

En el artículo se estudia un problema ---la distribución del tamaño de ficheros en ordenadores--- y se ponderan dos distribuciones distintas, la lognormal y la ley potencial (¿se traduce así _power law_?). La manera de afrontar el problema es construir una colección de fenómenos y procesos de cuya naturaleza emerjan la una o la otra. La expectativa implícita es la de poder llegar a una formulación general que permita aplicarla en el ---o asimilarla al--- caso concreto.

¿Lo malo del artículo? Que podría considerarse un ensayo fallido. Los ejemplos y casos discutidos son interesantes en sí mismos y ayudan a extender la cultura numérica de los lectores, pero no alcanzan ni a resolver el problema concreto inicial ni, mucho menos, a demarcar con precisión los campos de las distribuciones lognormal y potencial.

De todos modos, se le abona el esfuerzo al autor.