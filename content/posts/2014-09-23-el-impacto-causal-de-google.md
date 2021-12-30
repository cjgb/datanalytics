---
author: Carlos J. Gil Bellosta
date: 2014-09-23 07:13:07+00:00
draft: false
title: El impacto (causal) de Google

url: /2014/09/23/el-impacto-causal-de-google/
categories:
- estadística
tags:
- causalidad
- estadística
- google
- paquetes
- r
---

Voy a escribir sobre un artículo como no debe hacerse: sin haberlo leído. Los bayesianos dirían que esta opinión que aquí voy a vertir es mi _prior_ para cuando encuentre el tiempo y bajo la cual matizaré lo que en el se diga. Lo advierto, en todo caso, para que quien me lea no renuncie al sanísimo escepticismo.

Voy a hablar de [_Inferring causal impact using Bayesian structural time-series models_](http://research.google.com/pubs/pub41854.html) y del paquete de R que lo acompaña, [`CausalImpact`](https://google.github.io/CausalImpact/CausalImpact.html), cuyos autores trabajan en Google.

Estaba al tanto de barruntos sobre lo que hacía Google en ese ámbito. Lo revelaba Hal Varian en la sección 8.1 de [_Big Data: New Tricks for Econometrics_](http://people.ischool.berkeley.edu/~hal/Papers/2013/ml.pdf). La mención de la causalidad ya levantó entonces todas mis sospechas.

Mis comentarios respecto al artículo y el paquete son dos. Primero, según el resumen del aquel,

 >this paper proposes to infer causal impact on the basis of a diffusion-regression state-space model that predicts the counterfactual market response that would have occurred had no intervention taken place.

Contrafactualidad, sin embargo, es algo un concepto mucho más cotidiano que causalidad. Contrafactualidad, según se desprende de la descripción superficial de lo que hacen los autores no es otra cosa que la especificación de una hipótesis nula y la construcción de un universo alternativo y artificial que trataría de simular la evolución del sistema de ser cierta. De que los efectos lleven a suponerla más o menos creíble (hasta el punto de _aceptarla_ o _rechazarla_, en la jerga del p-valor) a que exista una relación causal entre los unos y lo otro media mundo y mitad. Como de costumbre.

Hay que ser muy torero para hablar de causalidad. Más que, incluso, Google.

El segundo comentario es que tampoco lo que nos trae Google es algo novísimo bajo el sol. P.e., en el artículo (¡de 2006!) [_Formulating State Space Models in R with Focus on Longitudinal Regression Models_](http://www.jstatsoft.org/v16/i01/paper) se plantea el siguiente problema:

 >Let $latex y_t$ be the monthly numbers of light goods van drivers killed in road accidents, from January 1969 to December 1984 (192 observations). On January 31st, 1983, a seat belt law was introduced. The interest is to quantify the effect of the seat belt legislation law.

Que es, observarán mis lectores, muy similar al que ocho años después replantea Google. En la tercera gráfica del artículo, que reproduzco a continuación, los autores muestran cómo han sido capaces de dar con el efecto causal de la ley en cuestión.

[![seatbelt](/wp-uploads/2014/09/seatbelt.png#center)
](/wp-uploads/2014/09/seatbelt.png#center)

Salvo que dichos autores se abstuvieron de escribir _causal_ en su artículo. A diferencia de otros...