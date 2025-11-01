---
author: Carlos J. Gil Bellosta
categories:
- nlp
- r
date: 2019-03-22
lastmod: '2025-11-01'
related:
- 2015-05-07-para-los-que-buscais-proyectos-de-analisis-visualizacion-de-datos.md
- 2012-09-28-tutorial-como-analizar-datos-de-twitter-con-r.md
- 2022-07-28-temas-nadaesgratis.md
- 2012-09-18-rdatamining-un-paquete-para-mineria-de-datos-con-r.md
- 2012-01-05-un-lematizador-para-el-espanol-con-r-ii.md
tags:
- lda
- nlp
- paquetes
- r
title: Análisis (clasificación, etc.) de textos muy cortos
url: /2019/03/22/analisis-clasificacion-etc-de-textos-muy-cortos/
---

Uno de mis proyectos permanentemente pospuestos es el del análisis de textos muy cortos. Se citarán Twitter y similares, aunque el € está en otros sitios, como los mensajes asociados a transferencias bancarias, reseñas o _keywords_.

Pero parece que no soy el único interesado en el tema. Otros con más tiempo y talento han desarrollado [`BTM`](https://cran.r-project.org/web/packages/BTM/index.html), que parece ser una versión modificada de LDA para el análisis de textos cortos.

El [artículo](https://github.com/xiaohuiyan/xiaohuiyan.github.io/blob/master/paper/BTM-WWW13.pdf) en el que está basado el paquete también es una buena referencia de técnicas y trucos cuando toca analizar este tipo de conjuntos de datos.