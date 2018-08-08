# Settings

## Description
In this view we are going to include a `z-spot` component running as **button**. We'll add a [**vue v-for directive**](https://vuejs.org/v2/guide/list.html#Mapping-an-Array-to-Elements-with-v-for#) to render a list of visual themes that comes with **zircle ui**. Also, we'll learn how to use some [**zircle ui actions**](/api/public-api.html) to set and retrieve themes.

## Code
As we did with **home view** we need to create a `settings.vue` file inside the `views` folder and paste the following code:

```vue
<template>
  <z-view label="Settings">
  {{ theme }}
    <div slot="extension">
      <z-spot
        v-for="(el, index) in elements"
        button
        size="xs"
        :distance="120"
        :angle="el.angle"
        :label="el.label"
        :label-pos="el.labelPos"
        :class="$zircle.getTheme() === 'theme-' + el.label ||
        $zircle.getThemeMode() === 'mode-' + el.label ? 'accent' : ''"
        :key="index"
        @click.native="changeStyle(el)"/>
    </div>
  </z-view>
</template>
<script>
export default {
  data () {
    return {
      theme: 'Select your theme',
      elements: [
        {type: 'theme', angle: -50, label: 'blue', labelPos: 'right'},
        {type: 'theme', angle: -30, label: 'black', labelPos: 'right'},
        {type: 'theme', angle: -10, label: 'green', labelPos: 'right'},
        {type: 'theme', angle: 10, label: 'red', labelPos: 'right'},
        {type: 'theme', angle: 30, label: 'light-blue', labelPos: 'right'},
        {type: 'theme', angle: 50, label: 'gray', labelPos: 'right'},
        {type: 'mode', angle: 210, label: 'dark', labelPos: 'left'},
        {type: 'mode', angle: 190, label: 'dark-filled', labelPos: 'left'},
        {type: 'mode', angle: 170, label: 'light', labelPos: 'left'},
        {type: 'mode', angle: 150, label: 'light-filled', labelPos: 'left'}
      ]
    }
  },
  methods: {
    changeStyle (el) {
      el.type === 'theme' ?
      this.$zircle.config({style: {theme: el.label}}) :
      this.$zircle.config({style: {mode: el.label}})
      var theme = this.$zircle.getTheme().split('theme-')[1]
      var mode = this.$zircle.getThemeMode().split('mode-')[1]
      this.theme = `The theme is ${theme} ${mode}`
    }
  }
}
</script>
```

## What the code does
In this view we have a more compact code because we use `z-spot` with `v-for` to iterate over a list of themes. Here we will render a list of themes and modes that comes with zircle. For these, we use several `z-spot` running as buttons.

### z-view
- As usual, we add a `z-view` component inside `<template>` tag with the `label` property 'Settings'. As main content we add the variable 'theme' between curling braces.

- Inside `z-view` we create a `div` with the slot name `extension` and inside it we use a `z-spot` with the Vue `v-for`.


### z-spot
For this view, some `z-spot` properties will be the same accross all the items. For this reason, we define some of them: `button`, `distance` and `size`. 

- **button prop:** Here we use for first time the `button` property. This prop tells `z-spot` that it will acts as a button. `button` is the shorthand of `button = "true"`.
Also, take note that in Vue when using numbers you have to put ':' to avoid the data being interpreted as string.

```html{3-5}
<z-spot 
  <!-- ... -->
  button
  size="xs"
  :distance="120"
  <!-- ... -->
/>
```

- **v-for directive:** To perform the iteration of `z-spots` we use an a array of objects named `elements` with the rest of the `z-spot` properties that are dynamics: `angle`, `label`, and `labelPos`

```
elements: [
  { type: 'theme', angle: -45, label: 'blue', labelPos: 'right'},
  {...}
]
```

After that, we connect this data with the remain properties.
```html{4-6}
<z-spot 
  v-for="el in elements" 
  /* ... */
  :angle="el.angle"
  :label="el.label"
  :label-pos="el.labelPos"
  /* ... */
  />
```

- **changeStyle() method:** Finally, we link the [Vue method](https://vuejs.org/v2/api/#methods) "changeStyle()" into a [Vue event](https://vuejs.org/v2/guide/events.html) `@click.native` to allow themes to be changed.

```html{3}
<z-spot 
  /* ... */
  @click.native="changeStyle(el)"
/>
```

The method `changeStyle()` is in charge of modify the configuration of the zircle app based of the data `type` we have defined in `elements`. The method invoke the zircle action `config` and modify the style app with the theme or mode chosen.
For more detailed information about this action see.

### CSS Class
As a bonus, we define a dynamic css class to set the button active when it matches the current theme or theme mode.

```html{3}
<z-spot 
  /*...*/
  :class="$zircle.getTheme() === 'theme-' + el.label || $zircle.getThemeMode() === 'mode-' + el.label ? 'accent' : ''"
  /*...*/
/>
```

To achieve that we use two zircle actions: `$zircle.getTheme()` and `$zircle.getThemeMode()`. This actions retrieve the current active theme and theme mode.

- That's all. Save it and check your browser.


### See:
- [z-view](/api/z-view.html)
- [z-spot](/api/z-spot.html)
- [config()](/api/public-api.html#config-definition)
- [getTheme()](/api/internal-api.html#getcurrenttheme)
- [getThemeMode()](/api/internal-api.html#getcurrenttheme)
- [Themes and styles](/guide/themes-styles-and-colors.html)

