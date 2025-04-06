---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2016-05-13 08:13:42+00:00
draft: false
lastmod: '2025-04-06T18:53:30.514731'
related:
- 2020-07-09-sobre-la-curva-roc-como-medida-de-bondad-de-clasificadores.md
- 2016-03-29-el-auc-es-la-probabilidad-de-que.md
- 2020-02-07-la-densidad-de-una-cauchy-bivariada-es-cuasiconvexa.md
- 2019-05-24-cotas-superiores-para-el-auc.md
- 2020-02-20-curvas-de-equiprobabilidad-de-la-t-bivariada.md
tags:
- clasificación
- estadística
- roc
- convexidad
title: 'Curvas ROC no cóncavas: ¿por qué, por qué, por qué?'
url: /2016/05/13/curvas-roc-no-concavas-por-que-por-que-por-que/
---

El otro día me enseñaron una rareza: una curva ROC no cóncava. Digamos que como

![curva_roc_no_concava](/wp-uploads/2016/05/curva_roc_no_concava.png#center)

El gráfico que la acompaña [aquí](http://www.bmva.org/bmvc/1998/pdf/p082.pdf),

![curva_roc_no_concava_subyacente](/wp-uploads/2016/05/curva_roc_no_concava_subyacente.png#center)

explica un par de cositas. El artículo enlazado discute cómo combinar clasificadores para construir otro cuya curva ROC sea la [envolvente convexa](https://es.wikipedia.org/wiki/Envolvente_convexa) del original.