# z-slider

Internally used by [z-view](/api/z-view.html), [z-spot](/api/z-spot.html) and [z-dialog](/api/z-dialog.html).

This component a circular slider. It is activated when is set to `true`. The value is proveded by prop.progress.

**Usage:**
```html
<z-view slider :progress="55">
</z-view>
```

**Props**

| Prop | Type | Default value | Required | Description
| :--- | :--- | :--- | :--- | :--- |
| `slider` | Boolean | False | False | When it is `true` the slider is activated.
| `progress` | Number | 0 | No | It's the initial slider value (0-100)

