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

## Pagination

https://github.com/bredele/olives-bundles/tree/master/pagination

Olive.js allows you to render lists (see https://github.com/flams/olives/wiki/Plugin:-Model-plugin) with the Bind plugin.

This example shows how to paginate your list by setting limits of rendered items.

```html
<ul data-bind="foreach:items,0,10">
	<li data-bind="bind:innerHTML,name">This is an item renderer</li>
</ul>
```	
In this snippet, we display the first 10 items of the store associated to the bind plugin. An item (also called ItemRenderer) is a li markup with its innerHTML property binded to the model.

Note: The ItemRenderer is the first child of the markup with the **foreach** directive. It can be anything and not just ul li tags.

## Event delegation and Event mapping

https://github.com/bredele/olives-bundles/tree/master/event-delegation

Event delegation is a great pattern because it allows you to avoid adding event listeners on every node you need to listen. Imagine a list of 1000 items, let's say that something happend when an item is clicked. Instead listening each item (i.e adding 1000 event listeners) you can add one listener to the parent element and analyze bubbled events.

Adding event listeners is expensive (especially for mobile devices) and reduce their number is a good practice. Thankfully, Olives.js allows you to delegate your events with a simple dataset directive (Event plugin):

```html
<ul data-event="delegate:li.fired, mouseup, doSomething">
	<li class="fired">item1</li>
	<li>item1</li>
	<li class="fired">item1</li>
</ul>
```	
Moreover, the Event plugin allows you to apply CSS query selection on your event delegation. In the example above, only the mouse up on **li** elements with the **fired** class calls the **doSomething** function.

And there is more, the Event plugin allows you to map your events with touchable events or any events you want.

By default, if you pass true to the second argument of the constructor method of **Event.plugin**, the mouse events will be map with touch events as following:

```
mousedown : touchstart
mouseup : touchend
mousemove : touchmove
```	

Your will keep clean separation or concerns because your html will not change (ex: mouseup on your html will correspond to a touchend event listener).


