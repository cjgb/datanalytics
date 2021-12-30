---
author: Carlos J. Gil Bellosta
date: 2012-10-08 07:26:14+00:00
draft: false
title: Las cosquillas de los sondeos electorales

url: /2012/10/08/las-cosquillas-de-los-sondeos-electorales/
categories:
- estadística
- números
tags:
- encuestas
- estadística
- números
- encuestas electorales
- wert
---

El ministro Wert parece un tipo majo y con sentido del humor que nos cae mal a todos porque lo hemos conocido en el sitio y el momento equivocados. Pero tiene un par de artículos (_[No le contéis a mi madre que hago encuestas políticas. Ella cree aún que soy pianista en un burdel](http://www.reis.cis.es/REIS/jsp/REIS.jsp?opcion=articulo&ktitulo=1667&autor=JOS%C9+IGNACIO+WERT)_ y _[Mucho mejor que no haya encuestas](http://dialnet.unirioja.es/servlet/articulo?codigo=2420608)_) la mar de amenos y cuya lectura recomiendo encarecidamente sobre el tema que hoy nos ocupa.

Y es que El Periódico ha publicado los resultados de una encuesta electoral que resume en este gráfico:

![](/wp-uploads/2012/10/sondeo_cataluna.png#center)

Hay miles de maneras de leer esos resultados, pero la que llama especialmente la atención a quien suscribe y que motiva la presente entrada, es la extremada precisión que parecen tener las predicciones: CiU, por ejemplo, obtendría 64 o 65 escaños.

Afortunadamente, El Periódico ha publicado los [microdatos de la encuesta](http://www.elperiodico.com/es/ext_resources/gesop/EP_PreelectoralAut_Set2012_MatriuDades.rar). Y les he buscado un poco las cosquillas. Sobre todo, por curiosidad: habiéndome enfrentado en más de una ocasión a eso de la predicción, quería ver qué artes aplica El Periódico para hilar tan fino.

En la [ficha técnica de la encuesta](http://www.elperiodico.com/es/ext_resources/gesop/EP_PreelectoralAut_Set2012_Tabulacions.pdf) se lee que se entrevistaron a 800 personas telefónicamente lo que da un error del 3,5% con un nivel de confianza del 95% cuando `p=q=0.5`. Eso quiere decir que gracias a que se entrevistaron a 800 personas (y no menos) hay un 95% de probabilidad de que la diferencia entre el porcentaje obtenido en la encuesta y el real (de la población) sea menor del 3,5%. Nótense dos cosas, sin embargo:

1. Esa acotación del error se da para preguntas simples de respuesta sí/no. Pero la intención de voto no es una pregunta que tenga sólo dos respuestas posibles, sino varias. Honestamente, se me escapa si esos márgenes de error calculados para preguntas simples son directamente extrapolables a preguntas más complejas, con varias opciones.
2. Que si hay una probabilidad del 95% de cometer un error inferior al 3,5% en _una_ pregunta, la probabilidad de que el error sea así de pequeño en _cada_ pregunta de una encuesta que tiene 10 de ellas, por ejemplo, es de 0.95^10 = 60%.


Pero sigamos. De los 800 entrevistados, sólo 45 de ellos residen en lo que en tiempos se llamaba provincia de Lérida, en la que se disputan 15 escaños. Subrayo: hay 45 encuestados dentro de una provincia con más de 300.000 electores para estimar cómo se van a repartir 15 escaños. Además, estos, a la pregunta de cómo votarían de tener lugar las elecciones _mañana_, respondieron así: 16, a CiU; 14 no lo saben; 7, en blanco; 4 no contestan; 2 no votarían; y de los dos restantes, uno votaría al PP y otro a un partido que, se ve, se llama SI. Ninguno votaría ni al PSOE, ni a ERC ni a IU. Nótese que de 18 de los 45 no se tiene noticia de lo que harían.

Nótese incluso que si se aplica la [ley d'Hondt](http://www.grserrano.es/wp/2011/05/jugando-con-el-sistema-de-dhondt/) a la variable "recuerdo de voto" de las anteriores elecciones autonómicas que recoge la encuesta se obtiene el siguiente reparto de escaños: CiU, 8; ERC y PSOE, 3; PP, 1. Mientras que los reales fueron, respectivamente, 9, 1, 3 y 2.

¿Realmente creen mis lectores que son compatibles estas evidencias con unos rangos de error tan estrechos como los que da a entender El Periódico?
