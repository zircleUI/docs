## z-scale

**Description:** This component is zoomable if you define the `gotoview` prop with the name of other views. Inside it you can nest many others elements such as `<z-scale>`, `<z-button>` or `<z-alert>`

**Usage:**

```html
<z-scale :slider=true
  :angle="45"
  :distance="140"
  size="medium"
  color="green"
  gotoview="bar">
  
  <!-- Default slot -->
  Bar

  <!-- Label slot -->
  <span slot="label">Go to Bar</span>

  <!-- Picture slot -->
  <img slot="picture" src="your/image.jpg" width="100%" height="100%" />

  <!-- Circles slot with single nested element -->
  <z-button
  slot="circles"
  :angle="45">
  Bar
  </z-button>

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
</z-scale>
```

**Props**

| Prop | Type | Default value | Required | Description
| :--- | :--- | :--- | :--- | :--- |
| `range` | Boolean | False | No | When it is `true` an interactive circular progress range is shown. Usefull to build controls like volume, dimmer, etc
| `slider` | Boolean | False | No | When it is `true` a circular progress bar is shown.
| `progress` | Number | 0 | No | progress works when range or slider are enabled and gives them the initial value

**Mixin**

| Mixin | Type | Default value | Required | Description
| :--- | :--- | :--- | :--- | :--- |
| `distance` | Number | 100 | False | Is the distance from the center of the `z-panel`. 100 means 100%.
| `angle` | Number | 0 | False | Is the angle of the `z-scale`. Accepts any number value positive or negative (ej: 345, -567)
| `size` | String | small | False | Represent the diameter of the `z-scale`component. Values: 'large', 'medium', 'small', 'extrasmall'
| `color` | String | primary | False | This mixin gives the color of the `z-scale`. Probably it will be deprecated since you can use style attributes to set you color.
| `gotoview` | String, Number | undefined | False | This works as a href. When put a View Name (ej: home) it goes to view Home.

**Slots:**

| Slot | Description
| :--- | :--- |
| `default` | Default Vue Slot. It is used to put any kind of content such as text, icons, etc. 
| `label` | It is used to include a label that is situated below the component. It is useful when the label is larger that the component.
| `picture` | It is used to insert one image as background inside the view container.
| `circles` | It is used when you nest other components such as `<z-scale>`, `<z-button>` or `<z-alert>` inside the view container.