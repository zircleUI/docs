# Migration guide

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


With the release of **zircle-ui 0.9.0** many internal and external things have changed. As a result **zircle-ui** is now more intuitive and easy to use.

Following this brief migration guide it will be easy for you to adatp your project to the new version of **zircle-ui**.

## Built-in components with changes

### z-canvas

- **Changes:**
	- **`z-canvas` has now a new property named `views`**
	- Use prop `views` to pass all your zircle's views.

- See
	- [**z-canvas**](/api/z-canvas.html)

### z-view-manager
- **Changes:**
	- **`z-view-manager` becomes a child component of `z-canvas`**
	- It is no longer a `public`component, so you don't need to use anymore.

- See
	- [**z-view-manager**](/api/z-view-manager.html)

### z-panel
- **Changes:**
	- **`z-panel` changed its name to `z-view`**

- See
	- [**z-view**](/api/z-view.html)

### z-scale
- **Changes:**
	- **`z-scale` changed its name to `z-spot`**
	- **`z-spot` has three behaviours:**
		- By default is a view controller to zoom-in to another view
		- When property `button` is true `z-spot` becomes a button
		- When property `knob` is true `z-spot` becomes a range knob

- See
	- [**z-spot**](/api/z-spot.html)

### z-button
- **Changes:**
	- **`z-button` was deleted**
	- **Use `z-spot`with property `button`**

```html
<z-spot button></z-spot>
```

- See
	- [**z-spot button**](/api/z-spot.html#z-spot-as-button)

### z-range
- **Changes:**
	- **`z-range` was deleted**
	- **Use `z-spot` with property `knob`**

```html
<z-spot knob></z-spot>
```
- See
	- [**z-spot knob**](/api/z-spot.html#z-spot-as-knob)

### z-list
- **Changes:**
	- **Its child component `z-item` was deleted. Use `z-spot`**

- See
	- [**z-list**](/api/z-list.html)

### z-item
- **Changes:**
	- **`z-item` was deleted**
	- Use `z-spot` 

- See
	- [**z-spot**](/api/z-spot.html)
	- [**z-list**](/api/z-list.html)

### z-alert
- **Changes:**
	- Its name was changed to `z-dialog`

- See
	- [**z-dialog**](/api/z-dialog.html)

## Public API
- **Changes:**
	- The store state is not exposed anymore. Just its `actions`

### $zircleStore
- **Changes:**
	- Its name was changed to `$zircle`

- See
	- [**Public API**](/api/public-api.html)

### config()
- **New**
- **Optional**
- Use to config your **zircle-ui** project

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

- See
	- [**$zircle.config()**](/api/public-api.html#config)

### setRouter() 
- **Changes:**
	- **`setRouter()` was deleted**
	- Use `config()`

- See
	- [**$zircle.config()**](/api/public-api.html#config)

### routerHooks() 
- **Changes:**
	- **`routerHooks()` was deleted**
	- Use `config()`

- See
	- [**$zircle.config()**](/api/public-api.html#config)	

## CSS styles
Before **zircle-ui 0.9.0** the css styles were embedded into `zircle.js`. At the begining, I thought it was cool, but using it a while I realized that it is difficult to adapt the styles to a particular project. So, in **zircle-ui >= 0.9.0** the css styles are extracted into a separated css file again.

From **zircle-ui 0.9.0** the css prepocessor [SASS](http://sass-lang.com/) is used in development. Now there are two sass files. One, called `styles` with generic styles and other called `themes`. 

Some css classes were renamed to avoid potentials conflicts with others libraries.

- See
	- [**Themes and styles**](/guide/themes-styles-and-colors.html) 
	- [**$zircle.config()**](/api/public-api.html#config)


