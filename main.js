const coffeeType = document.querySelector('#coffeeType');
const submitButton = document.querySelector('#submit');
const roastSelection = document.querySelector('#roast-selection');
const search = document.querySelector('#search');

submitButton.addEventListener('click', updateCoffees);
search.addEventListener('keyup', searchBar);


function renderCoffee(coffee) {
    let coffeeType = `<div class="coffee">`;
    coffeeType += `<h3 class="coffeeHeader">${coffee.name}</h3>`;
    coffeeType += `<h3 class="coffeeRoast">${coffee.roast}</h3>`;
    coffeeType += `</div>`;

    return coffeeType;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    const selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach((coffee) => {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === 'All'){
            filteredCoffees = coffees;
        }
    });
    coffeeType.innerHTML = renderCoffees(filteredCoffees);
}

function searchBar(e) {
    let input = search.value.toUpperCase();
    let searchedCoffee = [];

    coffees.forEach((coffee) => {
        if (coffee.name.toUpperCase().indexOf(input) === 0){
            searchedCoffee.push(coffee)
        }
    });
    coffeeType.innerHTML = renderCoffees(searchedCoffee);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
const coffees = [
    {id: 1, name: 'Light City', roast: 'Light'},
    {id: 2, name: 'Half City', roast: 'Light'},
    {id: 3, name: 'Cinnamon', roast: 'Light'},
    {id: 4, name: 'City', roast: 'Medium'},
    {id: 5, name: 'American', roast: 'Medium'},
    {id: 6, name: 'Breakfast', roast: 'Medium'},
    {id: 7, name: 'High', roast: 'Dark'},
    {id: 8, name: 'Continental', roast: 'Dark'},
    {id: 9, name: 'New Orleans', roast: 'Dark'},
    {id: 10, name: 'European', roast: 'Dark'},
    {id: 11, name: 'Espresso', roast: 'Dark'},
    {id: 12, name: 'Viennese', roast: 'Dark'},
    {id: 13, name: 'Italian', roast: 'Dark'},
    {id: 14, name: 'French', roast: 'Dark'},
];

coffeeType.innerHTML = renderCoffees(coffees);



//Change the text on the button when hovered
submitButton.addEventListener("mouseover", changeText);
submitButton.addEventListener("mouseout", changeBack);

function changeText() {
  setTimeout(() => {submitButton.innerText = "Coffee Time!!!";}, 250);
}

function changeBack() {
  setTimeout(() => {submitButton.innerText = "Submit";}, 250);
}


