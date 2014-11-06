
    window.onload = app;

    // runs when the DOM is loaded
    function app(){

        // load some scripts (uses promises :D)
        loader.load(
            {url: "./bower_components/jquery/dist/jquery.js"},
            {url: "./bower_components/lodash/dist/lodash.js"},
            {url: "./bower_components/backbone/backbone.js"},
            {url: "./bower_components/pathjs/path.js"},
            {url: "./js/models/singleFlowerModel.js"},
            {url: "./js/flowerApp.js"}    
        ).then(function(){
            _.templateSettings.interpolate = /{([\s\S]+?)}/g;

            // start app?
        });

    }
    
