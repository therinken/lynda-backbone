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
	img: "images/heirloomRoses.jpg",
	link: "heirloomRose"
});

rainbowRoses.set('price', 20);