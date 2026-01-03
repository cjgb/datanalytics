---
-categories:
- mala ciencia
author: Carlos J. Gil Bellosta
date: 2025-10-14
description: Analogía entre bases de datos distribuidas y el mecanismo autocorrector
  de la ciencia, con el cotilleo como pieza clave del proceso científico.
lastmod: '2025-10-26T17:19:33.649219'
related:
- 2025-07-15-cortos-mala-ciencia.md
- 2017-03-07-en-contra-del-estado-de-derecho.md
- 2021-09-16-sobre-la-economia-conductual.md
- 2018-09-19-ocurrencias-cuotas-de-gente-de-letras-en-la-ciencia-de-datos.md
- 2020-12-07-en-respuesta-a-los-que-me-preguntan-si-pondre-la-vacuna.md
tags:
- mala ciencia
- filoosfía de la ciencia
- bases de datos
- dns
- cotilleo
- dynomight
- cis
- tezanos
title: El mecanismo autocorrector de la ciencia (y el papel del cotilleo)
url: /2025/10/14/autocorreccion-ciencia/
---

No sé mucho de filosofía de la ciencia, pero sí de informática. Así que, en cierto modo, soy como aquel tonto del martillo. Pero tal vez la analogía que presento más abajo pueda servirle a alguien.

Existe un tipo de bases de datos distribuidas llamadas _eventualmente consistentes_. La promesa que hacen es que si cambias un dato, al cabo de un periodo de tiempo indeterminado, todas sus réplicas convergirán al mismo valor. Mientras tanto, lecturas de nodos distintos pueden dar resultado distintos y contradictorios. Por ejemplo, los _likes_ de una red social pueden estar almacenados en una de tales bases de datos y puede que un usuario en Tokio vea 34 _likes_ a un vídeo y otro en Madrid, 35. Al cabo de un tiempo ambos acabarán viendo 35 (o, puede que 37 y 36: nada está garantizado al 100%).

Otro tipo de bases de datos de ese tipo son las que gestionan los DNSs globales. Es conocido de todos el problema de la _propagación_.

En la cadena de bloques del Bitcoin sucede algo parecido. Puede ser que haya divergencias en los bloques más recientes de la cadena, que exista una escisión. Pero la arquitectura del Bitcoin es robusta y, al cabo de un tiempo, estas divergencias se subsanan; la historia de hace una semana es una por más que la de hace dos minutos pueda ser varia.

El llamado mecanismo autocorrector de la ciencia es análogo. La ciencia es una actividad distribuida, con gente contribuyendo a ella desde lugares variopintos y sin comunicación efectiva en tiempo real de las actualizaciones que van ocurriendo aquí y allá. Lo cual plantea problemas a la hora de definir concretamente qué significa "confiar en la ciencia".

Para algunos, "confiar en la ciencia" viene a ser un juicio similar a sostener que la versión Python 3.15.0 alpha 1, liberada el mismo día en las que se escriben estas líneas, está exenta de _bugs_ y que tenemos que dar por bueno cualquier resultado obtenido con ella. Una interpretación más adulta de la cosa es entender que Python 3.15.0 alpha 1 está plagada de errores aunque versiones posteriores irán purgándolos y que en la versión de Python 3.15 que tengamos al cabo de un par de años quedarán pocos. Que, por supuesto, podemos fiarnos a cierraojos de las listas, conjuntos y diccionarios de Python 3.15.0 alpha 1, pero tal vez no de añadidos que no estaban presentes en Python 3.14.

Así que aquellos que están solo interesados en resultados presentes desde la versión 1780.10 de la ciencia hasta la actual, la 2025.10, tienen garantías más que razonables de estar transitando sobre terreno sólido, mientras que los que exploran el `git diff` entre las versiones 2025.09 y la 2025.10 deberían andar con pies de plomo.

Lo cual lleva a plantearnos preguntas sobre la velocidad del asentamiento de los resultados científicos y las barreras presentes en el mecanismo de autocorrección. El proceso está influido por dos condicionantes:

1. Las injerencias políticas (o extracientíficas).
2. La escala humana de la actividad científica.

Sobre la primera hay mucho escrito. Baste decir que como es moda de hoy en día que la actividad política esté respaldada por _la ciencia_, un mecanismo que tiene el poder de arrimar el ascua a una sardina de su interés no es otro que influir en el entramado económico y social en el que operan quienes _fabrican_ ciencia para que digan lo que interesa. Los efectos son reales y conocidos. Existen evidencias de casos para aburrir al más paciente. Solo hay que reseñar que esos efectos tienen una duración determinada y que operan en tanto que operan sus causas. Esa _ciencia_ raruna, por ejemplo, que salió de la Unión Soviética en los años treinta y cuarenta, se cayó en el 53 por motivos sobradamente conocidos.

Por otro lado, la ciencia es una actividad humana. Los ciclos de actualización están relacionados con los ciclos naturales de los individuos de nuestra especie. La sociología en España se mantendrá en un estadio _presque_-medieval en tanto que los popes Tezanos y Alamillos no pasen a disfrutar de un merecidísimo descanso en Benidorm. Etc.

Mucha gente, además, ignora que existen dos ciencias: la ciencia _de puertas para adentro_ y la ciencia _pública_ de distinta naturaleza y calidad. La ciencia "pública" está contenida en libros, artículos, conferencias, etc. La ciencia "no pública" tiene, además de eso, cotilleos, impenetrables para el observador externo. Los cotilleos circulan por correo electrónico, conversaciones de café, etc. y sirven para destilar y purificar el conocimiento.

Si un científico A publica una magufada y un científico B discrepa vehementemente y publica un artículo en el que lo contradice, lo hará de una manera tan sutil y empleando términos tan inocuos que alguien que no esté avisado de la intrahistoria de la cosa ---a través del cotilleo, por supuesto--- no advertirá la crudeza del episodio. Pero aun sin la refutación, la ciencia interna ignorará los resultados de A mientras que los observadores externos de la cosa solo veremos aquello que A publicó con el marchamo de calidad de la revisión por pares y toda la _gravitas_ que le confiere su origen _científico_. En consecuencia, es posible que al desconfiar de ciertos resultados de _la ciencia_, esté uno alineándose con la ciencia "de puertas para adentro" buena y acertando más que errando.

**Nota:** Parte de lo que discuto acerca del papel del cotilleo procede de una entrada en el [blog de Dynomight](https://dynomight.net) que no he podido ubicar.