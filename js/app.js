window.onload = app;

// runs when the DOM is loaded
function app() {

    // load some scripts (uses promises :D)
    loader.load({
            url: "./bower_components/jquery/dist/jquery.min.js"
        }, {
            url: "./bower_components/lodash/dist/lodash.min.js"
        }, {
            url: "./bower_components/backbone/backbone.js"
        }, {
            url: "./bower_components/pathjs/path.min.js"
        }

    ).then(function() {
        _.templateSettings.interpolate = /{([\s\S]+?)}/g;

        // start app?
    });

}

var singleFlower = Backbone.Model.extend({

    defaults: {
        color: "pink",
        img: "images/placeholder.jpg"
    },

    work: function() {
        return this.get('color') + ' is working.';
    }

});

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
