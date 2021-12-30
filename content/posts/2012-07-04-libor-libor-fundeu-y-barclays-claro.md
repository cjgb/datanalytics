---
author: Carlos J. Gil Bellosta
date: 2012-07-04 07:10:22+00:00
draft: false
title: Libor, líbor, Fundéu y Barclays, claro

url: /2012/07/04/libor-libor-fundeu-y-barclays-claro/
categories:
- finanzas
- r
tags:
- finanzas
- r
- libor
---

Hace un tiempo [pregunté a la Fundéu](http://www.fundeu.es/consultas-O-over-the-counter-2734.html) cómo traducir la expresión _over the counter_. Pobres, tienen mucho trabajo en esta península asperjada de anglicismos. La respuesta, sinceramente, no me sirvió de mucho: me impedía hacerme entender con mis semejantes.

Hace poco se le planteó también [si escribir _Euribor_ o _euríbor_](http://www.fundeu.es/vademecum-E-euribor-6574.html). Optaron por la segunda por considerar el término como común.

Yo solo estoy de acuerdo con ellos a medias. Por un lado, existe el _euríbor_ (nombre común y propiamente españolizado, con su tilde) que se refiere a cierto _precio del dinero_ (o tipo de interés). Pero existe también el [Euribor](http://www.euribor-ebf.eu/), que es una medida del euríbor utilizando cierto procedimiento y que, como marca registrada, no se acentúa (como tampoco se acentúan Kodak o Nasdaq).

La noticia que ha sacudido la City (más apropiadamente, Canary Wharf) esta semana subraya la diferencia. No tanto en el Euribor como en el Libor, otra palabra llana, acabada en consonante otra que "n" o "s", y para la que también vale la ortográfica discusión anterior. El hecho de que uno de los mayores bancos británicos falsease, como así se ha demostrado, la información que suministraba para el cálculo del Libor ha creado cierta desconfianza sobre si este índice refleja fielmente en líbor.

El Libor se calcula de la siguiente manera:

1. Una serie de bancos (16 actualmente) indican el tipo de interés al que se financian —o podrían razonablemente haberse financiado si un día determinado de no necesitar fondos— en el mercado interbancario (OTC, como arriba) alrededor de las once de la mañana en distintos plazos.
2. Reuters centraliza esa información y selecciona, de las 16 medidas (y para cada plazo), las 8 centrales. Y a estas les aplica la media (es decir, calcula una [media winsorizada](http://en.wikipedia.org/wiki/Winsorized_mean), término que espero la Fundéu dé por bueno).
3. Esta media se convierte en el _numerito_ mágico que determina el importe de las cuotas de las hipotecas (entre otras cosas).

Los valores que comunican las entidades son públicos. Y como el mercado presta aquellas entidades a las que considera débiles bajo condiciones más onerosas (quinceemes, observad: ¡el perro también come perro!), las entidades tienen cierto incentivo para comunicar valores por debajo de los reales y así transmitir sensación de fortaleza.

Por ejemplo, Barclays, que —tal vez por tenerme entonces en la planta octava de su sede central _picando_ SAS— estaba siendo cuestionado en otoño de 2007, comunicaba tipos de interés sustancialmente más elevados que el resto de las entidades

[![](/wp-uploads/2012/07/libor_barclays.jpg)
](/wp-uploads/2012/07/libor_barclays.jpg)
como puede apreciarse en el anterior [gráfico de The Guardian](http://www.guardian.co.uk/news/datablog/2012/jul/03/libor-rates-set-banks). Este periódico también [ha hecho públicos los tipos comunicados por las distintas entidades](https://docs.google.com/spreadsheet/ccc?key=0AonYZs4MzlZbdEtRNnA4SWx1djhTSHpyYVliQ1pFb2c) y ha creado incluso una [visualización interactiva](http://www.guardian.co.uk/news/datablog/interactive/2012/jul/03/libor-rate-fixing-bank-submissions) con ellos usando [Tableau](http://www.tableausoftware.com/) (y veréis la cara de tontos que se les queda cuando Tableau decida cerrar el chiringo, como pasó con Needlebase; pero esa es otra historia).

Con esos datos he construido una gráfica de las diferencias por entidad entre el Libor (a tres meses) y el comunicado por las entidades. El primero, en una época _normal_, en que las diferencias entre entidades eran pequeñas (y la prima de riesgo era un arcano para los más)

[![](/wp-uploads/2012/07/libor_2007.png#center)
](/wp-uploads/2012/07/libor_2007.png#center)

y luego, un año más tarde, cuando el mercado interbancario comenzó a discriminar entre entidades:

[![](/wp-uploads/2012/07/libor_2008.png#center)
](/wp-uploads/2012/07/libor_2008.png#center)

Se ve claramente cómo Barclays estuvo sometido a presión en esa época.

Y [la multa que ha recibido Barclays](http://www.elmundo.es/elmundo/2012/06/27/economia/1340819077.html) ha sido, precisamente, por rebajar artificial y fraudulentamente la tasa comunicada (es decir, que la diferencia debería haber estado aún más acentuada). Supongo que bajo la mirada cómplice de sus comercaderes interbancarios, que no podrían dejar de darse cuenta de la diferencia entre lo dicho y lo hecho _OTC_.

Pero sin que, entiendo, afectase al Libor gracias a la _winsorización_ de la media.

**Nota:** el código usado para realizar el segundo gráfico es el siguiente:

{{< highlight R "linenos=true" >}}
library(ggplot2)

raw <- read.csv( "LIBOR Combined - USD - Sheet 1.csv" )

dat <- raw[,c(1,2,8)]
names(dat) <- c("bank", "date", "Libor3M" )
dat$date <- as.Date( as.character(dat$date), "%d/%m/%Y" )

fix <- subset( dat, bank == "FIX - USD")
banks <- subset( dat, bank != "FIX - USD")

banks2 <- subset( banks, date > "2008-09-01" & date < "2008-12-01" )
fix2   <- subset( fix, date > "2008-09-01" & date < "2008-12-01" )

banks2 <- merge( banks2, fix2[,-1], by = "date" )
colnames( banks2 ) <- c("date", "bank", "Libor3M", "fix")

banks3 <- banks2
banks3$curve <- rep("bank", nrow(banks2))
tmp <- banks3
tmp$Libor3M <- tmp$fix
tmp$curve <- rep("fix", nrow(tmp))

banks3 <- rbind( banks3, tmp )

ggplot( banks3, aes( x = date, y = Libor3M, group = curve, colour = curve ) )
+ geom_line() + facet_wrap( ~ bank)
{{< / highlight >}}


