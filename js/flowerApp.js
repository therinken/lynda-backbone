
var singleFlower = Backbone.Model.extend({});
var FlowersCollection = Backbone.Collection.extend({});
var allFlowersView = Backbone.View.extend({});
var flowerRouter = Backbone.Router.extend({});


var redRoses = new singleFlower({
    name: "Red Roses",
    price: 39.95,
    color: "Red",
    img: "images/redRoses.jpg",
    link: "redRose"
});

var rainbowRoses = new singleFlower({
    name: "Rainbow Roses",
    price: 29.95,
    color: "orange",
    link: "rainbowRose"
});

var heirloomRoses = new singleFlower({
    name: "Heirloom Roses",
    price: 19.95,
    img: "images/heirloomPinkRoses.jpg",
    link: "heirloomRose"
});

var flowerGroup = new FlowersCollection([
    redRoses, rainbowRoses, heirloomRoses
]);

var flowerGroupView = new allFlowersView({
	collection: flowerGroup
});

$("#allFlowers").html(flowerGroupView.render().el);

var flowerRouter = new Router();

Backbone.history.start();
