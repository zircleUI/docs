(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{200:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),s("p",[t._v("The first two lines "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import",target:"_blank",rel:"noopener noreferrer"}},[t._v("import"),s("OutboundLink")],1),s("strong",[t._v("zircle-ui")]),t._v(" and its css stylesheet file into vue.js."),s("br"),t._v("\nThe last line tells Vue to "),s("a",{attrs:{href:"https://vuejs.org/v2/guide/plugins.html#Using-a-Plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("use "),s("strong",[t._v("zircle-ui")]),t._v(" as a plugin"),s("OutboundLink")],1)]),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),s("p",[s("code",[t._v("z-canvas")]),t._v(" has just one property called "),s("strong",[t._v("views")]),t._v(" where you pass all your views. For the purposes of this tutorial we are going to put our views inside the components options of the Vue instance: "),s("a",{attrs:{href:"https://vuejs.org/v2/api/#vm-options",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("$options.components")]),s("OutboundLink")],1),t._v(". However there are "),s("router-link",{attrs:{to:"/api/z-canvas.html#how-to-pass-your-views-to-property-views"}},[t._v("many other ways to do that")]),t._v(".")],1),t._m(11),t._m(12),t._m(13),t._m(14),s("p",[t._v("For this app we are going to import a font from "),s("a",{attrs:{href:"https://fonts.google.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google fonts"),s("OutboundLink")],1),t._v(" and use some icon of "),s("a",{attrs:{href:"https://fontawesome.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Font Awesome"),s("OutboundLink")],1),t._v(".")]),t._m(15),t._m(16),t._m(17),t._m(18),s("p",[t._v("That's all, now check your browser. The app will now look much like this:")]),s("img",{staticStyle:{"margin-top":"20px",display:"block","margin-left":"auto","margin-right":"auto",width:"50%","border-radius":"6px"},attrs:{src:t.$withBase("/initial-home-view.png")}}),t._m(19),s("ul",[s("li",[s("router-link",{attrs:{to:"/guide/getting-started.html"}},[s("strong",[t._v("Guide: getting started")])])],1),s("li",[s("router-link",{attrs:{to:"/api/z-canvas.html"}},[s("strong",[t._v("z-canvas")])])],1),s("li",[s("router-link",{attrs:{to:"/api/z-view.html"}},[s("strong",[t._v("z-view")])])],1),s("li",[s("router-link",{attrs:{to:"/api/public-api.html#setview-viewname"}},[s("strong",[t._v("setView()")])])],1)]),t._m(20),t._m(21)])}),[function(){var t=this._self._c;return t("h1",{attrs:{id:"setup-main-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup-main-files","aria-hidden":"true"}},[this._v("#")]),this._v(" Setup main files")])},function(){var t=this._self._c;return t("p",[this._v("To start working on our "),t("strong",[this._v("smart home app")]),this._v(" we need to replace some code tht comes with  the default Vue starter app.")])},function(){var t=this._self._c;return t("h3",{attrs:{id:"include-zircle-ui-within-a-vue-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#include-zircle-ui-within-a-vue-project","aria-hidden":"true"}},[this._v("#")]),this._v(" Include zircle-ui within a vue project.")])},function(){var t=this._self._c;return t("p",[this._v("First, go to folder "),t("strong",[this._v("/src")]),this._v(" and replace the "),t("strong",[this._v("main.js")]),this._v(" code with the following one:")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-js extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" App "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./App.vue'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" zircle "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zircle'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zircle/dist/zircle.css'")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zircle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("productionTip "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("h")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$mount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this._self._c;return t("p",[this._v("In the "),t("strong",[this._v("main.js")]),this._v(" file we have added the highligthed lines:")])},function(){var t=this._self._c;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),t("p",[this._v("This initial setup will be the same for all your zircle's projects.")])])},function(){var t=this._self._c;return t("h3",{attrs:{id:"initial-zircle-ui-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#initial-zircle-ui-setup","aria-hidden":"true"}},[this._v("#")]),this._v(" Initial zircle-ui setup.")])},function(){var t=this._self._c;return t("p",[this._v("We need to edit the "),t("strong",[this._v("App.vue")]),this._v(" file and replace the code with this:")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("z-canvas")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":views")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("$options.components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("z-canvas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" home "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./views/home'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("components")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    home\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$zircle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'home'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string url"}},[t._v("'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string url"}},[t._v("'https://use.fontawesome.com/releases/v5.1.0/css/all.css'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t._self._c;return s("p",[t._v("In the "),s("code",[t._v("<template>")]),t._v(" tag we added the zircle's "),s("code",[t._v("z-canvas")]),t._v(" component. All your "),s("strong",[t._v("zircle-ui")]),t._v(" stuff will be rendered inside this component. "),s("code",[t._v("z-canvas")]),t._v(" could be considered as a frame in where "),s("strong",[t._v("zircle-ui")]),t._v(" lives. For this reason whenever you start a "),s("strong",[t._v("zircle-ui")]),t._v(" project, you need to use it.")])},function(){var t=this._self._c;return t("p",[this._v("Let's figure out what happens inside the "),t("code",[this._v("<script>")]),this._v(" tag. Here we imported a "),t("em",[this._v("no-yet-created")]),t("code",[this._v("home.vue")]),this._v(" file from the "),t("strong",[this._v("/views")]),this._v(" folder.")])},function(){var t=this._self._c;return t("p",[this._v("Then we to included our "),t("code",[this._v("home")]),this._v(" view inside "),t("code",[this._v("components")]),this._v(" vue instance.")])},function(){var t=this._self._c;return t("p",[this._v("Finally, we use the [vue hook "),t("strong",[this._v("mounted")]),this._v("]https://vuejs.org/v2/api/#mounted) to tell "),t("strong",[this._v("zircle-ui")]),this._v(" that the initial view is "),t("strong",[this._v("home")])])},function(){var t=this._self._c;return t("h3",{attrs:{id:"css-style"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-style","aria-hidden":"true"}},[this._v("#")]),this._v(" CSS style")])},function(){var t=this._self._c;return t("h3",{attrs:{id:"create-your-first-zircle-ui-view"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-your-first-zircle-ui-view","aria-hidden":"true"}},[this._v("#")]),this._v(" Create your first zircle-ui view.")])},function(){var t=this._self._c;return t("p",[this._v("It is time to create the "),t("strong",[this._v("home.vue")]),this._v(" file. This is simply a mockup view, in the next section we are going to improve this view.")])},function(){var t=this._self._c;return t("p",[this._v("In you editor create a "),t("strong",[this._v("home.vue")]),this._v(" file into "),t("strong",[this._v("/src/views/")]),this._v(" folder with the following code:")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("z-view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    Welcome to Smart Home Dashboard\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("z-view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this._self._c;return t("h3",{attrs:{id:"see"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#see","aria-hidden":"true"}},[this._v("#")]),this._v(" See")])},function(){var t=this._self._c;return t("h2",{attrs:{id:"next-steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#next-steps","aria-hidden":"true"}},[this._v("#")]),this._v(" Next steps")])},function(){var t=this._self._c;return t("p",[this._v("For our app it is neccesary to creates a bunch of views files that will be place in the "),t("strong",[this._v("/src/views")]),this._v(" folder. In each view you will learn some features of "),t("strong",[this._v("zircle-ui")]),this._v(".")])}],!1,null,null,null);s.default=n.exports}}]);