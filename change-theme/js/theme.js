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