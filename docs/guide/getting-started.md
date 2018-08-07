# Getting Started

## Installation

### Direct download 
Just download Zircle from [Github](https://github.com/zircleUI/zircleUI/tree/master/dist) and put the zircle.min.js and the zircle.css in a script tag.

### Content delivery networks (CDN)
Include `https://unpkg.com/zircle` in your project with `<script>` tag. With CDN you will have the latest version of Zircle as soon as it is published to NPM. You can also browse the source of the npm package at [https://unpkg.com/zircle/](https://unpkg.com/zircle/) 

### NPM or Yarn
NPM or Yarn are the recommended installation method of zircle if you are building medium to large scale applications with Vue. 

Create a project folder and inside it run:

```bash 
npm install zircle
# OR
yarn add zircle
```

::: tip
- Install Vue.js before zircle ui.

- For small applications or prototyping you can use zircle directly into the browser and for more complex apps you can use zircle with [Single File Components (SFC)](https://vuejs.org/v2/guide/single-file-components.html). 
:::

## Quick start
There are several options to setup and start using Zircle.

### Sandbox 
The easiest way to try and start using Zircle is using the [JSFiddle Zircle sandbox](https://jsfiddle.net/tinchox5/37mr5324/) or the [Codepen Zircle sandbox](https://codepen.io/zircle/pen/MExYRv)

For Zircle projects based on Vue-CLI you can try the [CodeSandbox Zircle sandbox](https://codesandbox.io/s/my0ol78l08)

### Browser
After you have installed Zircle using [direct download](#direct-download) or [CDN](#content-delivery-networks-cdn), the following starter template creates a Vue Instance and provides `<z-canvas>` component to start the development of your Zircle application.

```html
<!DOCTYPE html>
<html>
  <head>
  <!-- Vue.js -->
  <script type="text/javascript" src="https://unpkg.com/vue"></script>
 
  <!-- Zircle from CDN-->
  <script type="text/javascript" src="https://unpkg.com/zircle"></script>
  <link href="https://unpkg.com/zircle/dist/zircle.css" rel="stylesheet">

  </head>
  <body>
  <div id="app">
    <z-canvas :views="$options.components"></z-canvas>
  </div>

  <script>
    const home = {
      template: `<z-view>Hello World!<z-view>`
    }
    new Vue({
      el: '#app',
      components: {
        home
      },
      mounted () {
        this.$zircle.setView('home')
      }
    })
  </script>
  </body>
</html>
```

#### See: 
- [`z-canvas`](/api/#z-canvas)
- [`$zircle.setView()`](#)

### Single File Components and vue-cli
As Vue documentation explains with the previous setup you can work very well for small to medium-sized projects. However, in more complex projects it is better use [Single File Components (SFC)](https://vuejs.org/v2/guide/single-file-components.html).

Vue-cli provides you with an powerful and easy tool to develop complex projects. So, after you have installed and run Vue-CLI as it is described in the [official Vue docs](https://vuejs.org/v2/guide/installation.html#CLI), you can install **zircle ui** with [NPM or Yarn](#package-managers-npm-or-yarn) and add the following code to your vue-cli project:

In the `main.js` file add this code:
```js
import Vue from 'vue'
import app from './App'
import zircle from 'zircle'
import 'zircle/dist/zircle.css'
Vue.use(zircle)
new Vue({
  render: h => h(App)
}).$mount('#app')
```
In the `App.vue` file add this code:
```vue
<template>
  <div id="app">
    <z-canvas :views="$options.components"></z-canvas>
  </div>
</template>

<script>
  const home = {
    template: `<z-view>Hello World!<z-view>`
  }
  export default {
    components: {
      home
    },
    mounted () {
      this.$zircle.setView('home')
    }
  }
</script>
```
#### See: 
- [`z-canvas`](/api/#z-canvas)
- [`$zircle.setView()`](#)
- Tutorial instalaltion

::: tip
Before start a Zircle project with Vue-CLI you can play online with [CodeSandbox Zircle sandbox](https://codesandbox.io/s/my0ol78l08) based on Vue-CLI
:::
