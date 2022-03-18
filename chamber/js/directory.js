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
      companies.forEach(displayList);
  });

function displayCards(company) {
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let site = document.createElement('p');

    logo.setAttribute('src', company.logourl);
    logo.setAttribute('alt', company.name + 'logo');
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

function displayList(company) {
    let item = document.createElement('li');
    let site = document.createElement('a');
    item.textContent = `${company.name} | ${company.address} | ${company.phone} | `;
    site.setAttribute('href', company.site);
    site.textContent = company.site;
    item.appendChild(site);
    list.appendChild(item)
}

const button = document.querySelector('#view');
button.onclick= swapView;

function swapView() {
    console.log('triggered')
    if (document.querySelector('#view').classList.contains('listview')) {
        document.querySelector('#cards').classList.add('cards');
        document.querySelector('#cards').classList.remove('null');
        document.querySelector('#list').classList.add('null');
        document.querySelector('#list').classList.remove('list');
        document.querySelector('#view').classList.add('cardview');
        document.querySelector('#view').classList.remove('listview');
    }
    else {
        document.querySelector('#list').classList.add('list');
        document.querySelector('#list').classList.remove('null');
        document.querySelector('#cards').classList.add('null');
        document.querySelector('#cards').classList.remove('cards');
        document.querySelector('#view').classList.add('listview');
        document.querySelector('#view').classList.remove('cardview');
    }
}