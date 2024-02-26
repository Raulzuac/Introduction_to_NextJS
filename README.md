# Iniciacion con Next.JS

Este repositorio esta creado con la finalidad de enseñar las convenciones de archivos que utiliza [Next.js](https://nextjs.org/).

### Pero antes de empezar ¿Que es Next.js?

Next.js es un framework de React para el desarrollo de aplicaciones web. Fue creado por Vercel y se ha vuelto muy popular en los últimos años. Next.js ofrece varias ventajas y beneficios para los desarrolladores, lo que lo convierte en una herramienta popular para construir aplicaciones web modernas y escalables.

- Renderizado del lado del servidor (SSR): Next.js permite renderizar las páginas en el servidor, lo que mejora el rendimiento y la indexabilidad de las aplicaciones web.
- Generación de sitios estáticos: Next.js permite generar sitios estáticos pre-renderizados, lo que mejora aún más la velocidad de carga y la eficiencia de la aplicación.
- Fácil configuración y enrutamiento automático: Next.js asume ciertas convenciones y proporciona una configuración mínima, lo que facilita el desarrollo y el enrutamiento de la aplicación.
- Amplia adopción y comunidad activa: Next.js es ampliamente utilizado por grandes empresas y cuenta con una comunidad activa que proporciona soporte y recursos adicionales.

## Overview

- Optimización: Como optimizar imágenes.
- Enrutado: Como crear rutas nesteadas y pàginas usando el file-system routoing.
- Fech de Datos: Como configurar una base de datos en Vercel.
- Busqueda y paginación: Como implementar busqueda y paginación utlizando URL Search Params.
- Manejo de Errores: Como manejar errores generales y 404 not found.
 
## Prerequisitos

Conocimientos básicos de Recat y JavaScript y tener instalado Node 18.17 o superior.

Es recomendable utilizar [Node Version Manager (NVM)](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

Además necesitaras una cuenta de GitHub y Vercel.

## Como crear un proyecto de Next.js?
`npx create-next-app@latest`
(npx viene con node 5.2 y superiores)

La CLI de Next nos hará unas preguntas sobre la configuración del proyecto 
para poder seguir mejor el tayer vamos a configurar todos los proyectos de la misma forma.

| Config | Option |
|--------|----------|
| Name | my_next_app | 
| TypeScript | Yes | 
| ESLint | Yes | 
| Tailwind CSS | Yes |
| `\src` directory | No |
| App Router | Yes |
| import alias | Yes \ default (@/*) |

y esperar...

## Como levantar mi proyecto de Next.js?

```
cd my_next_app
npm run dev
```

y accedemos al enlace de la terminal [http://localhost:3000]( http://localhost:3000)

Ahora que sabes crear un proyecto, haz un fork de este repositorio y clonalo para seguir.

### Explorando el proyecto

cd get_started

- Estructura de archivos

/app: Contiene todas las rutas componentes y lógica para tu aplicación equi es donde más trabajarás.

/app/lib: Contiene funciones usadas en tu aplicación, como funciones de utilidad reusables o fetch de datos.

/app/ui: Contiene los elementos de la interfaz Como tarjetas, o barras de navegacion para tu aplicación.

/public: Contiene los assets estáticos para tu aplicación, como Imágenes. 

/scripts: Contiene un script para crear la seed de tu base de datos  

Archivos de Configuración: la mayoria de ellos son creados y pre-configurados cuando creas un nuevo proyecto no tendrás que tocarlos en este tutorial.

### Placeholder Data

Cuando construyes interfaces, ayuda tener datos de prueba, si la base de datos no esta disponible aún.

Para este proyecto, te proporciono algunos datos de prueba en app/lib/placeholde_data.js.

Mas adelante te serviran para crear tu base de datos.

## Optimización 

### ¿Porque optimizas las Imagenes?

Next puede usar assets estáticos, como imagenes, en la carpeta /public.

con HTML agregariamos una images así:
```
<img
  src="/pokedex.png"
  alt="Imagen de una pokedex"
/>
```

Sin embargo esto significa que tienes que manualamnete:
 - Asegurarte de que es responsive en diferentes tamaños de pantalla.
 - Especificar tamaños de imagen en difrentes dispositivos.
 - Evilar el layout shift mientras carga la imagen.
 - Lazy load de Imágenes que están fuera de la vista del usuario 

La optimización de imágenes es un gran tema en el desarrollo web que podría considerarse una especialización en sí misma. En lugar de implementar manualmente estas optimizaciones, puede utilizar el componente next/image para optimizar automáticamente sus imágenes....

### El componente \<Image>

El Componente <Image> es una extensión de la etiqueta HTML <img>, y viene con optimización automática de imágenes, tales como:

- Evitar el cambio de diseño automáticamente cuando las imágenes se están cargando.

- Redimensionamiento de imágenes para evitar el envío de imágenes grandes a dispositivos con una ventana gráfica más pequeña.

- Carga perezosa de imágenes por defecto (las imágenes se cargan a medida que entran en la ventana gráfica).

- Servir imágenes en formatos modernos, como WebP y AVIF, cuando el navegador lo admite.

### Añadir imagen de Pokedex

Vamós a usar el componente \<Image>, Si miras en dentro de la carpeta /public verá dos imágenes pokedex.jpeg y smPokedex.jpg, estás dos imágenes son completamente diferentes, y se veran dependiendo del dispositivo del usuario.

En /app/page.tsx importa next/image y añadeño debajo del comentario 

Seteando el ancho y el alto ayuda e evitar el desplazamiento de la interfaz (layout shifting), debe de ser un ratio de aspecto igial al de la imagen.

Utiliza las clases de tailwind para mostrar las imágenes dependiendo del tamaño de la pantalla. 

```
 <Image
    alt="Landing page pokedex image"
    className="object-cover min-h-auto min-w-screen rounded-lg aspect-square block md:hidden"
    height={545}
    width={365}
    src="/smPokedex.jpg"
  />
  <Image
    alt="Landing page pokedex image"
    className="object-cover min-h-full min-w-full rounded-lg aspect-video hidden md:block"
    height={1080}
    width={1920}
    src="/pokedex.jpeg"
  />  
  {/* <div className=" flex items-center justify-center absolute inset-0">
    <Suspense fallback={<PokemonCarouselSqueleton />}>
      <PokemonCarousel />
    </Suspense>
  </div> */}
```

## Crear páginas y layouts

La aplicacion solo tiene landing page por ahora. En esta sección aprenderás a crear rutas anidadas.

### Nested routing

Next.js utiliza un enrutamiento de sistema de archivos en el que se utilizan carpetas para crear rutas anidadas. Cada carpeta representa un segmento de ruta que se asigna a un segmento de URL.

Puedes crear UIs separadas para cada ruta usando los archivos layout.tsx y page.tsx.

page.tsx es un archivo Next.js especial que exporta un componente React, y es necesario para que la ruta sea accesible. En tu aplicación, ya tienes un archivo page: /app/page.tsx - esta es la página de inicio asociada a la ruta /.

Para crear una ruta anidada, puedes anidar carpetas una dentro de otra y añadir archivos page.tsx dentro de ellas. 

Por ejemplo: 
/app/pokedex/kanto/page.tsx será la ruta /pokedex/kanto

### Crear ruta Pokedex (estática)

Para crear la ruta pokedex, creamos una carpeta llamada "pokedex dentro de "/app" y creamos el archivo page.tsx con el siguiente contenido

```
export default function Page() {
  return <p>Pokedex Page</p>
}
```

Ahora asegurate de que el servidor de desarrollo esta levantado y y podras ver la "Pokedex page" en la ruta /pokedex

Así es como puedes crear diferentes páginas en Next.js: crea un nuevo segmento de ruta utilizando una carpeta, y añade un archivo de página dentro de ella.

Al tener un nombre especial para los archivos de página, Next.js te permite colocar componentes de interfaz de usuario, archivos de prueba y otro código relacionado con tus rutas. Sólo el contenido dentro del archivo page.tsx será accesible al público. Por ejemplo, las carpetas /ui y /lib se colocan dentro de la carpeta /app junto con tus rutas pero no disponen de archivo page.tsx.

### Crear la ruta Pokedex/[pokedex_number] (dinámica)

Ya has aprendido a crear una ruta estática pero para ver en detalle cada uno de los pokemon vamos a crear una ruta dinámica que usara dinamicamente los route params (pokedex_number) para fechear el pokemon que queremos.

Creamos una carpeta llamada "[pokedex_number]" dentro de /app/pokedex y añadimos el archivo page.tsx con el siguiente contenido:

```
type PokemonPageProps = {
  params: { pokedex_number: number }
}

export default async function Page({ params }: PokemonPageProps) {
    return <p>{params.pokedex_number}</p>
}
```

Te habras percatado de que en esta ruta estamos utilizando corchetes para envolver el nombre de la ruta esto nos permite definir el nombre de la ruta como parámetro para esa ruta concreta, es decir ahora en page.tsx dentro de [pokedex_number] podemos acceder mediante el prop params a pokedex_number.

### Crear layout para nuestras páginas

Las webs suelen tener elementos que se comparten entre varias páginas. En Next.js, puedes utilizar un archivo layout.tsx especial para crear una interfaz de usuario compartida entre varias páginas. Vamos a crear un layout para las páginas de la pokedex.

Dentro de /app/pokedex crea el archivo layout.tsx y pega el siguiente código

```
import SideNav from "../ui/SideNav"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-40">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto">{children}</div>
    </div>
  )
}
```

Los archivos layout reciben un prop children que suelen ser los archivos page.tsx que cuelgan de la ruta donde esta layout.tsx además cualquier compoenente que importemos en layout.tsx sera parte del layout como \<SideNav>.

## Navegar entre páginas

En el capítulo anterior agregaste algunas páginas, ahora vamos a proporcionarle al usuario algunos links para que pueda navegar entre páginas 

### ¿Porque optimizar la navegación?

Para navegar entre páginas, tradicionalmente se usa la etiqueta \<a> de HTML, actualmente el SideNav esta utilizando etiquetas \<a> para navegar pero esto hace que se refresque la pantalla completa en cada navegación.

### El componente \<Link>

En Next.js, puedes usar el Componente \<Link /> para enlazar páginas de tu aplicación. \<Link> le permite hacer la navegación del lado del cliente con JavaScript.

para usar el componente Link situate en "app/ui/NavLinks.tsx" e importalo de "next/link", después sustituye \<Link> por \<a>

### División automática del código y precarga

Para mejorar la experiencia de navegación, Next.js divide automáticamente el código de tu aplicación por segmentos de ruta. Esto es diferente de un React SPA tradicional, donde el navegador carga todo el código de tu aplicación en la carga inicial.

Dividir el código por rutas significa que las páginas quedan aisladas. Si una determinada página lanza un error, el resto de la aplicación seguirá funcionando.

Además, en producción, cada vez que aparecen componentes <Link> en la ventana del navegador, Next.js precarga automáticamente el código de la ruta enlazada en segundo plano. En el momento en que el usuario hace clic en el enlace, el código de la página de destino ya se habrá cargado en segundo plano, y esto es lo que hace que la transición de página sea casi instantánea.

### Añadir active links

Utilizando el hook usePatname() de "next/navigation" podemos ver que ruta es la que tenemos activa actualmente, como ahora estamos usando un hook en el componente SideNav significa que no se va  poder renderizar en el servidor porque necesitamos que cargue ese js en el cliente asi que pondremos la directiva "use client" en este componente.


```
import { usePathname } from 'next/navigation'

