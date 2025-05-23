---
author: Carlos J. Gil Bellosta
categories:
- programación
date: 2010-11-22 09:29:04+00:00
draft: false
lastmod: '2025-04-06T19:11:34.211458'
related:
- 2011-04-18-teradata-r-y-las-iii-jornadas-de-usuarios-de-r.md
- 2010-05-19-c2bfen-que-se-parecen-oracle-y-teradata-a-excel-y-word.md
- 2011-12-09-bajo-el-capo-de-teradatar.md
- 2010-07-19-que-hacer-y-no-hacer-con-los-bichitos-que-uno-encuentra.md
- 2010-07-18-mas-de-diez-motivos-para-usar-proc-sql-en-sas.md
tags:
- sql
- bugs
title: ¿Otro bug de Teradata?
url: /2010/11/22/otro-bug-de-teradata/
---

Yo creo que es un _bug_, vamos. Y tengo tres motivos para creerlo:

1. Teradata no hace lo que se espera que haga.
2. No he encontrado por ahí motivo técnico alguno que proscriba razonadamente lo que intento hacer.
3. He hablado con un señor empleado de Teradata, le he enviado el ejemplo y en lugar de explicarme mi error (de haberlo) ha hecho el avestruz (ya hablé de [lo que pasa cuando uno encuentra _bugs _en _software_ propietario](https://datanalytics.com/2010/07/19/que-hacer-y-no-hacer-con-los-bichitos-que-uno-encuentra/)).

He aquí cómo reproducir el _bug_. Primero creo una tabla muy simple e inserto una única fila en ella.


{{< highlight sql >}}
create table borrar_cjgb (
    a char(3)
);

insert into borrar_cjgb values(  'P21' );
{{< / highlight >}}


Selecciono el prefijo, "P", del valor que he insertado:


{{< highlight sql >}}
select
    cast( substr( ltrim( rtrim(a) ), 1,1 ) AS CHAR(3) ) as prefijo
    from borrar_cjgb
;
{{< / highlight >}}


Sin embargo, por peregrinas razones, ¡Teradata no me deja encapsular mi consulta en una vista! La creación de la vista


{{< highlight sql >}}
replace view borrar_cjgb_v as (
    select
        cast( substr( ltrim( rtrim(a) ), 1,1 ) AS CHAR(3) ) as prefijo
        from borrar_cjgb
);
{{< / highlight >}}


falla con error


{{< highlight sql >}}
3706: Syntax error: Data Type "rtrim" does not match a Defined Type name.
{{< / highlight >}}


No sé muy bien para qué cuento esto acá hoy. Supongo que es porque el señor empleado de Teradata no atiende mi petición de luz y guía peculiar punto. Y también, claro está, para ilustrar a mis lectores con un ejemplo más de lo reacios que se muestran los altivos valedores del software propietario en aceptar razonadísimos informes de _bugs_.