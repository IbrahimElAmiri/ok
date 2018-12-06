(function () {
    var name = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var k=0; k<name.length;k++) {
      var let1 = name[k].charAt(0).toLowerCase();
      if (let1 == "j") {
        byesp.speak(name[k])
      }
       else {
        hellosp.speak(name[k])
      }
    }
})();

