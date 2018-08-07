# Scenes

## Description
Here we'll create some scenes (day, night, at home, away) to simulate how our app controls the devices. We'll learn how to interact with a circular slider of `z-view` and some `z-spots` buttons.

## Code
As we did previously, create a `scenes.vue` file inside the `views` folder and paste the following code:

```vue
<template>
  <z-view
  label="Scenes"
  slider
  :progress="progress"
  :style="styleActive">
    <h1>{{activeScene}}</h1>
    <div style="height: 60px;">
      {{msg}}
    </div>
    <div slot="extension">
        <z-spot
          v-for="(el, index) in elements"
          button
          size="s"
          :distance="120"
          :angle="325 + (90 / elements.length * index)"
          :style="activeScene === el.scene ? styleActive : ''"
          :key="index"
          @click.native="showMe(el)">
          <i class="fas" :class="el.icon"></i>
        </z-spot>
    </div>
  </z-view>
</template>
<script>
export default {
  data () {
    return {
      activeScene: 'Night',
      color: 'blue',
      msg: '',
      progress: 0,
      elements: [
        {scene: 'Day', color: 'orange', icon: 'fa-sun', msg: 'Cooling rooms, blinds opened, playing ambient music'},
        {scene: 'Night', color: 'blue', icon: 'fa-moon', msg: 'Blinds closed, AC in silence mode, motion sensors active'},
        {scene: 'Away', color: 'red', icon: 'fa-shield-alt', msg: 'Alarm armed, cameras activated, blinds closed'},
        {scene: 'At home', color: 'green', icon: 'fa-home', msg: 'Lights in ambient mode, playing relax music, coffee is being prepared'}
      ]
    }
  },
  computed: {
    styleActive () {
      return {
        borderWidth: '8px',
        borderColor: this.color,
        color: this.color
      }
    }
  },
  methods: {
    showMe (el) {
      if (this.activeScene !== el.scene) {
        this.progress = 5
        this.activeScene = el.scene
        this.color = el.color
        this.msg = 'Activating devices...'
        var vm = this
        var id = setInterval(function () {
          if (vm.progress >= 100) {
            clearInterval(id)
            vm.progress = 0
            vm.msg = el.msg
          } else if (vm.progress === 40) {
            vm.msg = 'Applying rules...'
            vm.progress++
          } else {
            vm.progress++
          }
        }, 20)
      } else {
        this.msg = 'This scene is already activated'
      }
    }
  }
}
</script>
```

## What the code does
Don't panic! Most of the code is similar to `settings` view. But here we interact with a circular slider that is activated whenever the scene mode is changed to simulate the time required to activate it.

Also, we are going to dynamically compute the angles of each `z-spot` with a usefull trick. 

### z-view

In `z-view` we'll use two new properties that work together: `slider` and `progress`. 

`slider` is a circular bar that runs over the perimeter of `z-view` according the value (0-100) of `progress`.

In this example, the shoMe() method modifies the progress property value using a js `setInterval`

### z-spot
As we did on previous views, we are using `z-spot` with `v-for` to iterate over our `scenes`. We set the `z-spots` as buttons and define its proparties. 

#### The angle approach
Previously, in the `settings` view we added a field `angle`in the array `elements`, but in real life maybe we can't do that with an existing collection. To solve that we have to tell `angle` that compute the correct angle for each `z-spot` depending on the length of `scenes`, and other parameters.

```html{2}
<!-- ... -->
  :angle="325 + (90 / elements.length * index)"
<!-- ... -->
```

- **'325'** is the offset angle. It is the initial angle where each angle is calculated. In this case 325.

- **'90'** indicates the degree range to distribute the angles. In other words, we want all elements distributed along 90 degress.

- **'elements.length'** counts all scenes we have, that are multiplied by the current index.
That is a very granular formule to defines the angles for our `z-spots`. Depending on your needs, you can simplify it. For instance, if you want to uniformely distribute a bunch of z-spots around the parent element simply do this: `:angle="(360 / elements.length * index)"`. You can define another angle (180, 270, etc). It's up to you.

#### showMe() method
Finally, we have a method called `showMe()`. This method is activated when a `z-spot` is clicked and runs a timer to increment the `progress` property. When `progress` has reached 40 we simulate that some rules are applied. 

