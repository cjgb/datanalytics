---
author: Carlos J. Gil Bellosta
date: 2011-09-27 07:39:31+00:00
draft: false
title: Sobre la economía del lenguaje

url: /2011/09/27/sobre-la-economia-del-lenguaje/
categories:
- estadística
- nlp
- probabilidad
tags:
- estadística
- nlp
- probabilidad
---

De acuerdo con una observación de [Zipf](http://es.wikipedia.org/wiki/George_Kingsley_Zipf) (y supongo que de muchos otros y que no hay que confundir con [su ley](http://es.wikipedia.org/wiki/Ley_de_Zipf)), la longitud de las palabras más corrientes es menor que las que se usan menos frecuentemente.

Un estudio reciente, _[Word lengths are optimized for efficient communication](http://web.mit.edu/piantado/www/papers/PNAS-2011-Piantadosi-1012551108.pdf)_, matiza esa observación: la cantidad de información contenida en una palabra predice mejor la longitud de las palabras que la frecuencia de aparición pura. En una comparación entre diversos idiomas europeos, parece manifestarse que palabras que aportan poca información son breves; las que aportan mucha, más largas.

La cantidad de información que transmite una palabra depende del contexto. En un contexto c, la cantidad de información que contiene una palabra _w_ es $latex -log P( w | c)$, el logaritmo de la probabilidad de que _w_ ocurra en dicho contexto. La cantidad global de información que transmite una palabra es la media de dicha cantidad a través de los contextos en que aparece _w_, es decir


$$ -\sum_c P( c | w ) \log P( w | c ),$$


cantidad que puede aproximarse por


$$ -1/N \sum_{i = 1}^N \log P( w | c_i ).$$


Para calcular $latex P( w | c_i )$ pueden utilizarse varias técnicas. Por ejemplo, secuencias de palabras (o contextos) tales como "quiero beber..." condicionan la probabilidad del término subsiguiente. Y "cerveza", "leche" o "agua" será menos informativo (es decir, más probable) que "hidromiel" o "electrones".

De alguna manera, los hablantes tienden a [mantener constante la tasa de transmisión de información ](http://www.fundeu.es/noticias-articulos-metralletas-parlantes-6659.html)acortando lo predecible y haciendo hincapié (y gastando tiempo y sílabas) en los puntos más informativos del discurso.

Y ahora entro en terreno que me es menos propio: la fijación de la sintaxis desde la creación de las primeras gramáticas, la difusión de los libros, la educación, etc. han mantenido el lenguaje relativamente invariable a través de los últimos siglos: los mayores impedimentos para entender textos de hace 400 años son puramente léxicos. Pero eso no ha impedido que hayan evolucionado los contextos y, por lo tanto, la regla que asocia cantidad de información y longitud de palabras.

¿Será el [lenguaje que se utiliza en las redes sociales](http://www.fundeu.es/noticias-articulos-nuevo-lenguaje-se-maneja-en-las-redes-sociales-6681.html) heraldo de movimientos de reajuste _tectónico_ en el lenguaje que lo alinee con el nuevo equilibrio entre las palabras de antaño y los cambios de cantidad de información que han traído los nuevos tiempos?
