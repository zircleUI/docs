(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{157:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("div",{staticClass:"content"},[t._m(0),t._m(1),s("img",{staticStyle:{clear:"right","margin-top":"20px",float:"right"},attrs:{src:t.$withBase("/z-list.png"),width:"250px"}}),s("p",[t._v("This component manages a list or collection of items. It works only inside "),s("code",[t._v("z-view")]),t._v(" component and you need to use with the "),s("code",[t._v("z-view")]),s("strong",[t._v("slot.extension")]),t._v(". In further releases it would be possible to extend "),s("code",[t._v("z-list")]),t._v(" to "),s("router-link",{attrs:{to:"/api/z-spot.html"}},[t._v("z-spot")]),t._v(" and "),s("router-link",{attrs:{to:"/api/z-dialog.html"}},[t._v("z-dialog")]),t._v(".")],1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),s("p",[s("code",[t._v("<z-list>")]),t._v(" uses "),s("a",{attrs:{href:"https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots",target:"_blank",rel:"noopener noreferrer"}},[t._v("scoped slots"),s("OutboundLink")],1),t._v(" to customize the template of each item. When you click or touch an item, a new view is called showing its details.")]),t._m(8),t._m(9),t._m(10),s("p",[t._v("In the tutorial there are some examples if you want to see it in action:")]),s("ul",[s("li",[s("router-link",{attrs:{to:"/tutorial/rooms-view.html"}},[t._v("Rooms")])],1),s("li",[s("router-link",{attrs:{to:"/tutorial/devices-view.html"}},[t._v("Devices")])],1)]),s("p",[t._v("In case you pass "),s("code",[t._v("params")]),s("strong",[t._v("zircle-ui")]),t._v(" allows to catch the params given using "),s("router-link",{attrs:{to:"/api/public-api.html#getparams-definition"}},[t._v("$zircle.getParams()")]),t._v(" in you items view.")],1),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17)])}),[function(){var t=this._self._c;return t("h1",{attrs:{id:"z-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#z-list","aria-hidden":"true"}},[this._v("#")]),this._v(" z-list")])},function(){var t=this._self._c;return t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[this._v("#")]),this._v(" Description")])},function(){var t=this._self._c;return t("h3",{attrs:{id:"populate-your-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#populate-your-list","aria-hidden":"true"}},[this._v("#")]),this._v(" Populate your list")])},function(){var t=this._self._c;return t("p",[t("code",[this._v("z-list")]),this._v("has a property named "),t("code",[this._v("items")]),this._v(" to manage a list of items. The list has to be an "),t("code",[this._v("array")]),this._v(".")])},function(){var t=this._self._c;return t("h3",{attrs:{id:"items-por-page"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#items-por-page","aria-hidden":"true"}},[this._v("#")]),this._v(" Items por page")])},function(){var t=this._self._c;return t("p",[this._v("Thanks to the property "),t("code",[this._v("perPage")]),this._v(" you can define how many items are displayed en each page. By default "),t("code",[this._v("perPage")]),this._v(" is set to show 5 items.")])},function(){var t=this._self._c;return t("p",[this._v("When the items are more than one page the child component "),t("code",[this._v("z-list-pagination")]),this._v(" is activated showing a dot navigation at the botton of the "),t("code",[this._v("z-list")])])},function(){var t=this._self._c;return t("h3",{attrs:{id:"customizing-items"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#customizing-items","aria-hidden":"true"}},[this._v("#")]),this._v(" Customizing items")])},function(){var t=this._self._c;return t("p",[this._v("As you maybe have noted, each item is a "),t("code",[this._v("z-spot")]),this._v(" so its same properties applies here. However, there is an especial property you need to define: "),t("code",[this._v("index")])])},function(){var t=this._self._c;return t("h3",{attrs:{id:"items-view"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#items-view","aria-hidden":"true"}},[this._v("#")]),this._v(" Items view")])},function(){var t=this,s=t._self._c;return s("p",[t._v("It is possible to define a view to go for each item. To achieve taht you need to use the property "),s("code",[t._v("toView")]),t._v(". This property has the same behavouir that "),s("code",[t._v("z-spot")]),t._v(". Thats means that you can define a view using just a "),s("code",[t._v("string")]),t._v("or you can pass params using an "),s("code",[t._v("object")]),t._v(".")])},function(){var t=this._self._c;return t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this._self._c;return t("p",[this._v("Populate the property "),t("code",[this._v("items")]),this._v(" with an array of elements and define how many items per page you want to show using the property "),t("code",[this._v("per-page")]),this._v(".")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-vue extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("z-view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("z-list")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slot")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("extension"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":items")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("collection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":per-page")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("z-spot")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slot-scope")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":index")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("props.index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":to-view")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ name: 'device', params: { fruit: props.category}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("z-spot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("z-list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("z-view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("collection")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Apple'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Apple1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'green'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Apple2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yellow'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Apple3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'purple'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this._self._c;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),t("p",[this._v("To show the details of the selected item you have to create a new view. In this case a view named "),t("code",[this._v("device")]),this._v(". If you don't to it, when you click to see the items details an internal "),t("code",[this._v("404")]),this._v(" view will appear.")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" device "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("template")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<z-view>\n  {{ item }}\n  </z-view>")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$zircle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getParams")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fruit\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this._self._c;return t("h2",{attrs:{id:"props"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[this._v("#")]),this._v(" Props")])},function(){var t=this,s=t._self._c;return s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Prop")]),s("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),s("th",{staticStyle:{"text-align":"left"}},[t._v("Default value")]),s("th",{staticStyle:{"text-align":"left"}},[t._v("Required")]),s("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("collection")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("undefined")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("True")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("An array with items.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("perPage")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("False")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("The number of items per page.")])])])])}],!1,null,null,null);s.default=n.exports}}]);