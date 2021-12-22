---
author: Carlos J. Gil Bellosta
date: 2016-05-27 08:13:49+00:00
draft: false
title: Coordenadas polares por doquier

url: /2016/05/27/coordenadas-polares-por-doquier/
categories:
- r
tags:
- clara
- cluster
- clústering
- dalmau
- miró
- pam
- plotrix
- r
---

El otro día pasé por uno de esos sitios en los que exponen en las paredes obras de artistas medianos con el precio debajo. Me quedé mirando una muy... concéntrica porque me recordaba a [lo que nos regala a menudo Antonio Chinchón](https://aschinchon.wordpress.com/tag/r/). Pregunté de qué trataba la cosa y tuvieron la paciencia de explicármelo: al lado había una foto enorme y, se conoce, las cosas concéntricas eran una reordenación de los píxels de la primera. Una especie de tortilla de patata deconstruida a lo Adriá, pero con fotos.

Yo les dije que aquello venía a ser un diagrama de barras en coordenadas polares, que yo me dedicaba a eso, pero que unas veces usaba diagramas de barras y otras, coordenadas polares, pero nunca a la vez; que eso era como echarle _képchup_ a la paella. Pero el arte tiene sus licencias.

Y hoy me la he tomado yo:


{{< highlight R "linenos=true" >}}
library(plotrix)
library(jpeg)
library(cluster)

circular.color.distribution <- function(url){
    download.file(url, "/tmp/borrar.jpg")

    cuadro <- readJPEG("/tmp/borrar.jpg")

    cuadro <- as.data.frame(lapply(1:3,
        function(i) as.vector(cuadro[,,i])))
    colnames(cuadro) <- c("r", "g", "b")

    centroides <- clara(cuadro, 20)

    res <- data.frame(
        rgb = rgb(centroides$medoids),
        freq = as.numeric(table(centroides$clustering)))

    res$radios <- sqrt(cumsum(res$freq))
    res$radios <- res$radios / max(res$radios)


    plot(c(-1,1), c(-1,1), type="n",
        axes=F, xlab="", ylab="", asp = 1)
    draw.circle(0,0, rev(res$radios),
        nv = 1000, col= rev(res$rgb), lwd = 0.3)
}

circular.color.distribution("https://upload.wikimedia.org/wikipedia/commons/4/40/Batalla_de_rocroi_por_Augusto_Ferrer-Dalmau.jpg")

circular.color.distribution("https://drwormhole.files.wordpress.com/2013/12/the-smile-of-the-flamboyant-wingsblog.jpg")
{{< / highlight >}}

Que es un código con el que haciendo

{{< highlight R "linenos=true" >}}
circular.color.distribution("https://upload.wikimedia.org/wikipedia/commons/4/40/Batalla_de_rocroi_por_Augusto_Ferrer-Dalmau.jpg")
{{< / highlight >}}

se obtiene

![dalmau](/wp-uploads/2016/05/dalmau.png)

y haciendo

{{< highlight R "linenos=true" >}}
circular.color.distribution("https://drwormhole.files.wordpress.com/2013/12/the-smile-of-the-flamboyant-wingsblog.jpg")
{{< / highlight >}}

se obtiene

![miro](/wp-uploads/2016/05/miro.png)