---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2020-06-23 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:53:12.735310'
related:
- 2020-06-19-rulefit.md
- 2024-07-03-cortos-stats.md
- 2014-12-08-la-correlacion-ni-siquiera-implica-correlacion.md
- 2020-09-24-un-decepcionante-metodo-de-inferencia-robusta-para-glms-de-poisson.md
- 2024-05-02-falacia-ecologica.md
tags:
- glmnet
- lasso
title: ¿Cuándo falla lasso?
url: /2020/06/23/cuando-falla-lasso/
---

Una de las consecuencias funestas ---tal vez inesperadas e imprevistas--- de la actual arquitectura del mundo en que vivimos es que hay mucha gente (e instituciones, y libros, y artículos, y...) empeñada en enseñarte las cosas buenas y provechosas y muy especialmente en sus facetas que lo son más mientras que para aprender las malas dependes de la calle, la suerte y las pésimas compañías.

Así, te enseñan lasso y todo son parabienes.

Puedes sospechar que hay una contraparte oscura porque si no, ¿para qué _glmnet_?

Pero un día te tropiezas con cosas como [esta](https://insightr.wordpress.com/2017/06/14/when-the-lasso-fails/) (en resumen: cuando hay correlación entre variables que son importantes y variables que no; aunque, bien mirado, ¿cómo puede estar correlacionada una variable importante con una que no lo es?).