
var SingleFlower = Backbone.Model.extend({});
var FlowersCollection = Backbone.Collection.extend({});
var AllFlowersView = Backbone.View.extend({});
var Router = Backbone.Router.extend({});


var redRoses = new SingleFlower({
    name: "Red Roses",
    price: 39.95,
    color: "Red",
    img: "images/redRoses.jpg",
    link: "redRose"
});

var rainbowRoses = new SingleFlower({
    name: "Rainbow Roses",
    price: 29.95,
    color: "orange",
    link: "rainbowRose"
});

var heirloomRoses = new SingleFlower({
    name: "Heirloom Roses",
    price: 19.95,
    img: "images/heirloomPinkRoses.jpg",
    link: "heirloomRose"
});

var flowerGroup = new FlowersCollection([
    redRoses, rainbowRoses, heirloomRoses
]);

var flowerGroupView = new AllFlowersView({
	collection: flowerGroup
});

$("#allFlowers").html(flowerGroupView.render().el);

var flowerRouter = new Router();

Backbone.history.start();
