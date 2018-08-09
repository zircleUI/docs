# Rooms

## Description
This view displays the list of rooms of our home. Here we will learn how to use `z-list` component. Also, we are going to learn how to pass parameters to new view using `to-view` property. Finally we will se how to use `z-dialog`

## Code
Create a `rooms.vue` file inside the `views` folder and paste the following code:

```vue
<template>
  <z-view>
    Rooms
    <section slot="extension">
    <z-list
      :items="rooms"
      :per-page="3">
        <z-spot
          slot-scope="props"
          :distance="60"
          :index="props.index"
          :to-view="props.name"
          :label="props.name"
          :image-path="props.image">
          <z-spot slot="extension"
            v-if="props.status"
            style="background-color: red; border: none;"
            :angle='-45'
            size='xxs'>
          </z-spot>
        </z-spot>
    </z-list>
    <z-spot 
        button
        :angle="45"
        size="s"
        :distance="120"
        label="Add"
        @click.native="openDialog = true">
          <i class="fas fa-plus"></i>
      </z-spot>
      <z-dialog v-if="openDialog" self-close v-on:done="openDialog = false">
        Are your sure?
        <div slot=extension>
          <z-spot
          class="success" 
          button
          :angle="45"
          size="s"
          :distance="120"
          @click.native="openDialog = false">
            <i class="fas fa-check"></i>
          </z-spot>
          <z-spot
          class="danger"
          button
          :angle="135"
          size="s"
          :distance="120"
          @click.native="openDialog = false">
            <i class="fas fa-times"></i>
          </z-spot>
        </div>
      </z-dialog>
    <section>
</z-view>
</template>
<script>
export default {
  data () {
    return {
      rooms: [
        {name: 'Living', devices: 6, image: './living.jpg'},
        {name: 'Bedroom', devices: 2, status: 'alert'},
        {name: 'Kitchen', devices: 5},
        {name: 'Studio', devices: 1},
        {name: 'Bath', devices: 1}
      ]
    }
  }
}
</script>
```
## What the code does

### z-view
As usual we start with `z-view`. Inside it we place tha `z-list` component using slot extension.

### z-list
In this view we are using for first time the `z-list` component, that is usefull when you need to show a list of items. 

You have to populate the property `collection` with an array of elements and define how many items per page you want to show using the property `per-page`. 

`z-list` has two properties `list`, that is populated with an array of items (rooms), and `perPage` that defines the number of items dispalyed in each 'page'. By default `perPage` is set to show 5 items.

When the items are larger than a page the child component `z-list-pagination` is activated showing a dot navigation at the botton of the `z-list`

`<z-list>` uses [scoped slots](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots) to customize the template of each item. When you click or touch an item, a new view is called showing its details. 

### z-spot 
Inside `z-list` we use again our flexible `z-spot` to show each room. There are four things to highlight: 
  - No angle is needed because is calculated automatically.
  - We must use `slot-scope` vue feature.
  - we have to use the `z-spot` **index** prop.
  - In this example, we are passing an object with params in the **toView** prop.

- **toView property:**
It is possible to define a view to go for each item. To achieve that you need to use the property `toView`. We've already seen you can define a new view using just a `string` with the view name or you can pass params using an `object`.

In case you pass `params` **zircle-ui** allows to catch the params given using the **zircle-ui** action `getParams()` in your new view.

- **image-path prop:** we use for first time the `image-path` prop. Alternatively, we can use an `image slot`. In those cases the image will be treated as a background.

### z-dialog
It is time to learn `z-dialog`. This component will show a modal dialog when is activated. It has a **self-close** property that will close the dialog after a certain time. Here we use it to simulate a modal confirming the action of add a new room.

`z-dialog` will be rendered in case the variable **opendialog** is true. As we use the property **selfColse**, the dialog will closed after a few seconds or when the user press any of the buttons.


### See
- [**z-list**](/api/z-list.html)
- [**z-dialog**](/api/z-dialog.html)
- [**z-view**](/api/z-view.html)
- [**z-spot**](/api/z-spot.html)


