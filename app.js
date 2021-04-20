let body = document.querySelector(".body");
let nav = document.querySelector(".navbar");
let btn = document.querySelector('.navbar--btn');
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    body.classList.toggle("body__ext");
    nav.classList.toggle('navbar__ext');
    ul.classList.toggle('navbar__ul');
})