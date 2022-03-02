---
author: Carlos J. Gil Bellosta
date: 2016-12-19 08:13:22+00:00
draft: false
title: Problemas navideños de/con R

url: /2016/12/19/problemas-navidenos-decon-r/
categories:
- r
tags:
- ejercicios
- r
- formación
---

Acabo de sugerir a mis alumnos de [KSchool](http://kschool.com/) una lista de problemas después de sus 10 primeras horas de contacto con R.

Uno de ellos, advierto, y les he advertido (porque yo, no siendo rector de universidad pública alguna, no cuento el plagiar entre mis vicios) es una versión de otro publicado [aquí](http://r-exercises.com/).

### Ejercicio

Construye una matriz que dada una entrada del tipo

{{< highlight R >}}
a <- c('NAME:Maria /COUNTRY:uruguay /EMAIL:mariaUY@gmail.com',
'NAME:Paul/COUNTRY:UK /EMAIL:PaulUK@gmail.com',
'NAME:Jhon /COUNTRY:USA /EMAIL:JhonUSA@gmail.com',
'NAME:Carlos /COUNTRY:Spain /EMAIL:CarlosSP@gmail.com')
{{< / highlight >}}

devuelva un tabla con columnas `name`, `country` y `email` (con los datos correspondientes).

### Ejercicio

Crea un paquete de R con dos o tres funciones tontas. Una de ellas tiene que llamarse `suma.dos.numeros` y tiene que aceptar dos parámetros: los números que quieres sumar. Luego súbelo a Github.
Para puntuar en este ejercicio, me tienes que pasar una versión del siguiente código,

{{< highlight R >}}
library(devtools)
install_github("url del paquete")
library("nombre del paquete")
suma.dos.numeros(2, 2)
suma.dos.numeros(2, 5)
?suma.dos.numeros
remove.packages("nombre del paquete")</code>
{{< / highlight >}}

que instale tu paquete, ejecute lo que me interesa y lo elimine después.

### Ejercicio

Crea una función que admita como argumento dos cadenas de texto y compruebe si la una es un [anagrama](https://es.wikipedia.org/wiki/Anagrama) de la otra.

### Ejercicio

Crea una función que dado la lista de nombres de ficheros tales como

{{< highlight R >}}
a <- c("ventas_norte_20161225.txt", "propuestas_sur_20161211.csv")
{{< / highlight >}}

cree un `data.frame` con las columnas `tipo`, `zona` y `fecha` con sus formatos correspondientes. La extensión del fichero puede ser cualquiera (pero siempre acaba en varias letras, una o más, precedidas de un punto).

### Ejercicio

Baja datos en Excel de [http://www.geoportalgasolineras.es/](http://www.geoportalgasolineras.es/) y léelos en R. Puede que quieras exportarlos a CSV o investigar cómo leer Excel directamente a R. Limpia lo que tengas que limpiar y crea un diagrama de cajas: precios (del tipo de combustible que quieras) por comunidad autónoma.

### Ejercicio

Usando los datos anteriores, haz un diagrama de barras mostrando el número de gasolineras de las tres marcas más populares y una cuarta con el resto.

### Ejercicio

Construye a partir de la anterior una tabla que contenga las tres gasolineras más caras por provincia.

### Ejercicio

Pinta la latitud y longitud de las gasolineras (con un diagrama de dispersión). Usa un filtro (sobre las coordenadas, no sobre la columna de CCAA) para excluir las de Canarias y repite el ejercicio.

### Ejercicio

En una empresa de seguros, entran _siniestros_ de acuerdo con una distribución de Poisson de parámetro 1000 (al mes). Cada siniestro le cuesta a la empresa una cantidad que es lognormal de parámetros `mu = 3` y `sigma = 3`. Crea una función que calcule una simulación del coste mensual de los siniestros. Obtén una muestra grande y construye el histograma de la distribución de costes.

### Ejercicio

Repite el ejercicio anterior para una empresa que vende cachivaches por internet. Las visitas son Poisson de parámetro 1000, el 1% de los clientes compra y, cuando compran, el importe es lognormal de parámetros `mu = 3` y `sigma = 3`.

### Ejercicio

En un país viven 47M de habitantes; de ellos, 23M pertenecen a la población activa. Se hace una encuesta y se extrae una muestra de 180000. De ellos, 90000 pertenecen a la población activa (trabajan o quieren trabajar, tengan o no empleo). Resulta que de ellos, 17019 dicen estar en el paro (tasa de paro del 18.91%). Calcula el histograma de los posibles resultados que se obtendrían al repetir la encuesta.
Pista: supón que el 18.91% de los 23M son parados. Extrae muetras de 90000 de ellos y cuenta cuántos están en el paro. Sandrán porcentajes similares pero no exactamente iguales al 18.91. Mide esa dispersión, que debería ser (parecido a, en una aproximación burda) el _error de la encuesta_.

### Ejercicio

Toma un texto largo en Español (p.e., el Quijote) y:

* Ponlo en minúsculas.
* Extrae sus palabras.
* Calcula la frecuencia de cada letra.
* Para cada palabra, calcula la frecuencia promedio de cada letra y crea un histograma.
* Calcula la frecuencia media de las letras de “asacd” y de “kkjazwu”.
* Compáralas con las frecuencias promedio (¿dónde caen en el histograma?).

¿Te das cuenta de que has creado un sistema que detecta la segunda palabra como _no española_?

Mejora el sistema anterior para detectar la no españolidad de _asacd_. Para cada palabra, crea una matriz que tenga como filas y como las columnas las letras más el espacio. Que la posición “fh” contenga la probabilidad de que detrás de una `f` haya una `h`. Que la primera _letra_ de una palabra sea el espacio y la última, también. De manera que se pueda tener la probabilidad de que una palabra empiece/termine en una letra determinada.
Modifica el ejercicio anterior para ver cómo _asacd_ no parece muy española.

### Ejercicio colaborativo

Vamos a crear entre todos un detector de tantos idiomas como alumnos hay en clase. Vamos a coordinarnos para asignar un idioma a cada uno, crear una cuenta en github, etc. y acabar montando un _shiny_ con los resultados. Se busca coordinador del proyecto que se encargue de la gestión (creo que sé de alguien a quien se le daría muy bien esta tarea).