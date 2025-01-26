---
author: Carlos J. Gil Bellosta
date: 2020-03-19 17:48:07+00:00
draft: false
title: 'Casos de coronavirus en Madrid provincia: un modelo muy crudo basado en la
  mortalidad'

url: /2020/03/19/casos-de-coronavirus-en-madrid-provincia-un-modelo-muy-crudo-basado-en-la-mortalidad/
categories:
- r
tags:
- coronavirus
- defunciones
- madrid
- r
- stan
---

_[Nota: si no sabes interpretar las hipótesis embebidas en el código que publico, que operan como enormes caveats, no hagas caso en absoluto a los resultados. He publicado esto para ver si otros que saben más que yo lo pulen y consiguen un modelo más razonable usándolo tal vez, ojalá, como núcleo.]_

_[Edición: He subido el código a [GitHub](https://github.com/cjgb/covid_madrid).]_

_[El código de esta sección y los resultados contienen errores de bulto; consúltese el código de GitHub.]_

Escribo casi al vuelo e inspirado por la idea de que:

* Los casos verificados de coronavirus no son fiables. Ni están todos los que son, ni son todos los que están.
* Los casos de defunciones son mucho más fiables: son menos y se les presta mucha atención.

La idea la he expresado  públicamente en:

{{< x user="gilbellosta" id="1240666690888830978" >}}

Y aquí van los resultados crudísimos de un modelo crudísimo y seguramente erróneo cuya convergencia ni he constrastado ni nada:

![](/wp-uploads/2020/03/casos_mortalidad_madrid.png#center)

Y el código es:

{{< highlight c >}}
data {
  int<lower=0> N;
  int<lower=0> dia0;
  vector[N] dia;
  vector[N] defs;
}

parameters {
  real<lower = 0, upper = 1000> casos_0;
  vector[N] contagios;
  real<lower = 0, upper = 3> r0;  //priori cutre sobre r0, infectados diarios que genera un caso
  real<lower = 0, upper = .02> letalidad;
}

model {
  vector[N] casos;

  contagios[1] ~ normal(casos_0 * r0, 1);
  casos[1] = casos_0 + contagios[1];


  for (i in 2:N){
    contagios[i] ~ normal(casos[i-1] * r0, 1);
    casos[i] = casos[i-1] + contagios[i];
  }

  for (i in dia0:N) {
    defs[i] ~ normal(letalidad * casos[i - 22], 1);
  }
}
{{< / highlight >}}







y






{{< highlight R >}}
library(rstan)
library(reshape2)
library(plyr)

library(ggplot2)



dat <- read.csv("https://raw.githubusercontent.com/datadista/datasets/master/COVID%2019/ccaa_covid19_fallecidos.csv")
dat <- melt(dat, id.vars = c("cod_ine", "CCAA"))
dat$fecha <- as.Date(dat$variable, format = "X%d.%m.%Y")

fecha_ini <- min(dat$fecha)

madrid <- dat[dat$CCAA == "Madrid",]
madrid$dia <- as.numeric(madrid$fecha - fecha_ini)

madrid <- madrid[, c("dia", "value")]
colnames(madrid) <- c("dia", "defs")

tmp <- data.frame(dia = -30:-1, defs = 0)

madrid <- rbind(tmp, madrid)


fit <- stan(file = "stan.stan",
            data = list(N = nrow(madrid), dia0 = which(madrid$dia == 0), dia = madrid$dia, defs = madrid$defs),
            iter = 10000, warmup = 2000,
            chains = 1, thin = 10)

res <- as.data.frame(fit)

contagios <- extract(fit, pars = "contagios")$contagios

contagios <- data.frame(t(contagios))
contagios$fecha <- as.Date(madrid$dia, origin = fecha_ini)

contagios <- melt(contagios, id.vars = "fecha")

casos <- ddply(contagios, .(variable), transform, casos = cumsum(value))


ggplot(casos, aes(x = fecha, y = casos, group = variable)) +
    geom_line(alpha = 0.3) +
    xlab("fecha") + ylab("casos") +
    ggtitle("Casos de coronavirus en Madrid\n(¡Resultado de un modelo muy crudo y\n casi seguro con errores!)")
{{< / highlight >}}