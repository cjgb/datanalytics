---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2024-10-08
lastmod: '2025-04-06T19:08:09.344690'
related:
- 2017-11-27-mas-sobre-correlaciones-espurias-y-mas-sobre-correlacion-y-causalidad.md
- 2025-03-11-cortos-causalidad.md
- 2016-02-05-los-resultados-de-esta-investigacion-tienen-puntos-en-comun-con-la-metodologia-cientifica-aunque-en-ningun-momento-tendran-la-misma-validez-ni-tampoco-es-su-intencion-que-la-tenga.md
- 2022-03-08-estadistica-ciencias-blandas.md
- 2022-03-30-nuevo-video-en-youtube-causalidad-carlos-madrid.md
tags:
- causalidad
- diferencias en diferencias
- mortalidad
title: Algunos apuntes sueltos sobre causalidad
url: /2024/10/08/cortos-estadistica
---

Bajo cierto punto de vista, el estudio estadístico de la causalidad viene a consistir en la estimación de _modelos incompletos_. Un modelo completo es uno que contiene todas las ecuaciones / relaciones causales que afectan a un fenómeno. En uno incompleto, las variables y ecuaciones faltantes introducen sesgos de distinta naturaleza. Uno de los sitios donde mejor lo he visto contar es en [_Simulating confounders, colliders and mediators_](http://freerangestats.info/blog/2023/06/04/causality-sims.html), de donde extraigo, además, el siguiente gráfico:

![](/wp-uploads/2024/causalidad-free-range-statistics.png#center)


De todos modos, el problema de la causalidad no es, en todo caso, puramente estadístico. Entradas como la anterior no van a resolver cuestiones como las que se estudian en [_The Fundamental Flaws of The Only Meta-Analysis of Social Media Reduction Experiments (And Why It Matters)_](https://www.afterbabel.com/p/the-case-for-causality-part-1):

> Sin embargo, es un desafío establecer si algo sobre las redes sociales en general causa daños a la salud mental, como la depresión y la ansiedad, o si la asociación se debe principalmente a la causalidad inversa (lo que significa que la depresión o la ansiedad es lo que está causando que algunos adolescentes usen las redes sociales con más frecuencia).

Una vez especificado el modelo causal, la medición es sencilla. Pero, ¿hacia a dónde apuntan las flechas?

En [_Difference-in-differences: What’s the difference?_](https://statmodeling.stat.columbia.edu/2023/10/11/difference-in-differences-whats-the-difference/), Gelman discute el manido tema de las DiD, donde sostiene que él prefiere estudiar $(y_T – y_C) – \beta(x_T – x_C)$ ---donde $T$ y $C$ representan tratamiento y control directamente y $\beta$ es un coeficiente de regresión estimado a partir de los datos--- que el estándar
$(y_T – y_C) – (x_T – x_C)$, donde $\beta = 1$ y que es el método de las DiD de libro.

Dos artículos,
[este](https://nadaesgratis.es/david-cuberes/el-impacto-de-los-caballos-en-las-naciones-nativo-americanas) y
[este](https://statmodeling.stat.columbia.edu/2024/03/28/banning-the-use-of-common-sense-in-data-analysis-increases-cases-of-research-failure-evidence-from-sweden/), en los que se discuten una serie de resultados. Basta con echarles un vistazo a los gráficos que los acompañan, como

![](/wp-uploads/2024/causalidad_202410-01.png#center)

o

![](/wp-uploads/2024/causalidad_202410-02.jpg#center)

para darse cuenta rápidamente de que no hay mucho aprovechable en lo que proclaman.

[Aquí](https://statmodeling.stat.columbia.edu/2023/11/07/experimental-reasoning-in-social-science/) se lee:

> Como estadístico, fui entrenado para considerar los experimentos aleatorizados como el _gold standard_ del conocimiento en las ciencias sociales y, a pesar de haber visto argumentos ocasionales en sentido contrario, sigo manteniendo esa opinión, expresada de manera concisa por Box, Hunter y Hunter: "Para averiguar qué sucede cuando cambias algo, es necesario cambiarlo."
>
> Sin embargo, como científico social, he publicado muchos artículos de investigación aplicada, casi ninguno de los cuales ha utilizado datos experimentales.

[Radiandando](https://radiandando.es/)
es un blog que lleva desde 2017 (su primera entrada es de diciembre de ese año), desmontando bulos, ciencia en mano, sobre los efectos de los
[campos electromagnéticos de radiofrecuencia](https://radiandando.es/2017/12/21/cem-rf-de-que-estamos-hablando-mosquitos-piedras-o-bloques-de-granito/)
en la salud. En su primera entrada ya escribía cómo _a día de hoy, a los niveles de exposición habituales, no existe evidencia de que los CEM-RF provoquen efectos sobre la Salud_. Siete años después, publica la entrada
[La ciencia descarta relación entre móviles y cáncer tras casi tres décadas de investigación](https://radiandando.es/2024/09/03/la-ciencia-descarta-relacion-entre-moviles-y-cancer-tras-casi-tres-decadas-de-investigacion/).
El lector circunstancial se preguntará: ¿sobre qué habrá podido estar escribiendo entonces durante los últimos siete años?

Finalmente, Scott Alexander escribe [aquí](https://www.astralcodexten.com/p/chilling-effects):

> Las mayores tasas por frío extremo se dan en el África subsahariana, y es más probable que haya decesos por calor extremo en Groenlandia, Noruega y varias zonas con montañas muy altas. Has leído bien: las muertes por frío se concentran en las áreas más cálidas, y viceversa.

No se puede no leer el resto, ¿verdad?
