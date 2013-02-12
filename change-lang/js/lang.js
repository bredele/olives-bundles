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