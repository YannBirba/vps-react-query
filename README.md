# vite-plugin-ssr with Tanstack react query

This is a demo of how to use [vite-plugin-ssr](https://vite-plugin-ssr.com/) with [react-query](https://tanstack.com/query/latest/).

This is a very simple example just to show the integration between the two libraries.

## How to use

### Install dependencies

I used [pnpm](https://pnpm.io/) to install the dependencies, but you can use npm or yarn as well.

```bash
pnpm install
```

or

```bash
yarn install
```

or

```bash
npm install
```

### Run dev server

Use the "dev" script from package.json, be sure to have the 3000 port available.

### Build

Use the "build" script from package.json, the build will be in the "dist" folder.
By default this example is using prerendering, you can change this in the "vite.config.js" file.

### Run

Use the "server:prod" to run the server in production mode. or use the "prod" script to build and run the server.

## How it works

The main idea is to use the "react-query" library to prefetch the data on the server side and then hydrate the client with the same data.

On the client we can reuse the same data to avoid fetching it again and then we are free to use the library to mutate or refetch the data as we want.

## Features

- React Query
- Prerendering by default (can be disabled in vite.config.js)
- Server Side Rendering is possible as well
- TypeScript
- Client routing provided by [vite-plugin-ssr](https://vite-plugin-ssr.com/)
- Client refetching example with react-query

## Contributing

Pull requests and issues are welcome 😊!
