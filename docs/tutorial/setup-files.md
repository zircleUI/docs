---
sidebarDepth: 0
---

# Setup main files

To start working on our **smart home app** we need to replace some code tht comes with  the default Vue starter app.

### Include zircle ui within a vue project.
First, go to folder **/src** and replace the **main.js** code with the following one:

```js{3-5}
import Vue from 'vue'
import App from './App.vue'
import zircle from 'zircle'
import 'zircle/dist/zircle.css'
Vue.use(zircle)
Vue.config.productionTip = true

new Vue({
  render: h => h(App)
}).$mount('#app')
```

In the **main.js** file we have added the highligthed lines:

The first two lines [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) **zircle ui** and its css stylesheet file into vue.js.  
The last line tells Vue to [use **zircle ui** as a plugin](https://vuejs.org/v2/guide/plugins.html#Using-a-Plugin)

::: tip
This initial setup will be the same for all your zircle's projects.
:::


### Initial zircle ui setup.
We need to edit the **App.vue** file and replace the code with this:
```vue
<template>
  <z-canvas :views='$options.components'></z-canvas>
</template>
<script>
import home from '/views/home'
export default {
  components: {
    home
  },
  mounted () {
    this.$zircle.setView('home')
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');
@import url('https://use.fontawesome.com/releases/v5.1.0/css/all.css');
</style>
```

In the `<template>` tag we added the zircle's `z-canvas` component. All your **zircle ui** stuff will be rendered inside this component. `z-canvas` could be considered as a frame in where **zircle ui** lives. For this reason whenever you start a **zircle ui** project, you need to use it.

`z-canvas` has just one property called **views** where you pass all your views. For the purposes of this tutorial we are going to put our views inside the components options of the Vue instance: [**$options.components**](#). However there are [many other ways to do that](#). 

Let's figure out what happens inside the `<script>` tag. Here we imported a *no-yet-created* `home.vue` file from the **/views** folder. 

Then we to included our `home` view inside `components` vue instance.

Finally, we use the [vue hook **mounted**](#) to tell **zircle ui** that the initial view is **home**

### CSS style
For this app we are going to import a font from [Google fonts](https://fonts.google.com/) and use some icon of Font Awesome.

### Create your first zircle ui view.

It is time to create the **home.vue** file. This is simply a mockup view, in the next section we are going to improve this view.  

In you editor create a **home.vue** file into **/src/views/** folder with the following code:
```vue
<template>
  <z-view>
    Welcome to Smart Home Dashboard
  </z-view>
</template>
```

That's all, now check your browser. The app will now look much like this:

> #### METER IMAGEN DEL HOME
> - 

## Next steps
For our app it is neccesary to creates a bunch of views files that will be place in the `/src/views` folder. In each view you will learn some features of **zircle ui**. 


