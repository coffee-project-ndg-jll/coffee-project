"use strict";

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h2 class="name">' + coffee.name + '</h2>';
    html += '<p class="roast">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    if (selectedRoast === "all"){
        tbody.innerHTML = renderCoffees(coffees);
    } else {
        coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'}
];

function addCoffee(o) {
    o.preventDefault();
    var newRoast = document.querySelector('#add-roast');
    var newCoffee = document.querySelector('#add-coffee');

    var appendCoffee = {};
        appendCoffee.id= coffees.length + 1;
        appendCoffee.name = newCoffee.value ;
        appendCoffee.roast = newRoast.value;

    coffees.push(appendCoffee);

    document.querySelector('#coffeeForm').reset();
}

function updateResult(query) {
    var resultList = document.querySelector("#coffees");
    resultList.innerHTML = "";
    coffees.forEach(function(object){
        query.trim().split(" ").forEach(function(word){
            if(object.name.toLowerCase().indexOf(word.toLowerCase()) !== -1){
                resultList.innerHTML += renderCoffee(object);
            }
        });
    });
}

// var reset;
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var submitButton2 = document.querySelector('#submit2');
var roastSelection = document.querySelector('#roast-selection');

roastSelection.addEventListener('change', updateCoffees);

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
submitButton2.addEventListener('click', addCoffee);

