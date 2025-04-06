---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2014-06-06 07:12:30+00:00
draft: false
lastmod: '2025-04-06T18:50:06.178884'
related:
- 2015-06-15-paralelismo-en-r-memorandum.md
- 2016-02-23-validacion-cruzada-en-r.md
- 2014-05-15-r-en-paralelo.md
- 2011-04-08-paralelizacion-de-bucles-con-foreach.md
- 2010-09-01-el-paquete-multicore-de-r.md
tags:
- paralelización
- validación cruzada
- r
title: Validación cruzada en paralelo
url: /2014/06/06/validacion-cruzada-en-paralelo/
---

Estoy sin tiempo, así que os suelto el código y me largo a casa a no cenar. Es así:

{{< highlight R >}}
library(parallel)

cl <- makeCluster(8)

# solo si hay aleatorización
# clusterSetRNGStream(cl, 123)

clusterEvalQ(cl,
{
	# las librerías necesarias tienen que cargarse
	# en cada esclavo
	library(rpart)

	# en la práctica, hay que cargar los datos
	# (¿desde fichero?) en cada esclavo
	my.data <- iris

	# lo mismo con las funciones necesarias
	foo <- function(x, dat){
		train <- 1:nrow(dat) %% 10 != 1
		mod <- rpart(Species ~ ., data = dat[train,])
		res <- predict(mod, dat[!train,])
	}
})

res <- parSapply(cl, 0:9,
	function(x) foo(x, my.data), simplify = F)
{{< / highlight >}}