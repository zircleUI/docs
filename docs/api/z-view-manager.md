# z-view-manager 

Used internally by `z-canvas`.

This component is the child component of `z-canvas` that controll which views are displayed. `z-canvas-view-manager` is wrapped by a vue transition-group. 

Source code: 

**Props**

| Prop | Type | Default value | Required | Description
| :--- | :--- | :--- | :--- | :--- |
| `list` | Object | `z-canvas`'s prop.views | True | Takes `z-canvas` prop.views as input to manages the views
