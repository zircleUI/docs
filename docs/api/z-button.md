## z-button

**Description:** This component is a button. Inside it you can nest many others elements such as `<z-scale>`, `<z-button>` or `<z-alert>`

**Usage:**

```html
<z-button
  :angle="45"
  :distance="140"
  size="small"
  color="success"
  @click.native="your method or inline expression">
  
  <!-- Default slot -->
  Press me

  <!-- Label slot -->
  <span slot="label">Turn on systems</span>

  <!-- Circles slot with single nested element -->
  <z-button
  slot="circles"
  :angle="45">
  onother button
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
</z-button>
```

**Props:**

none

**Mixin**

| Mixin | Type | Default value | Required | Description
| :--- | :--- | :--- | :--- | :--- |
| `distance` | Number | 100 | False | Is the distance from the center of the `z-panel`. 100 means 100%.
| `angle` | Number | 0 | False | Is the angle of the `z-button`. Accepts any number value positive or negative (ej: 345, -567)
| `size` | String | small | False | Represent the diameter of the `z-button`component. Values: 'large', 'medium', 'small', 'extrasmall'
| `color` | String | primary | False | This mixin gives the color of the `z-button`. Probably it will be deprecated since you can use style attributes to set you color.

**Slots:**

| Slot | Description
| :--- | :--- |
| `default` | Default Vue Slot. It is used to put any kind of content such as text, icons, etc. 
| `label` | It is used to include a label that is situated below the component. It is useful when the label is larger that the component.
| `circles` | It is used when you nest other components such as `<z-scale>`, `<z-button>` or `<z-alert>` inside the view container.