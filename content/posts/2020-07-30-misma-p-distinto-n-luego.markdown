---
author: Carlos J. Gil Bellosta
date: 2020-07-30 09:13:00+00:00
draft: false
title: Misma p, distinto n, luego...

url: /2020/07/30/misma-p-distinto-n-luego/
categories:
- estadística
- r
tags:
- estadística
- p-valor
- prop.test
- r
---




Tres situaciones. La primera:







    n <- 20
    y <- 15
    test <- prop.test(y, n, p = .5)
    test$p.value
    # [1] 0.04417134
    test$conf.int
    # 0.5058845 0.9040674







La segunda:







    n <- 200
    y <- 115
    test <- prop.test(y, n, p = 0.5)
    test$p.value
    #[1] 0.04030497
    test$conf.int
    # 0.5032062 0.6438648







Y la tercera:







    n <- 2000
    y <- 1046
    test <- prop.test(y, n, p = 0.5)
    test$p.value
    #[1] 0.0418688
    test$conf.int
    # 0.5008370 0.5450738







En resumen:





  * mismo problema  * distintos tamaños muestrales  * mismo p-valor (aproximadamente)  * distintos estimadores  * distintos intervalos de confianza





La pregunta: ¿qué circunstancia es más favorable? Una respuesta, [aquí](https://statmodeling.stat.columbia.edu/2015/10/13/what-do-you-learn-from-p-05-this-example-from-carl-morris-will-blow-your-mind/).



