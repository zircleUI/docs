---
sidebarDepth: 2
---

# z-dialog

## Description
This component show a dialog on the top of any **zircle ui** component when is invoked. Inside it you can nest only `<z-spot>` components. In further realeases this could be extended to another **zircle ui** components.

By default, `z-dialog` will be open until the user manually closed it.

This is a `modal` view.
 
### Self close dialog
However it is possible to add the property `selfClose` and in this case the `z-dialog` will be closed after 3 seconds when a circular `z-slider` is completed and the `z-dialog` event `done` is triggered. This is done by a vue `$emit`.

```html
<z-dialog 
  v-if="dialog"
  self-close
  @done = "dialog = false">
</z-dialog>
```

## Usage
In you view's Vue instance add `$data.dialog` (or your prefered name) and set it to `false`. This way the `z-dialog` is not rendered. When dialog is set `true` the dialog will be rendered until the user closed it or self closed if it is enabled.

```js
/* ... */
data () {
  return {
    dialog: false
  }
}
/* ... */
```
```html
<z-dialog 
  v-if="dialog"
  >
    <!-- default slot-->
    proceed?
    <z-spot
      button
      slot="extension"
      :angle=45'
      size='small'
      @click.native='dialog = false'>
      Close
    </z-spot>
</z-dialog>
```
## Props

| Prop | Type | Default value | Required | Description
| :--- | :--- | :--- | :--- | :--- |
| `selfClose` | Boolean | false | No | When it is true an the component will self closed after a while and a slider is shown.

## Slots

| Slot | Description
| :--- | :--- |
| `default` | Default Vue Slot. It is used to put any kind of content such as text, icons, etc.

