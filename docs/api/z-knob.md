# z-knob

Used internally by `z-spot`

As its name suggests this component display an interactive range knob. Usefull to create controls like volumes, dimmers, etc. The current value is shown as a label.

**Usage:**
```html
<z-range
  :angle="45"
  :distance="140"
  size="medium">
</z-range>
```
**Props**

| Prop | Type | Default value | Required | Description
| :--- | :--- | :--- | :--- | :--- |
| `range` | Boolean | True | True | When it is `true` child component [z-range-bar](#z-range-bar) is activaded.
| `progress` | Number | 0 | No | Progress works when range is enabled. It's the initial value

**Mixin props**

| Mixin| Type | Default value | Required | Description
| :--- | :--- | :--- | :--- | :--- |
| `color` | String | 'accent' | false | Applies the [color of app theme](/guide/themes-styles-and-colors.html). You can override it by a class or style attribute.
| `imagesrc` | String | primary | False | Use this mixin to provide a path to an image.
| `label` | String | primary | False | This mixin provides a label which is situated at the bottom of the view. 

**Slots:**

| Slot | Description
| :--- | :--- |
| `default` | Default Vue Slot. It is used to put any kind of content such as text, icons, etc. 
| `label` | It is used to include a label that is situated below the component. It is useful when the label is larger than the component.
| `image` | It is used to insert one image as background inside the view container.
| `extension` | It is used when you nest other components such as `<z-scale>`, `<z-button>` or `<z-alert>` inside the view container.
