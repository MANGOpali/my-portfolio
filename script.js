// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.querySelector(".nav");

// Get the offset position of the navbar

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
//typing animation script

var typed = new Typed(".typing", {
  strings: ["Developer", "Programmer", "Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
var typed = new Typed(".typing-2", {
  strings: ["Developer", "Programmer", "Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
//skills
