---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2025-02-18
lastmod: '2025-04-06T18:53:33.191931'
related:
- 2024-06-12-cortos.md
- 2023-09-05-superforecasting.md
- 2015-07-24-mis-respuestas-en-una-entrevista-sobre-big-data-periodismo-de-datos-etc.md
- 2023-10-03-muestreo-superricos.md
- 2016-09-30-sobre-ciencia-de-datos-en-unir-teoria-y-gente.md
tags:
- supervivencia
- prioris
- probabilidad
- frenología
title: La recurrente vuelta de la frenología y algunos asuntos más
url: /2025/02/18/cortos-stats
---

En [A Conversation with Sir David Cox](https://projecteuclid.org/journals/statistical-science/volume-9/issue-3/A-Conversation-with-Sir-David-Cox/10.1214/ss/1177010394.full) se lee:

> **Reid:** Me gustaría preguntarle sobre su trabajo al principio de su carrera en la _Wool Industries Research Association_. ¿Qué tipo de lugar era y qué tipo de puesto tenía usted allí?
>
> **Cox:** Bueno, Henry Daniels lo ha descrito un poco en una entrevista reciente (Whittle, 1993). Era un tipo de organización muy común en el Reino Unido en ese momento, financiada por el gobierno y por dinero obtenido de un impuesto al sector, para realizar investigaciones básicas sobre problemas relacionados con la industria; y en ese momento tenía un director extraordinario que simplemente tenía la idea de contratar a personas y, en gran medida, dejarlas trabajar por su cuenta, con su apoyo. [...]

Es muy enternecedor eso de las asociaciones industriales que, por lo que cuenta Cox, fueron tan habituales en cierta época. Pero hay que tener en cuenta ---si es famoso Cox es por su trabajo en en análisis de la supervivencia--- que esa industria desapareció de la faz de las islas Británicas.

Hablando de supervivencia, está [_Estimating a Bayesian proportional hazards model_](https://www.rdatagen.net/post/2025-02-11-estimating-a-bayesian-proportional-hazards-model/). Que está bien por un lado, pero por el otro, tengo la sensación de que se está abundando en una ruta de interés principalmente histórico. Esa verosimilitud que se usa en el modelo, en el fondo, no corresponde con un modelo generador de la cosa. Es un puro subterfugio computacional muy meritorio pero que habría que comenzar a desterrar. El modelo de Cox es equivalente a cierta variante de un modelo ---este sí, generativo--- de Poisson, como puede verse [aquí](https://www.jehps.net/juin2009/Aalenetal.pdf).

El titular [_Es más probable que caiga un meteorito a que empaten dos películas en los Premios Goya_](https://www.elconfidencial.com/cultura/2025-02-13/goya-caiga-meteorito-probabilidades_4063336/) desmerece del contenido del artículo, que considera dos escenarios, uno muy poco realista y uno algo más sofisticado,

> Suponemos que las dos películas que han ganado tenían más posibilidades de ser escogidas (porque eran "objetivamente" mejores que el resto), y que además el resto de películas no son demasiado malas (pues han llegado al menos a estar nominadas). Esto lo modelizamos matemáticamente con la hipótesis de que las películas 1 y 2 recibirán entre el 20% de los votos (que es el mínimo para ganar porque hay cinco películas) y el 35% (entre cinco películas); y las otras tres películas (además de perder contra las dos primeras) reciben al menos un 5% de los votos.

para concluir que en tal caso, la probabilidad de empate sería como del 0.5%. Enhorabuena al articulista por asesorarse bien (de Pablo Hidalgo, del CSIC).

Se ve que en plataformas como Spotify hay _oyentes pasivos_ que prácticamente escuchan cualquier cosa que se les eche. Por otra parte, hay _autores_ que licencian contenido _de mierda_ a precio de derribo. El incentivo consiste entonces en identificar esos _oyentes pasivos_ e inundarlos de baratijas. Más
[aquí](https://marginalrevolution.com/marginalrevolution/2025/02/passive-listeners-on-spotify.html?utm_source=rss&utm_medium=rss&utm_campaign=passive-listeners-on-spotify).

El décimo enlace de [esta página](https://dynomight.net/links/) (sobre alcohol y riesgo de cáncer) merece la pena ser leído.

El resumen de [_AI Personality Extraction from Faces: Labor Market Implications_](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5089827) es:

> El capital humano ---que abarca habilidades cognitivas y rasgos de personalidad--- es fundamental para el éxito en el mercado laboral, pero el componente de personalidad sigue siendo difícil de medir a gran escala. Aprovechando los avances en inteligencia artificial y microdatos exhaustivos de LinkedIn, extraemos los cinco grandes rasgos de personalidad a partir de imágenes faciales de 96,000 graduados de MBA y demostramos que este novedoso _Photo Big 5_ predice el rango de la escuela, la compensación, la jerarquía laboral, la elección de industria, las transiciones laborales y el avance profesional. Utilizando registros administrativos de programas de MBA de primer nivel, encontramos que el _Photo Big 5_ muestra solo correlaciones modestas con medidas cognitivas como el GPA y las puntuaciones de los exámenes estandarizados, pero ofrece un poder predictivo incremental comparable para los resultados laborales. A diferencia de las medidas tradicionales de personalidad basadas en encuestas, el _Photo Big 5_ es fácilmente accesible y potencialmente menos susceptible a la manipulación, lo que lo hace adecuado para una amplia adopción en la investigación académica y los procesos de contratación. Sin embargo, su uso en la selección del mercado laboral plantea preocupaciones éticas sobre la discriminación estadística y la autonomía individual.

¡Tanto que contar al respecto! Lo primero que se me viene a la cabeza es cómo la
[frenología](https://es.wikipedia.org/wiki/Frenolog%C3%ADa)
[regresa cada cierto tiempo](https://elpais.com/elpais/2017/09/12/hechos/1505211398_056097.html).

Un [comentario muy bueno de Andrew Gelman](https://statmodeling.stat.columbia.edu/2025/02/14/maybe-they-should-just-write-some-papers-about-their-priors-and-not-mess-around-with-actual-data/):

> Sí, la gente piensa siempre que estoy siendo sarcástico o condescendiente, pero hablo completamente en serio. Veo esto muy a menudo: hay investigadores que tienen creencias muy firmes y, al menos desde su perspectiva, un profundo conocimiento cualitativo. Pero en lugar de escribir sobre ello, escriben artículos cuantitativos muy débiles basados en datos deficientes y análisis inadecuados. ¡No es necesario que se enfoquen en lo que peor saben hacer!

Gelman les recomienda dejar de estudiar datos y escribir más bien sobre sus fortísimas prioris.

En un cierto sentido, lo anterior enlaza con lo que Frank Harrell escribe bajo el rótulo [_Traditional Frequentist Inference Uses Unrealistic Priors_](https://www.fharrell.com/post/uprior/).