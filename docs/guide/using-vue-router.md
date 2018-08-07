# Using Vue-Router

You can use **zircle ui** with [Vue-Router](https://router.vuejs.org/) in any environment (from sandbox to vue-cli). Just follow this tips and examples.

::: tip
Using Vue-Router is easy and straight forward because **zircle ui** creates the routes automatically based on you views.
:::

## For Browser or sandboxes.

### Installing Vue-Router

Add Vue-Router using a `<script>` tag

```html
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
```

### Setup zircle ui and vue-router

* Add `<z-canvas>` component in your html
* Create some view components.
* Config Vue Router.
* Config Vue Instance.

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
  // Vue Router configuration (You can ommit the routes definition)
  const router = new VueRouter({
    // optional
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

  new Vue({
    el: '#app',
    components: {
      foo,
      bar
    },
    router,
    mounted() {
      this.$zircle.config({
        router
      })
      this.$zircle.setView('foo')
    }
  })
  </script>
  </body>
</html>
```
Check this demo in [JSFiddle](https://jsfiddle.net/tinchox5/g39omwxv/) 

#### See: 
- [`z-canvas`](/api/#z-canvas)
- [`$zircle.setView()`](#)

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

### Setup zircle ui and vue-router

Steps:

* Add `<z-canvas>` components in the `<template>` tag.
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
Vue.use(Router)

const foo = {
  template: `<z-view view-name="foo">Foo View
      <z-spot
        slot="extension"
        :angle="45"
        to-view="bar">
        Bar
      </z-spot>
  </z-view>`
}

const bar = {
  template: `<z-view view="bar">Bar View</z-view>`
}

const router = new Router({})

export default {
  components: {
    foo,
    bar
  },
  router,
  mounted () {
    this.$zircle.config({
        router
      })
    this.$zircle.setView('foo')
  }
}
</script>

```
Check this example on [CodeSandbox](https://codesandbox.io/s/2x39p49kmn)

#### See: 
- [`z-canvas`](/api/#z-canvas)
- [`$zircle.setView()`](#)

