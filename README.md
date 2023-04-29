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

- express: a server-side Node.js app built with Express
- fastify: a server-side Node.js app built with Fastify
- trpc: a server-side Node.js app built with trpc

## Frontend

- vite: a client-side app built with Vite
- astro: a client-side app built with Astro
- docusaurus: a static site generator built with Docusaurus
- cra: a client-side app built with Create React App

## Fullstack

- nextjs: a full-stack app built with Next.js
- remix: a full-stack app built with Remix
- t3: a full-stack app built with the T3 stack (TypeScript, React, Redux)

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
