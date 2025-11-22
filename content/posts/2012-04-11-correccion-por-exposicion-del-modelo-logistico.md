---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2012-04-11 06:52:19+00:00
draft: false
lastmod: '2025-04-06T18:47:57.900304'
related:
- 2023-01-24-funciones-enlace.md
- 2020-06-29-sobremuestreando-x-y-no-y.md
- 2020-05-28-sobre-la-funcion-de-riesgo-en-el-analisis-de-la-supervivencia.md
- 2014-11-17-los-coeficientes-de-la-regresion-logistica-con-sobremuestreo.md
- 2020-07-22-aun-mas-sobre-la-presunta-sobredispersion-en-modelos-de-poisson.md
tags:
- estadística
- glm
- r
- regresión logística
title: Corrección por exposición del modelo logístico
url: /2012/04/11/correccion-por-exposicion-del-modelo-logistico/
---

He tropezado con una extensión curiosa y que no conocía del modelo logístico que lo emparenta un tanto con los modelos de supervivencia. Es un problema que aparece en los modelos de los actuarios, por ejemplo, y en la [supervivencia de nidos](http://www.npwrc.usgs.gov/resource/birds/nestsurv/index.htm ) (sí, nidos de bichos alados), parece.

Es el siguiente: supongamos que unos sujetos están expuestos a un cierto suceso cuya probabilidad, $p_i$, depende del sujeto a través del esquema habitual de la regresión logística (es decir, depende de algunas variables como el sexo, etc., a través de una fórmula lineal cuyos coeficientes interesa estimar).

Supongamos también, y esta es la novedad, que no todos los sujetos están expuestos al factor de riesgo el mismo tiempo. Pero si el sujeto _i_ está expuesto al riesgo durante $t_i$ periodos, la probabilidad de que **no** le ocurra cierta calamidad es $p_i^{t_i}$.

Planteemos el problema en R:

{{< highlight R >}}
# número de sujetos
n <- 10000

# coeficientes "verdaderos"
beta.0 <- 1
beta.1 <- -2

# un factor que afecta a la probabilidad
x <- factor( sample( c("a", "b"), n, replace = T ) )

# número de días de "exposición"
days <- sample( c( 1,2,3,4 ), n, replace = T )

# probabilidad de que *no* ocurra el suceso
p <- plogis( beta.0 + beta.1 * (x == "b") )^days

# variable objetivo (1 significa que *no* ocurre el suceso)
y <- rbinom( n, 1, p )

# ¡gráfico!
mosaicplot( table( days, x, y ) )


# modelo logístico "normal"
dat <- data.frame( x = x, y = y, days = days )
m.0 <- glm( y ~ x, family = binomial(), data = dat )
m.0$coefficients
{{< / highlight >}}

Adaptando [código ajeno](http://www.npwrc.usgs.gov/resource/birds/nestsurv/download/CreateLogisticExposureFamily.R) a nuestro contexto, podemos escribir:

{{< highlight R >}}
logexp <- function(days)
{
    linkfun <- function(mu) qlogis(mu^(1/days))
    linkinv <- function(eta) plogis(eta)^(days)
    mu.eta <- function(eta) days * plogis(eta)^(days-1) *
        .Call("logit_mu_eta", eta, PACKAGE = "stats")
    valideta <- function(eta) TRUE
    link <- paste("logexp(", days, ")", sep="")
    structure(list(linkfun = linkfun,
        linkinv = linkinv,
        mu.eta = mu.eta, valideta = valideta, name = link),
        class = "link-glm")
}
{{< / highlight >}}

Esta definición de la función de enlace es bastante peculiar: depende del sujeto nosolo a través de mu_i, como es habitual y nos enseñan los libros, sino también a través de la variable tiempo, que depende del sujeto.

Et voilá:

{{< highlight R >}}
m.1 <- glm( y ~ x, family=binomial(logexp(days=dat$days)), data=dat )
m.1$coefficients
{{< / highlight >}}

Prácticamente (y, en gran medida, gracias a que el número de observaciones es grande), recobramos el valor original de los coeficientes (cosa que como habrán comprobado los más diligentes de mis lectores, no ocurre con el primer modelo).