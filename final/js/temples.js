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
    let name = document.createElement('h2');
    let image = document.createElement('img');
    let street = document.createElement('p');
    let city = document.createElement('p');
    let phone = document.createElement('p');
    let servicetitle = document.createElement('h3');
    let service = document.createElement('ul');
    let historytitle = document.createElement('h3');
    let history = document.createElement('ul');
    let closingtitle = document.createElement('h3');
    let closing = document.createElement('ul');
    let like = document.createElement('button');

    name.textContent = temple.name;
    image.setAttribute('src', temple.image);
    image.setAttribute('alt', temple.name);
    image.setAttribute('class', 'templeImg');
    street.textContent = temple.street_address;
    city.textContent = temple.city_address;
    phone.textContent = temple.phone;
    servicetitle.textContent = 'Services:';
    createList(service, temple.services);
    historytitle.textContent = 'History:';
    createList(history, temple.history);
    closingtitle.textContent = 'Closing Schedule:';
    createList(closing, temple.closing_schedule);
    like.textContent = 'Like';
    like.onclick = toggleLike;

    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(street);
    card.appendChild(city);
    card.appendChild(phone);
    card.appendChild(servicetitle);
    card.appendChild(service);
    card.appendChild(historytitle);
    card.appendChild(history);
    card.appendChild(closingtitle);
    card.appendChild(closing);
    card.appendChild(like);
    temple_page.appendChild(card);

}

function createList(ul, jsonList) {
    for (let i=0; i < jsonList.length; i++) {
        let li = document.createElement('li');
        li.textContent = jsonList[i];
        ul.appendChild(li);
    }
}

function toggleLike() {

}