---
author: Carlos J. Gil Bellosta
date: 2024-09-17
title: 'Una propuesta para cambiar la sintaxis de SQL y cuatro asuntos más'
url: /2024/09/17/cortos-tecnologia
categories:
- cortos
tags:
- python
- javascript
- sql
---

[Mesop](https://google.github.io/mesop/), una herramienta de Google para crear "AI apps" en Python.

[¿Se nos está yendo el tamaño del código JavaScript de las páginas web de las manos?](https://infrequently.org/2024/08/object-lesson/) (De cuya lectura, además, he aprendido que existe [webpagetest.org](https://www.webpagetest.org/), que parece mejor que otras alternativas que he probado por ahí).

[`uv`](https://astral.sh/blog/uv-unified-python-packaging), un gestor de paquetes de Python "extremadamente rápido" escrito en Rust. ¿Tocará volver a migrar?

[Aquí](https://www.dbreunig.com/2024/07/31/towards-standardizing-place.html) hay una discusión sobre la diferencia entre _lugares_ y _sitios_ ---términos ambos que define estipulativamente---. Proyectos como OpenStreetMap se centran en los primeros: coordenadas, sistemas de referencia, mapas, etc. [Overture Maps](https://overturemaps.org/), parece ser, quiere centrarse en los segundos, los sitios, es decir, los bosques, edificios, panaderías, etc. que ocupan el espacio y que son el objetivo ---los mapas son solo el medio--- de nuestra preocupación por lo que puebla el espacio.

En [_SQL Has Problems. We Can Fix Them: Pipe Syntax In SQL_](https://research.google/pubs/sql-has-problems-we-can-fix-them-pipe-syntax-in-sql/) se propone cambiar

{{< highlight sql >}}
SELECT c_count, COUNT(*) AS custdist
FROM
    ( SELECT c_custkey, COUNT(o_orderkey) c_count
    FROM customer
    LEFT OUTER JOIN orders ON c_custkey = o_custkey
        AND o_comment NOT LIKE '%unusual%packages%'
    GROUP BY c_custkey
    ) AS c_orders
GROUP BY c_count
ORDER BY custdist DESC, c_count DESC;
{{< / highlight >}}

por

{{< highlight sql >}}
FROM customer
|> LEFT OUTER JOIN orders ON c_custkey = o_custkey
        AND o_comment NOT LIKE '%unusual%packages%'
|> AGGREGATE COUNT(o_orderkey) c_count
   GROUP BY c_custkey
|> AGGREGATE COUNT(*) AS custdist
   GROUP BY c_count
|> ORDER BY custdist DESC, c_count DESC;
{{< / highlight >}}

¿Mejora?