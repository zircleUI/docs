# Internal API
If you browse the zircle's source code you may notice that thare a bunch of $zircle functions. Below there is a descriptions of what they are. Usefull to understand how zircle works.


## Router API
### setRouter(router, view)
- **Params:**
    - {Object} router
    - {String} view

- **Descriptipn**
Invoked when the vue-router is enabled, after it has been set in **config**

### getRouterState()
Retrieves the router state.

- **Return**
  - Boolean.

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
Resolves view as [vue components](#)

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
Set direction of the zoomable navigation to 'forward' or 'backward'.

### getNavigationMode()
Returns the current navigation mode.

### getBackNavState()
Returns the current navigation mode.

### setBackNav(value)
**VER SI SIGUE SIRVIENDO**

### goBack()
Init a backward navigation.

## Position API
### getCurrentPosition()
Returns coords of the current view

### getPreviousPosition()
Returns coords of the previous view

### getPastPosition()
Returns coords of the past view

### getLastPosition()
Returns coords of the gone view

### calcPanelPosition()
Calculates the position of the view

### calcPosition(component)
calculates the position of the nested components of a view

### getComponentWidth(size)
- **Params:**
    - {string} size

- **Descriptipn**
Returns the value of a prop.size provided (e.g: 'small' => 140).

### getDimensions()
Recalculates the props.size of the components according the viewport when a resize event is detected. In case the app is in emedded mode, it will detect the canvas's width.

### getAppMode()
Returns the current app mode. 'full' or 'embedded'.

## Theme and Styles API
### getCurrentTheme()
Returns the current app theme. see the [built-in themes](#themes)

### getCurrentColor()
Returns the current color. see the [built-in colors](#colors)

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

## Debug API
### setLog(msg, type)
- **Params:**
    - {string} msg
    - {String} type

- **Descriptipn**
Internal debug logger activated vue [config](#setapp) that print messages to the browser's console.
It groups zircle's log when a navigation starts.


