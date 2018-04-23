## z-panel

**Description:** This component is the principal element to define a view. You can have many views in your project and each one with a `<z-panel>`component. Inside it you can nest many others elements such as `<z-scale>`, `<z-button>` or `<z-alert>`

**Usage:**

```html
<z-panel view="foo" color="red" :slider="true" :progress="95">
  <!-- Default slot -->
  Welcome to the Foo view

  <!-- Picture slot -->
  <img slot="picture" src="your/image.jpg" width="100%" height="100%" />

  <!-- Circles slot with single nested element -->
  <z-scale
  slot="circles"
  :angle="45"
  gotoview="bar">
  Bar
  </z-scale>

  <!-- Circles slot with multiple nested elements-->
  <section slot="circles">
    <z-scale
    :angle="45"
    gotoview="bar">
    Bar
    </z-scale>
    <z-button
    :angle="180">
    </z-button>
  </section>
</z-panel>`
```

**Props**

| Prop | Type | Default value | Required | Description
| :--- | :--- | :--- | :--- | :--- |
| `view` | String, Number | undefined | True | Is the View Name. It needs be the same name of you view component. It is not case sensitive
| `range` | Boolean | False | No | When it is `true` an interactive circular progress range is shown. Usefull to build controls like volume, dimmer, etc
| `slider` | Boolean | False | No | When it is `true` a circular progress bar is shown.
| `progress` | Number | 0 | No | progress works when range or slider are enabled and gives them the initial value

**Mixin**

| Mixin | Type | Default value | Required | Description
| :--- | :--- | :--- | :--- | :--- |
| `color` | String | primary | False | This mixin gives the color of the `z-panel`. Probably it will be deprecated since you can use style attributes to set you color.

**Slots:**

| Slot | Description
| :--- | :--- |
| `default` | Default Vue Slot. It is used to put any kind of content such as text, icons, etc. If its content is larger than the view container the sub component `<z-scroll>`, that is a circular scrollbar, is activated.
| `picture` | It is used to insert one image as background inside the view container.
| `circles` | It is used when you nest other components such as `<z-scale>`, `<z-button>` or `<z-alert>` inside the view container.
