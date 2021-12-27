---
author: Carlos J. Gil Bellosta
date: 2014-02-19 08:34:17+00:00
draft: false
title: 'Ofertón: tarifa plana de GasNaturalFenosa'

url: /2014/02/19/oferton-tarifa-plana-de-gasnaturalfenosa/
categories:
- r
tags:
- electricidad
- r
---

En medio del fragor mediático sobre el precio de la electricidad, me ha llegado un _ofertón_ de GasNaturalFenosa: la posibilidad de contratar una [tarifa plana para la electricidad](http://www.gasnaturalfenosa.es/es/inicio/hogar/gas+natural+y+electricidad/1297118395381/tarifa+plana+de+gas+y+luz.html).

La entrada de hoy es el debido ejercicio acerca de si me conviene o no contratarla. En R, por supuesto.

Primero, el código:

{{< highlight R "linenos=true" >}}
library(ggplot2)

# tramos tarifas planas

tarifas <- c("micro", "mini", "media", "maxi", "extra")

dat <- data.frame(
  tarifas = factor(tarifas, levels = tarifas),
  hasta   = c(1500, 2500, 4000, 5500, 7000),
  tarifa.plana = c(30, 40, 55, 73, 91)
)

# precio normal del kWh
base  <- 0.13

# fijo en función de la potencia contratada
# indico el que pago yo aunque varía de
# cliente en cliente
termino.potencia <- 15

# precio del kWh sobre el límite
extra <- 0.23

# consumos posibles
consumos <- data.frame(consumo = seq(0, 7000, by=100))

dat <- merge(dat, consumos)

dat$precio.normal <- 12 * termino.potencia +
  dat$consumo * base
dat$precio.tarifa.plana <- 12 * dat$tarifa.plana +
  extra * pmax(0, dat$consumo - dat$hasta)
dat$beneficio.oferta <- dat$precio.normal -
  dat$precio.tarifa.plana

dat <- subset(dat, beneficio.oferta > -250)

ggplot(dat, aes(x=consumo, y=beneficio.oferta, col = tarifas)) +
  geom_line() +
  geom_hline(aes(yintercept=0), col = "red", alpha = 0.5)
{{< / highlight >}}

La salida es este gráfico:

[![oferta_fenosa](/wp-uploads/2014/02/oferta_fenosa1.png)
](/wp-uploads/2014/02/oferta_fenosa1.png)

Como puede apreciarse, o hilo muy fino con el consumo (con un beneficio máximo anual de unos 50 euros si lo ajusto exactamente al piquillo) o pringo.

¡Vaya con las ofertas _especialmente seleccionadas para Vd._!
