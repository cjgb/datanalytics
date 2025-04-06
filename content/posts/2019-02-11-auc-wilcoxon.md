---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2019-02-11 08:13:02+00:00
draft: false
lastmod: '2025-04-06T19:01:59.849960'
related:
- 2016-03-29-el-auc-es-la-probabilidad-de-que.md
- 2019-05-24-cotas-superiores-para-el-auc.md
- 2022-02-17-examenes-probabilisticos.md
- 2015-07-20-no-uses-el-test-de-wilcoxon-nos-dice-gelman.md
- 2016-01-25-comparaciones-de-tres-grupos-pruebas-vs-modelos.md
tags:
- auc
- modelos
- scorings
- spiegelhalter
- wilcoxon
title: AUC = Wilcoxon
url: /2019/02/11/auc-wilcoxon/
---

Construyo unos datos,

{{< highlight R >}}
n <- 30
si <- data.frame(res = "si",
    score = rnorm(n, 1, 1))
no <- data.frame(res = "no",
    score = rnorm(n, 0, 1))
dat <- rbind(si, no)
{{< / highlight >}}

que simulan los _scorings_ de un modelo hipótetico en el que comparo unos casos positivos y otros negativos.

Comparo con el test de Wilcoxon el _scoring_ según la etiqueta y normalizo (adecuadamente):

{{< highlight R >}}
test <- wilcox.test(score ~ res, data = dat)$statistic
test / n^2
{{< / highlight >}}

Por otro lado calculo el AUC:

{{< highlight R >}}
library(pROC)
my_roc <- roc(dat$res, dat$score)
auc(my_roc)
{{< / highlight >}}

¡Lo mismo!

Motivo: ambas expresiones dan la probabilidad de que el scoring de un sí elegido al azar sea superior al de un no elegido también al azar. Cosa que está superdocumentada en el ancho mundo.

Nota: no me había dado cuenta de la relación hasta [leer al siempre excelente Spiegelhalter](https://www.ncbi.nlm.nih.gov/pubmed/3786996).