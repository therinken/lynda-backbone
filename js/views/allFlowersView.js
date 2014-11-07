var AllFlowersView = Backbone.View.extend({

	tagName: "section",

	render: function(){
		this.collection.each(this.addFlower, this);
		return this;
	},

	addFlower: function(flower){
		var flowerView = new SingleFlowerView ({
			model: flower 
		});
		this.$el.append(flowerView.render().el);
	}

});