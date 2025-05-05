---
author: Carlos J. Gil Bellosta
categories:
- estadística
- números
date: 2011-05-26 07:50:58+00:00
draft: false
lastmod: '2025-04-06T18:46:25.443028'
related:
- 2011-06-24-sobre-el-libro-the-flaw-of-averages.md
- 2012-07-30-la-media-y-el-riesgo-de-nuevo.md
- 2016-05-31-el-extrano-caso-de-la-media-empirica-menguante.md
- 2010-05-25-sobre-la-media-y-la-mediana.md
- 2021-03-02-un-argumento-para-usar-la-normal-la-maximizacion-de-la-entropia.md
tags:
- estadística
- números
- media
title: El problema de la media, el problema con la media
url: /2011/05/26/el-problema-de-la-media-el-problema-con-la-media/
---

Debiera comenzar asumiendo y reconociendo mis deficiencias pedagógicas a la hora de elegir y presentar el [problema sobre la media de la semana pasada](https://datanalytics.com/2011/05/20/problema-de-la-semana-sobre-la-media/). Espero que quienes hicieron comentarios al respecto —y quienes los pensaron sin escribirlos— no reciban esta entrada con el "buuuuu" que tal vez merezco.

El problema _de_ la media es más bien un problema _con_ la media. No es en él tan interesante _la_ solución —y nadie debería pensar que en estas páginas planteamos problemas rancios como aquéllos sobre cuadernos, lapiceros y pesetas con que entretuvimos alguna tarde de la infancia— como su discusión.

En la práctica, el beneficio por barril sería superior a los 25 dólares que podría calcular una vieja usando su proverbial cuenta. Y es porque quien posee un pozo de petróleo —así como quien opera una central eléctrica o, incluso, vende baratijas en la playa— tiene la opción de ajustar en mayor o menor medida la producción a los precios ejercitando sus llamadas [opciones reales](http://en.wikipedia.org/wiki/Real_options_valuation), similares a sus homólogas en el ámbito financiero. Y la opción encierra un valor, como todo derecho exento de obligaciones.

Que me excusen la trampa —si se la quiere llamar así— quienes ejercitaron la neurona la semana pasada. Pero que tampoco piensen que el tema es baladí: el ejemplo está adaptado del libro _[The flaw of averages](http://www.flawofaverages.com/)_, que discute paradojas y errores que derivan del uso indiscriminado de la media como compendio unidimiensional y estático de la incertidumbre. En referencia al problema planteado, el libro explica cómo las normas contables indican que las compañías petroleras deben valorar sus reservas multiplicando su volumen por el _precio medio_ del crudo en un determinado periodo, ignorando el seguramente jugoso valor de la correspondiente opción real.

Sam Savage, su autor, llama _ley fuerte de la imperfección de la media_ a un error que, en algunas de sus manifestaciones y en términos matemáticos, consiste en confundir la esperanza de una función de una variable aleatoria, $latex E(\phi(X))$, con la función de la esperanza, $latex \phi( E(X) )$. En el contexto de las opciones reales, $latex \phi$ es una función convexa y la desigualdad de Jensen (¡la madre de todas las desigualdades!) indica que en tales casos,


$$\phi( E(X) ) \le E(\phi(X)).$$


El interesado en ilustrarse con más casos en que se manifiesta este error (y algunos otros) debe saber que hombres malos subieron el libro a páginas de intercambio de ficheros, gracias a los cuales podrá consultarlos por poco precio. Y por el mismo, aprender acá otro, oportunísimo, que falta en aquél.

Y es que en el programa electoral de uno de los partidos que se presentaban a las elecciones autonómicas de mi región de adopción —y cuya presidenta, de la esperanza, sabe mucho— indicaba como uno de los grandes hitos de su gobierno el haber ahorrado cierta cantidad de dinero _en promedio_ a los ciudadanos a través de bajadas de impuestos. Habida cuenta de que éstos son —aunque cada vez menos—, progresivos, la función que determina los impuestos que ha de satisfacer un ciudadano, $latex \phi$, en función de sus ingresos, $latex X$, es convexa. La cifra a la que se refería pues es $latex E(\phi(X))$, superior, como ya sabemos, a $latex \phi( E(X) )$, el ahorro correspondiente a un _ciudadano medio_. No es por tanto de extrañar la matización que de estas cifras realizaba un partido de izquierda en su correspondiente programa indicando cómo, debido al enorme sesgo en los ingresos y a la progresividad de los impuestos, el beneficio fiscal había recaído desproporcionadamente sobre las clases más pudientes.

Dado que la media de los ingresos es superior a su mediana, la discusión anterior indica que, en democracia, serían incompatibles bajadas de impuestos con un conocimiento generalizado de la desigualdad de Jensen. Por ello, nada convendría más a quienes contemplan con antipatía los recientes acontecimientos electorles que el que esta entrada mía de hoy alcanzase pronto los 45 millones de visitas.