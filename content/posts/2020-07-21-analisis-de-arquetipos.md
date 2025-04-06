---
author: Carlos J. Gil Bellosta
categories:
- artículos
- ciencia de datos
- estadística
date: 2020-07-21 09:13:00+00:00
draft: false
lastmod: '2025-04-06T19:02:38.042067'
related:
- 2014-06-19-factorizaciones-positivas-de-matrices-igualmente-positivas.md
- 2019-01-24-nmds-y-un-poquito-mas-alla.md
- 2011-07-19-clustering-ii-c2bfes-replicable.md
- 2024-02-13-outliers-dos-modos.md
- 2016-11-07-las-dos-culturas-con-comentarios-de-2016.md
tags:
- arquetipos
- artículos
- breiman
- lda
- nmf
title: Análisis de arquetipos
url: /2020/07/21/analisis-de-arquetipos/
---

De eso trata [un artículo de los noventa de Breiman](https://digitalassets.lib.berkeley.edu/sdtr/ucb/text/379.pdf). Es decir, de encontrar dentro de conjuntos de datos conjuntos finitos de _sujetos puros_ que permiten representar cualquier otro como una mezcla (o combinación convexa) de ellos.

Ideas a vuelapluma:

* Cuando leo sobre el asunto, la palabra que no deja de aparecérseme es _outlier_. Curiosamente, la busco en el texto y se resiste a aparecer. Pero me aterra la posibilidad de estar caracterizando a los sujetos normales (¿aún se puede usar la expresión?) como combinación convexa de raritos.
* La técnica podía competir muy favorablemente con el _clústering_ tanto conceptualmente (resuelve el problema de la heterogeneidad de los _clústers_) como operativamente (se podrían extraer para algún fin los sujetos que participasen en una proporción determinada de un cierto arquetipo).
* En el fondo, se solapa con otras técnicas bien establecidas y que hacen cosas parecidas como LDA (con D de Dirichlet) o NMF (factorización no negativa de matrices).