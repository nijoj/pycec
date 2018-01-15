var myNav = document.querySelector("nav");
// window.onscroll = function () { 
//     "use strict";
//     if (document.scrollingElement.scrollTop >= document.getElementById("main").clientHeight ) {
//         myNav.classList.add("nav-colored");
//         myNav.classList.remove("nav-transparent");
//     } 
//     else {
//         myNav.classList.add("nav-transparent");
//         myNav.classList.remove("nav-colored");
//     }
// };

var last_known_scroll_position = 0;
var ticking = false;

function doSomething(scroll_pos) {
  // do something with the scroll position

  if (scroll_pos >= document.getElementById("main").clientHeight ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
}

window.addEventListener('scroll', function(e) {

  last_known_scroll_position = window.scrollY;

  if (!ticking) {

    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
     
    ticking = true;

  }
  
});