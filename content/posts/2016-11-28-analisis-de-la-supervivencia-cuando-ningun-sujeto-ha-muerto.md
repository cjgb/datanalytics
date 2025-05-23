---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2016-11-28 08:13:21+00:00
draft: false
lastmod: '2025-04-06T19:00:31.512672'
related:
- 2020-03-11-analisis-de-la-supervivencia-cuando-todas-las-observaciones-estan-censuradas.md
- 2020-05-28-sobre-la-funcion-de-riesgo-en-el-analisis-de-la-supervivencia.md
- 2024-05-23-espeanza-vida-covid.md
- 2019-07-03-modelizacion-de-retrasos-una-aplicacion-del-analisis-de-supervivencia.md
- 2020-05-29-no-leais-nada-de-lo-que-diga-este-inepto-no-sabe-por-donde-le-pega-el-aire.md
tags:
- problema
- r
- supervivencia
title: Análisis de la supervivencia cuando ningún sujeto ha muerto
url: /2016/11/28/analisis-de-la-supervivencia-cuando-ningun-sujeto-ha-muerto/
---

Me ha sobrevenido un problema de análisis de supervivencia curioso: ningún sujeto ha muerto. Dicho de otra manera, todas mis observaciones están censuradas por la derecha.

Los datos recogen la [antigüedad de la cámara de fotos de los visitantes de cierto blog](http://micro4tercios.com/foro/viewtopic.php?f=5&t=26600). Y debería uno poder estimar cada cuántos años renuevan la cámara, es decir, la vida promedio de esos aparatejos. Si embargo, no tenemos información de la edad de las cámaras en el momento de la renovación. Solo de su edad _hoy_. ¡Todas las observaciones están _censuradas_ por la derecha!

Así que `survreg` no puede converger: se va para la derecha. ¿Qué impide que los sujetos tengan vida infinita?

![live_forever](/wp-uploads/2016/11/live_forever.jpg)

Estoy dándole vueltas a la cabeza con este problema. También he buscado algo por ahí, pero no he dado con la discusión de algún problema parecido por ninguna parte.

He simulado la edad de una cohorte de cámaras que se mueren según una Weibull (¿por qué no una Weibull? se usa mucho para estimar la vida de aparatejos) de diversos parámetros. Pero aún no sé cómo casar datos con simulaciones (¿momentos?).

Así que si alguien tiene una idea al respecto... ¡Que no deje pasar la ocasión de ilustrar al resto en los comentarios!

Finalmente, por si alguien quiere echarle un vistazo a los datos, los puede bajar así:

{{< highlight R >}}
library(rvest)

res <- read_html("http://micro4tercios.com/foro/viewtopic.php?f=5&t;=26600")
res <- html_nodes(res,
                xpath='//*[@class="polls"]/dl/dd[@class="resultbar"]')
res <- as.numeric(html_text(res))
res <- res[!is.na(res)]

edad.camaras <- data.frame(tiempo = 0.5 * (0:(length(res)-1)) + 0.25,
                            numero = res)
{{< / highlight >}}