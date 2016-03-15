"use strict"
function showCarnivores (carnivores) {
    let list = document.getElementById("carnivores-list");
    let outputString = "";
    for (let i = 0; i < carnivores.length; i++) {
        let currentCarnivore = carnivores[i];
        outputString += `<h1>${currentCarnivore.name}</h1><h3>${currentCarnivore.family}</h3>`;
        list.innerHTML = outputString;
     }
};

function showHerbivores (herbivores) {
    let list = document.getElementById("herbivores-list");
    let outputString = "";
    for (let i = 0; i < herbivores.length; i++) {
        let currentHerbivore = herbivores[i];
        outputString += `<h1>${currentHerbivore.name}</h1><h3>${currentHerbivore.family}</h3>`;
        list.innerHTML = outputString;
    }
};

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);