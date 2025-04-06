---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- estadística
- r
date: 2014-09-22 07:13:49+00:00
draft: false
lastmod: '2025-04-06T18:54:50.862135'
related:
- 2014-08-08-procesos-de-poisson-no-homogeneos-la-historia-de-un-fracaso.md
- 2014-08-11-procesos-puntuales-una-primera-aproximacion.md
- 2020-07-22-aun-mas-sobre-la-presunta-sobredispersion-en-modelos-de-poisson.md
- 2019-01-08-modelos-de-conteos-con-sobredispersion-con-stan.md
- 2014-08-13-mis-procesos-puntuales-con-glm.md
tags:
- estadística
- glm
- poisson
- procesos puntuales
- r
title: La diapositiva perdida, versión algo más extendida
url: /2014/09/22/la-diapositiva-perdida-version-algo-mas-extendida/
---

Tuve que saltarme una diapositiva en el [DataBeers de Madrid](http://www.datanalytics.com/2014/09/18/recordatorio-esta-tarde-participo-en-el-databeers-de-madrid/) del pasado jueves.

(A propósito, aquí están las [1+20 diapositivas](/uploads/charla_databeers_201409.pdf).)

La decimonona, de la que trata la entrada, viene a hablar de lo siguiente. Tenemos una base de datos con sujetos (`ids`) que hacen cosas en determinados momentos. No es inhabitual calcular la _frecuencia_ de esos sujetos así:


{{< highlight sql >}}
select id, count(*) as freq
from mytabla
where fecha between current_date - 7 and current_date
group by id
;
{{< / highlight >}}

Esa variable se utiliza frecuentemente ya sea como descriptor de los sujetos o como alimento de otros modelos.

No obstante, hacer lo anterior implica suponer que los eventos de cada sujeto siguen un proceso de Poisson homogéneo y que calculamos su frecuencia por máxima verosimilitud. En efecto,

{{< highlight R >}}
dat <- data.frame(y = c(3,2), x = letters[1:2])
res <- glm(y~-1 + x, data = dat, family = poisson())
exp(coefficients(res))
#xa xb
#3  2
{{< / highlight >}}

De lo que no quería hablar es de algo bastante manido: plantear algún tipo de modelo `y ~ x1 + x2 + ...`, donde `x1,...` son atributos de los sujetos, aleatorizando o sin aleatorizar por `ids`. A donde quería llegar es a que tal vez $latex N(\lambda)$, un proceso de Poisson homogéneo no sea el mejor modelo y no recoja aspectos importantes del proceso puntual subyacente (véase [esto](http://www.datanalytics.com/2014/08/11/procesos-puntuales-una-primera-aproximacion/) y [esto](http://www.datanalytics.com/2014/08/13/mis-procesos-puntuales-con-glm/)).