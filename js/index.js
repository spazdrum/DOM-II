// Your code goes here
const destHover = document.querySelector(".content-destination img")
destHover.addEventListener("mouseenter", () => {
    destHover.style.transform = "scale(1.2)"
    destHover.style.transition = "all 0.3s"
})

destHover.addEventListener("mouseleave", () => {
    destHover.style.transform = "scale(1)"
})