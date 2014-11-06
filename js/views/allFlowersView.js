var allFlowersView = Backbone.View.extend({

	tagName: "section",

	render: function(){
		this.collection.each(this.addFlower, this);
		return this;
	},

	addFlower: function(flower){
		var flowerView = new singleFlowerView ({
			model: flower 
		});
		this.$el.append(flowerView.render().el);
	}

});