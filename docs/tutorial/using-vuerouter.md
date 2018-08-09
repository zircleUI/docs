# Using vue-router
If you want to use vue-router, it is very easy to do eith zircle. Just setup  the vue-router as follow and add its to config(). That is you dont need to define any route (if you dont want)
Using Vue-Router is easy and straight forward because Zircle creates the routes automatically based on you views.

## Install vue-router in your app

On your terminal, in the **smart-home** folder, type:

```sh
npm install vue-router
```

In other projects based on vue-cli simply accept to *Install Vue-Router* in the project generator. 

## Edit App.vue file

```vue{5-8,18,21}
<template>
  <z-canvas :views='$options.components'></z-canvas>
</template>
<script>
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router()
export default {
  components: {
    roomliving: () => import('./views/room-living'),
    home: () => import('./views/home'),
    scenes: () => import('./views/scenes'),
    settings: () => import('./views/settings'),
    rooms: () => import('./views/rooms'),
    maps: () => import('./views/maps')
  },
  router,
  mounted () {
    this.$zircle.config({
      router
    })
    this.$zircle.setView('home')
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');
@import url('https://use.fontawesome.com/releases/v5.1.0/css/all.css');
</style>
```

### See
- [**Guide: Using vue-router**](/guide/using-vue-router.html)
- [**z-canvas**](/api/z-canvas.html)
- [**$zircle.config()**](/api/public-api.html#config-definition)
- [**$zircle.setView()**](/api/public-api.html#setview-viewname)
