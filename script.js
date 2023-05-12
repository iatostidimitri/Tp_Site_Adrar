const thirdButton = document.getElementById("btn3");
thirdButton.addEventListener('click', thirdFunction);
const firstButton = document.getElementById("btn1");
firstButton.addEventListener('click', firstFunction);
const secondButton = document.getElementById("btn2");
secondButton.addEventListener('click', secondFunction);


function thirdFunction () {
    document.getElementById("hfour").textContent = "Ceci est un titre de niveau 4";
}

function firstFunction () {
    document.getElementById("htwo").textContent = "";
}

function secondFunction () {
    document.getElementById("hthree").classList.add("btn3Style");
}