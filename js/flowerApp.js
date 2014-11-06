var singleFlower = Backbone.Model.extend({});
var FlowersCollection = Backbone.Collection.extend({});
var AllFlowersView = Backbone.View.extend({});

var redRoses = new singleFlower({
    name: "Red Roses",
    price: 39.95,
    color: "Red",
    img: "./images/redRoses.jpg",
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
    img: "./images/heirloomRoses.jpg",
    link: "heirloomRose"
});

var tantalizingTulips = new singleFlower({
    name: "Tantalizing Tulips",
    price: 15.98,
    color: "purple"
});

var fleurDeLis = new singleFlower({
    name: "Fleur-de-lis",
    price: 25.50,
    color: "white",
    originCountry: "Holland"
});

var flowerGroup = new FlowersCollection([
    redRoses, rainbowRoses, heirloomRoses, 
    tantalizingTulips, fleurDeLis
]);

var flowerGroupView = new AllFlowersView({
	collection: flowerGroup
});

$("#allFlowers").html(flowerGroupView.render().el);
