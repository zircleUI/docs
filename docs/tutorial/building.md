# Building up your app

This section directly refers to [vue-cli build services](https://cli.vuejs.org/guide/cli-service.html#vue-cli-service-build)

In your terminal simple, under the app folder, run:

```sh
npm run build
```

## Previewing Locally
The dist directory is meant to be served by an **HTTP server**, so it will not work if you open dist/index.html directly over **file://** protocol. The easiest way to preview your production build locally is using a Node.js static file server, for example serve:

```sh
npm install -g serve

serve dist
```
