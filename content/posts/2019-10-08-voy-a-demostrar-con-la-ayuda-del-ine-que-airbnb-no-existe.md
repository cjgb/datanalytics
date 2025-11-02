---
author: Carlos J. Gil Bellosta
categories:
- números
- r
date: 2019-10-08 09:13:31+00:00
draft: false
lastmod: '2025-04-06T18:57:59.896996'
related:
- 2018-09-26-asi-de-floja-esta-la-evidencia-cientifica-sobre-el-impacto-de-airbnb-en-el-mercado-inmobiliario.md
- 2019-10-25-gente-que-toma-la-causalidad-en-vano.md
- 2016-09-15-seguro-que-aplica-lo-del-secreto-estadistico.md
- 2014-10-30-y-si-no-se-mantuvieran.md
- 2011-10-10-las-proyecciones-de-la-poblacion-de-espana-a-corto-plazo-del-ine-no-valen-para-un-carajo.md
tags:
- airbnb
- datos públicos
- ine
- r
- turismo
title: Voy a demostrar (con la ayuda del INE) que Airbnb no existe
url: /2019/10/08/voy-a-demostrar-con-la-ayuda-del-ine-que-airbnb-no-existe/
---

Tan vasto es el fenómeno Airbnb que malo será no haya dejado traza en las estadísticas oficiales. Que como oficiales, son verdad.

No podemos hacer caso a las estadísticas de ocupación hotelera del INE porque son de lo de que dicen: hoteles (y asimilados). Airbnb tiene que dejarse notar en otra parte.

¿Cuál? Frontur, la estadística de movimientos turísticos en frontera del INE. (Sin enlace: los enlaces del INE van y vienen). Las cifras de Frontur proceden de encuestas a turistas que salen de España a los que se somete a un cuestionario y cuyos resultados se extrapolan al total de la población extranjera que circulan por las fronteras. Así que, a diferencia de la estadística de ocupación hotelera (donde el INE solo adquiere información de turistas que pernoctan en hoteles), en esta encuesta son los turistas, independientemente de donde hayan dormido, los que dicen dónde lo hicieron. Y los resultados son estos:

![](/img/2019/10/frontur_alojamiento.png#center)

(Cuidado al leer la escala de los distintos ejes: las pernoctaciones en hoteles son superiores casi de un orden de magnitud al resto).

Y la pregunta es: ¿dónde está Airbnb y su vertiginosa expansión hasta terminar con el centro de nuestras ciudades tal como lo conocemos? La verdad, no se aprecia.

Claro, estamos considerando solo los turistas extranjeros y no los nacionales, que probablemente sean más. Pero (excusa) el INE no nos proporciona otra cosa y (argumento), si tan, tan grande es Airbnb y si razón llevan los que se quejan de los guiris borrachos que trae, algo debería notarse.

Más. Uno podría encontrar que sí, que la cifra de pernoctaciones hoteleras crece y que, bueno, el turista resacoso de la frontera bien podría llamar hotel a lo que realmente es el 3ºB de tu bloque. Y sí, las pernoctaciones presuntamente hoteleras suben. Pero, mirad y asombraos de lo bien funciona la estadística oficial:

![](/img/2019/10/ocupacion_hotelera.png#center)

Son cifras de la [nota de prensa de la encuesta de ocupación hotelera de agosto de 2019](https://www.ine.es/daco/daco42/prechote/cth0819.pdf). Son hoteles y hostales (de cinco, cuatro,... estrellas). Así que hoteles. No otra cosa. Número total de extranjeros, 6.521.490. ¿Y cuántos extranjeros dice Frontur que se alojaron en hoteles en dicho mes? 6.520.513. Una difrencia miraculósamente mínima que, seguro, explican otras causas mejor que la casualidad. Así que no, hoteles son hoteles y Airbnb está en otra parte.

Si es que está, claro.

Y de colofón, el código que genera la gráfica anterior, del que lo más aprovechable es el acceso a los datos:

{{< highlight R >}}
library(pxR)
library(ggplot2)

datos <- as.data.frame(read.px("http://www.datanalytics.com/uploads/alojamientos_frontur.px"))
datos$Periodo <- as.Date(paste0(datos$Periodo, "01"), "%YM%m%d")

datos <- datos[datos$Tipo.de.alojamiento != "Total",]
datos <- datos[datos$Tipo.de.alojamiento != "De mercado",]
datos <- datos[datos$Tipo.de.alojamiento != "Total",]
datos <- datos[datos$Tipo.de.alojamiento != "No de mercado",]

ggplot(datos, aes(x = Periodo, y = value)) +
    geom_line() +
    facet_wrap(~Tipo.de.alojamiento, ncol = 2,
                scales = "free_y")
{{< / highlight >}}