# Iniciacion con Next.JS

Este repositorio esta creado con la finalidad de enseñar las convenciones de archivos que utiliza [Next.js](https://nextjs.org/), 

### Pero antes de empezar ¿Que es Next.js?

Next.js es un framework de React para el desarrollo de aplicaciones web. Fue creado por Vercel y se ha vuelto muy popular en los últimos años. Next.js ofrece varias ventajas y beneficios para los desarrolladores, lo que lo convierte en una herramienta popular para construir aplicaciones web modernas y escalables.

- Renderizado del lado del servidor (SSR): Next.js permite renderizar las páginas en el servidor, lo que mejora el rendimiento y la indexabilidad de las aplicaciones web.
- Generación de sitios estáticos: Next.js permite generar sitios estáticos pre-renderizados, lo que mejora aún más la velocidad de carga y la eficiencia de la aplicación.
- Fácil configuración y enrutamiento automático: Next.js asume ciertas convenciones y proporciona una configuración mínima, lo que facilita el desarrollo y el enrutamiento de la aplicación.
- Amplia adopción y comunidad activa: Next.js es ampliamente utilizado por grandes empresas y cuenta con una comunidad activa que proporciona soporte y recursos adicionales.


## Prerequisitos
Node 18.17 o superior

Es recomendable utilizar [Node Version Manager (NVM)](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)


## Como crear un proyecto de Next.js?
`npx create-next-app@latest`
(npx viene con node 5.2 y superiores)

La CLI de Next nos hará unas preguntas sobre la configuración del proyecto 
para poder seguir mejor el tayer vamos a configurar todos los proyectos de la misma forma 

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

y accedemos al enlace de la terminal [http://localhost:3000]( http://localhost:3000). Ya tenemos creado nuestro proyecto de Next, ahora vamos a ver la serie de ventajas que ofrece frente a un proyecto de React

## Enrutamiento
El esqueleto de de una aplicación es el enrutado

Sera necesario que te familiarizes con estós terminos antes de seguir 




<!-- This is a  project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->
