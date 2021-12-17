---
author: Carlos J. Gil Bellosta
date: 2015-07-07 08:13:16+00:00
draft: false
title: Estadística descriptiva allende la estadística descriptiva

url: /2015/07/07/estadistica-descriptiva-allende-la-estadistica-descriptiva/
categories:
- estadística
tags:
- estadística
- indultos
---

Este fin de semana me toca enseñar estadística en el [máster de _data science_ de la UTAD](https://www.u-tad.com/estudios/experto-en-data-science/). Heredo un programa que incluye una sección importante de estadística descriptiva (que pienso subvertir, claro está).

La estadística descriptiva, según la entiendo, va mucho más allá de lo que viene llamándose estadística descriptiva: eso de las medias, las medianas, el análisis unidimensional, etc. Pienso que un modelo estadístico no es sino una evolución natural de esas trivialidades que nos proporciona una comprensión más profunda de los datos: más allá de cómo son las variables una a una, cómo interoperan y de qué manera actúan para determinar uno o varios efectos de interés.

Supongo que en eso discrepo con otra gente más optimista.

Como fuere, después de analizar con detenimiento un modelo estadístico bien construido, uno podría llegar a conocer mejor la población subyacente. Insisto en lo de bien construido y planteado. Porque en lo que sigue voy a despellejar un contraejemplo. Véase, dentro de [esto](http://nadaesgratis.es/admin/los-indultos-en-espana-una-medida-de-justicia), ese modelo, el segundo, con el que se pretende dilucidar cuáles son las causas que afectan a la celeridad en la concesión de los indultos.

Los autores omiten una variable tremendamente explicativa: el tipo de delito cuya condena se indulta. No hay que ser particularmente perspicaz para darse cuenta de que, según [el gráfico que aparece en este estudio de la Fundación Civio](http://elindultometro.es/2013/02/27/los-mas-rapidos-a-este-lado-de-los-pirineos.html), esa variable es muy predictora.

Concluyen los autores del estudio cosas tan peregrinas como que a las mujeres se les indulta más rápido que a los hombres. Y yo digo: ¿y si esa relación se da a través de la distinta proporción en que hombres y mujeres cometen determinado tipo de delitos y la distinta celeridad en que estos conceden según aquel?

Lo siento, pero ese estudio, si aporta algún tipo de información descriptiva sobre el conjunto de datos en cuestión, lo hace de casualidad.

**Nota:** y no es esa la cuestión más preocupante del estudio. Hay otras como, por ejemplo, el sesgo que puede haber introducido su muy peculiar construcción del universo de datos. Pero esa es otra historia.

