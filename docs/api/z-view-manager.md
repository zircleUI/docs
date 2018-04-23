## z-view-manager

**Description:** This component manages the views of your app. It is necesary when you have more than one view. In case you have just one view you can put the view inmediately after `<z-canvas>` and avoid to use `<z-view-manager>`.

**Usage:** Tell `<z-view-manager>` which views has to manage populating `list` prop with the components you defined in the Vue Instance.

```html
<div id="app">
  <z-canvas>
    <z-view-manager :list="$options.compoments" />
  </z-canvas>
</div>
```

```js
const foo = {
  template: `<z-panel view="foo">
  Foo View
  <z-scale
  slot="circles"
  :angle="45"
  gotoview="bar">
  Bar
  </z-scale>
</z-panel>`
}

const bar = {
  template: `<z-panel view="bar">
  Bar View
  </z-panel>`
}

new Vue({
  el: '#app',
  components: {
    foo,
    bar
  },
  mounted () {
    this.$zircleStore.setView('foo')
  }
})
```

Check this [example without Vue-Router](http://jsfiddle.net/tinchox5/umo398sw/) and this [example with Vue-Router](http://jsfiddle.net/tinchox5/g39omwxv/)

**Props**

| Prop | Type | Default value | Required | Description
| :--- | :--- | :--- | :--- | :--- |
| `list` | Object | undefined | True | Is the list of components defined in the Vue instance: `$options.components`

**Slots:**
None