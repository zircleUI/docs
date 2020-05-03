# Introduction

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

In this tutorial, we are going to create a **simple dashboard for a smart home app**. By the end, you should have a basic understanding of **zircle-ui**. Have in mind that the dashboard is designed just for learning purposes and is not meant to be ready for production.

Some previous knowledge of [**vue.js**](https://vuejs.org) is recommended for this tutorial.

<img :src="$withBase('/smart-home.jpg')" style="margin-top: 20px; display: block; margin-left: auto; margin-right: auto; width: 100%;" />

If you don't want to follow this tutorial step-by-step, you can see the [app working in the examples section](/examples/home.html) or you can clone the dashboard to follow this tutorial. Open a terminal an type:

```bash
git clone https://github.com/zircleUI/tutorial.git
```

After cloning the repository, got to the smart-home folder and execute:

```bash
npm install
```

If you find a bug or find out that something is not clear enough, please file an issue or submit a pull request [on GitHub](https://github.com/zircleUI/tutorial).

## Credits

During this tutorial we are going to use the following awesome libraries:

- [**Font Awesome**](https://fontawesome.com/)
- [**Leaflet**](https://leafletjs.com/)
- [**Smoothie Charts**](http://smoothiecharts.org/)
