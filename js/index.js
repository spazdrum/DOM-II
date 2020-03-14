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

// Load

let firstImageBorder = 0
let assending = true
const headerImg = document.querySelector('.intro img')
headerImg.addEventListener('load', () => {
  setInterval(() => {
    headerImg.style.border = `${firstImageBorder}px solid black`
    if (assending) {
      if (firstImageBorder === 5) {
        assending = false
      }
      firstImageBorder++
    } else {
      if (firstImageBorder === 0) {
        assending = true
      }
      firstImageBorder--
    }
  }, 10)
})

//dblclick

let inverted = false
const images = document.querySelectorAll('img')
document.querySelector('body').addEventListener('dblclick', () => {
  images.forEach(
    image => (image.style.filter = !inverted ? 'invert(1)' : 'invert(0)')
  )
  inverted = inverted ? false : true
})

//select

function logSelection () {
    const log = document.querySelectorAll(".container p")
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd)
    log.textContent = `Your Selection: ${selection}`
}
const input = document.querySelector('.container p')
input.addEventListener(`select`, logSelection)

const headerSelector = document.querySelector('header')
headerSelector.addEventListener('click', () => {
  alert('header clicked')
})

// Rotate

const navItems = document.querySelectorAll('nav a')
const rotations = [...Array(navItems.length)].map(() => 30)
navItems.forEach((item, i) =>
  item.addEventListener('click', event => {
    event.stopPropagation()
    event.preventDefault()
    item.style.transform = `rotateZ(${rotations[i]}deg)`
    rotations[i] += 30
  })
)
