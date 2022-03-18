const requestURL = 'https://bneveret.github.io/wdd230/chamber/data/data.json';
const s1 = document.querySelector('#s1');
const s2 = document.querySelector('#s2');
const s3 = document.querySelector('#s3');
var count_filled = 1

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      const companies = jsonObject['companies'];
      displayAds(companies[randInt(0,2)]);
      displayAds(companies[randInt(3,4)]);
      displayAds(companies[randInt(5,6)]);
    });

    function displayAds(company) {
        let ad = document.createElement('section');
        let title = document.createElement('h2');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let site = document.createElement('p');

        title.textContent = company.name;
    
        logo.setAttribute('src', company.logourl);
        logo.setAttribute('class', 'company_logo')
    
        address.textContent = company.address;
        phone.textContent = company.phone;
        site.textContent = company.site;
        
        ad.appendChild(title);
        ad.appendChild(logo);
        ad.appendChild(address);
        ad.appendChild(phone);
        ad.appendChild(site);
    
        if (count_filled == 1) {
            s1.appendChild(ad);
            count_filled += 1;
        }
        
        else if (count_filled == 2) {
            s2.appendChild(ad);
            count_filled += 1;
        }
        
        else if (count_filled == 3) {
            s3.appendChild(ad);
            count_filled += 1;
        }
    }