# Migration guide

With the release of **Zircle 1.0.0** many internal and external things have changed. As a result Zircle is now more intuitive and easy to use.

Following this brief migration guide it will be easy for you to adatp your project to the new version of Zircle.

## Built-in components with changes

### z-canvas

- **Changes:**
	- **`z-canvas` has now a new property named `views`**
	- Use prop `views` to pass all your project views.

- See [**z-canvas**](/api/z-canvas.html)

### z-view-manager
- **Changes:**
	- **`z-view-manager` becomes a child component of `z-canvas`**
	- It is no longer a `public`component, so you don't need to use anymore.

### z-panel
- **Changes:**
	- **`z-panel` changed its name to `z-view`**

- See [**z-view**](/api/z-view.html)

### z-scale
- **Changes:**
	- **`z-scale` changed its name to `z-spot`**
	- **`z-spot` has three behaviours:**
		- By default is a view controller to zoom-in to another view
		- When property `button` is true `z-spot` becomes a button
		- When property `knob` is true `z-spot` becomes a range knob

- See [**z-spot**](/api/z-spot.html)

### z-button
- **Changes:**
	- **`z-button` was deleted**
	- **Use `z-spot`with property `button`**

```html
<z-spot button></z-spot>
```

- See [**z-spot button**](/api/z-spot.html#play-as-button)

### z-range
- **Changes:**
	- **`z-range` was deleted**
	- **Use `z-spot` with property `knob`**

```html
<z-spot knob></z-spot>
```
- See [**z-spot knob**](/api/z-spot.html#play-as-range-knob)

### z-list
- **Changes:**
	- **Its child component `z-item` was deleted. Use `z-spot`**

- See [**z-list**](/api/z-list.html)

### z-item
- **Changes:**
	- **`z-item` was deleted**
	- Use `z-spot` 

- See: [**z-spot**](/api/z-spot.html), [**z-list**](/api/z-list.html)

### z-alert
- **Changes:**
	- Its name was changed to `z-dialog`

- See [**z-dialog**](/api/z-dialog.html)

## Public API
- **Changes:**
	- The store state is not exposed anymore. Just its `actions`

### $zircleStore
- **Changes:**
	- Its name was changed to `$zircle`

- See [**API**](/api/public-api.html)

### config()
- **New**
- **Optional**
- Use to config your zircle project

```js
$zircle.config({
	mode: 'full' // or 'mixed'
	style: {
		theme:,
		theme-mode:
	},
	router: router, // vue-router object
	debug: false // or true
})
```

- See [**config()**](/api/public-api.html#config)

### setRouter() 
- **Changes:**
	- **`setRouter()` was deleted**
	- Use `config()`

### routerHooks() 
- **Changes:**
	- **`routerHooks()` was deleted**
	- Use `config()`	

## CSS styles
In zircle 0.3.3 the css styles were inside the zircle.js file (inlined css). At the begining, I thought it was cool, but using it a while I realized that it is difficult to adapt the style to a particular project. So, in zircle >= 1.0.0 the css styles are extracted into a separated css file again.

From zircle 1.0.0 the css prepocesor `sass` is used in development. Now there are two sass files. One, called `styles`with the generic styles and other called `themes`. 

Some css classes were renamed to avoid potentials conflicts with others libraries.

- See [**API**](/guide/themes-styles-and-colors.html)


