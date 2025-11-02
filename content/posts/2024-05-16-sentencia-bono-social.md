---
author: Carlos J. Gil Bellosta
categories:
- varios
date: 2024-05-16
lastmod: '2025-04-06T19:06:25.825897'
related:
- 2024-05-21-sentencia-bono-social-ii.md
- 2012-03-27-acceso-y-reutilizacion-de-datos-publicos.md
- 2012-10-04-ley-de-transparencia-y-anonimidad-en-ficheros-de-microdatos-ii.md
- 2011-07-05-disponible-el-borrador-de-la-ley-de-acceso-a-la-informacion.md
- 2014-11-25-boceto-de-entrada-sobre-bits-y-referendums.md
tags:
- derecho
- publicodes
- programación
- ia
title: Ideas alrededor de la sentencia de lo del bono social de la luz
url: /2024/05/16/sentencia-bono-social-luz-i/
---

### I.

En España se ideó un sistema para que los menesterosos disfrutasen de luz cuasigratuita al que se le dio el nombre de bono social eléctrico (o similar). Para recibirlo, el interesado tiene que acreditar una serie de _hechos objetivos_; luego, un algoritmo **determinista** ---del que la ley y sus reglamentos son el seudocódigo--- determina la procedencia o no del bono. Ese algoritmo se implementó en un programa llamado BOSCO.

