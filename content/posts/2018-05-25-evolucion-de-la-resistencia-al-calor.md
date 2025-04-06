---
author: Carlos J. Gil Bellosta
categories:
- estadística
- números
date: 2018-05-25 08:13:36+00:00
draft: false
lastmod: '2025-04-06T19:02:49.281276'
related:
- 2020-09-14-recordatorio-no-olvideis-restar-los-fallecimientos-atribuibles-al-calor-en-la-estimacion-del-efecto-de-la-segunda-ola.md
- 2021-12-14-sobre-el-exceso-de-mortalidad-en-noviembre-de-2021.md
- 2018-01-09-mortalidad-en-carretera-contada-de-una-manera-distinta.md
- 2018-09-17-el-anomalo-verano-de-2018.md
- 2022-07-21-critica-critica-momo.md
tags:
- defunciones
- modelos
- mortalidad
title: Evolución de la resistencia al calor
url: /2018/05/25/evolucion-de-la-resistencia-al-calor/
---

En [2003 hubo una ola de calor](https://es.wikipedia.org/wiki/Ola_de_calor_en_Europa_en_2003) de tal magnitud que el ministerio de sanidad puso en marcha un [plan especial](https://www.msssi.gob.es/ciudadanos/saludAmbLaboral/planAltasTemp/2017/Plan_nacional_actuaciones_preventivas.htm) de seguimiento, prevención, monitorización, etc. de ese tipo de fenómenos.

La hipótesis que me propongo explorar aquí es la siguiente: que gracias a la prevención, a la popularización del aire acondicionado, a la mejora del nivel de vida, etc. el impacto del calor (en forma de olas) sobre la mortalidad decrece en el tiempo. Casi ninguno de vosotros podéis estudiarla, pero yo sí. No os puedo contar los detalles pero sí las líneas generales del estudio.

Existe un modelo de predicción de la mortalidad. Incluye un coeficiente, el coeficiente, que relaciona incrementos de la tasa de mortalidad con una determinada medida del exceso de temperatura (sobre la que no entraré). Es un coeficiente distinto por provincia (modelo de efectos aleatorios, en concreto). Cualquier intento de interpretar su valor absoluto conduce necesariamente al error (así que no lo intentes). El coeficiente se estima sobre los datos de los últimos cinco años. Sin embargo, es posible correr el modelo en ventanas sucesivas de cinco años, las que comienzan en 2000, 2001, etc. hasta el 2012 (para alcanzar el verano de 2017) y ver la evolución de estos coeficientes.

De ser cierta mi hipótesis de partida, debería observarse una tendencia global negativa en sus valores.

Pero:

![](/wp-uploads/2018/05/coeficientes_mortalidad.png#center)


Lo cual es un éxito parcial. Sí que se aprecia una ligera tendencia negativa en los primeros años, pero algo pasa después que se me escapa. Y que puede ser... algo que mejorar en el modelo. O que el carácter excesivamente caluroso de los últimos veranos,

![](/wp-uploads/2018/05/temperaturas_verano.png#center)


haya afectado al modelo. O que...

No va a ser el envejecimiento de la población: este afectaría a la tasa que represento más arriba (los coeficientes son mucho mayores para los tramos de edad más elevados) pero la evolución sería mucho menos súbita. Debería por tanto repetir el análisis por tramo de edad, pero ya no será hoy.