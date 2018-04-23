## z-list

**Description:** This component manages lists or collections of items.

**Usage:** Populate `collection` prop with an array of elements and define how many items per page you want to show in `per-page` prop. 
`<z-list>` use `slot-scope` of Vue to customize the template of each item. When you click or touch an item, a new view "Item" is called.

```html
<!-- MyList component -->
<z-list
  slot="circles"
  :collection="[{name: 'Apple', color: 'red', image: 'http://img.com/apple'}, {name: 'Banana', color: 'yellow' , image: 'http://img.com/banana'}]"
  :per-page="3">
    <z-item <!-- It is necesary to include z-item component-->
    slot-scope="props"
    :angle="props.angle" <!-- angle is currently mandatory -->
    :color="props.item.color" <!-- color, label, image are optional -->
    :label="props.item.name"
    :image="props.item.image"> 
    </z-item>
</z-list>
```
> **Note** In case you populate the `collection` prop with an external Array, first you have to create a copy of this Array to prevent mutation
```js
// MyList component
...
computed: {
    myresults () {
      // clone array before put en collection prop
      return this.sharedState.results.slice(0)
    }
  }
...
```

> **Note** To show the details of the selected item you have to create a new component with `<z-panel view="item">` and call the selected Item with  `this.$zircleStore.state.selectedItem`

```js
const item = {
  name: 'item',
  template: `<z-panel view="item">
  {{ item }}
  </z-panel>`,
  data () {
    return {
      sharedState: store.state,
      item: this.$zircleStore.state.selectedItem
    }
  }
}
```

**Props**

| Prop | Type | Default value | Required | Description
| :--- | :--- | :--- | :--- | :--- |
| `collection` | Array | undefined | True | An array with items.
| `perPage` | Number | undefined | True | The number of items per page.

**Mixin**

| Mixin | Type | Default value | Required | Description
| :--- | :--- | :--- | :--- | :--- |
| `color` | String | accent | False | This mixin gives the color of the `z-list`. Probably it will be deprecated since you can use style attributes to set you color.


## z-item

**Description:** This component works as a sub-component of `z-list` and represent each item displayed.

**Props**

| Prop | Type | Default value | Required | Description
| :--- | :--- | :--- | :--- | :--- |
| `size` | String | medium | True | The size of each item.
| `color` | String | accent | True | This mixin gives the color of the `z-item`. Probably it will be deprecated since you can use style attributes to set you color.
| `label` | String | '' | False | It is used to include a label that is situated below the component. 
| `image` | String | '' | No | It is used to include a url of an image that is situated as background of each item
| `item` | String, Object | '' | True | Is the prop that contains all current item data.
| `id` | String, Object | '' | False | Is id of the current item.
| `gotoview` | String | item | False | It the view name that Zircle opens when an item is clicked. You can put any other name, but you have to create an 'item' or 'your-view-name' component to show the details of the selected item.
| `angle` | Number | automatic | True | Is the angle of the `z-item`. Currently you don't need to edit this prop.


check this [JSFiddle](http://jsfiddle.net/tinchox5/az5cf0rd/)
