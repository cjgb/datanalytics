---
author: Carlos J. Gil Bellosta
date: 2012-07-05 06:02:59+00:00
draft: false
title: ¿Afectó el fraude de Barclays al Libor?

url: /2012/07/05/afecto-el-fraude-de-barclays-al-libor/
categories:
- finanzas
- r
tags:
- finanzas
- libor
- r
---

Después de la [entrada de ayer](http://www.datanalytics.com/blog/2012/07/04/libor-libor-fundeu-y-barclays-claro/) y de

[![](/wp-uploads/2012/07/tuit_david_cabo.png)
](/wp-uploads/2012/07/tuit_david_cabo.png)

he decidido mirar a ver qué impacto puede haber tenido el fraude de Barclays, uno de los 16 bancos que aportan datos para calcular el índice, sobre su valor diario.

El procedimiento por el que se calcula el Libor lo describí ayer. Y también indiqué de dónde descargar los datos históricos que proporciona The Guardian. Así que puedo comenzar cargando los datos en R,

{{< highlight R "linenos=true" >}}
raw <- read.csv( "LIBOR Combined - USD - Sheet 1.csv" )

dat <- raw[,c(1,2,8)]
names(dat) <- c("bank", "date", "Libor3M" )
dat$date <- as.Date( as.character(dat$date), "%d/%m/%Y" )

fix <- subset( dat, bank == "FIX - USD")
banks <- subset( dat, bank != "FIX - USD")
{{< / highlight >}}

para obtener dos conjuntos de datos: `fix`, con el Libor a 3 meses publicado por fecha y `banks`, con el Libor a 3 meses comunicado por cada una de las entidades.

Con

{{< highlight R "linenos=true" >}}
my.fix <- tapply( banks$Libor3M, banks$date, mean, trim = 0.25 )
max( abs( fix$Libor3M - my.fix ) )
# 0.00125
{{< / highlight >}}

compruebo que el _fix_ (el Libor a 3 meses) que calculo a partir de los datos de las entidades usando una media recortada (igual que hace Reuters) efectivamente coincide con el Libor publicado: la diferencia máxima es del 10 % de un punto básico (y es prácticamente 0 a todos los efectos en el 99 % de los casos). Así que puedo dar por bueno mi método.

Así se puede medir el error que se cometería al utilizar información falseada:

{{< highlight R "linenos=true" >}}
ubi.barclays <- which( banks$bank == "Barclays" )

deltas <- sample( c(0.1, -0.1), length(ubi.barclays), replace = T )

bad.fix <- function( deltas ){
    b <- banks
    b[ ubi.barclays,]$Libor3M <- b[ ubi.barclays, ]$Libor3M + deltas
    my.bad.fix <- tapply( b$Libor3M, b$date, mean, trim = 0.25 )
    my.fix     <- tapply( banks$Libor3M, banks$date, mean, trim = 0.25 )
    quantile( abs( my.fix - my.bad.fix ), c(0.9, 0.95, 0.99, 0.995, 0.999,1))
}
print( bad.fix( deltas ) )
#     90%      95%      99%    99.5%    99.9%     100%
#0.001250 0.002500 0.006250 0.007275 0.010000 0.012500
{{< / highlight >}}

En este ejercicio he creado una perturbación aleatoria según la cual Barclays habría incrementado o decrementado el Libor comunicado en diez puntos básicos (aleatoriamente). Dentro de los 4 años para los que hay datos (1037 registros), en uno se habría movido el Libor en más de un punto básico y en el 99.9 % de los días no se habría alterado en más de 0.7 puntos básicos.

Si Barclays hubiese alterado los datos en 20 puntos básicos (arriba o abajo), se habría obtenido

{{< highlight R "linenos=true" >}}
deltas <- sample( c(0.2, -0.2), length(ubi.barclays), replace = T )
print( bad.fix( deltas ) )
#     90%      95%      99%    99.5%    99.9%     100%
#0.002500 0.003750 0.006650 0.008525 0.012410 0.015000
{{< / highlight >}}

Finalmente, distribuyendo la desviación uniformemente entre el -0.5 % y el -0.5 %, se obtendría

{{< highlight R "linenos=true" >}}
deltas <- runif( length(ubi.barclays) ) - 0.5
print( bad.fix( deltas ) )
#       90%        95%        99%      99.5%      99.9%       100%
#0.00187500 0.00312500 0.00887500 0.01401064 0.01875000 0.01875000
{{< / highlight >}}

En lugar de simulaciones, es interesante también ver cuál habría sido la influencia máxima de Barclays en el valor final del Libor día a día. Haciendo

{{< highlight R "linenos=true" >}}
b <- banks
b[ ubi.barclays, ]$Libor3M <- -100
my.min.fix <- tapply( b$Libor3M, b$date, mean, trim = 0.25 )

b <- banks
b[ ubi.barclays, ]$Libor3M <- 100
my.max.fix <- tapply( b$Libor3M, b$date, mean, trim = 0.25 )

hist( my.max.fix - my.min.fix )

range.pb <- round( 100 * (my.max.fix - my.min.fix ))
table(range.pb)
#  0   1   2   3   4   5   6
#948  48  22  11   3   4   1
{{< / highlight >}}

se aprecia cómo en 948 de los 1037 días no habría sido capaz de moverlo (en más de un punto básico) hiciese lo que hiciese y cómo sólo un día habría sido capaz de moverlo seis.

Gráficamente,

[![](/wp-uploads/2012/07/barclays_libor_days.png)
](/wp-uploads/2012/07/barclays_libor_days.png)

Eso sí, casi todos esos días en los que tenía influencia correspondían al mismo periodo: finales de 2008.

¿Y cuánto afecta un punto básico a una persona _normal_? Erigiéndome en patrón de normalidad, he acudido a una [calculadora de hipotecas](http://www.euribor.com.es/calcular-hipoteca/), he introducido aproximadamente los datos de la mía y he calculado que cada punto básico de desviación (en este caso del Euribor, al que la tengo referenciada) me supone una variación de 42 céntimos de euro por mes.

Como diría un coadlátere, me lo puedo permitir. Eso sí, aprovecho para agradecer la labor callada de los supervisores y auditores por todas las catástrofes que han evitado y de las que no tenemos noticia por no haber ocurrido.
