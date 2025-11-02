---
author: Carlos J. Gil Bellosta
categories:
- gráficos
date: 2014-03-11 07:14:15+00:00
draft: false
lastmod: '2025-04-06T19:01:19.261372'
related:
- 2012-09-12-el-arte-funcional-una-revision-personal.md
- 2014-12-05-r-markdown-a-la-tufte.md
- 2011-03-22-graficos-i-introduccion.md
- 2014-05-13-visual-explanations-de-tufte-el-primer-grafico-estadistico.md
- 2011-04-26-graficos-vi-teoria.md
tags:
- graficaca
- gráficos
- libros
- powerpoint
- tufte
- visualización
title: '"Beautiful evidence", de Tufte'
url: /2014/03/11/beautiful-evidence-de-tufte/
---

Acabo de leer Beautiful Evidence, el último de los libros de [E. Tufte](http://en.wikipedia.org/wiki/Edward_Tufte) y voy a recoger aquí unas notas sobre él mismo. Espero que sirvan tanto a los interesados en el asunto como a mí mismo.

El libro consta de nueve capítulos prácticamente independientes entre sí. Los dos últimos son perfectamente prescindibles: están a medio caballo entre el autobombo y el márqueting; parece que Tufte es también escultor y no pierde ocasión de darlo a conocer. Tal vez por si entre nosotros sus lectores pudiera haber algún marchante de arte.

El primero de los capítulos relevantes, _Mapped Pictures_, insiste en la conveniencia de etiquetar, incluir escalas y anotaciones en gráficos y fotos con el objetivo de aumentar su poder expresivo y su eficacia para transmitir ideas. Este procedimiento, habitual en la confección de planos y mapas, puede extenderse a otros ámbitos. En el capítulo muestran algunos ejemplos tanto de cuando la técnica se ha usado efectivamente como en casos en los que se ha desaprovechado innecesariamente.

El segundo habla de los [_sparklines_](http://en.wikipedia.org/wiki/Sparkline), de algunos de sus usos y generalizaciones. Insiste Tufte en el poder del ojo para percibir detalles minúsculos: piénsese en los remates tipográficos o los trazos de los dibujos a plumilla. Casi microscópicos, aun así perceptibles. Esta enorme capacidad para el detalle de los órganos visuales hace perfectamente posible —además de recomendable— crear visualizaciones sumamente densas, de las que los _sparklines_ son apenas un caso de un universo más amplio de posibilidades.

El tercer capítulo habla de diagramas y flechas y como su uso, combinado con gráficos y anotaciones adecuadas permite la representación condensada y eficaz de procesos y relaciones. Los [diagramas de Feynman](http://es.wikipedia.org/wiki/Diagrama_de_Feynman) le sirven de inspiración y ejemplo. Cierto tipo de diapositivas de PowerPoint con las que algunos gustan representar flujos y procesos, de contraejemplo de cómo pueden llegarse a malemplear.

El siguiente capítulo, _Words, Numbers, Images — Together_ insiste en la conveniencia de la yuxtaposición, de la proximidad física de los elementos, es decir, palabras, números e imágenes, con los que se describe una idea (se sobreentiende que en un escrito). El mismo libro de Tufte es un ejemplo sincero: las notas y aclaraciones no están agrupadas al final del libro o del capítulo correspondiente. Ni siquiera como pies de página. Son todas notas al margen, inmediatas al texto o gráfico al que hacen referencia. Además, Tufte se las arregla para que en su libro no haya que pasar páginas hacia adelante y hacia atrás en pos del texto al que se refiere una imagen o el gráfico que se menciona en el texto. De alguna manera, sus páginas —y eso que probablemente tenga un nombre: el conjunto formado por las dos páginas que uno tiene delante al abrir un libro— son autocontenidas en ese sentido. ¡Cómo irritan a Tufte esos libros con láminas de gráficos insertados en una especie de separata al final!

El capítulo _The Fundamental Principles of Analytical Design_ puede ser el que más interese a la intersección de mis y sus lectores. Se sirve del análisis del [archiconocido diagrama de flujo de Minard](http://en.wikipedia.org/wiki/Charles_Joseph_Minard) para desgranar las características más importantes de una visualización de datos:

* debe mostrar comparaciones, contrastes y diferencias;
* debe destacar también —¡de conocerse!— las relaciones de causalidad, el mecanismo;
* debe ser altamente multivariante; aunque el papel sea bidimensional, de restringirnos a en ese marco, no podremos representar un universo _profundamente multivariante_;
* debe, mediante anotaciones u otras técnicas, incorporar la evidencia disponible;
* debe estar documentado: quién hizo qué, qué datos y escalas, se utilizaron;
* subraya que lo más importante, lo fundamental, es el contenido.

El siguiente capítulo habla de la _corrupción de la evidencia_. Usa el término corrupción incluso en términos morales. Porque, argumenta, presentar información tiene una dimensión ética en tanto que induce comportamientos. La primera de las corrupciones es la de presentar efectos sin causa. Las cosas, simplemente, suceden y no se sabe bien por qué: nótese la diferencia entre "Juan mató a Pedro" y "Pedro fue asesinado". Otra fuente de corrupción es la omnipresente selección de la evidencia, el famoso _cherrypicking_. Y una última causa de corrupción de la evidencia es la de [la famosa graficaca](http://www.datanalytics.com/tag/graficaca/) (_chartjunk_). Aquí se me ocurre que el capítulo entero pudiese ser una [petición de principio](http://en.wikipedia.org/wiki/Begging_the_question) de quince páginas para acabar tachando de inmorales a quienes, al final, pueden estar únicamente pecando de mal gusto.

Y el último de los capítulos relevantes habla [sobre PowerPoint](http://www.wired.com/wired/archive/11.09/ppt2.html). Es una herramienta que invita por construcción a cometer todos los pecados cuya existencia nos han revelado los capítulos anteriores. Ironiza Tufte con que PowerPoint nos obliga a conformarnos con

[![egipto_tufte](/img/2014/03/egipto_tufte.png#center)
](/img/2014/03/egipto_tufte.png#center)

cuando es posible tener

[![renacimiento_tufte](/img/2014/03/renacimiento_tufte.png#center)
](/img/2014/03/renacimiento_tufte.png#center)

¿Alternativa al estilo de presentación de PowerPoint? Reemplazar las presentaciones por documentos e informes técnicos, construir frases con su sujeto, verbo y predicado. Organizarlas en párrafos y estos en secciones y capítulos. Acompañarlos de gráficos con alta densidad de información y debidamente anotados.