---
author: Carlos J. Gil Bellosta
date: 2018-01-09 08:13:17+00:00
draft: false
title: Mortalidad en carretera (contada de una manera distinta)

url: /2018/01/09/mortalidad-en-carretera-contada-de-una-manera-distinta/
categories:
- estadística
- números
- r
tags:
- accidentes
- defunciones
- dgt
- estadística
- prensa
- r
- series temporales
- stl
---

Con motivo de fin de año se ha hablado de fallecidos en accidentes de tráfico como por ejemplo en [El Mundo](http://www.elmundo.es/motor/2018/01/03/5a4cb63a468aeb18298b45c4.html) o en [El País](https://elpais.com/elpais/2018/01/06/hechos/1515272812_112078.html). Y sí, parece que el número observado de muertos ha aumentado.

Lo cual es mucho menos relevante de lo que se da a entender. Si tiras una moneda al aire 100 veces y sacas 48 caras y luego repites el experimento, podrías sacar 53 (y habría aumentado el número observado de caras) o 45 (y habría disminuido). Lo relevante es si ha cambiado o no la probabilidad de cara de la moneda. De lo cual, y volviendo al caso de la siniestralidad, [ya me ocupé en su día](https://www.datanalytics.com/2017/01/18/va-de-si-hay-una-o-dos-lambdas/).

Pero voy a aprovechar la coyuntura para sacarle un poco de punta al asunto.

Aprovechando que [la DGT publica datos](http://www.dgt.es/es/seguridad-vial/estadisticas-e-indicadores/accidentes-30dias/series-historicas/) (¡solo hasta diciembre de 2015!), voy a echarle un vistazo a la serie histórica:




    library(reshape2)
    library(ggplot2)

    muertos <- read.table("csv/series-1993-2015_muertos-30-dias.csv",
                          skip = 3, sep = "\t", dec = ",")

    muertos$V14 <- NULL
    colnames(muertos) <- c("year", format(ISOdate(2000, 1:12, 1), "%B"))

    muertos <- melt(muertos, id.vars = "year")
    muertos <- muertos[order(muertos$year, muertos$variable),]
    colnames(muertos) <- c("year", "mes", "muertos")

    ggplot(muertos, aes(x = year, y = muertos)) +
      geom_line() +
      facet_wrap(~mes)




Así construyo

![](/wp-uploads/2018/01/serie_historica_muertos_carretera.png)


donde se aprecia:




	  * una tendencia histórica globalmente decreciente,
	  * a pesar de lo anterior, un repunte a mediados-finales de los noventa (algún malpensado querrá encontrar coincidencias temporales con...)
	  * un acusado descenso a partir de 2005 (algún bienpensado querrá también encontrar coincidencias temporales)
	  * un tímido repunte en el extremo de la serie que agota el ciclo anterior.


Por dejarlo todo más claro, voy a desestacionalizar la serie. Usando, además, el `stl` de toda la vida, a pesar de que sé de un lector que fruncirá el ceño por no utilizar X-13-ARIMA-SEATS (i.e., [el paquete `seasonal` de R](https://cran.r-project.org/web/packages/seasonal/index.html)):




    tmp <- ts(muertos$muertos, start = c(1993, 1), frequency = 12)
    plot(stl(tmp, s.window = "periodic", t.window = 25))




Que pinta

![](/wp-uploads/2018/01/descomp_serie_aditiva.png)


La tendencia obtenida refleja lo anteriormente discutido, aunque habría quien preferiría un modelo de estacionalidad multiplicativa y no aditiva a la vista de la serie. Haciéndoles caso,




    tmp <- ts(log(muertos$muertos), start = c(1993, 1), frequency = 12)
    descomp <- stl(tmp, s.window = "periodic", t.window = 25)
    plot(descomp)




que da

![](/wp-uploads/2018/01/descomp_escala_log.png)


en la ininterpretable escala logarítmica, por lo que, en deferencia a las mentes lineales,




    tmp <- ts(log(muertos$muertos), start = c(1993, 1), frequency = 12)
    descomp <- stl(tmp, s.window = "periodic", t.window = 25)
    plot(descomp)




![](/wp-uploads/2018/01/siniestralidad_tendencia_multiplicativa.png)


que tiene la misma lectura que más arriba y, por completar la cosa,




    plot(exp(descomp$time.series[1:12, 1]), type = "l",
         xlab = "mes", ylab = "factor",
         main = "Factores mensuales de siniestralidad")




![](/wp-uploads/2018/01/siniestralidad_factores_mensuales.png)


que nos dice cómo en agosto hay algo así como un 30% más de fallecidos y en febrero un 20% menos (con respecto a la media).

No obstante, si tratamos de analizar los gráficos anteriores, apenas nos elevaremos intelectualmente por encima del representante típico de la plebe frumentaria. El _riesgo bruto_ subyacente ha cambiado en los últimos 25 años por muchos factores: hay muchos más vehículos en circulación, ha cambiado la estructura de la edad de la población, seguramente conducen muchas más mujeres (que tienden a tener menos accidentes), etc.

Cuando se evalúan hospitales, por ejemplo, se muestran [indicadores ajustados por riesgo](https://en.wikipedia.org/wiki/Risk_adjusted_mortality_rate). Pero lo que al hablar de hospitales es rutina, se le niega a la DGT: a ella se la evalúa por mortalidad observada.

No así aquí, donde, en la medida de la disponibilidad de datos públicos, trataremos de realizar algún mínimo ajuste. Por ejemplo, incorporando el número total de vehículos,




    vehiculos <- read.table("csv/series_parque_2016.csv", header = TRUE, skip = 2, sep = "\t", dec = ",")
    vehiculos <- vehiculos[, c(1, ncol(vehiculos))]
    colnames(vehiculos) <- c("year", "vehiculos")

    plot(vehiculos$year, vehiculos$vehiculos / 1e6,
         type = "l", xlab = "año", ylab = "millones de vehículos")




![](/wp-uploads/2018/01/siniestralidad_numero_vehiculos.png)


Curiosamente, esta serie tiene un comportamiento _opuesto_ a la de la anterior: se estanca cuando aquella decrece, crece cuando aquella se estanca. Lo que nos invita a estudiar el ratio fallecidos por millón de vehículos:




    muertos <- merge(muertos, vehiculos)
    muertos$ratio <- 1e6 * muertos$muertos / muertos$vehiculos




y pintar la descomposición de la tasa (en escala logarítmica)




    tmp <- ts(log(muertos$ratio), start = c(1993, 1), frequency = 12)
    descomp <- stl(tmp, s.window = "periodic", t.window = 25)
    plot(descomp)




![](/wp-uploads/2018/01/siniestralidad_descomp_tasa.png)


y su tendencia (en escala lineal)




    plot(exp(descomp$time.series[,2]),
         xlab = "mes", ylab = "fallecidos",
         main = "Tendencia histórica de los\nfallecidos en carretera\n(Muertos por millón de vehículos)")




![](/wp-uploads/2018/01/sinistralidad_tendencia_ratio.png)


La interpretación de la serie histórica cambia sustancialmente, bien y malpensados quedan disminuidos en sus argumentos, el estancamiento de los últimos años sigue rigiendo y la prensa seguirá elevando a categoría de noticia lo que es puro ruido aleatorio. Sin duda.









