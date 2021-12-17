---
author: Carlos J. Gil Bellosta
date: 2011-09-22 07:10:32+00:00
draft: false
title: Anonimidad y cantidad de información

url: /2011/09/22/anonimidad-y-cantidad-de-informacion/
categories:
- estadística
- números
tags:
- anonimidad
- estadística
- números
---

Juguemos a un juego: pienso el nombre de uno de los 45M de ciudadanos españoles y tenéis que acertarlo. Me podéis hacer preguntas, pero sólo de esas cuya respuesta es sí o no. ¿Cuántas preguntas deberíais hacerme?

Pues unas 25 o 26 porque $latex log_2 4.5e7 = 25.42$. La demostración es sencilla: suponed que tenéis una lista con los nombres de todos los ciudadanos (a razón de 45 por hoja y 200 hojas por tomo, ocuparían 5000 de ellos). La primera pregunta podría ser: el individuo que has pensado, ¿está en los tomos 1-2500? Luego, dependiendo de la respuesta, ¿del 1250 al 2500? Y etc. con la búsqueda binaria. En total, 25 o 26 veces.

Podríais preguntar por el sexo, el color del pelo o la edad. Pero a no ser que partiéseis vuestro universo en dos mitades iguales, seríais menos eficaces.

La información que tenéis que compilar para identificar finalmente al individuo $latex x_i$ es $latex log( 4.5e7 )$ (permítaseme olvidar que la base es 2) o bien, definiendo $latex N = 4.5e7$,


$$ \log( N ) = -\log( 1/ N) = -\log p_i,$$


si consideramos que la probabilidad de elegir al individuo $latex x_i$ es $latex p_i$ (y cada $latex p_i = 1/N$).

Si $latex X$ es la variable aleatoria _persona que yo elijo_ y concedemos que lo hago muestreando con probabilidad uniforme, podíamos definir


$$ H(X) = -\sum_i p_i \log( p_i )$$


como _el número medio de preguntas por persona que tú tienes que hacer_. Como tal no es interesante porque siendo cada $latex p_i = 1/N$, resulta que $latex H(X) = -\sum 1/N \log( 1/N ) = \log(N)$, cosa que ya sabíamos dos párrafos antes.

La gracia de $latex H$ está en que como yo no soy _uniforme_ en mis selección de individuos (por ejemplo, la probabilidad de que seleccione a un egabrense es nula porque no conozco a ninguno), entonces $latex H(X) = - \sum p_i \log p_i$ (donde las $latex p_i$ no son necesariamente iguales e incluso pueden ser nulas), es —creedme: me avalan milenios de historia de las matemáticas— menor que $latex \log N$. Es decir, necesitáis hacerme menos de 25 preguntas: ¡soy más previsible!

Supongamos que elijo a un individuo $latex X$ y que ofrezco una serie de _pistas_ $latex X_1, \dots, X_n$ sobre su identidad (por ejemplo, su edad, etc.). Si $latex X_1, \dots, X_n$ es suficiente para identificar a $latex X$, entonces $latex H(X) = H( X_1, \dots, X_n )$. Pero de las propiedades de $latex H$, se deduce que


$$ H( X_1, \dots, X_n ) = H( X_1 | X_2, \dots ) + H( X_2 | X_3, \dots ) + H( X_n ) \le \sum H( X_i )$$


La fórmula anterior necesita alguna explicación. La primera igualdad es una consecuencia casi directa de la definición de $latex H$. El símbolo $latex H( X| Y)$ representa la cantidad de información adicional que se obtiene tras preguntar acerca de $latex X$ conocida $latex Y$: por ejemplo, la cantidad de información que aporta la pregunta "¿es calvo?" después de saber que el sujeto es una mujer de menos de 30 años es mucho menor que si se sabe que es un hombre mayor de 50.

[![](/wp-uploads/2011/09/xlogx.png)
](/wp-uploads/2011/09/xlogx.png)

La desigualdad es una consecuencia directa de la [desigualdad de Jensen](http://www.datanalytics.com/blog/2011/05/26/el-problema-de-la-media-el-problema-con-la-media/) y es, de hecho, una igualdad cuando las variables aleatorias $latex X_1, \dots, X_n$ son independientes. ¡Y es que la función $latex f(x) = -x \log x$, además de convexa, tiene unas propiedades algebraicas la mar de amenas!

Y, finalmente, la relación con la anonimidad.

Supongamos que tenemos una base de datos con información confidencial en la que, por dicho motivo, se han eliminado el nombre, dirección, teléfono, etc., de los sujetos. Pero contiene una serie de _pistas_ sobre su identidad: sexo, provincia, edad, etc.

Si $latex X$ es la variable aleatoria que relaciona cada fila de la base de datos con el sujeto del que proviene (y que un facineroso puede desear identificar para, tal vez, extorsionarlo) y las pistas $latex X_1, \dots, X_n$ son suficientes para identificarlo, la anonimidad de los sujetos no puede garantizarse. Sin embargo, como hemos visto más arriba, basta con que


$$ \sum H( X_i ) < H( X )$$


para que resulte matemáticamente imposible identificar a _todos_ los sujetos.

Nota: eso no significa que sea imposible identificar a _algunos_ de ellos. En este contexto, la condición que garantiza que _ningún_ sujeto puede ser identificado es que el índice _k_ de _k_-anonimidad sea de dos o más. De esos y otros asuntos relacionados volveré a tratar en estas páginas próximamente.
