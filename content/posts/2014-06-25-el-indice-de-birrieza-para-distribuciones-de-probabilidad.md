---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2014-06-25 07:11:26+00:00
draft: false
lastmod: '2025-04-06T19:10:07.248535'
related:
- 2021-03-02-un-argumento-para-usar-la-normal-la-maximizacion-de-la-entropia.md
- 2011-06-24-sobre-el-libro-the-flaw-of-averages.md
- 2014-10-21-mas-alla-del-teorema-central-del-limite.md
- 2017-04-12-experimentos-con-extremely-small-data-la-media-muestral-de-pocas-betas.md
- 2014-01-24-como-no-restar-numeros-fuzzy.md
tags:
- birrieza
- estadística
- distribuciones
- feller
title: El índice de birrieza para distribuciones de probabilidad
url: /2014/06/25/el-indice-de-birrieza-para-distribuciones-de-probabilidad/
---

Pido disculpas por usar _birrieza_, que no es una palabra que no existe. Si a alguien se le ocurre otro término mejor, que lo sugiera. Pero es que hay distribuciones de probabilidad que son una birria. Y de ellas me voy a ocupar hoy.

Pero antes, una digresión breve. Todas las distribuciones de probabilidad, en la práctica, están acotadas. Aunque sea por el número de átomos del universo. ¿Cuál es la importancia de dicha digresión? Que implica que no hay distribución que, en la práctica, se resista el teorema central del límite.

Pero en la práctica, también, infinito es también un número mucho más de andar por casa. Recuerdo mis días de estudiante, cuando iba yo para matemático. ¡Qué escándalo! En clase de estadística nos querían convencer de que infinito era igual a seis. Sí, porque había teoremas de convergencia que nos decían que en el infinito la distribución de nosequé era $latex \chi^2$. Pero en la clase de problemas, con seis observaciones por casilla nos considerábamos ya en el límite y podíamos dar por buenos resultados por los que en análisis nos habrían puesto un cero a compás.

La cosa es que sales al mundo y cualquiera que ve una media de cosas presuntamente _iid_ asume inmediatamente normalidad. Incluso aunque la distribución subyacente sea una birria. Sabemos que hay distribuciones sin varianza definida cuyas medias (o una versión de ellas) convergen a cosas distintas que la normal. O eso nos enseñan los dos tomitos de Feller (qué pesado el hombre con las distribuciones estables). Es una pena que los estadísticos no se han dignado en asignar a cada distribución un numerito para tontos que indique cómo de grande tiene que ser la muestra para comenzar a asumir la normalidad en la media sin que Gosset torture un gatito. Sería más útil que esas cosas tan abstractas que se complacen en escribir tan a menudo.

Creo necesario implantar el índice de birrieza. El índice de birrieza para la distribución normal sería 1 porque la media de una muestra de tamaño uno de la normal es normal. El de la distribución uniforme, 12 por [esto](http://www.datanalytics.com/2012/11/20/lo-normal-sumar-doce-restar-seis/). Etc. con el resto.

Luego habría que poner el índice de birrieza en las correspondientes páginas de la Wikipedia para tenerlo bien a mano y poder guiar a golpe de URL a los desavisados.