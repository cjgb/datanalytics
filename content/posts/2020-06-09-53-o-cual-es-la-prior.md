---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2020-06-09 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:46:00.893360'
related:
- 2020-06-16-coronavirus-prevalencia-sensibilidad-y-especificidad.md
- 2020-04-27-muestreo-sensibilidad-y-especificidad.md
- 2020-05-21-analisis-bayesiano-de-pruebas-con-sensibilidad-especificidad-desconocida.md
- 2020-05-15-un-marco-sobre-el-que-reflexionar-sobre-el-estudio-de-seroprevalencia-enecovid19.md
- 2013-05-16-el-error-en-las-encuestas-cuentas-en-una-servilleta.md
tags:
- coronavirus
- enecovid19
- especificidad
- estadística
- ine
- isciii
title: 53 (o, ¿cuál es la prior?)
url: /2020/06/09/53-o-cual-es-la-prior/
---

En la [documentación técnica del estudio ENE-COVID19](https://www.mscbs.gob.es/ciudadanos/ene-covid/docs/ESTUDIO_ENE-COVID19_INFORME_FINAL.pdf) (recuérdese: INE + ISCIII) se describe un estudio de fiabilidad previo del test rápido (sección A1.2) que se anuncia así:

>Según el fabricante, el test tiene una sensibilidad del 88% y 97% para determinar IgM e IgG respectivamente, y una especificidad de 100% frente a ambos isótopos. Para comprobar el comportamiento del test elegido, se han llevado a cabo dos estudios de fiabilidad.

Veamos en qué consisten.

>El primero de ellos incluyó 97 sueros procedentes de personal sanitario que había sido diagnosticado de COVID19 por PCR en un hospital de Madrid y en los que la muestra de sangre se extrajo cuando ya estaban asintomáticos. Como controles negativos se estudiaron 53 muestras anónimas de suero extraídas para diagnóstico de otro tipo de patógenos anteriores al 8 de diciembre de 2019. La sensibilidad global (IgM+ ó IgG+) fue del 84,5% (73,2% considerando sólo IgM+ y 79,4% considerando IgG+), mientras que la especificidad global fue del 98,2% (98,1% para IgM- y 100% para IgG-).

Es decir, para la especificidad cuentan con 53 sujetos (sanos) de los cuales 1 ha dado positivo (que es la manera de decir en cristiano que la especificidad es del 98.1).

Luego, en la documentación suceden cosas interesantísimas que no nos cuentan para acabar dando por buenos los siguientes números:

>Sensibilidad global: 82,1% con ambos tipos de muestra. Especificidad global del 99%.

Pero, sin entrar en mayores disquisiciones,

{{< highlight R >}}
prop.test(52, 53)$conf.int
# [1] 0.8862027 0.9990143
{{< / highlight >}}

y por otro lado,

{{< highlight R >}}
prop.test(53, 53)$conf.int
# [1] 0.9158109 1.0000000
{{< / highlight >}}

e incluso, si se combinan las pruebas del ambos IgX,

{{< highlight R >}}
prop.test(105, 106)$conf.int
# [1] 0.9409899 0.9995073
{{< / highlight >}}

Así que especificar un valor del 99% implica el uso de algún tipo de priori informativa. U otras cosas.

**Nota final:** Insertar la estimación puntual que da un modelo en otro es tan... tan... de gañán...