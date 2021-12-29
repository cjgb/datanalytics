---
author: Carlos J. Gil Bellosta
date: 2013-01-10 07:29:36+00:00
draft: false
title: Una aplicación SEO con R

url: /2013/01/10/una-aplicacion-seo-con-r/
categories:
- r
tags:
- r
---

Leyendo [_Bad Data_](http://shop.oreilly.com/product/0636920024422.do) vine a saber que Google deja en los _logs_ de Apache información muy relevante sobre la optimización del sitio. En efecto, cuando alguien encuentra tu página en Google, Apache deja (casi siempre) en los logs una línea similar a

`188.77.154.135 - - [30/Dec/2012:09:35:28 +0000] "GET /blog/page/33/?p=... HTTP/1.1" 200 15348 "http://www.google.es/url?sa=t&rct=j&q=breiman%20dos%20culturas%20estadistica&source=web&cd=21&cad=rja&ved=0CDIQFjAAOBQ&url=http%3A%2F%2Fwww.datanalytics.com%2Fblog%2Fpage%2F33%2F%3Fp%3D...&ei=1QrgULj7E6qk0QXRwYHgCQ&usg=AFQjCNHpdZUVD15sC7CdOvUOppdcXAjweQ&sig2=hKh3vCnCrvublGxQXoojyg&bvm=bv.1355534169,d.d2k" "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; ca-es) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1"`

La parte

`"http://www.google.es/url?sa=t&rct=j&q=breiman%20dos%20culturas%20estadistica&source=web&cd=21&cad=rja&ved=0CDIQFjAAOBQ&url=http%3A%2F%2Fwww.datanalytics.com%2Fblog%2Fpage%2F33%2F%3Fp%3D...&ei=1QrgULj7E6qk0QXRwYHgCQ&usg=AFQjCNHpdZUVD15sC7CdOvUOppdcXAjweQ&sig2=hKh3vCnCrvublGxQXoojyg&bvm=bv.1355534169,d.d2k"`

indica que el usuario buscó en `google.es` la cadena `breiman dos culturas estadistica` y la expresión `cd=21` significa que mi página era el resultado número 21 según los algoritmos de Google. (Aunque dicha posición puede variar según el idioma del navegador y otras circunstancias que Google usa para _personalizar_ las búsquedas).

Intrigado por el comportamiento de mis usuarios, tomé (parte de) mis _logs_, filtré los que contenían la cadena `google` y ejecuté el siguiente código:

{{< highlight R "linenos=true" >}}
tmp <- read.table("logs.log", sep = " ", header=F)

cadena <- as.character(tmp$V9)   # posición del "referral"
cadena <- strsplit(cadena, "&")
cadena <- Filter( function(x) any(grepl("^q=",  x)), cadena )
cadena <- Filter( function(x) any(grepl("^cd=", x)), cadena )

res <- lapply(cadena, function(x){
		c(x[grepl("^q=", x)], x[grepl("^cd=", x)])
})

res <- data.frame(do.call(rbind, res))

res[,2] <- as.numeric( gsub("cd=", "", res[,2]) )
res[,1] <- sapply(as.character(res[,1]), URLdecode)
res[,1] <- gsub("q=", "", res[,1])
res <- res[res[,1] != "", ]
{{< / highlight >}}

Con él he podido adquirir conocimientos tan profundos como que para la cadena

`el niño que cumple años el 22 de mayo`

estoy en primera posición en Google. Aunque también para otras tales como

* año de la estadística
* blog datanalytics
* consultoría estadística
* cual es mejor matlab r
* datanalytics
* datanalytics.com
* descargar sas guide con licencia
* diferencia entre riesgo e incertidumbre ejemplos de cada uno
* el ine y el año internacional de la estadistica
* elements of statistical leemos
* grafica de tarta con sas 9.3
* precio licencia de sas
* que es la varianza explicada
* r ordenar datos segun factor
* rapidminer prediccion "series temporales"
* regresion con cuantiles
* regresion cuantiles en r
* the risk of using spreadsheets for statistical analysis
* trabajar con fechas en r
* www.datanalytics.com

Y que, por otra parte, algunos de mis usuarios son contumaces y recorren y recorren las páginas de resultados de Google hasta que me encuentran. En la lista siguiente aparecen algunas cadenas y su posición en la lista de resultados:

* breiman dos culturas estadistica, 21
* ejemplos opencobol, 23
* bajar sas estadistica, 68
* vb6 statistical analysis, 43
* alternativa a graficas de excel, 52
* covarianza excel, 15
* lenguaje de programacion r, 51
* mapreduce ejemplos, 44
* rapidminer prediccion series, 26
* statistician resume matlab, 51
* "fabrica+interactiva", 428

Finalmente, presento una gráfica del número de visitas según la posición (truncada en 10):

[![](/wp-uploads/2013/01/visitas_por_posicion1.png)
](/wp-uploads/2013/01/visitas_por_posicion1.png)

