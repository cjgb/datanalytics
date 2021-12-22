---
author: Carlos J. Gil Bellosta
date: 2014-06-06 07:12:30+00:00
draft: false
title: Validación cruzada en paralelo

url: /2014/06/06/validacion-cruzada-en-paralelo/
categories:
- r
tags:
- paralelización
- r
---

Estoy sin tiempo, así que os suelto el código y me largo a casa a no cenar. Es así:



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

    res <- parSapply(cl, 0:9, function(x) foo(x, my.data), simplify = F)
