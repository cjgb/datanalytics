---
author: Carlos J. Gil Bellosta
date: 2010-09-26 23:13:39+00:00
draft: false
title: Rutinas de C en R

url: /2010/09/26/rutinas-de-c-en-r/
categories:
- r
tags:
- r
- programación
---

_[Nota: esta entrada está totalmente desactualizada y la mantengo en en blog por una mezcla de sentimentalismo y fidelidad a la "memoria histórica"; el interesado en cómo interconectar R y C (o C++) hoy hará bien en buscar en otra parte.]_

Esta entrada que ahora hago es un pequeño tutorial que publiqué en mi primera página de internet a principios de siglo, cuando todavía usaba Windows regularmente. Es posible que gran parte de lo que en ella cuente esté ya mandado a recoger. No obstante, tampoco hace tanto, eché mano de lo que en ella había dejado escrito para ver cómo migrar a Windows algo que había hecho en Linux y... todavía funcionó.

Si tuviese más interés por desarrollar en Windows, le haría una buena revisión. No teniéndolo, vuelvo a hacer público lo que hubo, por lo que si alguien detectase en ello desactualización, error u omisión culposa, agradecería que me lo hiciera saber para poder corregirlo.

Y, tras el preámbulo, hago comenzar la sustancia de la entrada:

Esta documento explica cómo incorporar código compilado escrito C dentro de un programa interpretado de R. Una de las maneras de hacerlo, la que se explorará aquí, es invocando una DLL escrita en C.  Consta de los siguientes apartados:


1. ¿Qué es R?
2. ¿Para qué utilizar código compilado?
3. ¿Qué es una DLL?
4. ¿Cómo se crea una DLL?
5. ¿Cómo invoca R una DLL?
6. Un ejemplo.
7. ¿Existen otros procedimientos para incorporar código compilado a R?



### ¿Qué es R?


