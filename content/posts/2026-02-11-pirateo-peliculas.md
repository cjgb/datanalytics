---
author: Carlos J. Gil Bellosta
categories:
- tecnología
date: 2026-02-11
description: 'Sobre el complejo ecosistema de los addons de Kodi: desde servidores
  de archivos y bases de datos de enlaces hasta el papel clave de los servicios Debrid.'
lastmod: '2026-02-11T11:49:20.571901'
related:
- 2025-05-15-dark-web.md
- 2017-09-19-fedatarios-blockchain-y-bitcoin.md
- 2010-11-09-la-pirateria-de-libros-se-dispara-en-2010-nos-dicen.md
- 2021-12-30-forma-insidiosa-spam.md
- 2025-07-02-esquemas-semi-ponzi.md
tags:
- piratería
- kodi
- debrid
title: ¿Cómo funcionan los addons de Kodi para bajar películas piratas?
url: /2026/02/11/pirateria-kodi/
---

Hoy voy a dejar escritas una serie de cosas que he aprendido últimamente investigando sobre un asunto que no es del interés de la gente de bien. La gente de bien, para ver películas (etc.) paga suscripciones a proveedores como Netflix y no se mete en berenjenales.

Pero otros usan herramientas tales como _addons_ truchos de Kodi con la esperanza ---no siempre realizada--- de poder ver películas _gratis total_. Lo que sigue describe lo que uno descubre cuando investiga cómo hacen esos _addons_ para ofrecer contenidos y cuáles son los sistemas subyacentes que explotan o tratan de explotar. Antes de continuar, no obstante, quiero que consten varias salvedades:

- Lo que cuento hoy no aplica solo a películas sino también a otro tipo de _contenidos_ digitales (revistas, música, _software_, etc.).
- Además, no es la única fuente de este tipo de contenido: omito, por ejemplo, el mundo del P2P, que tal vez merecería un estudio aparte.
- Aunque me refiera a los _addons_ de Kodi, el funcionamiento es similar en otro tipo de herramientas, como Stremio y alguna más de esas que _van y vienen_.
- Por supuesto, esta entrada es una mera descripción técnica y no debe entenderse como una invitación o recomendación a nada.

Los _addons_ de Kodi no son otra cosa que _scripts_ de Python. Instalar un _addon_ consiste realmente en instalar una serie de paquetes de Python. Aunque de una manera más sinuosa que la habitual de realizar simples llamadas a `pip` en tanto que el objetivo de esos paquetes tiene un encaje legal complicado en la mayor parte de las jurisdicciones, si no en todas. El proceso es algo más alambicado, pero con un poco de esfuerzo uno puede descargar su código fuente e inspeccionarlo.

Así uno descubre que esos _addons_ explotan una compleja infraestructura subyacente en la que intervienen tres tipos de actores. Los voy a describir someramente en las tres secciones siguientes. Con poco más que eso, quedará claro cómo interactúan los _addons_ con esos tres tipos de actores, que son:

- Servicios de almacenamiento de archivos.
- Bases de datos de enlaces.
- Sistemas _debrid_.

## Servicios de almacenamiento de archivos

