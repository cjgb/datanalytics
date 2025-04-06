---
author: Carlos J. Gil Bellosta
categories:
- programación
date: 2023-05-18
lastmod: '2025-04-06T18:59:14.636259'
related:
- 2016-04-22-en-una-api-de-cuyo-endpoint-no-quiero-acordarme.md
- 2010-05-27-google-prediction-api.md
- 2024-02-06-llm-obsidian.md
- 2014-06-13-agrupacion-de-grafos-por-topologia.md
- 2016-08-31-todrepa-831s-y-todrepo-6450s-los-autores-de-paquetes-de-r.md
tags:
- apis
- twitter
- python
title: 'Twitter API: cómo usar una única cuenta para tuitear en nombre de terceros'
url: /2023/05/18/twitter-api/
---

## I. El problema original

* Tienes dos cuentas en Twitter, llámense `@trabajo` y `@personal`.
* Tienes una única cuenta de desarrollador en Twitter. Supongamos que está vinculada al usuario `@trabajo`.
* Quieres usarla para tuitear también en nombre de `@personal`.

Lo suyo sería disponer de dos cuentas de desarollador, una para cada usuario. Sin embargo, Twitter parece estar dando acceso a tu plataforma de desarrollador con cuentagotas y ni siquiera está claro si conceden más de una cuenta a una misma persona que maneje varios _usuarios_.

Y de hecho, ese era el problema con el que me encontraba yo particularmente: había obtenido una cuenta de desarrollador hace un tiempo para un pequeño experimento, pero no me la conceden para la principal, `@gilbellosta`.

## II. Tuitear desde Python

Tuitear desde Python consiste esencialmente en hacer:

{{< highlight python >}}
import tweepy

client = tweepy.Client(
    consumer_key        = 'api auth',
    consumer_secret     = 'api secret',
    access_token        = 'access_token',
    access_token_secret = 'access_token_secret'
)

client.create_tweet(text='Esta es una prueba...')
{{< / highlight >}}

Hacen falta cuatro _tokens_:

* Los dos primeros identifican la API ---más bien, la aplicación que va a usar la API--- y se obtienen al crearla dentro de la cuenta de desarrollo de Twitter. En mi caso, estaban asociados a la cuenta que creé para aquel experimento.
* Los otros dos están asociados al usuario. Si en el código anterior se indican los _tokens_ de `@trabajo`, el tuit se publicará en nombre de `@trabajo`, pero si se usan los de `@personal`, etc.
* Dentro de la plataforma de desarrollo de Twitter se muestran los _tokens_ de aquel usuario (`@trabajo`, en nuestro caso hipotético) en nombre del cual se pidió acceso a la API.

## III. El problema reformulado

El problema consiste entonces en obtener los _tokens_ correspondientes al usuario `@personal`, que no están directamente disponibles (salvo error u omisión por mi parte) en ningún sitio. Pero se pueden conseguir así:

Primero,

{{< highlight python >}}
import tweepy

oauth1_user_handler = tweepy.OAuth1UserHandler(
    "api auth", "api secret",
    callback="oob")

print(oauth1_user_handler.get_authorization_url())
{{< / highlight >}}

El producto del código anterior ---una vez reemplazados `api auth` y `api secret` por los _tokens_ correspondientes--- es una URL. Al abrirla, encontrarás algo así como:

![](/wp-uploads/2023/twitter_api.png#center)

Al aceptar aparece un _pin_ que se copia en

{{< highlight python >}}
access_token, access_token_secret = oauth1_user_handler.get_access_token('pin number')
{{< / highlight >}}

y ya, ya tienes los _tokens_ correspondientes a la otra cuenta para hacer con ella aquello para lo que se les haya concedido permiso.

## IV. Caveats

* No sé si esos _tokens_ de usuario obtenidos de esta manera caducan o no. No estoy seguro. Desde que los informáticos han comenzado a escribir como los abogados, ya nada es fijo ni claro.
* Para poder tuitear en nombre de terceros y que lo que he contado arriba funcione realmente hay que configurar la aplicación que usa la API de una manera particular y no tengo claro cuál es. Conviene, al crearla, dejar que la intuición guíe al ratón al seleccionar las opciones y confiar en ser acompañado de la fuerza.