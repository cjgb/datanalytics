---
author: Carlos J. Gil Bellosta
date: 2012-07-10 06:48:45+00:00
draft: false
title: La desigualdad y cómo medirla

url: /2012/07/10/la-desigualdad-y-como-medirla/
categories:
- estadística
- finanzas
tags:
- econometría
- estadística
- estadística pública
- finanzas
---

Últimamente he tenido bastantes visitas del extranjero. Las llevo a pasear por el centro de Madrid, ¡qué remedio! Y siempre surge el mismo comentario: habiendo crisis que nos cuentan los periódicos, ¿cómo es que están las terrazas a rebosar? Y mi respuesta es siempre la misma: lo que se ve no es la crisis; lo que se ve, en el fondo, es la desigualdad.

Otros han escrito, y mucho mejor de lo que lo haría yo, sobre lo pernicioso de la desigualdad en la economía e incluso, sobre la misma democracia. Yo me limitaré a exponer algunos problemas que produce su cuantificación.

Uno de los indicadores de desigualdad por excelencia es el [índice de Gini](http://en.wikipedia.org/wiki/Gini_coefficient). Aunque relativamente intuitivo y fácil de calcular, adolece de algunas [deficiencias que ha puesto de evidencia el Banco Mundial](http://blogs.worldbank.org/developmenttalk/monitoring-inequality?cid=EXT_TWBN_D_EXT). Por ejemplo, el crecimiento económico de China, un país que partía de unos niveles de renta mínimos, ha hecho descender el índice global de desigualdad. Sin embargo, paradójicamente, la desigualdad ha crecido enormemente en dicho país.

Y esto sucede porque los índices tradicionales y más usados de desigualdad no permiten descomponerla en sus dos componentes principales, i.e., la desigualdad entre países y la desigualdad dentro de cada país, y estudiar su evolución por separado.

Un artículo de F. Bourguignon, _[Decomposable Income Inequality Measures](http://www.jstor.org/discover/10.2307/1914138?uid=3737952&uid=2&uid=4&sid=21100907325061)_ estudia unas cuantas de ellas y las clasifica en función de si cumplen una serie de criterios deseables:

[![](/wp-uploads/2012/07/decomposable_inequality_measures.png)
](/wp-uploads/2012/07/decomposable_inequality_measures.png)

Estos son:



	  * agregabilidad, es decir, que no sea necesario conocer la distribución exacta dentro de los subgrupos para calcular la desigualdad total.
	  * la descomposición aditiva, que permitiría calcular el índice global de desigualdad como la suma de una media ponderada de las desigualdades de los grupos más la desigualdad entre los grupos.
	  * la homogeneidad: que la medida de desigualdad sea invariante frente a multiplicaciones (y que no varíe, por ejemplo, si el gobierno decide quitarle dos ceros a la moneda, que es lo mismo que multiplicar los ingresos nominales por 0.01).
	  * la [condición de Pigou-Dalton](http://en.wikipedia.org/wiki/Hugh_Dalton), según la cual una transferencia de dinero de una persona rica a una pobre, siempre que esta transferencia no altere su posición relativa en la escala de la riqueza, hace disminuir el indicador de desigualdad.

Por cumplir todas esas propiedades deseables, el [Banco Mundial está proponiendo el uso de la desviación logarítmica media](http://blogs.worldbank.org/developmenttalk/monitoring-inequality?cid=EXT_TWBN_D_EXT). En el enlace anterior pueden verse una serie de resultados aplicados a diversas regiones junto con un estudio de la evolución tanto de la desigualdad globlal como la intrarregional e interregional.

Desde un punto de vista matemático, la desviación logarítmica media no es sino el logaritmo de la media de los ingresos menos la media de los logaritmos de los ingresos, es decir,


$latex \log(1/n\sum x_i) - 1/n \sum \log x_i$.


La demostración de cómo esta medida puede descomponerse aditivamente puede encontrarse [en la Wikipedia](http://en.wikipedia.org/wiki/Theil_index). Ahora bien, ¿podrá alguien probar que dicha medida es siempre positiva y que su mínimo, cero, se alcanza cuando todos los ingresos son iguales?
