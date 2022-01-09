const lastmod = document.querySelector("#lastmod")
lastmod.textContent = document.lastModified

const currentyear = document.querySelector("#currentyear")
currentyear.textContent = new Date().getFullYear()