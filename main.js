(function () {
    "use strict";

    // define variables
    var items = document.querySelectorAll(".timeline li");

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
})();


let competencesSection = document.querySelector("#competences");
let js = document.querySelector(".js");
let php = document.querySelector(".php");
let html = document.querySelector(".html");
let css = document.querySelector(".css");
let mysql = document.querySelector(".mysql");
let bootstrap = document.querySelector(".bootstrap");
window.addEventListener('scroll', function (event) {

    if (window.scrollY >= competencesSection.offsetTop - window.screen.height) {

        js.style.animation = "js  1.5s  ease-in-out forwards"
        php.style.animation = "php  1.5s  ease-in-out forwards"
        html.style.animation = "html  1.5s  ease-in-out forwards"
        css.style.animation = "css  1.5s  ease-in-out forwards"
        mysql.style.animation = "mysql  1.5s  ease-in-out forwards"
        bootstrap.style.animation = "bootstrap  1.5s  ease-in-out forwards"
    }

})
