---
author: Carlos J. Gil Bellosta
categories:
- gráficos
- r
date: 2012-09-10 06:44:37+00:00
draft: false
lastmod: '2025-04-06T19:10:45.878417'
related:
- 2012-07-02-graficos-estadisticos-y-mapas-con-r.md
- 2011-04-26-graficos-vi-teoria.md
- 2013-12-27-tres-articulos-curiosos-sobre-graficos.md
- 2013-11-29-oscar-perpinan-sobre-graficos-base-vs-lattice-vs-ggplot2.md
- 2018-04-09-la-intrahistoria-de-mi-libro-de-r.md
tags:
- gráficos
- r
- mapas
title: '"Gráficos estadísticos y mapas con R", un análisis'
url: /2012/09/10/graficos-estadisticos-y-mapas-con-r-un-analisis/
---

Me dispongo hoy a analizar el libro _[Gráficos estadísticos y mapas con R](https://datanalytics.com/2012/07/02/graficos-estadisticos-y-mapas-con-r/)_ que anuncié hace unos días, aun sin haber tenido oportunidad de hojearlo.

Es un libro relativamente extenso, de casi cuatrocientas páginas a todo color. Y es poco perdonable que una editorial técnica como Díaz de Santos haya permitido que el código que aparece en el libro esté en Times New Roman. Pero bueno.

La estructura general del libro tiene forma de recetario: cómo hacer para construir un determinado tipo de gráfico. Se echa en falta una discusión más profunda sobre qué tipo de gráficos son más convenientes para representar ciertos tipos de datos, qué combinaciones de colores son las más adecuadas y, más en general, una serie de buenas prácticas para la representación cuantitativa de datos. Sobran por otra parte detalles demasiado prolijos sobre las distintas opciones, paletas, tipos de línea, etc., para los que el papel no es el soporte más adecuado. Un libro, que es un documento con vocación de permanencia, debería versar sobre los aspectos diacrónicos de su materia y dejar los sincrónicos a la documentación.

El libro tiene tres partes. La primera trata de gráficos básicos: de barras, de cajas, etc. También discute cuestiones como la manera de combinar varios gráficos en una única figura, etc. Es, tal vez, la parte más útil del libro, por más de que esté ampliamente documentada en otras partes. ¡Incluso enseña cómo generar tartas tridimensionales con R!

La segunda parte, la más extensa, trata de gráficos de uso específico, gráficos que se utilizan en determinado tipo de estudios. Por ejemplo, cómo crear pirámides de población, diagramas paleoecológicos, gráficos usados en control de calidad, etc. Aunque también incluye otros específicos para el análisis de la varianza, tablas de contingencia, etc. Un recetario.

La última, muy breve, discute cómo generar mapas usando un paquete de R, `mapq`, del que no tenía noticia, no está en CRAN y que debe de ser de los autores del libro. Puede ser descargado de un enlace facilitado en el libro junto con código y algunos gráficos, pero no puedo opinar sobre el origen de la información cartográfica. Misterios.

En general, me parece más una obra de biblioteca —para quienes todavía se levanten por libros en lugar de buscar en internet— que una que se lea de tapa a tapa. Resulta imperdonable que ignore paquetes avanzados para la representación gráfica de datos, como `ggplot2`, o que apenas profundice en lo que aportan otros como `lattice`.

No obstante, es bienvenida esta nueva aportación bibliográfica al acervo que poco a poco se va consolidando sobre R en español, reflejo del creciente interés en el lenguaje.