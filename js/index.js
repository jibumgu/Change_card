const card = document.querySelector(".card5");
const bgafter = document.querySelector(".background-after");
const cancel = document.querySelector(".cancel");

const card1 = document.querySelector(".card1-diff");
const card2 = document.querySelector(".card2-diff");
const card3 = document.querySelector(".card3-diff");
const card4 = document.querySelector(".card4-diff");
const card5 = document.querySelector(".card5-diff");
const cardArray = [card5, card4, card3, card2, card1];

const left = document.querySelector(".left");
const right = document.querySelector(".right");

card.addEventListener("click", () => {
    bgafter.style.display = "block";
})

cancel.addEventListener("click", () => {
    bgafter.style.display = "none";
})

left.addEventListener("click", () => {
    cardArray.forEach(element => {
        if(parseInt(getComputedStyle(element).zIndex)<=1) {
            element.style.zIndex = 5;
        } else {
            element.style.zIndex = parseInt(getComputedStyle(element).zIndex) - 1;
        }
        console.log(element.style.zIndex)
    });
});

right.addEventListener("click", () => {
    cardArray.forEach(element => {
        if(parseInt(getComputedStyle(element).zIndex)>4) {
            element.style.zIndex = 1;
        } else {
            element.style.zIndex = parseInt(getComputedStyle(element).zIndex) + 1;
            console.log(element.style.zIndex)
        }
    });
});