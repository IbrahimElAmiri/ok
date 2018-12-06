(function(window) {
    var hellosp = {};
    var speak1 = "Hello";
    hellosp.speak = function(name) {
        console.log(speak1 + " " + name);
    }
    window.hellosp = hellosp;
})(window);


