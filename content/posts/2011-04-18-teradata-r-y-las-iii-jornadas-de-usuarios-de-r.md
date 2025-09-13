---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2011-04-18 07:50:32+00:00
lastmod: '2025-04-06T19:02:32.403660'
related:
- 2011-12-09-bajo-el-capo-de-teradatar.md
- 2010-05-19-c2bfen-que-se-parecen-oracle-y-teradata-a-excel-y-word.md
- 2010-05-09-datatables-tablas-con-busqueda-binaria-en-r.md
- 2010-11-22-c2bfotro-bug-de-teradata.md
- 2011-03-07-los-dinosaurios-y-r-dos-enlaces.md
tags:
- r
- sql
- teradata
title: Teradata, R y las III Jornadas de Usuarios de R
url: /2011/04/18/teradata-r-y-las-iii-jornadas-de-usuarios-de-r/
---

Como parte de mis atribuciones dentro del comité organizador de las [III Jornadas de Usuarios de R](http://www.usar.org.es) estoy tratando de conseguir la participación (y tal vez la financiación) de empresas e instituciones. Me ha parecido oportuno invitar a tomar parte en ellas a Teradata, empresa que, según la Wikipedia,

>[está] especializada en herramientas de data warehousing y _herramientas analíticas empresariales_.

Teradata no se postula como un vendedor de herramientas de almacenamiento: quiere ir más allá. Su mercado es el de las empresas que aspiran a algo más que a que sus datos permanezcan varados en discos duros esperando, como mucho, a ser exportados a aplicaciones externas. Teradata dice ser capaz de realizar el análisis estadístico de los datos dentro de su propio sistema, eso que se ha dado en llamar _[in database analytics](http://en.wikipedia.org/wiki/In-database_processing)_.

Con ese objetivo, a su implementación de SQL ha añadido una serie de funciones estadísticas que permiten realizar operaciones que exceden las relativamente limitadas del primero. Teradata las pone a disposición de sus usuarios a través de un API y —ya vamos entrando en materia— ha creado un paquete de R propietario (aunque gratuito) denominado TeradataR. Pueden encontrarse detalles sobre dicho paquete y enlaces para descargarlo en [este artículo](http://developer.teradata.com/applications/articles/in-database-analytics-with-teradata-r).

Dado, además, [el entusiasmo que tiene Teradata por R](http://www.teradatamagazine.com/v09n03/Connections/R-you-ready/) —y retomo con eso el hilo del artículo— entendí que la empresa estaría encantada de dar a conocer su tecnología a la comunidad de usuarios de R. Así que contacté con las oficinas españolas de Teradata con el fin de ofrecerles la posibilidad de hacernos una demostración práctica e ilustrarnos en sus sus posibles usos en el seno de las Jornadas.

El primer contacto, por correo electrónico, fue poco fructífero: pasaron días sin recibir respuesta. Al final, tras unas cuantas llamadas telefónicas, pude contactar con la persona que me indicaron se encarga _de ésas cosas_ en la empresa. Le expliqué quiénes éramos, qué estábamos organizando, cuál era nuestro interés y le pregunté por la posibilidad de que alguno de sus consultores nos ilustrase en vivo las bondades y aplicaciones del paquete que han creado frente a una audiencia que, me consta, tiene el máximo interés por este tipo de asuntos. Y en la que, todo hay que decirlo, hay representanes de organizaciones que son clientas de sus productos.

¿Creerán mis lectores que se excusó con cuatro palabras? ¡Dizque habían _cerrado_ el año y que no pensaban participar en eventos que no fuesen _propios_! ¡Cuán brusco y poco delicado remate para un esfuerzo que sin duda ameritaba un final más amable!

Así que como quedó claro que tan falto está Teradata de recursos para dar publicidad a sus propios productos; como es gente que, a pesar de su brusquedad, en el fondo, me cae simpática por la promoción que hacen del _software_ libre a través de iniciativas tales como TeradataR y dado que tan ocupados parecen prever estar de acá a noviembre, voy a asumir en mis hombros desinteresadamente en esta entrada la tarea de ilustrar con ejemplos el uso de su tecnología puntera.

Descargué primero el paquete de la página arriba indicada —para lo que hube de registrarme previamente en su portal. La instalación, todo ha de decirse, fue inmediata y sin problemas. El paquete apenas ocupa, en gran medida porque lo aligera lo magro de su documentación. Ha de notarse que depende del paquete `RODBC`, del que ya disponía.

Y comencé el análisis de TeratataR:


{{< highlight R >}}
    library( teradataR )
    #Loading required package: RODBC
    tdConnect( "prod" )           # servidor de producción
                                  # dos líneas y todo bien de momento

    # apunto a midb.borrar_cjgb
    tdf <- td.data.frame("borrar_cjgb", "midb")
    # el objeto resultante no reside memoria

    dim( tdf )
    #[1] 585592      9         # estupendo

    head( tdf )
    #Teradata table "midb"."borrar_cjgb"

    #[1] "COD_GESTION" "FECHA"   "COD_USU"     "COD_OFICINA" "DES_NOMBRE"
    #[6] "DES_APELLIDO"

    #585592 rows                   # exacto! qué bien!
{{< / highlight >}}


Pero a partir de este punto comenzaron mis infortunios. Aunque pude ejecutar


{{< highlight R >}}
    summary( tdf )
{{< / highlight >}}


sin más problemas que el de una excesiva demora para obtener una salida equivalente a `summary` sobre un `dataframe` habitual, el mismo comando con una tabla algo sustancialmente más teradatesca (es decir, grande) devolvió


{{< highlight R >}}
    summary( tdf )
    #Error in quan[[3]] : subscript out of bounds
{{< / highlight >}}


después de media hora de ejecución. Por otra parte, `hist( tdf )` sobre la tabla más pequeña creó una cosa que no era un histograma sino un amazacotado gráfico de puntos en el que no se sacaba nada en claro. Además, en la tabla grande, al tratar de calcular la mediana de una columna numérica, obtuve


{{< highlight R >}}
    median( tdf["IMPORTE_TOTAL"] )
    # [1] NA NA
    # Warning message:
    # In median.td.data.frame(tdf["IMPORTE_TOTAL"]) : NAs introduced by coercion
{{< / highlight >}}


¡Nulos después de un buen rato! Claro, no pude calcular la media por culpa de los nulos... pero al comprobar los valores en la tabla observé que no había ninguno. O eso me pareció porque, digo yo, una aplicación tan sólida como Teradata ha de ser necesariamente más de fiar que los miopes ojos de uno.

El paseo por estas elementales funciones de TeradataR resultó atrozmente frustrante y me hizo reflexionar amargamente en los motivos de esa torpeza mía que me impedía disfrutar de ese paraíso analítico que Teradata ponía a mi disposición y ponderar si es que me vuelvo viejo o si, más bien, la desafortunada negativa de Teradata a participar en las Jornadas habría hecho mella en mi ecuanimidad. Sí, porque ¿quién que no esté armado de la mediana (sepa o no hacerla andar), la función cuantil, el algoritmo de k-medias, la función sigmoidal, el test de Wilcoxon no se siente con ánimos como de invadir, como poco, un país mediano? Teradata regala a quien pueda costearse sus licencias la entera totalidad de la veintena de funciones analíticas que serían la envidia de la calculadora programable de un bachiller.

Termino acá mi paseo por TeradataR con la decepción de no haber podido prestar mejor servicio a la comunidad de usuarios de Teradata y R y con el propósito de enmendarme y aprender lo que fuere necesario por no dejar malparada la reputación de unos y otros.

¡Ojalá pudiésemos contar en las Jornadas de R con un verdadero consultor de Teratada que nos guiase más certeramente que yo por los arcanos del paquete!