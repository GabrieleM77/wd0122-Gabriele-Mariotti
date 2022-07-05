// movimento carousel
let next = document.querySelector(".next");
let back = document.querySelector(".back");
let carousel = document.querySelector(".carousel_cards");
let angle = 0;

next.addEventListener("click", () => {
    angle -= 45;
    carousel.style.transform = `translateZ(-25rem) 
    rotateY(${angle}deg)`;
});

back.addEventListener("click", () => {
    angle += 45;
    carousel.style.transform = `translateZ(-25rem) 
    rotateY(${angle}deg)`;
});
