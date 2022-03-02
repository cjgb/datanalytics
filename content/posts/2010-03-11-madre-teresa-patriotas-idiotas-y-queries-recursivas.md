---
author: Carlos J. Gil Bellosta
date: 2010-03-11 20:00:14+00:00
draft: false
title: Madre Teresa, patriotas, idiotas... y queries recursivas

url: /2010/03/11/madre-teresa-patriotas-idiotas-y-queries-recursivas/
categories:
- programación
tags:
- sql
- programación
---

No es éste foro para opinar sobre si nos interesa la Madre Teresa o si los patriotas son idiotas, pero sí para mostrar nuestro desacuerdo con la [canción](http://www.youtube.com/watch?v=f2gtfJQ7YK0) (por abreviar, acá está [su letra](http://www.coveralia.com/letras/cara-al-culo-la-polla-records.php)) y dejar claro que las jerarquías no son una porquería. Si no que se lo digan a un indirecto cliente mío que consume lo que no nos devuelve a los accionistas como dividendo en pagar hordas de consultores poco avisados de lo que acá cuento. Y lo cuento y dejo públicamente escrito para que tengan todavía menos excusa.

El tema que sigue a tan críptico introito es el de las _queries_ recursivas, que forman parte de SQL ANSI desde la revisión de 1999. Para ilustrar lo que cuento usaré [PostgreSQL](http://www.postgresql.org/) 8.4, que es la primera versión que las implementa.

Comenzaremos, como abreboca, calculando el factorial de un número mediante una _query_ recursiva.

{{< highlight sql >}}
with recursive factorial as (
    select 1 as n, 1 as fact
        union all
    select
        n + 1 as n,
        a.fact * (n + 1) as fact
    from
        factorial as a
)
select * from factorial limit 10;
{{< / highlight >}}


La última línea de la _query_ es simple: toma todo lo que lo precede como una tabla y extrae 10 líneas de ella. Nótese que en este caso, de no limitar el tamaño de la consulta, ésta continuaría _indefinidamente_ (indefinidamente en este contexto significa hasta que el factorial excediese el tamaño del tipo de dato que lo contiene). Lo importante es lo que ocurre en las líneas anteriores.

Una cláusula with permite definir una tabla temporal que se usa al vuelo en una consulta subsiguiente. Es mero [azúcar sintáctico](http://es.wikipedia.org/wiki/Azúcar_sintáctica) para simplificar la construcción de _queries_ complejas. Un ejemplo trivial es:

{{< highlight sql >}}
with tabla_temporal as ( select 1 as valor )
select * from tabla_temporal;
{{< / highlight >}}

Es decir, con with se puede crear una tabla (la expresión que aparece entre paréntesis) que puede ser utilizada en la _query_ subsiguiente. Conozco a un tipo al que este tipo de construcciones ayudaría a mitigar el innato culteranismo esecueliano del que hace gala con perniciosos efectos para el bienestar de sus exégetas.

Si `with` se acompaña de `recursive`, la tabla que se define fuera del paréntesis puede invocarse dentro de él, como en el ejemplo del cálculo del factorial. En él, entre paréntesis, aparecen dos tablas concatenadas mediante un `union all`. La segunda se construye mediante una referencia a `factorial`, que se define fuera del paréntesis. Utilizando un símil [markoviano](http://es.wikipedia.org/wiki/Cadena_de_Markov), la primera tabla sería el estado inicial y la segunda definiría la transición. El `union all` permitiría seguir la traza del paseo markoviano.

Modificando la _query_ anterior se puede construir, por ejemplo, el otro ejemplo paradigmático de la recursividad: la [sucesión de Fibonacci](http://es.wikipedia.org/wiki/Sucesion_de_Fibonacci). Pero [ya lo ha hecho alguien por mí](http://www.storytotell.org/blog/2009/08/12/fibonacci-in-postgresql.html).

Información sobre cuestiones relativas a cómo ejecuta PostgreSQL este tipo de _quieries_ puede obtenerse de [aquí](http://archives.postgresql.org/pgsql-hackers/2008-02/msg00642.php).

Y, retomando el tema con el que se encabezaba esta entrada, indicaré que el uso principal de _queries_ recursivas en la práctica es el de _desenvolver_ tablas que implementan jerarquías. Imagínese el caso de las piezas de un determinado modelo de avión. Este avión, nivel más alto de la jerarquía, consta de varias partes (fuselaje,...) que respresentarían el segundo nivel más alto. Y así sucesivamente hasta llegar hasta la más humilde arandela. Asignando un determinado código a cada uno de los miembros de la jerarquía, la relación _es parte de_ puede implementarse mediante una tabla de la forma:

|  cod_padre  | cod_hijo |
|:------------| :--------|
|1001| 1002|
|1001| 1003|
|1002| 1004|
|...| ...|

<table style="text-align:center;" align="center" >
<tbody >
<tr >

<td >**cod_padre**
</td>

<td style="text-align:center;" >**cod_hijo**
</td>
</tr>
<tr >

<td >1001
</td>

<td >1002
</td>
</tr>
<tr >

<td >1001
</td>

<td >1003
</td>
</tr>
<tr >

<td >1002
</td>

<td >1004
</td>
</tr>
<tr >

<td >...
</td>

<td >...
</td>
</tr>
</tbody>
</table>

La tabla anterior puede contener sólo la relación directa: el ala izquierda "es parte" del fuselaje, pero no "directamente" del avión. ¿Cómo enumerar las arandelas que forman parte del ala derecha del avión? ¿Cómo descender por la cadena jerárquica representada por la tabla anterior?

La _query_

{{< highlight sql >}}
with recursive tmp(cod_padre, cod_hijo) as (
    select
        cod_padre, cod_hijo
    from t_padre_inmediato
        union all
    select
        a.cod_padre as cod_padre,
        b.cod_hijo  as cod_hijo
    from
        t_padre_inmediato as a,
        tmp as b
    where
        a.cod_hijo = b.cod_padre
)
select *
from tmp;
{{< / highlight >}}

asocia a cada elemento de la jerarquía todos los elmentos de nivel superior a los que pertenece a partir de la tabla de padres inmediatos.

Otro día volveré para contar cómo hacer para calcular la mediana de una columna numérica con Postgres. A no ser que alguien averigüe antes cómo hacerlo con Oracle, en cuyo caso calcularía [medias _winsorizadas_](http://en.wikipedia.org/wiki/Winsorized_mean) o cualquier otra que lo deje en evidencia.
