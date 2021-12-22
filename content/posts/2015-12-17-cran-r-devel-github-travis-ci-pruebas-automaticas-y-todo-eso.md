---
author: Carlos J. Gil Bellosta
date: 2015-12-17 08:13:13+00:00
draft: false
title: CRAN, r-devel, GitHub, Travis CI, pruebas automáticas y todo eso

url: /2015/12/17/cran-r-devel-github-travis-ci-pruebas-automaticas-y-todo-eso/
categories:
- r
tags:
- cran
- github
- r
- travis
---

Estoy harto. La gente de CRAN me devolvió (con errores) un paquete que trataba de subir. Había hecho el prescriptivo

`R CMD check --as-cran etc.`

y el log era una patena. Pero había un par de _NOTES_ al pasar el test sobre la versión de desarrollo de R, `r-devel`. No solo hay que probar los paquetes en la versión que hay sino también en la que vendrá (tal y como está docuentado).

Mis paquetes en desarrollo están en [`r-forge`](https://r-forge.r-project.org). Hasta no hace tanto, `r-forge` corría _checks_ en las dos versiones preceptivas de R, la actual y la de desarrollo. Pero desde hace un tiempo dejó de hacerlo en la segunda.

Debería haber instalado la versión futura de R (compilando, etc.) pero siempre me ha dado pereza. Así que me hice el listillo, crucé los dedos y me pasó lo que me pasó: sartenazo.

Como buen perezoso, perdí mucho más tiempo del que me habría costado instalar `r-devel` en buscar una alternativa. Y di con [esto](https://github.com/metacran/r-builder). La solución que ahí se propone pasa por lo siguiente:

1. Pasar el desarrollo de `r-forge` a GitHub.
2. Darme de alta en [Travis CI](https://travis-ci.org). Travis CI es un servicio que automatiza las pruebas de código en GitHub: cada vez que se hace un _commit_, lanza una batería de pruebas (que hay que configurar de antemano, obviamente).
3. Copiar dicha configuración de [aquí](https://github.com/metacran/r-builder).

En el último enlace se indican los detalles de la configuración pero los reitero, por referencia, aquí:

1. Una vez registrados en Travis CI, hay que pedirle que busque (o sincronice) tus proyectos en GitHub. Hay que marcar aquellos sobre los que se quieren realizar pruebas.
2. Hay que copiar en el directorio raíz del paquete el fichero de configuración `.travis.yml`, esencialmente copiando el contenido de [este](https://github.com/metacran/r-builder/blob/master/sample.travis.yml) y adaptádolo si procede (en mi caso, ni eso).
3. Hay que añadir al fichero `.Rbuildignore` en la raíz del paquete el fichero anterior, [como aquí](https://github.com/cjgb/MicroDatosEs/blob/master/.Rbuildignore).
4. Adicionalmente, se le puede añadir al fichero `README.md` una imagen que indique si el test fue exitoso o no; las instrucciones están [aquí](https://docs.travis-ci.com/user/status-images/).

Con eso, después de cada _commit_, Travis CI hace su magia y ejecuta por su cuenta los `R CMD checks` en las dos versiones de interés de R.

Un único problema: solo prueba el paquete en Linux. Se puede forzar, creo, a que lo pruebe también donde la manzana a medio comer, pero no es mi guerra. Es un poco desafortunado, eso sí, que no lo haga sobre Windows. De hecho, tengo un paquete que corre estupendamente en Linux y falla estrepitosamente en lo de Microsoft... ¡y como no tengo acceso a ningún ordenador que corra eso!
