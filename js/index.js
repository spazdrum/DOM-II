// Your code goes here
const destHover = document.querySelector(".content-destination img")
destHover.addEventListener("mouseenter", () => {
    destHover.style.transform = "scale(1.2)"
    destHover.style.transition = "all 0.3s"
})

destHover.addEventListener("mouseleave", () => {
    destHover.style.transform = "scale(1)"
})

const body = document.querySelector("body");
body.addEventListener("click", () => {
  body.style.backgroundColor="#22BFC4";
})

const logoHead = document.querySelector(".main-navigation h1")
logoHead.addEventListener("click", () => {
    logoHead.style.color = "#03b00c";
})