---
author: Carlos J. Gil Bellosta
date: 2020-12-16 20:11:37+00:00
draft: false
title: La interpretación de "significativo" en un caso muy concreto

url: /2020/12/16/la-interpretacion-de-significativo-en-un-caso-muy-concreto/
categories:
- estadística
tags:
- estadística
- fourier
- outliers
---




Comienzo por el final:





![](/wp-uploads/2020/12/significativo-1.png)






En el gráfico anterior se aprecian unos datos, generados mediante







    n <- 100
    x <- 1:n

    y_base <- cos(2 * pi * x / 100)
    y <- y_base + rnorm(n, 0, .4)

    datos <- data.frame(x = x, y_base = y_base, y = y,
                        cos1 = cos(2 * pi * x / 100),
                        cos2 = cos(4 * pi * x / 100))







a los que se ha ido añadiendo un ruido progresivamente, es decir, una serie de _outliers_ artificiales.







Las líneas rojas representan la predicción realizada mediante un modelo _de segundo orden de Fourier_ (si se me permite), es decir,







    modelo <- lm(y ~ cos1 + cos2, data = out)







Los p-valores correspondientes al segundo coeficiente (que no aporta nada al modelo generativo) son





![](/wp-uploads/2020/12/significativo_p_valores.png)






Es decir, con no tanto ruido, el coeficiente _parece_ significativo. Y por su propia naturaleza, la naturaleza del coseno,







![](/wp-uploads/2020/12/significativo_cosenos.png)








si sube cerca del cero para arrimarse a los _outliers_, tiene también que subir cerca del 50 porque tal es su naturaleza. Lo cual conlleva una exégesis muy agotadora de la significantísima naturaleza de ese repunte en el entorno del 50 en esos gráficos que he mostrado al comenzar y la enorme pérdida que representan para la humanidad si desaparece por la inopinada ocurrencia de usar métodos robustos de ajuste, etc.







En fin, nunca voléis solo con instrumentos.