const pathname = usePathname()

${pathname === link.href ? "bg-sky-100 text-black" : "bg-gray-800 text-white"}
```

## Configurar tu base de datos

### Crear un repositorio en GitHub

Para empezar, vamos a subir tu repositorio a Github si aún no lo has hecho. Esto facilitará la configuración de la base de datos y el despliegue.

### Crear una cuenta de Vercel 

Visita [vercel.com/signup](https://vercel.com/signup) para crear una cuenta. Elige el plan gratuito "hobby". Selecciona Continuar con GitHub para conectar tus cuentas de GitHub y Vercel.

### Conectar y desplegar tu proyecto

Importa un proyecto de tu github, elige un nombre para tu proyecto y listo ya tienes tu proyecto de Next.js desplegado en vercel

Al conectar tu repositorio de GitHub, cada vez que introduzcas cambios en tu rama principal, Vercel volverá a desplegar automáticamente tu aplicación sin necesidad de configuración. Al abrir pull requests, también dispondrás de vistas previas instantáneas que te permitirán detectar errores de despliegue con antelación y compartir una vista previa de tu proyecto con los miembros del equipo para que te den su opinión.

### Crear una base de datos Postgres

A continuación, para configurar una base de datos, haga clic en Continuar con el panel de control y seleccione la pestaña Almacenamiento del panel de control del proyecto.

Connect Store → Create New → Postgres → Continue.

Elige un nombre para tu base de datos y selecciona el servidor mas cercano a tu ubicación para evitar latencia

Una vez creada, tendremos que conectarla con nuestro proyecto. selecciona la base de datos y pulsa en .env.local, "Show Secret" y "Copy Snippet".

Asegurate de revelar los secretos antes de copiarlos, En la raiz de tu proyecto crea un archivo .env si aun no lo teienes creado y pega el secreto en el.

Asegurate de que el archivo .env esta en el .gitignore para prevenir que los secretos de tu base de datos estén expuestos.

para terminar usa ```npm i @vercel/postgres``` para instalar la la SDK de Vervcel Postgres

### Seed de la base de datos

Ahora que su base de datos ha sido creada, vamos a inicializarla con algunos datos iniciales. Esto te permitirá tener algunos datos con los que trabajar mientras construyes la pokedex.

En la carpeta /scripts de tu proyecto, hay un archivo llamado seed.js. Este script contiene las instrucciones para crear y inicializar la tabla de pokemon.

No te preocupes si no entiendes todo lo que el código está haciendo, pero para darte una visión general, el script utiliza SQL para crear las tablas, y los datos del archivo placeholder-data.js para rellenarlas después de haber sido creadas.

A continuación, en tu archivo package.json, añade la siguiente línea a tus scripts:

```
"scripts": {
  "seed": "node -r dotenv/config ./scripts/seed.js"
},
```

Este es el comando que ejecutará seed.js.

Ahora, ejecuta ```npm run seed```. Deberías ver algunos mensajes console.log en tu terminal para saber que el script se está ejecutando.

### Explorando tu base de datos

Veamos qué aspecto tiene tu base de datos. Vuelve a Vercel y haz clic en Data en el menú lateral.

En esta sección, encontrará la tabla nueva: pokemon

### Ejecutando queries

Puedes pasar a la pestaña "query" para interactuar con tu base de datos. Esta sección admite comandos SQL estándar. Por ejemplo, si introduces ```DELETE FROM  pokemon```, se eliminarán los datos de le tabla pokemon, ¡así que no te olvides de poner el where en el delete from!

Vamos a ejecutar tu primera consulta a la base de datos. Pega y ejecuta el siguiente código SQL en la interfaz de Vercel:

``` 
SELECT * FROM pokemon where type_1 ILIKE '%ego%'
```

## Fetch de datos

Cuando estés creando una aplicación fullstack, también necesitarás escribir lógica para interactuar con tu base de datos. Para bases de datos relacionales como Postgres, puedes hacer esto con SQL.

Hay algunos casos en los que tienes que escribir consultas a la base de datos:

- Al crear los endpoints de una API, necesitas escribir lógica para interactuar con tu base de datos.
- Si estás usando Componentes de Servidor React (obteniendo datos en el servidor), puedes saltarte la capa API, y consultar tu base de datos directamente sin arriesgarte a exponer los secretos de tu base de datos al cliente.

### Usando server components para fech de datos

Por defecto, las aplicaciones Next.js utilizan React Server Components. La obtención de datos con Server Components es un enfoque relativamente nuevo y su uso tiene algunas ventajas:

- Los Server Components soportan promesas, proporcionando una solución más simple para tareas asíncronas como la obtención de datos. Puedes usar la sintaxis async/await sin tener que recurrir a las librerías useEffect, useState o data fetching.
- Los Server Components se ejecutan en el servidor, por lo que puedes mantener la lógica y la obtención de datos en el servidor y sólo enviar el resultado al cliente.
- Como se mencionó anteriormente, ya que los componentes de servidor se ejecutan en el servidor, puede consultar la base de datos directamente sin una capa adicional de API.

### Usando SQL 

Para la aplicación de la pokedex, escribirás consultas a la base de datos utilizando el SDK Postgres de Vercel y SQL. Hay algunas razones por las que usaremos SQL:

- SQL es el estándar de la industria para consultar bases de datos relacionales .
- Tener unos conocimientos básicos de SQL puede ayudarte a comprender los fundamentos de las bases de datos relacionales, lo que te permitirá aplicar tus conocimientos a otras herramientas.
- SQL es versátil y permite obtener y manipular datos específicos.
- El SDK Postgres de Vercel proporciona protección contra inyecciones SQL.

Ve a /app/lib/querys.ts, aquí verás que estamos importando la función sql de @vercel/postgres. Esta función te permite consultar tu base de datos.

### Fetch de los pokemon

Para hacer fech de los datos de los pokemon importa 'fetchAllPokemon' de 'app/lib/querys' y utiliza la funcion en tu componente 

```
import { fetchAllPokemon } from '@/app/lib/querys'
import { Metadata } from 'next'
import PokemonCard from '../ui/PokemonCard'

