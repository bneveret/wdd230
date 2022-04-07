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
    let image_section = document.createElement('section')
    let text_section = document.createElement('section')
    let image = document.createElement('img');
    let name = document.createElement('h3');
    let summary = document.createElement('p');

    image.setAttribute('src', temple.image);
    image.setAttribute('alt', temple.name);
    name.textContent = temple.name;
    summary.textContent = temple.summary;
    image_section.appendChild(image);
    text_section.appendChild(name);
    text_section.appendChild(summary);
    highlight.appendChild(image_section);
    highlight.appendChild(text_section);
}