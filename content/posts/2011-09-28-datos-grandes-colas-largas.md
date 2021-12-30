---
author: Carlos J. Gil Bellosta
date: 2011-09-28 06:57:52+00:00
draft: false
title: Datos grandes, colas largas

url: /2011/09/28/datos-grandes-colas-largas/
categories:
- consultoría
tags:
- consultoría
- sql
- grandes datos
---

Codd desarrolló el modelo relacional —la base de casi todos los actuales sistemas de bases de datos— a finales de los años sesenta. El [modelo relacional](http://en.wikipedia.org/wiki/Relational_model), basado en la lógica proposicional, suponía una ventaja sustancial con respecto a los métodos anteriores de almacenar información y bien implementado permite resolver una serie de problemas que afectaban a los sistemas anteriores:

* Evita la redundancia de los datos.
* Minimiza los problemas de actualización de los datos en las tablas.
* Protege la integridad de los datos.
* Etc.

Sin embargo, hay motivos por los que dicho esquema no es enteramente válido en contextos en los que se manejan _datos grandes_ (para una definición sensata sobre lo que son "datos grandes", léase [este artículo](http://queue.acm.org/detail.cfm?id=1563874)).

La solución al problema de almacenar, procesar y acceder a conjuntos de datos grandes —implementada en diversas plataformas, tanto libres como propietarias— pasa por partirlos y distribuirlos en diversas máquinas y discos.

Pero partir plantea el problema adicional de decidir cuál es el criterio para distribuir la información entre las distintas máquinas. Los criterios a tener en cuenta son los siguientes:



1. **Uniformidad:** la distribución de la información por máquina debería ser (idealmente) uniforme: el uso de los recursos (CPU, disco, etc.) de cada máquina debería ser aproximadamente parejo. Piénsese que una operación distribuida de escritura o lectura no termina hasta que no lo hace la tarea asignada al último nodo, por lo que un nodo sobrecargado ralentizaría todo el sistema. Y que el espacio libre en disco se agota cuando se llena cualquiera de los discos.
2. **Localidad:** Por otro lado, información que se procese junta debería, idealmente, estar próxima, ser _local_. Si suelo sumar las ventas de todos mis establecimientos durante un mes, debería segmentar la información por mes. Si me interesa comparar la evolución de las ventas por establecimiento a lo largo del tiempo, segmentar por establecimiento. Las operaciones intranodo son mucho más económicas que las operaciones que involucran tráfico de datos entre nodos. De ahí que un criterio fundamental de diseño sea el de minimizar el tráfico de información entre nodos.

Existen segmentaciones _naturales_ de datos: por punto de venta, por cliente, por persona, por periodo, etc. que, teóricamente, deberían satisfacer el criterio de localidad. Sin embargo, en los datos reales existen, se manifiestan, las llamadas leyes de potencias. Por motivos sobre los cuales estadísticos, sociólogos, físicos y muchos otros han escrito toneladas de papel, muchas distribuciones _reales_ siguen las llamadas leyes de potencias (término que funciona en ocasiones como metáfora de la metáfora _de cola larga_ o _de cola gruesa_).

[![](/wp-uploads/2011/09/Long_tail.png#center)
](/wp-uploads/2011/09/Long_tail.png#center)

Por ejemplo, la distribución del número de SMS enviados por persona: habrá quien mande diez al mes; otros mandarán treinta; algunos, ciento; pero seguro que hay números desde los que se mandan —posiblemente de manera automatizada— mil, diez mil o incluso, un millón. Igual pasa con el número de operaciones en bolsa, el número de billetes de avión adquiridos por cliente (¡los habrá corporativos!), número de visitas a la página por IP, etc.

En estas situaciones, la distribución que resulta _ideal_ para la mayoría de los casos —los pequeños, los normales— es inadecuada en los atípicos: estos crean _picos_, saturan máquinas y discos, dan lugar a _cuellos de botella_.

Tradicionalmente, quienes diseñan bases de datos adoptan una visión _vertical_ de las tablas: las columnas tienen su función, son clave primaria, forman parte de un índice secundario, son atributos o clave externa de otra tabla. Y esas propiedades se extienden a todos los registros de la tabla.


[![](/wp-uploads/2011/09/Star-schema-example.png#center)
](/wp-uploads/2011/09/Star-schema-example.png#center)


Estoy convencido de que los datos grandes exigen una visión no únicamente vertical sino también _horizontal_, más próxima al contenido, a los datos, que tenga en cuenta el número, significado y estructura de las filas olvidando soluciones _de talla única_.

Teniendo ese principio en mente, una solución no enteramente ortodoxa —bajo cierta definición de _ortodoxia_— al problema de las tablas distribuidas con datos de cola pesada puede pasar por



* descomponer la tabla-relación (en nomenclatura, valga la redundancia, relacional) en dos o más tablas-objeto (no necesariamente relacionales)
* distribuir cada uno de ellos de acuerdo de la manera más indicada a su contenido y
* emplazar las filas de la tabla-relación original en las tablas-objeto más adecuadas a su naturaleza.

El acceso a los datos se realizaría de manera distinta según cuáles fuesen los que se necesitasen: cada objeto tendría sus propios índices, distribución, etc. Y el usuario final, si el esquema anterior se implementa y encapsula con cuidado, no necesitaría gestionar la complejidad subyacente. La distribución de cada tabla-objeto debería realizarse de manera que globalmente se satisfaciese el criterio de uniformidad y que el de localidad se cumpla para los más de los datos, los que, por otra parte, casi seguro, son de consulta más frecuente.
