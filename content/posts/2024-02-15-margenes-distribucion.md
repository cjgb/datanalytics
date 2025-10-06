---
author: Carlos J. Gil Bellosta
categories:
- números
date: 2024-02-15
lastmod: '2025-04-06T19:04:06.222994'
related:
- 2023-11-21-sumas-lognormales.md
- 2021-07-28-apuntes-para-el-estudio-del-impacto-del-cierre-de-la-central-nuclear-de-garona-en-el-precio-de-la-electricidad-en-espana.md
- 2011-05-26-el-problema-de-la-media-el-problema-con-la-media.md
- 2018-09-21-una-anecdota-sobre-el-mercado-electrico-y-sus-mermas.md
- 2015-10-14-del-hombre-medio-a-la-factura-media.md
tags:
- estadística pública
- distribución de electricidad
- mercado eléctrico
- economía
- margen comercial
title: Unos números sobre los márgenes de la distribución
url: /2024/02/15/margenes-distribucion/
---

Estos días han estado tirios y troyanos tirándose los muebles a la cabeza por el asunto de los márgenes comerciales; en particular, los de frutas y verduras en los supermercados. Constantando lo desencaminados que andan muchos, y como sobre el asunto he podido aprender un poco durante mi carrera, oso hoy presentar algunos conceptos y números para centrar el debate. Al final, tal vez me atreva a publicar mi propia opinión sobre el asunto. De hacerlo, advertiré convenientemente a los lectores para que puedan omitirlo felizmente.

### Margen bruto medio y margen neto medio

No sé si se usa la terminología de margen bruto medio y margen neto medio (MBM y MNM en lo que sigue); si no es así, habría que adoptarla para evitar confusiones. Que, haberlas, haylas.

Echemos primero un vistazo a la cuenta de pérdidas y ganancias de 2022 de la cadena de alimentación por antonomasia en estos tiempos y latitudes, Mercadona:

