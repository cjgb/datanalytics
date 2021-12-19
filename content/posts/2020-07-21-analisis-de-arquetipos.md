---
author: Carlos J. Gil Bellosta
date: 2020-07-21 09:13:00+00:00
draft: false
title: Análisis de arquetipos

url: /2020/07/21/analisis-de-arquetipos/
categories:
- artículos
- ciencia de datos
- estadística
tags:
- arquetipos
- artículos
- breiman
- lda
- nmf
---

De eso trata [un artículo de los noventa de Breiman](https://digitalassets.lib.berkeley.edu/sdtr/ucb/text/379.pdf). Es decir, de encontrar dentro de conjuntos de datos conjuntos finitos de _sujetos puros_ que permiten representar cualquier otro como una mezcla (o combinación convexa) de ellos.

Ideas a vuelapluma:

* Cuando leo sobre el asunto, la palabra que no deja de aparecérseme es _outlier_. Curiosamente, la busco en el texto y se resiste a aparecer. Pero me aterra la posibilidad de estar caracterizando a los sujetos normales (¿aún se puede usar la expresión?) como combinación convexa de raritos.
* La técnica podía competir muy favorablemente con el _clústering_ tanto conceptualmente (resuelve el problema de la heterogeneidad de los _clústers_) como operativamente (se podrían extraer para algún fin los sujetos que participasen en una proporción determinada de un cierto arquetipo).
* En el fondo, se solapa con otras técnicas bien establecidas y que hacen cosas parecidas como LDA (con D de Dirichlet) o NMF (factorización no negativa de matrices).