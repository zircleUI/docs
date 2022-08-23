# Internal API
If you browse the [**zircle's source code**](https://github.com/zircleUI/zircleUI/tree/master/src) you may notice that there are a bunch of **$zircle** actions. Below, there is a descriptions of what they do. Useful to understand how **zircle-ui** works.

## Navigation API
### setComponentList(views)
- **Params:**
    - {Object} views

- **Descriptipn**
Store your views.

### getComponentList()
Retrieves the defined views.

### resolveComponent(views, view)
- **Params:**
    - {Object} views
    - {String} view

- **Descriptipn**
Resolves view as a  [vue component](https://vuejs.org/v2/guide/components-registration.html)

### getCurrentViewName()
Returns the current view's name.

### getPreviousViewName()
Returns the previous view's name.

### getPastViewName()
Returns the past view's name.

### getHistory()
Returns the zircle's browsing history

### getHistoryLength()
Returns the history's length

### setNavigationMode(value)
- **Params:**
    - {string} value

- **Descriptipn**
Set direction of the zoomable navigation to **forward** or **backward**.

### getNavigationMode()
Returns the current navigation mode.

### getBackwardNavigationState()
Returns the current navigation mode.

### goBack()
Init a backward navigation.

## Position API
### getCurrentPosition()
Returns coords of the current view

### getPreviousPosition()
Returns coords of the previous view

### getPastPosition()
Returns coords of the past view

### calcPanelPosition()
Calculates the position of the view

### calcPosition(component)
calculates the position of the nested components of a view

### getComponentWidth(size)
- **Params:**
    - {string} size

- **Descriptipn**
Returns the value of a prop.size provided (e.g: 'small' => 140).

### updateDiameters()
Recalculates the props.size of the components according the viewport when a resize event is detected. 
In case the app is in emedded mode, it will detect the canvas's width
If the app uses percentage sizes, it will use the canvas's width to determine the width of the new components.
In all cases, an adjustment of the width will be made according to the window.devicePixelRatio. This corrects positioning issues related to the OS scale and browser zoom.

## List API
### setPages(value)
Creates the pages of the collection

### getPages()
Returns the pages of the collection.

### getNumberOfPages()
Returns the number of pages according the prop.perPage.

### getCurrentPage()
Returns the items in the current page.

### getCurrentPageIndex()
Returns the index of the current page.

### setCurrentPageIndex(value)

### getNumberOfItemsInCurrentPage()
Returns the number of item in the current page.

## Router API
### setRouterHooks()
- **Descriptipn**
Invoked when the vue-router is enabled, after it has been set in [**$zircle.config()**](/api/public-api.html#config-definition)

### getRouterState()
Retrieves the router state.

- **Return**
  - Boolean.

## Debug API
### setLog(msg, type)
- **Params:**
    - {string} msg
    - {String} type

- **Descriptipn**
Internal debug logger can be activated with [**$zircle.config()**](/api/public-api.html#config-definition). Prints messages to the browser's console.

### getState()
- **Descriptipn**
Retrieves the **zircle-ui** state management



