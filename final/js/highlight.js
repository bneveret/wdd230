const requestURL = 'https://bneveret.github.io/wdd230/final/data/temples.json';
highlight = document.querySelector('#summary')

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const temples = jsonObject["temples"];
    createHighlight(temples[randInt(0, temples.length-1)])
})

function createHighlight(temple) {
    let image = document.createElement('img');
    let name = document.createElement('p');
    let summary = document.createElement('p');

    image.setAttribute('src', temple.image);
    image.setAttribute('alt', temple.name);
    name.textContent = temple.name;
    summary.textContent = temple.summary;
    highlight.appendChild(image);
    highlight.appendChild(name);
    highlight.appendChild(summary);
}