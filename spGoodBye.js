(function(window) {
    var byesp = {};
    var speak2 = "Good Bye";
    byesp.speak = function (name) {
        console.log(speak2 + " " + name);
    }
    window.byesp = byesp;
})(window);

