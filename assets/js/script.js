var myNav = document.querySelector("nav");
window.onscroll = function () { 
    "use strict";
    if (document.scrollingElement.scrollTop >= document.getElementById("main").clientHeight ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};