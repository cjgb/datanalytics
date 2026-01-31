---
author: Carlos J. Gil Bellosta
categories:
- llms
date: 2026-02-04
lastmod: '2026-01-31T10:12:20.497281'
related:
- 2024-10-01-cortos-llms.md
- 2023-10-05-llms-historia.md
- 2025-04-15-cortos-llm.md
- 2024-05-21-sentencia-bono-social-ii.md
- 2024-04-19-cortos.md
tags:
- llms
- derecho
title: Más sobre por qué la IA generativa es menos útil para lidiar con cuestiones
  jurídicas que en otros ámbitos
url: /2026/02/04/llms-derecho/
---

Tiene Jesús Alfaro una entrada en su blog, [_Por qué la AI generativa es menos útil para lidiar con cuestiones jurídicas que en otros ámbitos_](https://derechomercantilespana.blogspot.com/2025/12/por-que-la-ai-generativa-es-menos-util.html), cuyo contenido no es enteramente fiel a su título. Aunque aporta razones de peso (y que no voy a cuestionar) sobre los problemas que plantean los LLMs para resolver cuestiones jurídicas, no acaba de explicar qué cosa concreta los hace _precisamente_ menos útiles en otros campos. Es decir, aunque anuncia una comparación, luego no la realiza. El objetivo de esta entrada es comparar el uso de los LLMs en el ámbito del derecho ---basándome necesariamente en la entrada anterior en tanto que mi experiencia en eso es nula--- con otros que conozco mejor, matemáticas y programación, para acabar proponiendo una síntesis (en el sentido dialéctico del término).

Es ocioso recordar la utilidad de los LLMs para programar. En cuanto a las matemáticas, quien consulte [esto](https://terrytao.wordpress.com/2025/11/05/mathematical-exploration-and-discovery-at-scale/), [esto](https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems) o [esto](https://www.nature.com/articles/d41586-025-02343-x) puede hacerse una idea de hasta qué punto son competentes en la materia hoy en día.

## Fragmentación

De los problemas que plantea Alfaro en su entrada, realmente, solo hay uno específico del derecho (siempre vs matemáticas y programación): la fragmentación. Aunque se refiere a él específicamente en el séptimo punto,

> La diversidad de ordenamientos incrementa la complejidad.

también hay referencias implícitas a esa fragmentación cuando alude a los _falsos amigos_ en la traducción de términos jurídicos, a la traslación de términos de otros reglamentos o a la dependencia con respecto al contexto normativo.

La fragmentación puede ser temporal o geográfica (sin excluir el _tertio_). El derecho está fragmentado en las dos direcciones: cambia de jurisdicción en jurisdicción, cambia de década en década. En cambio, con permiso de Lakatos, las matemáticas son iguales en Oslo y en Tombuctú y los grupos abelianos de hoy siguen siendo como los de los años cuarenta del siglo pasado.

Sin embargo, en el mundo de la programación sí que existe esa doble fragmentación. Por un lado, existen muchos lenguajes de programación, muchos de ellos similares. Aunque entiendo que es mucho más fácil para un LLM mantener la coherencia programando (y no saltar de Python a Typescript o de Java a C++) que razonando sobre la legislación mercantil (y no saltar subrepticia e inopinadamente de la española a la ecuatoriana). Queda admitido que es tal vez la dificultad más seria que advierto hoy. Aunque el hecho de que, típicamente, legislaciones distintas están redactadas en idiomas distintos, puede contribuir a reducir el riesgo de contaminación cruzada.

Porque la otra, la fragmentación temporal, no es en absoluto específica del derecho. Está también presente ---y cuántas veces la hemos sufrido--- en el mundo de la programación: ¿cuántas veces nos han sugerido los LLMs líneas de código que funcionaban en versiones anteriores y ya obsoletas? Y sin embargo...

## Estructuración

Dos de las dificultades que señala Alfaro hacen referencia a la estructura de la argumentación jurídica. Por ejemplo, escribe (cuarto problema):

> Un jurista estructura un razonamiento conforme a fuentes, jerarquía normativa, interpretación y hechos.

O en el octavo:

> El Derecho presenta una estructura fuertemente sistemática: las normas forman parte de instituciones, las instituciones de áreas, y todo ello se articula mediante principios. Los modelos generativos no representan esa estructura. La similitud lingüística entre expresiones no implica equivalencia funcional.

Que me lleva a pensar, de repente, en los Elementos de Euclides y en la estructura de definiciones, lemas, teoremas y corolarios habitual en matemáticas. O en la estructura de un problema de programación complejo. Cuando uno quiere construir una aplicación no trivial, el _prompt_ eficaz no es

> construye una aplicación que haga tal cosa

sino que, más bien, uno comienza solicitando una estructura, un andamiaje, que luego ir completando iterativa e interactivamente. Que los argumentos jurídicos se atengan a estructuras prefijadas no es un impedimento para la eficacia del uso de los LLMs sino todo lo contrario. Tal vez, habida cuenta de la estructura subyacente, los juristas deberían aprender de las buenas prácticas de los programadores para _modularizar_ explícitamente sus razonamientos cuando utilicen LLMs para ello (y también, claro está, cuando no).

## Otras cuestiones

Otras dos cuestiones que plantea Alfaro son las alucinaciones y la baja calidad de gran parte del material de entrenamiento. Del segundo, poco sé. Pero me extrañaría que la proporción de señal y ruido fuese mucho más feliz en Python que en derecho penal. Eso sí, admito que la fragmentación puede contribuir a exacerbar el problema: supongo que no es lo mismo un ratio entre señal y ruido del 10% cuando el denominador es 1e6 que cuando es 1e9.

Por su lado, las alucinaciones no son patrimonio exclusivo del derecho, por más que dichos casos sean [más notorios](https://naturalandartificiallaw.com/ai-hallucination-tracker/) (y trascendentes, supongo). Pero una manera idónea para paliar el problema que suponen es recurrir a la modularización a la que se refería la sección anterior: hace que las consultas sean mucho más acotadas y específicas, reduciendo el riesgo de desvaríos.

## La gran omisión

Para el asunto de esta entrada, la gran diferencia entre, por un lado, el derecho y, por el otro, las matemáticas y la programación, es el de la existencia de herramientas más o menos automáticas de validación. El papel, el medio de la argumentación jurídica, todo lo soporta; pero tanto las matemáticas como los programas tienen ---más propiamente, suelen tener--- criterios de validez mucho más estrictos y _operativizables_. En programación, hay (o puede haber) _tests_ que el código tiene que pasar correctamente. El caso de [JustHTML5](https://simonwillison.net/2025/Dec/14/justhtml/) es un ejemplo de libro de la interacción entre el desarrollo con LLMs y el uso masivo de _tests_ para el desarrollo de código robusto. Sobre el uso de LLMs y verificadores formales en matemáticas, puede consultarse [esto](https://arxiv.org/abs/2505.05758).

Sin embargo, ¿existe un sistema razonablemente automático que valide total o parcialmente un argumento jurídico? Sospecho que no.

## La síntesis

Hemos partido de una tesis: la de la inadecuación de los LLMs para lidiar con cuestiones jurídicas, la he contrapuesto con su uso en otros ámbitos donde son mucho más eficaces y creo que cabe esbozar una síntesis optimista: el uso de los LLMs en el ámbito del derecho podría ser más fructífero si:

- Se usasen aprovechando explícitamente las restricciones estructurales que rigen en la disciplina.
- Las propuestas generadas por los LLMs pudieran ser sometidas a una validación fiable dentro de unos rangos razonables de tolerancia.

Por un sistema de validación específico para el derecho pienso en una herramienta (independiente del LLM original, tal vez un LLM independiente u otro subproceso del mismo) que fuese capaz de:

- Verificar que las citas y referencias existen realmente.
- Que las citas y referencias no están desactualizadas.
- Que los argumentos concretos (p.e., el uso de un artículo determinado) son coherentes con la práctica habitual.

Es decir, someter la totalidad del argumento a una serie de herramientas (sospecho que aún inexistentes) que hagan una única cosa (pero que la hagan bien) y que operen como el equivalente de los tests en las otras dos disciplinas que considero en el texto anterior. Los LLMs tienden a especular más cuando se enfrentan a tareas abiertas y ambiguas que cuando se les plantea cuestiones específicas y acotadas.

Un sistema de esa naturaleza, que yo sepa, no existe. Sospecho que quien lo construya ganará una envidiable cantidad de dinero.