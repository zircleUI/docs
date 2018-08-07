---
sidebarDepth: 2
---

# z-canvas

## Description
This component is a wrapper and provides the frame to develop your project. All your zircle's components needs to be inside `z-canvas`.

### View management
`z-canvas` has just one property called `views` that passes your views to the child component `z-view-manager` that controls how views are displayed. To achieve that Zircle uses a kind of [**navigation stack**](https://developer.apple.com/documentation/uikit/uinavigationcontroller). In this type of interface, only one view is active at a time, but the last two views are also shown.

### Zoom transitions
The transition between views are also performed inside `z-canvas`. When a new view is triggered `z-canvas` calculates the inverted position and inverted scale of the triggered view and apply them to the canvas.

**Caveats**
Currently zoom levels are restricted to 6. If you figure how to unlock more zoom levels let me know openning an issue or submiting a PR.

### Full and mixed modes
<img :src="$withBase('/zircle-full.png')" style="margin-top: 20px; float:right" width="250px"/> 

`z-canvas` comes with two modes that you can change using `config()`. By default, the app is in [full mode](/api/) and the `z-canvas` fulfills the browser's viewport. 

<img :src="$withBase('/zircle-mixed.png')" style="margin-top: 20px; clear: right; float:right" width="250px"/>

In case you set your app as [mixed mode](/api/) your application coexists with other implementations outside the scope of Zircle. In this case you need to add some css styles (width, height, border, etc.) into the `z-canvas`'s style or class attribute.  

The main difference between `full` and `mixed` mode is that in full mode Zircle pay attention to the browser's viewport, and in mixed mode the reference is the `z-canvas` itself.

You should use `full` mode to build applications solely based on Zircle and `mixed` to interact with other elements outside Zircle.

```html{3}
<div id="app">
  <!-- custom style in mixed mode to fit your needs -->
  <z-canvas style="width: 40%; height: 400px; border: 2px solid red;">
  </z-canvas>
</div>
```

::: tip
It is no advicable use vue-router in `mixed` mode because the routes will interfere with your main application.
::: 

## Usage
Besides the chosen app mode, the main role of `z-canvas` is to control your views. You need to populate the `z-canvas`'s `views` property with an `object` that holds all your defined views.

```html{3}
<div id="app">
  <z-canvas
    :views="{your views}">
  </z-canvas>
</div>
```

### How to pass your views to property `views`?

**Option 1:** Pass `$options.components`

You can include your views into into the [components option](https://vuejs.org/v2/guide/components-registration.html#Local-Registration) of the [Vue instance](https://vuejs.org/v2/guide/instance.html). Then you pass the **$options.components** to prop. `views`. 


```vue{4,15-19}
<template>
  <div id="app">
    <z-canvas
      :views="$options.components">
    </z-canvas>
  </div>
</template>
<script>
  import search from './views/search.vue'
  const home = {
    // your component options
  }
  export default {
    /* ... */
    components: {
      home,
      search,
      results: () => import ('./views/results.vue') // just for vue-cli
    }
    /* ... */
  }
</script>
```

**Option 2:** Pass a `Vue data` object

Sometimes is possible you don't want to pass all your componentes (e.g: you may have different components than views). In this case, you can pass a [Vue data](https://vuejs.org/v2/api/#Options-Data)  object with your views. 

```vue{4,18-22}
<template>
  <div id="app">
    <z-canvas
      :views="myViews">
    </z-canvas>
  </div>
</template>

<script>
  import search from './views/search.vue'
  const home = {
    // your component options
  }
  export default {
    /* ... */
    data () {
      return {
        myViews: {
          home,
          search,
          results: () => import ('./views/results.vue') // just for vue-cli
        }
      }
    }
    /* ... */
  }
</script>
```
**Option 3:** Pass a custom `$options`

You can even create a custom property object in [$options](https://vuejs.org/v2/api/#vm-options) with your views.

```vue{4,15-19}
<template>
  <div id="app">
    <z-canvas
      :views="$options.myViews">
    </z-canvas>
  </div>
</template>
<script>
  import search from './views/search.vue'
  const home = {
    // your component options
  }
  export default {
    /* ... */
    myViews: {
      home,
      search,
      results: () => import ('./views/results.vue') // just for vue-cli
    }
    /* ... */
  }
</script>
```
## Props
| prop | type |Description
| :--- | :--- | :--- |
| `views` | Object | An object with all your views. Each view must be a [vue component](https://vuejs.org/v2/guide/components.html).
