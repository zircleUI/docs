# Devices

### Description
This is a very simple view that is shown in the home view. This view simulates a list of smart devices. We are going to use `z-list` component. BEsides that, we are going to pass an object with params in the property `toView` in order to open a *no-yet-created* **device** view (you can build this view in the next section)

### References

Most of code refres to:
- Rooms view
- Home view
- Slot.media
- Slot.extension

### Code
Create a `devices.vue` file inside the `views` folder and paste the following code:

```vue
<template>
  <z-view>
    <section slot="extension">
      <z-list
        :items="devices"
        :per-page="5">
          <z-spot
            slot-scope="props"
            :index="props.index"
            :to-view="{ name: 'device', params: { fruit: props.category}}"
            :label="props.category">
            <span style="color: white;">{{props.qty}}</span>
            <z-spot slot="extension"
              :style="props.category === 'care' ? 'background-color: red; border: none;': 'background-color: green; border: none;'"
              :angle='-45'
              size='xxs'>
            </z-spot>
          </z-spot>
      </z-list>
    </section>
</z-view>
</template>
<script>
export default {
  data () {
    return {
      devices: [
        {category: 'cameras & sensors', qty: 4},
        {category: 'care', qty: 1},
        {category: 'climate', qty: 2},
        {category: 'doors & locks', qty: 2},
        {category: 'energy', qty: 1},
        {category: 'garage doors', qty: 1},
        {category: 'home & family', qty: 6},
        {category: 'lawn & garden', qty: 0},
        {category: 'lights & switches', qty: 13},
        {category: 'smoke & co', qty: 3},
        {category: 'voice assistant', qty: 1},
        {category: 'water', qty: 1},
        {category: 'windows & blinds', qty: 3},
        {category: 'entertainment', qty: 3}
      ]
    }
  }
}
</script>
```


### Wiring up
After you finish this view you need to import it in the app.vue [as we did it here](/tutorial/wrapping-views.html)