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

In case you don't use router, you need to use `setView` to set the initial view name of your application. If you forget to set the initial view, no view will be shown. On the contrary, the initial view is handled by vue-router, so you don't need to declare.

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

## toView(viewName || definition)
- **Params:**
    - {string} viewName

    or

    - {Object} [definition]

- **Usage:**

`toView`is a sintax sugar of `setView` and it is indicated to perfom programmatic navigation.

Use `toView` in the `script` vue section. 


**Option 1**

You can point the name of your defined view. It is case insensitive. In those cases the next view will appear in the center of the screen, because it doesn't have a initial `z-spot` to take as position reference.

``` js{4}
export default {
  /* ... */
    this.$zircle.toView('home')  
  /* ... */
}
```

**Option 2 (recommended)**

In case you want a new view appears from a specific `z-spot` you'll need to define an object as follows:

``` js{4}
export default {
  /* ... */
    this.$zircle.toView({
      to: 'name of the new view' // string. Required,
      fromSpot: 'reference of the z-spot' // Required,
      params: { your params } // Optional
    })  
  /* ... */
}
```


- **See**: 
  - [**API. z-spot: Using programmatic navigation**](/api/z-spot.html#using-programmatic-navigation)


## config([definition])

- **Params:**
    - {Object} [definition]

- **Usage:**
`config` is optional. Just in case you want to modify the default values of the appiclation or in case you are using router.

```js{4,5,6,7,8,9,10,11,12,13,14,15}
export default {
  /* ... */
  mounted() {
    $zircle.config({
      mode:'full',
      style: {
        theme: 'black',
        mode: 'dark',
        shape: 'circle'
      },
      router: router,
      debug: false,
      usePercentSizes: true,
      percentSizes: {
        xxl: 30,
        xl: 20,
        l: 16,
        m: 8,
        s: 6,
        xs: 4,
        xxs: 2
      },
      minSizesInPixels: {
        xxl: 180,
        xl: 150,
        l: 100,
        m: 80,
        s: 50,
        xs: 30,
        xxs: 20
      }
    })
  }
}
```
- **Options**:

| Option | Type | Default value | Description
| :--- | :--- | :--- | :--- | :--- |
| `mode` | String | full | The default value is **'full'** to use Zircle in a full mode. In case you want to include Zircle in other application use **'mixed'**.
| `style` | Object | theme: 'black', mode: 'dark', shape: 'circle' | You can change the general look and feel of your application modifying **theme**, **color** and **shape**. The complete list of themes and color included in zircle-ui can be found [here](/guide/themes-styles-and-colors.html)
| `router` | Object | --- | In case your application uses **vue-router** just pass the created router here. For more information about using **vue-router** with zircle [here](/guide/using-vue-router.html)
| `debug` | Boolean | false | Debug is disabled by default. If you want to see and config a detailed zircle's log [here](/api/internal-api.html#debug-api)
| `usePercentSizes` | Boolean | false | Percent sizes are disabled by default. Enable it use **percentSizes** property to determine your components sizes
| `percentSizes` | Object | { xxl: 30, xl: 20, l: 16, m: 8, s: 6, xs: 4, xxs: 2 } | The size of your components in percentage, depending on the container's size 
| `minSizesInPixels` | Object | { xxl: 180, xl: 150, l: 100, m: 80, s: 50, xs: 30, xxs: 20 } | The size of your components in percentage, depending on the container's size 

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

## isUsingPercentSizes()

- **Usage:**

You need to use `isUsingPercentSizes` to retrieve the current **usePercentSizes** value of the state

## resetConfig()

- **Usage:**

You need to use `resetConfig` to reset all the state values to their initial values and thus completely reinitialize zircle

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
