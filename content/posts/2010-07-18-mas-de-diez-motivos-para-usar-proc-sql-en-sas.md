---
author: Carlos J. Gil Bellosta
date: 2010-07-18 16:01:59+00:00
draft: false
title: Más de diez motivos para usar PROC SQL en SAS

url: /2010/07/18/mas-de-diez-motivos-para-usar-proc-sql-en-sas/
categories:
- programación
tags:
- sas
- sql
- programación
---

Hace no mucho escribí una [entrada](http://www.datanalytics.com/blog/2010/07/03/¿programa-vd-en-sas-¡aprenda-a-ser-indispensable/) en este blog sobre, bromas aparte, cómo no escribir código SAS. Habría respondido _in situ_ a uno de los comentarios que hicieron mis lectores pero, abusando de mi condición de dueño del blog, lo voy a hacer desde más encumbrado púlpito: una entrada _ad hoc_. Conste que escribo para discrepar. Pero conste también que lo hago desde la más genuina cordialidad y con la esperanza de generar un debate que a todos nos enriquezca.

El comentario venía a ser una crítica al uso de SQL dentro de SAS motivada parcialmente por el hecho de que quienes abusan de tal procedimiento de SAS son, precisamente, quienes menos SAS conocen (opinión con la que estoy bastante de acuero).

Dicho lo cual, manifestaré que cuando programo en SAS suelo utilizar SQL siempre que me es posible por las razones que enumero a continuación.

Las tres primeras son anecdóticas:


* SQL es parte integrante de SAS Base tanto como los _pasos data_. No es como SAS IML, SAS SCM u otros lenguajes de dominio que pueda vender SAS Institute.
* SAS utiliza SQL profusamente: por ejemplo, prácticamente todo el código que genera su herramienta de ETL es SQL (con algún _paso data_ circunstancial para usar _hashes_ y poco más). ¡Algún motivo tendrá!
* SAS, de alguna manera, promueve el uso de SQL. Véase si no este [artículo](http://www2.sas.com/proceedings/sugi23/Handson/p131.pdf) que plantea 10 motivos (no los más poderosos) para usar SQL.

**Consideraciones de legibilidad**

La legibilidad es condición imprescindible para que el código sea bueno. Dejando aparte el hecho de que un código legible suele ser más eficiente que otro que no lo es, la legibilidad es condición indispensable para la mantenibilidad. Y comparemos dos pedazos de código aparecidos en un [artículo que ya conocemos](http://www.caloxy.com/papers/80JobSecuritySpecialist.pdf). El primero es el código feo y malo:

{{< highlight sas "linenos=true" >}}
proc sort data=sales;
by region;

proc summary data=sales nway;
	by region;
	var saleprce;
	output out=stats
	mean=meansale;

data report;
	merge stats sales;
	by region;
	if saleprce gt meansale;
{{< / highlight >}}


El segundo es una reescritura del primero usando SQL:

{{< highlight sas "linenos=true" >}}
proc sql;
	create table report as
	select * from sales
	having saleprce gt mean(saleprce)
	group by region
	;
{{< / highlight >}}

Menos de la mitad de caracteres, muy expresivo.

**Condiciones de interoperabilidad**

El código bueno tiene que ser interoperable. Tiene que poder ser analizado y modificado por diversos usuarios. Y muchos conocen SQL (todos si yo fuese ministro de educación) pero sólo una minoría conoce la enrevesada sintaxis de un lenguaje sesentero.

Además, código que utiliza SQL es más fácil de migrar a otros sistemas y entornos fuera de SAS. Quien hubo de trabajar en uno de tales proyectos sabrá muy bien a qué me refiero.

**Condiciones de rendimiento**

Una de las pegas que los programadores de SAS de la vieja escuela ponen al uso de SQL en sus programas es el rendimiento. Gustan alegar que _merge_ es mucho más eficiente que un _join_ de SQL. Y eso siempre me parece síntoma de que la Wikipedia se lee menos de lo que se debiera. Existen varios algoritmos para cruzar tablas, uno de los cuales, el llamado [merge join](http://en.wikipedia.org/wiki/Sort-merge_join), es:


* Uno de los menos eficientes (con las salvedades que apunto debajo).
* El que usa _merge_ en SAS Base.

Un _merge join_ ordena las tablas que se quieren cruzar primero y luego lee filas una a una buscando coincidencias. Es el mejor algoritmo de cruce sólo cuando las tablas iniciales estás ordenadas precisamente por los campos de cruce. En el resto de los casos, es el algoritmo menos recomendado.

No sé qué técnica de cruce utiliza `PROC SQL`. Pero en el peor de los casos puede optar por un _merge join_ y tener, cuando menos, el mismo rendimiento que _merge_. Si utiliza otro (o, mejor aún, si utiliza el que el optimizador considera más adecuado a la vista de los datos), sólo puede ser mejor.

Puede que quienes programaron SQL en SAS sean mucho más tontos que el resto de los programadores de la empresa y que, por lo tanto, el rendimiento de SQL sea inferior al que cabría esperar. Pero también es cierto que si un día los despiden y contratan a otros más avispados, el rendimiento de las aplicaciones podría mejorar substancialmente sin cambiar una sola línea de código.

**SQL, ¿siempre?**

No, hombre, no. No seamos como el proverbial tonto del martillo. Hay motivos poderosos para usar SQL, pero hay cosas que se hacen mejor programáticamente. Por ejemplo, cuando se usa _first_ o _last_, cuando hay que echar la vista atrás para comparar la línea actual con alguna previa (operaciones que, merece la pena advertir, forman parte de las nuevas especificaciones del estándar de SQL). Pero fuera de eso, honestamente, no.
