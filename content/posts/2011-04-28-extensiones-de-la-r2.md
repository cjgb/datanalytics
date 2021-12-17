---
author: Carlos J. Gil Bellosta
date: 2011-04-28 07:58:46+00:00
draft: false
title: Extensiones de la R2

url: /2011/04/28/extensiones-de-la-r2/
categories:
- estadística
- r
tags:
- estadística
- r
---

Sin ir más lejos, cojamos el primer ejemplo que aparece en `?ls`, es decir,


{{< highlight R "linenos=true" >}}
ctl <- c(4.17,5.58,5.18,6.11,4.50,4.61,5.17,4.53,5.33,5.14)
trt <- c(4.81,4.17,4.41,3.59,5.87,3.83,6.03,4.89,4.32,4.69)
group <- gl(2,10,20, labels=c("Ctl","Trt"))
weight <- c(ctl, trt)
lm.D9 <- lm(weight ~ group)
summary( lm.D9 )
{{< / highlight >}}


y hagamos


{{< highlight R "linenos=true" >}}
cor( weight, predict( lm.D9 ) )**2
{{< / highlight >}}


¿Qué obtenemos? Precisamente la R2 del modelo `lm.D9`. Esta relación abre la puerta a varias extensiones de esta medida de la bondad de ajuste a contextos en los que las expresiones _suma de cuadrados de..._ carecen de sentido.

En la UCLA mantienen una página sobre [la R2 y sus extensiones](http://www.ats.ucla.edu/stat/mult_pkg/faq/general/psuedo_rsquareds.htm) que seguro será del provecho de muchos de los lectores de esta bitácora.
