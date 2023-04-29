# Awesome TypeScript Fullstack Stack

This is a monorepo containing a collection of server-side and client-side stacks written in TypeScript. The focus of the stacks is on the use of React for the frontend. The aim of this repository is to provide a comprehensive reference for developers looking to create full-stack TypeScript applications.

# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

This repository includes the following apps and packages, organized into different paths based on their primary use case:

## Backend

- express-project: A project template for building web applications using the Express framework for Node.js.
- fastify-project: A project template for building web applications using the Fastify framework for Node.js.
- strapi-project: A project template for building web applications using Strapi, a headless CMS with an admin panel for managing content.
- trpc-minimal-project: A minimal project template for building APIs using the trpc framework, a lightweight RPC library for Node.js.
- trpc-express-server-project: A project template for building APIs using the trpc framework and the Express framework for Node.js.
- trpc-fastify-server-project: A project template for building APIs using the trpc framework and the Fastify framework for Node.js.
- moleculerjs-project: A project template for building microservices-based applications using MoleculerJS, a fast and scalable microservices framework for Node.js.

## Frontend

- astro-project: A project template for building web applications using Astro, a modern static site builder for JavaScript.
- cra-project: A project template for building web applications using Create React App (CRA), a popular tool for creating React applications.
- docusaurus-project: A project template for building documentation websites using Docusaurus, a tool for building static websites.
- gatsby-project: A project template for building web applications using Gatsby, a framework for building fast and secure websites.
- refine-project: A project template for building data-driven applications using Refine, a React-based framework with built-in CRUD operations and API integration.
- vite-project: A project template for building web applications using Vite, a build tool for modern web projects.

## Fullstack

- blitzjs-project: A project template for building full-stack web applications using Blitz.js, a full-stack React framework with built-in API and database integration.
- nextjs-project: A project template for building full-stack web applications using Next.js, a popular React framework for building server-rendered applications.
- redwood-project: A project template for building full-stack JavaScript web applications using Redwood, a full-stack framework with built-in Jamstack architecture.
- refine-nextjs-project: A project template for building full-stack web applications using Refine and Next.js, a combination of Refine and Next.js for a complete stack.
- refine-remix-project: A project template for building full-stack web applications using Refine and Remix, a combination of Refine and Remix for a complete stack.
- remix-project: A project template for building web applications using Remix, a framework for building modern web applications with React.
- t3-project: A project template for building scalable full-stack web applications using T3, a full-stack TypeScript framework with built-in database and API integration.

## Packages

- packages-forms: a library containing various forms components for use in apps
- packages-ui: a library containing various UI components for use in apps

Each app and package is written in TypeScript.

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
