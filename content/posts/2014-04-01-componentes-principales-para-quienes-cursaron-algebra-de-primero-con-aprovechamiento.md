---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- estadística
date: 2014-04-01 07:37:42+00:00
draft: false
lastmod: '2025-04-06T19:07:23.418746'
related:
- 2014-06-19-factorizaciones-positivas-de-matrices-igualmente-positivas.md
- 2014-04-09-la-escala-natural-de-la-varianza.md
- 2021-06-01-pca-robusto.md
- 2011-08-12-una-feliz-conjuncion-estadistico-algebraica.md
- 2014-04-22-reponderacion-de-componentes-un-ejemplo.md
tags:
- componentes principales
- estadística
- ciencia de datos
- pca
title: Componentes principales para quienes cursaron álgebra de primero con aprovechamiento
url: /2014/04/01/componentes-principales-para-quienes-cursaron-algebra-de-primero-con-aprovechamiento/
---

Quienes cursaron su álgebra de primero con aprovechamiento —los que no, pueden [ponerse al día en 3:47 minutos](https://www.youtube.com/watch?v=JEYLfIVvR9I)— aprendieron que una matriz $X$ puede descomponerse de la forma

$$ \mathbf{X} = \mathbf{UDV}$$

donde $\mathbf{U}$ y $\mathbf{V}$ son matrices ortonormales y $\mathbf{D}$ es diagonal. Si los elementos de la diagonal de $\mathbf{D}$ son $d_1>d_2>\dots$ y los últimos son pequeños, entonces

$$ \mathbf{X} \approx \mathbf{UD_0V}$$

donde $\mathbf{D_0}$ es la matriz en la que se han sustituido los $d_i$ _despreciables_ por ceros. Si $\mathbf{D_0}$ tiene m elementos diagonales no nulos, solo hay m columnas de $\mathbf{U}$ y m filas de $\mathbf{V}$ que juegan un papel efectivo en la proximación anterior. Por lo tanto se puede reescribir de la forma

$$ \mathbf{X} \approx \mathbf{\tilde{U}\tilde{D}\tilde{V}}$$

donde a las matrices tildadas se les han eliminado las filas y columnas no operativas. En particular, $\mathbf{\tilde{U}}$ tiene m columnas.

Si se escribe ahora

$$ \mathbf{X}\mathbf{V}^T \approx \mathbf{\tilde{U}\tilde{D}\tilde{V}}\mathbf{\tilde{V}}^T = \mathbf{\tilde{U}\tilde{D}}$$

se tiene todo lo que hay que saber sobre las componentes principales:

1. que una combinación lineal de las columnas de $\mathbf{X}$ (a los coeficientes los llaman _loadings_ por ahí)
2. genera unas nuevas variables $\mathbf{\tilde{U}\tilde{D}}$ (_scores_)
	3. que además son ortogonales por construcción
4. pero en menor número que las originales (reducción de la dimensionalidad) y que de alguna manera,
5. recogen la mayor parte de lo que es necesario saber sobre $\mathbf{X}$.

¿A qué viene este comentario tan, quizás, extemporáneo? A que el otro día estaba hablando con un físico (que, además, sí, superó su álgebra de primero con aprovechamiento) que no conocía eso del PCA. Así que fuimos a su [libro](http://www.cs.ubc.ca/~murphyk/MLbook/) y encontramos en el capítulo en cuestión un vasto cementario de árboles malgastados para que sobre sus cadáveres, con tinta, se imprimiesen circunloquios prolijos sobre problemas variacionales que vienen poco al caso y algoritmos de segunda división para resolverlos. Pero poco de lo que podía ponerlo a trabajar en cinco minutos.

Señores, al grano. No podemos leer tanta página, tanta formulita y tanto algoritmo de cinco pasos en que el quinto reenvía de nuevo al segundo. Ya [pagamos a otros para que se ocupen de esas irrelevancias](https://datanalytics.com/2013/08/28/que-ha-hecho-el-csic-por-mi/). Nosotros usamos PCA porque tenemos tajo.