# Design guide

::: tip

I'm currently working on **Zumly**, which is a step forward to create zoomable web apps. You can be one of the first to try **Zumly** by joining our mailing list!!

<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="https://zumly.us8.list-manage.com/subscribe/post?u=fd430ad308efc1ae2b7efc141&amp;id=2cc4c60414" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	
<div class="mc-field-group">
	<label for="mce-NAME">Name </label>
	<input type="text" value="" name="NAME" class="" id="mce-NAME">
</div>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address </label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_fd430ad308efc1ae2b7efc141_2cc4c60414" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[1]='NAME';ftypes[1]='text';fnames[0]='EMAIL';ftypes[0]='email';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->


More information at [zumly.org](https://zumly.org)

:::


The **Tizen team** has published an [awesome guide of design principles for their wearable ui](https://developer.tizen.org/design/wearable/design-principles). The following content is an adaptation of some useful tips that may help you when using **zircle-ui**.

## Design Principles

### Scannable
Apps using the zircle's circular shapes should show information at a glance. Design easily scannable apps so as to ensure smoother user interactions.

#### Focus on a central idea
Your app will have a greater impact when you focus on a simple, core idea. Place the main content in the center of the screen in a font large enough to draw the user’s attention. Excessive detail or features detract from the central theme, so keep it simple and streamline the flow between views. Increase your app’s scannability by allowing tasks to be completed in only a few steps.

#### Design your views to be readable
Graphic elements enhance the visibility of your main idea. They can also be more effective than several lines of text when conveying meaning. When you need to use text, select a font size that’s easily read.
 
### Easy to follow
Users should be able to control the **zircle-ui** app quickly and conveniently. Avoid making it complicated for users to complete their task. Consistent, meaningful and intuitive designs help users navigate views and orient themselves within your app. Avoid non-essential screens that require additional user interactions.

#### Suggest interactions intuitively
Intuitive and meaningful connections between interactions and components on the view can help users better understand the information and its context.

#### Keep a consistent visual theme
Deliver a consistent user experience throughout your app by maintaining visual continuity. Your views should have a consistent layout, brand color and font. Give your app one common theme that represents the content it provides.

### Source
"[Design Principles](https://developer.tizen.org/design/wearable/design-principles)" by [Tizen Project](https://www.tizen.org/about), used under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) / Adapted from original


## Layout types

### Radial
Radial layouts divide the screen into pie-shaped areas. Content is placed along the edge of the circle to guide the viewer’s eye along a circular path. This type of layout is useful when your content has a flow or when your elements are at similar hierarchy. Since elements are evenly spaced along the edge, you can fully utilize the space of the circular screen while also maintaining the balance of your design.

### Center
A centered approach places the main piece of content in the middle of the view. This layout maximizes readability. It delivers a simple message to users at a glance.

### Hybrid
Different layout types can be used together in one screen. This hybrid layout is useful when you need to express two sets of content hierarchies on one screen. Consider which content to show in the central area and along the circular edge. Avoid providing too much content in the central area.

### Source
"[Layout Patterns](https://developer.tizen.org/design/wearable/visual-design/layout-patterns)" by [Tizen Project](https://www.tizen.org/about), used under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) / Adapted from original

## Writing Style
Keep screen text simple and clear, but retain a sense of informality. Users should be able to navigate through your app quickly without having to read long passages of explanatory text.

### Messages
- Ask yourself what the purpose of a message is and what information you need to convey.

- Remove non-essential words.

- Don’t state the obvious.

- Use the active voice whenever possible to save space and make messages easier to understand. Avoid using negative words or expressions that blame the user.


### Source
"[Writing Style](https://developer.tizen.org/design/wearable/writing-style)" by [Tizen Project](https://www.tizen.org/about), used under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) / Adapted from original

