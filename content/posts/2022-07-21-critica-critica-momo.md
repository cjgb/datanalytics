---
author: Carlos J. Gil Bellosta
date: 2022-07-21
title: 'Una crítica a una crítica de MoMo'
description: 'Respondiendo a una crítica hecha a MoMo'
url: /2022/07/21/critica-critica-momo/
categories:
- estadística
tags:
- mortalidad
- epidemiología
- momo
---

[_Hoy puede que acabe escribiendo algo que lo que pasado un tiempo tal vez no me sienta muy orgulloso. Sospecho que puedo llegar a ser injusto. Pero dejaría de ser yo si me abstuviese de publicar lo que sigue._]

Hoy me he desayunado con el artículo [_¿Cómo se miden las muertes causadas por el calor? El MoMo estima el exceso de muertes atribuibles al exceso de temperaturas, no es un registro_](https://maldita.es/malditaciencia/20220718/muertes-calor-golpe-temperatura-momo/) aparecido en [Maldita.es](https://maldita.es/). Habla de MoMo, de lo que un poquito sé, aunque solo sea por haber trabajado en él durante dos o tres años.

El artículo trae una sección controvertida. Dice:

> ## Una herramienta “desfasada”, según los expertos consultados
>
> Las muertes por calor no se suelen registrar como tal, sino por las causas subyacentes como infarto o isquemia, por lo que no es correcto utilizar el número de muertes registradas como muertes por calor, aclara a Maldita.es Ana María Vicedo, epidemióloga climática y jefa del grupo de cambio climático y salud del Instituto de Medicina Social y Preventiva de la Universidad de Berna (Suiza).
>
> “Nosotros lo que hacemos es estimar con modelos epidemiológicos cuál es el riesgo de mortalidad asociada al calor y la correspondiente fracción de muertes, que es diferente a lo que se hace en MoMo”, añade. En su opinión, MoMo está “claramente desfasado” porque se basa en datos ‘esperados’ y no tiene en cuenta la mortalidad observada: “Actualmente existen herramientas y métodos mucho más adecuados que pueden dar una estimación más precisa del número de muertes por calor”.
>
> Aurelio Tobías, investigador científico del Consejo Superior de Investigaciones Científicas (CSIC), también es crítico con el sistema del ISCIII porque “intentan adaptar una metodología básica que únicamente sirve para estimar sobremortalidad para atribuir a causas específicas a través de una metodología desfasada, cuando sería mucho más sencillo utilizar el riesgo de mortalidad asociado al calor y su correspondiente fracción de muertes en un estudio de atribución al calor”.

Uno quiere pensar que los expertos ---que no dudo que lo sean--- antes de opinar se habrán informado mínimamente del asunto (aunque, lo admito, no sé si es posible conocer a través de fuentes públicas los detalles de la implementación actual de MoMo). No da esa sensación, por lo que cuentan, he intentado concederles el beneficio de lo que en ciertos círculos se conoce como _steelmaning_ y en otros, como aplicar el principio de caridad.

Y más aún, aprender. Si los expertos dicen que MoMo está desfasado, habrá algo en su producción científica donde poder abrevarse.

Así he buscado en Google Académico las publicaciones de la primera experta y he tomado el primero de los artículos firmados por ella relacionados con la presente discusión. Es de 2018 ---así que supongo que no estára _desfasado_---, y se titula [_Quantifying excess deaths related to heatwaves under climate change scenarios: A multicountry time series modelling study_](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1002629). Es cierto que se trata de un artículo con la tira de autores (¿treinta?), y espero ---en aras de la justicia--- que nuestra experta no haya prestado su firma a regañadientes y con la tira de objeciones metodológicas.

El artículo es particularmente relevante porque se plantea casi el mismo problema que MoMo: medir el impacto de las olas de calor en varias ubicaciones distintas a través del estudio simultáneo de varias series temporales: de países en su caso; de provincias, grupos de edad y sexos en el de MoMo.

¿Y cuál es esta maravilla de modelo que deja obsoleto a MoMo? Esta:

![](/wp-uploads/2022/07/metodologia.png#center)

Que es una, lo siento, maldita chapuza ---con relación a MoMo--- porque no tiene en cuenta ni la intensidad ni la duración de las olas de calor (MoMo la última vez que lo vi, sí; de hecho, esa es la parte más _peleaguda_ de MoMo). MoMo, además, ubica temporalmente los excesos de mortalidad atribuidos al exceso de temperatura y uno puede constatar ---visualmente incluso--- si se da la debida correlación.

Lo único que aporta de _sofisticado_ el modelo del artículo es el cálculo del RR (_risk ratio_) que:

* está basado en un modelo de Poisson (como MoMo),
* usa splines para representar la estacionalidad (como MoMo),
* usa un _spline_ para representar los efectos retardados del calor (es decir, dicen sin decirlo que han usado [`dlnm`](https://cran.r-project.org/web/packages/dlnm/index.html),algo parecido a lo que hace MoMo)
* y una variable categórica para el día de la semana (¡MoMo no, muy a mi pesar! Véase [esto](/2019/07/09/estacionalidad-semanal-de-la-mortalidad/)).

¿Diferencias? Algunas:

* Ellos calculan el RR explícitamente; en MoMo es un subproducto.
* Ellos ajustan cada serie temporal por separado; MoMo ajusta todas las series conjuntamente aleatorizando (o usando _modelos mixtos_ o _multinivel_, o _pooling_, según la nomenclatura de cada cual) el RR (pero no vamos a pedir que todos los epidemiólogos estén a la altura de los tiempos en cuestiones de modelización estadística).

En resumen, poco o nada lo que cuentan los autores del artículo podría incorporarse a MoMo.

Y, sí, vale, puedo estar siendo injusto. Tal vez debería haber leído todos los artículos relevantes de ambos expertos. Pero tengo la sospecha de que seguiría sin aprender nada aprovechable que rentabilizase el tiempo invertido.

Al final, en esto, después de haber repasado durante un tiempo la literatura, solo hay cuatro o cinco ideas y modelos circulando. Y fin, y no más. Unos le dan más importancia a la dimensión geográfica; otros a la temporal. Pero al final del día, nadie deja de usar modelos de Poisson (o sus generalizaciones), _splines_ ---salvo [algunos trogloditas que usan senos y cosenos](/2021/12/09/sobre-exceso-mortalidad-noviembre-2021/)--- y ya. En este submundo de la epidemiología no hay nada que con una base decente no se aprenda en un finde. Luego, eso sí, toca ajustar y refinar detalles, tocar parámetros tratar de conseguir un ajuste decente y, a ser posible, robusto. Pero esa es otra historia.









