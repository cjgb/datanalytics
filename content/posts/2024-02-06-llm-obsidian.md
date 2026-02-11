---
author: Carlos J. Gil Bellosta
categories:
- programación
date: 2024-02-06
lastmod: '2025-04-06T19:04:09.337488'
related:
- 2025-03-25-cortos-llms.md
- 2012-11-07-mapreduce-con-mincedmeat.md
- 2024-05-09-cortos-tecnologia.md
- 2024-07-18-cortos-llms.md
- 2024-04-19-cortos.md
tags:
- llms
- obsidian
- lectura
- pocket
- computación
title: Mi última aplicación de los LLMs en producción
url: /2024/02/06/llms-pocket-obsidian/
---

Esta entrada bien podría llamarse también _Mi primera aplicación de los LLMs en producción_, siendo que ninguna versión falta a la verdad. También es cierto que no es la primera que construyo ---pero sin que haya trascendido---; y que hay que cualificar la expresión _en producción_ siendo que corre en mi servidor doméstico y para mis propios fines personales.

### Contexto

Estoy industrializando mi proceso de lectura. Central en él es [Pocket](https://getpocket.com/home), una herramienta que permite archivar enlaces y acceder a ellos [vía API](https://getpocket.com/developer/).

Los enlaces entran a mi cuenta en Pocket de dos maneras:
- A partir de los RSS de las ~50 páginas que sigo mediante un proceso nocturno (que corre en mi servidor doméstico y que realiza, además, una mínima recategorización).
- Manualmente, cuando encuentro algo interesante que no puedo leer en el momento (gracias a una conveniente extensión del navegador).

Dependiendo de su naturaleza, leo y reclasifico los enlaces. Estos pueden acabar en alguno de los siguientes sitios (de manera no exclusiva):

- La papelera.
- Mi cuenta de Twitter. Esto ocurre si tienen cierto interés general y porque al entrar en el proceso de republicación en Twitter, me autoobligo a una segunda lectura o repaso días más tarde, cosa que, cuentan, es conveniente para fijar más eficazmente contenidos en la memoria (de uno). El proceso de republicación tiene su interés particular (los enlaces pasan por una base de datos de [Notion](https://www.notion.so/product/ai) y varias APIs en un proceso automático también orquestado por mi servidor doméstico), pero no como para ser discutido en estas páginas.
- Fichas de [Obsidian](https://obsidian.md/), la herramienta que uso como _base de datos de conocimiento_, cuando la importancia del enlace lo amerita. Estas fichas tienen su resumen, sus notas, sus etiquetas, etc.
- Memo, una herramienta que he creado enlazando Notion y Telegram, que me envía aleatoriamente fichas al móvil con las que castigar a esas malas neuronas mías empeñadas en olvidar información que estimo fundamental.

Todo esto (y varias cosas más) está orquestado por [n8n](https://n8n.io/) y usa algunas llamadas a una API local en Flask/Python. Corre todo eso y más en mi pequeño servidor doméstico, un Fujitsu Esprimo Q920 que compré reacondicionado por poco precio en esa época en la que tanto las Raspberries como sus clones chinos estaban carísimos.

El servidor doméstico gestiona también mis copias de seguridad (vía [Syncthing](https://syncthing.net/)). Un día contaré cómo utiliza discos duros de 1-2 euros para sincronizar varios (¡no sé cuántos ya!) dispositivos.

### Problema

El problema que resuelven los LLMs en todo el tinglado anterior es el de preparar una ficha de Obsidian a partir de un enlace (una url) dado. La ficha ha de contener el título, el autor, el enlace, un breve resumen y una serie de etiquetas, todas en correcto formato _markdown_. De hecho, la plantilla que uso (vía [Jinja](https://palletsprojects.com/p/jinja/)), es

{{< highlight python >}}
markdown_template = """
- Autor: [[{{ author }}]]
- [URL]({{ url }})

## Resumen

{{ summary }}

## Relacionado con
  {% for kw in keywords %} - [[{{ kw }}]]
  {% endfor %}
"""
{{< / highlight >}}

Lo que hace mi LLM es:

- tomar el texto completo del artículo y
- completar un fichero con formato _json_ cuya especificación viene dada por

{{< highlight python >}}
class PageSummary(BaseModel):
    """Summarizes a webpage extracting the key information"""

    author: str       = Field(description="Author of the text, if known.")
    title:  str       = Field(description="Title of the text, if known.")
    tags:   list[str] = Field(description="Keywords to categorize the text.")
    summary: str       = Field(description="Summary of the text in 1-2 paragraphs.")
    technical_terms: list[str] = Field(description="List of the most obscure jargon terms in the text, along with a short explanation of them.")

"""
{{< / highlight >}}

(Es largo de contar, pero es cómodo usar [pydantic](https://docs.pydantic.dev/latest/) para crear un fichero _json_ que reproduzca la estructura de la clase anterior, con instrucciones y todo.)

El proceso llama a

{{< highlight python >}}
chat_completion = client.chat.completions.create(
    model="mistralai/Mixtral-8x7B-Instruct-v0.1",
    response_format={
        "type": "json_object",
        "schema": PageSummary.model_json_schema()
    },
    messages=[
        {"role": "system", "content": "You are a helpful assistant designed to output JSON."},
        {"role": "user", "content": user_content}
    ],
    temperature=0.1
)
{{< / highlight >}}

con el `user_content` definido mediante

{{< highlight python >}}
user_content = f"""
    Analyze the following text according to the instructions
    provided in the output template:
    ---
    {out['text']}
    ---
"""
{{< / highlight >}}

La salida, en _json_, se transforma luego ---si todo va bien--- en el fichero _markdown_ deseado.

El proceso lo tengo automatizado para que genere una ficha de Obsidian al día. Obviamente, uno está aún obligado a releer la entrada (¡pero el resumen previo es muy útil!), a añadir notas, etc., pero el trabajo más tedioso está ya hecho.

Además, esta es la versión 0.1 del proceso. Con el tiempo, espero poder añadirle _utilidades_ adicionales.


### Más sobre el LLM

Como se ha visto más arriba, uso `Mixtral-8x7B-Instruct` y no alguno de OpenAI, que parece hoy en día la opción por defecto de los diletantes. Principalmente, por precio. Es más fácil y está mejor documentado en todas partes cómo usar las APIs de OpenAI, pero es más caro. Ademas, Mixtral es francés (si eso vale para algo).

Existen pocos modelos capaces de lo que se ha venido llamando _function calling_, i.e., que pueden generar respuestas en _json_ que va a misa. Mixtral es uno de ellos. Además, el único, que yo sepa, que es _libre_. Siendo libre, está disponible en varias plataformas que a [precios antieconómicos](https://www.semianalysis.com/p/inference-race-to-the-bottom-make) (para los proveedores). Uso Anyscale, que no es la plataforma más barata de todas las que menciona el artículo enlazado, pero sí la única que pude hacer funcionar según recorría la lista por orden inverso de precio. ¿Qué otra cosa se puede esperar de un tipo que hace sus copias de seguridad en discos duros de a un euro?

Otra excentricidad de mi proceso es que no usa [`langchain`](https://www.langchain.com/) a pesar de que ese era el plan original. El problema es que la combinación específica de _langchain_, Mixtral y Anyscale resultó difícil de hacer andar, mientras que otras vías alternativas me regalaron la solución exacta que necesitaba para encajar las piezas fundamentales.


### Comentarios finales

Que prácticamente es solo uno. Este proceso que describo para industrializar el proceso de lectura cuesta dinero ---muy, hay que reconocerlo---. Y su autor ---yo--- está dispuesto a pagarlo no para acceder a más y mejor contenido ---no hay apenas _paywalls_ para quien conozca un par de trucos--- sino, precisamente, para leer menos. Hoy en día es más valiosa ---al menos, para este humilde opinador--- una herramienta que seleccione, descarte, resuma y achique que otra que proporcione acceso a contenido presuntamente de calidad. ¡Cosas del siglo que corre!