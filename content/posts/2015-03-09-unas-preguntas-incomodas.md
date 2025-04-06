---
author: Carlos J. Gil Bellosta
categories:
- números
date: 2015-03-09 08:13:39+00:00
draft: false
lastmod: '2025-04-06T18:54:43.545027'
related:
- 2018-03-09-brechas-salariales-asi-las-calcularia-yo.md
- 2019-03-21-encuesta-de-estructura-salarial-y-r-propedeutica.md
- 2019-01-04-sobre-la-brecha-salarial-de-belleza.md
- 2017-07-04-dudas-razonables-que-me-asaltan.md
- 2022-01-04-la-altura-media-animales-zoo-madrid.md
tags:
- ees
- ine
- microdatos
- microdatoses
- salarios
title: Unas preguntas incómodas
url: /2015/03/09/unas-preguntas-incomodas/
---

Que la mujer promedio gana menos que el hombre promedio es un hecho conocido. A los usuarios de R que estén al tanto de mi paquete [MicroDatosEs](https://www.datanalytics.com/tags/microdatoses/) no hace falta siquiera que se lo cuenten: pueden bajar los datos de la [Encuesta de Estructura Salarial](http://www.ine.es/prodyser/microdatos.htm) del INE y hacer el cálculo por sí mismos.

Que las mujeres ganen menos en promedio aun teniendo en cuenta las [variables recogidas en dicha encuesta](http://www.ine.es/daco/daco42/salarial/cues10.pdf) (nivel de formación, antigüedad en el puesto de trabajo, etc.) es también un hecho. Los usuarios de R también pueden crear un modelo descriptivo: el fenómeno se manifiesta claramente. O pueden (sepan o no R) leer cualquiera de los informes publicados al respecto para llegar a la misma conclusión.

El hecho de utilizar esas otras variables adicionales tiene que ver con el hecho de que la pregunta de interés no es tanto si salarios de hombres y mujeres es igual sino si es igual para personas con similar función, valía, experiencia, etc. Otra cuestión —igualmente interesante pero que queda fuera del alcance de estos estudios— es si los niveles de formación son (y por qué) o debieran ser (y por qué) comparables para ambos sexos o no.

Pero en este punto me han asaltado siempre una serie de preguntas que estimo razonables y que me hacen cuestionar los resultados anteriores.

La primera tiene que ver con que los datos que recoge la EES (y en la que se basan todos los estudios sobre el asunto, al menos en España) son manifiestamente insuficientes para determinar si dos trabajadores tienen o no la misma cualificación y valía (y, por tanto, ameritan o no un sueldo diferente). Los datos que captura (de nuevo, [el cuestionario de la encuesta](http://www.ine.es/daco/daco42/salarial/cues10.pdf)) ignora la mayor parte de aquello que tienes escrito en tu currículo: idiomas, cursos, proyectos realizados, premios obtenidos, publicaciones, aficiones, permiso de conducción, disponibilidad para viajar, etc. Es decir, casi todo lo que cuentas en una entrevista de trabajo para ver si consigues un puesto y, además, negociar tu salario. Tampoco distinguiría si trabajas para Google o para Coritel. Así que la pregunta es: ¿es la EES el instrumento adecuado para la cuantificación de las diferencias salariales por sexo? Siendo el asunto tan importante, ¿no deberían crearse instrumentos más específicos y mejor diseñados para afrontar el problema?

La segunda, con que que gran parte de los trabajadores tienen como pagador a la administración pública o a una gran empresa. Y en ambos mundos existen unos baremos salariales claramente establecidos y que se supone (entiendo que incluso por ley en el caso de la administración) que se atienen a criterios de mérito y en ningún caso discriminan por sexo. Mi experiencia al respecto (en grandes empresas) es limitada, pero jamás he encontrado el caso de una mujer en el mismo puesto que un hombre y que gane menos que él. La gente a la que he preguntado, tampoco. Pero, de nuevo, mi universo está un tanto sesgado y no sé qué pueda ocurrir en, p.e., pequeñas empresas industriales. La pregunta entonces es: ¿debo creer a mis propios ojos o a la EES? ¿Estoy equivocado o es la EES —tal vez por los problemas que planteo más arriba— la que yerra? ¿No debería la EES mostrar igualdad salarial en esos sectores que menciono? ¿O es que existen mecanismos de discriminación subterráneos que pervierten los mecanismos aparentemente basados en mérito y que la EES permite aflorar?

Hummm...