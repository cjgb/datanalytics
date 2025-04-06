---
author: Carlos J. Gil Bellosta
categories:
- artículos
- estadística
date: 2020-10-23 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:51:15.852489'
related:
- 2020-04-08-momo-una-documentacion-oficiosa.md
- 2020-10-19-el-nowcast-de-momo-por-que-sobreestima-en-el-ano-del-coronavirus-y-que-pasara-en-los-siguientes-si-no-se-remedia.md
- 2021-12-14-sobre-el-exceso-de-mortalidad-en-noviembre-de-2021.md
- 2022-07-21-critica-critica-momo.md
- 2020-04-21-defunciones-ine-vs-momo.md
tags:
- elpaís
- momo
- mortalidad
- covid
title: Comentarios varios sobre un artículo de El País sobre MOMO
url: /2020/10/23/comentarios-varios-sobre-un-articulo-de-el-pais-sobre-momo/
---

_[Esta entrada ha sido enmendado con respecto a cómo fue publicada originalmente por los motivos que abajo se indican.]_

El artículo es _[El Instituto de Salud Carlos III subestima las muertes de la segunda ola](https://elpais.com/sociedad/2020-10-20/el-instituto-de-salud-carlos-iii-subestima-las-muertes-de-la-segunda-ola.html)_ y los comentarios, estos:

El artículo trata un tema conocido de muchos, la infraestimación que hace el actual sistema MOMO de los excesos de mortalidad y cuyos motivos [comenté extensamente el otro día](https://www.datanalytics.com/2020/10/19/el-nowcast-de-momo-por-que-sobreestima-en-el-ano-del-coronavirus-y-que-pasara-en-los-siguientes-si-no-se-remedia/). Dice, muy acertadamente:

>Las discrepancias están en las muertes esperadas. El exceso se basa en calcular la diferencia entre las muertes observadas y la cantidad que se esperaría en condiciones normales.

Y pasa a explicar las diferencias entre los modelos del INE y de MOMO:

>El INE hace un cálculo muy simple: solo compara las muertes observadas este año con el pasado, que representaría la normalidad. En cambio el MoMo usa un modelo más complejo [(descrito en este informe)](http://scielo.isciii.es/scielo.php?script=sci_arttext&pid=S0213-91112015000400004) que parece ser la fuente de sus problemas: al estimar las muertes que espera cada día considera las defunciones de años anteriores, pero también las de los últimos 365 días. Eso significa que sus expectativas de muertes se elevan ahora por las muertes anormales desde marzo. Todos los días desde entonces esperan más muertes que en años anteriores, de manera que el exceso que calcula ---la diferencia entre observadas y esperadas--- es artificialmente bajo. Y se separa del INE.

Uhhhhh... muchas cosas mezcladas:

* El INE ha hecho un modelo en 2020 para el 2020. Eso lo hace cualquiera en poco rato. Lo que me hará gracia será ver funcionar el _modelo INE_ en 2021.
* En cambio, el modelo MOMO (que ya no es el que describe muy sucintamente y de pasada ese informe que enlazan: en particular, ya  no modela la tendencia de la mortalidad con un modelo lineal sino con el que comenté el otro día) parte de una hipótesis contra la que muy pocos habrían apostado hace unos meses: que las variaciones bruscas de mortalidad, si alguna, serían breves y localizadas: alguna gripe estacional más intensa que otras, algún verano especialmente caluroso y poco más.

Todo eso es asunto conocido y en vías de solución. De hecho, hay dos vías en marcha: un parche para solucionar el problema de las medianas de 2020 (más bien, de los últimos 365 días) y una probable sustitución de MOMO por otra cosa distinta que incluye generosas dosis de estadística robusta.

_[Comienza la corrección anunciada más arriba:]_

Lo que no se entiende es lo que sigue:

>Además, los inconvenientes del MoMo parecerían afectar también a sus cálculos en 2019, cuando no había ninguna pandemia nueva.

A lo que acompaña el gráfico

![](/wp-uploads/2020/10/Screenshot-from-2020-10-23-01-09-08.png#center)

que no se corresponde en absoluto con lo que ven mis propios ojos (y no sé si también los vuestros) en [MOMO](https://momo.isciii.es/public/momo/dashboard/momo_dashboard.html#nacional):

![](/wp-uploads/2020/10/Screenshot-from-2020-10-23-01-12-35-1.png#center)

_[Y aquí termina la corrección. Que merece la siguiente explicación: se habían colado en lo que se publica de MOMO unas presuntas estimaciones de la mortalidad esperada que no son las estimaciones de la mortalidad esperada que usa MOMO sino otra cosa horripilante; que, hay que hacer constar, en la fecha de publicación del artículo en El País ya habían sido corregidas en MOMO.]_

Ah, pero el siguiente párrafo me mata. Particularísimamente, por la condescendencia con la que arranca:

>El MoMo usa un modelo por un motivo razonable: quiere ajustar el cálculo de muertes esperadas con las tendencias lentas de mortalidad en el país. Como la población crece, las muertes lo hacen también lentamente. En España ese crecimiento, con altibajos, es del 0,8% en los últimos años. El INE no hace ese ajuste, pero no parece muy relevante, son unas 3.000 o 3.500 muertes en un año, o unas 800 desde julio hasta ahora. El resto del exceso, hasta 11.000, sería anormal.

Pero, ¿no son tendencia y estacionalidad los primeros conceptos que aprende uno en los primeros cinco minutos de su primerísima clase de series temporales? Obvio que cualquier modelo de ajuste de series temporales querrá corregir la tendencia y la estacionalidad de todas las series que quiera modelar. De eso se trata, de hecho, la modelización de series temporales. Y si no lo haces, te queda Series Temporales I para septiembre y tu verano se convierte en uno tiernísimo de ARIMAs y azoteas.

Claro que

>La metodología del INE es bastante común. La usan por ejemplo en [Mortality.org](https://www.mortality.org/), de la Universidad de Berkeley o en este artículo recientemente [publicado en el _JAMA_](https://jamanetwork.com/journals/jama/fullarticle/2771841) (_Journal of the American Medical Association_). Estas fuentes suelen usar como muertes esperadas una media de cinco años.

Pues genial por ellos. Ya nos contarán cómo les va en 2021.

**Coda:** Y quien tenga estómago para constatar el lamentable y carpetovetonicísimo estado del [a]numerismo hispano, que se asome por la sección de comentarios del artículo.