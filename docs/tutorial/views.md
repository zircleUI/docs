# Introduction
We have already done the setup of our app and created a mockup screen with a welcome message. Now it's time to create more interesting views to get familiar about how to use **zircle ui**. Each view has some **zircle ui** features that you may use in other zircle's projects.

During this section you will note that some code is not directly related with **zircle ui** itself, but to vue and its logic. 

### Views
- **Home:** Although we have already created this initial view, here we are going to enriched it! The idea is to understand how to build a **zircle ui** view and organice its components.
We'll learn how to use [**z-view**](/api/z-view.html) components to define the main circle of the screen and [**z-spot**](/api/z-spot.html) to create some buttons and view controllers.

- **Settings:** In this view we are going to include a [**z-spot**](/api/z-spot.html) component running as **button**. We'll add a [**vue v-for directive**](https://vuejs.org/v2/guide/list.html#Mapping-an-Array-to-Elements-with-v-for) to render a list of visual themes that comes with **zircle ui**. Also, we'll learn how to use some [**zircle ui actions**](/api/public-api.html) to set and retrieve themes.

- **Scenes:** Here we'll create some scenes (day, night, at home, away) to simulate how our app controls the devices. We'll learn how to interact with a circular slider of [**z-view**](/api/z-view.html) and some **z-spots** buttons.

- **Family:** This view shows the location of the family members in a [**leaflet.js**](#) map. We'll learn how to integrate three-party libraries into **zircle ui** using the **slot.media** of [**z-view**](/api/z-view.html).

- **Rooms:** This view display the list of rooms of our home. We'll learn how to use **z-list** component and to customize the items. Also, we are going to use the **z-dialog** component.

- **Living room:** This view simulates the devices present in the living-room. Here we'll learn how to customize [**z-view**](/api/z-view.html) and to use [**z-spot**](/api/z-spot.html) as a circular **knob** to control the temperature of the air conditioner. Also, we are going to set up some scenes to control de devices.


