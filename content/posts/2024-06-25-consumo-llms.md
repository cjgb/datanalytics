---
author: Carlos J. Gil Bellosta
categories:
- llms
date: 2024-06-25
lastmod: '2025-04-06T19:03:37.508188'
related:
- 2025-01-21-cortos-llms.md
- 2022-05-19-algunos-numeros-cambio-climatico.md
- 2024-03-21-cortos.md
- 2022-09-08-regresion-perdida-asimetrica.md
- 2012-03-01-como-poner-una-lavadora.md
tags:
- llms
- energía
- cambio climático
title: Pero, ¿cuánto consumen los LLMs?
url: /2024/06/25/consumo-llms/
---

### I.

En los años 50 y 60 se hicieron muchas predicciones acerca de cómo sería el mundo de hoy. Eran los años en que se popularizó la ciencia ficción y, además, el cambio de milenio estaba a la vuelta de la esquina.

Puede que alguien se sienta tentado de recopilar predicciones ---y elucubraciones--- sobre innovaciones técnicas realizadas en esa época y analizar su grado de acierto. Que sepa que llega tarde. Un análisis de ese tipo aparece en (el muy extravagante libro) [_Where Is My Flying Car?: A Memoir of Future Past_](https://www.goodreads.com/es/book/show/42036377). Si uno realizase un análisis discriminante con el objetivo de separar ambas clases ---las tecnologías de las que hoy disponemos de las que siguen siendo una ensoñación--- observaría que la variable más relevante es la intensidad del uso de la energía: no viajamos regularmente a la luna o nos desplazamos en coches voladores: eso consume mucha energía; sin embargo, realizamos videollamadas y tenemos a un clic de distancia prácticamente toda la información disponible en el mundo: energéticamente, es casi gratis. Dicen que una búsqueda en Google consume 0.3 Wh
([o lo hacía en 2011](https://www.nytimes.com/2011/09/09/technology/google-details-and-defends-its-use-of-electricity.html)); tendría que hacer más de 300 búsquedas en una hora para gastar en eso más de lo que quemo yo sentado mientras las realizo.

Y antes de continuar, dos notas:

* El análisis discriminante no es necesariamente causal: no se cumplen las predicciones _porque_ la tecnología subyacente consuma poca energía. Pero tampoco niega la causalidad.
* Además, gastamos hoy más energía buscando en Google que operando coches voladores: [Jevons manda](https://es.wikipedia.org/wiki/Paradoja_de_Jevons).


### II.

¿Cuánto consume el entrenamiento de un LLM moderno? [Dicen](https://www.reddit.com/r/singularity/comments/14wcxyf/gpt4_details_leaked/) que para entrenar GPT-4 (no se especifica qué versión, pero debe de ser una de las primeras) se utilizaron 25k tarjetas A100 durante 80-100 días. Esa tarjeta consume 400 W (potencia máxima), por lo que la potencia del _clúster_ era de 10 MW.

10 MW durante 100 días no es nada. Utilizando la aproximación ---más bien, una cota superior exagerada--- de que un hogar consume 1 kW ---0.3 o 0.4 kW estaría más próximo a la verdad---, estamos hablando del consumo de 10k hogares o, si se quiere, y todo en orden de magnitud, Soria capital. El consumo de (los hogares de) Soria capital en tres meses para entrenar uno de los mejores modelos disponibles (o, si se quiere, lo que producen 5-10 aerogeneradores modernos de correr el viento).

En la península Ibérica
[se pierden en el transporte](https://www.ree.es/es/datos/demanda/perdidas-transporte)
---es decir, se disipan en forma de calor en cables, transformadores, etc.--- unos 300-500 GWh al mes, o unos 550 MW en promedio. 10 MW arriba o abajo, ni se nota.

Cierto que hay muchos más modelos, que todo el mundo está entrenando constantemente, etc., y que se espera que su número aumente; pero, ¿cuántos modelos existen que compitan con GPT-4 en complejidad, etc.? ¿10? ¿20? ¿Importará mucho cuando entrenar uno de los LLMs que vendrán consuma, qué se yo, lo que Zaragoza?


### III.

El coste del entrenamiento puede ser una fracción del coste de la llamada _inferencia_, es decir, el uso que hacemos de los modelos. En [_From Words to Watts: Benchmarking the Energy Costs of Large Language Model Inference_](https://arxiv.org/pdf/2310.03003), un artículo de octubre de 2023, se estima el consumo de la inferencia en unos 4 J (julios) por token generado. Y eso que sus autores:

- Usan un LLM ya prehistórico, el primer LLaMa (aunque la dirección del efecto de usar un modelo más avanzado no pueda saberse de antemano).
- Usan _hardware_ ya prehistórico, las GPUs A100 y V100 de NVIDIA (las H100 son sustancialmente más eficientes).
- Usan su propia infraestructura de _hardware_-_software_, probablemente menos optimizada que la de las empresas que viven de eso.

Nota: 4 J es una cantidad bastante redonda y memorable: es, aproximadamente, una caloría, la cantidad de energía necesaria para calentar un gramo de agua un grado. Si [mi tinglado de LLMs](https://datanalytics.com/2024/02/06/llms-pocket-obsidian/) está generando unos 4000 _tokens_ al día (un par de folios de texto), está consumiendo la energía necesaria para calentar 1 grado 4 litros de agua. En orden de magnitud, el Quijote equivale a una ducha.

Esto no es decir que el negocio de la inferencia consumirá poco. De hecho, cuanto más eficiente se vuelva, más consumirá (Jevons, de nuevo). Recuérdese cómo hubo un tiempo en el que la gente mantenía los alimentos frescos en esos electrodomésticos mágicos que acababan de aparecer y que conocemos como neveras. Hoy no solo enfriamos los alimentos, sino los edificios enteros. Gastamos mucha más energía, sí, pero no porque nos hayamos vuelto menos eficientes, sino precisamente por lo contrario.

### IV.

Puede que los LLMs traigan consigo una serie de problemas, los conocidos y los por conocer. Pero, desde luego, el consumo de energía no parece ser uno de ellos. Solo, tal vez, en mentes anuméricas.