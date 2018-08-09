# z-view-manager 

Internally used by [z-canvas](/api/z-canvas.html).

This component is the child component of `z-canvas` that controll which views are displayed. `z-view-manager` is wrapped by a [vue transition-group](https://vuejs.org/v2/api/#transition-group). 

Source code: 

**Props**

| Prop | Type | Default value | Required | Description
| :--- | :--- | :--- | :--- | :--- |
| `list` | Object | `z-canvas`'s prop.views | True | Takes `z-canvas` prop.views as input to manages the views
