---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2010-11-27 19:25:58+00:00
draft: false
lastmod: '2025-04-06T19:06:37.470280'
related:
- 2018-11-16-colinealidad-y-posterioris.md
- 2011-08-01-dos-aplicaciones-c2bfsorprendentes-del-analisis-de-la-correlacion-canonica.md
- 2011-08-12-una-feliz-conjuncion-estadistico-algebraica.md
- 2020-09-08-mas-sobre-variables-instrumentales-con-r.md
- 2014-04-01-componentes-principales-para-quienes-cursaron-algebra-de-primero-con-aprovechamiento.md
tags:
- estadística
- excel
- covarianza
title: De la matriz a de covarianzas a la de correlaciones con Excel
url: /2010/11/27/de-la-matriz-a-de-covarianzas-a-la-de-correlaciones-con-excel/
---

Me preguntan cómo construir la matriz de correlaciones a partir de la de covarianzas con Excel. Mis lectores más versados en R conocerán la existencia de la función cov2cor (cuyo código fuente merece ser examinado).

Sin embargo, ¿cómo hacerlo con Excel? No es tan complicado, aunque infinitamente más prolijo: en la posición (i,j) de la matriz de correlaciones hay que asignar:

* el valor (i,j) de la correspondiente matriz de covarianzas
* dividido por la raíz cuadrada del producto de los valores (i,i) y (j,j) de la matriz de covarianzas.

Tan fácil como parece, implementarlo en Excel es poco menos que una tortura. Partiendo de una matriz de covarianzas A1:C3,

[![](/wp-uploads/2010/11/excel_covarianzas_1.png#center)
](/wp-uploads/2010/11/excel_covarianzas_1.png#center)

creamos una matriz adjunta de acuerdo con la fórmula que aparece en el gráfico:

[![](/wp-uploads/2010/11/excel_covarianzas_2.png#center)
](/wp-uploads/2010/11/excel_covarianzas_2.png#center)

Copiamos la nueva matriz y la pegamos trasponiendo los datos:

[![](/wp-uploads/2010/11/excel_covarianzas_3.png#center)
](/wp-uploads/2010/11/excel_covarianzas_3.png#center)

Finalmente, multiplicamos las tres matrices de acuerdo con la fórmula que aparece en el gráfico:

[![](/wp-uploads/2010/11/excel_covarianzas_4.png#center)
](/wp-uploads/2010/11/excel_covarianzas_4.png#center)

Quien haya seguido estas instrucciones habrá aprendido dos cosas:



1. Cómo convertir una matriz de covarianzas en una de correlaciones usando Excel.
2. Por qué Excel mata la [productividad](http://www.expansion.com/2010/01/15/economia-politica/economia/1263575201.html) (y si tu productividad mensual no excede los 1000 euros, además, a entender por qué eres un mileurista).