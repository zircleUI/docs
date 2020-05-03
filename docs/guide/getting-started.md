# Getting Started

::: tip

I'm currently working on **Zumly**, which is a step forward to create zoomable web apps. You can be one of the first to try **Zumly** by joining our mailing list!!

<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
  #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
  /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
     We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="https://zumly.us8.list-manage.com/subscribe/post?u=fd430ad308efc1ae2b7efc141&amp;id=2cc4c60414" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
  
<div class="mc-field-group">
  <label for="mce-NAME">Name </label>
  <input type="text" value="" name="NAME" class="" id="mce-NAME">
</div>
<div class="mc-field-group">
  <label for="mce-EMAIL">Email Address </label>
  <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
  <div id="mce-responses" class="clear">
    <div class="response" id="mce-error-response" style="display:none"></div>
    <div class="response" id="mce-success-response" style="display:none"></div>
  </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_fd430ad308efc1ae2b7efc141_2cc4c60414" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[1]='NAME';ftypes[1]='text';fnames[0]='EMAIL';ftypes[0]='email';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->


More information at [zumly.org](https://zumly.org)

:::


::: tip
The guide assumes intermediate level knowledge of HTML, CSS, JavaScript and Vue.js. To start learning Vue.js I suggest its [official documentation site](https://vuejs.org) 
:::

## Installation

### Direct download 
Just download **zircle-ui** from [Github](https://github.com/zircleUI/zircleUI/tree/master/dist). You need to download the **zircle.umd.js** or the **zircle.umd.min.js** file along with the **zircle.css** file.

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
The easiest way to try and start using **zircle-ui** is using [JSFiddle](https://jsfiddle.net/tinchox5/37mr5324/) or  [Codepen](https://codepen.io/zircle/pen/ypZdWZ)

For **zircle-ui** projects based on vue-cli 3 you can try [CodeSandbox](https://codesandbox.io/s/y26p3q79k9)

### Browser
After you have installed **zircle ui** using [direct download](#direct-download) or [CDN](#content-delivery-networks-cdn), the following starter template creates a Vue Instance and provides `<z-canvas>` component to start the development of your **zircle-ui** application.

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
      template: `<z-view>Hello World!</z-view>`
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
import App from './App'
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
  import home from './components/home'
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
Before starting a **zircle-ui** project with vue-cli you can play online with [CodeSandbox](https://codepen.io/zircle/pen/ypZdWZ)
:::
