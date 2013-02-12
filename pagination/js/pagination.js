require(["OObject", "Bind.plugin" , "Event.plugin", "js/directory"], function(Widget, Bind, Event, Items){
	var widget = new Widget(),
		bind = new Bind(widget.model),
		nb = 10,
		setNb = function(idx){
			bind.updateStart("items", idx);
			bind.refresh("items");
		};

	//this can be done with a Olives Store
	widget.model.reset(Items);

	widget.plugins.addAll({
		"bind" : bind,
		"event" : new Event(widget)
	});

	widget.previous = function(event){
		if(nb > 11){
			setNb(nb - 20);
			nb = nb - 10;
		}
	};

	widget.next = function(event){
		if(nb < 100){
			setNb(nb);
			nb = nb + 10;
		}
	};
	widget.alive(document.body);
});