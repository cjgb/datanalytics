---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2022-01-25
lastmod: '2025-04-06T18:52:42.205931'
related:
- 2015-07-24-mis-respuestas-en-una-entrevista-sobre-big-data-periodismo-de-datos-etc.md
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
- 2021-07-28-apuntes-para-el-estudio-del-impacto-del-cierre-de-la-central-nuclear-de-garona-en-el-precio-de-la-electricidad-en-espana.md
- 2012-06-05-medias-y-medianas-en-el-banco-de-espana.md
- 2016-06-17-evolucion-historica-de-la-deuda-del-ayuntamiento-de-madrid.md
tags:
- estadística
- muestreo
- big data
title: 'Universo y muestra: un ejemplo muy didáctico en el que La Caixa lo hace todo
  mal'
url: /2022/01/25/universo-muestra-la-caixa/
---

Los manuales de estadística al uso introducen los conceptos de universo y muestra y tienden a ilustrarlos con ejemplos _buenos_. Pero los ejemplos _buenos_ son útiles solo hasta cierto punto: ilustran, como digo, pero ni caracterizan ni delimitan. Los ejemplos malos, sin embargo, son muy útiles porque ayudan a trazar una frontera entre lo que es y lo que no es permisible.

Pero, ¿de dónde sacar buenos ejemplos malos? Aunque no es fácil, nuestros colegas de _La Caixa Research_ han tenido la gentileza de ponernos uno _a huevo_: es [_Los precios de la luz están por las nubes, ¿y el importe de su recibo?_](https://www.caixabankresearch.com/sites/default/files/content/file/2022/01/11/34454/im01_22-09-dossier-3-es.pdf) (que ha sido recogido y glosado por el inefable elDiario.es [aquí](https://www.eldiario.es/economia/estudio-millones-facturas-luz-concluye-recibo-hogares-2021-similar_1_8653660.html)).

_[Nota aclaratoria para lectores de otros sitios o de un futuro lejano: hay un debate en la España de finales de 2021 sobre si el precio de la electricidad ha subido o no. Dependiendo de al respuesta que des a esa pregunta y a través de mecanismos muy tediosos de explicar y desarrollar, un interlocutor malintencionado puede inferir tus preferencias de voto con un margen de error minúsculo.]_

Esencialmente, en el estudio, como tienen acceso a la base de datos de movimientos bancarios de los clientes de La Caixa, los autores pueden hacer

{{< highlight sql >}}
select
  year, month, median(amount)
from
  customer_invoices
where
  year >= 2018 and
  type = 'electricity'
group by
  year, month
;
{{< / highlight >}}

para obtener una serie temporal que después pintan de varias formas y describen en un par de páginas de texto.

El universo del estudio es _las familias_ (españolas) y en eso no hay problema. El problema está con la muestra. Que tiene una cosa buena (¡un tamaño de 2 millones!) y un montón de cosas malas.

Para empezar, que la muestra está conformada por clientes de La Caixa, lo cual implica, para empezar, grandes sesgos territoriales y, sin duda, otros relativos a edades, niveles de ingresos, etc. (Para el que no lo sepa, las carteras de clientes minoristas de los distintos bancos españoles tienen _sesgos_ muy marcados y, aunque no se diga abiertamente, se _sabe_ que el banco tal es _de viejos_, etc.)

Pero es todavía más grave que esa muestra cambia mes a mes. No está claro si todos los clientes del primer mes están en el segundo, si aparecen otros nuevos, si estos nuevos son cualitativamente distintos de los primeros, etc. En particular, a la base de datos de clientes de La Caixa se añadieron los de la antigua Bankia durante el periodo en cuestión. ¿Se habrá tenido en cuenta? Poco parece importar a los autores aclarárnoslo.


### Notas finales

El estudio al que me refiero hoy está _todo mal_. Tanto que da para discutir e ilustrar varios problemas distintos. Me he centrado arriba en los relativos a la muestra y su sesgo, pero podría haber considerado otros enfoques.

Por ejemplo, que hayan realizado un diseño inter-sujeto y no intra-sujeto. En un diseño inter-sujeto habrían construido las trayectorias de un conjunto de hogares durante el tiempo y habrían analizado sus tendencias. Aquí, sin embargo, han analizado la evolución del _sujeto mediano_ en el tiempo represente este lo que quiera representar. Un estudio inter-sujeto es informativo en tanto que los sujetos son similares (átomos, hormigas, etc.) y cabe agruparlos. Cuando son disímiles (personas, consumos eléctricos, etc.), lo suyo es decantarse por el estudio intra-sujeto y realizar lo que se llama un estudio longitudinal. Da para otra entrada.

O podría haberme centrado en la relación que tiene el estudio con ese debate acerca del _big data_ vs estadística tradicional (vía muestreo). Aunque este estudio no da ni para eso. El debate es relevante cuando el _big data_ contiene _todos_ los datos. Ahí pasan cosas de cierta enjundia como las que se discuten brevemente [aquí](/2014/02/27/d-hand-sobre-estadistica-y-mineria-de-datos/). Pero en este estudio no se presume de tener _todos los datos_ sino, simplemente, una muestra _muy grande_.

Final y muy oportunamente, me ha llegado recientemente [este artículo](https://marginalrevolution.com/marginalrevolution/2020/01/big-datasmall-bias.html) que abunda sobre estas cuestiones.