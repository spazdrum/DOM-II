// Your code goes here

// Hover

const destHover = document.querySelector(".content-destination img")
destHover.addEventListener("mouseenter", () => {
    destHover.style.transform = "scale(1.2)"
    destHover.style.transition = "all 0.3s"
})

destHover.addEventListener("mouseleave", () => {
    destHover.style.transform = "scale(1)"
})

// Click

const body = document.querySelector("body");
body.addEventListener("click", () => {
  body.style.backgroundColor="#22BFC4";
})

const logoHead = document.querySelector(".main-navigation h1")
logoHead.addEventListener("click", () => {
    logoHead.style.color = "#03b00c";
})

// Scroll

const bodyScroll = document.querySelector('body')
let backgroundGrey = false
document.querySelector('body').addEventListener('wheel', () => {
  bodySelector.style.background = !backgroundGrey ? '#4C94C2' : '#22BFC4'
  backgroundGrey = !backgroundGrey ? true : false
})

// drag

let borderThickness = 0
const imgBorder = document.querySelector("section img")
imgBorder.addEventListener("drag", event => {
    imgBorder.style.border = `${borderThickness}px dotted red`
    borderThickness++
})
imgBorder.addEventListener('dragend', event => {
    console.log(event)
    imgBorder.style.border = ''
    borderThickness = 0
})