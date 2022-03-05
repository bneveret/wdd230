const requestURL = 'https://bneveret.github.io/wdd230/chamber/data/data.json';
const cards = document.querySelector('#cards');
const list = document.querySelector('#list');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      const companies = jsonObject['companies'];
      companies.forEach(displayCards);
      //companies.forEach(displayList);
  });

function displayCards(company) {
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let site = document.createElement('p');

    logo.setAttribute('src', company.logourl);
    logo.setAttribute('class', 'company_logo')

    address.textContent = company.address;
    phone.textContent = company.phone;
    site.textContent = company.site;
    
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(site);

    cards.appendChild(card);
}