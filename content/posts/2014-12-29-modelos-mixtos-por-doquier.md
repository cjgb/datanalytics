---
author: Carlos J. Gil Bellosta
date: 2014-12-29 07:13:48+00:00
draft: false
title: Modelos mixtos por doquier

url: /2014/12/29/modelos-mixtos-por-doquier/
categories:
- ciencia de datos
- estadística
tags:
- estadística
- ciencia de datos
- modelos mixtos
- random forests
---

Los códigos postales, por ejemplo, son un problema a la hora de crear modelos predictivos: son variables categóricas con demasiados niveles. Así, por ejemplo, los bosques aleatorios de R solo admiten variables categóricas con no más de 32 niveles.

Hay trucos de todo tipo para mitigar el problema. Hace un año, [Jorge Ayuso](https://twitter.com/jayusor) me puso sobre la pista de uno de los que tiene más recorrido. Consiste en [su versión más simplificada en]:



	  1. Calcular las medias de la variable objetivo según los niveles de la variable categórica para luego
	  2. sustituir la variable categórica por esos valores estimados en el paso anterior.

Entre nos, y sin que se me ofenda Jorge, en aquel preciso momento me pareció una chapuza peligrosa que coqueteaba con uno de los grandes nononós del oficio: jugar con con la variable objetivo antes del ajuste. No caí en la base teórica de la cosa. La teoría, fuera de los libros de texto, solo llega hasta donde llega; pero si uno la sigue, aunque solo sea de reojo y a distancia, sabe en cada momento dónde está y qué hace. Solo recientemente entendí el fundamento del _truco_.

Para explicarlo, voy a reformular el problema original así:


$latex y_i \sim x_1 + x_2 + \dots + \epsilon_i$


o, mejor aún,


$latex y_i \sim N(x_1 + x_2 + \dots, \sigma)$


si tal es el caso (y si no, adáptese). Supongamos que $latex x_1$ es el dichoso código postal. El truco consiste esencialmente en plantear el modelo


$latex y_{ij} \sim N(x_i + x_2 + \dots, \sigma_1)$
$latex x_i \sim N(\mu, \sigma_2)$


donde $latex y_{ij}$ es la j-ésima observación en el i-ésimo código postal. ¡Se trata de uno de esos modelos mixtos (o jerárquicos) que se están convirtiendo en el martillo con el que golpeo casi todo lo que presumo clavo últimamente! De hecho, en la sintaxis de [`lme4`](http://cran.r-project.org/web/packages/lme4/index.html) el truco, que a estas alturas de la entrada ya no es tal, se formularía algo así como








    lmer(y ~ x2 + x3 + ... + (1 | x1), data = mis.datos)








Ahora que tenemos la teoría a la vista, el límite es solo el cielo.
