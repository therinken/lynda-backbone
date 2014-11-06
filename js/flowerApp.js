var singleFlower = Backbone.Model.extend({});
var FlowersCollection = Backbone.Collection.extend({});

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
    color: "white"
});

var europeanFlower = new FlowersCollection([
    tantalizingTulips, fleurDeLis
])

var flowerGroup = new FlowersCollection([
    redRoses, rainbowRoses, heirloomRoses
]);

fleurDeLis.set({
    originCountry: "Holland"
});

console.log(flowerGroup.toJSON());
console.log(europeanFlower.toJSON());
