function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick= toggleMenu;

const lastmod = document.querySelector("#lastmod");
lastmod.textContent = "Last Modification: " + document.lastModified;

const currentdate = document.querySelector("#currentdate");
const d = new Date();
var month = d.getMonth() + 1;
var day = d.getDate();
var year = d.getFullYear();
currentdate.innerHTML = month.toString() +'/'+ day.toString() +'/'+ year.toString();

const banner = document.querySelector('#banner');
var weekday = d.getDay();
if (weekday == 0 || weekday == 3 || weekday == 4 || weekday == 5 || weekday == 6){
    banner.classList.toggle("closed");
};

function pagedays() {
    var date2 = d.getTime()
    var date1 = JSON.parse(window.localStorage.getItem('date1'))
    var timeDifference = parseInt((date2 - date1)/(1000 * 3600 * 24));
    window.localStorage.setItem('date1', JSON.stringify(date2));
    document.querySelector('#days').innerHTML = 'Days Since Last Visit: ' + timeDifference;
}