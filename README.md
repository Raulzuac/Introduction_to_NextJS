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
  return <p>Pokedex Page</p>;
}
```

Ahora asegurate de que el servidor de desarrollo esta levantado y y podras ver la "Pokedex page" en la ruta /pokedex

Así es como puedes crear diferentes páginas en Next.js: crea un nuevo segmento de ruta utilizando una carpeta, y añade un archivo de página dentro de ella.

Al tener un nombre especial para los archivos de página, Next.js te permite colocar componentes de interfaz de usuario, archivos de prueba y otro código relacionado con tus rutas. Sólo el contenido dentro del archivo page.tsx será accesible al público. Por ejemplo, las carpetas /ui y /lib se colocan dentro de la carpeta /app junto con tus rutas pero no disponen de archivo page.tsx.

### Crear la ruta Pokedex/[pokedex_number] (dinámica)

ya has aprendido a crear una ruta estática pero para ver en detalle cada uno de los pokemon vamos a crear una ruta dinámica que usara dinamicamente los route params (pokedex_number) para fechear el pokemon que queremos.

creamos una carpeta llamada "[pokedex_number]" dentro de /app/pokedex y añadimos el archivo page.tsx con el siguiente contenido:

```
type PokemonPageProps = {
  params: { pokedex_number: number }
}

export default async function Page({ params }: PokemonPageProps) {
    return <p>{params.pokedex_name}</p>
}
```

Te habras percatado de que en esta ruta estamos utilizando corchetes para envolver el nombre de la ruta esto nos permite definir el nombre de la ruta como parámetro para esa ruta concreta, es decir ahora en page.tsx dentro de [pokedex_number] podemos acceder mediante el prop params a pokedex_number.

### Crear layout para nuestras páginas

Las webs suelen tener elementos que se comparten entre varias páginas. En Next.js, puedes utilizar un archivo layout.tsx especial para crear una interfaz de usuario compartida entre varias páginas. Vamos a crear un layout para las páginas de la pokedex.

Dentro de /app/pokedex crea el archivo layout.tsx y pega el siguiente código

```
import SideNav from "../ui/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-40">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto">{children}</div>
    </div>
  );
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

## Configurar tu base de datos

### Crear un repositorio en GitHub

Para empezar, vamos a subir tu repositorio a Github si aún no lo has hecho. Esto facilitará la configuración de la base de datos y el despliegue.

### Crear una cuenta de Vercel 

Visita [vercel.com/signup](https://vercel.com/signup) para crear una cuenta. Elige el plan gratuito "hobby". Selecciona Continuar con GitHub para conectar tus cuentas de GitHub y Vercel.

### Conectar y desplegar tu proyecto

Importa un proyecto de tu github, elige un nombre para tu proyecto y listo ya tienes tu proyecto de Next.js desplegado en vercel

Al conectar tu repositorio de GitHub, cada vez que introduzcas cambios en tu rama principal, Vercel volverá a desplegar automáticamente tu aplicación sin necesidad de configuración. Al abrir pull requests, también dispondrás de vistas previas instantáneas que te permitirán detectar errores de despliegue con antelación y compartir una vista previa de tu proyecto con los miembros del equipo para que te den su opinión.

### Crear una base de datos Postgre

A continuación, para configurar una base de datos, haga clic en Continuar con el panel de control y seleccione la pestaña Almacenamiento del panel de control del proyecto.

Connect Store → Create New → Postgres → Continue.

Elige un nombre para tu base de datos y selecciona el servidor mas cercano a tu ubicación para evitar latencia

Una vez creada, tendremos que conectarla con nuestro proyecto. selecciona la base de datos y pulsa en .env.local, "Show Secret" y "Copy Snippet".

Asegurate de revelar los secretos antes de copiarlos, En la raiz de tu proyecto crea un archivo .env si aun no lo teienes creado y pega el secreto en el.

Asegurate de que el archivo .env esta en el .gitignore para prevenir que los secretos de tu base de datos estén expuestos.