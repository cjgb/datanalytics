---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2016-11-16 08:13:02+00:00
draft: false
lastmod: '2025-04-06T18:56:40.590646'
related:
- 2020-09-17-una-herramienta-para-el-analisis-no-parametrico-de-series-temporales.md
- 2012-06-25-para-los-expertos-en-series-estadisticas-ii.md
- 2024-02-13-outliers-dos-modos.md
- 2017-10-20-he-tratado-de-contrastar-una-hipotesis-sin-exito-asi-que-solo-publico-el-subproducto.md
- 2023-01-16-autoencoders-consejos.md
tags:
- anomalías
- anomalydetection
- paquetes
- r
- series temporales
title: Detrás de la detección de anomalías en series temporales
url: /2016/11/16/detras-de-la-deteccion-de-anomalias-en-series-temporales/
---

Por azares, me ha tocado lidiar con eso de la detección de anomalías. Que es un problema que tiene que ver con dónde colocar las marcas azules en

![anomaly_detection](/wp-uploads/2016/11/anomaly_detection.png#center)

El anterior es el gráfico construido con los datos de ejemplo del [paquete `AnomalyDetection`](https://github.com/twitter/AnomalyDetection). De hecho, así:

{{< highlight R >}}
library(AnomalyDetection)

data(raw_data)
res <- AnomalyDetectionTs(raw_data,
    max_anoms=0.02,
    direction='both', plot=TRUE)
res$plot
{{< / highlight >}}

Aparentemente, `AnomalyDetectionTs` hace lo que cabría sospechar. Primero, una descomposición de la serie temporal, tal como

{{< highlight R >}}
myts <- raw_data$count
myts <- ts(myts, start = c(1, 841), frequency = 24 * 60)
plot(stl(myts, "per"))
{{< / highlight >}}

es decir,

![anomaly_detection_stl](/wp-uploads/2016/11/anomaly_detection_stl.png#center)

para luego utilizar alguno de esos procedimientos de detección de _outliers_ sobre los residuos, la gráfica de más abajo). Precisamente, [este](http://www.itl.nist.gov/div898/handbook/eda/section3/eda35h3.htm).

**Nota:** Se me ha olvidado advertir arriba y prominentemente que esta entrada no iba a ser del gusto de quienes por _practitioners_ se tienen. No voy a criticar a nadie por, siempre que no sea en presencia de niños, hacer ostentación del desinterés por conocer el funcionamiento de las cosas. Me parece tan poco propio del ser humano que, a falta de más detalles, me quedaré con la impresión de que lo intentó y no pudo y pasaré a otra cosa.

Me consuela pensar, no obstante, que si alguno ha llegado hasta donde casi termina la entrada —sea por accidente, inercia o, peor aún, curiosidad— habrá prevalecido el provecho sobre el perjuicio que estas pocas líneas con muchas fotos le puedan haber causado.