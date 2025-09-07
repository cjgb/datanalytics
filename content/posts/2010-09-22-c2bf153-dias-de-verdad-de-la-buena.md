---
author: Carlos J. Gil Bellosta
categories:
- números
date: 2010-09-22 18:37:05+00:00
lastmod: '2025-04-06T18:57:50.784340'
related:
- 2022-09-08-regresion-perdida-asimetrica.md
- 2021-11-18-sobre-el-almacenamiento-industrial-de-la-energia-electrica.md
- 2022-07-26-hueco-termico.md
- 2022-10-25-muchos-julios-hidraulica.md
- 2024-06-25-consumo-llms.md
tags:
- números
title: ¿153 días de verdad de la buena?
url: /2010/09/22/153-dias-de-verdad-de-la-buena/
---

Hoy he encontrado una cifra en el periódico: [153 días](http://blogs.elpais.com/eco-lab/2010/09/lo-que-contamina-un-aerogenerador.html). Se refiere al tiempo que presuntamente tarda un aerogenerador en producir la energía que consume su construcción.

Como curioso que soy, por el interés que tengo en la materia y porque nunca, nunca, nunca me creo un número que veo publicado, he hecho algunas comprobaciones por si el autor me trataba de colar un bulo. Es que, además, me ha sorprendido la cifra por pequeña, por demasiado favorable a la causa de las energías renovables cuando, años atrás, hablando del tema con mi antiguo profesor de física, habíamos llegado a una conclusión bastante distinta haciendo cuentas en la servilleta del bar.

Ahí van pues mis números.

Primero, he buscado en Internet las [especificaciones técnicas de un aerogenerador al azar ](http://www.construnario.com/ebooks/9482/Aerogeneradores/Ecot%C3%A8cnia%2062/files/publication.pdf)de las que he extraído la siguiente información:


* que la torre, la componente más pesada, contiene unas 150 toneladas de acero y
* que la potencia máxima del aerogenerador es de 1300 kW.

Por otro lado, he averiguado que [elaborar una tonelada de acero requiere 600 kg de carbón](http://www.worldcoal.org/coal/uses-of-coal/coal-steel/) de una variedad, _coke_, que [contiene  35000 kJ por kg](http://en.wikipedia.org/wiki/Coal), que equivalen a (prácticamente) 10 [kWh](http://es.wikipedia.org/wiki/Kilovatio-hora).

Así que si la torre pesa 150 toneladas, fundir tal cantidad de acero requiere 90 toneladas de carbón, es decir, 900.000 kWh.

Si la torre produce 1.000 kW por hora, serían necesarias 900 horas a pleno rendimiento, unos 40 días, para que éste generase la energía que compense la de (gran parte de) su construcción. Si [el rendimiento de un aerogenerador es del 10%](https://demanda.ree.es/eolica.html) [25%](http://www.ree.es/sistema_electrico/pdf/infosis/Inf_Sis_Elec_REE_2009_SistemaPeninsular04.pdf), en promedio se puede estimar a ojo que en un contexto más realista una torre se autojustifica energéticamente en el plazo de un año algo menos de medio año, dentro del orden de magnitud de la estimación del periódico. ¡Por una vez! Aunque debe notarse que ésta es únicamente una cota inferior dado que se han omitido otros costes energéticos (góndola, aspas, transporte, etc.).

**Nota:** he introducido modificaciones en el último párrafo por un error mío (producto de la pereza al no contrastar adecuadamente ciertos datos) advertido por uno de mis lectores (véanse los comentarios al artículo). Tengo que señalar que la eficiencia del 25% no la he podido deducir de la información de los enlaces que me ha indicado (¿habré mirado mal?) aunque sí en [este documento de REE](http://www.ree.es/sistema_electrico/pdf/infosis/Inf_Sis_Elec_REE_2009_SistemaPeninsular04.pdf) en el que he dividido la producción eólica total del 2009 en España por el número de horas del año y por la capacidad instalada media (promedio de la existente a finales del 2008 y del 2009).