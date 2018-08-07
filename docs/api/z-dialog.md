---
sidebarDepth: 2
---

# z-dialog

## Description
This component show a dialog on the top of any zircle component when is invoked. Inside it you can nest only `<z-spot>` components. In further realeases this could be extended to another zircle components.

By default, `z-dialog` will be open until the user manually closed it. 

### Self close dialog
However it is possible to add the property `selfClose` and in this case the `z-dialog` will be closed after 3 seconds when a circular `z-slider` is completed and the `zidialog`event `done` is triggered. Tis is done by a vue `$emit` so, in you dialog you have to tell that on done is emitted, athe dialog close.

```html
<z-dialog 
  v-if="dialog"
  self-close
  @done = "dialog = false">
</z-dialog>
```

## Usage
In you view's Vuw instance add `$data.dialog`  (or your prefered name) and set it to `false`. This way the `z-dialog` is not rendered. When dialog is set `true` the dialog will be rendered until the user closed it or self closed if it enabled.

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

