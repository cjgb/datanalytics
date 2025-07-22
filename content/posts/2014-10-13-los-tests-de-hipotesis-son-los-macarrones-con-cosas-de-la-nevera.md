---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2014-10-13 07:13:29+00:00
draft: false
lastmod: '2025-04-06T18:46:59.561018'
related:
- 2016-02-29-los-tres-contraargumentos-habituales.md
- 2015-01-27-grandes-datos-maquinas-pequenas-y-regresiones-logisticas-con-variables-categoricas.md
- 2017-06-29-hoy-como-excepcion-gritare-y-justificare-malditos-logaritmos.md
- 2024-09-24-cortos-stats.md
- 2019-03-27-sobre-la-necesaria-validacion-a-posteriori-de-modelos-de-caja-negra.md
tags:
- estadística
- big data
- regresión logística
title: Los tests de hipótesis son los macarrones "con cosas de la nevera"
url: /2014/10/13/los-tests-de-hipotesis-son-los-macarrones-con-cosas-de-la-nevera/
---

Todos hemos comido macarrones _con cosas de la nevera_. Estás en casa, tienes hambre y, si no hay otra cosa, son estupendos. Distinto es ir a un bodorrio de alto copete y decirle al camarero:

—Oiga, esto del solomillo y tal... ¿No tendrán Vds. un platazo de macarrones con cosas de la nevera?

Viene esto a que cierta gente trabaja con grandes datos. Y quieren construir modelos. Y por algún motivo que no comprendo del todo, optan por la regresión logística. Hay mil motivos por los que estaría desaconsejado ajustar regresiones logísticas con todos los datos. Aun así, hay gente —sí, la hay— que lo hace.

Pero, peor aún, algunos de ellos le piden macarrones al camarero: véase [_What about implementing various hypothesis test for LogisticRegression in MLlib_](http://markmail.org/message/kehnheqkwyaai3tt#query:+page:1+mid:qdkvy4nt2kdko5or+state:results ).

Mal está que gasten electricidad ajustando un modelo simple con muchísimos más datos de los necesarios. Pero si después de eso quieren estimar si un determinado coeficiente es o no nulo... que se olviden de la estadística tradicional. La estadística tradicional es el subterfugio (los restos de comida) que usas cuando no tienes otra: cuando tienes tan pocos datos que tienes que empezar a especular sobre si esto o aquello es asintóticamente normal, a contar los graditos de libertad como si fueran las monedas para coger el bús, etc.

¿Quieres saber si tu coeficiente es o no distinto de cero? Ajusta tu modelo un millón de veces sobre un millón de muestras distintas de tus datos y mira el bendito histograma. Que para eso está. ¿Quieres tener una idea del ajuste? ¿De si hay señal o puramente ruido en tus datos? ¿De si...? Está todo en las réplicas. Fíate de tus propios ojos. Y deja la teoría para cuando no tengas otra cosa a la que agarrarte.