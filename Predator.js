"use strict"
let Predator = (function () {
  let carnivores = [];
  let herbivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      let loader = new XMLHttpRequest();
        loader.open("GET", "carnivores.json"); 
        loader.send(); 
        loader.addEventListener("load", function () {
        carnivores = JSON.parse(this.responseText).carnivores; 
        callbackToInvoke(carnivores);  
        });
    },
    loadHerbivores: function (callbackToInvoke) {
      let loader = new XMLHttpRequest();
        loader.open("GET", "herbivores.json"); 
        loader.send();  
        loader.addEventListener("load", function () {
        herbivores = JSON.parse(this.responseText).herbivores; 
        callbackToInvoke(herbivores);  
      });
    }
}  
})();
