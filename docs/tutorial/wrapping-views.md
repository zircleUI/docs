# Wrapping views

Was a long journey, but we are arriving to the final. We have created a lot of views trying to show most of the zircle features. Now, we have to wire our view into the App.vue.

Replace the app.vue code with this and voila! our app should be working right now.


```vue result
<template>
  <z-canvas :views='$options.components'></z-canvas>
</template>
<script>
import Vue from 'vue'
export default {
  components: {
    roomliving: () => import('./views/room-living'),
    home: () => import('./views/home'),
    scenes: () => import('./views/scenes'),
    settings: () => import('./views/settings'),
    rooms: () => import('./views/rooms'),
    maps: () => import('./views/maps')
  },
  data () {
    return {
      list: {roomliving, three, two},
      state: this.$zircle.getState()
    }
  },
  mounted () {
    this.$zircle.config({
      mode: 'full',
      style: {
        theme: 'black',
        mode: 'dark'
      },
      debug: true
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
