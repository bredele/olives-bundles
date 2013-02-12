require(["OObject", "Event.plugin"], function(Widget, Event){
	var widget = new Widget();
	widget.plugins.add("event", new Event(widget));
	widget.alert = function(event){
		alert( event.target.innerText + " has been fired");
	};
	widget.alive(document.body);
});