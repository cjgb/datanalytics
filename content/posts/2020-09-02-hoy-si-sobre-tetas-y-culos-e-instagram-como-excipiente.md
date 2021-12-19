---
author: Carlos J. Gil Bellosta
date: 2020-09-02 09:13:00+00:00
draft: false
title: Hoy sí, sobre tetas y culos (e Instagram, como excipiente)

url: /2020/09/02/hoy-si-sobre-tetas-y-culos-e-instagram-como-excipiente/
categories:
- ciencia de datos
tags:
- instagram
- recomendaciones
- redes sociales
- sistemas de recomendación
---

Hoy voy a aprovechar una excusa peregrina para hablar de lo que por algún motivo se me antoja imperiosamente, que son tetas y culos. Que (este pronombre es un puntero a _excusa_) es

_[Nota: aquí quise incrustar un tuit de Analía Plaza que, aparentemente, fue borrado por su autora meses después.]_

<!--- https://twitter.com/lalalalia/status/1300062241979596800 -->

Lo primero que tengo que decir al respecto es que las tetas y culos que asocia al Cabo de Gata el Instagram de quienqueira que haya tomado esas capturas son prácticamente las mismas que en el mío (y otro día os cuento por qué tengo Instagram, porque ni lo sabéis ni os lo podéis imaginar), a saber,

![](/wp-uploads/2020/09/Screenshot_20200901-234329.png)

Además, son las mismas tetas y culos que he visto en los móviles de todos los usuarios, algunos de ellos _heavy users_, de la red social que han tenido a bien donar unos segundos para la ciencia en general y para mi pequeño experimento en partitetar.

Lo cual llama la atención muchísimo: aparentemente, Instagram no usa un sistema de recomendación personalizado cuando alguien busca contenido acerca de una ubicación concreta (aparentemente de nuevo, no es lo mismo buscar información sobre un texto o un _hashtag_, donde sí que parece operar la personalización, que sobre lo que Instagram entiende como el nombre de un lugar). Extraño.

Más lo es aún a la luz de lo que el mismo Instagram (o Facebook) ha hecho público sobre su sistema de recomendación ([aquí](https://ai.facebook.com/blog/powered-by-ai-instagrams-explore-recommender-system/)). En particular, dicen hacer lo que todo el mundo, es decir,

>Retrieving accounts that are similar to those that a particular person previously expressed interest in helps us narrow down to a smaller, personalized ranking inventory for each person in a simple yet effective way. 

para personalizar el contenido y mostrar gatos a quien le gusten los gatos, chuchos a quien le gusten los chuchos y portátiles fotografiados en las sedes de las empresas del Ibex 35 a los _friquis_ de esas cosas. Parece, pues, que el sistema de personalización de los resultados existe, al menos sobre el papel,  pero que no está activado a las búsquedas por localización. Raro pero excusable.

Otra cosa es lo de la obsesión por las tetas y los culos. ¿Por qué se empeña Instagram en mostrarlos por doquier? Lo que dice el artículo técnico que enlazo arriba no es

>Entrenamos una red neuronal para detectar tetas y culos y, ante la duda, echamos mano del refranero.

sino específicamente (y con mi subrayado),

>If the first-pass distillation model mimics the other two stages in ranking order, how do we decide the most relevant content in the next two stages? **We predict individual actions that people take on each piece of media**, whether they’re positive actions such as like and save, or negative actions such as “See Fewer Posts Like This” (SFPLT).

[¿Vais entendiendo por qué lo más bonito que tenía Platón que decir sobre la democracia es que era _la corrupción del poder y la fuerza_?]

Analía nos regala un enlace a [_Undress or fail: Instagram’s algorithm strong-arms users into showing skin_](https://algorithmwatch.org/en/story/instagram-algorithm-nudity/), que es la versión menos técnica de [esto](https://docs.google.com/document/d/1L7A5hmskm3Y3huSXHNtIIoiVijHD3dkDqubff4Yvkg8/edit#) (que, a su vez, puede entenderse como el apéndice estadístico de lo primero) y que argumenta lo que cabe esperar habida cuenta de que el p-valor asociado a

![](/wp-uploads/2020/09/test_instagram.png)

está, como no podía ser de otra manera, por debajo del umbral que sugería Fisher.

Pero eso no dice nada. Al menos, no dice que Instagram esté favoreciendo cierto tipo de contenido (ya sabéis cual: tetas y culos). Está simplemente indicándonos cuáles son las preferencias agregadas de la audiencia de la red social, convenientemente promediadas y _productivizadas_ por el modelo subyacente al sistema de recomendación.

Para estudiar si el sistema siente especial predilección por tetas y culos, habría que _controlar_ de alguna manera por la _calidad_ que asigna Instagram a las fotos (tal vez, según el número de _likes_, etc.). Como por ahí está contada la manera (técnica), y se me hace ya mañana, aquí lo dejo.