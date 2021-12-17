---
author: Carlos J. Gil Bellosta
date: 2011-08-11 07:28:36+00:00
draft: false
title: Don't be loopy!

url: /2011/08/11/dont-be-loopy/
categories:
- estadística
- r
tags:
- estadística
- r
- sas
- programación
---

_[Don't be loopy!](http://www.pnwsug.org/sites/test.pnwsug.org/files/proceedings/David%20Cassell%20-%20Don't%20Be%20Loopy.pdf)_ es el título de una presentación realizada en el SAS Global Forum de 2007. Tiene que ver con el motivo que me hizo en mi día abandonar SAS y buscar —entonces aún no lo conocía— el cobijo de R: sus limitaciones para todo lo que tiene que ver con simulaciones, remuestreos, _jackknifes_, _bootstraps _y similares.

El artículo muestra lo que debería ser el estado del arte para realizar este tipo de programas con SAS. En el primero de los problemas que estudia, que denomina _bootstrap simple_, muestrea 1.000 veces un conjunto de datos de 50.000 observaciones y calcula el valor de la curtosis para cada una de ellas. Finalmente, proporciona un intervalo de confianza para dicho valor.

El artículo recomienda no utilizar bucles. Y mucho menos, bucles usando las llamadas macros. Propone usar el `PROC SURVEYSELECT` para muestrear los datos. Incluso, dado que `SURVEYSELECT` lee el fichero de entrada del disco una vez por muestra —es decir, 1000 veces en total en el ejemplo—, propone el comando `sasfile` para copiar los datos en RAM. La sintaxis es la siguiente:


{{< highlight sas "linenos=true" >}}
sasfile YourData load;
proc surveyselect data=YourData ...;
run;
sasfile YourData close;
{{< / highlight >}}



El código recomendado para resolver en SAS este problema es


{{< highlight sas "linenos=true" >}}
data YourData;
    do i = 1 to 50000;
        x = ranuni(1234);
        output;
    end;
    keep x;
run;

sasfile YourData load;
proc surveyselect data=YourData out=outboot
    seed=30459584
    method=urs samprate=1 outhits
    rep=1000;
run;
sasfile YourData close;

ods listing close;

proc univariate data=outboot;
    var x;
    by Replicate;
    output out=outall kurtosis=curt;
run;

ods listing;

proc univariate data=outall;
    var curt;
    output out=final pctlpts=2.5, 97.5 pctlpre=ci;
run;
{{< / highlight >}}


En mi ordenador necesita 70 segundos para ejecutarse y crea un fichero, `outboot.sas7bdat`, que ocupa 1,2 GB en mi disco duro. El código equivalente en R es


{{< highlight sas "linenos=true" >}}
library( moments )
dat <- runif( 50000 )
kurtosis.dat <- replicate( 1000,
                kurtosis( sample( dat, length( dat ), replace = T ) ) )
quantile( kurtosis.dat, c( 0.025, 0.975 ) )
{{< / highlight >}}


que no genera ficheros en disco, no incrementa de manera perceptible la memoria utilizada y corre en 8 segundos sobre la misma máquina.

¿Será por esto que SAS no quiere venir a las [jornadas de usuarios de R](http://www.usar.org.es)? ¿No será más bien que tendremos que ir nosotros a las suyas para enseñarles cómo se han de hacer las cosas?
