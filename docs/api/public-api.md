---
sidebarDepth: 1
---
# Public API
When Zircle is [installed](/guide/getting-started.html) you have access to `$zircle` that allow to have access to the `actions`of the zircle state management. A few of them are "public" and a lot are internal but usefull if you want to contribute.
You can call two methods to control zircle

## setView

### setView(viewName)

- **Params:**
    - {string} viewName

- **Usage:**

You need to use `setView` to set the initial view name of your application. If you forget to set the initial view, no view will be shown.

Use setView in the mounted or create hook to ensure bla bla bla. CHosse the name of your defined views. Case insensitive.

``` js{4}
export default {
  /* ... */
  mounted() {
    this.$zircle.setView('home')  
  }
}
```
- **See also**: 
  - [**Getting started > Quick start**](/guide/getting-started.html#quick-start)
  - [**Tutorial**](/tutorial/)
  - [`z-alert`](/api/)

## config

### config([definition])

- **Params:**
    - {Object} [definition]

- **Usage:**
`config` is optional. Just in case you want to modify the default values of the appiclation or in case you are using reouter.

```js{4,5,6,7,8,9,10,11,12}
export default {
  /* ... */
  mounted() {
    $zircle.config({
      mode:'full',
      style: {
        theme: 'dark',
        color: 'blue'
      },
      router: router, // router
      debug: false 
    })
  }
}
```
- **Options**:

| Option | Type | Default value | Description
| :--- | :--- | :--- | :--- | :--- |
| `mode` | String | full | The default value is **'full'** to use Zircle in a full mode. In case you want to include Zircle in other application use **'embedded'**.
| `style` | Object | theme: 'dark', color: 'blue' | You can change the general look and feel of your application modifying **theme** and **color**. The complete list of themes and color included in Zircle can be found [here](/guide/themes-styles-and-colors.html)
| `router` | Object | --- | In case your application uses **vue-router** just pass the created router here. For more information about using **vue-router** with zircle [here](/guide/using-vue-router.html)
| `debug` | Boolean | false | Debug is disabled by default. If you want to see and config a detailed zircle's log [here](#setlog-msg-type)

  ::: tip
  With **'embedded'** mode you need to define the size of the `z-canvas` (v.g `style="width: 40%; height: 500px;"`). Zircle will adapt its interior views and comonents taking into account the size of the `z-canvas`, not the `viewport`
  :::

- **See also**: 
  - [**Tutorial**](/tutorial/)
