var singleFlower = Backbone.Model.extend({
	
	defaults: {
	color: "pink",
	img: "./images/placeholder.jpg"
	},

	initialize: function() {
		console.log("An instance named " + this.get('name') + " has 
			been created and it costs " + this.get('price'));
	}

});
