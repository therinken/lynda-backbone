var singleFlower = Backbone.Model.extend({
	
	defaults: {
	color: "pink",
	img: "images/placeholder.jpg"
	},

	work: function(){
		return this.get('color') + ' is working.';
	}

});