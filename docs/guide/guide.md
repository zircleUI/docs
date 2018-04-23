
# Guide

## Installation
**Options**

### Direct download 
* Download Zircle from [Github](https://github.com/zircleUI/zircleUI/tree/master/dist)

### Content delivery networks (CDN)
* Include https://unpkg.com/zircle in your project with `<script>` tag. With CDN you will have the latest version of Zircle as soon as it is published to NPM. You can also browse the source of the npm package at https://unpkg.com/zircle/ 

### NPM
NPM is the recommended installation method of zircle if you are building medium to large scale applications with Vue. 

```bash 
npm install zircle --save
```

?> **Note**: When you install Zircle in a fresh project, Vue will also be installed since is a dependency of Zircle. On the other hand, you can install Zircle after you have started a project based on Vue. 

## Initial setup and starter templates
There are several options to setup and start using it.

### Sandbox 
The easiest way to try and start using Zircle is using the [JSFiddle Zircle sandbox](https://jsfiddle.net/tinchox5/37mr5324/) or the [Codepen Zircle sandbox](https://codepen.io/zircle/pen/MExYRv)

For Zircle projects based on Vue-CLi you con try the [CodeSandbox Zircle sandbox](https://codesandbox.io/s/my0ol78l08)

### Browser
After you have installed Zircle using direct download or CDN, the following starter template allows you to create a Vue Instance and provides the `<z-canvas>` component to start the development of your Zircle app.

```html
<!DOCTYPE html>
<html>
  <head>
  <!-- Vue.js -->
  <script type="text/javascript" src="https://unpkg.com/vue"></script>
  <!-- Local Zircle lib -->
  <!-- Note: from Zircle 0.3.2 css is embedded into js file. So, it is no longer necesary to include css file -->
  <link href="zircle.min.css" rel="stylesheet">
  <script type="text/javascript" src="zircle.min.js"></script>
  <!-- or Zircle from CDN-->
  <!-- Note: from Zircle 0.3.2 css is embedded into js file. So, it is no longer necesary to include css file -->
  <link href="https://unpkg.com/zircle/dist/zircle.min.css" rel="stylesheet">
  <script type="text/javascript" src="https://unpkg.com/zircle"></script>
  </head>
  <body>
  <div id="app">
    <z-canvas>
      <z-panel view="home">
        {{ msg }}
      </z-panel>
    </z-canvas>
  </div>
  <script>
    new Vue({
      el: '#app',
      data () {
        return {
          msg: 'Hello World!'
        }
      }
    })
  </script>
  </body>
</html>
```

### Single File Components and Vue-CLI
As Vue Documentation explains, with the previous setup you can work very well for small to medium-sized projects. However, in more complex projects, or when your frontend is entirely driven by JavaScript it is better use single-file components with a .vue extension, made possible with build tools such as Webpack or Browserify.

Vue-CLI provides you with an powerful and easy tool to develop complex projects. So, after you installed and run Vue-CLI as it is described in the  [official Vue docs](https://vuejs.org/v2/guide/installation.html#CLI), you can use any of its templates with Zircle. 

Just, install Zircle with NPM and add this code to your vue-CLI project:

**Example using webpack-template**

In the `main.js` file add this code:
```js
import Vue from 'vue'
import app from './App'
import zircle from 'zircle'
<!-- Note: from Zircle 0.3.2 css is embedded into js file. So, it is no longer necesary to import css file -->
import 'zircle/dist/zircle.min.css'
Vue.use(zircle)
new Vue({
  el: '#app',
  components: {
    app
  },
  template: '<app/>'
})
```
In the `App.vue` file add this code:
```vue
<template>
    <z-canvas>
      <z-panel view="home">
        {{ msg }}
      </z-panel>
    </z-canvas>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>
```

?> **Note:** Before start a Zircle project with Vue-CLI you can play online with [CodeSandbox Zircle sandbox](https://codesandbox.io/s/my0ol78l08) based on Vue-CLI

### Vue-Router
You can use Zircle with Vue-Router in any environment (from sandbox to vue-cli). Just follow this tips and examples.

?> Since Zircle 0.3.0 using Vue-Router is simplier and straight forward because Zircle creates the routes automatically.

> When Zircle 0.5.0 arrives `routerHooks()` will be deprecated in favour if `setRouter()`

#### For Browser or online source code playgrounds.

**1. Install Vue-Router.**

Add Vue-Router using a `<script>` tag

```html
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
```

**2. Setup Zircle and the router.**

Steps:

* Add `<z-view-manager>` component in your html

In the html:

```html
<div id="app">
  <z-canvas>
    <z-view-manager :list='$options.components'></z-view-manager>
  </z-canvas>
</div>
```

* Create some view components.
* Config Vue Router.
* Config Vue Instance.

In the `<script>` that you have the Vue Instance:

```js
// Your view compoments
const foo = {
  template: `<z-panel view="foo">
  Foo View
  <z-scale slot="circles"
  :angle="45"
  gotoview="bar">
  Bar
  <span slot="label">Go to</span>
  </z-scale>
</z-panel>`
}
const bar = {
  template: `<z-panel view="bar">
  Bar View
  </z-panel>`
}
// Vue Router configuration
const router = new VueRouter({
  routes: [{
    path: '/',
    redirect: '/foo'
  }, {
    path: '/foo',
    name: 'foo',
    component: foo
  }, {
    path: '/bar',
    name: 'bar',
    component: bar
  }]
})
//  Zircle and router configuration for Vue instance 
new Vue({
  el: '#app',
  components: {
    foo,
    bar
  },
  router,
  data() {
    return {
      initialView: 'foo',
      enableRouter: true
    }
  },
  mounted() {
    this.$zircleStore.routerHooks(this)
  }
})
```

Check this demo in [JSFiddle](https://jsfiddle.net/tinchox5/g39omwxv/)

?> Since version 0.3.0 Zircle can manage automatically the routes, so the router set up is simplier:

In the `<script>` that you have the Vue Instance:

```js
// Your view compoments
const foo = {
  template: `<z-panel view="foo">
  Foo View
  <z-scale slot="circles"
  :angle="45"
  gotoview="bar">
  Bar
  <span slot="label">Go to</span>
  </z-scale>
</z-panel>`
}
const bar = {
  template: `<z-panel view="bar">
  Bar View
  </z-panel>`
}
// Vue Router configuration
const router = new VueRouter({
})
//  Zircle and router configuration for Vue instance 
new Vue({
  el: '#app',
  components: {
    foo,
    bar
  },
  router,
  data() {
    return {
      initialView: 'foo'
    }
  },
  mounted() {
    this.$zircleStore.setRouter(this)
  }
})
```  

#### For NPM or Vue-CLI

**1. Install Vue-Router in your project.**
```bash 
npm install vue-router
```

?> **Note:** In case using Vue-CLI simply accept to Install Vue-Router in the project generator. Of course, you can install the router later.

In your `main.js` file
```js
import Vue from "vue"
import App from "./App"
import zircle from "zircle"
<!-- Note: from Zircle 0.3.2 css is embedded into js file. So, it is no longer necesary to include css file -->
import "zircle/dist/zircle.min.css"
Vue.use(zircle)

new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
})
```

**2. Setup Zircle and the router.**

Steps:

* Add `<z-view-manager>` component in your `<template>`
* Create some view components.
* Config Vue Router.
* Config Vue Instance.

In your `App.vue`
```vue
<template>
    <z-canvas>
          <z-view-manager :list='$options.components'/>
    </z-canvas>
</template>
<script>
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const foo = {
  template: `<z-panel view="foo">
  Foo View
  <z-scale
  slot="circles"
  :angle="45"
  gotoview="bar">
  Bar
  <div slot="label">Go to</div>
  </z-scale>
</z-panel>`
}
const bar = {
  template: `<z-panel view="bar">
  Bar View
  </z-panel>`
}
const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/foo'
  }, {
    path: '/foo',
    name: 'foo',
    component: foo
  }, {
    path: '/bar',
    name: 'bar',
    component: bar
  }]
})

export default {
  data () {
    return {
      initialView: 'foo',
      enableRouter: true
    }
  },
  components: {
    foo,
    bar
  },
  router,
  mounted () {
    this.$zircleStore.routerHooks(this) // routerHooks will be deprecated in favour of setRouter()
  }
}
</script>
<style>
</style>
```


Check this example on [CodeSandbox](https://codesandbox.io/s/2x39p49kmn)

?> Since Zircle 0.3.0 using Vue-Router is simplier and straight forward because Zircle creates the routes automatically.

In your `App.vue`
```vue
<template>
    <z-canvas>
          <z-view-manager :list='$options.components'/>
    </z-canvas>
</template>
<script>
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const foo = {
  template: `<z-panel view="foo">
  Foo View
  <z-scale
  slot="circles"
  :angle="45"
  gotoview="bar">
  Bar
  <div slot="label">Go to</div>
  </z-scale>
</z-panel>`
}
const bar = {
  template: `<z-panel view="bar">
  Bar View
  </z-panel>`
}
const router = new Router({
  mode: 'history'
})

export default {
  data () {
    return {
      initialView: 'foo'
    }
  },
  components: {
    foo,
    bar
  },
  router,
  mounted () {
    this.$zircleStore.setRouter(this)
  }
}
</script>
<style>
</style>
```


## Themes and colors
Zircle comes with nine colors and four themes under hood that are built using CSS Variables.

The colors are:
* `.color--light-blue`
* `.color--blue`
* `.color--green`
* `.color--orange`
* `.color--yellow`
* `.color--red`
* `.color--purple`
* `.color--black` (default)
* `.color--gray`

Each color is a CSS class that wraps several CSS variables
```css
.color--red {
  --background-color: #fef8f8;
  --primary-color: #ef3c3b;
  --accent-color: #860c0b;
  --success-color: #7d8d4a;
  --warning-color: #fa7c12;
  --danger-color: #f34138;
}
```

The themes are:
* `.theme--light` for light backgrounds
* `.theme--bold-light` for light backgrounds and filled views
* `.theme--dark` for dark backgrounds (default)
* `.theme--bold-dark`for dark backgrounds and filled views

Each theme is a CSS class that wraps several CSS variables

```css 
.theme--light {
  --background: var(--background-color);
  --primary: var(--primary-color);
  --accent: var(--accent-color);
  --success: var(--success-color);
  --warning: var(--warning-color);
  --danger: var(--danger-color);
  --background-card: var(--background-color);
  --border-card: var(--primary-color);
  --primary-text: var(--primary-color);
}
```


### Setting up Themes ands Colors

One way to set up you prefered theme and color is to put them in `mounted()` 

```js
new Vue({
  el: '#app',
  components: {
    foo,
    bar
  },
  router,
  data() {
    return {
      sharedState: this.$zircleStore.state,
      initialView: 'foo'
    }
  },
  mounted () {
    this.sharedState.theme = 'theme--bold-light'
    this.sharedState.color = 'color--blue'
  }
})
```



### Customize
The easiest way to adapt the themes to your needs is to override the color CSS clases or create a new color names

Check the CSS tab of the following example
<iframe height='600' scrolling='no' title='Themes and Colors Selector by Zircle' src='//codepen.io/zircle/embed/MrLMvB/?height=600&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/zircle/pen/MrLMvB/'>Themes and Colors Selector by Zircle</a>
</iframe>
