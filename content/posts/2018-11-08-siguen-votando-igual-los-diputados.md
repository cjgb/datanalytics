---
author: Carlos J. Gil Bellosta
categories:
- números
date: 2018-11-08 08:13:19+00:00
draft: false
lastmod: '2025-04-06T19:12:17.438548'
related:
- 2012-09-20-como-votan-los-diputados.md
- 2016-05-09-encuestas-electorales-medios-y-sesgos-ii.md
- 2016-07-04-gestion-de-la-mendacidad-encuestoelectoral-los-numeros.md
- 2016-09-21-votos-en-la-onu-con-r.md
- 2011-09-13-datos-patrimoniales-de-los-senadores.md
tags:
- diputados
- heatmap
- parlamento
- r
- votaciones
title: ¿Siguen votando igual los diputados?
url: /2018/11/08/siguen-votando-igual-los-diputados/
---

Hace seis años escribí [esto](https://datanalytics.com/2012/09/20/como-votan-los-diputados/). Hoy actualizo aquella entrada para crear

![](/img/2018/11/votos_diputados.png#center)

Y, por supuesto, el código (que he tenido que reescribir en gran medida):

{{< highlight R >}}
library(xml2)
library(reshape2)
library(plyr)

# descarga y manipulación de datos

dia_votacion <- function(n.votacion){
  dir.create("tmp")
  url <- paste("https://app.congreso.es/votacionesWeb/OpenData?sesion=",
                n.votacion, "&completa;=1&legislatura;=12", sep = "")
  download.file( url, destfile = "./tmp/votos.zip")
  try(unzip("./tmp/votos.zip", exdir = "./tmp"), TRUE)

  ficheros <- dir("./tmp", pattern = ".*xml", full.names = T)

  if (length(ficheros) == 0)
    return(NULL)

  res <- lapply(ficheros, function(fichero){

    print(fichero)

    datos <- as_list(read_xml(fichero))

    sesion <- datos$Resultado$Informacion$Sesion
    numero <- datos$Resultado$Informacion$NumeroVotacion

    try(datos <- ldply(datos$Resultado$Votaciones, unlist), TRUE)

    if (class(datos) == "try-error")
      return(NULL)

    if (class(datos) != "data.frame")
      return(NULL)

    if(nrow(datos) == 0)
      return(NULL)

    datos$sesion <- sesion
    datos$numero <- numero

    datos
  })

  unlink("./tmp", recursive = T)      # borra el directorio temporal

  res
}

tmp <- lapply(1:156, dia_votacion)

datos <- tmp[!sapply(tmp, is.null)]
datos <- lapply(datos, function(x) do.call(rbind, x))
datos <- do.call(rbind, datos)

datos$numero <- as.numeric(unlist(datos$numero))
datos$sesion <- as.numeric(unlist(datos$sesion))

datos$asunto <- as.character(1000000 + 1000 * datos$sesion + datos$numero)

datos$ind <- 0
datos$ind[datos$Voto == "No"] <- -1
datos$ind[datos$Voto == "Sí"] <- 1

tmp <- dcast(datos, asunto ~ Diputado, value.var = "ind", fill = 0)
matriz_votos <- as.matrix(tmp[, -1])

rownames(matriz_votos) <- NULL
colnames(matriz_votos) <- NULL

heatmap(matriz_votos, xlab = "Diputados", ylab = "Asuntos", scale = "none")
{{< / highlight >}}

No sé si alguien querrá sacarle más punta a la no historia de hoy.