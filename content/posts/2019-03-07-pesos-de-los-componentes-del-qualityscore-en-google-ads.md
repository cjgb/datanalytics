---
author: Carlos J. Gil Bellosta
categories:
- consultoría
- r
date: 2019-03-07 08:13:34+00:00
draft: false
lastmod: '2025-04-06T18:59:36.832204'
related:
- 2020-06-29-sobremuestreando-x-y-no-y.md
- 2024-06-20-mas-r-cuadrado.md
- 2022-03-10-diagramas-causales-hipersimples-1-errores.md
- 2020-07-17-mas-sobre-la-presunta-sobredispersion-en-el-modelo-de-poisson.md
- 2014-02-06-experimentos-con-el-paquete-gbm.md
tags:
- google ads
- regresión lineal
- r
title: Pesos de los componentes del QualityScore en Google Ads
url: /2019/03/07/pesos-de-los-componentes-del-qualityscore-en-google-ads/
---

El llamado QualityScore tiene su relevancia en Google Ads. Es un indicador con valores entre 1 y 10 asignado por Google que se basa en tres variables que están descritas por ahí:

* PostClickQualityScore
* SearchPredictedCtr
* CreativeQualityScore

Se trata de variables categóricas con tres niveles: en / por encima de / por debajo de la media.

Haciendo

{{< highlight R >}}
modelo <- lm(QualityScore ~ PostClickQualityScore +
    SearchPredictedCtr + CreativeQualityScore,
    data = tmp)

summary(modelo)
{{< / highlight >}}

se obtiene

{{< highlight R >}}
Call:
lm(formula = QualityScore ~ PostClickQualityScore + SearchPredictedCtr +
    CreativeQualityScore, data = tmp)

Residuals:
        Min       1Q   Median       3Q      Max
-0.25003 -0.07395  0.00775  0.06344  0.86470

Coefficients:
                                    Estimate Std. Error t value Pr(>|t|)
(Intercept)                        1.079603   0.008688   124.3   <2e-16 ***
PostClickQualityScoreAVERAGE       2.114012   0.009037   233.9   <2e-16 ***
PostClickQualityScoreABOVE_AVERAGE 3.856228   0.008448   456.5   <2e-16 ***
SearchPredictedCtrAVERAGE          1.137396   0.003284   346.4   <2e-16 ***
SearchPredictedCtrABOVE_AVERAGE    3.055694   0.004707   649.2   <2e-16 ***
CreativeQualityScoreAVERAGE        0.999580   0.004274   233.9   <2e-16 ***
CreativeQualityScoreABOVE_AVERAGE  2.000725   0.003862   518.1   <2e-16 ***
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

Residual standard error: 0.1574 on 11426 degrees of freedom
Multiple R-squared:  0.9915,	Adjusted R-squared:  0.9915
F-statistic: 2.212e+05 on 6 and 11426 DF,  p-value: < 2.2e-16
{{< / highlight >}}

Que no merece mayor explicación. Creo.