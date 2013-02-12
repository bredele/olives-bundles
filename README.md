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

```html
	<link rel="stylesheet" href="theme/default.css" data-theme="bind:href,href">
```	


```js
require(["OObject", "Bind.plugin" , "Event.plugin"], function(Widget, Bind, Event){
	var widget = new Widget();
	widget.plugins.addAll({
		"theme" : new Bind(widget.model),
		"select" : new Event(widget)
	});

	widget.toggleTheme = function(event){
		widget.model.set("href", event.target.value);
	};
	widget.alive(document.documentElement);
});
```	