function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick= toggleMenu;

const lastmod = document.querySelector("#lastmod")
lastmod.textContent = "Last Modification: " + document.lastModified

const currentdate = document.querySelector("#currentdate")
const d = new Date()
month = d.getMonth() + 1
day = d.getDate()
year = d.getFullYear()
currentdate.textContent = month.toString() +'/'+ day.toString() +'/'+ year.toString()