export const metadata: Metadata = {
  title: 'Nextdex',
}

export default async function Page() {
  const pokemons = await fetchAllPokemon()

  return (
    <div className='flex flex-row flex-wrap gap-4'>
      {pokemons.map(poke =>
        <PokemonCard pokemon={poke} key={poke.pokedex_number} />
      )}
    </div>
  )
}
```

- Page es un componente asíncrono. Esto le permite utilizar await para obtener datos.
- También hay un componente que recibe datos para mostrarlos: <PokemonCard>


### Fetch de un pokemon concreto

Para hacer fech de los datos de un pokemon concreto utilizaremos el route param como argumento para la query, importa 'fetchPokemonByPokedexNumber
' de 'app/lib/querys' y utiliza la funcion en tu componente

Te dejo el codigo para avanzar más rápido el jsx es una simple tarjeta para mostrar los datos del pokemon

```
import { fetchPokemonByPokedexNumber } from "@/app/lib/querys"
import TypeTag from "@/app/ui/TypeTag"
import Image from "next/image"
import Link from "next/link"
// import { notFound } from 'next/navigation'

type PokemonPageProps = {
  params: { pokedex_number: number }
}

export default async function Page({ params }: PokemonPageProps) {

  const { pokedex_number } = params

  const pokemon = await fetchPokemonByPokedexNumber(pokedex_number)

  // if (!pokemon) notFound()

  const {
    name,
    description,
    image_url,
    type_1,
    type_2,
    ps,
    attack,
    defense,
    special_attack,
    special_defense,
    speed,
    evolution,
    pre_evolution
  } = pokemon

  const formatPokedexNumber = (n: number) => {
    const nLength = n.toString().length
    return (nLength == 1 ? "00" : nLength == 2 ? "0" : "") + n
  }

  return (
    <section className="w-full max-w-lg mx-auto">
      <div className="p-6 bg-gray-500 rounded-lg">
        <div className="flex items-center gap-4">
          <div className="text-3xl font-semibold">#{formatPokedexNumber(pokedex_number)}</div>
          <div className="text-3xl font-semibold">{name}</div>
        </div>
        <div className="flex flex-col justify-center w-full items-start gap-4 my-4">
          <Image
            alt={image_url}
            src={image_url}
            width="200"
            height="200"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
          />
          <div className="grid gap-1">
            <p className="font-semibold">Descripción</p>
            <p>{description}</p>
          </div>
        </div>
        <div className="grid gap-4 border-y py-4">
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="font-semibold">Type</div>
            <div className="grid grid-cols-2 items-center gap-2">
              <TypeTag type={type_1} />
              {!!type_2 && <TypeTag type={type_2} />}
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="font-semibold">PS</div>
            <div>{ps}</div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="font-semibold">Ataque</div>
            <div>{attack}</div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="font-semibold">Defensa</div>
            <div>{defense}</div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="font-semibold">Ataque especial</div>
            <div>{special_attack}</div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="font-semibold">Defensa especial</div>
            <div>{special_defense}</div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="font-semibold">Velocidad</div>
            <div>{speed}</div>
          </div>
          <div className="flex flex-row justify-around items-center gap-4">
            {!!pre_evolution &&
              <Link href={`/pokedex/${pre_evolution}`}>
                <div className="font-semibold">Pre-evolución</div>
              </Link>
            }
            {!!evolution &&
              <Link href={`/pokedex/${evolution}`}>
                <div className="font-semibold">Evolución</div>
              </Link>
            }
          </div>
        </div>
      </div>
    </section>
  )
} 
```

### Haciendo la pokedex dinámica

Por defecto, @vercel/postgres no establece su propia semántica de caché. Esto permite al framework establecer su propio comportamiento estático y dinámico.

Puedes usar una API de Next.js llamada unstable_noStore dentro de tus componentes de servidor o funciones de obtención de datos para optar por no renderizar estáticamente. Vamos a añadir esto.

En tu querys.ts, importa unstable_noStore de next/cache, y llámalo al principio de tus funciones de obtención de datos:

```import { unstable_noStore as noCache } from 'next/cache'```

### Simulando slow data fetch

Si os fijais en el archivo '/app/lib/querys.tsx' vereis que en la funcncion fetchAllPokemon() hay una linea comentada, descomentala y para emular que el servidor tarda en servir los datos y recarga la página.

Aquí, has añadido un retraso artificial de 3 segundos para simular una obtención lenta de datos. El resultado es que ahora toda la página está bloqueada mientras se obtienen los datos.

Lo que nos lleva a un reto común que los desarrolladores tienen que resolver:

Con el renderizado dinámico, tu aplicación es tan rápida como la obtención de datos más lenta.

Vamos a aprender a manejar estados de carga creando un archivo loading.tsx en el directorio '/app/pokedex'

```
import { PokemonTableSqueleton } from "@/app/ui/Squeletons"

