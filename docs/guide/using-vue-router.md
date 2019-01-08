# Using Vue-Router

You can use **zircle-ui** with [Vue-Router](https://router.vuejs.org/) in any environment (from sandbox to vue-cli). 

::: tip

**Breaking change:**

Up to **zircle-ui v.1.2.2** the routes were handled automatically based on your views. However, the functionality of the router was pretty limited [https://github.com/zircleUI/zircleUI/issues/19](#19). From  **zircle-ui v.1.2.3** most of the caveats were eliminated. However, you need to define the routes in your Vue router.
```
const router = new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'home', component: home },
    { path: '/docs/:id', name: 'docs', component: docs },
    { path: '*', redirect: '/not-found' },
    { path: '/not-found', name: 'not-found', component: missing }
  ]
})
```
**Use:**
- You don't have to setup the initial view (`this.$zircle.setView('you-initial-view')`), because the views are handled by the router.

- There is no need to add the components in `$options.components`, but you need to use [named route](https://router.vuejs.org/guide/essentials/named-routes.html)

- Now the router will render the view that is in the route. Tough the previous views will not be rendered. To avoid loose of context you can add a conditional z-spot button with a fallback view(eg: `home`)

- In case you use  `dynamic routes` you should add an `in-component guard` as is described in the [Vue-router documentation](https://router.vuejs.org/guide/advanced/navigation-guards.html#in-component-guards)

- See [this example](#) with the new implementation of the vue-router on zircle-ui

**Current limitations:**
- Go forward using browser navigation buttons
- Using routes with queries
:::

## Setup for Browser or code sandboxes.

### Installing Vue-Router

Add vue-router using a `<script>` tag

```html
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
```

### Setup zircle-ui and vue-router

* Add [**z-canvas**](/api/z-canvas.html) component in your html.
* Create some view components.
* Config Vue router.
* Create a [Vue Instance](https://vuejs.org/v2/guide/instance.html).

```html
<!DOCTYPE html>
<html>
  <head>
  <!-- Vue.js -->
  <script type="text/javascript" src="https://unpkg.com/vue"></script>

  <!-- Vue-router -->
  <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
 
  <!-- Zircle from CDN-->
  <script type="text/javascript" src="https://unpkg.com/zircle"></script>
  <link href="https://unpkg.com/zircle/dist/zircle.css" rel="stylesheet">

  </head>
  <body>
  <div id="app">
    <z-canvas :views="$options.components"></z-canvas>
  </div>

  <script>
  // Your view compoments
  const foo = {
    template: `<z-view>Foo View
      <z-spot 
        slot="extension"
        :angle="45"
        to-view="bar">
        Bar
      </z-spot>
    </z-view>`
  }
  const bar = {
    template: `<z-view>Bar View</z-view>`
  }
  
  const router = new VueRouter({
    routes: [
      { path: '/', redirect: '/foo' },
      { path: '/foo', name: 'foo', component: foo },
      { path: '/bar', name: 'bar', component: bar }
    ]
  })

  new Vue({
    el: '#app',
    router,
    mounted() {
      this.$zircle.config({
        router
      })
    }
  })
  </script>
  </body>
</html>
```
Check this demo in [Codepen](https://codepen.io/zircle/pen/RxvzVa) 

#### See: 
- [**z-canvas**](/api/z-canvas.html)
- [**z-spot**](/api/z-spot.html)
- [**$zircle.config()**](/api/public-api.html#config-definition)
- [**$zircle.setView()**](/api/public-api.html#setview-viewname)

## For NPM or vue-cli

### Install vue-router in your project
```bash 
npm install vue-router
```

::: tip
In case using vue-cli simply accept to Install vue-rRouter in the project generator. Of course, you can install the router later.
:::

In your `main.js` file
```js
import Vue from "vue"
import App from "./App"
import zircle from "zircle"
import "zircle/dist/zircle.css"
Vue.use(zircle)

new Vue({
  render: h => h(App)
}).$mount('#app')
```

### Setup zircle-ui and vue-router

Steps:

* Add [**z-canvas**](/api/z-canvas.html) component in the `<template>` tag.
* Create some view components.
* Config vue-router.
* Create a [Vue Instance](https://vuejs.org/v2/guide/instance.html).

In your `App.vue`

```vue
<template>
    <z-canvas :views="$options.components"></z-canvas>
</template>
<script>
import Vue from 'vue'
import Router from 'vue-router'
import foo from '/components/foo'
import bar from '/components/bar'
Vue.use(Router)

const router = new Router({
    routes: [
      { path: '/', redirect: '/foo' },
      { path: '/foo', name: 'foo', component: foo },
      { path: '/bar', name: 'bar', component: bar }
    ]
  })

export default {
  router,
  mounted () {
    this.$zircle.config({
        router
      })
  }
}
</script>

```

Create **foo** and **bar** views on the **src/components/** folder:

```vue
<template>
  <z-view>Foo View
    <z-spot
      slot="extension"
      :angle="45"
      to-view="bar">
      Bar
    </z-spot>
  </z-view>
</template>
```

```vue
<template>
  <z-view>Bar View
  </z-view>
</template>
```

#### See: 
- [**z-canvas**](/api/z-canvas.html)
- [**z-spot**](/api/z-spot.html)
- [**$zircle.config()**](/api/public-api.html#config-definition)
- [**$zircle.setView()**](/api/public-api.html#setview-viewname)

