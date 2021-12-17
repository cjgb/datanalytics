---
author: Carlos J. Gil Bellosta
date: 2021-09-21 09:13:00+00:00
draft: false
title: Aún más sobre propagación de errores (y rv)

url: /2021/09/21/aun-mas-sobre-propagacion-de-errores-y-rv/
categories:
- r
tags:
- paquetes
- probabilidad
- r
- rv
---




_[Menos mal que se me ha ocurrido buscar en mi propio blog sobre el asunto y descubrir —no lo recordaba— que ya había tratado el asunto previamente en entradas como [esta](https://www.datanalytics.com/2020/03/10/mas-sobre-el-metodo-delta-propagate/), [esta](https://www.datanalytics.com/2020/01/22/siete-llaves-al-sepulcro-del-metodo-delta/) o [esta](https://www.datanalytics.com/2020/02/03/el-metodo-delta-ahora-con-nimble/).]_







El problema de la propagación de errores lo cuentan muy bien Iñaki Úcar y sus coautores [aquí](https://arxiv.org/pdf/1804.08552.pdf). Por resumirlo: tienes una cantidad, $latex X$ conocida solo aproximadamente _—_en concreto, con cierto error_—_ e interesa conocer y acotar el error de una expresión $latex f(X)$.







En el artículo antes mencionado se distinguen dos métodos:





  1. El del desarrollo de Taylor de $latex f$, que se conoce como el método delta en estadística cuando dicho desarrollo es de primer orden (es decir, se reemplaza $latex f$ por una función lineal alrededor del punto de interés).  2. Simulaciones de Montecarlo. Es decir, si sé simular valores posibles de $latex X$, puedo obtener la distribución de $latex f(X)$.





En el artículo, además, se encuentran referencias a diversos paquetes de R que implementan cualquiera de las dos vías anteriores.







Pero hoy quiero hablar de `[rv](https://cran.r-project.org/web/packages/rv/)`, un paquete de R aún más ambicioso y que hace (o prentende hacer) todo lo anterior y más. De hecho, es la implementación de un programa del que hablé aquí ya hace diez años [al resumir el libro _The Flaw of Averages_](https://www.datanalytics.com/2011/06/24/sobre-el-libro-the-flaw-of-averages/) y donde escribí:







<blockquote>La tercera es la que de nomina la forma débil del _flaw of averages_:  al combinar de alguna manera valores inciertos, lo que se obtiene es otro número incierto, otra _forma_, de acuerdo con ciertas reglas. Lo asocia al efecto de la **diversificación **(ilustrado con aplicaciones en el ámbito de las inversiones financieras e industriales). El autor se decanta por la **simulación **a la hora de entender cómo se combinan _formas_ básicas. Y, para facilitarlo y automatizarlo, propone la creación de un **entorno de cálculo probabilístico** que sepa procesar objetos del tipo DIST con la misma facilidad que una hoja de cálculo opera con números.
>
> </blockquote>







Tal hace `rv`: implementa un _álgebra_ de variables aleatorias.







Lo hace, además, no siguiendo ninguno de los dos métodos mencionados más arriba _—_aunque bueno, sí, concedo que utiliza uno relacionado con el segundo_—_: cada _valor_, cada _magnitud_, es un objeto que esconde cierto número (¿varios miles?) de muestras de su distribución. Aplicarle $latex f$ equivale a aplicar $latex f$ a esas muestras subyacentes; sumar dos de ellas _—_supuestas independientes_—_, a tomar una muestra de sumas de las muestras; y más cosas que pueden consultarse [aquí](https://cran.r-project.org/web/packages/rv/vignettes/rv-doc.html).







Lo cual es una muy buena noticia.







Y ahora, lo malo: todo este programa funciona en tanto en cuento las variables aleatorias implicadas sean independientes (como caso particular, ¿es $latex X + X = 2X distribucionalmente?). No tengo nada claro cómo funcionará el paquete con variables aleatorias correlacionadas y, en general, la aplicación práctica para problemas más allá de lo trivial, exige poder operar con ellas. Mi apuesta para el futuro a largo plazo es que nunca veremos el caso general _—_es decir, un álgebra que nos permita operar con distribuciones como lo hacemos con números_—_ resuelto.



