# Device

### Description
This is a generic view to display the device category selected in the **devices** view. This view retrieves the params given and shows them thank to the zircle ui action `getParams()`

### Reference
- rooms
- public API

### Code
Create a `device.vue` file inside the `views` folder and paste the following code:

```vue
<template>
  <z-view> {{retrieveParams}}
    <z-spot slot="extension"
      to-view='search'
      :distance='130'
      :angle='30'
      size='small' >
    </z-spot>
  </z-view>
</template>
<script>
/*eslint-disable*/
export default {
  computed: {
    retrieveParams () {
      if (this.$zircle.getParams() !== undefined) {
        return this.$zircle.getParams().fruit
      }
    }
  }
}
</script>

```
As we explain before, we create this view to show the details of our selected item. And we use `$zircle.getParams()` to retrieve the params.

This is not the only way . You can create specials view for each item as we did in rooms view.

::: tip
If you enable vue-router, its better to use $router.params to retrieve the params
:::

## Wire up

DOn t forget to import this component viees in app.vue
