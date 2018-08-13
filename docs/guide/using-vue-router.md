# Using Vue-Router

You can use **zircle-ui** with [Vue-Router](https://router.vuejs.org/) in any environment (from sandbox to vue-cli). 

::: tip
Using vue-router is easy and straightforward because **zircle-ui** creates the routes automatically based on your views. However, you can define your routes as usual.

:::

## For Browser or code sandboxes.

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
  // Vue Router configuration (You can ommit the routes definition)
  const router = new VueRouter()

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