![pérdidas ganancias mercadona 2022](/wp-uploads/2024/pyg_mercadona_2024.png#center)

Mercadona compró mercancías para la venta por valor de 21kM€ y vendió 28kM€. Simplificándolo todo hasta el extremo, es como si hubiese comprado muchas cosas que valían 21€ a sus proveedores y las hubiese vendido a 28€. El MBM es (28 - 21) / 21 = 33%. Si uno entra a Mercadona y ve un producto que cuesta 100€, cabe esperar que Mercadona haya pagado 75€ a su proveedor.

De la misma manera ---y, de nuevo, simplificándolo todo mucho---, es como si Mercadona, cada vez que compra un producto a 100€ y tiene que decidir a cuánto lo vende, coge la calculadora y teclea `1 0 0 x 1 . 3 3 =`. El resultado de esa operación es el que figura en la estantería.

Otra gente piensa ---con razón--- que el coste de un kg de patatas en Mercadona no es únicamente el precio que se pagó al proveedor por él sino que habría que sumarle otros costes igualmente reales que el de las patatas en sí mismas: transporte, manipulación, mermas, etc. En tal caso, el numerador a la hora de calcular este nuevo margen, que es al que llamo MNM, ya no es solo la diferencia entre el precio de venta y el de compra sino tal vez el resultado de explotación, el resultado antes de impuestos o, incluso ---los impuestos no dejan de ser un coste---, el beneficio después de impuestos. De todo se ha visto por Twitter y el tamaño de este MNM es, como cabe esperar, minúsculo, del orden del 3%.

Son cosas distintas que bien merecen nombres distintos para evitar confusiones.

### Más allá de los márgenes medios

Debería ser sabido de todos que las medias en general y los márgenes medios en particular son ficciones aritméticas para satisfacer las no muy sofisticadas necesidades de cierto tipo de gente. Es necesario trascenderlas si a uno le interesan, p.e., los márgenes concretos de frutas y verduras.

Si el MNM de Mercadona es del 3%, cabe esperar que muchos de los productos que venda, de poderse medir e imputar los costes con exactitud, tengan una rentabilidad negativa. Cuando uno va por Castellana a deshora y ve luz en algunos edificios de oficinas, es probable que allí haya unos cuantos consultores _junior_ buscando la mejor manera de asociar gastos generales a referencias (productos) concretos mientras beben cantidades desaconsejadas de Fritz-Kola.

Luego, poner precios de venta a productos es otro arte. Hay muchas maneras más o menos cuestionables y todas son, al final, poco empíricas. No puede ser de otra manera: fuera de las aulas de microeconomía, nadie conoce la forma de las curvas de demanda. Pero por fijar ideas, voy a contar un procedimiento que empleaba una empresa con la que colaboré un tiempo. Esta empresa proporcionaba servicios de consultoría en precios a cadenas regionales de supermercados. El mecanismo que utilizaban ---dejando fuera algunas cuestiones como el redondeo--- era el siguiente:

- Las tiendas de la cadena se segmentaban en tres grupos, $C1$, $C2$ y $C3$ según la competencia del mercado en el que operaban. Por ejemplo, tiendas en pueblos pequeños sin otras de la competencia cerca, estaban en el grupo $C1$; las de las grandes ciudades quedaban en el otro extremo, en el grupo $C3$.
- Los productos se segmentaban en tres grupos, $P1$, $P2$ y $P3$. Aunque no fuese el criterio perfecto, se hacía por facturación: los más vendidos ---cocacola, etc.--- en el primer grupo; los menos vendidos ---papel de lija, topes para las puertas, etc.---, en el último; el resto, en medio.
- Se aplicaba una matriz de márgenes con una lógica más o menos así:

    - Los productos de mucho movimiento en zonas de alta competencia, un margen del 0%.
    - Los productos de mucho movimiento en zonas de competencia media, tal vez un 5%.
    - Etc.
    - Los productos de poco movimiento en zonas de competencia baja, tal vez un 100%.

Efectivamente, es muy probable que en las grandes ciudades, muchos productos se estén vendiendo al coste (¡bruto!). Y eso porque para salvaguardar los intereses de algunos que no son los consumidores ---aunque es fácil identificarlos: son los que lo piden en televisión---, está prohibido vender a pérdida. La lógica ---más o menos cuestionable--- de la cosa es la siguiente:

- La gente recuerda los precios de esos productos y puede compararlos entre las distintas cadenas.
- Además, sirven de gancho para otras compras que sí tienen márgenes positivos y tal vez sustanciales.

¿En qué categoría se clasificarían frutas y verduras? Supongo que depende, pero muchas de ellas, casi seguro, caen en las franjas de márgenes estrechos.

### La "cadena"

Mucha gente ve el principio ---el agricultor al que dizque le pagan el kilo a 18 céntimos--- y el final ---una foto del PVP del mismo producto en el supermercado--- de la _cadena_. Y dado que hay un orden de magnitud entre lo uno y lo otro, colige que en esa _cadena_ ocurren tráficos reprochables. Es cierto que la _cadena_ opera con nocturnidad ---véase, por ejemplo, [este reportaje sobre Mercamadrid](https://www.youtube.com/watch?v=U5bch5IUZo0)--- pero no con alevosía. Si uno busca mayoristas de frutas y verduras, encuentra rápidamente listados como

![mayoristas naranjas](/wp-uploads/2024/mayoristas_naranjas.png#center)

que ponen en cuestión todo tipo de elucubración acerca de cárteles y colusiones.

La _cadena_ es lo más parecido a un mercado competitivo que uno pueda encontrar. Es más parecido a esos que aparecen en los libros de microeconomía que los que uno pueda encontrar en otros sectores que pasan desapercibidos. Es posible que esté operando en un mínimo local ---y no global--- de eficiencia: en los mercados competitivos los márgenes son estrechos y, por lo tanto, poco atractivos para el talento. Pero salvo que aparezca algún agente _disruptor_ ---y sí, las grandes cadenas de distribución ejercen cierta presión en ese sentido---, se puede decir que vivimos en el mejor de los mundos posibles.

### A modo de conclusión

No sé por qué me entretengo en escribir sobre estas cosas. Había hecho propósito de dedicarme a lo mío y no ocuparme de las tonterías que le llegan a uno a pesar de los esfuerzos por aislarse de ellas. Pero me he dejado llevar por la tentación de poner por escrito una serie de ideas que tal vez a alguien le resulten útiles para encuadrar el debate. A los demás solo puedo pedirles perdón por haber malgastado algunos minutos de su tiempo si es que han tenido la gentileza ---y el mal gusto--- de leer hasta este postrero punto.
