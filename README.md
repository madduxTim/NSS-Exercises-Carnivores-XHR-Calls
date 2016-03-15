#Carnivores

##Description 
NSS project focused on XHR calls to local JSON files. 

##Lessons learned/reinforced 
- callback functions 
- XHR calls 
- JSON structure / functionality
- string templating
- "this" functionality 

##Instructions
-Create two JSON files. One should contain an array of carnivores, and the other should contain an array of herbivores.
-Create an IIFE with the name of Predator.
-Predator should have two private arrays to store carnivores and herbivores.
-Predator should expose two public functions to load each JSON files and stores the array of animals in the appropriate private array. Each of those functions should accept one argument that will store the callback function to be executed.
-In the iife-xhr.js file, define two functions that will be executed after each type of animal is loaded to then display those animals in your DOM. Example given below.
-In the Predator IIFE, invoke the callback function, passed in from iife-xhr.js, after each file is loaded.
-Here's some code to get you started.

iife-xhr.js

function showCarnivores (carnivores) {

}

function showHerbivores () {

}

Predator.loadCarnivores(showCarnivores);
Predator.js

var Predator = (function () {
  var carnivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText);

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.

      });
    }
  }
})();