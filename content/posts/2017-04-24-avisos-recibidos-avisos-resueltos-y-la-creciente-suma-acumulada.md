---
author: Carlos J. Gil Bellosta
date: 2017-04-24 08:13:24+00:00
draft: false
title: Avisos recibidos, avisos resueltos y la creciente suma acumulada

url: /2017/04/24/avisos-recibidos-avisos-resueltos-y-la-creciente-suma-acumulada/
categories:
- números
tags:
- ayuntamiento
- data.table
- datos abiertos
- datos públicos
- madrid
- xts
---

El ayuntamiento de Madrid publica [información (desde 2015) de los avisos](https://goo.gl/gzFH6I) recibidos por los ciudadanos a través de los distintos canales puestos a su disposición (010, [LineaMadrid](https://twitter.com/Lineamadrid), la [_app_](https://goo.gl/WLFzNU), etc.).

He bajado los datos y he pintado

![](/wp-uploads/2017/04/avisos_madrid.png)


que es la suma acumulada de la diferencia entre los avisos entrantes y los resueltos día a día usando

{{< highlight R "linenos=true" >}}
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