# Getting Started

::: tip
The guide assumes intermediate level knowledge of HTML, CSS, JavaScript and Vue.js. To start learning Vue.js I suggest its [official documentation site](https://vuejs.org) 
:::

## Installation

### Direct download 
Just download **zircle-ui** from [Github](https://github.com/zircleUI/zircleUI/tree/master/dist).

### Content delivery networks (CDN)
Include `https://unpkg.com/zircle` in your project with `<script>` tag. With CDN you will have the latest version of **zircle-ui** as soon as it is published to NPM. You can also browse the source of the npm package at [https://unpkg.com/zircle/](https://unpkg.com/zircle/) 

### NPM or Yarn
NPM or Yarn are the recommended installation method for **zircle-ui**, if you are building medium to large scale applications. 

Create a project folder and inside it run:

```bash 
npm install zircle
# OR
yarn add zircle
```

::: tip
- [Install Vue.js](https://vuejs.org/v2/guide/installation.html) before **zircle-ui**.

- For small applications or prototyping you can directly use **zircle-ui** into a browser and for more complex apps you can use **zircle-ui** with [Single File Components (SFC)](https://vuejs.org/v2/guide/single-file-components.html). 
:::

#### See:
- [**Tutorial - Creating your first app**](/tutorial/creating.html)

## Quick start
There are several options to setup and start using **zircle-ui**.

### Code Sandbox 
The easiest way to try and start using **zircle-ui** is using the [JSFiddle sandbox](https://jsfiddle.net/tinchox5/37mr5324/) or the [Codepen sandbox](https://codepen.io/zircle/pen/MExYRv)

For **zircle-ui** projects based on vue-cli 3 you can try the [CodeSandbox](https://codesandbox.io/s/my0ol78l08)

### Browser
After you have installed **zicle ui** using [direct download](#direct-download) or [CDN](#content-delivery-networks-cdn), the following starter template creates a Vue Instance and provides `<z-canvas>` component to start the development of your **zircle-ui** application.

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
- [**z-canvas**](/api/z-canvas.html)
- [**$zircle.setView()**](/api/public-api.html#setview-viewname)

### Single File Components and vue-cli
As Vue documentation explains, with the previous setup you can work very well for small to medium-sized projects. However, in more complex projects it is better tp use [Single File Components (SFC)](https://vuejs.org/v2/guide/single-file-components.html).

Vue-cli is a powerful tool to develop complex projects. So, after you have installed and run vue-cli as it is described in the [official Vue cli docs](https://cli.vuejs.org/guide/installation.html), you can install **zircle-ui** with [NPM or Yarn](#package-managers-npm-or-yarn) and add the following code to your vue-cli project:

In the `main.js` file add this code:
```js{3-5}
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
  import home from '/components/home'
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

Create the `home.vue` view in the **/components** folder:
```vue
<template>
  <z-view>
    This screen was zirclelized!
  </z-view>
</template>
```

#### See: 
- [**z-canvas**](/api/z-canvas.html)
- [**$zircle.setView()**](/api/public-api.html#setview-viewname)
- [**Tutorial - Setup main files**](/tutorial/setup-files.html)

::: tip
Before starting a **zircle-ui** project with vue-cli you can play online with [CodeSandbox](https://codesandbox.io/s/my0ol78l08)
:::