export default function Loading() {
    return <PokemonTableSqueleton/>
}
```

Con esto el usuario podra seguir interactuando con la aplicacion y solo los componentes más lentos en cargar seran los ultimos en rederizarse  (las ratas anidadas tambien heredan la pantalla de carga si no se define en una ruta más proxima dentro del directorio)

Vamos a hacer lo mismo en /pokedex/[pokedex_number]

```
import { PokemonScreenSqueleton } from "@/app/ui/Squeletons"


export default function Loading() {
    return <PokemonScreenSqueleton/>
}
```

## Añadir búsqueda y paginación

En el capítulo anterior, mejoraste el rendimiento de carga inicial de tu pokedex con streaming. ¡Ahora vamos a aprender cómo agregar la búsqueda y paginación!

importa SearchInput en 'app/pokedex/page.tsx' se 'app/ui/SearchInput.tsx'

```
import SearchInput from '@/app/ui/SearchInput'
```

### Porque usar URL search params

Utilizaremos parámetros de búsqueda de URL para gestionar el estado de búsqueda. Este patrón puede ser nuevo si estás acostumbrado a hacerlo con el estado del lado del cliente.

Hay un par de beneficios de implementar la búsqueda con URL params:

- URLs marcables y compartibles: Dado que los parámetros de búsqueda se encuentran en la URL, los usuarios pueden marcar el estado actual de la aplicación, incluidas sus consultas de búsqueda y filtros, para consultarlo o compartirlo en el futuro.
- Procesamiento y carga inicial en el servidor: Los parámetros de la URL se pueden consumir directamente en el servidor para renderizar el estado inicial, lo que facilita la gestión de la renderización del servidor.
- Análisis y seguimiento: al tener las consultas de búsqueda y los filtros directamente en la URL, es más fácil realizar un seguimiento del comportamiento del usuario sin necesidad de lógica adicional en el lado del cliente.

### Añadiendo la funcionalidad de busqueda

 - Capturando el input del usuario 
  ```
    function handleSearch(term: string) {
      console.log(term)
    }
  
    <input
        ...
      onChange={(e) => {
        handleSearch(e.target.value)
      }}
    />
  ```

  - Actualizando la url con los search params 
  
  Importa 'useSearchParams' de 'next/navigation' y dentro del Handle search crea una instancia de URLSearchParam usando la variable searchParams 
  ```
    import { useSearchParams } from 'next/navigation'

    const searchParams = useSearchParams()

    function handleSearch(term: string) {
      const params = new URLSearchParams(searchParams)
    }

  ```

  URLSearchParams es una API Web que proporciona métodos de utilidad para manipular los parámetros de consulta de la URL. En lugar de crear una cadena literal compleja, puede utilizarla para obtener la cadena params como ?page=1&query=a.

  A continuación, establezca la cadena params basándose en la entrada del usuario. Si la entrada está vacía, quieres borrarla:

  ```
  if (term) {
    params.set('query', term)
  } else {
    params.delete('query')
  }
  ```

  Ahora que tienes la cadena de consulta. Puedes usar los hooks useRouter y usePathname de Next.js para actualizar la URL.

  Importa useRouter y usePathname de 'next/navigation', y usa el método replace de useRouter() dentro de handleSearch:

  ```
  const { replace } = useRouter()
  const pathname = usePathname()

  replace(`${pathname}?${params.toString()}`)
  ```

  Tambien añadiremos la paginacion nos sera util más adelante 

  ```params.set('page', '1')```

  - Mantener la URL sincronizada

  Para asegurarse de que el campo de entrada está sincronizado con la URL y se rellenará al compartir, puede pasar un defaultValue a input leyendo de searchParams

  ```
    defaultValue={searchParams.get('query')?.toString()}
  ```

  Al final el componente quedara algo así

  ```
  'use client'

  import { usePathname, useRouter, useSearchParams } from 'next/navigation'
  import { Search } from 'lucide-react'

  export default function SearchInput({ placeholder }: { placeholder?: string }) {
    const searchParams = useSearchParams()
    const { replace } = useRouter()
    const pathname = usePathname()

    const handleSearch = (term: string) => {
      console.log(`Searching... ${term}`)

      const params = new URLSearchParams(searchParams)

      params.set('page', '1')

      if (term) {
        params.set('query', term)
      } else {
        params.delete('query')
      }
      replace(`${pathname}?${params.toString()}`)

    return (
    ...
        <input
          className="peer block w-full rounded-md border font-medium border-gray-200 py-[9px] pl-10 text-md outline-2 placeholder:text-gray-500"
          placeholder={placeholder || 'Buscar'}
          onChange={(e) => {
            handleSearch(e.target.value)
          }}
          defaultValue={searchParams.get('query')?.toString()}
        />
      ...
    )
  }
  ```

  - Para terminar nos quedaria sincronizar los datos de la pantalla con los filtros de busqueda

  Los componentes de Page aceptan una prop llamada searchParams, por lo que puede pasar los parámetros de la URL actual al componente \<PokemonPage/>.

  ```
  import { Metadata } from 'next'
  import PokemonPage from '../ui/PokemonPage'
  import SearchInput from '@/app/ui/SearchInput'
  import { Suspense } from 'react'
  import { PokemonTableSqueleton } from '../ui/Squeletons'

  export const metadata: Metadata = {
    title: 'Nextdex',
  }

  type PokedexPageProps = {
    searchParams?: {
      query?: string
      page?: string
    }
  }

  export default async function Page({ searchParams }: PokedexPageProps) {

    const query = searchParams?.query || ''
    const currentPage = Number(searchParams?.page) || 1

    return (
      <div className='flex flex-row flex-wrap gap-4'>
        <SearchInput/>
        <Suspense key={query + currentPage} fallback={<PokemonTableSqueleton />}>
          <PokemonPage query={query} currentPage={currentPage} />
        </Suspense>
      </div>
    )
  }
  ```

  Si miras el componente \<PokemonPage> veras dos props que se les pasa a la función fetchFilteredPokemons y devuelve los resultados de la query

  Con estos cambios en su lugar, sigue adelante y prueba. Si busca un término, actualizará la URL, que enviará una nueva solicitud al servidor, se obtendrán los datos en el servidor y sólo se devolverán los pokemon que coincidan con su consulta.

  - Mejores prácticas: Debounce

  Estás actualizando la URL cada vez que pulsas una tecla y, por lo tanto, ¡consultando tu base de datos cada vez que pulsas una tecla! Esto no es un problema ya que nuestra aplicación es pequeña, pero imagina si tu aplicación tuviera miles de usuarios, cada uno enviando una nueva petición a tu base de datos en cada pulsación de tecla.

  Debouncing es una práctica de programación que limita la velocidad a la que una función puede dispararse. En nuestro caso, sólo quieres consultar la base de datos cuando el usuario ha dejado de teclear.

  Estado final de 'app/ui/SearchInput.tsx
  ```
  'use client'

  import { usePathname, useRouter, useSearchParams } from 'next/navigation'
  import { useDebouncedCallback } from 'use-debounce'
  import { Search } from 'lucide-react'

  export default function SearchInput({ placeholder }: { placeholder?: string }) {
    const searchParams = useSearchParams()
    const { replace } = useRouter()
    const pathname = usePathname()

    const handleSearch = useDebouncedCallback((term) => {
      console.log(`Searching... ${term}`)

      const params = new URLSearchParams(searchParams)

      params.set('page', '1')

      if (term) {
        params.set('query', term)
      } else {
        params.delete('query')
      }
      replace(`${pathname}?${params.toString()}`)
    }, 300)

    return (
      <div className="relative flex flex-1 flex-shrink-0 text-black">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          className="peer block w-full rounded-md border font-medium border-gray-200 py-[9px] pl-10 text-md outline-2 placeholder:text-gray-500"
          placeholder={placeholder || 'Buscar'}
          onChange={(e) => {
            console.log(e.target.value)
            handleSearch(e.target.value)
          }}
          defaultValue={searchParams.get('query')?.toString()}
        />
        <Search color={"black"} size={24} className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </div>
    )
  }
  ```

  Así consigues reducir el número de peticiones enviadas a su base de datos, con el consiguiente ahorro de recursos.

### Añadiendo paginación

Después de introducir la función de búsqueda, observará que solo se muestran 6 pokemon a la vez. Esto se debe a que la función fetchFilteredPokemon() en querys.ts devuelve un máximo de 6 pokemon por página.

Añadir paginación permite a los usuarios navegar por las diferentes páginas para ver todas los pokemon. Veamos cómo se puede implementar la paginación utilizando parámetros de URL, al igual que se hizo con la búsqueda.

Vaya al componente <Pagination/> y verá que es un componente cliente. Usted no desea obtener datos en el cliente, ya que esto expondría sus secretos de base de datos (recuerde, usted no está usando una capa de API). En su lugar, puede obtener los datos en el servidor, y pasarlos al componente como un prop.

En /pokedex/page.tsx, importa una nueva función llamada fetchPokemonPages y pasa la consulta de searchParams como argumento:

``` 
import { fetchPokemonPages } from '@/app/lib/querys'

const query = searchParams?.query || ''
const currentPage = Number(searchParams?.page) || 1
const totalPages = await fetchPokemonPages(query)
```

fetchPokemonPages devuelve el número total de páginas basadas en la consulta de búsqueda. Por ejemplo, si hay 12 pokemon que coinciden con la consulta de búsqueda, y cada página muestra 6 facturas, entonces el número total de páginas sería 2.

A continuación, pase la propiedad totalPages al componente \<Pagination/>:

```
  <Pagination totalPages={totalPages} />
```

Navega hasta el componente \<Pagination/> e importa los hooks usePathname y useSearchParams. Usaremos esto para obtener la página actual y establecer la nueva página. Asegúrese también de descomentar el código en este componente. Tu aplicación se romperá temporalmente ya que aún no has implementado la lógica \<Pagination/>. Hagámoslo ahora.

```
'use client'

import { StepBackIcon, StepForwardIcon } from 'lucide-react'

import Link from 'next/link'
import { generatePagination } from '@/app/lib/utils'
import { usePathname, useSearchParams } from 'next/navigation'

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  const allPages = generatePagination(currentPage, totalPages)

  return (
    <div className="inline-flex">
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      <div className="flex -space-x-px">
        {allPages.map((page, index) => {
          let position: 'first' | 'last' | 'single' | 'middle' | undefined

          if (index === 0) position = 'first'
          if (index === allPages.length - 1) position = 'last'
          if (allPages.length === 1) position = 'single'
          if (page === '...') position = 'middle'

          return (
            <PaginationNumber
              key={page}
              href={createPageURL(page)}
              page={page}
              position={position}
              isActive={currentPage === page}
            />
          )
        })}
      </div>

      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  )
}

