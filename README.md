# Webpack Sample

This repository contains a minimal React application bundled with **webpack**. The app demonstrates how to lazy load a component using `React.lazy` and `React.Suspense`.

## Setup

Install dependencies:

```bash
npm install
```

## Development server

Start a dev server with hot reloading:

```bash
npm start
```

The application will open in your default browser on [http://localhost:9000](http://localhost:9000).

## Build

Create a production build in the `dist` directory:

```bash
npm run build
```

## How it works

Webpack processes the `src/index.jsx` entry point and its dependencies. When the bundler encounters `React.lazy`, it creates a separate bundle for the lazily-loaded component so that it can be downloaded on demand.
