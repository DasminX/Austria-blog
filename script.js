"use strict"
// Nav

const homeBtn = document.querySelector(".home")

homeBtn.addEventListener("click", () => {
  window.scrollTo(0, 0)
})

// Header
const header = document.querySelector(".header")

let idx = 0
const srcArr = [
  "../images/Ośrodek Narciarsi - Ischgl.jpg",
  "../images/Ośrodek narciarski - Sölden.jpg",
  "../images/Salzburg-1.jpeg",
]

const changePhoto = () => {
  idx++
  if (idx > srcArr.length - 1) idx = 0
  header.style.backgroundImage = `url('${srcArr[idx]}')`
}

setInterval(changePhoto, 4000)
