const requestURL = 'https://bneveret.github.io/wdd230/final/data/temples.json';
const temple_page = document.querySelector('#temples');

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const temples = jsonObject["temples"];
    temples.forEach(displayCards);
})

function displayCards(temple) {
    let card = document.createElement('div');
    let name = document.createElement('h3');
    let image = document.createElement('img');
    let street = document.createElement('p');
    let city = document.createElement('p');
    let phone = document.createElement('p');
    let service = document.createElement('ul');
    let history = document.createElement('ul');
    let closing = document.createElement('ul');

    name.textContent = temple.name;
    image.setAttribute('src', temple.image);
    image.setAttribute('alt', temple.name);
    image.setAttribute('class', 'templeImg');
    street.textContent = temple.street_address;
    city.textContent = temple.city_address;
    phone.textContent = temple.phone;
    createList(service, temple.services);
    createList(history, temple.history);
    createList(closing, temple.closing_schedule);

    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(street);
    card.appendChild(city);
    card.appendChild(phone);
    card.appendChild(service);
    card.appendChild(history);
    card.appendChild(closing);
    temple_page.appendChild(card);
}

function createList(ul, jsonList) {
    for (let i=0; i < jsonList.length; i++) {
        let li = document.createElement('li');
        li.textContent = jsonList[i];
        ul.appendChild(li);
    }
}