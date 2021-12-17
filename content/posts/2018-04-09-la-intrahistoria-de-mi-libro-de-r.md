---
author: Carlos J. Gil Bellosta
date: 2018-04-09 08:13:44+00:00
draft: false
title: La intrahistoria de mi libro de R

url: /2018/04/09/la-intrahistoria-de-mi-libro-de-r/
categories:
- anuncios
- r
tags:
- libros
- r
---

Una de las preguntas más fértiles que pueden formularse frente a algo es la del motivo de su existencia: ¿por qué existe en lugar de, simplemente, no existir?

El otro día anuncié públicamente la existencia de [mi libro de R](https://www.datanalytics.com/2018/04/05/un-libro-de-r-mi-libro-de-r/). No es el mejor ni el peor. Es hijo de las circunstancias que lo hicieron nacer. Que describo a continuación.

**I**

Corría el 2014. Yo tecleaba entonces en las oficinas de eBay en Zúrich. La oficina estaba escindida en dos: SAS y Python. No había apenas R por minúsculo problema técnico: no había (aparentemente) drivers para Teradata. La conexión entre R y Teradata estaba rota. Pero en una tarde y con unas cuantas líneas de Java, fabriqué un paquete de R que daba conexión ODBC con Teradata y más (lo típico: _queries_ parametrizadas, etc.). Fue para mi uso personal, luego se popularizó (sí, me llegó una oferta para trabajar en Accenture de EE.UU. por parte de un grupo de usuarios agradecidos que no conocía); ahora no sé qué será de él.

Nada hay más aburrido que un proselitista. Así que no proselitizo. Yo simplemente tecleaba y la gente, intrigada por lo que aparecía en mi pantalla, comenzó a preguntar. En unas semanas, SAS había desaparecido prácticamente de nuestra planta y algún pitonero tuvo que pasarse a R por motivos que ya no recuerdo.

Yo me fijé muy mucho en aquellas cosas que más interesaron a los neoconversos, aquellas cosas que realmente les interesaban y que ellos entendían que resultaban muy útiles en su trabajo. Y eran tres:



	  * Gráficos
	  * Shiny
	  * Documentos (incluidas presentaciones) en Rmarkdown


Esa gente estaba dispuesta a aprender las partes áridas y aburridas de R con tal de alcanzar algunos (o todos) de esos objetivos.

Nótese que no menciono punto alguno relativo a la estadística. Asúmase: la gente que trabaja de verdad con datos, raramente hace nada formalmente estadístico. En la frase anterior _formalmente_ se refiere a regresiones, pruebas estadísticas, p-valores, etc.; gráficos, tablas, etc. decentes _son_ estadística, por supuesto.

**II**

Año 2015, de vuelta ya de Zúrich, en Madrid. Organizo un curso de 12 horas con un objetivo muy concreto: contar lo mínimo necesario para alcanzar esos tres objetivos. Fue un curso abierto al público con una estructura de precios muy particular: el primer día se me habían de entregar 30 euros (10 por cada sesión restante). A la salida de ellas, yo devolvía 10 euros a los asistentes. Gratis, pues, de asistir; solo las ausencias costaban dinero.

Saqué poco pero pulí unos ficheros `.R` con algunas anotaciones explicativas.

Al poco, a la buena gente de [KSchool](https://kschool.com/) le interesó una oferta mía para impartir un curso de introducción a R dentro de su oferta académica. Pasó de 12 a 30 horas. Los ficheros `.R` crecieron en tamaño y se enriquecieron con más y más anotaciones.

Llegó un punto en que había más comentarios que código propiamente.

**III**

Entonces se le dio la vuelta al calcetín. En lugar de código con muchos comentarios, aquellos `.R` se convirtieron en texto con algunas líneas de código. Es decir, pasaron de `.R` a `.Rmd` ([`bookdown`](https://bookdown.org/), etc.).

Aparecieron más ejercicios, cambió un poco el estilo de redacción (aunque siempre trató de conservarse terso, sin concesiones a la pluma) y se añadió algún contenido satelital. Pero poco más. El libro sigue fiel a sus principios originales: conducir lo más rápidamente posible a sus lectores a los tres objetivos arriba indicados.

Por lo demás, dejé de dar cursos abiertos y gratis para gente formal del asunto; dejé luego de impartir el curso de introducción a R en KSchool (de hecho, ahora lo imparte un alumno de mi primera promoción, cosa que habla muy bien tanto de él como de mí) y ha sido el material con el que se ha impartido internamente en varias empresas, tanto por mi propia cuenta como de la mano de mi socia Luz Frías.