Lo que pasó luego se cuenta [aquí](https://almacendederecho.org/por-que-se-equivocan-las-sentencias-sobre-el-algoritmo-del-bono-social-electrico):

> La fundación Civio [...] creó su propia aplicación informática para ayudar a colectivos vulnerables a pedir las ayudas. Decenas de ayuntamientos, organizaciones sociales, colectivos y medios la insertaron en su web, llegando a muchos miles de personas.
>
> El uso de esa aplicación de Civio puso de relieve que algo no funcionaba bien: utilizada la aplicación de Civio y el programa Bosco a la vez, los resultados no eran idénticos, denegando el segundo solicitudes de personas que tenían derecho al bono social, de acuerdo con la regulación vigente. La Fundación Civio solicitó en 2018 acceso al código fuente de BOSCO, de acuerdo con la legislación española de transparencia, porque había indicios de errores en su configuración que impedían la aplicación correcta de la legislación.

La fundación Civio solicitó el código fuente de BOSCO por vía administrativa primero y judicial después y ya tenemos sentencia: no, no se le va a dar acceso al código fuente de BOSCO.

Y sobre esa sentencia he leído dos artículos (nótese el uso de las comillas, posiblemente involuntario, pero lleno de información) en el mismo blog:
- [Por qué aciertan las sentencias sobre el ‘algoritmo’ del bono social eléctrico](https://almacendederecho.org/por-que-aciertan-las-sentencias-sobre-el-algoritmo-del-bono-social-electrico), de Alejandro Huergo
- [Por qué se equivocan las sentencias sobre el algoritmo del bono social eléctrico](https://almacendederecho.org/por-que-se-equivocan-las-sentencias-sobre-el-algoritmo-del-bono-social-electrico), de Juli Ponce Solé


## II.

La sentencia parece basarse en dos circunstancias poco interesantes:

- la protección de la propiedad intelectual del código
- los riesgos de ciberseguridad

Lo evidente es que el RdE (Reino de España, en lo que sigue) no quería mostrar el código, la ley de transparencia lista una serie de motivos por los que este se puede negar a hacerlo, sus abogados han construido un caso alrededor de ello y se han llevado el gato al agua. Porque la propiedad intelectual del código, casi seguro, es del RdE y dicho reino podría haber hecho con él lo que le viniese en gana, como, p.e., liberarlo mediante una licencia abierta. Y en cuanto al asunto de la _ciberseguridad_ se ha optado por ---se ha elevado prácticamente a rango de ley--- la [_security through obscurity_](https://en.wikipedia.org/wiki/Security_through_obscurity), que es el método más contraproducente, menos _idóneo_ ---en la jerga--- y más _cuñado_ para lograr el objetivo deseado que pueda imaginarse.

De todos modos, el asunto suscita algunas cuestiones, de entre las que hoy trataré las dos más breves, para dejar la tercera para una futura ocasión.

### III.

Pongámonos serios: el problema fundamentalmente estriba en que el RdE desconoce una herramienta muy conveniente que ha desarrollado la República Francesa, [`publicodes`](https://publi.codes/),

> _[l]e langage pour les algorithmes d'intérêt public_

En su página de presentación dice algo que un LLM _random_ ha querido traducir del francés así:

> Publicodes es un lenguaje declarativo para modelar dominios profesionales complejos descomponiéndolos en reglas elementales simples.
>
> Es utilizado por varias administraciones para implementar reglas de cálculo en una amplia variedad de campos (nóminas, huella de carbono, notificación de jubilación).
>
> Además de calcular resultados a partir de una situación ingresada, Publicodes genera automáticamente documentación explorable que ofrece una explicación del cálculo, la cual se integra fácilmente en una aplicación web. Por lo tanto, Publicodes es particularmente adecuado para un enfoque de transparencia en los algoritmos públicos.

En concreto, uno escribe las reglas de la forma

![](/img/2024/publicodes_rules.png#center)

y el sistema produce algo así como

![](/img/2024/publicodes_output.png#center)

automáticamente.

Si el RdE hubiese escrito el algoritmo para la concesión del bono social en ese dialecto de YAML en el BOE, el problema entero al que se refieren todos esos ríos de tinta malgastados habría padecido una dichosa muerte fetal ultratemprana.

Aclarado esto, se comprenderá que todo lo demás que se lea al respecto tiene, sobre todo, interés antropológico: son relatos sobre los mecanismos rituales a través de los que una serie de sujetos carpetovetónicos demarcan parcelas de poder.

### IV.

Es de ayernacidos dar por sentado que porque alguien haya escrito en algún sitio un seudocódigo ---sobre todo, si lo hace en lenguaje natural---, las distintas implementaciones que se hagan de él van a coincidir en todo. El contraejemplo concreto sobre el que ---casi seguro--- más se ha escrito en España se refiere al siguiente seudocódigo:

> El Consejo General del Poder Judicial estará integrado por el Presidente del Tribunal Supremo, que lo presidirá, y por veinte miembros nombrados por el Rey por un período de cinco años. De éstos, doce entre Jueces y Magistrados de todas las categorías judiciales, en los términos que establezca la ley orgánica; cuatro a propuesta del Congreso de los Diputados, y cuatro a propuesta del Senado, elegidos en ambos casos por mayoría de tres quintos de sus miembros, entre abogados y otros juristas, todos ellos de reconocida competencia y con más de quince años de ejercicio en su profesión.

Ese texto de 1978 (por eso acentúa _éstos_) describe el mecanismo por el que ha de renovarse el CGPJ. De él ha habido, parece ser, dos implementaciones distintas y contradictorias: una en 1980 y otra de 1985 (llamadas, respectivamente, Ley Orgánica 1/1980, de 10 de enero y Ley Orgánica 6/1985, de 1 de julio). Los expertos todavía no están de acuerdo en cuál es la más acertada y, en particular, quién es el responsable de elegir los primeros doce miembros del consejo a los que se refiere el algoritmo anterior. (Para los detalles, puede leerse [esto](https://almacendederecho.org/la-renovacion-del-consejo-general-del-poder-judicial-una-farsa).)

El lenguaje natural está lleno de ambigüedades: cuando la gente escribe "o", no está claro si se refiere al operador `OR` o al `XOR`. Cuando la gente escribe "si A entonces X y si B, entonces Y" no está claro si la segunda cláusula es o no un `ELSE` de la primera (es decir, qué opción, la X o la Y, tiene preferencia si se cumplen A y B simultáneamente), o qué hacer cuando no se cumple ninguna. O qué forma tiene en código un artículo que principia diciendo _without prejudice to Rule 171.a,..._. Etc. Esas son todas cuestiones que tiene que resolver el programador. Es natural, habiendo tantos [senderos que se bifurcan](https://es.wikipedia.org/wiki/El_jard%C3%ADn_de_senderos_que_se_bifurcan), que dos que trabajen independientemente sobre un mismo seudocódigo obtengan implementaciones que den resultados distintos.

Que es la madre del cordero, según he citado arriba y reproduzco de nuevo aquí:

> El uso de esa aplicación de Civio puso de relieve que algo no funcionaba bien: utilizada la aplicación de Civio y el programa Bosco a la vez, _los resultados no eran idénticos_, denegando el segundo solicitudes de personas que tenían derecho al bono social, de acuerdo con la regulación vigente.

Lo raro de la cosa es que:

1. De ser cierto que ha habido discrepancias y errores, que las decisiones no se hayan recurrido y revertido.
2. Y que advertidos de dichos recursos, los autores de BOSCO no hayan alineado su implementación con la interpretación que de ella han hecho quienes tenían potestad para ello.
3. Si es que, claro está, esas decisiones son vinculantes (y no meramente opiniones circunstanciales).

Es decir, que no exista un mecanismo por el cual el código de BOSCO converja hacia el que esperan las instancias que tienen poder para resolver vinculantemente las ambigüedades cuando estas tienen ocasión de manifestarse.


### V.

En el derecho penal existe un principio general: _in dubio pro reo_. Podría decirse que funciona como un `ELSE` implícito en todas las bifurcaciones.

Hay empresas en las que operan principios similares: uno habitual es que, en caso de duda, se aplique la opción que beneficia al cliente. Por ejemplo, a la hora de redondear cantidades. Pero no es habitual. Solo podría citar a la Agencia Tributaria como ejemplo de lugar donde hay una política evidente en caso de duda: siempre _pro_ bonus del inspector.

[**Inciso:** Cuando quien hoy escribe tenía enfrente uno de estos senderos que se bifurcan y se veía obligado a optar por una de las dos implementaciones, el criterio que utilzaba era simple y efectivo: la más rápida y sencilla. Después, si alguien 1) se enteraba, 2) protestaba y 3) no atendía las razones que le daba ---que desde luego no eran las reales, sino otras cohonestadoras de lo _fecho_---, tocaba, qué remedio, implementar la más trabajosa.]

Desde luego, contar con un criterio generalizado ayudaría a alinear las distintas implementaciones de un mismo seudocódigo. Lo cual me lleva a especular con lo siguiente: las discrepancias que dizque existen entre las dos implementaciones, BOSCO y Civio, del mismo seudocoódigo se deben a que han resuelto en favor de la administración los primeros y del interesado los segundos las ambigüedades del lenguaje natural.