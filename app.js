const arrows = document.querySelectorAll(".arrow");
const arrows_left = document.querySelectorAll(".arrow_left");
const list = document.querySelectorAll(".movie-list");



arrows.forEach((arrow, i) => {
    const listLenght = list[i].querySelectorAll("img").length;
    let clickCount = 0;
    arrow.addEventListener('click', () => {
        const ratio = Math.floor(window.innerWidth / 270);
        console.log("ratio",ratio);
        clickCount++;
        if (listLenght - (4 + clickCount) + (5 - ratio) >= 0)
            list[i].style.transform = `translateX(${list[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;
        else
        {
            list[i].style.transform = "translateX(0)";
            clickCount = 0;
        }
    })

})

arrows_left.forEach((arrow, i) => {
    let value;
    arrow.addEventListener('click', () => {
        value = list[i].computedStyleMap().get("transform")[0].x.value + 300;
        clickCount = 0;
        if (value <= 300) {
            list[i].style.transform = `translateX(${value}px)`;
            if (value > 0)
                list[i].style.transform = "translateX(0)";
        }
    })
})

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container, .sidebar, .sidebar-icon, .nav-container, .container, .toggle , .toggle-ball",)

ball.addEventListener("click", () => {
    items.forEach(item => {
        item.classList.toggle("active");
    })
})

