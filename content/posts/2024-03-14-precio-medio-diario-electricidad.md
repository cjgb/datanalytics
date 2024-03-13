---
author: Carlos J. Gil Bellosta
date: 2024-03-14 00:00:00
title: 'El "precio medio de la electricidad" no es el precio medio de la electricidad'
url: /2024/3/14/precio-medio-electricidad
categories:
- números
tags:
- mercado eléctrico
- media
---

Por ahí se ven cosas como esta:

![](/wp-uploads/2024/precio_medio_electricidad.png#center)

Avisa del valor máximo, mínimo y _medio_ de la electricidad en la mayor parte de España. Pero lo que llama _precio medio_ no es el precio medio. Llama _precio medio_ al resultado de

{{< highlight sql >}}
select avg(pvpc)
from pvpc_electricidad
where
	date(dia_hora) = '2024-03-12'
;
{{< / highlight >}}

y no de

{{< highlight sql >}}
select sum(pvpc * kwh) / sum(kwh)
from pvpc_electricidad
where
	date(dia_hora) = '2024-03-12'
;
{{< / highlight >}}

que sería lo suyo. Nótese cómo, en particular, el precio está positivamente correlacionado con el consumo ---si es que el mercado eléctrico funciona como se espera de él--- por lo que la primera expresión será siempre menor que la segunda. Es un indicador sesgado.

Y aprovecho la discusión para _fardar de dashboard_. Lo que se ve en

![](/wp-uploads/2024/precio_medio_electricidad_frayce.png#center)

es mi consumo (instantáneo y agregado por horas) junto con el precio horario el día en cuestión. A falta de otro divertimento, me entretengo en tratar de correlacionar negativamente precio y consumo. El gráfico muestra un éxito parcial (el lavavajillas de la madrugada) y una consuetudinariedad (el hacerse la cena y cenar en la hora en que más cuesta la electricidad).