En su día, mucha gente usó [Megaupload](https://en.wikipedia.org/wiki/Megaupload). Megaupload fue _intervenido_ y desapareció, pero muchos otros actores ofrecen hoy en día servicios similares: RapidRAR, RapidGator, Fileboom, Katfile, etc.

Todos tienen un funcionamiento parecido:

- Usuarios particulares pueden subir sus ficheros a esos servicios.
- Cada fichero tiene una URL privada conocida solo por quien subió el fichero.
- Quien dispone de la URL puede bajar el contenido.
- El servicio proporciona descargas en dos modalidades: _gratuitas_ (limitadas, con un tiempo de espera, lentas) y rápidas para los usuarios de pago.

Si consigues acceso a un fichero contenido en uno de esos servicios e intentas descargarlo, llegas a una página no muy distinta de esta:

![Piratería RapidRAR](/img/2026/pirateria-rapidrar-00.png#center)

Aunque lo pareciera, no son servicios a los que uno pueda subir, por ejemplo, sus copias de seguridad. No es un Dropbox, un S3 o un Google Drive. De hecho, algunos de estos servicios (si no todos) borran los ficheros que no tienen un número suficiente de descargas.

Porque estos servicios ganan dinero precisamente cuando la gente paga por bajar contenido. Así que su modelo de negocio viene a ser:

- Atraer a usuarios para que suban contenido que pueda ser del interés de muchos (p.e., películas pirateadas).
- Compartir con esos usuarios parte del beneficio que generen sus descargas.

Recuérdese que los enlaces son privados. Si yo subiese a RapidRAR una película, solo yo conocería el enlace para descargarla. Eso forma parte de la cobertura legal de la que se sirven estos servicios: almacenan ficheros personales de usuarios particulares. Además, parece ser, como mecanismo adicional de cobertura, se prestan a retirarlos con falso entusiasmo cuando reciben quejas formales de sus legítimos dueños. El meme del comisario de Casablanca («¡Qué escándalo! He descubierto que aquí se juega«), sería aquí muy oportuno.

## Bases de datos de enlaces

Obviamente, mal van a conseguir descargas los actores de la sección anterior si los enlaces a los contenidos de interés tienen la forma `https://rapidrar.cr/1q9w3ieohn8n8` y son solo conocidos por ellos. Por eso existen bases de datos de enlaces.

En el código fuente de un _addon_ de Kodi descubrí, entre otros, [RapidMoviez](https://rapidmoviez.website/) y [ReleaseBB](https://search.rlsbb.ru/). Aún le queda hora y media al día de hoy y en ReleaseBB se han publicado unos 250 enlaces a _contenidos_ diversos: películas, discos, episodios de series, etc.

## Servicios _debrid_

En una primera aproximación, un _addon_ funcionaría así:

1. El usuario solicita un contenido al _addon_.
2. El _addon_ lo busca en las bases de datos de enlaces. Algunas de ellas tienen _captchas_ para evitar ser _escrapeados_; por eso el código de los _addons_ contiene infinidad de líneas para, por lo que parece, saltárselos. _Addons_ y bases de datos juegan al gato y al ratón, da la impresión.
3. Con el enlace, el _addon_ trata de descargar el contenido y servírselo al usuario.

El tercer punto es problemático: el usuario puede no tener cuenta en el servicio donde está alojado el contenido deseado. Y la opción de descarga gratuita tiene _antifeatures_ pensadas precisamente para dificultar el consumo del contenido en tiempo real. De ahí los servicios _debrid_ (preguntad a un LLM sobre la etimología del término). Los lectores interesados en la materia podrán encontrar una lista de los más queridos por el público por su cuenta.

Los servicios _debrid_ tienen un papel no se sabe muy bien si catalítico o parasitario en el ecosistema descrito más arriba y operan como intermediarios entre el usuario final y el servicio de almacenamiento de archivos.

Si el usuario final es cliente del servicio _debrid_ (porque le paga una cantidad mensual) y solicita un contenido (una url), ocurre lo siguiente:

1. Si el servicio _debrid_ lo tiene en la caché ---estos servicios operan cachés enormes---, se lo sirve al usuario sin pasar por el servicio de almacenamiento.
2. De no ser así, el servicio _debrid_ podría tener una cuenta _premium_ en el servicio de almacenamiento para descargarlo, servírselo al usuario y, además, guardarlo en la caché para atender futuras solicitudes.

Por lo tanto, si un usuario se da de alta en un servicio _debrid_, no necesita hacerlo en un servicio de almacenamiento (o varios).

Se ve que la relación entre los servicios _debrid_ y los de almacenamiento es de amor-odio: por un lado, los servicios _debrid_ son clientes de los de almacenamiento. Por el otro, les roban potenciales clientes. Así que en algunos casos los aceptan como mal menor y en otros tratan de cancelar sus cuentas (por lo que se crea otro juego de gatos y ratones entre los dos tipos de servicios, con apertura de cuentas desde diferentes IPs, etc.).

Así las cosas, es evidente cómo funcionan los _addons_ truchos de Kodi, sobre qué tres palancas se apoyan y por qué son prácticamente inutilizables sin una cuenta en un servicio de _debrid_.

Finalmente, ¿no es increíble que exista un entramado tan sofisticado de actores que, probablemente, dé de comer a miles de personas (admitido: en muchos casos poco y mal y en países donde eso es mucho más barato) sin necesidad de patronales, sindicatos, subvenciones, tribunales, policías y todas esas cosas sin las que, nos dicen, periclitaría todo asomo de actividad económica?