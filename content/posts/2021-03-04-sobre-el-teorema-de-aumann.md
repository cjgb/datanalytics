---
author: Carlos J. Gil Bellosta
date: 2021-03-04 09:13:55+00:00
draft: false
title: Sobre el teorema de Aumann

url: /2021/03/04/sobre-el-teorema-de-aumann/
categories:
- estadística
tags:
- aumann
- estadística bayesiana
---

_[[Del que ya hablé](https://www.datanalytics.com/2019/05/10/un-reciproco-para-el-teorema-de-bernstein-von-mises/) hace un tiempo desde una perspectiva diferente.]_

**Prioris**

A y B (dos personas) tienen la misma priori Beta(1, 1) ---que es uniforme en [0, 1]--- sobre la probabilidad de cara de una moneda.

**Datos**

Entonces A presencia una tirada de la moneda (a la que no asiste B) y es cara. Su priori se actualiza a una Beta(1, 2).

Luego B presencia una tirada de la moneda (a la que no asiste A) y es cruz. Su priori se actualiza a una Beta(2, 1).

**Acuerdo a la Aumann**

Finalmente, A y B se juntan, hablan de la moneda, y comentan que sus posterioris respectivas son Beta(1, 2) y Beta(2, 1).

---¡Ah! ---pensó A ---. Dado que la posteriori de B es ahora Beta(2, 1) es que ha tenido que haber visto una cruz en la tirada secreta; por tanto, esto es como si yo hubiese visto mi cara y su cruz. Así que voy a actualizar mi posteriori a Beta(2, 2). ¡Hablar con B ha enriquecido tanto mi cosmovisión!

Y, por su lado:

---¡Ah! ---pensó B ---. Dado que la posteriori de A es ahora Beta(1, 2) es que ha tenido que haber visto una cara en la tirada secreta; por tanto, esto es como si yo hubiese visto mi cruz y su cara. Así que voy a actualizar mi posteriori a Beta(2, 2). ¡Hablar con A ha enriquecido tanto mi cosmovisión!

De este modo, A y B llegaron a un acuerdo, vivieron felices y comieron perdices.

**Nota final:** como todo el mundo habrá averiguado llegado a este punto, A y B no usan Twitter.