[R](http://www.r-project.org) es un lenguaje de programación específicamente concebido para aplicaciones estadísticas que viene acompañado de un conjunto de potentes herramientas gráficas, pudiendo rivalizar con [SAS](http://www.sas.com) o [SPSS](http://www.spss.com) en gran número de aplicaciones.  R es poderoso y flexible, suficiente, tal cual, para la mayor parte de problemas estadísticos habituales. Además, [R puede ser descargado gratuitamente aquí](http://www.r-project.org).


### ¿Para qué utilizar código compilado?


Es posible implementar en pocas líneas de R programas que en C involucrarían algunos cientos de ellas.  Además, los programas escritos en R reflejan de una manera más clara los algoritmos estadísticos que implementan, a diferencia de C, que tiende a desdibujarlos.  Y es infinitamente más fácil de depurar por ser un lenguaje interpretado.  Pero, a la vez, adolece de los problemas típicos de este tipo de lenguajes: es bastante ineficiente -desesperadamente, en ocasiones- para resolver problemas que exigen un alto coste computacional.

Un programador de R curtido conoce los mecanismos que ofrece R -bastante numerosos, hay que decirlo- para evitar muchos de tales cuellos de botella.  Por ejemplo, puede resultar del orden de 100 veces más lento sumar las componentes de un vector mediante un bucle a hacerlo usando la función sum().  Desafortunadamente, para ciertas aplicaciones estas opciones no bastan.  La solución a este problema pasa, en muchos casos, por incorporar a los programas escritos en R rutinas escritas en otros lenguajes de programación compilados.

Una de las posibilidades que contempla R es la de utilizar funciones contenidas en una DLL escrita en C y, precisamente, el objeto de esta página es el de explicar cómo construir la DLL y cómo crear el interfaz adecuado entre ella y R en un entorno Windows.


### ¿Qué es una DLL?


Una [DLL](http://es.wikipedia.org/wiki/DLL) es, en traducción literal del acrónimo, una biblioteca -librería, dicen algunos- de enlace dinámico. Una DLL contiene -de hecho, consiste en- cierto número de funciones compiladas que no se ejecutan autónomamente -por ejemplo, al pinchar sobre ellas con el ratón- sino que son invocadas por otros programas.  Dentro de un fichero ejecutable -con extensión exe, por ejemplo- hay muchas funciones compiladas que pueden ser invocadas por el programa en cuestión.  Pero un programa también puede invocar funciones compiladas contenidas en un fichero externo.  Este fichero externo es una DLL.

Un programa, para acceder a una de las funciones contenidas en una DLL necesita cargarla primero, es decir, solicitar al sistema operativo que la ubique en la memoria del ordenador.  Pero esto no tiene que ocurrir necesariamente cuando se ejecuta el programa, sino únicamente cuando se necesita por primera vez una de sus funciones.  Es típico, en ocasiones, detectar cierta demora en un programa al, por ejemplo, abrir por primera vez una ventana.  A veces, dicha demora viene acopañana de cierta actividad en el disco duro.  Es probable que eso se deba a que el programa está cargando la DLL encargada de gestionar la ventana en cuestión. En tales casos, a no ser que el programa descargue explícitamente la DLL, esta demora no ocurrirá en accesos sucesivos a dicha ventana.  Incluso, varios programas distintos pueden invocar una misma DLL.  Todo lo que necesitan saber es qué funciones contiene dicha DLL, cómo interactuar con ellas -es decir, qué parametros exigen, qué tipo de valores devuelven- y dónde se ubica dentro del árbol de ficheros del disco duro.

Gracias a las DLLs, por lo tanto, los ficheros ejecutables pueden ser más pequeños y los programas más eficientes. El que varios de ellos puedan, en teoría, compartir DLLs comunes permite, además, un ahorro significativo en espacio de disco duro.  R, en Windows, aparte del fichero Rgui.exe con el que arranca, incorpora varias DLLs adicionales que puede invocar en un momento dado.  Además, sus diversos módulos -o bibliotecas, o librerías, de nuevo- pueden incluir sus propias DLLs.

Finalmente, como se verá más adelante, R brinda la posibilidad al usuario de crear e incorporar sus propias DLLs, cargarlas y descargarlas a voluntad y acceder a las funciones que contienen mediante un conjunto específico de funciones.


### ¿Cómo se crea una DLL?


Todos los compiladores para Windows, que el autor conozca, incorporan la posibilidad de crear DLLs.  Los detalles varían de unos a otros y considerarlos en su conjunto entrañaría algunas dificultades técnicas que este breve manual quiere obviar.  Por eso se concentrará únicamente en el compilador para C -entre otros- de [GNU](http://www.gnu.org) para Windows, [MinGW, que puede descargarse gratuitamente aquí](http://www.mingw.org/).

Supóngase que se ha creado el fichero funciones.c que contiene una serie de funciones escritas en C que se desean invocar desde R.  Dichas funciones, por supuesto, deben atenerse a una serie de requisitos específicos que se explicitarán más adelante, pero, por el momento, y esto vale para cualquier aplicación, baste decir que el comando mínimo necesario para crear una DLL que se llame funciones.dll a partir de funciones.c utilizando el compilador MinGW que hay que introducir en la ventana de MS-DOS es


{{< highlight c >}}
gcc -shared -o funciones.dll funciones.c
{{< / highlight >}}

Por supuesto, tanto gcc, contenido en el directorio bin de donde quiera que se haya instalado MinGW, como el fichero funciones.c, han de estar visibles, es decir, o en el directorio en el que se ha tecleado el comando o dentro del path.  Estaría de más indicar que gcc admite comandos adicionales que pueden ser de interés en determinadas circunstancias.  El anterior es, se reitera, un comando mínimo: la opción -shared especifica que se está creando una DLL y -o indica que lo que le sigue, esto es, funciones.dll, es el nombre que se le ha querido dar.


### ¿Cómo se invoca una DLL?


Supóngase que se ha creado funciones.dll de acuerdo con el procedimiento anterior.  Para poder acceder a las funciones que contiene, R tiene, en primera instancia, que cargar la DLL.  Esto se consigue mediante la función dyn.load().  Suponiendo que funciones.dll está contenida en el directorio C:/MisDLLs, basta teclear

{{< highlight R >}}
dyn.load("C:/MisDLLs/funciones.dll")
{{< / highlight >}}

para cargarla.  Una vez deja de ser necesaria, se la puede descargar tecleando

{{< highlight R >}}
dyn.unload("C:/MisDLLs/funciones.dll")
{{< / highlight >}}

Una vez cargada funciones.dll, si éste contiene una función denominada func1, se puede comprobar si en efecto está disponible tecleando

{{< highlight R >}}
is.loaded("func1")
{{< / highlight >}}

que debería ser TRUE de haberse seguido los pasos anteriores.  Si funciones.dll ha sido compilada con un compilador distinto de MinGW, es bastante posible que is.loaded("func1") resulte ser FALSE porque muchos de ellos tienden a _decorar_ el nombre de las funciones de las DLLs de una manera un tanto impredecible, de modo que func1 acaba llamándose _func1, _func1@4 o ?func1@@YDAOEW3N12KDAS.

R no posee ningún comando capaz de enumerar las funciones accesibles dentro de una DLL.  Finalmente, para invocar la función func1 de funciones.dll, R utiliza la función .C -nombre que subraya el hecho de que sólo es válida para funciones escritas en C-, que implementa el interfaz requerido entre R y la DLL.  Dicho interfaz determina, por una parte, la sintaxis de la función .C e impone ciertas restricciones en la naturaleza de las funciones de la DLL.  Los aspectos fundamentales a tener en cuenta son:


* Cómo invoca .C a la función y cómo le transfiere datos.
* En particular, cómo asegura .C la compatibilidad del tipo de los datos transferidos.
* Cómo devuelve la función los resultados a .C.
* Cómo se accede desde R a los datos que la función _deposita_ en .C.

Pero estas cuestiones se discuten mejor frente a un ejemplo concreto.


### Un ejemplo


Supóngase como arriba que el fichero funciones.c es

{{< highlight c >}}
void func1(double *v1, double *v2, int *longitud, double*producto){
	int i;
	*producto = 0;
	for(i =0; i < *longitud; i++){
	*producto += v1[i]*v2[i]; }
}
{{< / highlight >}}


Esta función implementa el producto escalar entre dos vectores de dimensión dada por *longitud que pasan por referencia a través de v1 y v2, devolviéndolo a través del puntero producto.  Si este fichero se compila como se indica más arriba para crear funciones.dll y se carga en R, el código

{{< highlight c >}}
a <- rnorm(14)
b <- rnorm(14)
producto <- .C("func1", as.double(a), as.double(b), as.integer(14), resultado=double(1))$resultado
{{< / highlight >}}

ubicará el producto vectorial de los vectores de dimensión 14 a y b en la variable producto. Hay que tener en cuenta -y son normativos, no meramente descriptivos de la situación anterior- los siguientes aspectos:


1. `func1` es una función de tipo `void`: toda transferencia de datos se realiza a través de sus parámetros; en el caso particular anterior, a través 	del último.
2. Al pasar datos a la función, hay que forzar la compatibilidad de tipos entre los manejados por R y los que exige la función externa; así, el tipo double de R corresponde a double de C e integer de R a int de C. Una tabla más completa de equivalencias puede consultarse en la documentación de R.
3. `.C` devuelve una lista a R; para acceder a alguno de sus campos hay que darle un nombre, como se ha hecho en el ejemplo con resultado, y utilizarlo con combinación con el operador $ para transferirlo a una variable interna, producto, en este caso.



### ¿Existen otros procedimientos para incorporar código compilado a R?


En efecto, las nuevas versiones de R incluyen métodos alternativos y más potentes para incorporar código compilado a R que permiten, por ejemplo, invocar desde C estructuras de datos o funciones de R.  Incluso es posible invocar funciones de R desde aplicaciones independientes escritas en C íntegramente. No obstante, estos procedimientos, aparte de exigir una implementación mucho más compleja, tienen una utilidad marginal puesto que su potencial campo de aplicación se solapa grandemente con aquél en que la combinación de código en R combinado o no con código en C como se describe más arriba es lo suficentemente eficiente.
