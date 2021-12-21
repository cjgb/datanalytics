---
author: Carlos J. Gil Bellosta
date: 2016-08-31 08:13:15+00:00
draft: false
title: Tod[rep('a', 831)]s y tod[rep('o', 6450)]s los autores de paquetes de R

url: /2016/08/31/todrepa-831s-y-todrepo-6450s-los-autores-de-paquetes-de-r/
categories:
- r
tags:
- autores
- paquetes
- r
- rvest
- scraping
---

En los últimos tiempos se ha puesto de moda un subgénero periodístico que es una manera de generar artículos de acuerdo con el siguiente algoritmo:

  1. Se toma una lista de personas.
  2. Se cuenta en ella el número de mujeres (a) y de hombres (b).
  3. Si a >= b, GOTO 1; si no, se copipega y se mutatismutandea un manido argumento.

No sabiéndome sustraer al encanto del último grito, he escrito y corrido

{{< highlight R "linenos=true" >}}
library(rvest)
library(rjson)
library(plyr)

base <- "https://cran.r-project.org/web/packages/"

urls <- read_html(paste0(base, "available_packages_by_name.html"))
urls <- xml_nodes(urls, xpath = "//tr/td/a")
urls <- sapply(urls, html_attr, "href")

nombres <- sapply(urls, function(x){
  nombre <- read_html(paste0(base, x))
  nombre <- xml_nodes(nombre,
    xpath = "//tr[td[1] = 'Maintainer:']/td")[2]
  nombre <- strsplit(html_text(nombre), " ")[[1]][1]
})

saveRDS(nombres, "nombres.rds")
#nombres <- readRDS("nombres.rds")

# me da un poco de pudor el nombre de esta función
# según el DRAE, es "determinar el sexo de un animal"
sexar <- function(nombres, conocidos = NULL){
  nombres <- setdiff(nombres, conocidos)
  res <- list()
  api.base <- "https://api.genderize.io/?name="
  for (nombre in unique(nombres)){
    tmp <- try(fromJSON(readLines(paste0(api.base, nombre))))
    res <- c(res, list(tmp))
  }
  ## http://stackoverflow.com/questions/7103429/all-the-connections-are-in-use-execution-halted
  closeAllConnections()
  res
}

res <- sexar(nombres)
saveRDS(res, "res.rds")
# res <- readRDS("res.rds")

### como la API tiene límites...
no.errors <- res[sapply(res, length) > 1]
no.errors <- sapply(no.errors, function(x) x$name)
res.alt <- sexar(nombres, no.errors)
res <- c(res[sapply(res, length) > 1],
  res.alt[sapply(res.alt, length) > 1])
saveRDS(res, "res.rds")
# res <- readRDS("res.rds")

### detalles finales
tmp <- res[sapply(res, length) == 4]
tmp <- ldply(tmp, as.data.frame)
freqs <- as.data.frame(table(nombres))
nombres.con.sexo <- merge(tmp, freqs, by.x = "name", by.y = "nombres")
nombres.con.sexo$probability <- as.numeric(as.character(nombres.con.sexo$probability))
nombres.con.sexo <- nombres.con.sexo[nombres.con.sexo$probability > 0.9,]
tapply(nombres.con.sexo$Freq, nombres.con.sexo$gender, sum)
{{< / highlight >}}

para obtener los números que figuran en el título de la entrada.

Y los caveats:

1. En realidad, no son autores de paquetes sino mantenedores.
2. De un determinado y no pequeño número de autores no se ha podido identificar el sexo por diversos motivos; por eso, los números absolutos son menos fiables que su razón.
3. La razón, incluso, podría no ser del todo fiable: no sabemos si estamos en una situación [MCAR](https://www.datanalytics.com/2012/06/28/valores-perdidos-mcar-mar-y-mnar/).
4. Hay nombres que no identifican claramente el sexo.
5. Hay autores de más de un paquete, por lo que se me ha planteado un dilema: contar los autores únicos o los paquetes únicos; me he decantado por la segunda opción después de sopesar pros y contras.
6. ¿Alguno más?