// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.


const itemsList = ["img/burro-arachidi.jpg", "img/burro.jpg", "img/pancarrè.jpg", "img/pollo.jpg", "img/yogurt.jpg"]
console.log(itemsList);

let i = 0;
const items = document.querySelector(".items-list");
const thumbs = document.querySelector(".thumbs");

while (i < itemsList.length) {
    item = itemsList[i];
    console.log(item);
    items.innerHTML += `<div class="single-item">
    <img src=${item}></div>`;
    thumbs.innerHTML += `<div class="thumb">
    <img src=${item}></div>`;
    i++;
}

const sliderItems = document.getElementsByClassName("single-item");
const sliderThumbs = document.getElementsByClassName("thumb");
let sliderPosition = 0;
sliderItems[sliderPosition].classList.add("active");
sliderThumbs[sliderPosition].classList.add("active");

const prevArr = document.querySelector(".prev-img");
const nextArr = document.querySelector(".next-img");

nextArr.addEventListener("click", function() {
    sliderItems[sliderPosition].classList.remove("active");
    sliderThumbs[sliderPosition].classList.remove("active");
    
    if (sliderPosition < itemsList.length -1) {
        sliderPosition++;
    } else {
        sliderPosition = 0;
    }

    sliderItems[sliderPosition].classList.add("active")
    sliderThumbs[sliderPosition].classList.add("active");
})

prevArr.addEventListener("click", function() {
    sliderItems[sliderPosition].classList.remove("active");
    sliderThumbs[sliderPosition].classList.remove("active");
    
    if (sliderPosition > 0) {
        sliderPosition--;
    } else {
        sliderPosition = itemsList.length - 1;
    }
    
    sliderItems[sliderPosition].classList.add("active")
    sliderThumbs[sliderPosition].classList.add("active");
})