function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string
  href: string
  position?: 'first' | 'last' | 'middle' | 'single'
  isActive: boolean
}) {
  const className = `flex h-10 w-10 items-center justify-center text-sm border
    ${position === 'first' || position === 'single' ? ' rounded-l-md ' : ""}
    ${position === 'last' || position === 'single' ? ' rounded-r-md ' : ""}
    ${isActive ? ' z-10 bg-blue-600 border-blue-600 text-white ' : ""}
    ${!isActive && position !== 'middle' ? ' hover:bg-gray-100 ' : ""}
    ${position === 'middle' ? ' text-gray-300 ' : ""}`
  

  return isActive || position === 'middle' ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  )
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string
  direction: 'left' | 'right'
  isDisabled?: boolean
}) {
  const className = `flex h-10 w-10 items-center justify-center rounded-md border
       ${!!isDisabled && ' pointer-events-none text-gray-300 '}
      ${!isDisabled && ' hover:bg-gray-100 '}
      ${direction === 'left' && ' mr-2 md:mr-4 '}
      ${direction === 'right' && ' ml-2 md:ml-4 '}
    `
  

  const icon = 
  direction === 'left' ? (
      <StepBackIcon className="w-4" />
    ) : (
      <StepForwardIcon className="w-4" />
    )

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  )
}
```

## Manejo de errores

### Añadir try/catch a las Server Actions

```

