---
sidebarDepth: 1
---
# Public API
When **zircle-ui** is [installed](/guide/getting-started.html) you have access to `$zircle` and the `actions`of the **zircle-ui state management**. A few of them are "public" and a lot are internal but usefull if you want to contribute.


You can call three action to control **zircle-ui**:

## setView(viewName)

- **Params:**
    - {string} viewName

- **Usage:**

You need to use `setView` to set the initial view name of your application. If you forget to set the initial view, no view will be shown.

Use setView in the mounted hook. Chosse the name of your defined views. It is case insensitive.

``` js{4}
export default {
  /* ... */
  mounted() {
    this.$zircle.setView('home')  
  }
}
```
- **See**: 
  - [**Getting started: Quick start**](/guide/getting-started.html#quick-start)
  - [**Tutorial**](/tutorial/)

## config([definition])

- **Params:**
    - {Object} [definition]

- **Usage:**
`config` is optional. Just in case you want to modify the default values of the appiclation or in case you are using router.

```js{4,5,6,7,8,9,10,11,12}
export default {
  /* ... */
  mounted() {
    $zircle.config({
      mode:'full',
      style: {
        theme: 'black',
        mode: 'dark'
      },
      router: router,
      debug: false 
    })
  }
}
```
- **Options**:

| Option | Type | Default value | Description
| :--- | :--- | :--- | :--- | :--- |
| `mode` | String | full | The default value is **'full'** to use Zircle in a full mode. In case you want to include Zircle in other application use **'mixed'**.
| `style` | Object | theme: 'black', mode: 'dark' | You can change the general look and feel of your application modifying **theme** and **color**. The complete list of themes and color included in zircle-ui can be found [here](/guide/themes-styles-and-colors.html)
| `router` | Object | --- | In case your application uses **vue-router** just pass the created router here. For more information about using **vue-router** with zircle [here](/guide/using-vue-router.html)
| `debug` | Boolean | false | Debug is disabled by default. If you want to see and config a detailed zircle's log [here](/api/internal-api.html#debug-api)

::: tip
  With **'mixed'** mode you need to define the size of the `z-canvas` (v.g `style="width: 40%; height: 500px;"`). zircle-ui will adapt its views and components taking into account the size of the `z-canvas`, not the `browser viewport`
:::

- **See**: 
  - [**z-canvas**](/api/z-canvas.html)
  - [**Tutorial: settings view**](/tutorial/settings-view.html)

## getTheme()
Returns the current app theme. 

- **See**
  - [**Themes and styles**](/guide/themes-styles-and-colors.html#changing-up-themes-and-modes)
  - [**Tutorial: settings view**](/tutorial/settings-view.html)

## getThemeMode()
Returns the current app theme mode. 

- **See** 
  - [**Themes and styles**](/guide/themes-styles-and-colors.html#changing-up-themes-and-modes)

## getParams([definition])

- **Params:**
    - {Object} [definition]

- **Usage:**

You need to use `getParams` to retrieve the params that were passed in the property `toView` of a `z-spot`.

``` js{4}
export default {
  computed: {
    retrieveParams () {
      if (this.$zircle.getParams() !== undefined) {
        return this.$zircle.getParams().fruit
      }
    }
  }
}
```
- **See**
  - [**Getting started: Quick start**](/guide/getting-started.html#quick-start)
  - [**Tutorial: device view**](/tutorial/device-view.html)
