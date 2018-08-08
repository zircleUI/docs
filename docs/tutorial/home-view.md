# Home

## Description
Let's begin with the **home view**, that is the initial view of our app. In this view we are going to show the most relevant options of the dashboard. Each option, that will be represented by a small circle ([**z-spot**](/api/z-spot.html)) allows us to zoom-in to another view.


## Code
To start with, go to **/src/views** folder, open our **home.vue** file and replace the previous code with the following one:

```vue
<template>
  <z-view label="zircle demo" label-pos="bottom">
  11:53 PM
  <br>
  Monday, Oct.
  <br>
  <br>
  <h1>{{scene}}</h1>
  <br>
  Outside 29˚C, sunny
  <br>
  Inside 25˚C
    <div slot="extension">
      <!-- status monitor -->
      <z-spot
        style="background-color: orange; border-width: 4px; border-color: var(--background-color);"
        :angle="-145"
        size="m"
        :distance="120"
        to-view="status">
        <i style="color: var( --accent-text-color)" class="fas fa-bell"></i><br>
        <span style="color: var( --accent-text-color)">15</span>
      </z-spot>
      <!-- family-->
      <z-spot
        :angle="-30"
        size="s"
        :distance="120"
        label="family"
        label-pos="top"
        to-view="maps">
        <i class="fas fa-map-marker-alt"></i>
      </z-spot>
      <!-- scenes-->
      <z-spot
        :angle="0"
        size="s"
        :distance="120"
        label="scenes"
        label-pos="right"
        to-view="scenes">
        4
      </z-spot>
      <!-- rooms-->
      <z-spot
        :angle="30"
        size="s"
        :distance="120"
        label="Rooms"
        label-pos="right"
        to-view="rooms">
        5
      </z-spot>
      <!-- devices-->
      <z-spot
        :angle="60"
        :distance="120"
        size="s"
        label="Devices"
        label-pos="right"
        to-view="devices">
        45
      </z-spot>
      <!-- settings-->
      <z-spot
        :angle="150"
        :distance="120"
        size="s"
        label="Settings"
        to-view="settings">
        <i class="fas fa-sliders-h"></i>
      </z-spot>
    </div>
  </z-view>
</template>
```

## What the code does
As you may noticed the code seems to be verbose and repetitive. That's true. In this view is intended, but in the following views we are going to use [**v-for**](https://vuejs.org/v2/guide/list.html#Mapping-an-Array-to-Elements-with-v-for) to optimize the code.

### z-view
Always you define a view you have to use `z-view` as the main component. This is will be the main circle on the screen. 

- **Label prop:** We use the `label` property to add a title to the view: "Smart Home Dashboard".

- **Size prop:** By design, `z-view` adopts the largest diameter available in **zircle ui**. However, depending on your needs you can use the property `size` and choose any of the possible values: 
  - **xxl**
  - **xl**
  - **l** or **large**
  - **m** or **medium**
  - **s** or **small**
  - **xs** 
  - **xxs**

- **Default slot:** As you see there is some content that appears inside the `z-view` container. This content is catched by a vue `slot.default`. In this case we put a welcome message with some mocked data: current time, outside and inside temperature and the current active scene.
You can learn more about **slots** [ on the official Vue documentation](https://vuejs.org/v2/guide/components-slots.html).

- **Extension slot:** After that, we nest some **zircle ui** components in `z-view` using the `z-view` **slot.extension**. In this case we create a wrapper using a  `div` element with the **slot.extension** and inside it we put several `z-spot`.  In case you have just on **zircle ui** component to nest in, you can add `slot="extension"` in the zircle component. 
For example:
```html
<z-view>
  <z-spot slot="extension">
  </z-spot>
</z-view>
```

### z-spot
As you see, each `z-spot` has its own properties: `angle`, `distance`, `size`, `to-view`, `label`, `label-pos`. 

- **Angle prop:** `angle` and `distance` toghether allow us to positionate the `z-spot`. The angle value could be any number between 0 and 360 (negatives values are accepted too). By default, the angle is '0'. At the begining it may take some effort to understand which angle choose. The following diagram may help you:

<img :src="$withBase('/angles.png')" style="margin-top: 20px; display: block; margin-left: auto; margin-right: auto; width: 50%;"/>


- **Distance prop:** The property `distance` measures the percentaje of distance of the parent component (in this case `z-view`). 
All our z-spots have a value of '120'. That it means that the center of the `z-spot` will be at 120% of distance of the center of `z-view`. If you don't specify the property `distance`, the value by default will be '100'.

- **Size prop:** `size` is another important property. It represents the diameter of the `z-spot`. As **zircle ui** is responsive, we can't specify a numerical value. Instead the values are:
  - **xxl**
  - **xl**
  - **l** or **large**
  - **m** or **medium**
  - **s** or **small**
  - **xs** 
  - **xxs**

By default, the size of `z-spot` is **medium**.

- **toView prop:** `to-view` is the property that allow us to go to another defined view. It is a kind of link. In this view we have defined some `to-view` with the name of views that we are going to create soon. Please take note that `to-view` also accepts **params** and and works seamless with vue-router (if you use it). You can learn more about `to-view` [in the documentation](/api/z-spot.html#zoom-in-to-a-new-view).

- **Label prop:** `label` allows us to add titles to `z-spot`. Very usefull if you use `z-spot` with small sizes (Equal or lower than medium). 

- **LabelPos prop:** You can positionate your labels with the `label-pos` property. The options are **top**, **left**, **bottom** (default), **right**

### CSS Styles
In some `z-spot` we used a **`style` attributte** to customize its appearence. Although, you can add whatever css style you desire, there are some very usefull: **border-color**, **background-color** and **color**. You can put the color you want or [use the css variables](/guide/themes-styles-and-colors.html) provided by **zircle ui**

For other projects you can use a **`class` attributte** as well

That's all. Save the **home.vue** file and check your browser.


### See:
- [z-view](/api/z-view.html)
- [z-spot](/api/z-spot.html)
- [Themes and styles](/guide/themes-styles-and-colors.html)



