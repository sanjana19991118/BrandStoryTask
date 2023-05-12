document.querySelectorAll(".carouselParent").forEach(carousel => {
    const items = carouselParent.querySelectorAll(".carousel");
    const arrowHtml = Array.from(items, () => {
        return `<span class="arrows-move"></span>`
    })

    carouselParent.insertAdjacentHTML("beforeend", `<div class="arrows-two">
       ${ arrowHtml.join("")}
    </div>`)

    const arrow = carouselParent.querySelectorAll(".arrows-move");

    arrow.forEach((arrow,i) => {
        arrow.addEventListener("click", () => {
            // un select the items 
            items.forEach(item => item.classList.remove("carousel-selected"))
            arrow.forEach(arrow => arrow.classList.remove("arrow-selected"))
            items[i].classList.add("carousel-selected");
            arrow[i].classList.add("arrow-selected");
        })
    })
    items[0].classList.add("carousel-selected");
    arrow[0].classList.add("arrow-selected")

})

