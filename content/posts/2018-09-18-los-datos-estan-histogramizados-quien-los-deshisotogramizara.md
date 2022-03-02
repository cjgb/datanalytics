---
author: Carlos J. Gil Bellosta
date: 2018-09-18 08:13:51+00:00
draft: false
title: Los datos están histogramizados... ¿quién los deshisotogramizará?

url: /2018/09/18/los-datos-estan-histogramizados-quien-los-deshisotogramizara/
categories:
- números
- r
tags:
- binequality
- dinamarca
- impuestos
- paquetes
- r
- histogramas
---

Hace un tiempo quise hacer cosas malísimas con datos fiscales de España y Dinamarca. Pero los [datos](http://www.skm.dk/english/facts-and-figures/progression-in-the-income-tax-system) estaban _histogramizados_:

![](/wp-uploads/2018/09/datos_histogramizados.png#center)

Gracias a [Freakonometrics](https://freakonometrics.hypotheses.org/18859) di con [`binequality`](https://cran.r-project.org/package=binequality). Adaptando su código, escribo

{{< highlight R >}}
library(rvest)
library(plyr)

dk <- read_html("http://www.skm.dk/english/facts-and-figures/progression-in-the-income-tax-system")
tmp <- html_nodes(dk, "table")
tmp <- html_table(tmp[[2]])

header <- tmp[1,]
tmp <- tmp[-c(1, 2),]
colnames(tmp) <- header

# elimino declaraciones negativas
tmp <- tmp[-1,]

# elimino el total
tmp <- tmp[-(nrow(tmp)),]

colnames(tmp) <- c("rango", "contribuyentes",
    "X1", "income", "tax1", "tax2", "pct")

irpf_dk <- tmp[, c("rango", "contribuyentes",
    "income", "tax1", "tax2")]

irpf_dk$contribuyentes <- as.numeric(irpf_dk$contribuyentes)
irpf_dk$income <- as.numeric(irpf_dk$income)
irpf_dk$tax1 <- as.numeric(irpf_dk$tax1)
irpf_dk$tax2 <- as.numeric(irpf_dk$tax2)

irpf_dk$tax <- irpf_dk$tax1 + irpf_dk$tax2
irpf_dk$tax1 <- irpf_dk$tax2 <- NULL
irpf_dk$pct <- irpf_dk$tax / irpf_dk$income


irpf_dk$desde <- c(0, 25, 50, 75, 100, 125, 150,
    200, 250, 300, 350, 400, 500, 750, 1000)
irpf_dk$hasta <- c(irpf_dk$desde[-1], Inf)

irpf_dk$desde <- irpf_dk$desde / 7.44
irpf_dk$hasta <- irpf_dk$hasta / 7.44
irpf_dk$income <- irpf_dk$income / 7.44
irpf_dk$tax    <- irpf_dk$tax / 7.44

irpf_dk$mean_income <- irpf_dk$income /
        irpf_dk$contribuyentes * 1000

irpf_dk$rango <- NULL
{{< / highlight >}}

para bajar y preprocesar los datos y después

{{< highlight R >}}
library(binequality)

irpf_dk <- irpf_dk[-1,]

fit_LN <- fitFunc(
        ID = rep("irpf_dk", nrow(irpf_dk)),
        hb = irpf_dk$contribuyentes,
        bin_min = irpf_dk$desde,
        bin_max = irpf_dk$hasta,
        obs_mean = irpf_dk$mean_income,
        ID_name="dki",
        distribution="LOGNO",
        distName="LOGNO")

N  <- irpf_dk$contribuyentes[-nrow(irpf_dk)]
y2 <- N / sum(N) / diff(irpf_dk$desde)
u  <- seq(min(irpf_dk$desde),
        2 * max(irpf_dk$desde), length = 101)
v  <- dlnorm(u,
        fit_LN$parameters[1], fit_LN$parameters[2])

plot(u,v,col="blue",type="l",lwd=2)
for(i in 1:(n-1))
    rect(irpf_dk$desde[i],0,
        irpf_dk$hasta[i], y2[i],
        col = rgb(1,0,0,.2), border="white")
{{< / highlight >}}



para obtener, entre otras cosas y sin mayores pretensiones gráficas,

![](/wp-uploads/2018/09/distr_irfp_dk.png#center)


**Nota:** La distribución no ajusta bien, incluso después de un truco sucio en alguna parte del código para cargarme la parte más fea de la distrbución. Queda ahí no más como código de ejemplo.
