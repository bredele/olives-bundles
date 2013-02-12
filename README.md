olives-bundles
==============

This is a showcase of what Olives.js is capable of. First you will need to install Olives.js.

### Install Olives.js

Olives requires an AMD/commonJS compatible loader. I use requirejs: http://requirejs.org/.

```html
	<script src="./require.js"></script>
	<script src="./Emily.js"></script>
	<script src="./Olives.js"></script>
```	

Olives.js is based on Emily.js. Both are located on this directory : https://github.com/flams.


## Change theme

https://github.com/bredele/olives-bundles/tree/master/change-theme

This example shows you how to quickly change the theme (css) of your application. It binds the href attribute of a stylesheet link with a Olives Store.

Here the HTML snippet:

```html
<link rel="stylesheet" href="theme/default.css" data-theme="bind:href,href">
```	

And the JavaScript: 

```js
require(["OObject", "Bind.plugin" , "Event.plugin"], function(Widget, Bind, Event){
	var widget = new Widget();
	widget.plugins.addAll({
		"theme" : new Bind(widget.model),
		"select" : new Event(widget)
	});

	widget.toggleTheme = function(event){
		//set store value with a select element
		widget.model.set("href", event.target.value);
	};
	widget.alive(document.documentElement);
});
```	

## Dynamically change lang

https://github.com/bredele/olives-bundles/tree/master/change-lang

This example shows you how to dynamically change the language of your application with the i18n plugin of requirejs (this plugin is not necessary).

```js
require(["OObject", "Bind.plugin" , "Event.plugin"], function(Widget, Bind, Event){
	var widget = new Widget();
	widget.plugins.addAll({
		"text" : new Bind(widget.model),
		"select" : new Event(widget)
	});

	widget.toggleLang = function(event){
		var path = "../libs/i18n!nls/" + event.target.value + "/root";
		//the lang can't be change dynamically with locale config
		require([path], function(root){
			widget.model.reset(root);
		});
	};
	widget.alive(document.body);
});
```	
It loads the wanted nls file every time a language is selected.

