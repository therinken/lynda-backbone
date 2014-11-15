
    window.onload = App;

    // runs when the DOM is loaded
    function App(){

        // load some scripts (uses promises :D)
        loader.load(
            {url: "./bower_components/jquery/dist/jquery.min.js"},
            {url: "./bower_components/lodash/dist/lodash.min.js"},
            {url: "./bower_components/backbone/backbone.js"},
            {url: "./bower_components/pathjs/path.min.js"},
            {url: "./js/models/singleFlowerModel.js"},
            {url: "./js/views/singleFlowerView.js"},
            {url: "./js/views/allFlowersView.js"},
            {url: "./js/collections/allFlowers.js"},
            {url: "./js/routes/router.js"},
            {url: "./js/flowerApp.js"}
                
        ).then(function(){
            _.templateSettings.interpolate = /\{([\s\S]+?)\}/g;

            // start app?
        });

    }