import { sql } from '@vercel/postgres'
import { Pokemon } from "./types"
import { unstable_noStore as noCache } from 'next/cache'


export async function fetchAllPokemon() {
  noCache()

  try {

    console.log('Fetching all pokemon data...')
    // ! No hacer en produción
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const data = await sql<Pokemon>`SELECT * FROM pokemon ORDER BY pokedex_number ASC`

    return data.rows
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch pokemons data.')
  }
}

export async function fetchPokemonByPokedexNumber(pokedex_number: number) {
  noCache()

  try {
    console.log(`Fetching pokemon ${pokedex_number} data...\`)

    const data = await sql<Pokemon>`SELECT * FROM pokemon WHERE pokedex_number = ${pokedex_number}`

    return data.rows[0]
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error(`Failed to fetch pokemon ${pokedex_number} data.`)
  }
}

const ITEMS_PER_PAGE = 6

export async function fetchFilteredPokemons(
  query: string,
  currentPage: number,
) {
  noCache()
  const offset = (currentPage - 1) * ITEMS_PER_PAGE

  try {
    console.log(`Fetching filtered pokemon data ${query}...`)

    const pokemon = await sql<Pokemon>`
    SELECT * FROM pokemon WHERE 
      name ILIKE ${`%${query}%`} OR
      type_1 LIKE ${`%${query}%`} OR
      type_2 ILIKE ${`%${query}%`}
      ORDER BY pokedex_number ASC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`
    
    return pokemon.rows
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error(`Failed to fetch pokemons.`)
  }
}

export async function fetchPokemonPages(query: string) {
  noCache()
  try {
    const count = await sql`SELECT COUNT(*)
    FROM pokemon
    WHERE
      name ILIKE ${`%${query}%`} OR
      type_1 ILIKE ${`%${query}%`} OR
      type_2 ILIKE ${`%${query}%`}
  `
  
    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE)
    return totalPages
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch total number of pokemons.')
  }
}
```

Observa cómo se llama a redirect fuera del bloque try/catch. Esto es porque redirect funciona lanzando un error, que sería capturado por el bloque catch. Para evitar esto, puede llamar a redirect después de try/catch. redirect sólo sería accesible si try tiene éxito.

Ahora, vamos a comprobar lo que ocurre cuando se produce un error en la acción del servidor. Puedes hacer esto lanzando un error antes. Por ejemplo, en la acción fetchPokemonByPokedexNumber, lanza un error al principio de la función

```
export async function fetchPokemonByPokedexNumber(pokedex_number: number) {
  throw new Error('Failed to fech Pokemon')
```

### Manejando errores con error.tsx

El archivo error.tsx puede utilizarse para definir un límite de interfaz de usuario para un segmento de ruta. Sirve como un cajón de sastre para los errores inesperados y le permite mostrar una interfaz de usuario de reserva a sus usuarios.

Dentro de la carpeta /pokedex/[pokedex_number], cree un nuevo archivo llamado error.tsx y pega el siguiente código:

```
'use client'
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <main className="flex h-1/2 flex-col items-center justify-center">
      <h2 className="text-center">Algo no ha ido bien!</h2>
      <button
        className="mt-4 rounded-md bg-red-500 px-4 py-2 text-sm text-black font-semibold transition-colors hover:bg-red-400"
        onClick={
          () => reset()
        }
      >
        Reintentar
      </button>
    </main>
  )
}
```

Hay algunas cosas que notará en el código anterior:

- "use client" - error.tsx necesita ser un Componente Cliente.
- Acepta dos props:
  - error: Este objeto es una instancia del objeto Error nativo de JavaScript.
  - reset: Esta es una función para restablecer el error boundary. Cuando se ejecuta, la función intentará volver a renderizar el segmento de ruta.

Cuando el bloque catch capture el error se mostrará esta pantalla

### Manejando errores 404 con la función notFound

Otra forma de manejar los errores con elegancia es utilizar la función notFound. Mientras que error.tsx es útil para detectar todos los errores, notFound puede utilizarse cuando se intenta obtener un recurso que no existe.

Por ejemplo [/pokedex/30](http://localhost:3000/pokedex/30)

Inmediatamente verás que error.tsx entra en acción porque esta es una ruta hija de /invoices donde error.tsx está definido.

Sin embargo, si quiere ser más específico, puede mostrar un error 404 para indicar al usuario que el recurso al que intenta acceder no se ha encontrado.

Puedes confirmar que el recurso no ha sido encontrado entrando en tu función fetchPokemonByPokedexNumber en querys.ts, y logeando los datos devueltos:

```console.log(data.rows[0])```

A continuación, puede utilizar un condicional para invocar notFound si la factura no existe:

```
import { notFound } from 'next/navigation'

if (!data.rows[0]) {
  notFound()
}
```

Perfecto. \<Page> ahora lanzará un error si no se encuentra un pokemon específico. Para mostrar una interfaz de usuario de error para el usuario. Cree un archivo not-found.tsx dentro de la carpeta '/app/pokedex/[pokedex_number]'.


```
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <Image
        alt={"MissingN0"}
        src={"/pokemon/MissingNO.png"}
        height={400}
        width={400}
      />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested pokemon.</p>
      <Link
        href="/pokedex"
        className="mt-4 rounded-md bg-red-500 px-4 py-2 text-sm text-black font-bold transition-colors hover:bg-red-400"
      >
        Volver a Pokedex
      </Link>
    </main>
  )
}
```
Recarga la ruta para ver los cambios

Para finalizar vamos a añadir un Archivo not-found.tsx en la raiz de las rutas para evitar errores de navegacion a nivel general

```
import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 text-center md:px-6">
      <div className="space-y-6">
        <Image
          alt="Profesor Oak"
          className="mx-auto overflow-hidden object-cover object-center"
          src="/oak.png"
          height="600"
          width="200"
        />
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">404 - Página no disponible</h1>
          <p className="mx-auto max-w-[400px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Como dijo el profesor Oak, cada cosa en su momento.
          </p>
        </div>
        <Link
          className="inline-flex items-center rounded-md border border-gray-200 bg-white text-white shadow-sm px-4 py-2 font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
          href="/pokedex"
        >
          Volver a Pokedex
        </Link>
      </div>
    </div>
  )
}
```

GRACIAS POR LLEGAR HASTA AQUI!

Este repositorio es una ligera interpretacion del tutorial de Next.js [dashboard-app](https://nextjs.org/learn/dashboard-app) 

Recursos utilizados para su desarrollo
- [Vercel](https://vercel.com/home)
- [V0](https://v0.dev/)
- [Wikidex](https://www.wikidex.net/wiki/WikiDex)
- [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- [Embla Carousel](https://www.embla-carousel.com/)
- [ResponsivelyApp](https://responsively.app/)
