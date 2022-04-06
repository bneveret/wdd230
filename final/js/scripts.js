function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick= toggleMenu;

const lastmod = document.querySelector("#lastmod");
lastmod.textContent = `Last Modification: ${document.lastModified}`;