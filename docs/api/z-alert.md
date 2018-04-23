## z-alert

**Description:** This component show a pop up when is invoked. Inside it you can nest many others elements such as `<z-scale>`, `<z-button>` or `<z-alert>`

**Usage:**

```html
<z-popup v-if="alert === true" >
    <!-- Default slot-->
    proceed?

     <!-- Circles slot with multiple nested elements-->
     <section slot="circles">
        <z-button
          :distance="115"
          :angle='135'
          color='danger'
          size='small'
          @click.native='alert = false'>
            Close
        </z-button>
        <z-button
          :distance="115"
          :angle='45'
          color='success'
          size='small'
          @click.native='alert = false'>
            Accept
        </z-button>
    </section>
</z-popup>
```


**Props:**
none

***Mixin***

| Mixin | Type | Default value | Required | Description
| :--- | :--- | :--- | :--- | :--- |
| `color` | String | primary | False | This mixin gives the color of the `z-alert`. Probably it will be deprecated since you can use style attributes to set you color.

**Slots:**

| Slot | Description
| :--- | :--- |
| `default` | Default Vue Slot. It is used to put any kind of content such as text, icons, etc.
| `label` | It is used to include a label that is situated below the component. It is useful when the label is larger that the component.
| `circles` | It is used when you nest other components such as `<z-scale>`, `<z-button>` or `<z-alert>` inside the view container.
