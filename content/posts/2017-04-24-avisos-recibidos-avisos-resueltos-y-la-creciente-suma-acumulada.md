---
author: Carlos J. Gil Bellosta
categories:
- números
date: 2017-04-24 08:13:24+00:00
draft: false
lastmod: '2025-04-06T19:12:05.433882'
related:
- 2017-09-29-bus-al-norte-bus-al-sur.md
- 2016-06-17-evolucion-historica-de-la-deuda-del-ayuntamiento-de-madrid.md
- 2016-05-09-encuestas-electorales-medios-y-sesgos-ii.md
- 2017-05-18-me-siento-mal-porque-han-sido-muy-majos-conmigo-y-ahora-no-se-que-hacer-con-lo-que-me-han-mandado.md
- 2012-09-05-los-principales-problemas-de-espana.md
tags:
- ayuntamiento
- data.table
- datos abiertos
- datos públicos
- madrid
- xts
title: Avisos recibidos, avisos resueltos y la creciente suma acumulada
url: /2017/04/24/avisos-recibidos-avisos-resueltos-y-la-creciente-suma-acumulada/
---

El ayuntamiento de Madrid publica [información (desde 2015) de los avisos](https://goo.gl/gzFH6I) recibidos por los ciudadanos a través de los distintos canales puestos a su disposición (010, [LineaMadrid](https://twitter.com/Lineamadrid), la [_app_](https://goo.gl/WLFzNU), etc.).

He bajado los datos y he pintado

![](/img/2017/04/avisos_madrid.png#center)


que es la suma acumulada de la diferencia entre los avisos entrantes y los resueltos día a día usando

{{< highlight R >}}
library(data.table)
library(xts)

recibidos <- rbindlist(lapply(dir(pattern = "recibi"), fread))
resueltos <- rbindlist(lapply(dir(pattern = "resu"), fread))

recibidos.fecha <- recibidos[, .(n.recibidos = .N), by = "FECHA_DE_RECEPCION"]
resueltos.fecha <- resueltos[, .(n.resueltos = .N), by = "FECHA_DE_RECEPCION"]

ambos <- merge(recibidos.fecha, resueltos.fecha)

ambos$fecha <- as.Date(ambos$FECHA_DE_RECEPCION, format = "%d/%m/%Y")
ambos$FECHA_DE_RECEPCION <- NULL

ambos <- ambos[order(ambos$fecha),]
ambos$pendientes <- cumsum(ambos$n.recibidos - ambos$n.resueltos)

tmp <- xts(ambos$pendientes, order.by = ambos$fecha)
plot(tmp, main = "Avisos pendientes en Avisa Madrid (010, etc.)" ,
        ylab = "cola de pendientes")
{{< / highlight >}}

Comentarios:

* Supongo que la creciente cola tiene alguna explicación (que ignoro).
* Los datos son muy interesantes y permiten estudiar muchas cosas más. Por ejemplo, repetir el estudio anterior por tipo de aviso (dado que no todos tienen, supongo, la misma relevancia).
* Los datos publicados arrancan en 2015, pero hay resueltos abiertos antes. La cola no arrana en cero.
* Una pregunta teórica: ¿cómo calcularías el tiempo medio de resolución de un aviso si tuvieses que hacerlo?